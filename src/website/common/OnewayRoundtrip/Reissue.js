const library = require('../../common/Genericlibrary.js')
const managebooking = require("../../pageobjects/OnewayRoundtrip/managebookingpo.js")
const fs = require('fs')
const paymentpo = require('./MBpaymentpage.js')
var configData = JSON.parse(fs.readFileSync('configWebsite.json'))

async function resissue(PNR, Lastname, Testcase, Segment1, Segment1From, Segment1To, Segment1Date,
    Segment2, Segment2From, Segment2To, Segment2Date, Segment3, Segment3From, Segment3To, Segment3Date,
    Segment4, Segment4From, Segment4To, Segment4Date, Segment1Cabin, Segment2Cabin, Gender, DOBdate, DOBmonth, DOByear, Nationality, DocumentType, MBCountryCode, DocNumber, ExpDay, ExpMonth, ExpYear,
    MBPaymentType, MBCardNumber, MBCardExpMonth, MBCardExpYear, MBCVV, MBCardHolderName, MBCardEmail, MBCardMobile, MBHouseNumber, MBApartmentNumber, MBPincode, MBCity, MBCountry, MBState) {

    try {
        if (!await library.elementdisplayedAction(managebooking.textManageBooking)) {
            await browser.url(configData['url'])
            //await browser.pause(6000)
            await library.waitforexistAction(managebooking.buttonManageBook)
            //await browser.pause(2000)
            await library.pagescrolltomiddleAction(managebooking.buttonManageBook)
            //await browser.pause(2000)
            await library.clickAction(managebooking.buttonManageBook)
            //await browser.pause(2000)


            await library.fillTextbox(managebooking.textboxBookingRef,PNR)
            await library.fillTextbox(managebooking.textboxLastname,Lastname)
            await library.clickAction(managebooking.buttonSubmit)
            await library.waitforexistAction(managebooking.textPNRrefval)
            await library.waitforexistAction(managebooking.textManageBooking)
            //await browser.pause(3000)
        }
        await library.pagescrollAction(managebooking.textManageBooking)
        //await browser.pause(3000)
        await library.clickAction(managebooking.textManageBooking)
        //await browser.pause(3000)
        await library.waitforexistAction(managebooking.buttonModifyFlight)
        await library.pagescrollAction(managebooking.buttonModifyFlight)
        await library.clickAction(managebooking.buttonModifyFlight)
        //await browser.pause(3000)
        await library.waitforexistAction(managebooking.textPageSubtitle)
        //await browser.pause(3000)
        await library.pagescrollAction(managebooking.textFlights)
        await library.waitforexistAction(managebooking.textFlights)
        //await browser.pause(4000)
        if (Segment1 == "Yes") {
            await library.clickAction(managebooking.textSegment1)
            await library.waitforexistAction(managebooking.textboxSeg1From)
            await library.clearAction(managebooking.textboxSeg1From)
            await library.fillTextbox(managebooking.textboxSeg1From,Segment1From)
            await library.waitforexistAction(managebooking.optionCity)
            await library.movetoelementAction(managebooking.optionCity)
            await library.clickAction(managebooking.optionCity)
            await library.clearAction(managebooking.textboxSeg1to)
            await library.fillTextbox(managebooking.textboxSeg1to,Segment1To)
            await library.waitforexistAction(managebooking.optionCity)
            await library.movetoelementAction(managebooking.optionCity)
            await library.clickAction(managebooking.optionCity)
            await library.clearAction(managebooking.textboxDepartingDate1)
            await library.fillTextbox(managebooking.textboxDepartingDate1,Segment1Date)
        }
        
        if (Segment2 == "Yes") {
            await library.pagescrollAction(managebooking.textSegment2)
            await library.clickAction(managebooking.textSegment2)
            await library.waitforexistAction(managebooking.textboxSeg2From)
            await library.clearAction(managebooking.textboxSeg2From)
            await library.fillTextbox(managebooking.textboxSeg2From,Segment2From)
            await library.waitforexistAction(managebooking.optionCity)
            await library.movetoelementAction(managebooking.optionCity)
            await library.clickAction(managebooking.optionCity)
            await library.clearAction(managebooking.textboxSeg2To)
            await library.fillTextbox(managebooking.textboxSeg2To,Segment2To)
            await library.waitforexistAction(managebooking.optionCity)
            await library.movetoelementAction(managebooking.optionCity)
            await library.clickAction(managebooking.optionCity)
            await library.clearAction(managebooking.textboxDepartingDate2)
            await library.fillTextbox(Segment2Date)

        }
        if (Segment3 == "Yes") {
            await library.clickAction(managebooking.textSegment3)
            await library.waitforexistAction(managebooking.textboxSeg3From)
            await library.clearAction(managebooking.textboxSeg3From)
            await library.fillTextbox(managebooking.textboxSeg3From,Segment3From)
            await library.waitforexistAction(managebooking.optionCity)
            await library.movetoelementAction(managebooking.optionCity)
            await library.clickAction(managebooking.optionCity)
            await library.clearAction(managebooking.textboxSeg3To)
            await library.fillTextbox(managebooking.textboxSeg3To,Segment3To)
            await library.waitforexistAction(managebooking.optionCity)
            await library.movetoelementAction(managebooking.optionCity)
            await library.clickAction(managebooking.optionCity)
            await library.clearAction(managebooking.textboxDepartingDate3)
            await library.fillTextbox(managebooking.textboxDepartingDate3,Segment3Date)
        }
        if (Segment4 == "Yes") {
            await library.clickAction(managebooking.textSegment4)
            await library.waitforexistAction(managebooking.textboxSeg4From)
            await library.clearAction(managebooking.textboxSeg4From)
            await library.fillTextbox(managebooking.textboxSeg4From,Segment4From)
            await library.waitforexistAction(managebooking.optionCity)
            await library.movetoelementAction(managebooking.optionCity)
            await library.clickAction(managebooking.optionCity)
            await library.clearAction(managebooking.textboxSeg4To)
            await library.fillTextbox(managebooking.textboxSeg4To,Segment4To)
            await library.waitforexistAction(managebooking.optionCity)
            await library.movetoelementAction(managebooking.optionCity)
            await library.clickAction(managebooking.optionCity)
            await library.clearAction(managebooking.textboxDepartingDate4)
            await library.fillTextbox(managebooking.textboxDepartingDate4,Segment4Date)
        }
        //await browser.pause(3000)
        await library.clickAction(managebooking.buttonSeg1Continue)
        await library.pagetimeout(managebooking.page_loader)
        //await browser.pause(5000)
        await library.waitforexistAction(managebooking.textPageSubtitle)
        //await browser.pause(2000)
        if (await library.elementdisplayedAction(managebooking.iconFilter)) {
            await library.pagescrollAction(managebooking.iconFilter)
            await library.pagescrollAction( managebooking.iconFlightList[1])
            await library.clickAction(managebooking.iconFlightList[1])
            //await browser.pause(3000)
            for (var j = 0; j < await managebooking.textCabin.length; j++) {

                for (var i = 0; i < await managebooking.textCabin.length; i++) {

                    var cabinprint = await library.gettextAction(managebooking.textCabin[i])
                    console.log(cabinprint)
                    //await browser.pause(3000)

                    if (cabinprint == Segment1Cabin) {
                        if (await library.elementclickableAction(managebooking.textCabin[i]))
                            await library.clickAction(managebooking.textCabin[i])
                        else if (await library.elementdisplayedAction(managebooking.radiobuttonCabin[0]))
                            await library.clickAction(managebooking.radiobuttonCabin[0])
                        console.log("cabin selected")
                        break;
                    }
                }
                //await browser.pause(2000)
                if (cabinprint != Segment1Cabin) {

                    await library.clickAction(managebooking.radiobuttonCabin[0])
                    console.log("cabin selected")
                }
                break;
            }
        }
        else if (await library.elementdisplayedAction(managebooking.DepartFlights)) {
            await library.pagescrolltomiddleAction(managebooking.DepartCabin[0])
            //await browser.pause(2000)
            await library.clickAction(managebooking.DepartCabin[0])
            if (await library.elementdisplayedAction(managebooking.ReturnFlights)) {
                await library.pagescrolltomiddleAction(managebooking.ReturnCabin[0])
                //await browser.pause(2000)
                await library.clickAction(managebooking.ReturnCabin[0])
            }
        }
        await library.pagetimeout(managebooking.page_loader)
        //await browser.pause(2000)
        await library.clickAction( managebooking.buttonSeg1Continue)
        await library.pagetimeout(managebooking.page_loader)
        //await browser.pause(4000)
        //handled here
        if (await managebooking.radiobuttonCabin.length && Segment2 == "No") {
            await library.pagescrolltomiddleAction(managebooking.radiobuttonCabin[0])
            await library.clickAction(managebooking.radiobuttonCabin[0])
            await library.clickAction(managebooking.buttonSeg1Continue)
        }
        //await browser.pause(3000)
        await library.pagetimeout(managebooking.page_loader)
        //await browser.pause(3000)

        if (Segment2 == "Yes") {
            await library.clickAction(managebooking.listSeg2Flights[0])
            await library.waitforexistAction(managebooking.listReturnCabin[0])
            for (var j = 0; j < await managebooking.listReturnCabin.length; j++) {
                for (var i = 0; i < await managebooking.listReturnCabin.length; i++) {
                    var cabinprint = await library.gettextAction(managebooking.listReturnCabin[i])
                    if (cabinprint == Segment2Cabin) {
                        if (await library.elementclickableAction(managebooking.listReturnCabin[i]))
                            await library.clickAction( managebooking.listReturnCabin[i])
                        else if (await library.elementdisplayedAction(managebooking.radiobuttonReturncabin[0]))
                            await library.clickAction(managebooking.radiobuttonReturncabin[0])
                        console.log("cabin selected")
                        break;
                    }
                }
                // }
                if (cabinprint != Segment2Cabin) {
                    await library.clickAction(managebooking.listReturnCabin[0])
                }
                break;
            }
            //await browser.pause(2000)
            await library.pagescrollAction(managebooking.buttonSeg1Continue)
            await library.clickAction(managebooking.buttonSeg1Continue)
            await library.pagetimeout(managebooking.page_loader)
            //await browser.pause(5000)
        }
        await library.waitforexistAction(managebooking.buttonSeg1Continue)
        await library.pagescrollAction(managebooking.buttonSeg1Continue)
        await library.pagetimeout(managebooking.page_loader)
        //await browser.pause(6000)
        await library.pagescrollAction(managebooking.classText)
        await library.pagescrollAction(managebooking.buttonSeg1Continue)
        await library.clickAction(managebooking.buttonSeg1Continue)
        await library.pagetimeout(managebooking.page_loader)
        //await browser.pause(5000)
        if (await library.elementdisplayedAction(managebooking.buttonSeg1Continue) && Segment2 == "Yes") {
            await library.pagescrollAction(managebooking.buttonSeg1Continue)
            await library.clickAction(managebooking.buttonSeg1Continue)
            //await browser.pause(3000)
            await library.pagetimeout(managebooking.page_loader)
            //await browser.pause(7000)
        }
        if (await managebooking.textTravelerTitle.length > 0) {
            for (var i = 0; i < await managebooking.textTravelerTitle.length; i++) {
                await library.pagescrollAction(managebooking.textTravelerTitle[i])
                //await browser.pause(2000)
                if (await managebooking.textboxDobDate.length > 0) {
                    if (await library.elementdisplayedAction(managebooking.textboxDobDate[j])) {
                        await library.fillTextbox(managebooking.textboxDobDate[j],DOBdate)
                        await managebooking.dropdownDobMonth[j].selectByVisibleText(DOBmonth)
                        await library.fillTextbox(managebooking.textboxDobYear[j],DOByear)
                        if (j < (await managebooking.textboxDobDate.length - 1))
                            j = j + 1
                    }
                    if (await library.elementdisplayedAction(managebooking.dropdownGender[i])) {
                        if (Gender == "M")
                            await managebooking.dropdownGender[i].selectByIndex(2)
                        if (Gender == "F")
                            await managebooking.dropdownGender[i].selectByIndex(1)
                    }
                    if (await library.elementdisplayedAction(managebooking.dropdownNationality[i])) {
                        await library.pagescrollAction(managebooking.dropdownNationality[i])
                        await library.clickAction(managebooking.dropdownNationality[i])
                        await managebooking.dropdownNationality[i].selectByVisibleText(Nationality)
                    }
                    if (await library.elementdisplayedAction(managebooking.dropdownDocumentType[i])) {
                        await managebooking.dropdownDocumentType[i].selectByVisibleText(DocumentType)
                    }
                    if (await library.elementdisplayedAction(managebooking.textboxDocNumber[i])) {
                        await library.fillTextbox(managebooking.textboxDocNumber[i],DocNumber)
                    }
                    if (await library.elementdisplayedAction(managebooking.dropdownCountryCode1[i])) {
                        await library.pagescrollAction(managebooking.dropdownCountryCode1[i])
                        await managebooking.dropdownCountryCode1[i].selectByVisibleText(MBCountryCode)
                    }
                    if (await library.elementdisplayedAction(managebooking.textboxExpiryDay1[i])) {
                        await library.pagescrollAction(managebooking.textboxExpiryDay1[i])
                        await library.fillTextbox(managebooking.textboxExpiryDay1[i],ExpDay)
                        await managebooking.dropdownExpiryMonth1[i].selectByVisibleText(ExpMonth)
                        await library.fillTextbox(managebooking.textboxExpiryYear1[i],ExpYear)
                    }
                }
            }
            if (await library.elementdisplayedAction(managebooking.buttonSeg1Continue)) {
                await library.pagescrollAction(managebooking.buttonSeg1Continue)
                //await browser.pause(3000)
                await library.clickAction(managebooking.buttonSeg1Continue)
                await library.pagetimeout(managebooking.page_loader)
            }
        }
        //await browser.pause(6000)
        if (await library.elementdisplayedAction(managebooking.textPaymentVal)) {
            if (MBPaymentType == "Netbanking") {
                await paymentpo.Netbanking()
            }
            if (MBPaymentType == "CreditCard") {
                await paymentpo.creditcard(MBCardNumber, MBCardExpMonth, MBCardExpYear, MBCVV, MBCardHolderName, MBCardEmail, MBCardMobile, MBHouseNumber, MBApartmentNumber, MBPincode, MBCity, MBCountry, MBState)
            }
            if (MBPaymentType == "EMI") {
                await paymentpo.emi()
            }
            if (MBPaymentType == "Wallet") {
                await paymentpo.wallet()
            }
            if (MBPaymentType == "Rupay") {
                await paymentpo.rupay()
            }
            if (MBPaymentType == "UPI") {
                await paymentpo.upi()
            }
        }
        //await browser.pause(6000)
        await await library.pagetimeout(managebooking.page_loader)
        await library.waitfordisplayedAction(managebooking.textPageSubtitle)
        //await browser.pause(3000)


        let day = new Date().getDate();
        let month = new Date().getMonth();
        let year = new Date().getFullYear();
        let hours = new Date().getHours();
        let minutes = new Date().getMinutes();

        console.log("Day :" + day + "," + "Month : " + month + "," + "Year : " + year);
        var filename = 'MF_' + Testcase + '_' + day + "_" + month + "_" + year + "_" + hours + "_" + minutes + ".png";

        await browser.saveScreenshot("./test/testdata/Screenshot/Passed/" + filename.toString());
        var ri1 = Testcase
        var ri1result = "Success"
        var mbjson = {
            "Testcase": [ri1],
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

        await browser.saveScreenshot("./test/testdata/Screenshot/Failed/" + filename.toString());
        var ri2 = Testcase
        var ri2result = "Failed"
        var mbjson = {
            "Testcase": [ri2],
            "DateandTime": new Date().toLocaleString(undefined, {
                timeZone: 'Asia/Kolkata'
            }),
            "Result": [ri2result]
        }
    }
    return mbjson
}
exports.reissue = resissue;

