var home = require('../../../src/ios/common/HomePage.js')
const library = require('../../../src/ios/common/Genericlibrary.js')
const webvalidate = require('../../../src/website/common/validation.js')
const flightlistpo = require('../../../src/website/pageobjects/OnewayRoundtrip/Flightlistpagepo.js')
const flightpo = require('../../../src/ios/pageobjects/Flightlistpagepo.js')
const oneway = require('../../../src/ios/pageobjects/onewaypo.js')
const menupo = require('../../../src/ios/pageobjects/MenuLinkspo.js')
//const flightlist = require('../../../src/website/common/OnewayRoundtrip/FlightlistPage.js')
var flightlist = require('../../../src/ios/common/FlightlistPage.js')
const menu = require('../../../src/ios/common/menutabs.js')
const webflightlist = require('../../../src/website/common/OnewayRoundtrip/FlightlistPage.js')
const fs = require('fs')

async function OWRTflightsearch(OD, flightnumbers, fromdate, fromcity, tocity) {
    for (var d = 0; d < OD.length; d++) {
        if (OD[d].ExecutionFlag === "Yes") {
            for (var trip = 0; trip < 2; trip++) {
                //if (OD[d].TripType == 'Oneway') {
                if (trip == 0) {
                    await home.selectoneway()
                    await home.fromto(OD[d].From, OD[d].To)
                    if (await library.elementexistingAction(oneway.iconCalendar))
                        await library.clickAction(oneway.iconCalendar)
                    await home.calendar(OD[d].Departuredate)
                }
                // else if (OD[d].TripType == 'Roundtrip') {
                else if (trip == 1) {
                    await home.selectroundtrip()
                    //await home.fromto(OD[d].From, OD[d].To)
                    if (await library.elementexistingAction(oneway.iconCalendar))
                        await library.clickAction(oneway.iconCalendar)
                    await home.departcalendar(OD[d].Departuredate, OD[d].Returndate)
                }
                await library.clickAction(oneway.textPassenger)
                await home.passengerselection(OD[d].NumberofAdult, OD[d].NumberofChild, OD[d].NumberofInfant)
                await library.clickAction(oneway.cabin)
                await home.cabinselection(OD[d].CabinType)
                await library.waituntilelementexistAction(oneway.textPassenger)
                await library.clickAction(oneway.buttonSearch)
                await library.waituntilelementexistAction(oneway.buttonModifySearch)
                await browser.pause(4000)
                await library.waituntilelementexistAction(flightpo.textFromVal)

                //ORG DEST VALIDATION
                var FromText = await library.gettextAction(flightpo.textFromVal)
                await expect(FromText).toBe(OD[d].From)
                var ToText = await library.gettextAction(flightpo.textToVal)
                await expect(ToText).toBe(OD[d].To)

                //DATE VALIDATION
                var depdate = OD[d].Departuredate.slice(0, 2)
                var date1 = 'label CONTAINS "' + depdate + '"'
                var DateLoc = await $(`-ios predicate string:${date1}`)
                await expect(DateLoc).toBeExisting()

                //FLIGHT NUMBERS
                console.log(await driver.getContexts())
                console.log(await driver.getContexts())
                let contexts = await driver.getContexts()
                console.log(contexts);
                await driver.switchContext(contexts[1]);

                if (OD[d].OnwardCabinType == "First") {
                    var cabindex = flightlistpo.optionFirstCabin
                }
                else if (OD[d].OnwardCabinType == "Business") {
                    var cabindex = flightlistpo.optionBusinessCabin
                }
                else if (OD[d].OnwardCabinType == "Economy") {
                    var cabindex = flightlistpo.optionEconomyCabin
                }
                else if (OD[d].OnwardCabinType == "Premium Economy") {
                    var cabindex = flightlistpo.optionPremiumCabin
                }
                //ORG DEST VALIDATION
                //if (OD[d].TripType == 'Oneway')
                if (trip == 0)
                    await webvalidate.OWfromtovalidations(OD[d].From, OD[d].To)
                //else if (OD[d].TripType == 'Roundtrip') {
                else if (trip == 1) {
                    await webvalidate.RTfromtoarrivalvalidations(OD[d].From, OD[d].To)
                }
                console.log(await flightlistpo.textFlightNumbers.length)
                console.log(await flightlistpo.textFlightLists.length)
                //GET FLIGHT NUMBERS
                for (var k = 0; k < await flightlistpo.textFlightLists.length; k++) {
                    var flnumber = await library.gettextAction(flightlistpo.textFlightNumbers[k])
                    flnumber = flnumber.slice(3, 6)
                    flightnumbers.push(flnumber)
                    console.log(flnumber)
                    fromdate.push(OD[d].Departuredate)
                    await library.clickAction(flightlistpo.buttonViewFlightDetails[k])
                    await library.waituntilelementexistAction(flightlistpo.textFromTiming)
                    // fromtimings.push(await library.gettextAction(flightlistpo.textFromTiming))
                    // totimings.push(await library.gettextAction(flightlistpo.textToTiming))
                    var org = await library.gettextAction(flightlistpo.textOrigin)
                    org = org.slice(1, 4)
                    fromcity.push(org)
                    var dest = await library.gettextAction(flightlistpo.textDestination)
                    dest = dest.slice(1, 4)
                    tocity.push(dest)
                    await library.clickAction(flightlistpo.iconCross)
                    await library.waituntilelementexistAction(flightlistpo.buttonViewFlightDetails[0])
                }
                console.log(await flightlistpo.textFlightLists.length)
                console.log(k)
                await driver.switchContext(contexts[0])
                //if (OD[d].TripType == 'Roundtrip') {
                if (trip == 1) {
                    //Flight & Cabin selection
                    await flightlist.flcabinselection(OD[d].OnwardCabinType, OD[d].SubCabinType, OD[d].DoYouWanttoUpgrade, 'No', 'nil') //onward
                    await library.waituntilelementexistAction(oneway.buttonModifySearch)
                }
                await driver.switchContext(contexts[1])
                //RETURN ORG DEST VALIDATION
                //if (OD[d].TripType == 'Roundtrip') {
                if (trip == 1) {
                    await webvalidate.RTfromtoarrivalvalidations(OD[d].From, OD[d].To)
                }
                console.log(await flightlistpo.textFlightNumbers.length)
                console.log(await flightlistpo.textFlightNumbers.length + k)
                //GET FLIGHT NUMBERS
                for (var k = 0; k < await flightlistpo.textFlightLists.length; k++) {
                    var flnumber = await library.gettextAction(flightlistpo.textFlightNumbers[k])
                    flnumber = flnumber.slice(3, 6)
                    flightnumbers.push(flnumber)
                    console.log(flnumber)
                    fromdate.push(OD[d].Returndate)
                    await library.clickAction(flightlistpo.buttonViewFlightDetails[k])
                    await library.waituntilelementexistAction(flightlistpo.textFromTiming)
                    // fromtimings.push(await library.gettextAction(flightlistpo.textFromTiming))
                    // totimings.push(await library.gettextAction(flightlistpo.textToTiming))
                    var org = await library.gettextAction(flightlistpo.textOrigin)
                    org = org.slice(1, 4)
                    fromcity.push(org)
                    var dest = await library.gettextAction(flightlistpo.textDestination)
                    dest = dest.slice(1, 4)
                    tocity.push(dest)
                    await library.clickAction(flightlistpo.iconCross)
                    //await library.waituntilelementexistAction(flightlistpo.buttonViewFlightDetails[0])
                }
                await driver.switchContext(contexts[0])
                await library.clickAction(oneway.iconCross)
                
                await library.waituntilelementexistAction(oneway.keyConfirm)
                await library.clickAction(oneway.keyConfirm)
            }
        }
    }

}
async function EnterFlightNumberDetails(flightnumbers, fromdate) {
    await library.waituntilelementexistAction(menupo.textboxFlightNumber)
    await library.filltextboxAction(menupo.textboxFlightNumber, flightnumbers)
    await library.clickAction(menupo.buttonFSCalendar)
    await home.calendar(fromdate)
    if (await library.elementdisplayedAction(menupo.keyReturn))
        await library.clickAction(menupo.keyReturn)
    await library.clickAction(menupo.buttonGetFlightStatus)
    //if more than one flight appears for few flight codes - then click first flight

    await library.waituntilelementexistAction(menupo.textFlightStatus)
}
async function EnterFlightStatusRouteValidation(fromcity, tocity, fromdate) {
    await library.clickAction(menupo.buttonRoute)
    await home.FSfromto(fromcity, tocity)
    await library.clickAction(menupo.buttonCalendar)
    await home.calendar(fromdate)
    if (await library.elementdisplayedAction(menupo.keyReturn))
        await library.clickAction(menupo.keyReturn)
    await library.clickAction(menupo.buttonGetFlightStatus)
}
async function RecentSearchValidation(OD) {
    await library.clickAction(menupo.buttonRecent)
    for (var d = 0; d < OD.length; d++) {
        if (OD[d].ExecutionFlag === "Yes") {
            //ORG DEST VALIDATION
            const FromText = '//XCUIElementTypeStaticText[contains(@name,"' + OD[d].From + '")]'
            const FromLoc = await $(FromText)
            await expect(FromLoc).toBeExisting()
            const ToText = '//XCUIElementTypeStaticText[contains(@name,"' + OD[d].To + '")]'
            const ToLoc = await $(ToText)
            await expect(ToLoc).toBeExisting()

            //DATE VALIDATION
            var depdate = OD[d].Departuredate.slice(0, 2)
            var date1 = 'label CONTAINS "' + depdate + '"'
            var DateLoc = await $(`-ios predicate string:${date1}`)
            await expect(DateLoc).toBeExisting()
        }
    }
}

exports.OWRTflightsearch = OWRTflightsearch;
exports.EnterFlightNumberDetails = EnterFlightNumberDetails;
exports.EnterFlightStatusRouteValidation = EnterFlightStatusRouteValidation;
exports.RecentSearchValidation = RecentSearchValidation;
