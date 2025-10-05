import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    [
      {
        buildSpec: "Prop",
        displayName: "Prop Druid",
        imageURL: "/images/fireMage.jpg",
        buildURL: "/druid/prop",
      },
    ],
    { status: 200 }
  );
}
