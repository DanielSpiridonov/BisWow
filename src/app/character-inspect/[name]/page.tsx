"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const API_URL = "/api/character-inspect";

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

export default function CharacterInspect() {
  const params = useParams();
  const name = params?.name;
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!name) return;
    setLoading(true);
    fetch(`${API_URL}?name=${encodeURIComponent(name as string)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) setError(data.error);
        else setProfile(data);
      })
      .catch(() => setError("Failed to fetch character profile"))
      .finally(() => setLoading(false));
  }, [name]);

  if (!name) return <div>Missing character name in URL.</div>;
  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;
  if (!profile) return null;

  const equipment = profile.equipment || [];
  const professions = profile.professions || [];
  const talents = profile.talents || [];

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
          <h3>Gear</h3>
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
            {SLOT_ORDER.map(async (slot, idx) => {
              const item = equipment[idx];
              const image = await fetch(`/api/getItemImageUrl/${item.item}`);
              const imageURL = (await image.json()).icon;

              // alert(JSON.stringify(item));

              return (
                <div
                  key={slot}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 8,
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
                  {/* {JSON.stringify(item)} */}
                  {item ? (
                    <div style={{ position: "relative" }}>
                      {/* <img
                        src={`http://wotlk.cavernoftime.com/item=19019`}
                        alt={item.name}
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: 4,
                          border: "1px solid #444",
                          cursor: "pointer",
                        }}
                        onError={(e) => {
                          console.log(
                            `Failed to load image for item ${item.item}:`,
                            item
                          );
                          e.currentTarget.style.display = "none";
                        }}
                        onLoad={() => {
                          console.log(
                            `Successfully loaded image for item ${item.item}`
                          );
                        }}
                      /> */}
                      <a
                        href={`http://wotlk.cavernoftime.com/item=${item.item}`}
                      >
                        {item.name}
                        <img
                          src={`https://wow.zamimg.com/images/wow/icons/large/${item.icon}.jpg`}
                        />
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
