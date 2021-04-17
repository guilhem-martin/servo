for (let index = 0; index < 4; index++) {
    pins.servoWritePin(AnalogPin.P1, 180)
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P1, 0)
    basic.pause(500)
    basic.showLeds(`
        # . . . .
        . # . . .
        . . # . .
        . . . # .
        . . . . #
        `)
}
basic.clearScreen()
