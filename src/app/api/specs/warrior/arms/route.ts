import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    {
      buildName: "Talent Builds for Warrior - Arms in Wrath of the Lich King",
      description: `
        <br>
        <p>Talent builds for Arms Warrior — content coming soon.</p>
        `,

      GemsTitle: "Gems",
      GemsDesc: "2 Red, 1 Yellow, 1 Blue",
      EnchantmentsTitle: "Enchantments",
      EnchantmentsDesc: "Enchantments coming soon.",
      gear: [
        {
          slot: "Head",
          items: [
            {
              id: 1,
              name: "Helm of the Fallen Champion",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/51227" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Neck",
          items: [
            {
              id: 1,
              name: "Helm of the Fallen Champion",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/54581" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Shoulder",
          items: [
            {
              id: 1,
              name: "Helm of the Fallen Champion",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/51229/" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Back",
          items: [
            {
              id: 4,
              name: "Drape of the Untamed",
              html: '<div class="flex flex-row justify-end items-center"><img class="h-4 w-4 cursor-pointer" src="/images/alliance.png" alt="Alliance" /> <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/47545" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a></div><div class="flex flex-row justify-end items-center"><img class="h-4 w-4 cursor-pointer" src="/images/horde.png" alt="Horde" /> <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/47546" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a></div>',
            },
          ],
        },
        {
          slot: "Chest",
          items: [
            {
              id: 5,
              name: "Battleplate of Wrath",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/51225/" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Wrist",
          items: [
            {
              id: 6,
              name: "Bracers of Unrelenting",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/50670/" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Hands",
          items: [
            {
              id: 7,
              name: "Gauntlets of the Colossus",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/51226" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Waist",
          items: [
            {
              id: 8,
              name: "Girdle of Bloodied Stone",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/50707/" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Legs",
          items: [
            {
              id: 9,
              name: "Legplates of Iron Will",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/50645/" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Feet",
          items: [
            {
              id: 10,
              name: "Sabatons of Relentless Might",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/54578" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Ring 1",
          items: [
            {
              id: 11,
              name: "Band of Brutality",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/50402" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Ring 2",
          items: [
            {
              id: 12,
              name: "Signet of Cruelty",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/50618/" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Trinket 1",
          items: [
            {
              id: 13,
              name: "Darkmoon Card: Greatness",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/50363/" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Trinket 2",
          items: [
            {
              id: 14,
              name: "Mirror of Truth",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/54590" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Main Hand",
          items: [
            {
              id: 15,
              name: "Betrayer of Humanity",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/49623" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Ranged",
          items: [
            {
              id: 17,
              name: "Libram of Furious Blows",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/50733/" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
      ],
    },
    { status: 200 }
  );
}
