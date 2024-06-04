const addservicepo = require('../../pageobjects/OnewayRoundtrip/additionalservicespo.js')
const library = require('../../common/Genericlibrary.js')

async function NoSeatSelection() {
    while (await library.elementdisplayedAction(addservicepo.textNoSeatMap)) {
        await library.clickAction(addservicepo.buttonSkipSeat)
        //await browser.pause(3000)
    }
}
async function seatselection(seatidx, seatconf) {
    if (await library.elementdisplayedAction(addservicepo.textNoSeatMap))
        await NoSeatSelection()

    else {
        for (i = 0; i < await addservicepo.seatpax.length; i++) {

            await addservicepo.seatpax[i].scrollIntoView({ block: 'center', inline: 'center' })
            //await browser.pause(2000)
            //await library.clickAction(addservicepo.seatpax[i])
            if (await library.elementdisplayedAction(addservicepo.textNoSeatMap)) {
                await NoSeatSelection()
                break;
            }
            else {
                if (await seatidx.length > 0 && await library.elementdisplayedAction(seatidx[i])) {
                    await library.pagescrolltomiddleAction(seatidx[i])
                    //await browser.pause(3000)
                    await library.clickAction(seatidx[i])
                    //await browser.pause(3000)
                    await library.pagetimeout(addservicepo.page_loader)
                    //await browser.pause(3000)
                    if (await library.elementdisplayedAction(addservicepo.buttonExtrallegroomconfirm))
                        await library.clickAction(addservicepo.buttonExtrallegroomconfirm)
                    if (await library.elementdisplayedAction(seatconf))
                        await library.clickAction(seatconf)
                    await library.pagetimeout(addservicepo.page_loader)
                    //await browser.pause(3000)
                    if (await library.elementdisplayedAction(addservicepo.buttonContinueSeat))
                        await library.clickAction(addservicepo.buttonContinueSeat)
                    await library.pagetimeout(addservicepo.page_loader)
                    //await browser.pause(2000)
                    if (await library.elementdisplayedAction(addservicepo.buttonSeatRightArrow)) {
                        await library.pagescrolltomiddleAction(addservicepo.buttonSeatRightArrow)
                        await library.clickAction(addservicepo.buttonSeatRightArrow)
                        //await browser.pause(2000)
                    }

                }
            }
        }
    }
    console.log("seats selected")
    //await browser.pause(4000)

}

async function nextflight(seatidx, seatconf) {
    while (await library.elementdisplayedAction(addservicepo.buttonNxetFlight)) {
        console.log("next flight")
        await library.pagescrollAction(addservicepo.buttonNxetFlight)
        await library.clickAction(addservicepo.buttonNxetFlight)
        await library.pagetimeout(addservicepo.page_loader)
        if (await library.elementdisplayedAction(addservicepo.buttonContinueSeat))
            await library.clickAction(addservicepo.buttonContinueSeat)
        //await browser.pause(6000)
        await library.pagetimeout(addservicepo.page_loader)
        await library.waitforexistAction(addservicepo.textAdditionServiceval1)

        await seatselection(seatidx, seatconf)

    }

}

async function confirmseat() {
    if (await library.elementdisplayedAction(addservicepo.buttonConfirmSeat)) {
        await library.pagescrollAction(addservicepo.buttonConfirmSeat)
        await library.clickAction(addservicepo.buttonConfirmSeat)
        await library.pagetimeout(addservicepo.page_loader)
        if (await library.elementdisplayedAction(addservicepo.buttonContinueSeat))
            await library.clickAction(addservicepo.buttonContinueSeat)
        await library.pagetimeout(addservicepo.page_loader)

    }
}

async function wheelchair() {
    await library.pagescrolltomiddleAction(addservicepo.buttonRequestService)
    await library.clickAction(addservicepo.buttonRequestService)
    await library.waitforexistAction(addservicepo.textWhcrTitle)

    var flightstop = await addservicepo.dropdownWheelchair.length
    console.log(flightstop)
    console.log("Selecting wheel chair")

    for (var i = 1; i <= await flightstop; i++) {
        await library.pagescrolltomiddleAction(addservicepo.dropdownWheelchair[0])
        await library.clickAction(addservicepo.dropdownWheelchair[0])
        //await browser.pause(2000)
        await library.clickAction(addservicepo.optionWhcrToRamp)
        //await browser.pause(2000)

    }
    await library.clickAction(addservicepo.buttonWhcrContinue)
}

async function wheelchairslctseats(seatindex, seatconfirm) {
    if (await library.elementdisplayedAction(addservicepo.buttonSelectSeatAgain)) {
        await library.clickAction(addservicepo.buttonSelectSeatAgain)
        //await browser.pause(4000)
        await library.pagetimeout(addservicepo.page_loader)
        await seatselection(seatindex, seatconfirm)
        await nextflight(seatindex, seatconfirm)
        //await browser.pause(3000)
        await confirmseat()
        await library.pagetimeout(addservicepo.page_loader)

    }
}

async function selectbaggage(baggageslct, flightstop, paxAdditionalBaggage, baggageOption, changeflag) {
    for (var j = 1; j <= await flightstop; j++) {

        if (paxAdditionalBaggage[j - 1] === "Yes") {
            console.log("iteration " + [j])
            //await browser.pause(5000)
            var baggageSelected = baggageOption[j - 1]
            console.log(baggageSelected)
            if (changeflag == 0) {
                await library.pagescrolltomiddleAction(baggageslct[0])
                await library.clickAction(baggageslct[0])
            }
            else {
                await library.pagescrolltomiddleAction(baggageslct[j - 1])
                await library.clickAction(baggageslct[j - 1])
            }

            for (var k = 0; k <= await addservicepo.optionBaggageList.length; k++) {

                var baggageselect = await library.gettextAction(addservicepo.optionBaggageList[k])
                console.log(baggageselect)
                if (baggageselect.includes(baggageSelected)) {

                    await library.clickAction(addservicepo.optionBaggageList[k])
                    //await browser.pause(2000)

                    break;
                }
            }
        }
    }
}

async function addbaggage(DomDoyouwanttoaddAB, paxAdditionalBaggage, baggageOption, changeflag) {
    await library.pagescrolltomiddleAction(addservicepo.buttonAddExtraBaggage)
    await library.clickAction(addservicepo.buttonAddExtraBaggage)
    console.log("add extra baggage clicked")
    //await browser.pause(3000)
    await library.waitforexistAction(addservicepo.textBaggageTitle)
    console.log("baggage title displayed")

    var flightstop = await addservicepo.dropdownBaggageArrow.length
    console.log("baggages count:" + flightstop)
    var piecebag = await addservicepo.textPiecebag.length
    console.log("Piece Bag count:" + piecebag)

    if (DomDoyouwanttoaddAB === "Yes") {

        var baggageslct = addservicepo.dropdownBaggageArrow
        await selectbaggage(baggageslct, flightstop, paxAdditionalBaggage, baggageOption, changeflag)

    }
    await INTbaggage(piecebag)

    await library.pagescrollAction(addservicepo.buttonSelectionContinue)
    await library.clickAction(addservicepo.buttonSelectionContinue)
    //await browser.pause(5000)
    await library.pagetimeout(addservicepo.page_loader)
}

async function INTbaggage(piecebag) {
    if (await piecebag > 0) {
        for (i = 0; i < await piecebag; i++) {
            if (await library.isclickableAction(addservicepo.textPiecebag[i])) {
                await library.pagescrolltomiddleAction(addservicepo.textPiecebag[i])
                await library.clickAction(addservicepo.textPiecebag[i])
            }
        }
    }
}

async function changebaggage(paxAdditionalBaggage, baggageOption, changeflag) {
    await library.clickAction(addservicepo.buttonChangeBaggage)
    //await browser.pause(3000)
    await library.waitforexistAction(addservicepo.textBaggageTitle)
    console.log("baggage title displayed")

    var flightstop = await addservicepo.dropdownBaggageArrow1.length
    console.log("baggages count:" + flightstop)
    var piecebag = await addservicepo.textPiecebag.length
    console.log("Piece Bag count:" + piecebag)

    await INTbaggage(piecebag)
    var baggageslct = addservicepo.dropdownBaggageArrow1
    await selectbaggage(baggageslct, flightstop, paxAdditionalBaggage, baggageOption, changeflag)

    await library.pagescrollAction(addservicepo.buttonSelectionContinue)
    await library.clickAction(addservicepo.buttonSelectionContinue)
    //await browser.pause(5000)
    await library.pagetimeout(addservicepo.page_loader)
    if (await library.elementdisplayedAction(addservicepo.buttonContinueBooking)) {
        await library.clickAction(addservicepo.buttonContinueBooking)
        //await browser.pause(3000)
    }
}
async function checkout() {
    await library.waitforexistAction(addservicepo.buttonCheckout)
    //await browser.pause(3000)
    await library.pagescrolltomiddleAction(addservicepo.buttonCheckout)
    //await browser.pause(1000)
    await library.clickAction(addservicepo.buttonCheckout)
    await library.pagetimeout(addservicepo.page_loader)
    await browser.pause(4000)
}
async function selectmeals(mealspax) {
    var flightstop = await addservicepo.buttonMealsSelect.length
    console.log("Selecting meals")
    for (var i = 1; i <= await flightstop; i++) {

        await library.pagescrolltomiddleAction(addservicepo.buttonMealsSelect[0])
        await library.clickAction(addservicepo.buttonMealsSelect[0])
        await library.waitforexistAction(addservicepo.optionMeals[0])
        var mealselected = 0
        for (j = 0; j < await addservicepo.optionMeals.length; j++) {

            var mealtxt = await library.gettextAction(addservicepo.optionMeals[j])
            if (mealtxt == mealspax[i - 1]) {
                await library.pagescrolltomiddleAction(addservicepo.optionMeals[j])
                await library.clickAction(addservicepo.optionMeals[j])
                mealselected = 1
                break;
            }
        }
        if (mealselected == 0 && await addservicepo.optionMeals.length > 0) {
            await library.pagescrolltomiddleAction(addservicepo.optionMeals[0])
            await library.clickAction(addservicepo.optionMeals[0])
        }
        //await browser.pause(2000)

    }
}

exports.seatselection = seatselection;
exports.addbaggage = addbaggage;
exports.changebaggage = changebaggage;
exports.NoSeatSelection = NoSeatSelection;
exports.nextflight = nextflight;
exports.confirmseat = confirmseat
exports.wheelchair = wheelchair
exports.wheelchairslctseats = wheelchairslctseats
exports.INTbaggage = INTbaggage
exports.selectbaggage = selectbaggage
exports.selectmeals = selectmeals
exports.checkout = checkout;