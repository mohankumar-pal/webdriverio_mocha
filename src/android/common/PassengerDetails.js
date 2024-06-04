
const paxdetails = require('../pageobjects/Passengerdetpo.js')
var library = require('../common/Genericlibrary.js')


async function basicdetails(adulttittle, firstname, lastname, dateofbirth, gender) {
    await browser.pause(3000)
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Title")')
    await library.clickAction(paxdetails.textTitle)
    await browser.pause(1000)
    await library.waituntilelementexistAction(paxdetails.dropdownNameTitle[0])
    for (var i = 0; i < await paxdetails.dropdownNameTitle.length; i++) {
        var title = await library.gettextAction(paxdetails.dropdownNameTitle[i])
        if (title === adulttittle) {
            await library.clickAction(paxdetails.dropdownNameTitle[i])
            break;
        }
    }

    await browser.pause(2000)
    await library.filltextboxAction(paxdetails.textboxFirstName, firstname)
    await library.filltextboxAction(paxdetails.textboxLastName, lastname)

    if (await library.elementdisplayedAction(paxdetails.dropdownGenderField)) {
        await library.clickAction(paxdetails.dropdownGenderField)
        if (gender == "Male") {
            await library.clickAction(paxdetails.optionMale)
        } else if (gender == "Female") {
            await library.clickAction(paxdetails.optionFemale)
        } else {
            await library.clickAction(paxdetails.optionDisclosed)
        }
    }
    await library.filltextboxAction(paxdetails.textboxDOB, dateofbirth)
    // if (await library.elementdisplayedAction(paxdetails.buttonDone))
    //     await library.clickAction(paxdetails.buttonDone)
}

async function mcbasicdetails(adulttittle, firstname, lastname, gender) {
    await library.clickAction(paxdetails.dropdownTitle)
    const tl = '//XCUIElementTypeButton[@name="' + adulttittle + '"]'
    const titleoption = await $(tl)
    await library.clickAction(titleoption)
    await browser.pause(2000)
    await library.filltextboxAction(paxdetails.textboxMcFirstName, firstname)
    await library.filltextboxAction(paxdetails.textboxMcLastname, lastname)
    //await library.filltextboxAction(paxdetails.textboxDOB, dateofbirth)
    if (await library.elementdisplayedAction(paxdetails.dropdownGender)) {
        await library.clickAction(paxdetails.dropdownGenderField)
        if (gender == "Male") {
            await library.clickAction(paxdetails.optionMale)
        } else if (gender == "Female") {
            await library.clickAction(paxdetails.optionFemale)
        } else {
            await library.clickAction(paxdetails.optionDisclosed)
        }
    }
    if (await library.elementdisplayedAction(paxdetails.buttonDone))
        await library.clickAction(paxdetails.buttonDone)
}

async function basicdetinf(firstname, lastname, dateofbirth, gender) {
    await browser.pause(2000)
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Your price starts from").setMaxSearchSwipes(1)')
    await library.filltextboxAction(paxdetails.textboxInfantFirstName, firstname)
    await library.filltextboxAction(paxdetails.textboxInfantLastName, lastname)
    if (await library.elementdisplayedAction(paxdetails.dropdownGenderField)) {
        await library.clickAction(paxdetails.dropdownGenderField)
        if (gender == "Male") {
            await library.clickAction(paxdetails.optionMale)
        } else if (gender == "Female") {
            await library.clickAction(paxdetails.optionFemale)
        } else {
            await library.clickAction(paxdetails.optionDisclosed)
        }
        await library.filltextboxAction(paxdetails.textboxInfantDOB, dateofbirth)
    }
    else {
        await library.filltextboxAction(paxdetails.textboxInfantDOB, dateofbirth)
    }
}
async function mcbasicdetinfch(firstname, lastname, dobday, dobmonth, dobyear, gender) {
    await library.filltextboxAction(paxdetails.textboxMcFirstName, firstname)
    await library.filltextboxAction(paxdetails.textboxMcLastname, lastname)
    await library.filltextboxAction(paxdetails.textboxDay, dobday)
    await library.clickAction(paxdetails.dropdownMonth)
    const mon = 'label CONTAINS "' + dobmonth + '"'
    const month = await $(`-ios predicate string:${mon}`)
    await library.clickAction(month)
    await library.filltextboxAction(paxdetails.textboxYear, dobyear)
    if (await library.elementdisplayedAction(paxdetails.buttonDone))
        await library.clickAction(paxdetails.buttonDone)
}
async function conbasicdetails(adulttittle, firstname, lastname, dateofbirth, gender) {
    await browser.pause(3000)
    await library.clickAction(paxdetails.textConcessionTitle)
    await library.waituntilelementexistAction(paxdetails.dropdownNameTitle[0])
    for (var i = 0; i < await paxdetails.dropdownNameTitle.length; i++) {
        var title = await library.gettextAction(paxdetails.dropdownNameTitle[i])
        if (title === adulttittle) {
            await library.clickAction(paxdetails.dropdownNameTitle[i])
            break;
        }
    }

    await browser.pause(2000)
    await library.filltextboxAction(paxdetails.textboxConFirstName, firstname)
    await library.filltextboxAction(paxdetails.textConLastName, lastname)
    await library.filltextboxAction(paxdetails.textConDOB, dateofbirth)
    if (await library.elementdisplayedAction(paxdetails.dropdownGender)) {
        await library.clickAction(paxdetails.dropdownGenderField)
        if (gender == "Male") {
            await library.clickAction(paxdetails.optionMale)
        } else if (gender == "Female") {
            await library.clickAction(paxdetails.optionFemale)
        } else {
            await library.clickAction(paxdetails.optionDisclosed)
        }
    }
    if (await library.elementdisplayedAction(paxdetails.buttonDone))
        await library.clickAction(paxdetails.buttonDone)
}

async function passportdet(traveldoc, emergencyfname, emergencylname, emergencygender,
    Nationlaity, passportnumber, Expirydate, passportissuecountry) {
    // if (traveldoc === "Yes") {
    await browser.pause(2000)
    //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollForward()')
    await $('android=new UiScrollable(new UiSelector().scrollable(true).instance(0)).scrollIntoView(new UiSelector().className("android.widget.ToggleButton"))').click()
    if (await library.elementdisplayedAction(paxdetails.toggleTravelerInfo)) {
        await library.clickAction(paxdetails.toggleTravelerInfo)
        await library.waituntilelementexistAction(paxdetails.textboxTravelerFirstName)
        await paxdetails.textboxTravelerFirstName.clearValue()
        await library.filltextboxAction(paxdetails.textboxTravelerFirstName, emergencyfname)
        await paxdetails.textboxTravelerLastName.clearValue()
        await library.filltextboxAction(paxdetails.textboxTravelerLastName, emergencylname)

        if (await library.elementdisplayedAction(paxdetails.dropdownGender)) {
            await library.clickAction(paxdetails.dropdownGenderField)
            if (gender == "Male") {
                await library.clickAction(paxdetails.optionMale)
            } else if (gender == "Female") {
                await library.clickAction(paxdetails.optionFemale)
            } else {
                await library.clickAction(paxdetails.optionDisclosed)
            }
        }

        await library.filltextboxAction(paxdetails.textboxNationality, Nationlaity)
        await library.clickAction(paxdetails.dropdownNationality)
        await library.filltextboxAction(paxdetails.textboxPassportNo, passportnumber)
        await library.filltextboxAction(paxdetails.textboxPassportExpiryDate, Expirydate)
        await library.filltextboxAction(paxdetails.textboxPassportIssueCountry, passportissuecountry)
        await library.clickAction(paxdetails.dropdownPassportIssueCountry)
        // if (await library.elementdisplayedAction(paxdetails.buttonDone))
        //     await library.clickAction(paxdetails.buttonDone)
        return 1;
    }
    else if (await library.elementdisplayedAction(paxdetails.textboxTravelerFirstName)) {
        await library.waituntilelementexistAction(paxdetails.textboxTravelerFirstName)
        await paxdetails.textboxTravelerFirstName.clearValue()
        await library.filltextboxAction(paxdetails.textboxTravelerFirstName, emergencyfname)
        await paxdetails.textboxTravelerLastName.clearValue()
        await library.filltextboxAction(paxdetails.textboxTravelerLastName, emergencylname)

        if (await library.elementdisplayedAction(paxdetails.dropdownGender)) {
            await library.clickAction(paxdetails.dropdownGenderField)
            if (gender == "Male") {
                await library.clickAction(paxdetails.optionMale)
            } else if (gender == "Female") {
                await library.clickAction(paxdetails.optionFemale)
            } else {
                await library.clickAction(paxdetails.optionDisclosed)
            }
        }

        await library.filltextboxAction(paxdetails.textboxNationality, Nationlaity)
        await library.clickAction(paxdetails.dropdownNationality)
        await library.filltextboxAction(paxdetails.textboxPassportNo, passportnumber)
        await library.filltextboxAction(paxdetails.textboxPassportExpiryDate, Expirydate)
        await library.filltextboxAction(paxdetails.textboxPassportIssueCountry, passportissuecountry)
        await library.clickAction(paxdetails.dropdownPassportIssueCountry)
        // if (await library.elementdisplayedAction(paxdetails.buttonDone))
        //     await library.clickAction(paxdetails.buttonDone)
        return 1;
    }
    else {
        return 0;
    }
    //}
}
async function mcpassportdet(traveldoc, emergencyfname, emergencylname, emergencygender,
    Nationlaity, passportnumber, Expirydate, passportissuecountry) {
    // if (traveldoc === "Yes") {
    if (await library.elementdisplayedAction(paxdetails.toggleTravelerInfo)) {
        await library.clickAction(paxdetails.toggleTravelerInfo)
        await library.filltextboxAction(paxdetails.textboxTravelerFirstName, emergencyfname)
        await library.filltextboxAction(paxdetails.textboxTravelerLastName, emergencylname)

        if (await library.elementdisplayedAction(paxdetails.dropdownGender)) {
            await library.clickAction(paxdetails.dropdownGender)
            if (emergencygender == "Male") {
                await library.clickAction(paxdetails.optionMale)
            } else if (emergencygender == "Female") {
                await library.clickAction(paxdetails.optionFemale)
            } else {
                await library.clickAction(paxdetails.optionDisclosed)
            }
        }

        await library.filltextboxAction(paxdetails.textboxNationality, Nationlaity)
        await library.clickAction(paxdetails.dropdownNationality)
        await library.filltextboxAction(paxdetails.textboxPassportNo, passportnumber)
        await library.filltextboxAction(paxdetails.textboxPassportExpiryDate, Expirydate)
        await library.filltextboxAction(paxdetails.textboxPassportIssueCountry, passportissuecountry)
        await library.clickAction(paxdetails.dropdownPassportIssueCountry)
        // if (await library.elementdisplayedAction(paxdetails.buttonDone))
        //     await library.clickAction(paxdetails.buttonDone)
        return 1;
    }
    else {
        return 0;
    }
    //}
}

async function frequentflyer(FFP, FFPairlineAdult1, Frequentflyernumber) {
    if (FFP == "Yes") {
        $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollForward()')
        await library.clickAction(paxdetails.buttonFFP)
        await browser.pause(1000)
        await library.clickAction(paxdetails.optionFFP)
        await library.filltextboxAction(paxdetails.textboxFFPnumber, Frequentflyernumber)
        // if (await library.elementdisplayedAction(paxdetails.buttonDone))
        //     await library.clickAction(paxdetails.buttonDone)
    }

}
async function mcfrequentflyer(FFP, FFPairlineAdult1, Frequentflyernumber) {
    if (FFP == "Yes") {
        await library.clickAction(paxdetails.buttonMcFFP)
        await library.clickAction(paxdetails.dropdownMcFFP)
        await library.clickAction(paxdetails.optionMcFFP)
        await library.filltextboxAction(paxdetails.textboxMcFFPnumber, Frequentflyernumber)
        // if (await library.elementdisplayedAction(paxdetails.buttonDone))
        //     await library.clickAction(paxdetails.buttonDone)
    }

}
async function basiccontact(Emailaddress, confirmemail, countrycode,
    Mobilenumber, IsConcessionary) {
    //if (await IsConcessionary == "No") {
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Email Address")')
    await library.filltextboxAction(paxdetails.textboxEmail, Emailaddress)
    await library.filltextboxAction(paxdetails.textboxConfirmEmailId, confirmemail)
    await browser.pause(2000)
    await library.filltextboxAction(paxdetails.textboxCountryCode, countrycode)
    await library.clickAction(paxdetails.optionCountryCode)
    await library.filltextboxAction(paxdetails.textboxPhoneNo, Mobilenumber)
    //}
    // else if (await IsConcessionary == "Yes") {
    //     await library.filltextboxAction(paxdetails.textboxConEmail, Emailaddress)
    //     await library.filltextboxAction(paxdetails.textboxConConfirmEmail, confirmemail)
    //     await browser.pause(2000)
    //     await library.filltextboxAction(paxdetails.textboxConCountryCode, countrycode)
    //     await library.clickAction(paxdetails.optionCountryCode)
    //     await library.filltextboxAction(paxdetails.textboxConMobile, Mobilenumber)
    // }
    // if (await library.elementdisplayedAction(paxdetails.buttonDone))
    //     await library.clickAction(paxdetails.buttonDone)
    await library.clickAction(paxdetails.checkboxConsent)


}
async function mcbasiccontact(CdEmail, CdConfirmEmail, CdCountryCode,
    Mobilenumber) {
    await library.filltextboxAction(paxdetails.textboxMcEmail, CdEmail)
    await library.filltextboxAction(paxdetails.textboxMcConfirmEmail, CdConfirmEmail)
    await library.filltextboxAction(paxdetails.textboxMcCountryCode, CdCountryCode)
    const cc = 'label CONTAINS "' + CdCountryCode + '"'
    const ccode = await $(`-ios predicate string:${cc}`)
    await library.clickAction(ccode)
    await library.filltextboxAction(paxdetails.textboxMcMobile, CdMobNum)
    if (await library.elementdisplayedAction(paxdetails.buttonDone))
        await library.clickAction(paxdetails.buttonDone)
    await library.clickAction(paxdetails.checkboxConsent)


}
async function conbasiccontact(Emailaddress, confirmemail, countrycode,
    Mobilenumber) {
    await library.filltextboxAction(paxdetails.textboxConEmail, Emailaddress)
    await library.filltextboxAction(paxdetails.textboxConConfirmEmail, confirmemail)
    await browser.pause(2000)
    await library.filltextboxAction(paxdetails.textboxConCountryCode, countrycode)
    await library.clickAction(paxdetails.optionCountryCode)
    await library.filltextboxAction(paxdetails.textboxConMobile, Mobilenumber)
    if (await library.elementdisplayedAction(paxdetails.buttonDone))
        await library.clickAction(paxdetails.buttonDone)
    await library.clickAction(paxdetails.checkboxConsent)
}
async function intbasiccontact(Emailaddress, confirmemail, countrycode,
    Mobilenumber) {
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Email")')
    if (await library.elementdisplayedAction(paxdetails.textboxIntEmail)) {
        await library.filltextboxAction(paxdetails.textboxIntEmail, Emailaddress)
        await library.filltextboxAction(paxdetails.textboxIntConfirmEmail, confirmemail)
        await browser.pause(2000)
        await library.filltextboxAction(paxdetails.textboxIntCountryCode, countrycode)
        await library.clickAction(paxdetails.optionCountryCode)
        if (await library.elementdisplayedAction(paxdetails.textboxIntMobile))
            await library.filltextboxAction(paxdetails.textboxIntMobile, Mobilenumber)
        else if (library.elementdisplayedAction(paxdetails.textboxContactMobile))
            await library.filltextboxAction(paxdetails.textboxContactMobile, Mobilenumber)
        if (await library.elementdisplayedAction(paxdetails.buttonDone))
            await library.clickAction(paxdetails.buttonDone)
        await library.clickAction(paxdetails.checkboxConsent)
    }
}
async function emergency(EmergencyContact, Emergencycontactname, emergencyCode, Emergencyphoneno, IsConcessionary) {
    if (EmergencyContact == "Yes") {
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollForward()')
        if (await library.elementdisplayedAction(paxdetails.toggleEmergencyContact))
            await library.clickAction(paxdetails.toggleEmergencyContact)
        await browser.pause(1000)
        //if (await IsConcessionary == "No") {
        await library.filltextboxAction(paxdetails.textboxEmergencyContactName, Emergencycontactname)
        await library.filltextboxAction(paxdetails.textboxEmergencyCountryCode, emergencyCode)
        await library.clickAction(paxdetails.optionEmergencyCountryCode)
        await library.filltextboxAction(paxdetails.textboxPhoneNumber, Emergencyphoneno)
        //}
        // else if (await IsConcessionary == "Yes") {
        //     await library.filltextboxAction(paxdetails.textboxConContactName, Emergencycontactname)
        //     await library.filltextboxAction(paxdetails.textboxConEmgCountryCode, emergencyCode)
        //     await library.clickAction(paxdetails.optionEmergencyCountryCode)
        //     await browser.pause(1000)
        //     await library.filltextboxAction(paxdetails.textboxConEmMobile, Emergencyphoneno)
        // }
        // if (await library.elementdisplayedAction(paxdetails.buttonDone))
        //     await library.clickAction(paxdetails.buttonDone)

    }


}
async function mcemergency(EmergencyContact, Emergencycontactname, emergencyCode, Emergencyphoneno) {
    if (EmergencyContact == "Yes") {
        if (await library.elementdisplayedAction(paxdetails.buttonEmergencyContact))
            await library.clickAction(paxdetails.buttonEmergencyContact)
        await library.filltextboxAction(paxdetails.textboxMcEmgName, Emergencycontactname)
        await library.filltextboxAction(paxdetails.textboxMcEmgCountryCode, emergencyCode)
        const cc = 'label == "' + emergencyCode + '"'
        const ccode = await $(`-ios predicate string:${cc}`)
        await library.clickAction(ccode)
        await library.filltextboxAction(paxdetails.textboxMcEmgMobile, Emergencyphoneno)
        if (await library.elementdisplayedAction(paxdetails.buttonDone))
            await library.clickAction(paxdetails.buttonDone)

    }


}
async function conemergency(EmergencyContact, Emergencycontactname, emergencyCode, Emergencyphoneno) {
    if (EmergencyContact == "Yes") {
        if (await library.elementdisplayedAction(paxdetails.toggleEmergencyContact))
            await library.clickAction(paxdetails.toggleEmergencyContact)
        await browser.pause(1000)
        await library.filltextboxAction(paxdetails.textboxConContactName, Emergencycontactname)
        await library.filltextboxAction(paxdetails.textboxConEmgCountryCode, emergencyCode)
        await library.clickAction(paxdetails.optionEmergencyCountryCode)
        await library.filltextboxAction(paxdetails.textboxConEmMobile, Emergencyphoneno)
        if (await library.elementdisplayedAction(paxdetails.buttonDone))
            await library.clickAction(paxdetails.buttonDone)

    }


}
async function intemergency(EmergencyContact, Emergencycontactname, emergencyCode, Emergencyphoneno) {
    if (EmergencyContact == "Yes") {
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollForward()')
        if (await library.elementdisplayedAction(paxdetails.toggleEmergencyContact))
            await library.clickAction(paxdetails.toggleEmergencyContact)
        await browser.pause(1000)
        if (await library.elementdisplayedAction(paxdetails.textboxIntEmgContactName)) {
            await library.filltextboxAction(paxdetails.textboxIntEmgContactName, Emergencycontactname)
            await library.filltextboxAction(paxdetails.textboxIntEmgCountryCode, emergencyCode)
            await library.clickAction(paxdetails.optionEmergencyCountryCode)
            await library.filltextboxAction(paxdetails.textboxIntEmgMobile, Emergencyphoneno)
        }
        else if (await library.elementdisplayedAction(paxdetails.textboxTravelEmgContactName)) {
            await library.filltextboxAction(paxdetails.textboxTravelEmgContactName, Emergencycontactname)
            await library.filltextboxAction(paxdetails.textboxTravelEmgCode, emergencyCode)
            await library.clickAction(paxdetails.optionEmergencyCountryCode)
            await library.filltextboxAction(paxdetails.textboxTravelEmgMobile, Emergencyphoneno)
        }
        if (await library.elementdisplayedAction(paxdetails.buttonDone))
            await library.clickAction(paxdetails.buttonDone)

    }
}
async function selectfillpaxbutton() {
    //add scroll here
    await library.clickAction($('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("FILL PASSENGER DETAILS")'))
    //await library.clickAction(paxdetails.buttonFillPaxDetails)
    await library.waituntilelementexistAction(paxdetails.textPaxTitle)
    // await library.downscrollelementAction(paxdetails.textPaxInfo)
    // await library.downscrollelementAction(paxdetails.textPaxInfo)
    // await library.downscrollelementAction(paxdetails.textPaxInfo)
}
exports.basicdetails = basicdetails;
exports.passportdet = passportdet;
exports.basiccontact = basiccontact;
exports.emergency = emergency;
exports.frequentflyer = frequentflyer;
exports.basicdetinf = basicdetinf;
exports.conbasicdetails = conbasicdetails;
exports.conbasiccontact = conbasiccontact;
exports.conemergency = conemergency;
exports.intbasiccontact = intbasiccontact;
exports.intemergency = intemergency;
exports.selectfillpaxbutton = selectfillpaxbutton;
exports.mcbasicdetails = mcbasicdetails;
exports.mcbasicdetinfch = mcbasicdetinfch;
exports.mcpassportdet = mcpassportdet;
exports.mcfrequentflyer = mcfrequentflyer;
exports.mcbasiccontact = mcbasiccontact;
exports.mcemergency = mcemergency;