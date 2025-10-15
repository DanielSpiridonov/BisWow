import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    [
      {
        buildSpec: "Arms",
        displayName: "Arms Warrior",
        imageURL: "/images/warrior-arms.png",
        buildURL: "/warrior/arms",
      },
      {
        buildSpec: "Fury",
        displayName: "Fury Warrior",
        imageURL: "/images/warrior-fury.png",
        buildURL: "/warrior/fury",
      },
      {
        buildSpec: "Protection",
        displayName: "Protection Warrior",
        imageURL: "/images/warrior-prot.png",
        buildURL: "/warrior/protection",
      },
    ],
    { status: 200 }
  );
}
