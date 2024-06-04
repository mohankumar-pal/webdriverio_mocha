const flightList = require('../../ios/pageobjects/Flightlistpagepo.js')
var library = require('../../ios/common/Genericlibrary.js')


async function flightselection(FlightType, Segment) {
    var stop = '//XCUIElementTypeStaticText[@name="' + FlightType + '"]'
    var flightstop = await $(stop)
    var selectedflight = 0
    while (await selectedflight < Segment) {
        //await library.clickAction(flightstop)
        await library.clickAction(flightList.buttonFlightSelect)
        selectedflight++
    }
    await library.clickAction(flightList.buttonContinue)
}
async function multicitycabinselection(CabinType, SubCabinType) {
    var ct = 'label == "' + SubCabinType + '"'
    var subcabloc = await $(`-ios predicate string:${ct}`)
    console.log("Subcabins count" + await flightList.textFares.length)
    if (await flightList.textFares.length > 1) {
        for (var i = 0; i < await flightList.textFares.length; i++) {
            if (await library.elementdisplayedAction(subcabloc)) {
                await library.clickAction(subcabloc)
            }
            else {
                await library.rightscrollelementAction(flightList.scrollHorizontal)
                //await library.swiperightAction(flightList.scrollHorizontal)
            }
        }
    }
}
async function flcabinselection(CabinType, SubCabinType, DoYouWanttoUpgrade, SearchUsingFlightCode, FlightCode) {
    if (SearchUsingFlightCode == "Yes") {
        var flightscount = await flightList.buttonViewFlightDetails.length
        for (var i = 0; i < await flightscount; i++) {
            await library.clickAction(flightList.buttonViewFlightDetails[i])
            const flightcode = '//XCUIElementTypeStaticText[contains(@name,"' + FlightCode + '")]'
            const flightcodeloc = await $(flightcode)
            if (await library.elementdisplayedAction(flightcodeloc)) {
                await library.clickAction(flightList.buttonCloseFlightDetails)
                await browser.pause(2000)
                await library.clickAction(flightList.buttonSelectFlights[i])
                break;
            }
            else {
                await library.clickAction(flightList.buttonCloseFlightDetails)

            }
        }
    }
    else {
        await library.clickAction(flightList.buttonSelectFlight)
    }
    if (CabinType == "Economy") {
        var ct = 'label CONTAINS "ECONOMY"'
    }
    else if (CabinType == "Business") {
        var ct = 'label CONTAINS "BUSINESS"'
    }
    else if (CabinType == "First") {
        var ct = 'label CONTAINS "FIRST"'
    }
    var subcabloc = await $$(`-ios predicate string:${ct}`)
    await browser.pause(4000)
    var subcabinselected = 0
    if (await subcabloc.length > 1) {
        await library.clickAction(subcabloc[0])
        for (var s = 0; s < await subcabloc.length; s++) {
            var subcabtxt = await library.gettextAction(subcabloc[s])
            console.log(subcabtxt)
            if (subcabtxt == SubCabinType) {
                await browser.pause(1000)
                await library.clickAction(flightList.buttonSelectFare[s])
                subcabinselected++
                break;
            }
            else {
                //await library.rightscrollelementAction(flightList.scrollHorizontal)
                await library.swiperightAction(flightList.scrollHorizontal)
            }
        }
        if (await subcabinselected == 0) {
            await browser.pause(1000)
            await library.clickAction(flightList.buttonSelectFare[0])
        }
    }
    else {
        await library.clickAction(flightList.buttonSelectFare[0])
    }
    if (await library.elementdisplayedAction(flightList.buttonKeepCurrentCabin)) {
        await upgrade(DoYouWanttoUpgrade)
        await browser.pause(2000)

    }
}
async function upgrade(upgr) {
    if (upgr == "Yes") {
        await library.clickAction(flightList.buttonUpgradeCabin)
    }
    else {
        await library.clickAction(flightList.buttonKeepCurrentCabin)
    }
}

exports.flightselection = flightselection;
exports.flcabinselection = flcabinselection;
exports.multicitycabinselection = multicitycabinselection;
exports.upgrade = upgrade;
