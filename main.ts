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
            . . . . . . . 6 . . . . . . . . 
            . . . . . . 6 e 6 . . . . . . . 
            . . . . . . . 6 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile, mySprite.x, mySprite.y)
        myDart.angleRate = randint(50, 100)
        myDart.setBounceOnWall(true)
        myDart.angle = target_angle
        myDart.setTrace(true)
        myDart.pow = power2
        myDart.lifespan = 10000
        timer.after(500, function () {
            myDart.throwDart()
        })
    }
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    power2 += -5
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    power2 += 1
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    power2 += -1
})
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    target_angle += -5
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    target_angle += -1
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.project, function (sprite, otherSprite) {
    sprites.destroy(myDart, effects.disintegrate, 500)
    sprites.destroy(myDart2, effects.disintegrate, 500)
})
sprites.onOverlap(SpriteKind.project, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(mySprite, effects.disintegrate, 2000)
    sprites.destroy(myDart2)
    game.gameOver(false)
})
sprites.onCreated(SpriteKind.Projectile, function (sprite) {
    animation.runImageAnimation(
    mySprite,
    [img`
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 6 6 6 6 . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        `,img`
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . 6 . 
        6 6 6 6 6 6 6 6 6 6 6 6 . 6 e 6 
        6 6 6 6 6 6 6 6 6 . . . . . 6 . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        `,img`
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 6 6 . . . . 6 
        6 6 6 6 6 6 6 6 6 . . . . . 6 e 
        6 6 6 6 6 6 6 6 6 . . . . . . 6 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        `,img`
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 6 . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . 6 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        `,img`
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        `],
    100,
    false
    )
    scene.cameraFollowSprite(myDart)
    timer.after(5000, function () {
        scene.cameraFollowSprite(mySprite)
    })
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(mySprite2, effects.disintegrate, 2000)
    sprites.destroy(myDart)
    game.gameOver(true)
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    power2 += 5
})
let myDart2: Dart = null
let myDart: Dart = null
let power2 = 0
let your_turn = false
let target_angle = 0
let mySprite2: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666666666666666666666666ff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    66666666666666666666666fffff6666666666666666666666666666666666666666666666fff66666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666ffffffff666666666666666666666666666666666666666666666666ffffff6666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666ffffffffff6666666666666666666666666666666666666666666666666ffffffffff666666666666666666666666666666666666666666666666666666666666666666666666666
    666666666666fffffffffffff666666666666666666666666666666666666666666666666666fffffffffffff66666666666666666666666666666666666666666666666666666666116666666666666
    66666666ffffffffffffffff66666666666666666666666666666666666666666666666666666ffffffffffffffff6666666666666666666666666666666666666666666666666611116666666666666
    66666ffffffffffffffffff6666666666666666666666666666666116666666666666666666666fffffffffffffffffff666666666666666666666666666666666666666666666111111666666666666
    ffffffffffffffffffffff666666666666666666666666666666611116666666666666666666666ffffffffffffffffffffff66666666666666666666666666666666666666661111111666666666666
    fffffffffffffffffffff6666666666666666666666666666661111116666666666666666666666ffffffffffffffffffffffffff6666666666666666666666666666666666111111111666666666666
    ffffffffffffffffffff666666666666666666666666666666111111116666666666666666666666fffffffffffffffffffffffffffff666666666666666666666666666661111111111166666666666
    fffffffffffffffffff66666666666666666666666666666611111111116666666666666666666666fffffffffffffffffffffffffffffff666666666666666666666666111111111111166666666666
    ffffffffffffffffff6666666666666666666666666666611111111111116666666666666666666666ffffffffffffffffffffffffffffff666666666666666666666661111111111111116666666666
    ffffffffffffffffff66666666666666666666666666661111111111111116666666666666666666666fffffffffffffffffffffffffffff666666666666666666666611111111111111116666666666
    fffffffffffffffff666666666666666666666666666611111111111111116666666666666666666666ffffffffffffffffffffffffff666666666666666666666661111111111111111116666666666
    ffffffffffffffff666666666666666666666666666bbbbbbbbbbbbbbbbbbb6666666666666666666666ffffffffffffffffffff66666666666666666666666666611111111111111111111666666666
    fffffffffffffff666666666666666666666666666bbbbbbbbbbbbbbbbbbbbb6666666666666666666666ffffffffffffff666666666666666666666666666666b111111111111111111111666666666
    ffffffffffffff666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbb6666666666666666666666fffffffff666666666666666666666666666666666bbbb1111111111111111111166666666
    fffffffffffff666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbb6666666666666666666666fff6666666666666666666666666666666666666bbbbbbbbb111111111111111166666666
    ffffffffffff66666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbb666666666666666666666666666666666666666666666666666666666666bbbbbbbbbbbbbb111111111111166666666
    fffffffffff66666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbb6666666666666666666666666666666666666666666666666666666666bbbbbbbbbbbbbbbbbb111111111116666666
    ffffffffff66666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb6666666666666666666666666666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbb11111116666666
    fffffffff6666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb66666666666666666666666666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbb1111b666666
    ffffffff6666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb666666666666666666666666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1166666
    fffffff6666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb6666666666666666666666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb666666
    fff66f66666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb66666666666666666666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb66666
    666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb66666666666666666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb66666
    66666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb666666666666666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb6666
    666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb666666666666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb6666
    666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb66666666666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb6666
    666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb666666666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb666
    66666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb666666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb666
    666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb6666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb66
    66666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb6666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb66
    6666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb66
    66666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb6666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb6
    6666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb6666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb6
    666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb66666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    66666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb66666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb6666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    66666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb66666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    6666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb66666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    66666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    6666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb66666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    6666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    6bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88888888888888888888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    88bbbbbbbbbbbbbbbbbbbbbbbbbb8888888888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb888888888888888888888888888888888888888888bbbbbbbbbbbbbbbbbbbbbbbbbb
    88888888888888888888888888888888888888888888888888888888888bbbbbbbbbbbbbbbbbbbbbbbbb888888888888888888888888888888888888888888888888888888888888bbbbbbbbbbbbbbbb
    88888888888888888888888888888888888888888888888888888888888888888888888888888bbbbb888888888888888888888888888888888888888888888888888888888888888888888888bbbbbb
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    `)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.OnlyHorizontal)
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
mySprite.setPosition(50, 270)
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
mySprite2.setPosition(600, 50)
target_angle = blockSettings.readNumber("angle")
your_turn = true
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
mySprite2.ay = 100
mySprite.ay = 100
power2 = blockSettings.readNumber("power")
game.onUpdate(function () {
    if (power2 < 0) {
        power2 = 0
    } else if (power2 > 250) {
        power2 = 250
    } else {
    	
    }
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
        mySprite.sayText("" + target_angle + " shot angle " + power2 + " power", 100, false)
    }
    if (target_angle > 90) {
        target_angle = 90
    }
    if (target_angle < -90) {
        target_angle = -90
    }
})
game.onUpdate(function () {
    blockSettings.writeNumber("angle", target_angle)
    blockSettings.writeNumber("power", power2)
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
    myDart2.pow = randint(1, 250)
    myDart2.throwDart()
    your_turn = true
    myDart2.setBounceOnWall(true)
    myDart2.lifespan = 10000
})
