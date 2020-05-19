namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairSouth, function (sprite, location) {
    game.over(true)
})
function level3 () {
    tiles.setTilemap(tiles.createTilemap(
            hex`1000100002020204020202020203030303030303020303030203030303030202020302030203020202030202020202030203020302030203020302030303030302030203020302030203020302020202020202030203020302030203030303020203030302030203020302020203030303030203020302030203010102030302020202030203020302020101020302020303020302030203030202020203020303030303020302020303030303030202020202030203030203020302020302030303030302030202030203030203020202020303020302020202030302020303030202020203030303030303030203030303020202020202020202020202020202020202`,
            img`
2 2 2 . 2 2 2 2 2 . . . . . . . 
2 . . . 2 . . . . . 2 2 2 . 2 . 
2 . 2 2 2 . 2 2 2 2 2 . 2 . 2 . 
2 . 2 . 2 . 2 . . . . . 2 . 2 . 
2 . 2 . 2 . 2 . 2 2 2 2 2 2 2 . 
2 . 2 . 2 . 2 . . . . 2 2 . . . 
2 . 2 . 2 . 2 2 2 . . . . . 2 . 
2 . 2 . 2 . . . 2 . . 2 2 2 2 . 
2 . 2 . 2 2 . . 2 . 2 2 . . 2 . 
2 . 2 . . 2 2 2 2 . 2 . . . . . 
2 . 2 2 . . . . . . 2 2 2 2 2 . 
2 . . 2 . 2 . 2 2 . 2 . . . . . 
2 . 2 2 . 2 . . 2 . 2 2 2 2 . . 
2 . 2 2 2 2 . . 2 2 . . . 2 2 2 
2 . . . . . . . . 2 . . . . 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tilePath5,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass2,sprites.dungeon.stairSouth],
            TileScale.Sixteen
        ))
    info.startCountdown(25)
    controller.moveSprite(mySprite)
    tiles.placeOnRandomTile(mySprite, sprites.castle.tilePath5)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.buttonPink)
    scene.cameraFollowSprite(mySprite)
    mySprite.setFlag(SpriteFlag.StayInScreen, true)
}
function level2 () {
    tiles.setTilemap(tiles.createTilemap(
            hex`1000100006060606060606060606060606060606060303030303030303030303030303060603060603060603060606060306030606030603030306030608080603060306060306030505060306030306030603060603030305050603060303060306030606030606060606030603030603060306060306030603030306030306030603060603060306060606060303060306030606030603030303030303060603060306060306030306060606060603030603060603060303030303030303030303030606030603030303030303060606060303060306060606060606060603030306030603030303030303030303030603060306060606060606060606060606030303`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 2 . 2 2 . 2 2 2 2 . 2 . 2 
2 . 2 . . . 2 . 2 . . 2 . 2 . 2 
2 . 2 . . . 2 . 2 . . 2 . 2 . 2 
2 . . . . . 2 . 2 . . 2 . 2 . 2 
2 . 2 2 2 2 2 . 2 . . 2 . 2 . 2 
2 . 2 . 2 . . . 2 . . 2 . 2 . 2 
2 . 2 . 2 2 2 2 2 . . 2 . 2 . 2 
2 . 2 . . . . . . . 2 2 . 2 . 2 
2 . 2 . . 2 2 2 2 2 2 . . 2 . 2 
2 . 2 . . . . . . . . . . . . 2 
2 . 2 . . . . . . . 2 2 2 2 . . 
2 . 2 2 2 2 2 2 2 2 2 . . . 2 . 
2 . . . . . . . . . . . 2 . 2 . 
2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 
`,
            [myTiles.tile0,sprites.vehicle.roadHorizontal,sprites.builtin.coral5,sprites.builtin.oceanSand3,sprites.builtin.brick,sprites.castle.tileGrass2,sprites.builtin.oceanDepths8,sprites.builtin.oceanDepths9,sprites.dungeon.stairNorth],
            TileScale.Sixteen
        ))
    info.startCountdown(20)
    controller.moveSprite(mySprite)
    tiles.placeOnRandomTile(mySprite, sprites.castle.tileGrass2)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.buttonPink)
    scene.cameraFollowSprite(mySprite)
    mySprite.setFlag(SpriteFlag.StayInScreen, true)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function (sprite, location) {
    level3()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    level2()
})
let mySprite: Sprite = null
tiles.setTilemap(tiles.createTilemap(
            hex`1000100006060606060606060606060606060606070d060d0d0d0d0d0d0d0d0d0d0d0d06070d0d0d0d0606060d060606060d0d060606060606060d060d0d0d060d0d0d06060d0d0d0d0d0d0d0d0d0d060d060d06060d0d0d0d0d0d06060606060d060d0606060606060d0d060d0d0d060d060d06060d0d0d060d0d060d0d0d060d060606060d060d060d0d060d0606060d0d0d06060d0606060d0d060d0d0d0d0d060d06060d060d0d0d0d060d060d0d06060d06060d0d0d0d0d0d0606060d0d060d0d06060d060606060d0d0d06060d06060606060d0d0d0d06060d0d0d060d0d0d0d0e060d0d0d0d0d060d0d0d0d0d0d0d0d0e06060606060606060606060606060606`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . 2 . . . . . . . . . . . . 2 
. . . . . 2 2 2 . 2 2 2 2 . . 2 
2 2 2 2 2 2 . 2 . . . 2 . . . 2 
2 . . . . . . . . . . 2 . 2 . 2 
2 . . . . . . 2 2 2 2 2 . 2 . 2 
2 2 2 2 2 . . 2 . . . 2 . 2 . 2 
2 . . . 2 . . 2 . . . 2 . 2 2 2 
2 . 2 . 2 . . 2 . 2 2 2 . . . 2 
2 . 2 2 2 . . 2 . . . . . 2 . 2 
2 . 2 . . . . 2 . 2 . . 2 2 . 2 
2 . . . . . . 2 2 2 . . 2 . . 2 
2 . 2 2 2 2 . . . 2 2 . 2 2 2 2 
2 . . . . 2 2 . . . 2 . . . . . 
2 . . . . . 2 . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.builtin.forestTiles25,sprites.builtin.forestTiles21,sprites.builtin.forestTiles17,sprites.builtin.forestTiles22,sprites.builtin.oceanDepths0,sprites.dungeon.floorLight4,sprites.dungeon.stairWest,sprites.builtin.forestTiles2,sprites.dungeon.hazardSpike,sprites.dungeon.buttonTeal,sprites.builtin.field1,sprites.dungeon.hazardLava1,sprites.dungeon.hazardLava0,sprites.dungeon.buttonPink],
            TileScale.Sixteen
        ))
info.startCountdown(15)
mySprite = sprites.create(img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 
c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c 
a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.placeOnRandomTile(mySprite, sprites.castle.tileGrass2)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.buttonPink)
scene.cameraFollowSprite(mySprite)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
