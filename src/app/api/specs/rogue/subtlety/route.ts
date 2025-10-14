import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    {
      buildName: "Talent Builds for Rogue - Subtlety in Wrath of the Lich King",
      description: `
      <br>
      <p>Talent builds for Subtlety Rogue — content coming soon.</p>
      `,
    },
    { status: 200 }
  );
}
