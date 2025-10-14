import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    {
      buildName: "Talent Builds for Druid - Balance in Wrath of the Lich King",
      description: `
      <br>
      <p>Talent builds for Balance Druid — content coming soon.</p>
      `,
    },
    { status: 200 }
  );
}
