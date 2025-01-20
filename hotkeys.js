Mousetrap.bind('up', function() {
  if (game.roomsExplored == 0 && game.inSharkCutscene != true) {
    if (isFloorAllowed(game.currentFloor+1)) floorUp()
  }
})

Mousetrap.bind('down', function() {
  if (game.roomsExplored == 0 && game.inSharkCutscene != true) {
    if (isFloorAllowed(game.currentFloor-1)) floorDown()
  }
})

Mousetrap.bind('right', function() {
  if (game.roomsExplored == 0 && document.getElementById("enterFloorButton").style.display == "block" && document.getElementById("enterFloorButton").disabled == false) enterFloor()
  else if (game.roomsExplored > 0 && game.fightingMonster == false && game.returningToStairwell == false) newRoom()
})

Mousetrap.bind('left', function() {
  if (game.roomsExplored > 0 && game.fightingMonster == false) toStairwell()
})

Mousetrap.bind('a', function() {
  if (game.currentFloor == 499) {goldenEelAttack()}
  else if (game.roomsExplored > 0 && game.fightingMonster == true && game.energy > 0) {attack()}
})

Mousetrap.bind('f', function() {
  if ((game.specialItemsAcquired[1] == true || game.altarUpgradesBought[1] == true) &&game.roomsExplored > 0 && game.fightingMonster == true && game.fleeCooldown == 0 && game.energy == 100) flee()
})

Mousetrap.bind('1', function() {consumeHoney(1)})

Mousetrap.bind('2', function() {consumeHoney(2)})

Mousetrap.bind('p', function() {
  if (game.roomsExplored == 0) cocoaPrestige()
})

/*
bigShotPlaying = false
Mousetrap.bind('shift+s', function() {
  if (!bigShotPlaying) {
    console.log("[[BIG SHOT]] TIME, MOTHERFUCKERS!!!")
    nowsYourChance = new Audio("img/BIG SHOT.mp3")
    nowsYourChance.load()
    nowsYourChance.volume = 0.2
    nowsYourChance.loop = true
    nowsYourChance.play()
    bigShotPlaying = true
  }
  else {
    nowsYourChance.pause()
    nowsYourChance.currentTime = 0
    bigShotPlaying = false
  }
})*/