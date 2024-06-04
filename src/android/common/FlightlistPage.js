const flightList = require('../../android/pageobjects/Flightlistpagepo.js')
var library = require('../../android/common/Genericlibrary.js')

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
async function flcabinselection(CabinType, SubCabinType, DoYouWanttoUpgrade) {

    //await library.clickAction(flightList.buttonSelectFlight)

    // if (SubCabinType == "Comfort") {
    //     var ct = '//android.widget.TextView[@text="COMFORT"]'
    //     var subcabloc = await $$(ct)
    // }
    // else if (SubCabinType == "Comfort Plus") {
    //     var ct = '//android.widget.TextView[@text="COMFORT PLUS"]'
    //     var subcabloc = await $$(ct)
    // }
    // else if (SubCabinType == "Flex") {
    //     var ct = '//android.widget.TextView[@text="FLEX"]'
    //     var subcabloc = await $$(ct)
    // }
    // else if (CabinType == "Economy") {
    //     var ct = '//android.widget.TextView[contains(@text,"ECONOMY")]'
    //     var subcabloc = await $$(ct)
    // }
    // else if (CabinType == "Business") {
    //     var ct = '//android.widget.TextView[contains(@text,"BUSINESS")]'
    //     var subcabloc = await $$(ct)
    // }
    // else if (CabinType == "First") {
    //     var ct = '//android.widget.TextView[contains(@text,"FIRST")]'
    //     var subcabloc = await $$(ct)
    // }
    var ct = '//android.widget.TextView[contains(@text,"' + SubCabinType + '")]'
    var subcabloc = await $(ct)
    if (await subcabloc != undefined) {
        //if (await subcabloc.length > 1) {
        //await library.clickAction(subcabloc[0])
        //for (var s = 0; s < 3; s++) 
        var s = 0;
        while (1) {
            if (await library.elementdisplayedAction(subcabloc)) {
                // var subcabtxt = await library.gettextAction(subcabloc)
                // console.log(subcabtxt)
                // if (subcabtxt == SubCabinType) {
                    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().textContains("SELECT"))').click()
                    await library.clickAction(flightList.buttonSelectFare[s])
                    break;
                //}
            }
            else {
                await library.scrollHorizontal(SubCabinType)
                s++
            }
        }
        //}
    }
    else {
        //add scroll here
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollForward()')
        await library.clickAction(flightList.buttonSelectFare[s])
    }
    // if (await library.elementdisplayedAction(flightList.buttonKeepCurrentCabin)) {
    //     await upgrade(DoYouWanttoUpgrade)

    // }  //add crt locators
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
