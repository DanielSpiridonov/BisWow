import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    [
      {
        buildSpec: "Marksmanship",
        displayName: "Marksmanship Hunter",
        imageURL: "/images/hunter-marksmanship.png",
        buildURL: "/hunter/marksmanship",
      },
      {
        buildSpec: "Beast Mastery",
        displayName: "Beast Mastery Hunter",
        imageURL: "/images/hunter-beast-mastery.png",
        buildURL: "/hunter/beast-mastery",
      },
      {
        buildSpec: "Survival",
        displayName: "Survival Hunter",
        imageURL: "/images/hunter-survival.png",
        buildURL: "/hunter/survival",
      },
    ],
    { status: 200 }
  );
}
