import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    {
      buildName:
        "Talent Builds for Priest - Discipline in Wrath of the Lich King",
      description: `
      <br>
      <p>Talent builds for Discipline Priest — content coming soon.</p>
      `,
    },
    { status: 200 }
  );
}
