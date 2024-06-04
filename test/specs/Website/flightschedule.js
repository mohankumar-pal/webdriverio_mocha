const flightschedulepo = require('../../../src/website/pageobjects/FlightStatusSchedule/flightschedulepo.js')
const fs = require('fs')
var NodeXls = require('node-xls');
const library = require('../../../src/website/common/Genericlibrary.js')
var calendar=require('../../../src/website/common/FlightStatusSchedule/fscalender.js')
var validate = require('../../../src/website/common/validation.js')
const home = require('../../../src/website/common/OnewayRoundtrip/HomePage.js')
var configData = JSON.parse(fs.readFileSync('configWebsite.json'))
let OD = JSON.parse(fs.readFileSync('test/testdata/json/website/FlightSchedule.json'))

describe('Trip Type', async () => {
    const pnrarray = [];
    OD.forEach(({
        Testcase,
        ExecutionFlag,
        TripType,
        FromDate,
        ToDate,
        From,
        To
    }) => {
        it('FlightSchedule', async () => {

            if (await ExecutionFlag === "Yes") {
                try {
                    await library.createNewsession()
                    await library.urlLaunch(configData['url'])
                    await home.AIsignin()
                    await browser.pause(2000)
                    await library.isexistingAction(flightschedulepo.bookmanage)
                    await library.clickAction(flightschedulepo.bookmanage)
                    await library.clickAction(flightschedulepo.flightschedule)
                    await library.waitforexistAction(flightschedulepo.fstitle)
                    if(TripType === "Roundtrip")
                    {
                        //await flightschedulepo.roundtrip.scrollIntoView({ block: 'center', inline: 'center' })
                        await browser.pause(2000)
                        await library.pagescrolltomiddleAction(flightschedulepo.textboxFrom)
                        await browser.pause(2000)
                        await library.clickAction(flightschedulepo.radiobuttonRoundTrip)
                        await library.clickAction(flightschedulepo.textboxFromDate)
                        await calendar.selectdate(FromDate)
                        await library.clickAction(flightschedulepo.textboxToDate)
                        await calendar.selectdate(ToDate)
                    }
                    if(TripType === "Oneway")
                    {
                        await browser.pause(2000)
                        await library.pagescrolltomiddleAction(flightschedulepo.textboxFrom)
                        await browser.pause(2000)
                        await library.clickAction(flightschedulepo.radiobuttonOneway)
                        await library.clickAction(flightschedulepo.textboxFromDate)
                        await calendar.selectdate(FromDate)
                    }
                    await calendar.fromto(From,To)
                    //await browser.pause(2000)
                    await library.movetoelementAction(flightschedulepo.buttonSubmit)
                    await library.clickAction(flightschedulepo.buttonSubmit)
                    //await browser.pause(3000)
                    await library.pagetimeout(flightschedulepo.page_loader)
                    await library.waitforexistAction(flightschedulepo.textFlightDetails)

                    //FLIGHT DETAILS VALIDATION
                    await expect(flightschedulepo.textFlightDetails).toBeDisplayed()

                    //ORG DEST VALIDATION
                    if(TripType == "Oneway")
                        await validate.FSC_OW_origindestinationvalidation(From,To)
                    else if(TripType == "Roundtrip")
                        await validate.FSC_RT_origindestinationvalidation(From,To)

                    //DATE VALIDATION
                    if(TripType == "Oneway")
                        await validate.FSC_OW_datevalidation(FromDate)
                    else if(TripType == "Roundtrip")
                        await validate.FSC_RT_datevalidation(FromDate, ToDate)

                    
                    
                    
                    let timestamp = new Date().toString("dd-MM-yyyy hh:ss:mm").replace(" ", "_");
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
                        "TripType": [TripType],
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
                var xls = tool.json2xls(finaldata, { order: ["TestcaseScenario", "TripType", "DateandTime", "TestcaseResult"] });
                // var xls1=tool.writeFileSync(c)
                fs.writeFileSync('./test/outputartifact/result/website/FlightScheduleResult.xlsx', xls, 'binary');
            }
        })
    })



})


