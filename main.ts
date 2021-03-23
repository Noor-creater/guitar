input.onPinPressed(TouchPin.P2, function () {
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
})
input.onPinPressed(TouchPin.P1, function () {
    music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once)
})
