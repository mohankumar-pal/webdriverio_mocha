const addService = require('../../ios/pageobjects/additionalservicespo.js')
const library = require('../../ios/common/Genericlibrary.js')

async function NoSeatSelection() {
    while (await library.elementdisplayedAction(addService.buttonSkipSeat)) {
        await library.clickAction(addService.buttonSkipSeat)
        //await browser.pause(3000)
    }
}
async function seatselection(seatidx, seatconf) {

    if (await library.elementdisplayedAction(addService.buttonSkipSeat)) {
        await NoSeatSelection()
        //await browser.pause(2000)
    }
    else {
        var j = 0;
        await browser.pause(6000)
        console.log("Pax count:" + await addService.buttonSelectPax.length)
        for (i = 0; i < await addService.buttonSelectPax.length; i++) {
            await library.clickAction(addService.buttonSelectPax[i])
            await library.swipeupAction()
            await browser.pause(2000)
            console.log(await seatidx.length + " total seats")
            if (await seatidx.length > 0) {
                await browser.pause(2000)
                await seatidx[j].click()
                await browser.pause(1000)
                j = j + 2
                if (await library.elementdisplayedAction(seatconf))
                    await library.clickAction(seatconf)
                //await browser.pause(2000)

            }
        }
        console.log("seats selected")
    }
    //}

    //await browser.pause(4000)

}
async function Mcseatselection(seatidx) {
    // if (await library.elementdisplayedAction(addService.buttonSkipSeat)) {
    //     await NoSeatSelection()
    // }
    // else {
    var j = 0;
    await browser.pause(2000)
    console.log("Pax count:" + await addService.radioMcPassenger.length)
    for (i = 0; i < await addService.radioMcPassenger.length; i++) {
        await library.clickAction(addService.radioMcPassenger[i])
        await library.swipeupAction()
        console.log(await seatidx.length + " total seats")
        if (await seatidx.length > 0) {
            await browser.pause(2000)
            await seatidx[j].click()
            await browser.pause(1000)
            j = j + 2

        }
    }
    console.log("seats selected")
    //}

}
async function Mcnextflight(SeatType) {
    // await library.downscrollAction()
    // await library.downscrollAction()
    var sectors = await addService.buttonMcNextSectors.length
    console.log(sectors)
    for (var i = 0; i < await sectors; i++) {
        console.log("next flight")
        await library.clickAction(addService.buttonMcNextSectors[i])
        await browser.pause(2000)
        // console.log(await driver.getContexts())
        // console.log(await driver.getContexts())
        // await browser.pause(3000)
        // let contexts = await driver.getContexts()
        // console.log(contexts);
        // await driver.switchContext(contexts[1]);
        await library.waituntilelementexistAction(addService.textTravellers)
        //await driver.switchContext(contexts[0])
        await browser.pause(2000)
        if (SeatType == "FreeSeat") {
            var seatindex2 = addService.buttonMcFreeSeat
        }
        else if (SeatType == "PreferredSeat") {
            var seatindex2 = addService.buttonMcPreferredSeat
        }
        else if (SeatType == "ExtralegroomSeat") {
            var seatindex2 = addService.buttonMcExtralegroomseat
        }
        else if (SeatType == "BusinessClassSeat") {
            var seatindex2 = addService.buttonBusinessClassSeat
        }
        await Mcseatselection(seatindex2)

        //if (i < sectors) {
        await library.clickAction(addService.textTravellers)
        await library.swipedownAction()
        if (await library.elementdisplayedAction(addService.buttonMcRightArrow))
            await library.clickAction(addService.buttonMcRightArrow)
        //}
        // await library.downscrollAction()
        // await library.downscrollAction()
    }

}

async function nextflight(SeatType) {
    // await library.downscrollAction()
    // await library.downscrollAction()
    await library.swipeupAction()
    await library.swipeupAction()
    await library.swipeupAction()
    while (await library.elementdisplayedAction(addService.buttonNxtFlight)) {
        console.log("next flight")
        await library.clickAction(addService.buttonNxtFlight)
        await browser.pause(2000)
        await library.waituntilelementexistAction(addService.textSelectSeat)
        await browser.pause(9000)
        if (SeatType == "FreeSeat") {
            var seatindex2 = addService.buttonFreeSeat
            var seatconfirm2 = addService.buttonFreeSeatConfirm
        }
        else if (SeatType == "PreferredSeat") {
            var seatindex2 = addService.buttonPreferredSeat
            var seatconfirm2 = addService.buttonFreeSeatConfirm
        }
        else if (SeatType == "ExtralegroomSeat") {
            var seatindex2 = addService.buttonExtralegroomSeat
            var seatconfirm2 = addService.buttonExtrallegSeatConfirm
        }
        else if (SeatType == "BusinessClassSeat") {
            var seatindex2 = addService.buttonBusinessClassSeat
            var seatconfirm2 = addService.buttonFreeSeatConfirm
        }
        await seatselection(seatindex2, seatconfirm2)
        // await library.downscrollAction()
        // await library.downscrollAction()
        await library.swipeupAction()
        await library.swipeupAction()
        await library.swipeupAction()
    }

}

async function confirmseat() {
    // await library.downscrollAction()
    await library.swipeupAction()
    await library.swipeupAction()
    if (await library.elementdisplayedAction(addService.buttonConfirmSeat)) {
        await library.clickAction(addService.buttonConfirmSeat)
    }
}
async function McConfirmseat() {
    //await library.downscrollAction()
    await library.swipeupAction()
    await library.swipeupAction()
    await library.swipeupAction()
    await library.swipeupAction()

    if (await library.elementdisplayedAction(addService.buttonMcConfirmSeat)) {
        await library.clickAction(addService.buttonMcConfirmSeat)
    }
}
async function wheelchair() {
    await library.clickAction(addService.buttonRequestService)
    await library.waituntilelementexistAction(addService.textWheelchairTitle)
    var wc = await addService.dropdownWheelchair.length
    console.log(wc)
    console.log("Selecting wheel chair")
    for (var i = 1; i <= await wc; i++) {
        await library.clickAction(addService.dropdownWheelchair[0])
        await library.clickAction(addService.optionWheelchairToRamp)
    }
    await library.clickAction(addService.buttonContinue)
    if (await library.elementdisplayedAction(addService.buttonContinueBooking)) {
        await library.clickAction(addService.buttonContinueBooking)
        if(await library.elementdisplayedAction(addService.buttonContinue))
        await library.clickAction(addService.buttonContinue)
      }
}
async function multicitywheelchair(ConfirmWheelchair) {
    await library.clickAction(addService.textWheelchair)


    await library.waituntilelementexistAction(addService.dropdownMcWheelchair[0])
    var wccount = await addService.dropdownMcWheelchair.length
    console.log("Selecting wheel chair")
    for (var i = 0; i < await wccount; i++) {
        if (ConfirmWheelchair[i] == "Yes") {
            await library.clickAction(addService.dropdownMcWheelchair[0])
            await library.clickAction(addService.optionMcWheelchair)
        }
    }
    await library.clickAction(addService.buttonConfirmClose)
}
async function wheelchairslctseats(SeatType) {
    await browser.pause(3000)
    if (await library.elementdisplayedAction(addService.buttonSelectSeatAgain)) {
        await library.clickAction(addService.buttonSelectSeatAgain)
        await library.waituntilelementexistAction(addService.textSelectSeat)
        await browser.pause(4000)
        if (SeatType == "FreeSeat") {
            var seatindex1 = addService.buttonFreeSeat
            var seatconfirm1 = addService.buttonFreeSeatConfirm
        }
        else if (SeatType == "PreferredSeat") {
            var seatindex1 = addService.buttonPreferredSeat
            var seatconfirm1 = addService.buttonFreeSeatConfirm
        }
        else if (SeatType == "ExtralegroomSeat") {
            var seatindex1 = addService.buttonExtralegroomSeat
            var seatconfirm1 = addService.buttonFreeSeatConfirm
           // var seatconfirm1 = addService.buttonExtrallegSeatConfirm
        }
        else if (SeatType == "BusinessClassSeat") {
            var seatindex1 = addService.buttonBusinessClassSeat
            var seatconfirm1 = addService.buttonFreeSeatConfirm
        }
        await seatselection(seatindex1, seatconfirm1)
        await nextflight(SeatType)
        await confirmseat()

    }
}
async function multicitywheelchairslctseats(SeatType) {
    await browser.pause(3000)
    if (await library.elementdisplayedAction(addService.buttonSelectSeatAgain)) {
        await library.clickAction(addService.buttonSelectSeatAgain)
        await library.waituntilelementexistAction(addService.textSelectSeat)
        await browser.pause(4000)
        if (SeatType == "FreeSeat") {
            var seatindex1 = addService.buttonFreeSeat
            var seatconfirm1 = addService.buttonFreeSeatConfirm
        }
        else if (SeatType == "PreferredSeat") {
            var seatindex1 = addService.buttonPreferredSeat
            var seatconfirm1 = addService.buttonFreeSeatConfirm
        }
        else if (SeatType == "ExtralegroomSeat") {
            var seatindex1 = addService.buttonExtralegroomSeat
            var seatconfirm1 = addService.buttonExtrallegSeatConfirm
        }
        else if (SeatType == "BusinessClassSeat") {
            var seatindex1 = addService.buttonBusinessClassSeat
            var seatconfirm1 = addService.buttonFreeSeatConfirm
        }
        await seatselection(seatindex1, seatconfirm1)
        await nextflight(SeatType)
        await confirmseat()

    }
}

async function selectbaggage(baggageslct, baggagecount, paxAdditionalBaggage, baggageOption) {
    for (var j = 1; j <= await baggagecount; j++) {

        if (paxAdditionalBaggage[j - 1] === "Yes") {
            var baggagename = baggageOption[j - 1]
            console.log(baggagename)
            await library.clickAction(baggageslct[0])

            const bopt = "label CONTAINS '" + baggagename + "'"
            const baggageopt = await $(`-ios predicate string:${bopt}`)
            await library.clickAction(baggageopt)


        }
    }
}

async function addbaggage(DouyouwanttoaddAB, paxAdditionalBaggage, baggageOption) {
    console.log("Baggage clicked")
    var baggagecount = await addService.dropdownBaggage.length
    console.log("baggages count:" + baggagecount)
    var piecebag = await addService.piecebag.length
    console.log("Piece Bag count:" + piecebag)

    if (DouyouwanttoaddAB === "Yes") {

        var baggageslct = addService.dropdownBaggage
        if (await baggagecount >= 1)
            await selectbaggage(baggageslct, baggagecount, paxAdditionalBaggage, baggageOption)
        else if (piecebag >= 1)
            await INTbaggage(piecebag)

    }
    await library.clickAction(addService.buttonConfirmClose)

}

async function INTbaggage(piecebag) {
    if (await piecebag > 0) {
        for (i = 0; i < await piecebag; i++) {
            await library.clickAction(addService.piecebag[i])
        }
    }
}
async function selectmeals(mealspax) {
    var mealcount = await addService.dropdownSelectMeal.length
    console.log("Meals count:" + mealcount)
    for (var i = 0; i < await mealcount; i++) {
        await library.clickAction(addService.dropdownSelectMeal[0])
        const mealopt = "label CONTAINS '" + mealspax[i] + "'"
        var moption = $$(`-ios predicate string:${mealopt}`)
        console.log(await moption[0])
        var mealselected = 0
        if (await moption[0] === undefined) {
            await library.clickAction(addService.optionNoSelection)
            mealselected = 1
        }
        else {
            await library.waituntilelementexistAction(moption[0])

            console.log(await moption.length)
            for (j = 0; j < await moption.length; j++) {

                var mealtxt = await library.gettextAction(moption[j])
                if (mealtxt.includes(mealspax[i])) {
                    await library.clickAction(moption[j])
                    mealselected = 1
                    break;
                }
            }
            if (mealselected == 0 && await moption.length > 0) {
                await library.clickAction(moption[0])
            }
        }
        await browser.pause(2000)
    }
    await library.clickAction(addService.buttonContinue)
    if (await library.elementdisplayedAction(addService.buttonContinueBooking)) {
        await library.clickAction(addService.buttonContinueBooking)
    }
    await library.waituntilelementexistAction(addService.textAdditionalService)
}

async function multicityselectmeals(mealspax, AddBabyMeal) {
    var mealcount = await addService.dropdownMcMeal.length
    console.log("Meals count:" + mealcount)
    for (var i = 0; i < await mealcount; i++) {
        await browser.pause(4000)
        await library.clickAction(addService.dropdownMcMeal[0])
        const mealopt = "label CONTAINS '" + mealspax[i] + "'"
        var moption = $$(`-ios predicate string:${mealopt}`)
        var mealselected = 0
        if (await moption[0] === undefined) {
            await library.clickAction(addService.optionNoSelection)
            mealselected = 1
        }
        else {
            await library.waituntilelementexistAction(moption[0])

            console.log(await moption.length)
            for (j = 0; j < await moption.length; j++) {

                var mealtxt = await library.gettextAction(moption[j])
                if (mealtxt.includes(mealspax[i])) {
                    await library.clickAction(moption[j])
                    mealselected = 1
                    break;
                }
            }
        }
    }
    if (AddBabyMeal == "Yes") {
        for (var i = 0; i < await addService.checkboxBabyMeal.length; i++) {
            await library.clickAction(addService.checkboxBabyMeal[i])
        }
    }
    await library.clickAction(addService.buttonConfirmClose)
    if (await library.elementdisplayedAction(addService.buttonContinueBooking)) {
        await library.clickAction(addService.buttonContinueBooking)
    }
}
async function checkout() {
    //await library.downscrollAction()
    await library.swipeupAction()
    await library.swipeupAction()
    //await browser.pause(2000)
    await library.clickAction(addService.buttonCheckout)
    //await browser.pause(2000)
}
async function multicitycheckout() {

    await library.clickAction(addService.buttonContinueCheckout)

}
exports.seatselection = seatselection;
exports.addbaggage = addbaggage;
exports.NoSeatSelection = NoSeatSelection;
exports.nextflight = nextflight;
exports.confirmseat = confirmseat
exports.wheelchair = wheelchair
exports.wheelchairslctseats = wheelchairslctseats
exports.INTbaggage = INTbaggage
exports.selectbaggage = selectbaggage
exports.selectmeals = selectmeals
exports.checkout = checkout;
exports.multicitywheelchair = multicitywheelchair;
exports.multicityselectmeals = multicityselectmeals;
exports.multicitycheckout = multicitycheckout;
exports.multicitywheelchairslctseats = multicitywheelchairslctseats;
exports.McConfirmseat = McConfirmseat;
exports.Mcseatselection = Mcseatselection;
exports.Mcnextflight = Mcnextflight;
