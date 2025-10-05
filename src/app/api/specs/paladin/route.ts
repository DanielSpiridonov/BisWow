import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    [
      {
        buildSpec: "Prop",
        displayName: "Protection Paladin",
        imageURL: "/images/fireMage.jpg",
        buildURL: "/paladin/prop",
      },
    ],
    { status: 200 }
  );
}
