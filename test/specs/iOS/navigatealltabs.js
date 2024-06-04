const menupo = require('../../../src/ios/pageobjects/MenuLinkspo.js')
const acceptpermissions = require('../../../src/ios/common/HomePage.js')
const library = require('../../../src/ios/common/Genericlibrary.js')
var home = require('../../../src/ios/common/HomePage.js')
var validate = require('../../../src/ios/common/Validation.js')
const checkinpo = require('../../../src/ios/pageobjects/checkinpo.js')
const oneway = require('../../../src/ios/pageobjects/onewaypo.js')
const flightpo = require('../../../src/ios/pageobjects/Flightlistpagepo.js')
const flightlistpo = require('../../../src/website/pageobjects/OnewayRoundtrip/Flightlistpagepo.js')
const webvalidate = require('../../../src/website/common/validation.js')
//const flightlist = require('../../../src/website/common/OnewayRoundtrip/FlightlistPage.js')
var flightlist = require('../../../src/ios/common/FlightlistPage.js')
const menu = require('../../../src/ios/common/menutabs.js')
const webflightlist = require('../../../src/website/common/OnewayRoundtrip/FlightlistPage.js')
const fs = require('fs')
var NodeXls = require('node-xls');

describe('Hamburger Menu Links', () => {

    it('Verify response status of menu links', async () => {
        const resultarray = [];
        var flightnumbers = [];
        var fromtimings = [];
        var totimings = [];
        var fromdate = [];
        var fromcity = [];
        var tocity = [];
        await browser.pause(5000)
        await acceptpermissions.permissionpopup()
        var services = ['Home', 'Book Flight', 'My Trips', 'Check-in', 'Loyalty', 'Flight Status', 'Boarding Passes', 'Track Delayed Baggage', 'Concessionary Fares', 'Flight Schedule', 'Lounge Finder', 'Prepare To Travel', 'Baggage Guidelines', 'FAQs', 'About Air India', 'About Flying Returns', 'Press Releases', 'Terms & Conditions', 'App Disclaimer', 'Contact Us', 'Refund Information', 'Airsewa', 'App Settings', 'Air India Website']
        //'Book', 
        //var services = ['Book', 'Flight Status']
        console.log(services.length)
        var result;
        for (var i = 0; i < await services.length; i++) {
            try {
                const service = '//XCUIElementTypeStaticText[@name="' + services[i] + '"]'
                const serviceloc = await $(service)

                if (i >= 14) {
                    await library.swipeupAction()
                }
                await library.clickAction(serviceloc)

                if (services[i] == 'Home') {
                    await library.waituntilelementexistAction(menupo.scrollviewExploreIndia)
                    if (!await library.elementexistingAction(menupo.textPopularDestinations)) {
                        result = "Popular destinations not available"
                        throw result //homepage not loading properly in 8.46 build
                    }

                    await library.waituntilelementexistAction(menupo.textPopularDestinations)
                    await library.waituntilelementexistAction(menupo.textMySplash)
                    await library.waituntilelementexistAction(menupo.textViewAll)
                }
                else if (services[i] == 'Book') {
                    await library.waituntilelementexistAction(menupo.textOneway)
                    //add script to search flight for ow,rt,mc,recent search and validate all here

                    const OD = JSON.parse(fs.readFileSync("test/testdata/json/mobile/TransactionalFlow.json"))
                    console.log(OD.length)

                    //oneway & roundtrip validation
                    await menu.OWRTflightsearch(OD, flightnumbers, fromdate, fromcity, tocity)

                    //Recent search validation
                    await menu.RecentSearchValidation(OD)
                }
                else if (services[i] == 'My Trips') {
                    //validating active trips
                    await library.waituntilelementexistAction(menupo.textActiveTrips)
                    await library.waituntilelementexistAction(menupo.buttonAddTrip)
                    //validating past trips
                    await library.clickAction(menupo.textPastTrips)
                    await library.waituntilelementexistAction(menupo.textNoPastTrips)
                }
                else if (services[i] == 'Check-in') {
                    await library.waituntilelementexistAction(menupo.textboxReferenceNumber)
                    await library.filltextboxAction(menupo.textboxReferenceNumber, 'testing')
                    await library.waituntilelementexistAction(menupo.textboxLastname)
                    await library.filltextboxAction(menupo.textboxLastname, 'kumar')
                    if (await library.elementdisplayedAction(menupo.keyReturn))
                        await library.clickAction(menupo.keyReturn)
                    await library.clickAction(menupo.buttonCheckin)
                    //await menupo.popupError.waitForExist({ timeout: 8000 }) //negative scenario
                    await library.waituntilelementexistAction(menupo.popupError) //negative scenario
                    if (await library.elementdisplayedAction(checkinpo.buttonCloseIcon))
                        await library.clickAction(checkinpo.buttonCloseIcon)
                    await library.clickAction(checkinpo.keyConfirm)
                }
                else if (services[i] == 'Loyalty') {
                    if (await library.elementexistingAction(menupo.textLoyaltyDataNotFound)) {
                        result = "Data not found"
                        throw result
                    }
                    await library.waituntilelementexistAction(menupo.textLoyaltySignIn)
                    await library.waituntilelementexistAction(menupo.textboxLoyaltyEmail)
                    await library.waituntilelementexistAction(menupo.textboxLoyaltyPassword)
                    await library.waituntilelementexistAction(menupo.buttonLoyaltySignIn)
                    await library.clickAction(menupo.buttonCancel)
                    await library.waitfordisplayedAction(menupo.textLoyalty)
                }
                else {
                    if (services[i] == 'Track Delayed Baggage' || services[i] == 'Concessionary Fares')
                        await browser.pause(12000)
                    if (await library.elementexistingAction(menupo.textSignin)) {
                        await library.clickAction(menupo.textboxEmail)
                        await library.filltextboxAction(menupo.textboxEmail, 'qa.automation@airindia.com')
                        await library.clickAction(menupo.buttonNext)
                        await library.clickAction(menupo.textboxPassword)
                        await library.filltextboxAction(menupo.textboxPassword, 'Automation*123')
                        await library.clickAction(menupo.buttonSignin)
                        await library.waituntilelementexistAction(menupo.textStaySignedIn)
                        await library.clickAction(menupo.buttonYes)
                        await browser.pause(5000)
                    }
                    if (services[i] == 'Flight Status') {
                        //Flight Number Validation
                        var f = 0;
                        console.log(await flightnumbers.length)
                        while (f < await flightnumbers.length) {
                            await menu.EnterFlightNumberDetails(flightnumbers[f], fromdate[f])
                            if (await library.elementdisplayedAction(menupo.imageNoFlightStatus))
                                throw e;
                            await validate.FlightStatusValidation(flightnumbers[f], fromcity[f], tocity[f], fromdate[f])
                            f++;
                            if (await library.elementexistingAction(menupo.buttonLeftArrow)) {
                                await library.clickAction(menupo.buttonLeftArrow)
                            }
                        }

                        //Route validation
                        if (fromcity[0] != undefined) {
                            await menu.EnterFlightStatusRouteValidation(fromcity[0], tocity[0], fromdate[0])
                            if (await library.elementdisplayedAction(menupo.imageNoFlightStatus))
                                throw e;
                            var fr = 0;
                            await validate.FSCityDateValidation(fromcity[fr], tocity[fr], fromdate[fr])
                            while (fr < await flightnumbers.length) {
                                await validate.FlightNumberValidation(flightnumbers[fr])
                                fr++;
                            }
                            if (await library.elementexistingAction(menupo.buttonLeftArrow)) {
                                await library.clickAction(menupo.buttonLeftArrow)
                            }
                        }
                    }
                }
                if (await library.elementexistingAction(menupo.text404Error)) {
                    result = '404 Error'
                    throw result

                } else if (await library.elementexistingAction(menupo.text403Error)) {
                    result = '403 Error'
                    throw result
                }
                else {
                    result = 'Passed'
                    let day = new Date().getDate();
                    let month = new Date().getMonth();
                    let year = new Date().getFullYear();
                    let hours = new Date().getHours();
                    let minutes = new Date().getMinutes();

                    console.log("Day :" + day + "," + "Month : " + month + "," + "Year : " + year);
                    var filename = services[i] + '_' + day + "_" + month + "_" + year + "_" + hours + "_" + minutes + ".png";

                    await browser.saveScreenshot("./test/outputartifact/Screenshot/Passed/" + filename.toString());

                }


                var jsdata = {
                    "TestcaseScenario": [services[i]],
                    "DateandTime": new Date().toLocaleString(undefined, {
                        timeZone: 'Asia/Kolkata'
                    }),
                    "TestcaseResult": [result],
                }

            }
            catch (e) {
                console.log(e)
                if (await library.elementexistingAction(menupo.buttonLeftArrow) && (services[i] == 'Flight Status')) {
                    await library.clickAction(menupo.buttonLeftArrow)
                }
                if (await library.elementexistingAction(oneway.iconCross))
                    await library.clickAction(oneway.iconCross)
                if (await library.elementexistingAction(oneway.buttonOk))
                    await library.clickAction(oneway.buttonOk)
                if (await library.elementexistingAction(oneway.keyOK))
                    await library.clickAction(oneway.keyOK)
                let day = new Date().getDate();
                let month = new Date().getMonth();
                let year = new Date().getFullYear();
                let hours = new Date().getHours();
                let minutes = new Date().getMinutes();

                console.log("Day :" + day + "," + "Month : " + month + "," + "Year : " + year);
                var filename = services[i] + '_' + day + "_" + month + "_" + year + "_" + hours + "_" + minutes + ".png";

                await browser.saveScreenshot("./test/outputartifact/Screenshot/Failed/" + filename.toString());
                result = 'Failed'
                var jsdata = {
                    "TestcaseScenario": [services[i]],
                    "DateandTime": new Date().toLocaleString(undefined, {
                        timeZone: 'Asia/Kolkata'
                    }),
                    "TestcaseResult": [result],
                }
            }
            if (await library.elementexistingAction(menupo.buttonNavigateLeft)) {
                await library.clickAction(menupo.buttonNavigateLeft)
            }
            if (await library.elementexistingAction(menupo.buttonBack)) {
                await library.clickAction(menupo.buttonBack)
            }
            await browser.pause(3000)
            if (await library.elementexistingAction(menupo.buttonClose)) {
                await library.clickAction(menupo.buttonClose)
            }
            if (await library.elementdisplayedAction(oneway.buttonCloseIcon))
                await library.clickAction(oneway.buttonCloseIcon)
            if (await library.elementdisplayedAction(checkinpo.keyConfirm))
                await library.clickAction(checkinpo.keyConfirm)
            if (await library.elementexistingAction(menupo.buttonLeftArrow) && (services[i] == 'Flight Status' || services[i] == 'Boarding Passes' || services[i] == 'Flight Schedule' || services[i] == 'Lounge Finder' || services[i] == 'App Settings')) {
                await library.clickAction(menupo.buttonLeftArrow)
            }
            if (services[i] == 'Loyalty') {
                await library.clickAction(menupo.textHome)
                await library.clickAction(menupo.buttonHamburgerMenu)
            }
            resultarray.push(jsdata)
            var stringconversion = JSON.stringify(resultarray)
            var finaldata = JSON.parse(stringconversion)
            var tool = new NodeXls();
            var xls = tool.json2xls(finaldata, { order: ["TestcaseScenario", "DateandTime", "TestcaseResult"] });
            fs.writeFileSync('./test/outputartifact/result/mobile/MenuResult.xlsx', xls, 'binary');
        }

    })
})

