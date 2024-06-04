const managebooking = require("../../pageobjects/OnewayRoundtrip/managebookingpo.js")
const fs = require('fs')
var configData = JSON.parse(fs.readFileSync('configWebsite.json'))
const library = require('../../common/Genericlibrary.js')


async function modifypaxdetails(PNR, Lastname, Testcase, Gender, DOBdate, DOBmonth, DOByear, Email2, Email3, EmergencyName, EmergencyCountrycode, EmergencyPhone,
    Nationality, DocNumber, MBCountryCode, ExpDay, ExpMonth, ExpYear, DocumentType) {
    try {
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
        await library.pagescrollAction(managebooking.textManageBooking)
        await library.clickAction(managebooking.textManageBooking)
        //await browser.pause(2000)
        await library.waitforclickableAction(managebooking.optionManageBooking[0])
        await library.clickAction(managebooking.optionManageBooking[0])
        //await browser.pause(7000)
        await library.pagetimeout(managebooking.page_loader)
        await library.waitforexistAction(managebooking.textBasicDetails[0])
        //await browser.pause(2000)
        await library.pagescrollAction(managebooking.textBasicDetails[0])
        console.log("total:" + await managebooking.textBasicDetails.length)
        var j = 0
        for (var i = 0; i < await managebooking.textBasicDetails.length; i++) {
            await library.pagescrollAction(managebooking.textBasicDetails[i])
            if (await managebooking.dobdate.length > 0) {
                if (await library.elementdisplayedAction(managebooking.textboxDobDate[j])) {
                    await library.fillTextbox(managebooking.textboxDobDate[j],DOBdate)
                    await managebooking.dobmonth[j].selectByVisibleText(DOBmonth)
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
                    await library.fillTextbox(managebooking.textboxExpiryDay1[i],ExpDay)
                    await managebooking.dropdownExpiryMonth1[i].selectByVisibleText(ExpMonth)
                    await library.fillTextbox(managebooking.textboxExpiryDay1[i],ExpYear)
                }
            }
            if (await library.elementdisplayedAction(managebooking.buttonGoToNext[i])) {
                await library.clickAction(managebooking.buttonGoToNext[i])
            }
            //await browser.pause(3000)
        }
        await library.pagescrollAction(managebooking.textContactDetails)
        await library.fillTextbox(managebooking.textboxEmail2,Email2)
        await library.fillTextbox(managebooking.textboxEmail3,Email3)
        await library.fillTextbox(managebooking.textboxEmergencyName,EmergencyName)
        await library.fillTextbox(managebooking.textboxEmergencyCountryCode,EmergencyCountrycode)
        await library.fillTextbox(managebooking.textboxEmergencyPhoneNumber,EmergencyPhone)
        //await browser.pause(2000)
        await library.pagescrollAction( managebooking.buttonContinueMD)
        console.log("scrolling")
        //await browser.pause(2000)
        await library.clickAction(managebooking.buttonContinueMD)
        await library.pagetimeout(managebooking.page_loader)
        await library.waitforexistAction(managebooking.textBookingconfirmation)
        await library.waitforexistAction(managebooking.textBookingconfirmation1)
        await library.pagescrollAction(managebooking.textBookingconfirmation1)

        var mpd1 = Testcase
        var mpd1result = "Success"
        var mbjson = {
            "Testcase": [mpd1],
            "DateandTime": new Date().toLocaleString(undefined, {
                timeZone: 'Asia/Kolkata'
            }),
            "Result": [mpd1result]
        }
        
        let day = new Date().getDate();
        let month = new Date().getMonth();
        let year = new Date().getFullYear();
        let hours = new Date().getHours();
        let minutes = new Date().getMinutes();

        console.log("Day :" + day + "," + "Month : " + month + "," + "Year : " + year);
        var filename = 'MD_' + Testcase + '_' + day + "_" + month + "_" + year + "_" + hours + "_" + minutes + ".png";

        await browser.saveScreenshot("./test/testdata/Screenshot/Passed/" + filename.toString());
         
        
    }
    catch (e) {
        console.log(e)
        let day = new Date().getDate();
        let month = new Date().getMonth();
        let year = new Date().getFullYear();
        let hours = new Date().getHours();
        let minutes = new Date().getMinutes();

        console.log("Day :" + day + "," + "Month : " + month + "," + "Year : " + year);
        var filename = 'MD_' + Testcase + '_' + day + "_" + month + "_" + year + "_" + hours + "_" + minutes + ".png";

        await browser.saveScreenshot("./test/testdata/Screenshot/Failed/" + filename.toString());
        var mpd2result = "Failed"
        var mpd2 = Testcase
        var mbjson = {
            "Testcase": [mpd2],
            "DateandTime": new Date().toLocaleString(undefined, {
                timeZone: 'Asia/Kolkata'
            }),
            "Result": [mpd2result]
        }
        
    }
    return mbjson
    
}

exports.modifypaxdetails = modifypaxdetails;
