import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    [
      {
        buildSpec: "Restoration",
        displayName: "Restoration Shaman",
        imageURL: "/images/shaman-restoration.jpg",
        buildURL: "/shaman/resto",
      },
      {
        buildSpec: "Elemental",
        displayName: "Elemental Shaman",
        imageURL: "/images/shaman-elemental.jpg",
        buildURL: "/shaman/ele",
      },
      {
        buildSpec: "Enhancement",
        displayName: "Enhancement Shaman",
        imageURL: "/images/shaman-enhancement.jpg",
        buildURL: "/shaman/enha",
      },
    ],
    { status: 200 }
  );
}
