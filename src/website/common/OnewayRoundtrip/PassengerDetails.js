const paxdetpo = require('../../pageobjects/OnewayRoundtrip/Passengerdetpo.js')
const library = require('../../common/Genericlibrary.js')


async function basicdetails(adulttittle, firstname, lastname, dateofbirth, gender) {
    await library.pagescrolltomiddleAction(paxdetpo.textPaxTitle)
    await library.clickAction(paxdetpo.textPaxTitle)
    await browser.pause(1000)
    for (var i = 0; i < await paxdetpo.dropdownNameTitle.length; i++) {
        var title = await library.gettextAction(paxdetpo.dropdownNameTitle[i])
        if (title === adulttittle) {
            await library.clickAction(paxdetpo.dropdownNameTitle[i])
            break;
        }
    }

    //await browser.pause(3000)
    await library.fillTextbox(paxdetpo.textboxFirstName, firstname)
    await library.fillTextbox(paxdetpo.textboxLastname, lastname)
    await library.fillTextbox(paxdetpo.textboxDateofbirth, dateofbirth)  //unable to enter dob in iphone but working fine in website
    await paxdetailcalendar(dateofbirth)

    if (await paxdetpo.dropdownGender.length != 0) {
        await library.clickAction(paxdetpo.dropdownGender[0])
        for (var i = 0; i < await paxdetpo.dropdownNameTitle.length; i++) {
            var title = await library.gettextAction(paxdetpo.dropdownNameTitle[i])
            if (title === gender) {
                await library.clickAction(paxdetpo.dropdownNameTitle[i])
                break;
            }
        }
    }
}

async function paxdetailcalendar(dateofbirth) {
    //Unable to type date in dob textbox
    // await library.clickAction(await $('//button[@aria-label="Open calendar"]'))
    // await library.clickAction(await $("(//button[contains(@class,'mat-calendar-body-cell')])[24]"))
    // await library.clickAction(await $("(//button[contains(@class,'mat-calendar-body-cell')])[12]"))
    // await library.clickAction(await $("(//button[contains(@class,'mat-calendar-body-cell')])[29]"))

    var date = dateofbirth.slice(0, 2)
    date = date.replace(/^0+/, '');
    var birthdate = parseInt(date)
    var birthmonth = dateofbirth.slice(3, 5)
    var birthyear = dateofbirth.slice(6, 11)
    await browser.pause(4000)
    await library.clickAction(paxdetpo.buttonCalendar)
    await browser.pause(2000)
    const calyear = "//span[normalize-space()='" + birthyear + "']"
    const year = await $(calyear)
    const calmonth = "(//button[contains(@class,'mat-calendar-body-cell')])[" + birthmonth + "]"
    const month = await $(calmonth)
    const caldates = "//span[normalize-space()='" + birthdate + "']"
    const dates = await $(caldates)

    for (let i = 0; i < 5; i++) {
        if (await library.elementdisplayedAction(year)) {
            await library.clickAction(year)
            await library.clickAction(month)
            await library.clickAction(dates)
            break
        }
        else { //works for iOS pax details calendar
            if (await library.elementdisplayedAction(paxdetpo.buttonRightArrow)) {
                await browser.pause(2000)
                await library.clickAction(paxdetpo.buttonRightArrow)
                await browser.pause(2000)
            }
        }
    }
}
async function passportdetailscalendar(Expirydate) {

    var date = Expirydate.slice(0, 2)
    date = date.replace(/^0+/, '');
    var expdate = parseInt(date)
    var expmonth = Expirydate.slice(3, 5)
    var expyear = Expirydate.slice(6, 11)
    await browser.pause(4000)
    await library.clickAction(paxdetpo.buttonPassportCalendar)
    await browser.pause(2000)
    const calyear = "//span[normalize-space()='" + expyear + "']"
    const year = await $(calyear)
    const calmonth = "(//button[contains(@class,'mat-calendar-body-cell')])[" + expmonth + "]"
    const month = await $(calmonth)
    const caldates = "//span[normalize-space()='" + expdate + "']"
    const dates = await $(caldates)

    for (let i = 0; i < 5; i++) {
        if (await library.elementdisplayedAction(year)) {
            await library.clickAction(year)
            await library.clickAction(month)
            await library.clickAction(dates)
            break
        }
    }
}
async function basicdetinf(firstname, lastname, dateofbirth, gender) {
    await library.fillTextbox(paxdetpo.textboxFirstName, firstname)
    await library.fillTextbox(paxdetpo.textboxLastname, lastname)
    await library.fillTextbox(paxdetpo.textboxDateofbirth, dateofbirth)

    await paxdetailcalendar(dateofbirth)

    if (await paxdetpo.dropdownGender.length != 0) {
        await library.clickAction(paxdetpo.dropdownGender[0])
        for (var i = 0; i < await paxdetpo.dropdownNameTitle.length; i++) {
            var title = await library.gettextAction(paxdetpo.dropdownNameTitle[i])
            if (title === gender) {
                await library.clickAction(paxdetpo.dropdownNameTitle[i])
                break;
            }
        }
    }
}

async function passportdet(traveldoc, emergencyfname, emergencylname, emergencygender,
    Nationlaity, passportnumber, Expirydate, passportissuecountry) {
    // if (traveldoc === "Yes") {

    if (await library.elementdisplayedAction(paxdetpo.toggleTravelerInfo) || await library.elementdisplayedAction(paxdetpo.textBoxInfoFirstName)) {
        if (await library.elementdisplayedAction(paxdetpo.toggleTravelerInfo))
            await library.clickAction(paxdetpo.toggleTravelerInfo)
        // //firstname & lastname are disabled so commenting below lines
        // await library.clickAction(paxdetpo.textBoxInfoFirstName)
        // await library.fillTextbox(paxdetpo.textBoxInfoFirstName, emergencyfname)
        // await library.clickAction(paxdetpo.textboxInfoLastName)
        // await library.fillTextbox(paxdetpo.textboxInfoLastName, emergencylname)

        if (await library.elementdisplayedAction(paxdetpo.dropdownInfoGender)) {
            await library.pagescrolltomiddleAction(paxdetpo.dropdownInfoGender)
            await library.clickAction(paxdetpo.dropdownInfoGender)
            //await browser.pause(1000)
            if (emergencygender == "Male") {
                await library.clickAction(paxdetpo.optionInfoGenderMale)
            } else if (emergencygender == "Female") {
                await library.clickAction(paxdetpo.optionInfoGenderFemale)
            } else {
                await library.clickAction(paxdetpo.optionInfoGenderDisclosed)
            }
        }

        await library.fillTextbox(paxdetpo.textboxNationality, Nationlaity)
        await browser.pause(3000)
        await library.clickAction(paxdetpo.optionNationality)
        await browser.pause(2000)
        await library.fillTextbox(paxdetpo.textboxPassportNo, passportnumber)
        await library.fillTextbox(paxdetpo.textboxPassportExpiryDate, Expirydate)
        await passportdetailscalendar(Expirydate)

        await browser.pause(1000)
        await library.fillTextbox(paxdetpo.textboxPassportIssueCountry, passportissuecountry)
    }
    //}
}

async function frequentflyer(FFP, FFPairlineAdult1, Frequentflyernumber) {
    if (FFP == "Yes") {
        await library.clickAction(paxdetpo.buttonFFP[3])
        //await browser.pause(1000)
        await library.clickAction($("//span[@aria-label='" + FFPairlineAdult1 + "']"))
        await library.fillTextbox(paxdetpo.textboxFFPnumber, Frequentflyernumber)
    }

}

async function basiccontact(Emailaddress, confirmemail, countrycode,
    Mobilenumber) {
    await library.fillTextbox(paxdetpo.textboxEmail[0], Emailaddress)
    await library.fillTextbox(paxdetpo.textboxEmail[1], confirmemail)
    // if(Additionalemail=="Yes"){
    //     await   library.fillTextbox(paxdetpo.textboxEmail[2],Emailaddress)
    //     await   library.fillTextbox(paxdetpo.textboxEmail[3],confirmemail)
    // }
    //await browser.pause(2000)
    await library.fillTextbox(paxdetpo.textboxCountryCode[0], countrycode)
    await library.fillTextbox(paxdetpo.textboxPhoneNumber[0], Mobilenumber)
    // if(Additionalphone=="Yes"){
    //     await library.fillTextbox(paxdetpo.textboxCountryCode[1],countrycode)
    //     await library.fillTextbox(paxdetpo.textboxPhoneNumber[1],Mobilenumber)
    // }
    await library.pagescrollAction(paxdetpo.buttonConsent)
    await library.clickAction(paxdetpo.buttonConsent)
}
async function emergency(EmergencyContact, Emergencycontactname, emergencyCode, Emergencyphoneno) {
    if (EmergencyContact == "Yes") {
        if (await library.isexistingAction(paxdetpo.toggleEmergencyContact)) {
            await library.clickAction(paxdetpo.toggleEmergencyContact)
            await library.fillTextbox(paxdetpo.textboxEmergencyContactName, Emergencycontactname)
            await library.fillTextbox(paxdetpo.textboxCountryCode[1], emergencyCode)
            await library.fillTextbox(paxdetpo.textboxPhoneNumber[1], Emergencyphoneno)
        }
        //await browser.pause(1000)
    }
}

exports.basicdetails = basicdetails;
exports.passportdet = passportdet;
exports.basiccontact = basiccontact;
exports.emergency = emergency;
exports.frequentflyer = frequentflyer;
exports.basicdetinf = basicdetinf;
exports.paxdetailcalendar = paxdetailcalendar;
exports.passportdetailscalendar = passportdetailscalendar;
