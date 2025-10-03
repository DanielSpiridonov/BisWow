import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    [
      {
        buildSpec: "Shaman",
        displayName: "Orc Shaman",
        imageURL: "/images/fireMage.jpg",
        buildURL: "#",
      },
      {
        buildSpec: "Warrior",
        displayName: "Orc Warrior",
        imageURL: "/images/fireMage.jpg",
        buildURL: "#",
      },
    ],
    { status: 200 }
  );
}
