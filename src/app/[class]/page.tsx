import { headers } from "next/headers";

import { specOverview } from "@/lib/types";

function SpecCard(params: { specInfo: specOverview }) {
  const specInfo = params.specInfo;
  const imageSrc = typeof specInfo.imageURL === "string" ? specInfo.imageURL : specInfo.imageURL.src;
  return (
    <div
      key={specInfo.buildSpec}
      className="bg-[#262626] drop-shadow-xl w-80 h-90 rounded-2xl flex flex-col items-center justify-center text-white text-lg p-4 transition-shadow duration-150 hover:shadow-[0_0_25px_5px_rgba(168,85,247,0.7)]"
    >
      <img
        src={imageSrc}
        alt={""}
        width={84}
        height={84}
        className="mb-2"
      />
      <div className="">{specInfo.displayName}</div>
      <a
        href={specInfo.buildURL}
        className="text-purple-700 font-bold text-sm mt-2 border-2 border-purple-700 px-3 py-2 rounded-lg hover:bg-purple-700 hover:text-white transition"
      >
        View Build
      </a>
    </div>
  );
}

function SpecsView(params: { specs: specOverview[] }) {
  const specs = params.specs;
  return (
    <div className=" flex flex-row gap-25 flex-wrap justify-center mt-20">
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
  const classSlug = params.class;
  const headerList = await headers();
  const host = headerList.get("x-forwarded-host") ?? headerList.get("host");
  const protocol = headerList.get("x-forwarded-proto") ?? (process.env.NODE_ENV === "development" ? "http" : "https");

  if (!host) {
    return <div className=" text-white">Unable to resolve host.</div>;
  }

  const response = await fetch(`${protocol}://${host}/api/specs/${classSlug}`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    return <div className=" text-white">Class not found!</div>;
  }
  const specsList: specOverview[] = await response.json();
  return (
    <div className=" text-white h-20 ">
      <br />
      <SpecsView specs={specsList} />
    </div>
  );
}
