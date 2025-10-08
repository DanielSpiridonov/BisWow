import { specOverview } from "@/lib/types";

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
      <div className="text-white w-180 m mt-10 bg-[#262626] px-5 py-5 rounded-2xl drop-shadow-xl h-full ">
        showing build for {buildInfo.buildName}
        <div
          dangerouslySetInnerHTML={{
            __html: buildInfo.description.replaceAll(
              "<a",
              '<a class="inline-flex px-1 flex-row w-fit" '
            ),
          }}
        />
      </div>
      <div
        className="text-white w-60 sticky top-30 mt-30 bg-[#262626] px-5 py-5 rounded-2xl drop-shadow-xl h-50"
        style={{ zIndex: 10 }}
      ></div>
    </div>
  );
}
