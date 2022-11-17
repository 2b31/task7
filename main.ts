let x = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
    basic.showNumber(input.lightLevel())
    x = input.lightLevel()
    if (x == 0) {
        led.setBrightness(255)
    } else if (x >= 50 && x < 100) {
        led.setBrightness(255)
    } else if (x >= 100 && x < 200) {
        led.setBrightness(255)
    } else if (x >= 200) {
        led.setBrightness(255)
    }
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
