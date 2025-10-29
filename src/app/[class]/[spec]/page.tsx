import Link from "next/link";
import { headers } from "next/headers";
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

function toTitle(text: string) {
  return text
    .split("-")
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");
}

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
    <div className="flex flex-row space-x-20 justify-center px-10 height-full ">
      <div
        className="text-white w-50 sticky top-30 mt-30  bg-[#262626] gap-1 px-5 py-5 rounded-2xl drop-shadow-xl h-full overflow-y-auto"
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
      <div className="text-white w-200 mt-10 bg-[#262626] px-6 py-7 rounded-2xl drop-shadow-xl h-full mb-20 ">
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
        <div className="mt-8 m-auto w-160">
          <h2 className="font-bold text-lg text-white mb-3">Best in Slot</h2>
          <div className="rounded-xl border border-zinc-700/70 bg-zinc-800/50 overflow-hidden">
            <ul className="divide-y divide-zinc-700/60 ">
              {(buildInfo.gear || []).map((slotObj: any) => {
                const primary = slotObj.items?.[0];
                return (
                  <li
                    key={slotObj.slot}
                    className="flex flex-col font-semibold pl-3 pt-2 text-lg text-white hover:bg-zinc-700/40 transition-colors"
                  >
                    <span className="text-m text-white  flex-shrink-0 lex flex-col w-fit">
                      {slotObj.slot}
                    </span>
                    <span className="text-amber-300 truncate w-full flex flex-col">
                      {primary ? (
                        primary.html ? (
                          <span
                            className=" max-w-full truncate pb-2 [&_img]:inline-block [&_img]:mr-1 flex flex-row"
                            dangerouslySetInnerHTML={{ __html: primary.html }}
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
              })}
            </ul>
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
      <div
        className="text-white w-60 sticky top-30 mt-30 bg-[#262626] px-5 py-5 rounded-2xl drop-shadow-xl h-50"
        style={{ zIndex: 10 }}
      ></div>
    </div>
  );
}
