import { specOverview } from "@/lib/types";

function SpecCard(params: { specInfo: specOverview }) {
  const specInfo = params.specInfo;
  return (
    <div
      key={specInfo.buildSpec}
      className="bg-[#262626] drop-shadow-2xl w-60 h-60 rounded-2xl flex flex-col items-center justify-center text-white text-lg p-4"
    >
      <img
        src={specInfo.imageURL}
        alt={""}
        width={64}
        height={64}
        className="mb-2"
      />
      <div>{specInfo.displayName}</div>
      <a
        href={specInfo.buildURL}
        className="text-purple-400 text-sm mt-2 underline"
      >
        View Build
      </a>
    </div>
  );
}

function SpecsView(params: { specs: specOverview[] }) {
  const specs = params.specs;
  return (
    <div className=" flex flex-row">
      {specs.map((spec) => (
        <SpecCard specInfo={spec} />
      ))}
    </div>
  );
}
export default async function ClassesSpecsView({
  params,
}: {
  params: { class: string };
}) {
  console.log(params.class);
  // const specsList = await (
  //   await fetch(`http://localhost:3000/api/specs/${params.class}`)
  // ).json();
  const data = await fetch(`http://localhost:3000/api/specs/${params.class}`);
  if (!data.ok) {
    return <div className=" text-white">Class not found!</div>;
  }
  const specsList: specOverview[] = await data.json();
  return (
    <div className=" text-white">
      showing specs for class: {params.class}
      <br />
      <SpecsView specs={specsList} />
    </div>
  );
}
