import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    [
      {
        buildSpec: "Restoration",
        displayName: "Restoration Shaman",
        imageURL: "/images/shaman-resto.png",
        buildURL: "/shaman/resto",
      },
      {
        buildSpec: "Elemental",
        displayName: "Elemental Shaman",
        imageURL: "/images/shaman-ele.png",
        buildURL: "/shaman/ele",
      },
      {
        buildSpec: "Enhancement",
        displayName: "Enhancement Shaman",
        imageURL: "/images/shaman-enha.png",
        buildURL: "/shaman/enha",
      },
    ],
    { status: 200 }
  );
}
