import React from "react";
import { headers } from "next/headers";

const API_URL = "/api/character-inspect";

export const revalidate = 0; // always fetch fresh data

const SLOT_ORDER = [
  "Head",
  "Neck",
  "Shoulders",
  "Back",
  "Chest",
  "Shirt",
  "Tabard",
  "Wrist",
  "Hands",
  "Waist",
  "Legs",
  "Feet",
  "Ring #1",
  "Ring #2",
  "Trinket #1",
  "Trinket #2",
  "Main hand",
  "Off hand",
  "Ranged/Idol",
];

type CharacterProfile = {
  name: string;
  level: number;
  race: string;
  class: string;
  realm: string;
  gender?: string;
  honorablekills?: number;
  achievementpoints?: number;
  equipment?: Array<
    | undefined
    | {
        item: number | string;
        name: string;
        icon: string;
      }
  >;
  professions?: Array<{ name: string; skill: number }>;
  talents?: Array<{ tree: string }>;
  error?: string;
};

async function fetchProfile(name: string): Promise<CharacterProfile | null> {
  const h = await headers();
  const host = h.get("host");
  // prefer forwarded proto if behind proxy
  const proto = h.get("x-forwarded-proto") ?? "http";
  const baseUrl = host ? `${proto}://${host}` : "";

  try {
    const res = await fetch(
      `${baseUrl}${API_URL}?name=${encodeURIComponent(name)}`,
      { cache: "no-store" }
    );
    if (!res.ok)
      return { error: `Failed to load profile (${res.status})` } as any;
    const data = (await res.json()) as CharacterProfile;
    return data;
  } catch {
    return { error: "Failed to fetch character profile" } as any;
  }
}

export default async function CharacterInspect({
  params,
}: {
  params: { name?: string };
}) {
  const name = params?.name;
  if (!name) return <div>Missing character name in URL.</div>;

  const profile = await fetchProfile(name);
  if (!profile) return <div>Character not found.</div>;
  if (profile.error) return <div style={{ color: "red" }}>{profile.error}</div>;

  const equipment = profile.equipment || [];
  const professions = profile.professions || [];
  const talents = profile.talents || [];

  // Build absolute base URL for internal API calls
  const reqHeaders = await headers();
  const host = reqHeaders.get("host");
  const proto = reqHeaders.get("x-forwarded-proto") ?? "http";
  const baseUrl = host ? `${proto}://${host}` : "";

  // Fetch icon filenames for each equipped item (server-side, in parallel)
  const iconByIndex: Array<string | null> = await Promise.all(
    SLOT_ORDER.map(async (_slot, idx) => {
      const it = equipment[idx] as any;
      if (!it) return null;
      const id = String(it.item ?? "");
      if (!/^\d+$/.test(id)) return null;
      try {
        const res = await fetch(`${baseUrl}/api/getItemImageUrl/${id}`);
        if (!res.ok) return null;
        const data = (await res.json()) as { icon?: string; error?: string };
        return data.icon ?? null;
      } catch {
        return null;
      }
    })
  );

  return (
    <div
      style={{
        maxWidth: 900,
        margin: "0 auto",
        padding: 32,
        color: "white",
        backgroundColor: "#1a1a1a",
      }}
    >
      <h1>{profile.name}</h1>
      <h2>
        Level {profile.level} {profile.race} {profile.class}, {profile.realm}
      </h2>
      <div style={{ display: "flex", gap: 32 }}>
        {/* Gear */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "8px",
              background: "rgba(0,0,0,0.3)",
              borderRadius: 12,
              padding: 16,
            }}
          >
            {SLOT_ORDER.map((slot, idx) => {
              const item = equipment[idx] as any;
              return (
                <div
                  key={slot}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 8,
                    minWidth: 160,
                  }}
                >
                  <div
                    style={{
                      minWidth: 80,
                      fontWeight: "bold",
                      background: "#222",
                      color: "white",
                      borderRadius: 4,
                      padding: "4px 8px",
                      marginRight: 8,
                      textAlign: "right",
                    }}
                  >
                    {slot}
                  </div>
                  {item ? (
                    <div style={{ position: "relative" }}>
                      <a
                        href={`http://wotlk.cavernoftime.com/item=${item.item}`}
                        target="_blank"
                      >
                        {iconByIndex[idx] ? (
                          <img
                            alt={item.name}
                            src={`https://wow.zamimg.com/images/wow/icons/large/${iconByIndex[idx]}.jpg`}
                            style={{
                              width: 48,
                              height: 48,
                              borderRadius: 4,
                              border: "1px solid #444",
                              marginLeft: 8,
                            }}
                          />
                        ) : null}
                      </a>
                    </div>
                  ) : (
                    <div style={{ color: "#888" }}>No item</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        {/* Player Info */}
        <div style={{ flex: 1 }}>
          <h3>Player Information</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>Player name: {profile.name}</li>
            <li>Race: {profile.race}</li>
            <li>Class: {profile.class}</li>
            <li>Level: {profile.level}</li>
            <li>Gender: {profile.gender}</li>
            <li>Honorable Kills: {profile.honorablekills}</li>
            <li>Achievements: {profile.achievementpoints}</li>
            <li>
              Professions:{" "}
              {professions.map((p: any) => `${p.name} (${p.skill})`).join(", ")}
            </li>
            <li>
              Specializations: {talents.map((t: any) => t.tree).join(", ")}
            </li>
          </ul>
        </div>
        {/* Model Viewer (iframe) */}
        <div style={{ flex: 1 }}>
          <h3>Model Viewer</h3>
          <iframe
            scrolling="no"
            src={`http://armory.warmane.com/character/${profile.name}/Icecrown/profile`}
            style={{ border: 0, height: 400, width: "100%", borderRadius: 8 }}
            title="Model Viewer"
          />
        </div>
      </div>
    </div>
  );
}
