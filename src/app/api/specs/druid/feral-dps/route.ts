import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    {
      buildName:
        "Talent Builds for Druid - Feral DPS in Wrath of the Lich King",
      description: `
      <br>
      <p>Talent builds for Feral DPS Druid — content coming soon.</p>
      `,
    },
    { status: 200 }
  );
}
