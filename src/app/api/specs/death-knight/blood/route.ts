import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    {
      buildName:
        "Talent Builds for Death Knight Tanks in Wrath of the Lich King",
      description: `
      <br>
          <p>These Talents are the ones that I have found to be best for their scenarios. All of the listed Talent Trees below are sourced from<a href="https://www.wowhead.com/wotlk/" target="_blank" rel="noopener noreferrer"  style="color:#b01231;text-decoration:underline;">
            Wowhead
            </a>
          </p>
          <div style="color:#b01231; margin-top: 3rem;margin-bottom: 1rem;font-weight:bold; font-size:1.2rem;">43/23/5 Blood ST Mit Focused Death Knight Tank Talent Build</div>
          <div style="width:100%;overflow:hidden;">
            <iframe src="https://www.wowhead.com/wotlk/talent-calc/embed/death-knight/005512153330030320102013-3050505000023-005_001s9m11xv631ts841sxd51s8g"
              style="width:100%;height:880px;transform:scale(1);border:none;background-color:#262626;"
              scrolling="no"
              frameborder="0"
              allowfullscreen>
            </iframe>
          </div>
        
          <p>Talents details can be found<a href="https://www.wowhead.com/wotlk/guide/classes/death-knight/blood/tank-talent-builds-glyphs-pve#blood-st-mit-focused" target="_blank" rel="noopener noreferrer"  style="color:#b01231;text-decoration:underline;margin-auto;">
            Here
            </a>
          </p>

          <div style="color:#b01231; margin-top: 3rem;margin-bottom: 1rem;font-weight:bold; font-size:1.2rem;">43/20/8 Blood AOE Focused Death Knight Tank Talent Build</div>
          <div style="width:100%;overflow:hidden;">
            <iframe src="https://www.wowhead.com/wotlk/talent-calc/embed/death-knight/005510153330330220102013-305050500002-00503_001s9m11s8521xv631ts841sxd51s8g"
              style="width:100%;height:880px;transform:scale(1);border:none;background-color:#262626;"
              scrolling="no"
              frameborder="0"
              allowfullscreen>
            </iframe>
          </div>

           <p>Talents details can be found<a href="https://www.wowhead.com/wotlk/guide/classes/death-knight/blood/tank-talent-builds-glyphs-pve#blood-aoe-focused" target="_blank" rel="noopener noreferrer"  style="color:#b01231;text-decoration:underline;margin-auto;">
            Here
            </a>
          </p>


          <div style="color:#b01231; margin-top: 3rem;margin-bottom: 1rem;font-weight:bold; font-size:1.2rem;">43/26/2 Double Buff Blood Death Knight Tank Talent Build</div>
          <div style="width:100%;overflow:hidden;">
            <iframe src="https://www.wowhead.com/wotlk/talent-calc/embed/death-knight/005512153330030320102013-3050505000022301-002_001s9m11xv631ts841sxd51s8g"
              style="width:100%;height:880px;transform:scale(1);border:none;background-color:#262626;"
              scrolling="no"
              frameborder="0"
              allowfullscreen>
            </iframe>
          </div>

           <p>Talents details can be found<a href="https://www.wowhead.com/wotlk/guide/classes/death-knight/blood/tank-talent-builds-glyphs-pve#double-buff" target="_blank" rel="noopener noreferrer"  style="color:#b01231;text-decoration:underline;margin-auto;">
           Here
            </a>
          </p>

        `,
    },
    { status: 200 }
  );
}
