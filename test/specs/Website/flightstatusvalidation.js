const homepo = require('../../../src/website/pageobjects/OnewayRoundtrip/Homepagepo.js')
const flightlistpo = require('../../../src/website/pageobjects/OnewayRoundtrip/Flightlistpagepo.js')
const paxdetailpo = require('../../../src/website/pageobjects/OnewayRoundtrip/Passengerdetpo.js')
const addservicepo = require('../../../src/website/pageobjects/OnewayRoundtrip/additionalservicespo.js')
const paymentpo = require('../../../src/website/pageobjects/OnewayRoundtrip/paymentpo.js')
const fs = require('fs')
const NodeXls = require('node-xls');
const library = require('../../../src/website/common/Genericlibrary.js')
const flightlist = require('../../../src/website/common/OnewayRoundtrip/FlightlistPage.js')
const validate = require('../../../src/website/common/validation.js')
const home = require('../../../src/website/common/OnewayRoundtrip/HomePage.js')
const payment = require('../../../src/website/common/OnewayRoundtrip/PaymentPage.js')
const paxdetail = require('../../../src/website/common/OnewayRoundtrip/PassengerDetails.js')
const addservice = require('../../../src/website/common/OnewayRoundtrip/AdditionalService.js')
const MBaddservice = require('../../../src/website/common/OnewayRoundtrip/MBadditionalservice.js')
const MBmodifypax = require('../../../src/website/common/OnewayRoundtrip/modifydetails.js')
const MBreissue = require('../../../src/website/common/OnewayRoundtrip/Reissue.js')
const MBcancel = require('../../../src/website/common/OnewayRoundtrip/cancel.js')
const MChomepo = require('../../../src/website/pageobjects/multicity/Homepagepo.js')
const MCflightlistpo = require('../../../src/website/pageobjects/multicity/Flightlistpagepo.js')
var MChome = require('../../../src/website/common/muliticity/HomePage.js')
const flightstatuspo = require('../../../src/website/pageobjects/FlightStatusSchedule/flightstatuspo.js')
const configData = JSON.parse(fs.readFileSync('configWebsite.json'))
let OD = JSON.parse(fs.readFileSync('test/testdata/json/website/OWandMB.json'))
describe('Trip Type', async () => {
    const pnrarray = [];

    OD.forEach(({
        Testcase,
        ExecutionFlag,
        TripType,
        From,
        To,
        Departuredate,
        Returndate,
        CabinType,
        OnwardCabinType,
        FlightType,
        SubCabinType,
        NumberofAdult,
        NumberofChild,
        NumberofInfant,
        DoYouWanttoUpgrade,
        Segment, Segment1From, Segment1To, Segment2From,
        Segment2To, Segment3From, Segment3To, Segment4From, Segment4To, Segment1Date,
        Segment2Date, Segment3Date, Segment4Date
    }) => {

        it('Oneway', async () => {
            var flightnumbers = [];
            var fromtimings = [];
            var totimings = [];
            var fromdate = [];
            var fromcity = [];
            var tocity = [];

            if (await ExecutionFlag === "Yes") {
                if (TripType != 'Multicity') {

                    //LAUNCH URL
                    await library.createNewsession()
                    await library.urlLaunch(configData['url'])
                    await home.AIsignin()
                    await library.waitforexistAction(homepo.buttonSearchFlights)

                    //SEARCH FLIGHT
                    if (TripType == 'Oneway')
                        await home.selectoneway()
                    else if (TripType == 'Roundtrip')
                        await home.selectroundtrip()
                    await home.fromto(From, To)
                    if (TripType == 'Oneway') {
                        await library.clickAction(homepo.buttonCalender[0])
                        await home.departcalendar(Departuredate)
                    }
                    else if (TripType == 'Roundtrip') {
                        await library.clickAction(homepo.buttonCalender[0])
                        await home.departcalendar(Departuredate)
                        await library.clickAction(homepo.buttonCalender[1])
                        await home.departcalendar(Returndate)
                    }
                    await home.passengerselection(NumberofAdult, NumberofChild, NumberofInfant)
                    await home.cabinselection(CabinType)
                    await flightlist.gotoflights()


                    if (OnwardCabinType == "First") {
                        var cabindex = flightlistpo.optionFirstCabin
                    }
                    else if (OnwardCabinType == "Business") {
                        var cabindex = flightlistpo.optionBusinessCabin
                    }
                    else if (OnwardCabinType == "Economy") {
                        var cabindex = flightlistpo.optionEconomyCabin
                    }
                    else if (OnwardCabinType == "Premium Economy") {
                        var cabindex = flightlistpo.optionPremiumCabin
                    }

                    //CURRENCY VALIDATION
                    var currencytxt = await validate.currencyvalidation()
                    console.log(currencytxt)

                    //ORG DEST VALIDATION
                    if (TripType == 'Oneway')
                        await validate.OWfromtovalidations(From, To)
                    else if (TripType == 'Roundtrip') {
                        await validate.RTfromtoarrivalvalidations(From, To)
                    }

                    //GET FLIGHT NUMBERS
                    for (var i = 0; i < await flightlistpo.textFlightNumbers.length; i++) {
                        var flnumber = await library.gettextAction(flightlistpo.textFlightNumbers[i])
                        flnumber = flnumber.slice(3, 6)
                        flightnumbers.push(flnumber)
                        // fromtimings.push(await library.gettextAction(flightlistpo.textFromTimings[i]))
                        // totimings.push(await library.gettextAction(flightlistpo.textToTimings[i]))
                        // fromcity.push(From)
                        // tocity.push(To)
                        fromdate.push(Departuredate)
                        await library.clickAction(flightlistpo.buttonViewFlightDetails[i])
                        await library.waitforexistAction(flightlistpo.textFromTiming)
                        fromtimings.push(await library.gettextAction(flightlistpo.textFromTiming))
                        totimings.push(await library.gettextAction(flightlistpo.textToTiming))
                        var org = await library.gettextAction(flightlistpo.textOrigin)
                        org = org.slice(1, 4)
                        fromcity.push(org)
                        var dest = await library.gettextAction(flightlistpo.textDestination)
                        dest = dest.slice(1, 4)
                        tocity.push(dest)
                        await library.clickAction(flightlistpo.iconCross)
                        await library.waitforexistAction(flightlistpo.buttonViewFlightDetails[i])
                    }

                    //DATE VALIDATION
                    if (TripType == 'Oneway')
                        await validate.OWdeparturedatevalidation(Departuredate)
                    else if (TripType == 'Roundtrip') {
                        await validate.RTdeparturedatevalidations(Departuredate)
                        //FLIGHT AND CABIN SELECTION
                        await flightlist.flightselection(FlightType, cabindex)
                        await flightlist.cabinselection(SubCabinType, DoYouWanttoUpgrade)
                        await library.waitforexistAction(flightlistpo.textFlights)
                        await browser.pause(4000)
                        //RETURN DATE VALIDATION
                        await validate.RTreturndatevalidations(Returndate)
                    }
                    //RETURN ORG DEST VALIDATION
                    if (TripType == 'Roundtrip') {
                        await validate.RTfromtoarrivalvalidations(From, To)
                    }

                    //GET FLIGHT NUMBERS
                    for (var i = 0; i < await flightlistpo.textFlightNumbers.length; i++) {
                        var flnumber = await library.gettextAction(flightlistpo.textFlightNumbers[i])
                        flnumber = flnumber.slice(3, 6)
                        flightnumbers.push(flnumber)
                        // fromtimings.push(await library.gettextAction(flightlistpo.textFromTimings[i]))
                        // totimings.push(await library.gettextAction(flightlistpo.textToTimings[i]))
                        // fromcity.push(To)
                        // tocity.push(From)
                        fromdate.push(Returndate)
                        await library.clickAction(flightlistpo.buttonViewFlightDetails[i])
                        await library.waitforexistAction(flightlistpo.textFromTiming)
                        fromtimings.push(await library.gettextAction(flightlistpo.textFromTiming))
                        totimings.push(await library.gettextAction(flightlistpo.textToTiming))
                        var org = await library.gettextAction(flightlistpo.textOrigin)
                        org = org.slice(1, 4)
                        fromcity.push(org)
                        var dest = await library.gettextAction(flightlistpo.textDestination)
                        dest = dest.slice(1, 4)
                        tocity.push(dest)
                        await library.clickAction(flightlistpo.iconCross)
                        await library.waitforexistAction(flightlistpo.buttonViewFlightDetails[i])
                    }
                }
                else if (TripType == 'Multicity') {
                    await library.urlLaunch(configData['url'])
                    await home.AIsignin()
                    await browser.pause(5000)
                    await library.waitfordisplayedAction(MChomepo.hyperLinkMulticity)
                    await library.pagescrolltomiddleAction(MChomepo.hyperLinkMulticity)
                    await browser.pause(3000)
                    await library.clickAction(MChomepo.hyperLinkMulticity)
                    const w = await browser.getWindowHandles()
                    await browser.pause(3000)
                    await browser.switchToWindow(w[1])
                    await browser.pause(5000)
                    await library.waitfordisplayedAction(MChomepo.labelFlight1)
                    for (var ft = 0; ft < await Segment; ft++) {
                        var fromList = [Segment1From, Segment2From, Segment3From, Segment4From]
                        var toList = [Segment1To, Segment2To, Segment3To, Segment4To]
                        var departureDateList = [Segment1Date, Segment2Date, Segment3Date, Segment4Date]
                        await browser.pause(5000)
                        await library.pagescrolltomiddleAction(MChomepo.textboxFrom[ft])
                        await MChome.FromToSelection(MChomepo.textboxFrom[ft], fromList[ft], MChomepo.textboxTo[ft], toList[ft])
                        await library.clickAction(MChomepo.textboxDate[ft])
                        await MChome.departureDateSelection(departureDateList[ft], MChomepo.textboxTo[ft])
                        if (ft == 0) {
                            if (await MChomepo.labelFlightSugg.length != 0) {
                                await library.clickAction(MChomepo.iconCalendar[0])
                            }
                        }
                        else if (ft == 1) {
                            if (await MChomepo.labelFlightSugg.length != 0) {
                                await library.clickAction(MChomepo.iconCalendar[1])
                            }
                        }
                        else if (ft == 2) {
                            if (await MChomepo.labelFlightSugg.length != 0) {
                                await library.clickAction(MChomepo.iconCalendar[2])
                            }
                        }
                        else if (ft == 3) {
                            if (await MChomepo.labelFlightSugg.length != 0) {
                                await library.clickAction(MChomepo.iconCalendar[3])
                            }
                        }
                        if ((Segment == 2) && (ft == 1)) {
                            await library.clickAction(MChomepo.buttonRemoveFlights)
                        }
                        if ((Segment > 3) && (ft > 1) && (ft != Segment - 1)) {
                            await library.clickAction(MChomepo.buttonAddFlights)
                        }
                    }
                    await library.clickAction(MChomepo.buttonShowFlights)
                    await browser.pause(4000)
                    await library.pagetimeout(MChomepo.pageLoader)
                    await library.waitforexistAction(MCflightlistpo.labelSelectFareType)

                    // //GET FLIGHT NUMBERS //no unique locators for departure vs arrival time&city
                    // var f = 0;
                    // for (var i = 0; i < await MCflightlistpo.textFlightNumbers.length; i++) {
                    //     flightnumbers.push(parseInt(await library.gettextAction(MCflightlistpo.textFlightNumbers[i])))
                    //     fromtimings.push(await library.gettextAction(MCflightlistpo.textFlightTimings[f]))
                    //     totimings.push(await library.gettextAction(MCflightlistpo.textFlightTimings[f + 1]))
                    //     const fromtext = await library.gettextAction(MCflightlistpo.textAirportCode[f])
                    //     fromtext = fromtext.slice(1, 4)
                    //     fromcity.push(fromtext)
                    //     const totext = await library.gettextAction(MCflightlistpo.textAirportCode[f + 1])
                    //     totext = totext.slice(1, 4)
                    //     tocity.push(totext)
                    //     f += 2;
                    //     //need to push dates
                    //     //for multicity all sectors and dates are appearing in single page so unable to take locators
                    // }

                    //DATE VALIDATION
                    if (Segment == 2) {
                        await validate.MCSegment1departuredatevalidation(Segment1Date)
                        await validate.MCSegment2departuredatevalidation(Segment2Date)
                    }
                    else if (Segment == 3) {
                        await validate.MCSegment1departuredatevalidation(Segment1Date)
                        await validate.MCSegment2departuredatevalidation(Segment2Date)
                        await validate.MCSegment3departuredatevalidation(Segment3Date)
                    }
                    else if (Segment == 3) {
                        await validate.MCSegment1departuredatevalidation(Segment1Date)
                        await validate.MCSegment2departuredatevalidation(Segment2Date)
                        await validate.MCSegment3departuredatevalidation(Segment3Date)
                        await validate.MCSegment4departuredatevalidation(Segment4Date)
                    }
                    var currencytxt = await validate.currencyvalidationMC()

                    //ORG DEST VALIDATION
                    if (Segment == 2) {
                        await browser.pause(3000)
                        await library.pagescrollAction(MCflightlistpo.buttonSeg1Flights[0])
                        await library.clickAction(MCflightlistpo.buttonSeg1Flights[0])
                        await browser.pause(4000)
                        await validate.MCSegment1fromtovalidation(Segment1From, Segment1To)

                        await library.pagescrollAction(MCflightlistpo.buttonSeg2Flights[0])
                        await library.clickAction(MCflightlistpo.buttonSeg2Flights[0])

                        await validate.MCSegment2fromtovalidation(Segment2From, Segment2To)

                    }
                    if (Segment == 3) {
                        await library.pagescrollAction(MCflightlistpo.buttonSeg1Flights[0])
                        await library.clickAction(MCflightlistpo.buttonSeg1Flights[0])
                        await validate.MCSegment1fromtovalidation(Segment1From, Segment1To)

                        await library.pagescrollAction(MCflightlistpo.buttonSeg2Flights[0])
                        await library.clickAction(MCflightlistpo.buttonSeg2Flights[0])
                        await validate.MCSegment2fromtovalidation(Segment2From, Segment2To)

                        await library.pagescrollAction(MCflightlistpo.buttonSeg3Flights[0])
                        await library.clickAction(MCflightlistpo.buttonSeg3Flights[0])
                        await validate.MCSegment3fromtovalidation(Segment3From, Segment3To)
                    }
                    if (Segment == 4) {
                        await library.pagescrollAction(MCflightlistpo.buttonSeg1Flights[0])
                        await library.clickAction(MCflightlistpo.buttonSeg1Flights[0])
                        await validate.MCSegment1fromtovalidation(Segment1From, Segment1To)

                        await library.pagescrollAction(MCflightlistpo.buttonSeg2Flights[0])
                        await library.clickAction(MCflightlistpo.buttonSeg2Flights[0])
                        await validate.MCSegment2fromtovalidation(Segment2From, Segment2To)

                        await library.pagescrollAction(MCflightlistpo.buttonSeg3Flights[0])
                        await library.clickAction(MCflightlistpo.buttonSeg3Flights[0])
                        await validate.MCSegment3fromtovalidation(Segment3From, Segment3To)

                        await library.pagescrollAction(MCflightlistpo.buttonSeg4Flights[0])
                        await library.clickAction(MCflightlistpo.buttonSeg4Flights[0])
                        await validate.MCSegment4fromtovalidation(Segment4From, Segment4To)

                    }
                }

                //FLIGHT STATUS VALIDATION
                console.log(await flightnumbers.length)
                await library.urlLaunch(configData['url'])
                await home.AIsignin()
                await browser.pause(2000)
                //for (var i = 0; i < await flightnumbers.length; i++) {
                var i = 0;
                while (i < await flightnumbers.length) {
                    try {
                        await library.waitforexistAction(flightstatuspo.iconFlightStatus)
                        await library.isexistingAction(flightstatuspo.iconFlightStatus)
                        await browser.pause(2000)
                        await library.pagescrolltomiddleAction(flightstatuspo.iconFlightStatus)
                        await browser.pause(2000)
                        await library.clickAction(flightstatuspo.iconFlightStatus)
                        await library.pagescrolltomiddleAction(flightstatuspo.buttonShowFlight)
                        await library.fillTextbox(flightstatuspo.textboxFlightNumber, flightnumbers[i])

                        await browser.pause(2000)
                        await library.clickAction(flightstatuspo.dropdownDate)
                        const datetext = '//span[contains(text(),"' + fromdate[i].slice(0, 6) + '")]'
                        const dateloc = await $(datetext)
                        await library.clickAction(dateloc)
                        await library.clickAction(flightstatuspo.buttonShowFlight)
                        await browser.pause(5000)
                        //more than one flight status appears for few flight codes
                        if (await flightstatuspo.buttonFlightStatus.length > 0) {
                            const lastflight = await flightstatuspo.buttonFlightStatus.length - 1

                            //VALIDATE FIRST STOP FLIGHT
                            await library.clickAction(flightstatuspo.buttonFlightStatus[0])
                            await library.pagetimeout(flightstatuspo.page_loader)
                            await library.waitforexistAction(flightstatuspo.divDeparture)

                            //     //FLIGHT CODE VALIDATION
                            //     await validate.flightcodevalidation(flightnumbers[i])

                            //     //ORG VALIDATION
                            //     await validate.FSorigincityvalidation(fromcity[i])

                            //     //DATE VALIDATION
                            //     await validate.FSdatevalidation(fromdate[i].slice(0, 6))

                            //     //FIRST FLIGHT TIMING VALIDATION
                            //     await validate.FSfirsttimingvalidation(fromtimings[i])

                            //     //VALIDATE LAST STOP FLIGHT
                            //     await library.pagescrolltomiddleAction(flightstatuspo.buttonFlightStatus[lastflight])
                            //     await library.clickAction(flightstatuspo.buttonFlightStatus[lastflight])
                            //     await library.pagetimeout(flightstatuspo.page_loader)
                            //     await library.waitforexistAction(flightstatuspo.divDeparture2)

                            //     //FLIGHT CODE VALIDATION
                            //     await validate.lastflightcodevalidation(flightnumbers[i], lastflight)

                            //     //DEST VALIDATION
                            //     await validate.FSlastdestinationvalidation(tocity[i], await flightstatuspo.buttonFlightStatus.length)

                            //     //DATE VALIDATION
                            //     await validate.FSlastdatevalidation(fromdate[i].slice(0, 6), lastflight)

                            //     //LAST FLIGHT TIMING VALIDATION
                            //     await validate.FSlasttimingvalidation(totimings[i], (await flightstatuspo.buttonFlightStatus.length * 2))

                            // }
                            // else {
                            await library.pagetimeout(flightstatuspo.page_loader)
                            await library.waitforexistAction(flightstatuspo.divDeparture)

                            //FLIGHT CODE VALIDATION
                            await validate.flightcodevalidation(flightnumbers[i])

                            //ORG DEST VALIDATION
                            await validate.FScityvalidation(fromcity[i], tocity[i])

                            //DATE VALIDATION
                            await validate.FSdatevalidation(fromdate[i].slice(0, 6))

                            //FLIGHT TIMING VALIDATION
                            await validate.FStimingvalidation(fromtimings[i], totimings[i])
                        }
                        let day = new Date().getDate();
                        let month = new Date().getMonth();
                        let year = new Date().getFullYear();
                        let hours = new Date().getHours();
                        let minutes = new Date().getMinutes();

                        console.log("Day :" + day + "," + "Month : " + month + "," + "Year : " + year);
                        var filename = Testcase + '_' + day + "_" + month + "_" + year + "_" + hours + "_" + minutes + ".png";

                        await browser.saveScreenshot("./test/outputartifact/Screenshot/Passed/" + filename.toString());

                        var testresult = "Success"

                        var scenario = Testcase
                        console.log(scenario)
                        cabin1 = " "
                        var jsdata = {
                            "TestcaseScenario": [scenario],
                            "FlightCode": [flightnumbers[i]],
                            "DateandTime": new Date().toLocaleString(undefined, {
                                timeZone: 'Asia/Kolkata'
                            }),
                            "TestcaseResult": [testresult],


                        }
                        pnrarray.push(jsdata)

                    }
                    catch (e) {
                        console.log(e)
                        let day = new Date().getDate();
                        let month = new Date().getMonth();
                        let year = new Date().getFullYear();
                        let hours = new Date().getHours();
                        let minutes = new Date().getMinutes();

                        console.log("Day :" + day + "," + "Month : " + month + "," + "Year : " + year);
                        var filename = Testcase + '_' + day + "_" + month + "_" + year + "_" + hours + "_" + minutes + ".png";

                        await browser.saveScreenshot("./test/outputartifact/Screenshot/Failed/" + filename.toString());


                        testresult1 = "Failed"
                        var cabinprint = ""
                        var jsdata = {
                            "TestcaseScenario": [Testcase],
                            "FlightCode": [flightnumbers[i]],
                            "TestcaseResult": [testresult1],
                            "DateandTime": new Date().toLocaleString(undefined, {
                                timeZone: 'Asia/Kolkata'
                            }),
                        }
                        pnrarray.push(jsdata)
                    }
                    var stringconversion = JSON.stringify(pnrarray)
                    var finaldata = JSON.parse(stringconversion)
                    var tool = new NodeXls();
                    var xls = tool.json2xls(finaldata, { order: ["TestcaseScenario", "FlightCode", "DateandTime", "TestcaseResult"] });
                    fs.writeFileSync('./test/outputartifact/result/website/FlightStatusResult.xlsx', xls, 'binary');
                    await browser.pause(3000)
                    if (await library.elementdisplayedAction(flightstatuspo.iconAirIndia2))
                        await library.clickAction(flightstatuspo.iconAirIndia2)
                    else if (await library.elementdisplayedAction(flightstatuspo.iconAirIndia))
                        await library.clickAction(flightstatuspo.iconAirIndia)
                    i++;
                }
            }
        })
    })
})
