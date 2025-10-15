import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    [
      {
        buildSpec: "Combat",
        displayName: "Combat Rogue",
        imageURL: "/images/rogue-combat.png",
        buildURL: "/rogue/combat",
      },
      {
        buildSpec: "Assassination",
        displayName: "Assassination Rogue",
        imageURL: "/images/rogue-assassination.png",
        buildURL: "/rogue/assassination",
      },
    ],
    { status: 200 }
  );
}
