import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    {
      buildName: "Blood DK",
      description: `<div id="ftwp-postcontent" bis_skin_checked="1">




<p>Combat Rogues are light-armored combatants that prefer to directly engage their enemies, choosing to wield heavy weapons that hack and slash their foes. Their gameplay uses very few elements of stealth, choosing to venture headfirst directly into the battlefield, rapidly attacking enemies in a killing spree. Their proficiency with weapons of various types speaks for itself — the Combat Rogue’s wake is riddled with the corpses of slain monsters.</p>



<p>Combat Rogues got a bad rap in TBC due to their lack of utility, but in truth, they were always among the strongest DPS specs in the game — though Fury Warriors consistently stole the spotlight from us. We finally get our revenge in Wrath of the Lich King — not only are Combat Rogues the kings of melee single target DPS, but they’ve been improved in a host of ways, having access to really powerful utility in the form of <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/spell/57934" target="_blank" class="wowclassicdb-link misc" bis_skin_checked="1"><img class="wowclassicdb-link-icon wowclassicdb-icon-size-small" src="https://cdn.wowclassicdb.com/icons/ability_rogue_tricksofthetrade.jpg" alt="Tricks of the Trade">Tricks of the Trade</a>, and top-tier AoE capabilities in the form of <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/spell/51723" target="_blank" class="wowclassicdb-link misc" bis_skin_checked="1"><img class="wowclassicdb-link-icon wowclassicdb-icon-size-small" src="https://cdn.wowclassicdb.com/icons/ability_rogue_fanofknives.jpg" alt="Fan of Knives">Fan of Knives</a> — the latter being an area they were traditionally lacking in. Moreover, due to talent changes, we finally have a lot more flexibility in picking weapons — no longer are we forced to pray for powerful swords, such as the <a rel="noreferrer noopener" href="https://wowclassicdb.com/wotlk/item/32837" target="_blank" class="wowclassicdb-link q-legendary" bis_skin_checked="1"><img class="wowclassicdb-link-icon wowclassicdb-icon-size-small" src="https://cdn.wowclassicdb.com/icons/inv_weapon_glave_01.jpg" alt="Warglaive of Azzinoth">Warglaive of Azzinoth</a>, in order to be competitive.</p>



<p>This guide will teach you everything you need to know about playing a Combat Rogue in PvE content, with a focus on raiding. We will cover everything from talents and equipment, to ability rotations and macros. By the time you’re done reading this guide, you will be showing those Fury Warriors who’s boss, looking down on them from the top of the DPS meter!</p>



<h2 id="ftoc-combat-rogue-strengths-weaknesses" class="wp-block-heading ftwp-heading">Combat Rogue Strengths &amp; Weaknesses</h2>



<h3 id="ftoc-strengths" class="wp-block-heading ftwp-heading"><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-ast-global-color-4-color">Strengths</mark></h3>



<ul class="wp-block-list">
<li><span style="background-color: rgba(0, 0, 0, 0); color: var(--wp--preset--color--ast-global-color-4) ; font-size: 1rem;">Top tier single target damage</span><br>Combat Rogues have some of the strongest single target DPS in the game. With good play, you’ll always find yourself near the top of DPS meters.</li>
</ul>



<ul class="wp-block-list">
<li><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-ast-global-color-4-color">Top tier AoE damage</mark><br>Like most other melee, Rogues traditionally fared poorly on AoE damage (meaning 5+ targets), which was typically the domain of Warlocks and Mages. This is no longer the case: the addition of <a href="https://wowclassicdb.com/wotlk/spell/51723" target="_blank" rel="noreferrer noopener" class="wowclassicdb-link misc" bis_skin_checked="1"><img class="wowclassicdb-link-icon wowclassicdb-icon-size-small" src="https://cdn.wowclassicdb.com/icons/ability_rogue_fanofknives.jpg" alt="Fan of Knives">Fan of Knives</a> propels Rogues to the top of the meters in AoE-heavy fights, right alongside casters, and way above most other melee specs, which typically are still limited to cleaving 3-4 targets at a time.</li>
</ul>



<ul class="wp-block-list">
<li><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-ast-global-color-4-color">Simple, unchanged rotation</mark><br>While WotLK made the DPS rotation of a lot of specs more complex, things barely changed at all for Combat Rogues — our rotation is more or less unchanged, and it’s still arguably the simplest in the game, with no fancy macros needed to do well. That makes getting into Combat Rogue very easy, particularly for people that want to try a new class, or who want to play their Rogue alt more.</li>
</ul>



<ul class="wp-block-list">
<li><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-ast-global-color-4-color">Highly stackable spec</mark><br>Unlike in TBC, where most guilds would typically only bring 1 Rogue at most for the <a href="https://wowclassicdb.com/wotlk/spell/8647" target="_blank" rel="noreferrer noopener" class="wowclassicdb-link misc" bis_skin_checked="1"><img class="wowclassicdb-link-icon wowclassicdb-icon-size-small" src="https://cdn.wowclassicdb.com/icons/ability_warrior_riposte.jpg" alt="Expose Armor">Expose Armor</a> debuff, Rogues are now highly stackable thanks to their incredibly high damage and the incredibly useful <a href="https://wowclassicdb.com/wotlk/spell/57934" target="_blank" rel="noreferrer noopener" class="wowclassicdb-link misc" bis_skin_checked="1"><img class="wowclassicdb-link-icon wowclassicdb-icon-size-small" src="https://cdn.wowclassicdb.com/icons/ability_rogue_tricksofthetrade.jpg" alt="Tricks of the Trade">Tricks of the Trade</a>. Many guilds may bring as many as 4 to 5 Combat Rogues in their Icecrown Citadel rosters. Gone are the days of having to beg people for a raid spot!</li>
</ul>



<h3 id="ftoc-weaknesses" class="wp-block-heading ftwp-heading"><mark style="background-color:rgba(0, 0, 0, 0);color:#db2323" class="has-inline-color">Weaknesses</mark></h3>



<ul class="wp-block-list">
<li><mark style="background-color:rgba(0, 0, 0, 0);color:#db2323" class="has-inline-color">Very high loot competition</mark><br>A downside of being a highly stackable class that most raid groups will have multiple of is that, well, you’re competing against a LOT of people. This gets particularly ugly when it comes to weapons, as each raid tier typically has ~2 viable main hands and ~2 viable off-hands, so if you’ve got a whole bunch of Rogues, some of them will likely have to settle with weaker weapons, or may just never get a weapon upgrade that tier if you get unlucky with drops.</li>
</ul>



<ul class="wp-block-list">
<li><mark style="background-color:rgba(0, 0, 0, 0);color:#db2323" class="has-inline-color">Highly reliant on gear</mark><br>Combat Rogues are strong, dealing incredible damage, as mentioned in the Strengths section. However, they’re highly reliant on good quality gear in order to achieve this strength — their base damage is not particularly impressive, but rather, their scaling is great. For the first couple of raid tiers, many Rogues will choose to go Assassination instead, biding their time until they’ve got the gear to switch to Combat.</li>
</ul>



<ul class="wp-block-list">
<li><mark style="background-color:rgba(0, 0, 0, 0);color:#db2323" class="has-inline-color">Limited utility</mark><br>Combat Rogues don’t have weak utility, by any means — our <a href="https://wowclassicdb.com/wotlk/spell/57934" target="_blank" rel="noreferrer noopener" class="wowclassicdb-link misc" bis_skin_checked="1"><img class="wowclassicdb-link-icon wowclassicdb-icon-size-small" src="https://cdn.wowclassicdb.com/icons/ability_rogue_tricksofthetrade.jpg" alt="Tricks of the Trade">Tricks of the Trade</a> on its own is already plenty powerful. However, compared to other classes, we just don’t have that much to offer besides our damage, having the fewest raid buff / debuff effects of any class in the game.</li>
</ul>



<h2 id="ftoc-combat-rogue-utility" class="wp-block-heading ftwp-heading">Combat Rogue Utility</h2>



<p>Besides their damage, Combat Rogues bring the following raid buffs &amp; debuffs to a raid:</p>



<ul class="wp-block-list">
<li><a href="https://wowclassicdb.com/wotlk/spell/57934" target="_blank" rel="noreferrer noopener" class="wowclassicdb-link misc" bis_skin_checked="1"><img class="wowclassicdb-link-icon wowclassicdb-icon-size-small" src="https://cdn.wowclassicdb.com/icons/ability_rogue_tricksofthetrade.jpg" alt="Tricks of the Trade">Tricks of the Trade</a><br>Completely unique utility that only Rogues have. The threat transfer component is incredibly powerful on its own, evidenced by Hunters and their <a href="https://wowclassicdb.com/wotlk/spell/34477" target="_blank" rel="noreferrer noopener" class="wowclassicdb-link misc" bis_skin_checked="1"><img class="wowclassicdb-link-icon wowclassicdb-icon-size-small" src="https://cdn.wowclassicdb.com/icons/ability_hunter_misdirection.jpg" alt="Misdirection">Misdirection</a> throughout TBC, but the damage increase component coupled with the relatively low cooldown makes this ability truly amazing. Use it on your strongest damage dealer on cooldown, and particularly during <a href="https://wowclassicdb.com/wotlk/spell/32182" target="_blank" rel="noreferrer noopener" class="wowclassicdb-link misc" bis_skin_checked="1"><img class="wowclassicdb-link-icon wowclassicdb-icon-size-small" src="https://cdn.wowclassicdb.com/icons/ability_shaman_heroism.jpg" alt="Heroism">Heroism</a> / <a href="https://wowclassicdb.com/wotlk/spell/2825" target="_blank" rel="noreferrer noopener" class="wowclassicdb-link misc" bis_skin_checked="1"><img class="wowclassicdb-link-icon wowclassicdb-icon-size-small" src="https://cdn.wowclassicdb.com/icons/spell_nature_bloodlust.jpg" alt="Bloodlust">Bloodlust</a>, and your raid’s DPS will increase very noticeably. More importantly, your target will absolutely love you for life, which is more than what most other classes can brag about!</li>
</ul>



<ul class="wp-block-list">
<li><mark><mark style="background-color:rgba(0, 0, 0, 0);color:#fef140" class="has-inline-color">4% increased physical damage taken (does not stack)</mark></mark> – <a href="https://wowclassicdb.com/wotlk/spell/58413" target="_blank" rel="noreferrer noopener" class="wowclassicdb-link misc" bis_skin_checked="1"><img class="wowclassicdb-link-icon wowclassicdb-icon-size-small" src="https://cdn.wowclassicdb.com/icons/ability_creature_disease_03.jpg" alt="Savage Combat">Savage Combat</a><br>Poor Arms Warriors — they had one piece of must-have unique utility in their <a href="https://wowclassicdb.com/wotlk/spell/29859" target="_blank" rel="noreferrer noopener" class="wowclassicdb-link misc" bis_skin_checked="1"><img class="wowclassicdb-link-icon wowclassicdb-icon-size-small" src="https://cdn.wowclassicdb.com/icons/ability_warrior_bloodfrenzy.jpg" alt="Blood Frenzy">Blood Frenzy</a> 4% increased physical damage taken debuff, and we stole it from them, being the nasty little thieves that we are. Given that we’re significantly stronger than Arms Warriors in Wrath, it will fall to us to apply this very important debuff on bosses. Good thing that this talent is just incredibly strong anyway, meaning every Combat Rogue will be applying it effortlessly.</li>
</ul>



<ul class="wp-block-list">
<li><mark style="background-color:rgba(0, 0, 0, 0);color:#fef140" class="has-inline-color">20% armor reduction (does not stack)</mark> – <a href="https://wowclassicdb.com/wotlk/spell/8647" target="_blank" rel="noreferrer noopener" class="wowclassicdb-link misc" bis_skin_checked="1"><img class="wowclassicdb-link-icon wowclassicdb-icon-size-small" src="https://cdn.wowclassicdb.com/icons/ability_warrior_riposte.jpg" alt="Expose Armor">Expose Armor</a><br>In Wrath the <a href="https://wowclassicdb.com/wotlk/spell/14169" target="_blank" rel="noreferrer noopener" class="wowclassicdb-link misc" bis_skin_checked="1"><img class="wowclassicdb-link-icon wowclassicdb-icon-size-small" src="https://cdn.wowclassicdb.com/icons/ability_warrior_riposte.jpg" alt="Improved Expose Armor">Improved Expose Armor</a> talent is reworked, meaning that we unfortunately offer the same 20% armor reduction as Warriors do with their <a href="https://wowclassicdb.com/wotlk/spell/7386" target="_blank" rel="noreferrer noopener" class="wowclassicdb-link misc" bis_skin_checked="1"><img class="wowclassicdb-link-icon wowclassicdb-icon-size-small" src="https://cdn.wowclassicdb.com/icons/ability_warrior_sunder.jpg" alt="Sunder Armor">Sunder Armor</a>. Given that it is a lot more costly for us to apply <a href="https://wowclassicdb.com/wotlk/spell/8647" target="_blank" rel="noreferrer noopener" class="wowclassicdb-link misc" bis_skin_checked="1"><img class="wowclassicdb-link-icon wowclassicdb-icon-size-small" src="https://cdn.wowclassicdb.com/icons/ability_warrior_riposte.jpg" alt="Expose Armor">Expose Armor</a> due to its combo point cost, this means that in practice we lose this debuff entirely. The only use for it is if your Warriors all happen to die, or cannot attend a raid — the debuff is a must-have, we’re just worse at applying it.</li>
</ul>



<ul class="wp-block-list">
<li><mark style="background-color:rgba(0, 0, 0, 0);color:#fef140" class="has-inline-color">30% cast speed slow (does not stack)</mark> – <a href="https://wowclassicdb.com/wotlk/item/5237" target="_blank" rel="noreferrer noopener" class="wowclassicdb-link q-common" bis_skin_checked="1"><img class="wowclassicdb-link-icon wowclassicdb-icon-size-small" src="https://cdn.wowclassicdb.com/icons/spell_nature_nullifydisease.jpg" alt="Mind-numbing Poison">Mind-numbing Poison</a><br>Just like the Warlock equivalent (<a href="https://wowclassicdb.com/wotlk/spell/11719" target="_blank" rel="noreferrer noopener" class="wowclassicdb-link misc" bis_skin_checked="1"><img class="wowclassicdb-link-icon wowclassicdb-icon-size-small" src="https://cdn.wowclassicdb.com/icons/spell_shadow_curseoftounges.jpg" alt="Curse of Tongues">Curse of Tongues</a>), our cast speed slow spell has seen a significant nerf, going from a 70% cast speed slow to 30%. It’s still very useful on specific boss fights however, such as Sindragosa and her <a href="https://wowclassicdb.com/wotlk/spell/71049" class="wowclassicdb-link misc" bis_skin_checked="1"><img class="wowclassicdb-link-icon wowclassicdb-icon-size-small" src="https://cdn.wowclassicdb.com/icons/spell_frost_icefloes.jpg" alt="Blistering Cold">Blistering Cold</a>. Having said that, Warlocks will typically be better at applying this debuff thanks to their 30 yard range, but it’s good that we can step up and offer it ourselves if necessary.</li>
</ul>



<h2 id="ftoc-conclusion" class="wp-block-heading ftwp-heading">Conclusion</h2>



<p>We hope this guide has been able to help you decide if Combat Rogue is the class / spec for you. Make sure to check out our other sections, such as talents, gear, gems etc, to get more information on how to improve your performance as a Combat Rogue in WotLK!</p>
</div><iframe src="https://www.wowhead.com/wotlk/talent-calc/embed/hunter" width="100%" height="400" />`,
    },
    { status: 200 }
  );
}
