import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    {
      buildName: "Talent Builds for Warrior - Fury in Wrath of the Lich King",
      description: `
      <br>
      <p>Talent builds for Fury Warrior — content coming soon.</p>
      `,
      GemsTitle: "Gems",
      GemsDesc: `Meta - <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/41398" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a> <br>
        Red - <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/40002" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>&nbsp;/&nbsp;<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/40117" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a> <br>
        Yellow - <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/40037" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>&nbsp;/&nbsp;<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/40142" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a> <br>
        Blue - <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/42702" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>&nbsp;/&nbsp;<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/49110" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a> <br>
      `,
      EnchantmentsTitle: "Enchantments",
      EnchantmentsDesc: [
        {
          slot: "Head",
          items: [
            {
              id: 1001,
              name: "+50 Attack Power and +20 Critical Strike Rating",
              html: ':&nbsp; <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/44149" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Shoulders",
          items: [
            {
              id: 1002,
              name: "+40 Attack Power and +15 Critical Strike Rating",
              html: ':&nbsp; <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/44133" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>&nbsp;/&nbsp;<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/spell/61117" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>&nbsp;(inscription)',
            },
          ],
        },
        {
          slot: "Back",
          items: [
            {
              id: 1003,
              name: "+22 Agility",
              html: ':&nbsp; <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/spell/47898" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>&nbsp;/&nbsp;<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/spell/55777" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>&nbsp;(Tailoring)',
            },
          ],
        },
        {
          slot: "Chest",
          items: [
            {
              id: 1003,
              name: "+22 Agility",
              html: ':&nbsp; <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/spell/60692" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Wrist",
          items: [
            {
              id: 1003,
              name: "+22 Agility",
              html: ':&nbsp; <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/spell/44575" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>&nbsp;/&nbsp;<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/spell/57683" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>&nbsp;(Leatherworking)',
            },
          ],
        },
        {
          slot: "Hands",
          items: [
            {
              id: 1003,
              name: "+22 Agility",
              html: ':&nbsp; <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/spell/60668" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>&nbsp;/&nbsp;<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/spell/54999" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>&nbsp;(Engineering)',
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
              html: ':&nbsp; <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/38374" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Feet",
          items: [
            {
              id: 1003,
              name: "+22 Agility",
              html: ':&nbsp; <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/spell/60763" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>/ <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/spell/55016" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a> &nbsp;(Engineering)',
            },
          ],
        },
        {
          slot: "Rings",
          items: [
            {
              id: 1003,
              name: "+22 Agility",
              html: ':&nbsp; <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/spell/44645" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>&nbsp;(Enchanting)',
            },
          ],
        },
        {
          slot: "Weapons",
          items: [
            {
              id: 1003,
              name: "+22 Agility",
              html: ':&nbsp; <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/spell/59621" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
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
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/50653" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
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
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/54580" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Hands",
          items: [
            {
              id: 7,
              name: "Gauntlets of the Colossus",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/50675" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
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
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/51228/" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
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
          slot: "Off Hand",
          items: [
            {
              id: 16,
              name: "Axe of the Sen'jin Protector",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/50730" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Ranged / Relic",
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
