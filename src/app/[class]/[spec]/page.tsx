export default async function ClassesSpecsView({
  params,
}: {
  params: { class: string; spec: string };
}) {
  console.log(params.class);
  console.log(params.spec);

  const data = await fetch(
    `http://localhost:3000/api/specs/${params.class}/${params.spec}`
  );
  if (!data.ok) {
    return <div className=" text-white">Build not found!</div>;
  }
  const buildInfo = await data.json();
  return (
    <div className="flex flex-row space-x-20 justify-center px-10 height-full ">
      <div
        className="text-white w-50 sticky top-30 mt-30 bg-[#262626] px-5 py-5 rounded-2xl drop-shadow-xl h-40"
        style={{ zIndex: 10 }}
      ></div>
      <div className="text-white w-180 mt-10 bg-[#262626] px-6 py-7 rounded-2xl drop-shadow-xl h-full ">
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
        <div className="font-bold text-xl text-white">
          {buildInfo.GemsTitle}
        </div>
        <div className="font-bold text-l text-white">{buildInfo.GemsDesc}</div>
        <div className="font-bold text-l text-white">
          {buildInfo.EnchantmentsDesc}
        </div>
        <div className="font-bold text-xl text-white">
          {buildInfo.EnchantmentsTitle}
        </div>
        <span className="font-bold text-xl text-white ">
          {buildInfo.buildTree}
        </span>
        {/* Simple Gear Slots Box */}
        <div className="mt-8">
          <h2 className="font-bold text-lg text-white mb-3">Best in Slot</h2>
          <div className="rounded-xl border border-zinc-700/70 bg-zinc-800/50 overflow-hidden">
            <ul className="divide-y divide-zinc-700/60">
              {(buildInfo.gear || []).map((slotObj: any) => {
                const primary = slotObj.items?.[0];
                return (
                  <li
                    key={slotObj.slot}
                    className="flex  items-center  justify-between gap-4 px-4 py-2 text-sm text-white hover:bg-zinc-700/40 transition-colors"
                  >
                    <span className="text-m text-white  flex-shrink-0 lex flex-col p-1 w-fit">
                      {slotObj.slot}
                    </span>
                    <span className="text-amber-300 truncate text-right w-full flex flex-col">
                      {primary ? (
                        primary.html ? (
                          <span
                            className=" max-w-full truncate align-middle [&_img]:inline-block [&_img]:mr-1 flex flex-col"
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
