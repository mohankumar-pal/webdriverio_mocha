const details = require('../../../src/website/pageobjects/Checkin/checkinpo.js')
const fs = require('fs')
var NodeXls = require('node-xls');
const seatmap = require('../../../src/website/common/Checkin/seatmap.js');
const pay = require('../../../src/website/common/Checkin/PaymentPage.js');
const home = require('../../../src/website/common/OnewayRoundtrip/HomePage.js')
const library = require('../../../src/website/common/Genericlibrary.js')
const detail = require('../../../src/website/common/Checkin/CheckinDetails.js')

var configData = JSON.parse(fs.readFileSync('configWebsite.json'))
let OD = JSON.parse(fs.readFileSync('test/testdata/json/website/WebCheckin.json'))
describe('Trip Type', async () => {

    const pnrarray = [];

    OD.forEach(({
        Testcase,
        ExecutionFlag,
        PNR,
        LastName,
        EmailId,
        CountryCode,
        PhoneNumber,
        Nationality,
        Country,
        AdtGender,
        AdtDOB,
        DocumentType,
        DocumentNumber,
        DocExpDate,
        DocIssuingCountry,
        HouseAddress,
        VisaNumber,
        VisaCountry,
        VisaIssueDate,
        VisaExpDate,
        VisaIssuingCountry,
        VisaIssuancePlace,
        PurposeOfVisit,
        SendBySMS,
        SendAsPdf,
        SendPassBook,
        FFPProgram,
        FFPNumber,
        timestamp,
        NumberofAdult,
        NumberofChild,
        DoyouwanttodownloadBP,
        DoyouwanttosendBP,
        SeatSelection,
        SeatType,
        PaymentType,
        CardNumber,
        CardExpiryMonth,
        CardExpiryYear,
        CVV,
        CardHolderName,
        CardEmail,
        HouseNumber,
        ApartmentNumber,
        Pincode,
        City,
        CardCountry,
        State,
        UpdateContactDetails
    }) => {

        it('WebCheckin', async () => {

            if (await ExecutionFlag === "Yes") {
                try {
                    //LAUNCH URL
                    await library.createNewsession()
                    await library.urlLaunch(configData['url'])
                    await browser.pause(2000)
                    await home.incidentpage()
                    await library.isexistingAction(details.buttonCheckin)

                    //SUBMIT PNR AND LASTNAME
                    await detail.SubmitPNRandLastname(PNR, LastName)

                    //START CHECKIN
                    await library.waitforexistAction(details.textCheckinTitle)
                    await library.waitforexistAction(details.buttonStartCheckin[0])
                    console.log(await details.buttonStartCheckin.length)
                    var count = await details.buttonStartCheckin.length
                    for (var c = 0; c < count; c++) {
                        await browser.pause(2000)
                        await library.waitforexistAction(details.buttonStartCheckin[0])
                        await library.pagescrollAction(details.buttonStartCheckin[0])
                        await library.clickAction(details.buttonStartCheckin[0])
                        await library.pagetimeout(details.confirmpageload)

                        //ENTER CHECKIN DETAILS

                        await detail.EnterEmailPhone(EmailId, CountryCode, PhoneNumber)
                        await detail.AgreeAndContinue()
                        while (await library.elementdisplayedAction(details.textPaxTitle)) {
                            await detail.FillInternationalDetails(Nationality, Country, City, State, DocumentNumber, DocExpDate, DocIssuingCountry, HouseAddress, Pincode, Country, VisaNumber, VisaCountry, VisaIssueDate, VisaExpDate, VisaIssuingCountry, VisaIssuancePlace, DocumentNumber, DocExpDate, DocIssuingCountry, AdtGender)
                        }
                        console.log("Checkin details completed")
                        await library.waitforexistAction(details.textCheckinTitle)
                        await browser.pause(2000)
                        await library.waitforexistAction(details.buttonSelectedSeats[0]) //selected seats should be present
                        console.log("Initial selected seats count:" + await details.buttonSelectedSeats.length)
                        if (await details.buttonSelectedSeats.length > 0 && SeatSelection != 'Yes') {
                            await seatmap.ConfirmSelectedSeats()
                        }
                        else if (SeatSelection == 'Yes') {
                            await seatmap.SelectSeats(SeatType)

                            //PAYMENT
                            await pay.Payment(PaymentType, CardNumber, CardExpiryMonth, CardExpiryYear, CVV, CardHolderName, CardEmail, HouseNumber, ApartmentNumber, Pincode, City, CardCountry, State)
                        }
                        await detail.viewBoardingPass()
                        if (await DoyouwanttodownloadBP === "Yes") {
                            await detail.DownloadBoardingPass()
                        }
                        if (await DoyouwanttosendBP === "Yes") {
                            await detail.SendBoardingPass(SendAsPdf, SendPassBook, SendBySMS, EmailId, CountryCode, PhoneNumber)
                        }
                        await detail.howcanwereachyou()
                        //MANAGE BOOKING

                        if (await library.elementdisplayedAction(details.managebooking)) {
                            if (UpdateContactDetails == "Yes") {
                                await detail.UpdateContactDetails(EmailId, CountryCode, PhoneNumber)
                            }
                        }
                        await browser.pause(2000)

                        //To confirm if all checkin are completed
                        await library.urlLaunch(configData['url'])
                        await detail.SubmitPNRandLastname(PNR, LastName)
                        await library.waitforexistAction(details.textCheckinTitle)

                    }
                    let timestamp = new Date().toString("dd-MM-yyyy hh:ss:mm").replace(" ", "_");
                    let day = new Date().getDate();
                    let month = new Date().getMonth();
                    let year = new Date().getFullYear();
                    let hours = new Date().getHours();
                    let minutes = new Date().getMinutes();

                    console.log("Day :" + day + "," + "Month : " + month + "," + "Year : " + year);
                    var filename = Testcase + '_' + day + "_" + month + "_" + year + "_" + hours + "_" + minutes + ".png";

                    await browser.saveScreenshot("./test/outputartifact/Screenshot/Passed/" + filename.toString());

                    console.log(PNR)
                    var testresult = "Success"

                    var scenario = Testcase
                    console.log(scenario)
                    cabin1 = " "
                    var jsdata = {
                        "TestcaseScenario": [scenario],
                        "PNR": [PNR],
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
                    pn1 = " "
                    var cabinprint = ""
                    var jsdata = {
                        "TestcaseScenario": [Testcase],
                        "PNR": [pn1],
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
                var xls = tool.json2xls(finaldata, { order: ["TestcaseScenario", "PNR", "DateandTime", "TestcaseResult"] });
                // var xls1=tool.writeFileSync(c)
                fs.writeFileSync('./test/outputartifact/result/website/WebCheckin.xlsx', xls, 'binary');
            }

        })
    })
})