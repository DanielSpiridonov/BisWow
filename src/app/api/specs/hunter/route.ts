import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    [
      {
        buildSpec: "Prop",
        displayName: "Prop Hunter",
        imageURL: "/images/fireMage.jpg",
        buildURL: "/hunter/prop",
      },
    ],
    { status: 200 }
  );
}
