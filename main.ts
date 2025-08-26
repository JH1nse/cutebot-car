enum RadioMessage {
    Checkpoint1 = 25201,
    Checkpoint2 = 32327,
    Checkpoint3 = 63779,
    Checkpoint4 = 53120,
    StartTijd = 340,
    Finish = 5694,
    rechtdoor = 12848,
    links = 30556,
    rechts = 39515,
    achteruit = 43484,
    vooruit = 44692,
    message1 = 49434,
    Start = 56380,
    rem = 58635
}
radio.onReceivedMessage(RadioMessage.rechtdoor, function () {
	
})
radio.onReceivedMessage(RadioMessage.rechts, function () {
    CutebotPro.pwmCruiseControl(100, 20)
    basic.showArrow(ArrowNames.East)
})
radio.onReceivedMessage(RadioMessage.rem, function () {
    CutebotPro.pwmCruiseControl(0, 0)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
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
radio.setTransmitPower(7)
radio.setGroup(35)
CutebotPro.colorLight(CutebotProRGBLight.RGBA, 0xffffff)
