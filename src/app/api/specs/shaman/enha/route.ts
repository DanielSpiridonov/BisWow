import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    {
      buildName:
        "Talent Builds for Shaman - Enhancement in Wrath of the Lich King",
      description: `
  <div style="width:100%;height:160px;border-radius:8px;overflow:hidden;background:#1b495c;background: linear-gradient(90deg, rgba(27, 73, 92, 0.47) 0%, rgba(8, 19, 23, 0.6) 41%, rgba(1, 3, 54, 0.64) 66%, rgba(0, 0, 61, 0.78) 100%), url('/images/restoCover.png'); background-size: cover; background-position: right center; background-repeat: no-repeat;"></div>
  <br>
  <div style="padding:20px 26px;border-radius:8px;">
  <p style="font-size: 1.2rem;">Enhancement Shaman is a melee DPS that mixes weapon strikes with totems and utility for raids and dungeons. It thrives on proc management and teamwork buffs, rewarding smart snapshotting and high uptime.</p>
  </div>
  <br><br>
  <p style="text-align:right;color:#F76702;"><b><i>Items below are only a suggestion from my own experince</i></b></p>
  `,
      GemsTitle: "Gems",
      GemsDesc: `Meta - <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/41398" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a> <br>
        Red - <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/40114" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a><br>
        Yellow - <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/40128" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a><br>
        Blue - <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/40140" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a><br>
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
              html: ':&nbsp; <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/spell/47898" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
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
              html: ':&nbsp; <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/spell/60668" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>/<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/spell/54999" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>&nbsp;(Engineering)',
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
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/51242" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Neck",
          items: [
            {
              id: 1,
              name: "Helm of the Fallen Champion",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/54557" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Shoulder",
          items: [
            {
              id: 1,
              name: "Helm of the Fallen Champion",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/51240" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
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
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/51244" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Wrist",
          items: [
            {
              id: 6,
              name: "Bracers of Unrelenting",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/50655" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Hands",
          items: [
            {
              id: 7,
              name: "Gauntlets of the Colossus",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/51926" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Waist",
          items: [
            {
              id: 8,
              name: "Girdle of Bloodied Stone",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/51853" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Legs",
          items: [
            {
              id: 9,
              name: "Legplates of Iron Will",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/51241" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Feet",
          items: [
            {
              id: 10,
              name: "Sabatons of Relentless Might",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/54577" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Ring 1",
          items: [
            {
              id: 11,
              name: "Band of Brutality",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/50618" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Ring 2",
          items: [
            {
              id: 12,
              name: "Signet of Cruelty",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/50402" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Trinket 1",
          items: [
            {
              id: 13,
              name: "Darkmoon Card: Greatness",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/54590" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Trinket 2",
          items: [
            {
              id: 14,
              name: "Mirror of Truth",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/50363" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Main Hand",
          items: [
            {
              id: 15,
              name: "Betrayer of Humanity",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/50737" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Off Hand",
          items: [
            {
              id: 17,
              name: "Libram of Furious Blows",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/50737" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
        {
          slot: "Relic",
          items: [
            {
              id: 17,
              name: "Libram of Furious Blows",
              html: '<a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/50458" target="_blank" class="wowclassicdb-link " style="font-size: 1rem;"></a>',
            },
          ],
        },
      ],
    },
    { status: 200 }
  );
}
