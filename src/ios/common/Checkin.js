const checkinpo = require('../../ios/pageobjects/checkinpo.js')
const library = require('../../ios/common/Genericlibrary.js')
const fs = require('fs')
const validate = require('../../ios/common/Validation.js')
const detail = require('../../../src/website/common/Checkin/CheckinDetails.js')

async function checkin(Testcase, PNR, Adult1LastName, Checkin,
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
    UpdateContactDetails, adultfirstname, adultlastName, childfirstname, childlastName, infantfirstname, infantlastname, NumberofAdult, NumberofChild, NumberofInfant) {
    try {
        await library.clickAction(checkinpo.buttonCheckin)
        // await library.filltextboxAction(checkinpo.textboxReferenceNumber, PNR)
        // await library.filltextboxAction(checkinpo.textboxLastname, Adult1LastName)
        // await library.clickAction(checkinpo.buttonCheck_in)

        // await browser.pause(12000) //handle this later

        await library.waituntilelementexistAction(checkinpo.buttonStartCheckin1)

        console.log(await checkinpo.buttonStartCheckin.length)
        var count = await checkinpo.buttonStartCheckin.length
        for (var c = 0; c < count; c++) {
            if (c > 0) {
                await library.clickAction(checkinpo.buttonCheckinTrips)
                await browser.pause(4000)
            }
            await library.clickAction(checkinpo.buttonStartCheckin[0])
            await library.waituntilelementexistAction(checkinpo.textSelectPassenger)

            //passenger name validation
            for (var i = 0; i < NumberofAdult; i++) {
                await validate.paxnamevalidation(adultfirstname[i], adultlastName[i])
            }
            for (var i = 0; i < NumberofChild; i++) {
                await validate.paxnamevalidation(childfirstname[i], childlastName[i])
            }
            for (var i = 0; i < NumberofInfant; i++) {
                await validate.paxnamevalidation(infantfirstname[i], infantlastname[i])
            }
            await browser.pause(3000)
            // if (await library.elementdisplayedAction(checkinpo.checkboxFillSameInfo))
            //     await library.clickAction(checkinpo.checkboxFillSameInfo)
            console.log(await driver.getContexts())
            console.log(await driver.getContexts())
            let contexts = await driver.getContexts()
            console.log(contexts);
            await driver.switchContext(contexts[1]);
            await detail.EnterEmailPhone(EmailId, CountryCode, PhoneNumber)
            await driver.switchContext(contexts[0]);
            //await EnterEmailPhone(EmailId, CountryCode, PhoneNumber)
            // await library.clickAction(checkinpo.buttonContinueCheckin)
            await library.waituntilelementexistAction(checkinpo.textCheckinBaggage)
            await library.clickAction(checkinpo.buttonAgreeContinue)
            await browser.pause(4000) //handle this later
            if (Testcase.includes('INT')) {
                await browser.pause(12000) //required info section seems to be appearing for few INT sectors only
                //await library.waituntilelementexistAction(checkinpo.textRequiredInfo)
                while (await library.elementdisplayedAction(checkinpo.textRequiredInfo)) {
                    await FillInternationalDetails(Nationality, Country, City, State, DocumentNumber, DocExpDate, DocIssuingCountry, HouseAddress, Pincode, Country, VisaNumber, VisaCountry, VisaIssueDate, VisaExpDate, VisaIssuingCountry, PurposeOfVisit, DocumentNumber, DocExpDate, DocIssuingCountry, AdtGender)
                    if (await library.elementdisplayedAction(checkinpo.buttonDetailsContinue)) {
                        await library.clickAction(checkinpo.buttonDetailsContinue)
                        await library.waituntilelementexistAction(checkinpo.textSeeDetails)
                    }
                    await browser.pause(8000)
                }
            }
            //await library.waituntilelementexistAction(checkinpo.textCheckedIn)
            await library.waituntilelementexistAction(checkinpo.textSeeDetails)
            await browser.pause(4000)
            for (var k = 0; k < 5; k++) {
                await library.swipeupAction()
            }
            while (await library.elementdisplayedAction(checkinpo.buttonGoToNextFlight)) {
                await library.clickAction(checkinpo.buttonGoToNextFlight)
                await library.waituntilelementexistAction(checkinpo.textSeeDetails)
                await browser.pause(8000)
                for (var k = 0; k < 4; k++) {
                    await library.swipeupAction()
                }
            }
            if (await library.elementdisplayedAction(checkinpo.buttonConfirmSeatSelection))
                await library.clickAction(checkinpo.buttonConfirmSeatSelection)
            //await library.waituntilelementexistAction(checkinpo.textSeeDetails)
            await library.waituntilelementexistAction(checkinpo.textCheckedIn)
            await library.clickAction(checkinpo.buttonViewBoardingPass)
            await browser.pause(2000)
            await library.waituntilelementexistAction(checkinpo.textBoardingPass)
            await browser.pause(3000)
            if (await DoyouwanttodownloadBP === "Yes") {
                const rightarrow = await checkinpo.buttonRightArrow.length
                for (var i = 0; i < rightarrow; i++) {
                    await library.clickAction(checkinpo.buttonDownloadBoardingPass)
                    await browser.pause(3000)
                    if (await library.elementexistingAction(checkinpo.buttonCloseBoardingPass))
                        await library.clickAction(checkinpo.buttonCloseBoardingPass)
                    await library.clickAction(checkinpo.buttonRightArrow[i])
                }
            }
            if (await DoyouwanttosendBP === "Yes") {
                await library.clickAction(checkinpo.buttonSendBoardingPass)
                if (SendAsPdf == "Yes") {
                    await library.clickAction(checkinpo.checkboxSendPdf)
                    // await library.clearAction(checkinpo.textboxPdfEmail)
                    // await library.filltextboxAction(checkinpo.textboxPdfEmail, EmailId)
                    await browser.pause(3000)
                } if (SendPassBook == "Yes") {
                    await library.clickAction(checkinpo.buttonSendPassbook)
                    if (await library.elementdisplayedAction(checkinpo.toggleSendAllPass)) {
                        await library.clickAction(checkinpo.toggleSendAllPass)
                        await browser.pause(3000)
                    }
                    // await library.filltextboxAction(checkinpo.textboxSendAsPdf, EmailId)
                    // await browser.pause(3000)
                } if (SendBySMS == "Yes") {
                    await library.swipeupAction()
                    await library.clickAction(checkinpo.buttonSendBySms)
                    if (await library.elementexistingAction(checkinpo.textboxSmsCountryCode1))
                        await library.filltextboxAction(checkinpo.textboxSmsCountryCode1, CountryCode)

                    await library.clickAction(checkinpo.optionCountryCode)
                    await library.filltextboxAction(checkinpo.textboxSmsPhoneNumber, PhoneNumber)
                }
                await library.clickAction(checkinpo.buttonIssueBoardingPass)
                if (!Testcase.includes('INT'))
                    await library.waituntilelementexistAction(checkinpo.textBoardingPassSent)
                else if (Testcase.includes('INT'))
                    await library.waituntilelementexistAction(checkinpo.textSeeDetails)
            }

            await library.clickAction(checkinpo.buttonCloseIcon)
            if (await library.elementdisplayedAction(checkinpo.buttonOk))
                await library.clickAction(checkinpo.buttonOk)

            if (c > 0)
                await library.waituntilelementexistAction(checkinpo.buttonManage)
            else
                await library.waituntilelementexistAction(checkinpo.buttonModifyBooking)
            if (await library.elementexistingAction(checkinpo.buttonLeftArrowBack))
                await library.clickAction(checkinpo.buttonLeftArrowBack)
        }

        await library.clickAction(checkinpo.buttonHome)

        //homepage boarding pass validationfor DOM sectors
        if (!Testcase.includes('INT')) {
            await library.clickAction(checkinpo.textHomepageBoardingPass)
            await library.clickAction(checkinpo.buttonBack)
            await library.waituntilelementexistAction(checkinpo.textHomepageBoardingPass)
        }

        let timestamp = new Date().toString("dd-MM-yyyy hh:ss:mm").replace(" ", "_");
        let day = new Date().getDate();
        let month = new Date().getMonth();
        let year = new Date().getFullYear();
        let hours = new Date().getHours();
        let minutes = new Date().getMinutes();

        console.log("Day :" + day + "," + "Month : " + month + "," + "Year : " + year);
        var filename = 'CK_' + Testcase + '_' + day + "_" + month + "_" + year + "_" + hours + "_" + minutes + ".png";

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
    }
    catch (e) {
        console.log(e)
        let day = new Date().getDate();
        let month = new Date().getMonth();
        let year = new Date().getFullYear();
        let hours = new Date().getHours();
        let minutes = new Date().getMinutes();

        console.log("Day :" + day + "," + "Month : " + month + "," + "Year : " + year);
        var filename = 'CK_' + Testcase + '_' + day + "_" + month + "_" + year + "_" + hours + "_" + minutes + ".png";

        await browser.saveScreenshot("./test/outputartifact/Screenshot/Failed/" + filename.toString());


        testresult1 = "Failed"
        pn1 = " "
        var cabinprint = ""
        var jsdata = {
            "TestcaseScenario": [Testcase],
            "PNR": [PNR],
            "TestcaseResult": [testresult1],
            "DateandTime": new Date().toLocaleString(undefined, {
                timeZone: 'Asia/Kolkata'
            }),
        }
    }
    return jsdata
}

async function FillInternationalDetails(Nationality, Country, City, State, DocumentNumber, DocExpDate, DocIssuingCountry, HouseAddress, Pincode, Country, VisaNumber, VisaCountry, VisaIssueDate, VisaExpDate, VisaIssuingCountry, PurposeOfVisit, DocumentNumber, DocExpDate, DocIssuingCountry, AdtGender) {
    await FillNationality(Nationality)
    await FillCountry(Country)
    await FillPersonalDetails(AdtGender)
    await FillDocumentDetails(DocumentNumber, DocExpDate, DocIssuingCountry)
    await FillAddress(HouseAddress, Pincode, Country, City, State) //pending
    await FillVisaDetails(VisaNumber, VisaCountry, VisaIssueDate, VisaExpDate, VisaIssuingCountry, PurposeOfVisit)
    await browser.pause(4000)
    await library.waituntilelementexistAction(checkinpo.buttonExitCheckin)
    await library.swipeupAction()
    if (await library.elementexistingAction(checkinpo.buttonNextPassenger)) {
        await library.clickAction(checkinpo.buttonNextPassenger)
        await library.waituntilelementexistAction(checkinpo.textRequiredInfo)
    }
    if (await library.elementexistingAction(checkinpo.buttonDetailsContinue)) {
        await library.clickAction(checkinpo.buttonDetailsContinue)
        await library.waituntilelementexistAction(checkinpo.textSeeDetails)
    }
}
async function FillNationality(Nationality) {
    if (await library.elementdisplayedAction(checkinpo.textboxNationality)) {
        await library.filltextboxAction(checkinpo.textboxNationality, Nationality)
        await library.clickAction(checkinpo.optionNationality)
        await library.clickAction(checkinpo.buttonSaveNationality)
        await library.waituntilelementexistAction(checkinpo.textRequiredInfo)
    }
}

async function FillCountry(Country) {
    if (await library.elementdisplayedAction(checkinpo.textboxCountryOfResidence)) {
        await library.filltextboxAction(checkinpo.textboxCountryOfResidence, Country)
        await library.clickAction(checkinpo.optionCountry)
        await library.clickAction(checkinpo.buttonSaveCountry)
        await library.waituntilelementexistAction(checkinpo.textRequiredInfo)
    }
}

async function FillPersonalDetails(AdtGender) {
    if (await library.elementdisplayedAction(checkinpo.buttonSavePersDetails)) {
        if (AdtGender == "Male")
            await library.clickAction(checkinpo.buttonoMale)
        else if (AdtGender == "Female")
            await library.clickAction(checkinpo.buttonFemale)
        await library.clickAction(checkinpo.buttonCalendar)
        await library.clickAction(checkinpo.buttonSelectDate)
        await library.clickAction(checkinpo.buttonSavePersDetails)
        await library.waituntilelementexistAction(checkinpo.textRequiredInfo)
        await browser.pause(6000)
    }
}

async function FillDocumentDetails(DocumentNumber, DocExpDate, DocIssuingCountry) {
    await library.waituntilelementexistAction(checkinpo.textRequiredInfo)
    if (await library.elementdisplayedAction(checkinpo.buttonTravelDocuments)) {
        await library.clickAction(checkinpo.dropdownDocType)
        await library.clickAction(checkinpo.optionDocType)
        // await library.filltextboxAction(checkinpo.textboxDocNumber, DocumentNumber)
        // await library.clearAction(checkinpo.textboxCountry)
        console.log(await driver.getContexts())
        console.log(await driver.getContexts())
        let contexts = await driver.getContexts()
        console.log(contexts);
        await driver.switchContext(contexts[1]);
        await library.filltextboxAction(checkinpo.textboxWebDocNumber, DocumentNumber)
        await driver.switchContext(contexts[0]);
        await library.filltextboxAction(checkinpo.textboxCountry, DocIssuingCountry)
        await library.clickAction(checkinpo.dropdownCountry)
        await library.filltextboxAction(checkinpo.textboxDocExpDate, DocExpDate)
        //await library.filltextboxAction(checkinpo.textboxDocIssuingCountry, DocIssuingCountry)
        //await library.clickAction(checkinpo.dropdownDocIssuingCountry)
        console.log(await driver.getContexts())
        console.log(await driver.getContexts())
        let context = await driver.getContexts()
        console.log(contexts);
        await driver.switchContext(context[1]);
        await library.filltextboxAction(checkinpo.textboxWebDocIssuingCountry, DocIssuingCountry)
        await library.clickAction(checkinpo.optionWebDocIssuingCountry)
        await driver.switchContext(context[0]);
        await library.clickAction(checkinpo.buttonSaveTravelDoc)
        await library.waituntilelementexistAction(checkinpo.textRequiredInfo)
    }
}

async function FillAddress(HouseAddress, Pincode, Country, City, State) {
    if (await library.elementdisplayedAction(checkinpo.textboxHouseNumber)) {
        await library.filltextboxAction(checkinpo.textboxHouseNumber, HouseAddress)
        await library.filltextboxAction(checkinpo.textboxPostcode, Pincode)
        await library.filltextboxAction(checkinpo.textboxCity, City)
        await library.filltextboxAction(checkinpo.textboxAddressCountry, Country)
        await library.clickAction(checkinpo.optionAddressCountry)
        await library.clickAction(checkinpo.dropdownState)
        const statetxt = '//XCUIElementTypeOther[@name="' + State + '"]'
        const stateloc = await $(statetxt)
        await library.clickAction(stateloc)
        await library.clickAction(checkinpo.buttonSaveAddress)
        await library.waituntilelementexistAction(checkinpo.textRequiredInfo)
    }

}

async function FillVisaDetails(VisaNumber, VisaCountry, VisaIssueDate, VisaExpDate, VisaIssuingCountry, PurposeOfVisit) {
    await browser.pause(8000) //visa details appear only for few sectors
    await library.swipedownAction()
    if (await library.elementexistingAction(checkinpo.textboxVisaNumber)) {
        await library.clickAction(checkinpo.textboxVisaNumber)
        await library.filltextboxAction(checkinpo.textboxVisaNumber, VisaNumber)
        await library.filltextboxAction(checkinpo.textboxVisaCountry, VisaCountry)
        await library.clickAction(checkinpo.optionVisaCountry)
        await library.filltextboxAction(checkinpo.textboxVisaIssueDate, VisaIssueDate)
        await library.filltextboxAction(checkinpo.textboxVisaExpDate, VisaExpDate)
        await library.filltextboxAction(checkinpo.textboxVisaIssuingCountry, VisaIssuingCountry)
        await library.clickAction(checkinpo.optionVisaIssuingCountry)
        await library.clickAction(checkinpo.buttonSaveVisa)
        await library.waituntilelementexistAction(checkinpo.dropdownPurposeOfVisit)
        if (await library.elementdisplayedAction(checkinpo.dropdownPurposeOfVisit)) {
            await library.clickAction(checkinpo.dropdownPurposeOfVisit)
            var purpose = '//XCUIElementTypeOther[@name="' + PurposeOfVisit + '"]'
            var purposeoption = await $(purpose)
            await library.clickAction(purposeoption)
            await library.clickAction(checkinpo.buttonSaveAddInfo)
            await browser.pause(2000)
            await library.waituntilelementexistAction(checkinpo.textRequiredInfo)
            await library.waituntilelementexistAction(checkinpo.buttonExitCheckin)
        }
    }
}

async function EnterEmailPhone(EmailId, CountryCode, PhoneNumber) {
    var j = 0
    for (var i = 1; i < await checkinpo.textboxEmailId.length; i++) {
        await library.filltextboxAction(checkinpo.textboxEmailId[i], EmailId)

        if (await checkinpo.textboxCountryCode.length > 0) {
            await library.filltextboxAction(checkinpo.textboxCountryCode[j], CountryCode)
            j++
        }
        await library.filltextboxAction(checkinpo.textboxMobileNumber[i], PhoneNumber)
    }
    await browser.pause(3000)
    await library.clickAction(checkinpo.buttonContinue)
    await browser.pause(3000)
}
exports.checkin = checkin;
exports.EnterEmailPhone = EnterEmailPhone;
