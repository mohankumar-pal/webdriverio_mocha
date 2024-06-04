const details = require('../../pageobjects/Checkin/checkinpo.js')
const library = require('../../common/Genericlibrary.js')

async function SubmitPNRandLastname(PNR, LastName) {
    await library.pagescrolltomiddleAction(details.buttonCheckin)
    await library.clickAction(details.buttonCheckin)
    await library.fillTextbox(details.textboxPNR, PNR)
    await library.fillTextbox(details.textboxLastName, LastName)
    await library.clickAction(details.buttonSubmit)
    await library.pagetimeout(details.confirmpageload)
    await browser.pause(3000)
}

async function EnterEmailPhone(EmailId,CountryCode,PhoneNumber) {
    var j = 0
    for (var i = 1; i < await details.textboxEmailId.length; i++) {
        await library.pagescrollAction(details.textboxEmailId[i])
        await library.fillTextbox(details.textboxEmailId[i], EmailId)

        if (await details.textboxCountryCode.length > 0) {
            await library.fillTextbox(details.textboxCountryCode[j], CountryCode)
            j++
        }
        await library.fillTextbox(details.textboxMobileNumber[i], PhoneNumber)
    }
    await library.pagescrollAction(details.buttonContinue)
    await browser.pause(3000)
    await library.clickAction(details.buttonContinue)
    await browser.pause(3000)

    await library.pagetimeout(details.confirmpageload)
}

async function AgreeAndContinue() {
    await library.waitforexistAction(details.buttonAgreeContinue)
    await library.pagescrollAction(details.buttonAgreeContinue)
    await library.clickAction(details.buttonAgreeContinue)
    await browser.pause(2000)
    await library.pagetimeout(details.confirmpageload)
}

async function FillNationality(Nationality) {
    if (await library.elementdisplayedAction(details.textboxNationality)) {
        await library.fillTextbox(details.textboxNationality, Nationality)
        await library.clickAction(details.optionNationality)
        await browser.pause(2000)
        await library.pagescrollAction(details.buttonSaveNationality)
        await library.clickAction(details.buttonSaveNationality)
        await library.pagetimeout(details.confirmpageload)
        await browser.pause(4000)
    }
}

async function FillCountry(Country) {
    if (await library.elementdisplayedAction(details.textboxCountry)) {
        await library.fillTextbox(details.textboxCountry, Country)
        await library.clickAction(details.optionNationality)
        await browser.pause(2000)
        await library.clickAction(details.buttonSaveCountry)
        await library.pagetimeout(details.confirmpageload)
        await browser.pause(4000)
    }
}

async function FillPersonalDetails(AdtGender) {
    if (await library.elementdisplayedAction(details.buttonSavePersDetails)) {
        await library.pagescrolltomiddleAction(details.buttonSavePersDetails)
        if (AdtGender == "Male")
            await library.clickAction(details.buttonoMale)
        else if (AdtGender == "Female")
            await library.clickAction(details.buttonFemale)
        await library.clickAction(details.buttonCalendar)
        await library.clickAction(details.buttonSelectDate)
        await library.clickAction(details.buttonSavePersDetails)
        await library.pagetimeout(details.confirmpageload)
        await browser.pause(4000)
    }
}

async function FillDocumentDetails(DocumentNumber, DocExpDate, DocIssuingCountry) {
    if (await library.elementdisplayedAction(details.dropdownDocType)) {
        await library.pagescrolltomiddleAction(details.dropdownDocType)
        await library.clickAction(details.dropdownDocType)
        await library.clickAction(details.optionDocType)
        await library.fillTextbox(details.textboxDocNumber, DocumentNumber)
        await library.fillTextbox(details.textboxDocExpDate, DocExpDate)
        await library.pagescrolltomiddleAction(details.textboxDocIssuingCountry)
        await library.fillTextbox(details.textboxDocIssuingCountry, DocIssuingCountry)
        await browser.pause(3000)
        await library.clickAction(details.optionNationality)
        await browser.pause(1000)
        await library.clickAction(details.buttonSaveTravelDoc)
        await library.pagetimeout(details.confirmpageload)
        await browser.pause(4000)
    }
}

async function FillAddress(HouseAddress, Pincode, Country, City, State) {
    if (await library.elementdisplayedAction(details.textboxHouseNumber)) {
        await library.pagescrolltomiddleAction(details.textboxHouseNumber)
        await library.fillTextbox(details.textboxHouseNumber, HouseAddress)
        await library.fillTextbox(details.textboxPostcode, Pincode)
        await library.fillTextbox(details.textboxCity, City)
        await library.fillTextbox(details.textboxAddressCountry, Country)
        await library.clickAction(details.optionNationality)
        await library.clickAction(details.dropdownState)
        await browser.pause(2000)
        for (i = 1; i <= await details.optionState.length; i++) {

            var states = await library.gettextAction(details.optionState[i - 1])
            await browser.pause(1000)
            if (State === states) {
                await library.clickAction(details.optionState[i - 1])
                break;
            }
        }
        await library.clickAction(details.buttonSaveAddress)
        await library.pagetimeout(details.confirmpageload)
        await browser.pause(4000)
    }

}

async function FillVisaDetails(VisaNumber, VisaCountry, VisaIssueDate, VisaExpDate, VisaIssuingCountry, VisaIssuancePlace) {
    if (await library.elementdisplayedAction(details.textboxVisaNumber)) {
        await library.pagescrolltomiddleAction(details.textboxVisaNumber)
        await library.fillTextbox(details.textboxVisaNumber, VisaNumber)
        await library.fillTextbox(details.textboxVisaCountry, VisaCountry)
        await library.clickAction(details.optionNationality)
        await library.fillTextbox(details.textboxVisaIssueDate, VisaIssueDate)
        await library.fillTextbox(details.textboxVisaExpDate, VisaExpDate)
        await library.fillTextbox(details.textboxVisaCountry2, VisaIssuingCountry)
        await library.clickAction(details.optionNationality)
        await library.fillTextbox(details.textboxVisaIssuancePlace, VisaIssuancePlace)
        await library.clickAction(details.buttonSaveVisa)
        await library.pagetimeout(details.confirmpageload)

        if (await library.elementdisplayedAction(details.dropdownPurposeOfVisit)) {
            await library.pagescrolltomiddleAction(details.dropdownPurposeOfVisit)
            await library.clickAction(details.dropdownPurposeOfVisit)
            for (i = 1; i <= await details.optionPurposeOfVisit.length; i++) {

                var pov = await library.gettextAction(details.optionPurposeOfVisit[i - 1])
                await browser.pause(1000)
                if (pov == PurposeOfVisit) {
                    await library.clickAction(details.optionPurposeOfVisit[i - 1])
                    break;
                }
            }
            await library.clickAction(details.buttonSaveAddInfo)
            await library.pagetimeout(details.confirmpageload)
            await browser.pause(4000)
        }
        if (await library.elementdisplayedAction(details.buttonNextPassenger)) {
            await library.pagescrolltomiddleAction(details.buttonNextPassenger)
            await library.clickAction(details.buttonNextPassenger)
            await library.pagetimeout(details.confirmpageload)
            await browser.pause(4000)
        }
        if (await library.elementdisplayedAction(details.buttonDetailsContinue)) {
            await library.pagescrolltomiddleAction(details.buttonDetailsContinue)
            await library.clickAction(details.buttonDetailsContinue)
            await library.waitfordisplayedAction(details.confirmpageload)
            await browser.pause(4000)
        }
    }
}

async function FillInternationalDetails(Nationality, Country, City, State, DocumentNumber, DocExpDate, DocIssuingCountry, HouseAddress, Pincode, Country,VisaNumber, VisaCountry, VisaIssueDate, VisaExpDate, VisaIssuingCountry, VisaIssuancePlace,DocumentNumber, DocExpDate, DocIssuingCountry, AdtGender) {
    await FillNationality(Nationality)
    await FillCountry(Country)
    await FillPersonalDetails(AdtGender)
    await FillDocumentDetails(DocumentNumber, DocExpDate, DocIssuingCountry)
    await FillAddress(HouseAddress, Pincode, Country, City, State)
    await FillVisaDetails(VisaNumber, VisaCountry, VisaIssueDate, VisaExpDate, VisaIssuingCountry, VisaIssuancePlace)
    if (await library.elementdisplayedAction(details.buttonNextPassenger)) {
        await library.pagescrolltomiddleAction(details.buttonNextPassenger)
        await library.clickAction(details.buttonNextPassenger)
        await library.pagetimeout(details.confirmpageload)
        await browser.pause(4000)
    }
    if (await library.elementdisplayedAction(details.buttonDetailsContinue)) {
        await library.pagescrolltomiddleAction(details.buttonDetailsContinue)
        await library.clickAction(details.buttonDetailsContinue)
        await library.pagetimeout(details.confirmpageload)
        await browser.pause(6000)
    }
}

async function viewBoardingPass() {
    await browser.pause(3000)
    await library.waitforexistAction(details.buttonViewBoardingPass)
    await library.pagescrollAction(details.buttonViewBoardingPass)
    await browser.pause(3000)
    await library.clickAction(details.buttonViewBoardingPass)
    await library.pagetimeout(details.confirmpageload)
    await browser.pause(3000)
}

async function DownloadBoardingPass() {
    await library.pagescrollAction(details.buttonDownload[0])
    await library.waitforexistAction(details.buttonDownload[0])
    for (var i = 0; i < await details.buttonDownload.length; i++) {
        await library.pagescrollAction(details.buttonDownload[i])
        await library.clickAction(details.buttonDownload[i])
        const window = await browser.getWindowHandles()
        await library.SwitchWindow(window[1])
        await browser.pause(5000)
        await library.CloseWindow()
        await library.SwitchWindow(window[0])
        await browser.pause(3000)
        if (await library.elementdisplayedAction(details.rightArrowClick)) {
            await library.pagescrollAction(details.rightArrowClick)
            await library.clickAction(details.rightArrowClick)
        }
    }
}

async function SendBoardingPass(SendAsPdf, SendPassBook, SendBySMS, EmailId, CountryCode, PhoneNumber) {
    await library.clickAction(details.buttonSendBoardingPass)
    if (SendAsPdf == "Yes") {
        await library.pagescrollAction(details.textboxSendAsPdf)
        await library.clickAction(details.textboxSendAsPdf)
        await library.fillTextbox(details.textboxSendPDFEmail, EmailId)
        await browser.pause(3000)
    } if (SendPassBook == "Yes") {
        await library.clickAction(details.buttonSendPassbook)
        if (await library.elementdisplayedAction(details.buttonSendToAllPax)) {
            await library.pagescrolltomiddleAction(details.buttonSendToAllPax)
            await library.clickAction(details.buttonSendToAllPax)
            await browser.pause(1000)
            for (i = 0; i < await details.textboxEmail.length; i++) {
                await library.clearAction(details.textboxEmail[i])
                await library.fillTextbox(details.textboxEmail[i], EmailId)
            }
            await browser.pause(3000)
        }
        // await library.fillTextbox(details.textboxSendAsPdf, EmailId)
        // await browser.pause(3000)
    } if (SendBySMS == "Yes") {
        await library.pagescrollAction(details.buttonSendBySMS)
        await library.clickAction(details.buttonSendBySMS)
        await library.fillTextbox(details.textboxCountryCode[0], CountryCode)
        await library.clickAction(details.optionCountryCode)
        await library.fillTextbox(details.textboxPhoneNumber, PhoneNumber)
    }
    await browser.pause(3000)
    await library.pagescrollAction(details.buttonIssueBoardingPass)
    await browser.pause(5000)
    await library.clickAction(details.buttonIssueBoardingPass)
    await library.pagetimeout(details.confirmpageload)
    await browser.pause(5000)
}

async function UpdateContactDetails(EmailId, CountryCode, PhoneNumber) {
    await library.pagescrollAction(details.buttonUpdateContact)
    await library.clickAction(details.buttonUpdateContact)
    await library.pagetimeout(details.confirmpageload)
    await library.waitforexistAction(details.textPaxContact[0])
    var j = 0
    for (var i = 0; i < await details.textPaxContact.length; i++) {
        await library.pagescrolltomiddleAction(details.textboxEmailId[i])
        await library.fillTextbox(details.textboxEmailId[i], EmailId)
        if (j < await details.textboxCountryCode.length) {
            await library.fillTextbox(details.textboxCountryCode[j], CountryCode)
            j++
        }
        await library.fillTextbox(details.textboxMobileNumber[i], PhoneNumber)
    }
    await library.pagescrollAction(details.buttonContinueNext)
    await library.clickAction(details.buttonContinueNext)
    await library.pagetimeout(details.confirmpageload)
    await library.waitforexistAction(details.textCheckinTitle)
}
async function howcanwereachyou() {
    if(await library.elementdisplayedAction(details.textHowCanWeReachYou) && await library.elementdisplayedAction(details.buttonDetailsContinue)) {
        await library.pagescrolltomiddleAction(details.buttonDetailsContinue)
        await library.clickAction(details.buttonDetailsContinue)
    }
}

exports.howcanwereachyou = howcanwereachyou;
exports.EnterEmailPhone = EnterEmailPhone;
exports.AgreeAndContinue = AgreeAndContinue;
exports.FillInternationalDetails = FillInternationalDetails;
exports.viewBoardingPass = viewBoardingPass;
exports.DownloadBoardingPass = DownloadBoardingPass;
exports.SendBoardingPass = SendBoardingPass;
exports.UpdateContactDetails = UpdateContactDetails;
exports.SubmitPNRandLastname = SubmitPNRandLastname;
