import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    {
      buildName: "Talent Builds for Mage - Arcane in Wrath of the Lich King",
      description: `
      <br>
      <p>Talent builds for Arcane Mage — content coming soon.</p>
      `,
    },
    { status: 200 }
  );
}
