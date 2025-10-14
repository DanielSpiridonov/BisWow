import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    [
      {
        buildSpec: "Fire",
        displayName: "Fire Mage",
        imageURL: "/images/fireMage.jpg",
        buildURL: "/mage/fire",
      },
      {
        buildSpec: "Frost",
        displayName: "Frost Mage",
        imageURL: "/images/frostMage.png",
        buildURL: "/mage/frost",
      },
      {
        buildSpec: "Arcane",
        displayName: "Arcane Mage",
        imageURL: "/images/arcaneMage.png",
        buildURL: "/mage/arcane",
      },
    ],
    { status: 200 }
  );
}
