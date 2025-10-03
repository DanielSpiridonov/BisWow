import { url } from "inspector";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    {
      buildName: "Fire Mage",
      description: `Equipment will be the main source of your character’s power, contributing the biggest bulk of your stats. It is therefore very important that you choose the correct equipment for each slot — commonly referred to as “best in slot” equipment – in order to maximize your power.
        This guide is divided into two sections. The first section is basic lists, providing you full sets for a fresh level 80 pre-raid, a level 80 preparing for their first foray into Trial of the Crusader, and an example of ideal gear to aspire to from Trial of the Crusader. The second section provides more alternatives for each slot, giving an example of gear progression between these three areas of gearing.
        Heroic++, otherwise known as Defense Protocol Beta drops gear from 10-man Ulduar and Naxxramas. Heroic+, otherwise known as Defense Protocol Alpha, drops gear from 10-man Naxxramas, as well as regular Heroic gear. Future Phases are likely to add further Heroic difficulties.`,
    },
    { status: 200 }
  );
}
