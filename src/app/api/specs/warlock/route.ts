import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    [
      {
        buildSpec: "Affliction",
        displayName: "Affliction Warlock",
        imageURL: "/images/lock-affliction.png",
        buildURL: "/warlock/affliction",
      },
      {
        buildSpec: "Demonology",
        displayName: "Demonology Warlock",
        imageURL: "/images/lock-demo.png",
        buildURL: "/warlock/demo",
      },
      {
        buildSpec: "Destruction",
        displayName: "Destruction Warlock",
        imageURL: "/images/lock-destruction.png",
        buildURL: "/warlock/destruction",
      },
    ],
    { status: 200 }
  );
}
