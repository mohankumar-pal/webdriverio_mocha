const seatmap = require('../../pageobjects/Checkin/checkinpo.js')
const library = require('../Genericlibrary.js')

async function NoSeatSelection() {
    while (await library.elementdisplayedAction(seatmap.textNoSeatMap)) {
        await library.clickAction(seatmap.buttonSkipSeat)
        await browser.pause(3000)
    }
}
async function seatselection(seatidx, seatconf) {
    if (await library.elementdisplayedAction(seatmap.textNoSeatMap))
        await NoSeatSelection()

    else {
        console.log("seatpax:" + await seatmap.seatpax.length)
        for (var i = 0; i < await seatmap.seatpax.length; i++) {

            await library.pagescrolltomiddleAction(seatmap.seatpax[i])
            await browser.pause(2000)
            if (await library.elementdisplayedAction(seatmap.textNoSeatMap)) {
                await NoSeatSelection()
                break;
            }
            else {
                if (await seatidx.length > 0) {
                    await library.pagescrolltomiddleAction(seatidx[i])
                    await browser.pause(3000)
                    await library.clickAction(seatidx[i])
                    await browser.pause(3000)
                    await library.pagetimeout(seatmap.confirmpageload)
                    if (await library.elementdisplayedAction(seatmap.buttonExtralegSeatConfirm))
                        await library.clickAction(seatmap.buttonExtralegSeatConfirm)
                    if (await library.elementdisplayedAction(seatconf))
                        await library.clickAction(seatconf)
                    await library.pagetimeout(seatmap.confirmpageload)
                    if (await library.elementdisplayedAction(seatmap.buttonContinueSeat))
                        await library.clickAction(seatmap.buttonContinueSeat)
                    await library.pagetimeout(seatmap.confirmpageload)
                    await browser.pause(2000)
                    if (await library.elementdisplayedAction(seatmap.seatrightarr)) {
                        await library.pagescrolltomiddleAction(seatmap.seatrightarr)
                        await library.clickAction(seatmap.seatrightarr)
                        await browser.pause(2000)
                    }
                }
            }
        }
    }
    console.log("seats end")
    await browser.pause(4000)

}

async function nextflight(seatidx, seatconf) {
    while (await library.elementdisplayedAction(seatmap.buttonNxtFlight)) {
        console.log("next flight")
        await library.pagescrollAction(seatmap.buttonNxtFlight)
        await library.clickAction(seatmap.buttonNxtFlight)
        await library.pagetimeout(seatmap.confirmpageload)
        if (await library.elementdisplayedAction(seatmap.buttonContinueSeat))
            await library.clickAction(seatmap.buttonContinueSeat)
        await browser.pause(6000)
        await library.pagetimeout(seatmap.confirmpageload)
        await seatselection(seatidx, seatconf)

    }
console.log("Next flight end")
}
async function ConfirmSelectedSeats() {
    await browser.pause(2000)
    await library.pagescrollAction(seatmap.buttonConfirmSeat)
    while (await library.elementdisplayedAction(seatmap.buttonConfirmSeat)) {
        await library.pagescrollAction(seatmap.buttonConfirmSeat)
        await browser.pause(2000)
        await library.clickAction(seatmap.buttonConfirmSeat)
        await library.pagetimeout(seatmap.confirmpageload)
        await browser.pause(2000)
    }
    console.log("Seats confirmed")
}
async function SelectSeats(SeatType) {
    if (SeatType == "FreeSeat") {
        var seatindex = seatmap.buttonFreeSeat
        var seatconfirm = seatmap.buttonFreeSeatConfirm
    }
    else if (SeatType == "PreferredSeat") {
        var seatindex = seatmap.buttonPreferredSeat
        var seatconfirm = seatmap.buttonFreeSeatConfirm
    }
    else if (SeatType == "ExtralegroomSeat") {
        var seatindex = seatmap.buttonExtralegroomSeat
        var seatconfirm = seatmap.buttonExtralegSeatConfirm
    }
    else if (SeatType == "BusinessClassSeat") {
        var seatindex = seatmap.businessclassseat
        var seatconfirm = seatmap.buttonFreeSeatConfirm
    }

    await seatselection(seatindex, seatconfirm)
    await nextflight(seatindex, seatconfirm)

    await browser.pause(3000)
    await library.pagescrollAction(seatmap.buttonConfirmSeat)
    await library.clickAction(seatmap.buttonConfirmSeat)
    await library.waitforexistAction(seatmap.confirmpageload)
    await browser.pause(9000)
}

exports.NoSeatSelection = NoSeatSelection;
exports.nextflight = nextflight;
exports.seatselection = seatselection;
exports.ConfirmSelectedSeats = ConfirmSelectedSeats;
exports.SelectSeats = SelectSeats;
