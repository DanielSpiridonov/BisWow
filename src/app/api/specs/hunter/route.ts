import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    [
      {
        buildSpec: "Marksmanship",
        displayName: "Marksmanship Hunter",
        imageURL: "/images/hunter-marksmanship.jpg",
        buildURL: "/hunter/marksmanship",
      },
      {
        buildSpec: "Beast Mastery",
        displayName: "Beast Mastery Hunter",
        imageURL: "/images/hunter-beast-mastery.jpg",
        buildURL: "/hunter/beast-mastery",
      },
      {
        buildSpec: "Survival",
        displayName: "Survival Hunter",
        imageURL: "/images/hunter-survival.jpg",
        buildURL: "/hunter/survival",
      },
    ],
    { status: 200 }
  );
}
