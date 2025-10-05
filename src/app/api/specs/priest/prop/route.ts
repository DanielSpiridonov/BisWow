import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    {
      buildName: "Priest Prop Build",
      description: "This is a sample Priest prop build description.",
    },
    { status: 200 }
  );
}
