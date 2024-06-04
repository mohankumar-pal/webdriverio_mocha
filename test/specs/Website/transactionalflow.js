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
const configData = JSON.parse(fs.readFileSync('configWebsite.json'))
let OD = JSON.parse(fs.readFileSync('test/testdata/json/website/OWandMB.json'))
describe('Trip Type', async () => {
    const pnrarray = [];
    const mbresult = [];
    const mbresult1 = [];
    const mbresult2 = [];
    const mbresult3 = [];
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

            if (await ExecutionFlag === "Yes") {
                if (TripType != 'Multicity') {
                    try {

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
                            "TripType": [TripType],
                            "From": [From],
                            "To": [To],
                            "Segment1From": '',
                            "Segment1To": '',
                            "Segment2From": '',
                            "Segment2To": '',
                            "Segment3From": '',
                            "Segment3To": '',
                            "Segment4From": '',
                            "Segment4To": '',
                            "Currency": [currencytxt],
                            "DateandTime": new Date().toLocaleString(undefined, {
                                timeZone: 'Asia/Kolkata'
                            }),
                            "TestcaseResult": [testresult],
                        }
                        pnrarray.push(jsdata)
                        var stringconversion = JSON.stringify(pnrarray)
                        var finaldata = JSON.parse(stringconversion)
                        var tool = new NodeXls();
                        var xls = tool.json2xls(finaldata, { order: ["TestcaseScenario", "TripType", "From", "To", "Segment1From", "Segment1To", "Segment2From", "Segment2To", "Segment3From", "Segment3To", "Segment4From", "Segment4To", "Currency", "DateandTime", "TestcaseResult"] });
                        fs.writeFileSync('./test/outputartifact/result/website/TransactionalflowResult.xlsx', xls, 'binary');

                    } catch (e) {
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
                        pn1 = " "
                        var jsdata = {
                            "TestcaseScenario": [Testcase],
                            "TripType": [TripType],
                            "From": [From],
                            "To": [To],
                            "Segment1From": '',
                            "Segment1To": '',
                            "Segment2From": '',
                            "Segment2To": '',
                            "Segment3From": '',
                            "Segment3To": '',
                            "Segment4From": '',
                            "Segment4To": '',
                            "Currency": [currencytxt],
                            "TestcaseResult": [testresult1],
                            "DateandTime": new Date().toLocaleString(undefined, {
                                timeZone: 'Asia/Kolkata'
                            }),
                        }
                        pnrarray.push(jsdata)
                        var stringconversion = JSON.stringify(pnrarray)
                        var finaldata = JSON.parse(stringconversion)
                        var tool = new NodeXls();
                        var xls = tool.json2xls(finaldata, { order: ["TestcaseScenario", "TripType", "From", "To", "Segment1From", "Segment1To", "Segment2From", "Segment2To", "Segment3From", "Segment3To", "Segment4From", "Segment4To", "Currency", "DateandTime", "TestcaseResult"] });
                        fs.writeFileSync('./test/outputartifact/result/website/TransactionalflowResult.xlsx', xls, 'binary');
                    }
                }
                else if (TripType == 'Multicity') {
                    try {
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
                        var jsdata = {
                            "TestcaseScenario": [scenario],
                            "TripType": [TripType],
                            "From": '',
                            "To": '',
                            "Segment1From": [Segment1From],
                            "Segment1To": [Segment1To],
                            "Segment2From": [Segment2From],
                            "Segment2To": [Segment2To],
                            "Segment3From": [Segment3From],
                            "Segment3To": [Segment3To],
                            "Segment4From": [Segment4From],
                            "Segment4To": [Segment4To],
                            "Currency": [currencytxt],
                            "TestcaseResult": [testresult],
                            "DateandTime": new Date().toLocaleString(undefined, {
                                timeZone: 'Asia/Kolkata'
                            }),
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
                        var jsdata = {
                            "TestcaseScenario": [Testcase],
                            "TripType": [TripType],
                            "From": '',
                            "To": '',
                            "Segment1From": [Segment1From],
                            "Segment1To": [Segment1To],
                            "Segment2From": [Segment2From],
                            "Segment2To": [Segment2To],
                            "Segment3From": [Segment3From],
                            "Segment3To": [Segment3To],
                            "Segment4From": [Segment4From],
                            "Segment4To": [Segment4To],
                            "Currency": [currencytxt],
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
                    var xls = tool.json2xls(finaldata, { order: ["TestcaseScenario", "TripType", "From", "To", "Segment1From", "Segment1To", "Segment2From", "Segment2To", "Segment3From", "Segment3To", "Segment4From", "Segment4To", "Currency", "DateandTime", "TestcaseResult"] });
                    fs.writeFileSync('./test/outputartifact/result/website/TransactionalflowResult.xlsx', xls, 'binary');
                }
            }
        })
    })
})
