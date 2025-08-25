enum RadioMessage {
    rechtdoor = 12848,
    links = 30556,
    rechts = 39515,
    achteruit = 43484,
    vooruit = 44692,
    message1 = 49434
}
radio.onReceivedMessage(RadioMessage.rechtdoor, function () {
    music.play(music.stringPlayable("B - B B B - - - ", 300), music.PlaybackMode.UntilDone)
})
radio.onReceivedMessage(RadioMessage.rechts, function () {
    CutebotPro.pwmCruiseControl(100, 20)
    basic.showArrow(ArrowNames.East)
})
radio.onReceivedMessage(RadioMessage.vooruit, function () {
    CutebotPro.fullSpeedAhead()
    basic.showArrow(ArrowNames.North)
})
radio.onReceivedMessage(RadioMessage.links, function () {
    CutebotPro.pwmCruiseControl(20, 100)
    basic.showArrow(ArrowNames.West)
})
radio.onReceivedMessage(RadioMessage.achteruit, function () {
    CutebotPro.fullAstern()
    basic.showArrow(ArrowNames.South)
})
radio.onReceivedMessage(RadioMessage.message1, function () {
    CutebotPro.pwmCruiseControl(0, 0)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
})
radio.setGroup(35)
CutebotPro.colorLight(CutebotProRGBLight.RGBA, 0xffffff)
