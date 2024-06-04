const library = require('../common/Genericlibrary.js')
const reissue = require("../pageobjects/reissuepo.js")
const fs = require('fs')
const paymentpo = require('./PaymentPage.js')
const payment = require("../../../src/website/common/ManageBooking/paymentpage.js")
const checkinpo = require('../pageobjects/checkinpo.js')
var flightlist = require('../../../src/ios/common/FlightlistPage.js')
const managebookpo = require('../../website/pageobjects/ManageBooking/managebookingpo.js')
var configData = JSON.parse(fs.readFileSync('configMobile.json'))

async function resissue(PNR, Testcase, Segment1, Segment1From, Segment1To, Segment1Date,
    Segment2, Segment2From, Segment2To, Segment2Date, Segment3, Segment3From, Segment3To, Segment3Date,
    Segment4, Segment4From, Segment4To, Segment4Date, Segment1Cabin, Segment2Cabin, Gender, DOBdate, DOBmonth, DOByear, Nationality, DocumentType, MBCountryCode, DocNumber, ExpDay, ExpMonth, ExpYear,
    MBPaymentType, MBCardNumber, MBCardExpMonth, MBCardExpYear, MBCVV, MBCardHolderName, MBCardEmail, MBCardMobile, MBHouseNumber, MBApartmentNumber, MBPincode, MBCity, MBCountry, MBState) {

    try {
        var segmentscount;
        await browser.pause(2000)
        console.log(await driver.getContexts())
        console.log(await driver.getContexts())
        let context = await driver.getContexts()
        console.log(context);
        await driver.switchContext(context[1]);
        await library.clickAction(reissue.buttonChangeFlight)
        await driver.switchContext(context[0]);
        await browser.pause(2000)

        await library.waituntilelementexistAction(reissue.textItinerary)

        var AvailableSegments = [Segment1, Segment2, Segment3, Segment4]
        var SegmentFrom = [Segment1From, Segment2From, Segment3From, Segment4From]
        var SegmentTo = [Segment1To, Segment2To, Segment3To, Segment4To]
        var SegmentDate = [Segment1Date, Segment2Date, Segment3Date, Segment4Date]
        var SegmentCabin = [Segment1Cabin, Segment2Cabin]
        var confirmedstatus = await reissue.textConfirmed.length
        if (confirmedstatus > 1) {
            console.log(await driver.getContexts())
            console.log(await driver.getContexts())
            let context = await driver.getContexts()
            console.log(context);
            await driver.switchContext(context[1]);
            segmentscount = await reissue.checkboxSegments.length
            await driver.switchContext(context[0]);
            //segmentscount = await reissue.textConfirmed.length
        }
        else
            segmentscount = 1
        for (var i = 0; i < segmentscount; i++) {
            console.log(await driver.getContexts())
            console.log(await driver.getContexts())
            let context = await driver.getContexts()
            console.log(context);
            await driver.switchContext(context[1]);
            if (confirmedstatus > 1 && await library.elementexistingAction(reissue.checkboxSegments[i])) {
                await library.clickAction(reissue.checkboxSegments[i])
            }
            await driver.switchContext(context[0]);
            await browser.pause(3000)
            await library.filltextboxAction(reissue.textboxDepartDate[i], SegmentDate[i])
            // //only change date scenario is needed now for e2e flow
            // await library.filltextboxAction(reissue.textboxFrom[i], SegmentFrom[i])
            // const from = '//XCUIElementTypeOther[contains(@name,"' + SegmentFrom[i] + '")]'
            // const fromoption = await $(from)
            // await library.clickAction(fromoption)
            // await library.filltextboxAction(reissue.textboxTo[i], SegmentTo[i])
            // const to = '//XCUIElementTypeOther[contains(@name,"' + SegmentTo[i] + '")]'
            // const tooption = await $(to)
            // await library.clickAction(tooption)

            //able to type date so commenting calendar date selection code
            // await library.clickAction(reissue.textboxDepartDate[i])
            // await library.waituntilelementexistAction(reissue.textMonthYear)
            // var departuredate = SegmentDate[i]
            // var depdate = departuredate.slice(0, 6)
            // depdate = depdate.replace(/^0+/, '');
            // var depmonthyear = departuredate.slice(3, 17)
            // for (var j = 0; j < 12; j++) {
            //     var monthyear = await library.gettextAction(reissue.textMonthYear)
            //     if (monthyear.includes(depmonthyear)) {
            //         const date = '//XCUIElementTypeButton[contains(@name,"' + depdate + '")]'
            //         const dateloc = await $(date)
            //         await library.clickAction(dateloc)
            //         await library.clickAction(reissue.buttonDone)
            //         break;
            //     }
            //     else {
            //         await library.clickAction(reissue.buttonNxtMonth)
            //         await browser.pause(2000)
            //     }
            // }
        }
        await library.clickAction(reissue.buttonSearch)
        await library.waituntilelementexistAction(reissue.textSelectFlight)
        await browser.pause(5000)
        for (var i = 0; i < segmentscount; i++) {
            await flightlist.flcabinselection(null, null, 'No', 'No', null)
        }
        await library.waituntilelementexistAction(reissue.textRevisedItinerary)
        await browser.pause(2000)
        console.log(await driver.getContexts())
        console.log(await driver.getContexts())
        let contxt = await driver.getContexts()
        console.log(contxt);
        await driver.switchContext(contxt[1]);
        await library.clickAction(reissue.buttonCheckout)
        await driver.switchContext(contxt[0]);
        await browser.pause(4000)
        // if (segmentscount > 1) {
        //     await library.waituntilelementexistAction(reissue.textFlights)
        //     await library.clickAction(reissue.buttonContinue)
        // }
        // await browser.pause(4000) //coz pax details appears only for INT pnr
        // if (await library.elementdisplayedAction(reissue.textMcPaxDetails)) {
        //     await library.clickAction(reissue.buttonContinue)
        // }

        console.log(await driver.getContexts())
        console.log(await driver.getContexts())
        let contexts = await driver.getContexts()
        console.log(contexts);
        await driver.switchContext(contexts[1]);
        await library.waituntilelementexistAction(reissue.textPayBooking)
        
        await library.waituntilelementexistAction(reissue.textPriceToBePaid)
        if (await library.elementdisplayedAction(reissue.textPayment)) {
            if (MBPaymentType == "CreditCard") {
                await driver.switchContext(contexts[0]);
                await paymentpo.McCreditCard(MBCardNumber, MBCardExpMonth, MBCardExpYear, MBCVV, MBCardHolderName, MBCardEmail, MBCardMobile, MBHouseNumber, MBApartmentNumber, MBPincode, MBCity, MBCountry, MBState)
                await driver.switchContext(contexts[1]);
            }
            if (MBPaymentType == "Netbanking") {
                await payment.NetBanking()
            }
            // if (MBPaymentType == "CreditCard") {
            //     await payment.CreditCard(MBCardNumber, MBCardExpMonth, MBCardExpYear, MBCVV, MBCardHolderName, MBCardEmail, MBCardMobile, MBHouseNumber, MBApartmentNumber, MBPincode, MBCity, MBCountry, MBState)
            // }
            await library.waituntilelementexistAction(managebookpo.textNewItinerary)
        }
        else {
            await driver.switchContext(contexts[0]);
            await paymentpo.ReissuewithoutPayment()
            await driver.switchContext(contexts[1]);
        }
        await library.waituntilelementexistAction(managebookpo.textNewItinerary)
        await driver.switchContext(contexts[0]);
        //await library.waituntilelementexistAction(reissue.dropdownManageBooking)


        let day = new Date().getDate();
        let month = new Date().getMonth();
        let year = new Date().getFullYear();
        let hours = new Date().getHours();
        let minutes = new Date().getMinutes();

        console.log("Day :" + day + "," + "Month : " + month + "," + "Year : " + year);
        var filename = 'MF_' + Testcase + '_' + day + "_" + month + "_" + year + "_" + hours + "_" + minutes + ".png";

        await browser.saveScreenshot("./test/outputartifact/Screenshot/Passed/" + filename.toString());
        var ri1 = Testcase
        var ri1result = "Success"
        var mbjson = {
            "Testcase": [ri1],
            "PNR": [PNR],
            "DateandTime": new Date().toLocaleString(undefined, {
                timeZone: 'Asia/Kolkata'
            }),
            "Result": [ri1result]
        }

    }
    catch (e) {
        console.log(e)
        let day = new Date().getDate();
        let month = new Date().getMonth();
        let year = new Date().getFullYear();
        let hours = new Date().getHours();
        let minutes = new Date().getMinutes();

        console.log("Day :" + day + "," + "Month : " + month + "," + "Year : " + year);
        var filename = 'MF_' + Testcase + '_' + day + "_" + month + "_" + year + "_" + hours + "_" + minutes + ".png";

        await browser.saveScreenshot("./test/outputartifact/Screenshot/Failed/" + filename.toString());
        var ri2 = Testcase
        var ri2result = "Failed"
        var mbjson = {
            "Testcase": [ri2],
            "PNR": [PNR],
            "DateandTime": new Date().toLocaleString(undefined, {
                timeZone: 'Asia/Kolkata'
            }),
            "Result": [ri2result]
        }
    }
    return mbjson
}
exports.reissue = resissue;

