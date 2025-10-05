import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    {
      buildName: "Warrior Prop Build",
      description: "This is a sample Warrior prop build description.",
    },
    { status: 200 }
  );
}
