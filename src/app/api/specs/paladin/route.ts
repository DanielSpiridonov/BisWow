import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    [
      {
        buildSpec: "Retribution",
        displayName: "Retribution Paladin",
        imageURL: "/images/pala-retri.png",
        buildURL: "/paladin/retri",
      },
      {
        buildSpec: "Holy",
        displayName: "Holy Paladin",
        imageURL: "/images/pala-holy.png",
        buildURL: "/paladin/holy",
      },
      {
        buildSpec: "Protection",
        displayName: "Protection Paladin",
        imageURL: "/images/pala-prot.png",
        buildURL: "/paladin/prot",
      },
    ],
    { status: 200 }
  );
}
