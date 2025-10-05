import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    {
      buildName: "Warlock Prop Build",
      description: "This is a sample Warlock prop build description.",
    },
    { status: 200 }
  );
}
