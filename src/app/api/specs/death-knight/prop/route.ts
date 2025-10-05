import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    {
      buildName: "Death Knight Prop Build",
      description: "This is a sample Death Knight prop build description.",
    },
    { status: 200 }
  );
}
