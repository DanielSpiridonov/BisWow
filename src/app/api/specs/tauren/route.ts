import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    [
      {
        buildSpec: "Feral Druid",
        displayName: "",
        imageURL: "/images/fireMage.jpg",
        buildURL: "#",
      },
      {
        buildSpec: "Hunter",
        displayName: "Tauren Hunter",
        imageURL: "/images/fireMage.jpg",
        buildURL: "#",
      },
    ],
    { status: 200 }
  );
}
