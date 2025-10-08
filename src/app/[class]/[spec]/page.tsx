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
    <div className=" text-white w-180 mx-auto mt-10  bg-[#262626] px-5 py-5 rounded-2xl drop-shadow-xl h-full">
      showing build for {buildInfo.buildName}
      <br />
      {buildInfo.description}
    </div>
  );
}
