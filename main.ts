function Spiele () {
    Kugel = game.createSprite(0, 0)
    Zufall = randint(16 * (Runden - 1), 16 * Runden)
    for (let Position = 0; Position <= Zufall - 1; Position++) {
        Kugel.move(1)
        if (Kugel.get(LedSpriteProperty.X) % 4 == 0 && Kugel.get(LedSpriteProperty.Y) % 4 == 0) {
            Kugel.turn(Direction.Right, 90)
        }
        basic.pause(Pause)
        if (Position % 16 == 0) {
            Pause = Pause * 2
        }
    }
    if (Kugel.isTouching(Spieler)) {
        Kugel.delete()
        basic.showIcon(IconNames.Happy)
    } else {
        Kugel.delete()
        basic.showIcon(IconNames.Sad)
    }
    basic.pause(1000)
}
input.onButtonPressed(Button.A, function () {
    Spieler.move(1)
    if (Spieler.get(LedSpriteProperty.X) % 4 == 0 && Spieler.get(LedSpriteProperty.Y) % 4 == 0) {
        Spieler.turn(Direction.Right, 90)
    }
})
input.onButtonPressed(Button.B, function () {
    Spiele()
})
let Zufall = 0
let Kugel: game.LedSprite = null
let Pause = 0
let Runden = 0
let Spieler: game.LedSprite = null
Spieler = game.createSprite(0, 0)
Runden = 4
Pause = 30
