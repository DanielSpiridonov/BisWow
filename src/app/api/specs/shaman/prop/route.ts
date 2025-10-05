import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json({
    buildName: "Shaman Prop Build",
    description: "This is a sample Shaman prop build description.",
  }, { status: 200 });
}
