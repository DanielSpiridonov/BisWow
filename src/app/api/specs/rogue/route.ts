import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    [
      {
        buildSpec: "Rogue",
        displayName: "Rogue",
        imageURL: "/images/fireMage.jpg",
        buildURL: "#",
      },
      {
        buildSpec: "Combat Rogue",
        displayName: "Combat Rogue",
        imageURL: "/images/fireMage.jpg",
        buildURL: "#",
      },
    ],
    { status: 200 }
  );
}
