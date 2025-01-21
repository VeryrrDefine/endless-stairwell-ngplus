monsters = [
  {name: "Big spider", health: PowiainaNum(75), damage: PowiainaNum(10)},
  {name: "Skeleton", health: PowiainaNum(100), damage: PowiainaNum(8)},
  {name: "Shadow monster", health: PowiainaNum(120), damage: PowiainaNum(12)},
  {name: "Flying eel", health: PowiainaNum(150), damage: PowiainaNum(12)},
  {name: "Eye demon", health: PowiainaNum(600), damage: PowiainaNum(45)},
  {name: "Giant ant", health: PowiainaNum(1000), damage: PowiainaNum(80)},
  {name: "Desert snake", health: PowiainaNum(1500), damage: PowiainaNum(140)},
  {name: "Tendrils", health: PowiainaNum(1800), damage: PowiainaNum(220)},
  {name: "Tortoise", health: PowiainaNum(80), damage: PowiainaNum(80)},
  {name: "Coyote", health: PowiainaNum(100), damage: PowiainaNum(100)},
  {name: "Crimson hellspawn", health: PowiainaNum(120), damage: PowiainaNum(120)},
  {name: "Arcane eel", health: PowiainaNum(130), damage: PowiainaNum(130)},
  {name: "Golden drake", health: PowiainaNum(10), damage: PowiainaNum(10)},
  {name: "Ice drake", health: PowiainaNum(12), damage: PowiainaNum(12)},
  {name: "Swamp drake", health: PowiainaNum(16), damage: PowiainaNum(16)},
  {name: "Dark drake", health: PowiainaNum(18), damage: PowiainaNum(18)},
  {name: "Glittery moth", health: PowiainaNum(10), damage: PowiainaNum(10)},
  {name: "Winged demon", health: PowiainaNum(11), damage: PowiainaNum(11)},
  {name: "Burning eye", health: PowiainaNum(12), damage: PowiainaNum(12)},
  {name: "Super Saiyan eel", health: PowiainaNum(13), damage: PowiainaNum(13)},
  {name: "Reaper", health: PowiainaNum(10), damage: PowiainaNum(10)},
  {name: "Slime worm", health: PowiainaNum(11), damage: PowiainaNum(11)},
  {name: "Anubis", health: PowiainaNum(12), damage: PowiainaNum(12)},
  {name: "God Saiyan eel", health: PowiainaNum(13), damage: PowiainaNum(13)},
  {name: "Gem eel (boss)", health: PowiainaNum(10), damage: PowiainaNum(10)},
  {name: "Water orb", health: PowiainaNum(10), damage: PowiainaNum(10)},
  {name: "Haunted blades", health: PowiainaNum(11), damage: PowiainaNum(11)},
  {name: "Deity of the deep", health: PowiainaNum(12), damage: PowiainaNum(12)},
  {name: "Wizard ant", health: PowiainaNum(13), damage: PowiainaNum(13)},
  {name: "Jelly (boss)", health: PowiainaNum(10), damage: PowiainaNum(10)},
  {name: "Golden spider", health: PowiainaNum(10), damage: PowiainaNum(10)},
  {name: "Golden ant", health: PowiainaNum(10), damage: PowiainaNum(10)},
  {name: "Golden tortoise", health: PowiainaNum(10), damage: PowiainaNum(10)},
  {name: "Golden moth", health: PowiainaNum(10), damage: PowiainaNum(10)},
  {name: "Golden reaper", health: PowiainaNum(10), damage: PowiainaNum(10)},
  {name: "Golden deity", health: PowiainaNum(10), damage: PowiainaNum(10)},
  {name: "Golden eel (boss)", health: PowiainaNum(1e15), damage: PowiainaNum(1e15)}, // 37th
  {name: "38th Monster", health: PowiainaNum(10), damage: PowiainaNum(10)}, 
  {name: "39th Monster", health: PowiainaNum(10), damage: PowiainaNum(10)}, 
  {name: "40th Monster", health: PowiainaNum(10), damage: PowiainaNum(10)}, 
  {name: "41st Monster", health: PowiainaNum(10), damage: PowiainaNum(10)}, 
  {name: "42nd Monster", health: PowiainaNum(10), damage: PowiainaNum(10)}, 
  {name: "43rd Monster", health: PowiainaNum(10), damage: PowiainaNum(10)}, 
  
  {name: "44th Monster", health: PowiainaNum(10), damage: PowiainaNum(10)}, 
  {name: "45th Monster", health: PowiainaNum(10), damage: PowiainaNum(10)}, 
  {name: "46th Monster", health: PowiainaNum(10), damage: PowiainaNum(10)}, 
  {name: "47th Monster", health: PowiainaNum(10), damage: PowiainaNum(10)}, 
  {name: "48th Monster", health: PowiainaNum(10), damage: PowiainaNum(10)}, 
  {name: "49th Monster", health: PowiainaNum(10), damage: PowiainaNum(10)}, 
]

tips = ["It seems these rooms have monsters in them. Killing them will give you XP, which will make you stronger. Try to get as strong as possible! If you travel further, the monsters will become tougher and it'll take longer to get back."
+"Did you know? This is a mod of Endless Stairwell. The game uses a new Big number js called PowiainaNum.js. It can support up to {10, 9e15, 1, 1, 1, 2}!",
"Attacking uses your energy. Attacking too fast uses lots of energy! If it hits 0 you'll have to wait to recover it!",
"Congrats on winning the battle! You can heal by consuming honey or returning to the stairwell. If you're low on energy, try a vanilla honey. Items like honey and rune fragments are more common further out.<br><br>Your rune fragments will be very useful, for both temporary and permanent boosts.",
"if you're having trouble, you can heal any time by consuming honey or returning to the stairwell. Also try using some rune buffs to your advantage!<br><br>You may notice enemies take 3 seconds for their first attack, instead of their usual 1.5. Use that to get more hits in.",
"The temporary runes will give you some helpful 45-second buffs. Watch out, they go into effect immediately! Crafting the same rune again stacks the total time.",
"It seems you'll need some more strength (maybe... level 15?) before you can get access to a helpful one-time item. Keep in mind that all items are more common further out from the stairwell.<br><br>What could be behind that door on floor 49...?",
"Something important may drop on floor 49, but it's not an easy floor...<br><br>Soon you'll have access to a wide variety of new things!",
"This lucky ring allows you to flee battles, with a cooldown. It also allows access to something new...",
"Even gaining just 1 cocoa honey will make a big difference after you reset.",
"Congrats on resetting! You'll get back to where you were in no time.<br><br>Those altar upgrades do take away your cocoa honey! Beware of that!",
"God, you stink. Seriously, I can smell you from here. You are RANCID. DISGUSTING. Bleh.",
"You're doing a lot of floor switching and room exploring there. In case you don't know, you can hold <i>enter</i> to repeat a button you've just pressed.",
"The shadow ring allows you instantly regain energy in the stairwell, as well as greatly reducing the flee cooldown. It also allows access to even higher floors...<br><br>You can gain honeyplasm by killing enemies above floor 100. Going further out and entering more difficult floors gives you a higher chance.",
"Cocoa bars give a massive boost to your cocoa honey gain. You'll need multiple if you hope to defeat any of the tier 4 enemies.",
"Congrats on gaining a dark orb! You'll get back to where you were in no time.<br><br>Every extra dark orb adds more bonuses, so it's always worth it!",
"Dark bars give a boost to XP from tier 5 enemies. Combinating them <b>does not use your dark orbs or cocoa bars</b>.<br><br>Check floor -1, you're close to getting another dark orb!",
"The tier 6 enemies have health so large it uses 'J'. Keep in mind that J works differently than the previous letters! (Jx = 10{x}10 = 10^^^...^^^10, with x arrows)",
"Monster blood increases your XP gain considerably, you'll find it of great use. Tier 1 blood producers produce it, and tiers past tier 1 produce the previous tier!<br><br>Buying blood producers does not take away your blood gems.",
"Damn, he got the glock",
"The MAC gives you access to a whopping 150 new floors! But it seems something's in the way of you reaching floor 500...<br><br>Tier 8 enemies drop golden honey, which increases attack damage. Tier 8 enemies also use 'K', which represents a repeated number of Js (1K5 = JJJJ10).",
"This eel is strong! Its health works a little differently, you'll be able to take off fractions of it without requiring K1e15 or more damage.",
"Very well done! You have reached floor 500! But now..."]

sharkQuotes = ["Thank you! I am in unrecoverable debt ;)",
"I- *cough* *cough* *wheeze* *cough* ... *cough cough COUGH cough* *wheeze* *cough* ... ... *cough*",
"A fine choice for sure, young chap. Heheheheh",
"You're too kind, man.",
"Best of luck on your travels, young adventurer!",
"I used to be cool, you know. But I took a brick to the head and HERE I AM!",
"Thank you!",
"Wow-wowzers! Thanks for the cash!",
"Danke schon!",
"I hope you consider me a GOOD FRIEND! All the other posers around here are EELS!!!",
"Someday I will RULE THIS STAIRWELL!",
"Absolutely based <img src='img/sharkDoobie.png' style='image-rendering: pixelated'>"]

cocoaBarRequirements = [PowiainaNum("1e10"), PowiainaNum("1e1e6"), PowiainaNum("1e5e7"),
 PowiainaNum("1e5e8"), PowiainaNum("1e1e14"), PowiainaNum("1e1e32"), PowiainaNum("1e1e50"),
  PowiainaNum("1e1e80"), PowiainaNum("1e1e100"), PowiainaNum("10^^50"), PowiainaNum("10^^120"), 
  PowiainaNum("10^^140"), PowiainaNum("10^^160"), PowiainaNum("10^^200"), PowiainaNum("10^^300"), 
  PowiainaNum("10^^1300"), PowiainaNum("10^^40000"), PowiainaNum("10^^800000"), PowiainaNum("10^^15000000"), 
  PowiainaNum("10^^^25"), PowiainaNum("10^^^10^6"), PowiainaNum("10^^^10^10"), PowiainaNum("10^^^10^100"), 
  PowiainaNum("10^^^10^1000"), PowiainaNum("10^^^10^10000"), PowiainaNum("J10"), PowiainaNum("J1e6"), 
  PowiainaNum("J1e9"), PowiainaNum("J1e12"), PowiainaNum("J1e16"), PowiainaNum("Infinity")]

cbmRequirements = [1, 2, 4, 5, 9, 10, 11, 13, 15, 16, 19, 20, 26, 30]

gemEelLevels = ["J1e17", "J1e18", "J1e19", "J1e20", "J1e21", "J1e22", "J1e23", "J1e30", "J1e35", "J1e40", "J1e45", 
"J1e50", "J1e60", "J1e65", "J1e66", "J1e67", "J1e68", "J1e69", "J1e70", "J1e75", "J10^^1e3e10", "J10^^1e1e25", 
"J10^^1e1e27", "J10^^1e1e37", "J10^^1e1e40", "J10^^1e1e42", "J10^^1e1e50", "J10^^1e1e54", "J10^^1e1e64", "J10^^1e1e68", 
"J10^^1e1e80", "J10^^1e1e85", "J10^^1e1e88", "JJ3e9", "JJ1e22", "JJ1e24", "JJ1e35", "JJ1e40", "JJ1e46", "JJ1e52", "JJ1e60", 
"JJ1e65", "JJ10{25}10", "JJ10{45}10", "JJ10{65}10", "JJJ10000", "JJJ20000", "JJJ30000", "JJJ40000", "JJJ50000", "JJJ60000",
 "JJJ70000", "JJJ80000", "JJJ90000", "JJJ1e5", "JJJ5e7", "JJJ1e8", "JJJ2e8", "l0 s1 a[16,[1,1,1,1],[1,1,2,1]]", 
 PowiainaNum.expansion(10, 2e16), PowiainaNum.expansion(10, 3e16), PowiainaNum.expansion(10, 4e16),
 PowiainaNum.expansion(10, 1e17), eps(1e18), eps(1e19), eps(1e20), eps(1e21), eps(1e26), eps(1e31), 
 eps(1e36), eps(Number.MAX_VALUE), eps("1e1000"), eps("e1e9"), eps("ee1e9"), "Infinity"]

sharkDialogue1 = ["WOA-WOWEE! HELLO AGAIN OLD FRIEND!",
"I could smell you approaching from a MILE away! Sharks have that ability, you know!",
"What am I doing here, you ask? I'm available wherever BUSINESS (and water) resides!",
"BUT THERE'S A PROBLEM.",
"This place has a competing salesman. And he's a total ASSHOLE. His name's Jelly.",
"I can't sell you anything, because if I try he'll come over and TRASH MY STORE!!!",
"If you could just MURDER Jelly, I'll be able to offer my services again!",
"Go now, friend! He's on floor 349! Danke schon!"]

sharkDialogue2 = ["Hmm, what's that? Jelly's too strong for you to defeat?",
"Hmmmmmmmmm",
"HMMMMMMMMM",
"Oh, I've got it! I think I might have a POWERFUL TOOL you can use to defeat Jelly!",
"Give this a try and tell me if it works on him!"]

sharkDialogue3 = ["Dammnnn, you really PULLED UP on him with the GLOCK!",
"Legendary <img src='img/sharkDoobie.png' style='image-rendering: pixelated'>",
"Alright, my services are now open to you! Feel free to take a browse and-",
"Oh, ugh. I feel horrible. H-hold on, just give me a minute.",
"Give me a minute... I... just..."]

darkOrbRequirements = [PowiainaNum("10^^50"), PowiainaNum("10^^50"), PowiainaNum("10^^^10^10000"), 
PowiainaNum("J6000"), PowiainaNum(Infinity)]

darkOrbBonuses = ["Current bonuses:<br>None",
"Current bonuses:<br>25x XP gain<br>10x honey gain (all types)<br>Cocoa bars increase honey and vanilla honey gain<br>Cocoa bar limit is 5 higher",
"Current bonuses:<br>100x XP gain<br>100x honey gain (all types)<br>Cocoa bars increase honey and vanilla honey gain<br>Cocoa bar limit is 10 higher<br>Cocoa bars are more powerful<br>Tier 4 enemies drop more XP",
"Current bonuses:<br>500x XP gain<br>10,000x honey gain (all types)<br>Keep some items on dark orb reset<br>Cocoa bars increase honey and vanilla honey gain<br>Cocoa bar limit is 15 higher<br>Cocoa bars are more powerful<br>Tier 4 enemies drop more XP<br>XP is set to cocoa boost amount on cocoa honey resets and cocoa bar resets",
"Current bonuses:<br>5000x XP gain<br>1e10x honey gain (all types)<br>Keep some items on dark orb reset<br>Cocoa bars increase honey and vanilla honey gain<br>Cocoa bar limit is 20 higher<br>Cocoa bars are more powerful<br>Tier 4 and 5 enemies drop more XP<br>XP is set to cocoa boost amount on cocoa honey resets and cocoa bar resets<br>Gain cocoa bars automatically if possible, and cocoa bars no longer reset anything"]

starPieceRequirements = [PowiainaNum("ee3.4028e38"),PowiainaNum(Infinity)]

starPieceBonuses = ["Current bonuses:<br>None",
"Current bonuses:<br>XP gain is tetrated by 2<br>plasmhoney gain is powered by 10<br>honey and vanillahoney tetrates by 2 per attacking monster<br>Dark Orb will no reset anything"]