import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    [
      {
        buildSpec: "Feral DPS",
        displayName: "Feral DPS Druid",
        imageURL: "/images/druid-feral-dps.jpg",
        buildURL: "/druid/feral-dps",
      },
      {
        buildSpec: "Feral Tank",
        displayName: "Feral Tank Druid",
        imageURL: "/images/druid-feral-tank.jpg",
        buildURL: "/druid/feral-tank",
      },
      {
        buildSpec: "Balance",
        displayName: "Balance Druid",
        imageURL: "/images/druid-balance.jpg",
        buildURL: "/druid/balance",
      },
      {
        buildSpec: "Restoration",
        displayName: "Restoration Druid",
        imageURL: "/images/druid-restoration.jpg",
        buildURL: "/druid/resto",
      },
    ],
    { status: 200 }
  );
}
