import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    [
      {
        buildSpec: "Prop",
        displayName: "Prop Priest",
        imageURL: "/images/fireMage.jpg",
        buildURL: "/priest/prop",
      },
    ],
    { status: 200 }
  );
}
