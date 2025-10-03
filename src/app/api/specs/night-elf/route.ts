import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    [
      {
        buildSpec: "Balance Druid",
        displayName: "Night Elf Balance Druid",
        imageURL: "/images/fireMage.jpg",
        buildURL: "#",
      },
      {
        buildSpec: "Rogue",
        displayName: "Night Elf Rogue",
        imageURL: "/images/fireMage.jpg",
        buildURL: "#",
      },
    ],
    { status: 200 }
  );
}
