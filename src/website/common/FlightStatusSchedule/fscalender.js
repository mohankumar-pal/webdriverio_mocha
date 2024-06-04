const library = require('../../common/Genericlibrary.js')
const flightschedulepo = require('../../pageobjects/FlightStatusSchedule/flightschedulepo.js')
const flightstatuspo = require('../../pageobjects/FlightStatusSchedule/flightstatuspo.js')

async function selectdate(FromDate) {

    var dep = FromDate
    var depdate = dep.slice(0, 2)
    var dearturedatetext = parseInt(depdate)
    var depmonyear = dep.slice(3, 11)
    var k = 0
    await browser.pause(5000)
    for (var i = 0; i < 12; i++) {
        var montxt = await library.gettextAction(flightschedulepo.textMonth[i])
        var yeartxt = await library.gettextAction(flightschedulepo.textYear[k])

        if (depmonyear == (montxt + ' ' + yeartxt)) {

            for (var j = 0; j < await flightschedulepo.buttonDate.length; j++) {
                var day0text = await library.gettextAction(flightschedulepo.buttonDate[j])

                if (dearturedatetext == day0text) {
                    await library.clickAction(flightschedulepo.buttonDate[j])
                    break;
                }

            }
            break;
        }

        else {
            await library.clickAction(flightschedulepo.buttonNextMonArrow)
            await browser.pause(2000)
            if (montxt == 'Dec') {
                i = -1;
                k++;
            }
        }
    }
}
async function fromto(From, To) {
    await library.fillTextbox(flightschedulepo.textboxFrom, From)
    await browser.pause(1000)
    await library.waitforexistAction(flightschedulepo.optionFromToSugg[0])
    for (var sp = 0; sp < await flightschedulepo.optionFromToSugg.length; sp++) {
        var sptext = await library.gettextAction(flightschedulepo.optionFromToSugg[sp])
        if (sptext == From) {
            await library.clickAction(flightschedulepo.optionFromToSugg[sp])
        }
    }
    await browser.pause(3000)
    await library.fillTextbox(flightschedulepo.textboxTo, To)
    await browser.pause(2000)
    await library.waitforexistAction(flightschedulepo.optionFromToSugg[0])
    for (var sp = 0; sp < await flightschedulepo.optionFromToSugg.length; sp++) {
        var sptext = await library.gettextAction(flightschedulepo.optionFromToSugg[sp])
        if (sptext == To) {
            await library.clickAction(flightschedulepo.optionFromToSugg[sp])
        }
    }
}
async function calendar(FromDate) {
    var dep = FromDate
    var depdate = dep.slice(0, 2)
    var dearturedatetext = parseInt(depdate)
    var depmonyear = dep.slice(3, 11)

    await browser.pause(3000)
    for (var i = 0; i < 12; i++) {
        var montxt = await library.gettextAction(flightstatuspo.textMonth[i])
        var yeartxt = await library.gettextAction(flightstatuspo.textYear)
        if (depmonyear == (montxt + ' ' + yeartxt)) {

            for (var j = 0; j < await flightstatuspo.buttonDate.length; j++) {
                var day0text = await library.gettextAction(flightstatuspo.buttonDate[j])

                if (dearturedatetext == day0text) {
                    await await library.clickAction(flightstatuspo.buttonDate[j])
                    break;
                }

            }
            break;
        }
        else {
            await library.clickAction(flightstatuspo.buttonNextMonArrow)
            await browser.pause(2000)
        }
    }
}
exports.selectdate = selectdate;
exports.fromto = fromto;
exports.calendar = calendar;
