import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    {
      buildName:
        "Talent Builds for Death Knight - Unholy in Wrath of the Lich King",
      description: `
  <div style="width:100%;height:160px;border-radius:8px;overflow:hidden;background:#1b495c;background: linear-gradient(90deg, rgba(10, 60, 10, 0.6) 0%, rgba(10, 60, 10, 0.4) 45%, rgba(10, 60, 10, 0.2) 70%, rgba(10, 60, 10, 0) 100%), url('/images/deathknightCover.jpg'); background-size: cover; background-position: right center; background-repeat: no-repeat;"></div>
  <br>
  <div style="padding:20px 26px;border-radius:8px;">
  <p style="font-size: 1.2rem;">Unholy Death Knight is a melee DPS focused on diseases, pet damage, and powerful AoE for raids and dungeons. It scales well with gear and shines in sustained multi-target fights and high uptime encounters.</p>
  </div>
  <br><br>
  <p style="text-align:right;color:#F76702;"><b><i>Items below are only a suggestion from my own experince</i></b></p>
  `,
      GemsTitle: "Gems",
      GemsDesc: `Meta - <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/41398" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a> <br>
        Red - <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/39996" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>&nbsp;/&nbsp;<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/40111" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a> <br>
        Yellow - <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/40038" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>&nbsp;/&nbsp;<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/40143" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a> <br>
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
              html: ':&nbsp; <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/44133" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Back",
          items: [
            {
              id: 1003,
              name: "+22 Agility",
              html: ':&nbsp; <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/spell/60663" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>&nbsp;/&nbsp;<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/spell/55777" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>&nbsp;/&nbsp;<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/41111" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
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
              html: ':&nbsp; <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/spell/44575" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
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
              html: ':&nbsp; <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/enchantment/3368" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>&nbsp;(Runeforging)',
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
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/51312" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Neck",
          items: [
            {
              id: 1,
              name: "Helm of the Fallen Champion",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/54581/" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Shoulder",
          items: [
            {
              id: 1,
              name: "Helm of the Fallen Champion",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/51314" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Back",
          items: [
            {
              id: 4,
              name: "Drape of the Untamed",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/50677" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Chest",
          items: [
            {
              id: 5,
              name: "Battleplate of Wrath",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/51310" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
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
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/51311/" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Waist",
          items: [
            {
              id: 8,
              name: "Girdle of Bloodied Stone",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/50620/" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Legs",
          items: [
            {
              id: 9,
              name: "Legplates of Iron Will",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/50624/" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
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
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/50693/" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Ring 2",
          items: [
            {
              id: 12,
              name: "Signet of Cruelty",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/52572/" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
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
          slot: "Sigil",
          items: [
            {
              id: 17,
              name: "Libram of Furious Blows",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/50459" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
      ],
    },
    { status: 200 }
  );
}
