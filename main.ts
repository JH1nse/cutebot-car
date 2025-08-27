enum RadioMessage {
    Checkpoint1 = 25201,
    Checkpoint2 = 32327,
    Checkpoint3 = 63779,
    Checkpoint4 = 53120,
    Checkpoint1Behaald = 56413,
    Checkpoint2Behaald = 24361,
    Checkpoint3Behaald = 11045,
    Checkpoint4Behaald = 14638,
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
// Als de toeter wordt ingedrukt dan speelt de auto een toeter af met een 1/10 kans dat het een grappige toeter afspeelt in plaats van een normale
radio.onReceivedMessage(RadioMessage.rechtdoor, function () {
    funny_honk = randint(1, 10)
    if (funny_honk == 10) {
        music.play(music.stringPlayable("B A G - G - G A ", 400), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("- C5 - C5 - C5 - B ", 400), music.PlaybackMode.UntilDone)
    } else {
        music.play(music.stringPlayable("B - B B B - - - ", 300), music.PlaybackMode.UntilDone)
    }
})
radio.onReceivedMessage(RadioMessage.Finish, function () {
    radio.sendMessage(RadioMessage.Checkpoint3Behaald)
})
/**
 * Als de auto dichtbij een checkpoint komt dan verstuurt het een signaal dat het checkpoint behaald is.
 */
radio.onReceivedMessage(RadioMessage.Checkpoint1, function () {
    radio.sendMessage(RadioMessage.Checkpoint1Behaald)
})
radio.onReceivedMessage(RadioMessage.rechts, function () {
    CutebotPro.pwmCruiseControl(100, 20)
    basic.showArrow(ArrowNames.West)
})
radio.onReceivedMessage(RadioMessage.Checkpoint2, function () {
    radio.sendMessage(RadioMessage.Checkpoint2Behaald)
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
    basic.showArrow(ArrowNames.East)
})
/**
 * Als de auto een actie binnenkrijgt dan doet de auto wat die actie inhoudt
 */
radio.onReceivedMessage(RadioMessage.achteruit, function () {
    CutebotPro.fullAstern()
    basic.showArrow(ArrowNames.South)
})
// radio configureren en de lampen aanzetten
let funny_honk = 0
radio.setTransmitPower(7)
radio.setGroup(35)
CutebotPro.colorLight(CutebotProRGBLight.RGBA, 0xffffff)
