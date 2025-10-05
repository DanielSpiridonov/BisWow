import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json([
    {
      buildSpec: "Prop",
      displayName: "Prop Shaman",
      imageURL: "/images/fireMage.jpg",
      buildURL: "/shaman/prop",
    },
  ], { status: 200 });
}
