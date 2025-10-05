import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    {
      buildName: "Paladin Prop Build",
      description: "This is a sample Paladin prop build description.",
    },
    { status: 200 }
  );
}
