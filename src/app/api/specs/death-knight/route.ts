import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    [
      {
        buildSpec: "Frost",
        displayName: "Frost Death Knight",
        imageURL: "/images/FDK.jpg",
        buildURL: "/death-knight/frost",
      },
      {
        buildSpec: "Blood",
        displayName: "Blood Death Knight",
        imageURL: "/images/BDK.jpg",
        buildURL: "/death-knight/blood",
      },
      {
        buildSpec: "Unholy",
        displayName: "Unholy Death Knight",
        imageURL: "/images/UDK.jpg",
        buildURL: "/death-knight/unholy",
      },
    ],
    { status: 200 }
  );
}
