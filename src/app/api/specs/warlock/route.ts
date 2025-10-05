import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    [
      {
        buildSpec: "Warlock Spec",
        displayName: "Warlock Example",
        imageURL: "/images/fireMage.jpg",
        buildURL: "#",
      },
    ],
    { status: 200 }
  );
}
