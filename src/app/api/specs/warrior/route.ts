import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    [
      {
        buildSpec: "Arms",
        displayName: "Arms Warrior",
        imageURL: "/images/warrior-arms.jpg",
        buildURL: "/warrior/arms",
      },
      {
        buildSpec: "Fury",
        displayName: "Fury Warrior",
        imageURL: "/images/warrior-fury.jpg",
        buildURL: "/warrior/fury",
      },
      {
        buildSpec: "Protection",
        displayName: "Protection Warrior",
        imageURL: "/images/warrior-protection.jpg",
        buildURL: "/warrior/protection",
      },
    ],
    { status: 200 }
  );
}
