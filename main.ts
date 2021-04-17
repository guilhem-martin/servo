for (let index = 0; index < 4; index++) {
    pins.servoWritePin(AnalogPin.P0, 180)
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P0, 0)
    basic.pause(500)
}
