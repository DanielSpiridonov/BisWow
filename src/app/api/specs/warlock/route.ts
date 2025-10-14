import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    [
      {
        buildSpec: "Affliction",
        displayName: "Affliction Warlock",
        imageURL: "/images/warlock-affliction.jpg",
        buildURL: "/warlock/affliction",
      },
      {
        buildSpec: "Demonology",
        displayName: "Demonology Warlock",
        imageURL: "/images/warlock-demonology.jpg",
        buildURL: "/warlock/demo",
      },
      {
        buildSpec: "Destruction",
        displayName: "Destruction Warlock",
        imageURL: "/images/warlock-destruction.jpg",
        buildURL: "/warlock/destruction",
      },
    ],
    { status: 200 }
  );
}
