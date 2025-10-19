import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    {
      buildName:
        "Talent Builds for Paladin - Protection in Wrath of the Lich King",
      description: `
      <br>
      <p>Talent builds for Protection Paladin — content coming soon.</p>
      `,
      GemsTitle: "Gems",
      GemsDesc: `Meta - <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/41380" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a> <br>
        Red - <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/40003" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>/<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/40118" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a> <br>
        Yellow - <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/40058" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>/<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/40162" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a> <br>
        Blue - <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/40008" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>/<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/40119" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a> <br>
      `,
      EnchantmentsTitle: "Enchantments",
      EnchantmentsDesc: [
        {
          slot: "Head",
          items: [
            {
              id: 1001,
              name: "+50 Attack Power and +20 Critical Strike Rating",
              html: ':&nbsp; <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/50369" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>/<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/spell/67839" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Shoulders",
          items: [
            {
              id: 1002,
              name: "+40 Attack Power and +15 Critical Strike Rating",
              html: ':&nbsp; <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/44957" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Back",
          items: [
            {
              id: 1003,
              name: "+22 Agility",
              html: ':&nbsp; <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/spell/47672" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>/<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/spell/55777" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>/<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/41111" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Chest",
          items: [
            {
              id: 1003,
              name: "+22 Agility",
              html: ':&nbsp; <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/spell/47900" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Wrist",
          items: [
            {
              id: 1003,
              name: "+22 Agility",
              html: ':&nbsp; <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/spell/62256" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Hands",
          items: [
            {
              id: 1003,
              name: "+22 Agility",
              html: ':&nbsp; <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/spell/44625" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>/<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/spell/63770" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>&nbsp;(Engineering)',
            },
          ],
        },
        {
          slot: "Waist",
          items: [
            {
              id: 1003,
              name: "+22 Agility",
              html: ':&nbsp; <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/41611" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Legs",
          items: [
            {
              id: 1003,
              name: "+22 Agility",
              html: ':&nbsp; <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/38373" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Feet",
          items: [
            {
              id: 1003,
              name: "+22 Agility",
              html: ':&nbsp; <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/spell/47901" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>/ <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/spell/55016" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a> &nbsp;(Engineering)',
            },
          ],
        },
        {
          slot: "Rings",
          items: [
            {
              id: 1003,
              name: "+22 Agility",
              html: ':&nbsp; <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/spell/59636" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>&nbsp;(Enchanting)',
            },
          ],
        },
        {
          slot: "Weapons",
          items: [
            {
              id: 1003,
              name: "+22 Agility",
              html: ':&nbsp; <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/spell/27984" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Shield",
          items: [
            {
              id: 1003,
              name: "+22 Agility",
              html: ':&nbsp; <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/spell/34009" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
      ],
      gear: [
        {
          slot: "Head",
          items: [
            {
              id: 1,
              name: "Helm of the Fallen Champion",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/50640" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Neck",
          items: [
            {
              id: 1,
              name: "Helm of the Fallen Champion",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/50682" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Shoulder",
          items: [
            {
              id: 1,
              name: "Helm of the Fallen Champion",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/51269" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Back",
          items: [
            {
              id: 4,
              name: "Drape of the Untamed",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/50466" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Chest",
          items: [
            {
              id: 5,
              name: "Battleplate of Wrath",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/51265" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Wrist",
          items: [
            {
              id: 6,
              name: "Bracers of Unrelenting",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/51901" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Hands",
          items: [
            {
              id: 7,
              name: "Gauntlets of the Colossus",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/51267" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Waist",
          items: [
            {
              id: 8,
              name: "Girdle of Bloodied Stone",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/50991" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Legs",
          items: [
            {
              id: 9,
              name: "Legplates of Iron Will",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/51268" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Feet",
          items: [
            {
              id: 10,
              name: "Sabatons of Relentless Might",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/54579" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Ring 1",
          items: [
            {
              id: 11,
              name: "Band of Brutality",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/50622" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Ring 2",
          items: [
            {
              id: 12,
              name: "Signet of Cruelty",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/50404" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Trinket 1",
          items: [
            {
              id: 13,
              name: "Darkmoon Card: Greatness",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/50364" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Trinket 2",
          items: [
            {
              id: 14,
              name: "Mirror of Truth",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/54591" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Main Hand",
          items: [
            {
              id: 15,
              name: "Betrayer of Humanity",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/50738" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Off Hand",
          items: [
            {
              id: 17,
              name: "Libram of Furious Blows",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/50729" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Relic",
          items: [
            {
              id: 17,
              name: "Libram of Furious Blows",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/47661" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
      ],
    },
    { status: 200 }
  );
}
