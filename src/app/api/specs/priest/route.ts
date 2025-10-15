import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    [
      {
        buildSpec: "Discipline",
        displayName: "Discipline Priest",
        imageURL: "/images/priest-disco.png",
        buildURL: "/priest/disco",
      },
      {
        buildSpec: "Holy",
        displayName: "Holy Priest",
        imageURL: "/images/priest-holy.png",
        buildURL: "/priest/holy",
      },
      {
        buildSpec: "Shadow",
        displayName: "Shadow Priest",
        imageURL: "/images/priest-shadow.png",
        buildURL: "/priest/shadow",
      },
    ],
    { status: 200 }
  );
}
