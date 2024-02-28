namespace SpriteKind {
    export const project = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    target_angle += 1
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y += -15
})
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    target_angle += 5
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (your_turn) {
        your_turn = false
        myDart = darts.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . . 2 e 2 . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile, mySprite.x, mySprite.y)
        myDart.angleRate = 50
        myDart.angle = target_angle
        myDart.pow = randint(1, 250)
        myDart.throwDart()
        myDart.lifespan = randint(2000, 10000)
        myDart.setBounceOnWall(true)
    }
})
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    target_angle += -5
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    target_angle += -1
})
sprites.onOverlap(SpriteKind.project, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(mySprite, effects.disintegrate, 2000)
    sprites.destroy(myDart2)
    game.gameOver(false)
})
sprites.onCreated(SpriteKind.Projectile, function (sprite) {
    scene.cameraFollowSprite(mySprite2)
    timer.after(5000, function () {
        scene.cameraFollowSprite(mySprite)
    })
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(mySprite2, effects.disintegrate, 2000)
    sprites.destroy(myDart)
    game.gameOver(true)
})
let myDart2: Dart = null
let myDart: Dart = null
let your_turn = false
let target_angle = 0
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    6 6 6 6 6 6 6 6 . . . . . . . . 
    6 6 6 6 6 6 6 6 . . . . . . . . 
    6 6 6 6 6 6 6 6 . . . . . . . . 
    6 6 6 6 6 6 6 6 . . . . . . . . 
    6 6 6 6 6 6 6 6 . . . . . . . . 
    6 6 6 6 6 6 6 6 . . . . . . . . 
    6 6 6 6 6 6 6 6 . . . . . . . . 
    6 6 6 6 6 6 6 6 . . . . . . . . 
    6 6 6 6 6 6 6 6 . . . . . . . . 
    6 6 6 6 6 6 6 6 6 6 . . . . . . 
    6 6 6 6 6 6 6 6 . . . . . . . . 
    6 6 6 6 6 6 6 6 . . . . . . . . 
    6 6 6 6 6 6 6 6 . . . . . . . . 
    6 6 6 6 6 6 6 6 . . . . . . . . 
    6 6 6 6 6 6 6 6 . . . . . . . . 
    6 6 6 6 6 6 6 6 . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(30, 50)
mySprite2 = sprites.create(img`
    . . . . . . . . 2 2 2 2 2 2 2 2 
    . . . . . . . . 2 2 2 2 2 2 2 2 
    . . . . . . . . 2 2 2 2 2 2 2 2 
    . . . . . . . . 2 2 2 2 2 2 2 2 
    . . . . . . . . 2 2 2 2 2 2 2 2 
    . 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 
    . . . . . . 2 2 2 2 2 2 2 2 2 2 
    . . . . . . . . 2 2 2 2 2 2 2 2 
    . . . . . . . . 2 2 2 2 2 2 2 2 
    . . . . . . . . 2 2 2 2 2 2 2 2 
    . . . . . . . . 2 2 2 2 2 2 2 2 
    . . . . . . . . 2 2 2 2 2 2 2 2 
    . . . . . . . . 2 2 2 2 2 2 2 2 
    . . . . . . . . 2 2 2 2 2 2 2 2 
    . . . . . . . . 2 2 2 2 2 2 2 2 
    . . . . . . . . 2 2 2 2 2 2 2 2 
    `, SpriteKind.Enemy)
mySprite2.setPosition(200, 50)
target_angle = 0
your_turn = true
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
mySprite2.ay = 100
mySprite.ay = 100
controller.moveSprite(mySprite, 10, 0)
game.onUpdate(function () {
    if (target_angle > 60) {
        mySprite.setImage(img`
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . 6 6 6 6 
            6 6 6 6 6 6 6 6 . . . 6 6 . . . 
            6 6 6 6 6 6 6 6 . . 6 6 . . . . 
            6 6 6 6 6 6 6 6 . 6 6 . . . . . 
            6 6 6 6 6 6 6 6 6 6 . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            `)
    } else if (target_angle > 30) {
        mySprite.setImage(img`
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . 6 6 . . . . 
            6 6 6 6 6 6 6 6 . 6 6 . . . . . 
            6 6 6 6 6 6 6 6 6 6 . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            `)
    } else if (target_angle > 10) {
        mySprite.setImage(img`
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . 6 6 . . . . . 
            6 6 6 6 6 6 6 6 6 6 . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            `)
    } else if (target_angle == 0) {
        mySprite.setImage(img`
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 6 6 6 . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            `)
    } else if (target_angle > -10) {
        mySprite.setImage(img`
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 6 6 . . . . . . 
            6 6 6 6 6 6 6 6 . 6 6 . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            `)
    } else if (target_angle > -30) {
        mySprite.setImage(img`
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 6 6 . . . . . . 
            6 6 6 6 6 6 6 6 . 6 6 . . . . . 
            6 6 6 6 6 6 6 6 . . 6 6 . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            `)
    } else if (target_angle > -60) {
        mySprite.setImage(img`
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 6 6 . . . . . . 
            6 6 6 6 6 6 6 6 . 6 6 . . . . . 
            6 6 6 6 6 6 6 6 . . 6 6 . . . . 
            6 6 6 6 6 6 6 6 . . . 6 6 . . . 
            6 6 6 6 6 6 6 6 . . . . 6 6 6 6 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            `)
    } else if (false) {
    	
    }
    if (your_turn) {
        mySprite.sayText(target_angle, 100, false)
    }
    if (target_angle > 90) {
        target_angle = 90
    }
    if (target_angle < -90) {
        target_angle = -90
    }
})
game.onUpdateInterval(randint(1000, 3000), function () {
    myDart2 = darts.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . 2 e 2 . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.project, mySprite2.x, mySprite2.y)
    myDart2.angleRate = 50
    myDart2.angle = randint(190, 100)
    myDart2.throwDart()
    your_turn = true
    myDart2.lifespan = randint(2000, 10000)
    myDart2.setBounceOnWall(true)
    myDart2.pow = randint(1, 250)
})
