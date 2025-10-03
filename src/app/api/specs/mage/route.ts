import { url } from "inspector";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    [
      {
        buildSpec: "Fire Mage",
        displayName: "Fire Mage",
        imageURL: "/images/fireMage.jpg",
        buildURL: "/mage/fire",
      },
      {
        buildSpec: "Frost  Mage",
        displayName: "Frost  Mage",
        imageURL: "/images/frostMage.png",
        buildURL: "#",
      },
      {
        buildSpec: "Arcane Mage",
        displayName: "Arcane Mage",
        imageURL: "/images/arcaneMage.png",
        buildURL: "#",
      },
    ],
    { status: 200 }
  );
}
