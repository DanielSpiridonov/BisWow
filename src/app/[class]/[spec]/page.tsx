import Link from "next/link";
import { headers } from "next/headers";
import StarRating from "@/components/ui/StarRating";
import BuildNavDropdown from "@/components/BuildNavDropdown";
import ClassSpecNav from "@/components/ClassSpecNav";

const CLASS_SPECS: Record<string, string[]> = {
  "death-knight": ["blood", "frost", "unholy"],
  druid: ["balance", "feral-dps", "feral-tank", "resto"],
  hunter: ["beast-mastery", "marksmanship", "survival"],
  mage: ["arcane", "fire", "frost"],
  paladin: ["holy", "prot", "retri"],
  priest: ["disco", "holy", "shadow"],
  rogue: ["assassination", "combat"],
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
  ele: "Elemental",
  enha: "Enhancement",
  affliction: "Affliction",
  demo: "Demonology",
  destruction: "Destruction",
  arms: "Arms",
  fury: "Fury",
  protection: "Protection",
};

// Removed unused toTitle helper.

export default async function ClassesSpecsView({
  params,
}: {
  params: { class: string; spec: string };
}) {
  console.log(params.class);
  console.log(params.spec);

  const headerList = await headers();
  const host = headerList.get("x-forwarded-host") ?? headerList.get("host");
  const protocol =
    headerList.get("x-forwarded-proto") ??
    (process.env.NODE_ENV === "development" ? "http" : "https");
  const apiUrl = host
    ? `${protocol}://${host}/api/specs/${params.class}/${params.spec}`
    : `/api/specs/${params.class}/${params.spec}`;

  const data = await fetch(apiUrl);
  if (!data.ok) {
    return <div className=" text-white">Build not found!</div>;
  }
  const buildInfo = await data.json();
  return (
    <div className="flex flex-row space-x-20 justify-center px-10 height-full max-[600px]:flex-col max-[600px]:space-x-0 max-[600px]:space-y-6 max-[600px]:px-4">
      {/* Desktop sidebar (hidden on <=600px) */}
      <div
        className="text-white w-50 sticky top-30 mt-30 bg-[#262626] gap-1 px-5 py-5 rounded-2xl drop-shadow-xl h-full overflow-y-auto max-[600px]:hidden"
        style={{ zIndex: 10 }}
      >
        <ClassSpecNav
          classSpecs={CLASS_SPECS}
          classLabels={CLASS_LABELS}
          specLabels={SPEC_LABELS}
          activeClass={params.class}
          activeSpec={params.spec}
        />
      </div>
      {/* Mobile dropdown (only on <=600px) */}
      <div className="hidden max-[600px]:block mt-2">
        <BuildNavDropdown
          classSpecs={CLASS_SPECS}
          classLabels={CLASS_LABELS}
          specLabels={SPEC_LABELS}
          activeClass={params.class}
          activeSpec={params.spec}
        />
      </div>
      <div className="text-white w-200 mt-10 bg-[#262626] px-6 py-7 rounded-2xl drop-shadow-xl h-full mb-20 max-[600px]:w-full max-[600px]:mt-2">
        <span className="font-bold text-xl text-white ">
          {buildInfo.buildName}
        </span>
        <div
          className="p-5 text-white-200"
          dangerouslySetInnerHTML={{
            __html: buildInfo.description.replaceAll(
              "<a",
              '<a class="inline-flex px-1 flex-row w-fit" '
            ),
          }}
        />

        <span className="font-bold text-xl text-white ">
          {buildInfo.buildTree}
        </span>
        {/* Simple Gear Slots Box */}
        <div className="mt-8 m-auto w-full">
          <h2 className="font-bold text-xl text-white mb-3">Best in Slot</h2>
          <div className="rounded-xl border border-zinc-700/70 bg-zinc-800/50 overflow-hidden">
            {/*
              On desktop: pair repeating slots (e.g., Ring 1/2, Trinket 1/2)
              side-by-side. On mobile (<=600px), keep stacked layout.
            */}
            {(() => {
              // Preserve original order while pairing ring/trinket slots when adjacent
              type Row =
                | { type: "single"; data: any }
                | { type: "pair"; data: [any, any] };
              const gear = (buildInfo.gear || []) as Array<any>;
              const rows: Row[] = [];

              const baseKey = (slot: string) => {
                const m = slot.match(/^([A-Za-z\s-]+)\s*(\d+)$/);
                if (m) return m[1].trim().toLowerCase();
                return slot.trim().toLowerCase();
              };
              const isRepeatable = (slot: string) => {
                const key = baseKey(slot);
                return key === "ring" || key === "trinket";
              };

              for (let i = 0; i < gear.length; i++) {
                const current = gear[i];
                const next = gear[i + 1];
                if (
                  next &&
                  isRepeatable(current.slot) &&
                  isRepeatable(next.slot) &&
                  baseKey(current.slot) === baseKey(next.slot)
                ) {
                  // Pair current and next, keep their order
                  rows.push({ type: "pair", data: [current, next] });
                  i++; // Skip the next as it is paired
                } else {
                  rows.push({ type: "single", data: current });
                }
              }

              return (
                <ul className="divide-y divide-zinc-700/60 ">
                  {rows.map((row, idx) => {
                    if (row.type === "single") {
                      const slotObj = row.data as any;
                      const primary = slotObj.items?.[0];
                      return (
                        <li
                          key={`${slotObj.slot}-${idx}`}
                          className="flex flex-col font-semibold pl-3 pt-2 text-lg text-white hover:bg-zinc-700/40 transition-colors"
                        >
                          <span className="text-m text-white flex-shrink-0 flex flex-col w-fit">
                            {slotObj.slot}
                          </span>
                          {primary ? (
                            <details className="group">
                              <summary className="flex items-center justify-between cursor-pointer list-none select-none px-2 py-1">
                                <span className="text-amber-300 truncate w-full flex flex-col">
                                  {primary.html ? (
                                    <span
                                      className="max-w-full truncate pb-2 [&_img]:inline-block [&_img]:mr-1 flex flex-row"
                                      dangerouslySetInnerHTML={{
                                        __html: primary.html,
                                      }}
                                    />
                                  ) : (
                                    primary.name
                                  )}
                                </span>
                                <svg
                                  className="h-4 w-4 text-white transition-transform group-open:rotate-90"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M7.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L12.586 10 7.293 4.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </summary>
                              <div className="mt-2 mb-3 text-sm text-zinc-200 border border-zinc-700/60 rounded-md p-3 bg-zinc-800/40 w-90% self-start max-w-[95%]">
                                {primary.source ? (
                                  <div>Found in {primary.source}</div>
                                ) : (
                                  <div>
                                    Open the item link for drop/location
                                    details.
                                  </div>
                                )}
                              </div>
                            </details>
                          ) : (
                            <span className="text-amber-300">-</span>
                          )}
                        </li>
                      );
                    }

                    // Pair row: two columns on desktop, stacked on mobile
                    const pair = row.data as any[];
                    const left = pair[0];
                    const right = pair[1];
                    const leftPrimary = left.items?.[0];
                    const rightPrimary = right.items?.[0];
                    return (
                      <li
                        key={`pair-${left.slot}-${right.slot}-${idx}`}
                        className="pl-3 pt-2 text-white hover:bg-zinc-700/40 transition-colors"
                      >
                        <div className="grid grid-cols-2 gap-6 max-[600px]:grid-cols-1">
                          {/* Left item */}
                          <div className="flex flex-col font-semibold text-lg">
                            <span className="text-m text-white flex-shrink-0 w-fit">
                              {left.slot}
                            </span>
                            {leftPrimary ? (
                              <details className="group">
                                <summary className="flex items-center justify-between cursor-pointer list-none select-none">
                                  <span className="text-amber-300 truncate w-full flex flex-col">
                                    {leftPrimary.html ? (
                                      <span
                                        className="max-w-full truncate pb-2 [&_img]:inline-block [&_img]:mr-1 flex flex-row"
                                        dangerouslySetInnerHTML={{
                                          __html: leftPrimary.html,
                                        }}
                                      />
                                    ) : (
                                      leftPrimary.name
                                    )}
                                  </span>
                                  <svg
                                    className="h-4 w-4 text-white transition-transform group-open:rotate-90 "
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M7.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L12.586 10 7.293 4.707a1 1 0 010-1.414z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </summary>
                                <div className="mt-2 mb-3 text-sm text-zinc-200 border border-zinc-700/60 rounded-md p-3 bg-zinc-800/40 w-fit self-start max-w-[95%]">
                                  {leftPrimary.source ? (
                                    <div>Found in {leftPrimary.source}</div>
                                  ) : (
                                    <div>
                                      Open the item link for drop/location
                                      details.
                                    </div>
                                  )}
                                </div>
                              </details>
                            ) : (
                              <span className="text-amber-300">-</span>
                            )}
                          </div>

                          {/* Right item */}
                          <div className="flex flex-col font-semibold text-lg">
                            <span className="text-m text-white flex-shrink-0 w-fit">
                              {right.slot}
                            </span>
                            {rightPrimary ? (
                              <details className="group">
                                <summary className="flex items-center justify-between cursor-pointer list-none select-none px-2 py-1">
                                  <span className="text-amber-300 truncate w-full flex flex-col">
                                    {rightPrimary.html ? (
                                      <span
                                        className="max-w-full truncate pb-2 [&_img]:inline-block [&_img]:mr-1 flex flex-row"
                                        dangerouslySetInnerHTML={{
                                          __html: rightPrimary.html,
                                        }}
                                      />
                                    ) : (
                                      rightPrimary.name
                                    )}
                                  </span>
                                  <svg
                                    className="h-4 w-4 text-white transition-transform group-open:rotate-90"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M7.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L12.586 10 7.293 4.707a1 1 0 010-1.414z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </summary>
                                <div className="mt-2 mb-3 text-sm text-zinc-200 border border-zinc-700/60 rounded-md p-3 bg-zinc-800/40 w-fit self-start max-w-[95%]">
                                  {rightPrimary.source ? (
                                    <div>Found in {rightPrimary.source}</div>
                                  ) : (
                                    <div>
                                      Open the item link for drop/location
                                      details.
                                    </div>
                                  )}
                                </div>
                              </details>
                            ) : (
                              <span className="text-amber-300">-</span>
                            )}
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              );
            })()}
          </div>
          {/* Gems Box */}
          <div className="mt-8">
            <div className="rounded-xl border border-zinc-700/70 bg-zinc-800/50 overflow-hidden">
              <div className="px-4 py-3 border-b border-zinc-700/60">
                <h2 className="font-bold text-lg text-white">
                  {buildInfo.GemsTitle}
                </h2>
              </div>
              <div className="px-4 py-4 text-white/90 leading-relaxed">
                {typeof buildInfo.GemsDesc === "string" ? (
                  <div
                    className="prose prose-invert max-w-none [&_a]:text-amber-300 [&_a:hover]:underline [&_a]:underline-offset-2"
                    dangerouslySetInnerHTML={{
                      __html: buildInfo.GemsDesc.replaceAll(
                        "<a",
                        '<a class="inline-flex px-1"'
                      ),
                    }}
                  />
                ) : (
                  <div className="text-white">-</div>
                )}
              </div>
            </div>
          </div>

          {/* Enchantments Box */}
          <div className="mt-8">
            <div className="rounded-xl border border-zinc-700/70 bg-zinc-800/50 overflow-hidden">
              <div className="px-4 py-3 border-b border-zinc-700/60">
                <h2 className="font-bold text-lg text-white">
                  {buildInfo.EnchantmentsTitle}
                </h2>
              </div>
              <div className=" text-white/90 leading-relaxed">
                {Array.isArray(buildInfo.EnchantmentsDesc) ? (
                  <div className=" n">
                    <ul className="divide-y divide-zinc-700/60">
                      {(buildInfo.EnchantmentsDesc || []).map(
                        (slotObj: any) => {
                          const primary = slotObj.items?.[0];
                          return (
                            <li
                              key={slotObj.slot}
                              className="flex pl-3 pt-2  text-white"
                            >
                              <span className=" text-white flex-shrink-0 flex flex-col w-fit h-fit ">
                                {slotObj.slot}
                              </span>
                              <span className="truncate w-full flex  ">
                                {primary ? (
                                  primary.html ? (
                                    <span
                                      className="max-w-full truncate pb-2 [&_img]:inline-block [&_img]:mr-1 flex flex-wrap flex-row"
                                      dangerouslySetInnerHTML={{
                                        __html: primary.html,
                                      }}
                                    />
                                  ) : (
                                    primary.name
                                  )
                                ) : (
                                  "-"
                                )}
                              </span>
                            </li>
                          );
                        }
                      )}
                    </ul>
                  </div>
                ) : typeof buildInfo.EnchantmentsDesc === "string" ? (
                  <div
                    className="prose prose-invert max-w-none [&_a]:text-amber-300 [&_a:hover]:underline [&_a]:underline-offset-2"
                    dangerouslySetInnerHTML={{
                      __html: buildInfo.EnchantmentsDesc.replaceAll(
                        "<a",
                        '<a class="inline-flex px-1"'
                      ),
                    }}
                  />
                ) : (
                  <div className="text-white">-</div>
                )}
              </div>
            </div>
          </div>
          {/* Data driven from API: buildInfo.gear (array of { slot, items: [{id,name,...}] }) */}
        </div>
      </div>
      <div className="text-white w-fit h-fit sticky top-30 mt-30 bg-[#262626] px-5 py-5 rounded-2xl drop-shadow-xl max-[600px]:w-full max-[600px]:static max-[600px]:mt-2">
        {/* Rating Box */}
        {/* Client component renders the interactive stars */}
        <div className="flex flex-col gap-3">
          <span className="font-semibold text-m">Rate this build</span>
          {/* Importing client component */}
          <StarRating
            className="mt-1"
            label="Your rating"
            storageKey={`rating:${params.class}:${params.spec}`}
          />
          <p className="text-xs text-zinc-400">
            Click a star to set your rating.
          </p>
        </div>
      </div>
    </div>
  );
}
