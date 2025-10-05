import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    [
      {
        buildSpec: "Prop",
        displayName: "Prop Death Knight",
        imageURL: "/images/fireMage.jpg",
        buildURL: "/death-knight/prop",
      },
    ],
    { status: 200 }
  );
}
