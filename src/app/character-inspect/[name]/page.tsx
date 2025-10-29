import React from "react";
import { headers } from "next/headers";
import ClassSpecNav from "@/components/ClassSpecNav";
import { fetchProfileAPI } from "@/app/api/character-inspect/route";

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

// Index-based grouping (strict positional mapping)
const LEFT_INDEXES = [0, 1, 2, 3, 4, 5, 6, 7] as const;
const RIGHT_INDEXES = [8, 9, 10, 11, 12, 13, 14, 15] as const;
const BOTTOM_INDEXES = [16, 17, 18] as const;

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
  // Prefer forwarded proto if behind proxy; default to http for local dev
  const proto = h.get("x-forwarded-proto") ?? "https";
  const baseUrl = host ? `${proto}://${host}` : "";

  // console.log(
  //   `fetching: https://bis-wow-git-main-dani123312s-projects.vercel.app/api/character-inspect?name=${encodeURIComponent(
  //     name
  //   )}`
  // // );
  // const res = await fetch(
  //   `https://bis-wow-git-main-dani123312s-projects.vercel.app/api/character-inspect?name=${encodeURIComponent(
  //     name
  //   )}`,
  //   {
  //     cache: "no-store",
  //   }
  // );
  // if (!res.ok)
  //   return { error: `Failed to load profile (${res.status})` } as any;
  // const data = (await res.json()) as CharacterProfile;
  const data = (await fetchProfileAPI({ name })) as CharacterProfile;
  return data;
}

export default async function CharacterInspect({
  params,
}: {
  params: {
    class: string | undefined;
    spec: string | undefined;
    name?: string;
  };
}) {
  const name = params?.name;
  if (!name) return <div>Missing character name in URL.</div>;

  const profile = await fetchProfile(name);
  if (!profile) return <div>Character not found.</div>;
  if (profile.error) return <div style={{ color: "red" }}>{profile.error}</div>;

  const equipment = profile.equipment || [];
  const professions = profile.professions || [];
  const talents = profile.talents || [];

  // Build navigation data (same as builds pages)
  const CLASS_SPECS: Record<string, string[]> = {
    "death-knight": ["blood", "frost", "unholy"],
    druid: ["balance", "feral-dps", "feral-tank", "resto"],
    hunter: ["beast-mastery", "marksmanship", "survival"],
    mage: ["arcane", "fire", "frost"],
    paladin: ["holy", "prot", "retri"],
    priest: ["disco", "holy", "shadow"],
    rogue: ["assassination", "combat", "subtlety"],
    shaman: ["ele", "enha", "resto"],
    warlock: ["affliction", "demo", "destruction"],
    warrior: ["arms", "fury", "protection"],
  };
  const CLASS_LABELS: Record<string, string> = {
    "death-knight": "Death Knight",
    druid: "Druid",
    hunter: "Hunter",
    mage: "Mage",
    paladin: "Paladin",
    priest: "Priest",
    rogue: "Rogue",
    shaman: "Shaman",
    warlock: "Warlock",
    warrior: "Warrior",
  };
  const SPEC_LABELS: Record<string, string> = {
    blood: "Blood",
    frost: "Frost",
    unholy: "Unholy",
    balance: "Balance",
    "feral-dps": "Feral (DPS)",
    "feral-tank": "Feral (Tank)",
    resto: "Restoration",
    "beast-mastery": "Beast Mastery",
    marksmanship: "Marksmanship",
    survival: "Survival",
    arcane: "Arcane",
    fire: "Fire",
    holy: "Holy",
    prot: "Protection",
    retri: "Retribution",
    disco: "Discipline",
    shadow: "Shadow",
    assassination: "Assassination",
    combat: "Combat",
    subtlety: "Subtlety",
    ele: "Elemental",
    enha: "Enhancement",
    affliction: "Affliction",
    demo: "Demonology",
    destruction: "Destruction",
    arms: "Arms",
    fury: "Fury",
    protection: "Protection",
  };

  const normalizeClassKey = (cls?: string) => {
    if (!cls) return undefined;
    const c = cls.trim().toLowerCase();
    if (c === "death knight" || c === "deathknight") return "death-knight";
    return c as keyof typeof CLASS_SPECS as string;
  };
  const activeClassKey = normalizeClassKey(profile.class);

  // Build absolute base URL for internal API calls
  const reqHeaders = await headers();
  const host = reqHeaders.get("host");
  const proto = reqHeaders.get("x-forwarded-proto") ?? "http";
  const baseUrl = host ? `${proto}://${host}` : "";

  // Normalize Wowhead inventorySlot labels and map to our display indices
  const normalizeSlot = (s: string) =>
    s
      .toLowerCase()
      .replace(/held in\s+/g, "")
      .replace(/[-_]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();

  const SLOT_MAP: Record<string, number> = {
    // Armor
    head: 0,
    neck: 1,
    shoulder: 2,
    shoulders: 2,
    back: 3,
    chest: 4,
    shirt: 5,
    tabard: 6,
    wrist: 7,
    hands: 8,
    gloves: 8,
    waist: 9,
    belt: 9,
    legs: 10,
    feet: 11,
    boots: 11,
    // Jewelry
    finger: 12, // handled as ring #1/#2 via placement helper
    ring: 12,
    trinket: 14, // handled as trinket #1/#2 via placement helper
    // Weapons / Off-hands
    "main hand": 16,
    "off hand": 17,
    offhand: 17,
    shield: 17,
    "two hand": 16, // display in main hand
    "one hand": 16, // prefer main hand, then off hand (handled below)
    // Ranged / relics
    ranged: 18,
    "ranged weapon": 18,
    idol: 18,
    relic: 18,
    wand: 18,
    thrown: 18,
    totem: 18,
    libram: 18,
    sigil: 18,
    "ranged/ idol": 18, // safety for normalization
  };

  // Prepare arrays by target slot index, filled with nulls
  const equipmentBySlot: Array<any | null> = Array(SLOT_ORDER.length).fill(
    null
  );
  const iconBySlot: Array<string | null> = Array(SLOT_ORDER.length).fill(null);

  // Helper to place a ring or trinket into first available slot
  const placeIntoFirstAvailable = (
    indices: number[],
    item: any,
    icon: string | null
  ) => {
    for (const idx of indices) {
      if (!equipmentBySlot[idx]) {
        equipmentBySlot[idx] = item;
        iconBySlot[idx] = icon;
        return true;
      }
    }
    return false;
  };

  // Fetch icon+slot for each equipped item and place into target slot index
  await Promise.all(
    equipment.map(async (it: any) => {
      if (!it) return;
      const id = String(it.item ?? "");
      if (!/^\d+$/.test(id)) return;
      try {
        const res = await fetch(`${baseUrl}/api/getItemImageUrl/${id}`);
        if (!res.ok) return;
        const data = (await res.json()) as {
          icon?: string;
          slot?: string;
          error?: string;
        };
        const icon = data.icon ?? null;
        const rawSlot = (data.slot || "").trim();
        const normSlot = normalizeSlot(rawSlot);

        // Determine target index
        let targetIdx: number | undefined = SLOT_MAP[normSlot];

        // Handle Fingers/Trinkets generically if only generic label provided
        if (normSlot === "finger" || normSlot === "ring") {
          if (!placeIntoFirstAvailable([12, 13], it, icon)) {
            // both occupied; leave unplaced
          }
          return;
        }
        if (normSlot === "trinket") {
          if (!placeIntoFirstAvailable([14, 15], it, icon)) {
            // both occupied; leave unplaced
          }
          return;
        }

        // One-hand can be either main or off hand
        if (normSlot === "one hand") {
          if (!placeIntoFirstAvailable([16, 17], it, icon)) {
            // both occupied
          }
          return;
        }

        if (typeof targetIdx === "number") {
          // If occupied (e.g., duplicate main hand), prefer first empty related
          if (targetIdx === 12 || targetIdx === 13) {
            placeIntoFirstAvailable([12, 13], it, icon);
          } else if (targetIdx === 14 || targetIdx === 15) {
            placeIntoFirstAvailable([14, 15], it, icon);
          } else if (!equipmentBySlot[targetIdx]) {
            equipmentBySlot[targetIdx] = it;
            iconBySlot[targetIdx] = icon;
          }
          return;
        }

        // Fallback: unknown slot labels can be ignored or logged for debugging
      } catch {
        // ignore failures for individual items
      }
    })
  );

  // Utility to render a single slot row by index (strict positional mapping)
  const renderRowByIndex = (
    idx: number,
    opts?: { reverse?: boolean; stack?: boolean }
  ) => {
    const item = equipmentBySlot[idx] as any;
    const slot = SLOT_ORDER[idx];
    const isReverse = !!opts?.reverse;
    const isStack = !!opts?.stack;
    const itemMarginStyle = isStack
      ? {}
      : isReverse
      ? { marginRight: 7 }
      : { marginLeft: 7 };
    const placeholderStyle: React.CSSProperties = {
      width: 44,
      height: 44,
      borderRadius: 4,
      border: "1px solid #444",
      background: "#000",
      ...itemMarginStyle,
    };
    return (
      <div
        key={slot}
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: 7,
          minWidth: 150,
          flexDirection: isStack ? "column" : isReverse ? "row-reverse" : "row",
        }}
      >
        {isStack ? (
          // Stack: image first, then label underneath
          <>
            {item ? (
              <div style={{ position: "relative" }}>
                <a
                  href={`https://wotlk.cavernoftime.com/item=${item.item}`}
                  target="_blank"
                >
                  {iconBySlot[idx] ? (
                    <img
                      alt={item.name}
                      src={`https://wow.zamimg.com/images/wow/icons/large/${iconBySlot[idx]}.jpg`}
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 4,
                        border: "1px solid #444",
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        ...placeholderStyle,
                        marginLeft: 0,
                        marginRight: 0,
                      }}
                    />
                  )}
                </a>
              </div>
            ) : (
              <div
                style={{ ...placeholderStyle, marginLeft: 0, marginRight: 0 }}
              />
            )}
            <div
              style={{
                minWidth: 82,
                fontWeight: "bold",
                background: "#222",
                color: "white",
                borderRadius: 4,
                padding: "2px 5px",
                marginTop: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              {slot}
            </div>
          </>
        ) : (
          // Row or row-reverse (label beside image)
          <>
            <div
              style={{
                minWidth: 82,
                fontWeight: "bold",
                background: "#222",
                color: "white",
                borderRadius: 4,
                padding: "2px 5px",
                marginRight: isReverse ? 0 : 8,
                marginLeft: isReverse ? 8 : 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              {slot}
            </div>
            {item ? (
              <div style={{ position: "relative" }}>
                <a
                  href={`https://wotlk.cavernoftime.com/item=${item.item}&ench=3604&gems=3525:0:0`}
                  target="_blank"
                >
                  {iconBySlot[idx] ? (
                    <img
                      alt={item.name}
                      src={`https://wow.zamimg.com/images/wow/icons/large/${iconBySlot[idx]}.jpg`}
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 4,
                        border: "1px solid #444",
                        ...itemMarginStyle,
                      }}
                    />
                  ) : (
                    <div style={placeholderStyle} />
                  )}
                </a>
              </div>
            ) : (
              <div style={placeholderStyle} />
            )}
          </>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-row w-fit space-x-18 mx-auto items-start justify-center  overflow-y-hidden">
      {/* Left navigation sidebar */}
      {/* <div
        className="text-white w-50 bg-[#262626] px-5 py-5 rounded-2xl drop-shadow-xl h-full mt-5  overflow-y-hidden"
        style={{ zIndex: 10 }}
      >
        <ClassSpecNav
          classSpecs={CLASS_SPECS}
          classLabels={CLASS_LABELS}
          specLabels={SPEC_LABELS}
          activeClass={params.class}
          activeSpec={params.spec}
        />
      </div> */}

      {/* Right content card */}
      <div className="text-white min-w-130 bg-[#262626] px-5 py-6 rounded-2xl drop-shadow-xl scale-95 ">
        <div style={{ display: "flex", gap: 28 }}>
          {/* Gear */}
          <div style={{ flex: 1 }}>
            <div
              style={{
                background: "rgba(0,0,0,0.3)",
                borderRadius: 12,
                padding: 14,
              }}
            >
              <div style={{ display: "flex", gap: 14 }}>
                <div style={{ flex: 1 }}>
                  {LEFT_INDEXES.map((i) => renderRowByIndex(i))}
                </div>
                <div style={{ flex: 1 }}>
                  {RIGHT_INDEXES.map((i) =>
                    renderRowByIndex(i, { reverse: true })
                  )}
                </div>
              </div>
              <div style={{ display: "flex", gap: 14, marginTop: 10 }}>
                {/* Main hand */}
                {renderRowByIndex(16, { reverse: false })}
                {/* Off hand */}
                {renderRowByIndex(17, { stack: true })}
                {/* Ranged/Idol */}
                {renderRowByIndex(18, { reverse: true })}
              </div>
            </div>
          </div>

          {/* Player Info */}
          <div
            className="bg-[#222] h-fit p-4 border mt-4 border-purple-700 shadow-lg rounded-xl flex flex-col items-center justify-center"
            style={{
              flex: 1,
              display: "flex",
              alignItems: "start",
              justifyContent: "start",
            }}
          >
            <h3 className="text-lg font-bold">Player Information</h3>
            <br />
            <ul className="text-base">
              <li>Player name: {profile.name}</li>
              <li>Race: {profile.race}</li>
              <li>Class: {profile.class}</li>
              <li>Level: {profile.level}</li>
              <li>Gender: {profile.gender}</li>
              <li>Honorable Kills: {profile.honorablekills}</li>
              <li>Achievement points: {profile.achievementpoints}</li>
              <li>
                Professions:{" "}
                {professions
                  .map((p: any) => `${p.name} (${p.skill})`)
                  .join(", ")}
              </li>
              <li>
                Specializations: {talents.map((t: any) => t.tree).join(", ")}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
