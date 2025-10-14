import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    [
      {
        buildSpec: "Retribution",
        displayName: "Retribution Paladin",
        imageURL: "/images/paladin-retribution.jpg",
        buildURL: "/paladin/retri",
      },
      {
        buildSpec: "Holy",
        displayName: "Holy Paladin",
        imageURL: "/images/paladin-holy.jpg",
        buildURL: "/paladin/holy",
      },
      {
        buildSpec: "Protection",
        displayName: "Protection Paladin",
        imageURL: "/images/paladin-protection.jpg",
        buildURL: "/paladin/prot",
      },
    ],
    { status: 200 }
  );
}
