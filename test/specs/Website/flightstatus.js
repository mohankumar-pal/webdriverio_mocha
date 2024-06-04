const flightstatuspo = require('../../../src/website/pageobjects/FlightStatusSchedule/flightstatuspo.js')
const fs = require('fs')
var NodeXls = require('node-xls');
const library = require('../../../src/website/common/Genericlibrary.js')
const selectdate = require('../../../src/website/common/FlightStatusSchedule/fscalender.js')
const validate = require('../../../src/website/common/validation.js');
const validationpo = require('../../../src/website/pageobjects/validationpo.js');
const home = require('../../../src/website/common/OnewayRoundtrip/HomePage.js')
var configData = JSON.parse(fs.readFileSync('configWebsite.json'))
let OD = JSON.parse(fs.readFileSync('test/testdata/json/website/FlightStatus.json'))

describe('Trip Type', async () => {
    const pnrarray = [];
    OD.forEach(({
        Testcase,
        ExecutionFlag,
        FlightNumber,
        FromDate

    }) => {
        it('FlightStatus', async () => {

            if (await ExecutionFlag === "Yes") {
                try {
                    await library.createNewsession()
                    await library.urlLaunch(configData['url'])
                    await home.AIsignin()
                    await browser.pause(2000)
                    await library.waitforexistAction(flightstatuspo.iconFlightStatus)
                    await library.isexistingAction(flightstatuspo.iconFlightStatus)
                    await browser.pause(2000)
                    await library.pagescrolltomiddleAction(flightstatuspo.iconFlightStatus)
                    await browser.pause(2000)
                    await library.clickAction(flightstatuspo.iconFlightStatus)
                    await library.pagescrolltomiddleAction(flightstatuspo.buttonShowFlight)
                    await library.fillTextbox(flightstatuspo.textboxFlightNumber, FlightNumber)
                    
                    // await library.clickAction(flightstatuspo.textboxFromDate)
                    // await selectdate.calendar(FromDate)  //UI updated

                    //now we can select only 5 days
                    await browser.pause(2000)
                    await library.clickAction(flightstatuspo.dropdownDate)
                    const datetext = '//span[contains(text(),"'+ FromDate +'")]'
                    const dateloc = await $(datetext)
                    await library.clickAction(dateloc)
                    await library.clickAction(flightstatuspo.buttonShowFlight)
                    //await library.waitfordisplayedAction(flightstatuspo.imagePageLoading)
                    await library.pagetimeout(flightstatuspo.page_loader)
                    await library.waitforexistAction(flightstatuspo.divDeparture)

                    //TOTAL DURATION VALIDATION
                    //await validate.FStotalduration()  //removed in recent UI

                    //FLIGHT CODE VALIDATION
                    await validate.flightcodevalidation(FlightNumber)

                    //ORG DEST VALIDATION
                    await validate.FSorigindestinationvalidation()

                    //DATE VALIDATION
                    await validate.FSdatevalidation(FromDate)
                    

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
                        "FlightCode": [FlightNumber],
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
                        "FlightCode": [FlightNumber],
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
            }
        })
    })



})


