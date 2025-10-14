import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    {
      buildName:
        "Talent Builds for Druid - Feral Tank in Wrath of the Lich King",
      description: `
      <br>
      <p>Talent builds for Feral Tank Druid — content coming soon.</p>
      `,
    },
    { status: 200 }
  );
}
