radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        pins.servoWritePin(AnalogPin.P1, 180)
        pins.servoWritePin(AnalogPin.P2, 180)
        basic.pause(2000)
        pins.servoWritePin(AnalogPin.P1, 90)
        pins.servoWritePin(AnalogPin.P2, 90)
    }
})
input.onButtonPressed(Button.AB, function () {
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
})
radio.setGroup(1)
let Pixel_Array = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
basic.forever(function () {
	
})
