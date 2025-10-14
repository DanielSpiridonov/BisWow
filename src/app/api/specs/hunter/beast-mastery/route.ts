import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    {
      buildName:
        "Talent Builds for Hunter - Beast Mastery in Wrath of the Lich King",
      description: `
      <br>
      <p>Talent builds for Beast Mastery Hunter — content coming soon.</p>
      `,
    },
    { status: 200 }
  );
}
