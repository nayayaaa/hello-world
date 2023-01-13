input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.SmallHeart)
    music.playMelody("B A G A G F A C5 ", 120)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
    music.playMelody("G F G A - F E D ", 120)
})
basic.showIcon(IconNames.Happy)
