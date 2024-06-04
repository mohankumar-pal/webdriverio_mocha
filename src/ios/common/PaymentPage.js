const payment = require('../pageobjects/paymentpo.js')
const library = require('../common/Genericlibrary.js')
const { reissue } = require('./Reissue.js')

async function selectinsurance() {
    if (await library.elementexistingAction(payment.textInsurance)) {
        console.log(await driver.getContexts())
        console.log(await driver.getContexts())
        await browser.pause(3000)
        let contexts = await driver.getContexts()
        console.log(contexts);
        await driver.switchContext(contexts[1]);
        await library.clickAction(payment.buttonNoInsurance)
        await driver.switchContext(contexts[0])
    }
}
async function CardIssuedOutsideIndia(CardNumber, CardExpiryMonth, CardExpiryYear, CVV, CardHolderName, HouseNumber, ApartmentNumber, Pincode, City, Country, State) {

    await library.clickAction(payment.buttonCardPaymentMode)
    // if (library.elementexistingAction(payment.dropdownCardType)) {
    //     await library.clickAction(payment.dropdownCardType)
    //     await library.clickAction(payment.optionAmexCard)

    // }
    await library.clickAction(payment.textboxCardNumber)
    await library.filltextboxAction(payment.textboxCardNumber, CardNumber)
    console.log("cardnumber")
    await library.filltextboxAction(payment.textboxCardExpiryMonth, CardExpiryMonth)
    console.log("month")
    await library.filltextboxAction(payment.textboxCardExpiryYear, CardExpiryYear)
    console.log("year")
    await library.filltextboxAction(payment.textboxSecurityCodeCVV, CVV)
    console.log("cvv")
    await browser.pause(2000)
    await library.filltextboxAction(payment.textboxCardHolderName, CardHolderName)
    console.log("card name")
    await browser.pause(2000)
    if (await library.elementdisplayedAction(payment.textboxHouseNumber)) {
        await library.filltextboxAction(payment.textboxHouseNumber, HouseNumber)
        //await library.filltextboxAction(payment.textboxApartmentNumber, ApartmentNumber)
        await library.filltextboxAction(payment.textboxPincode, Pincode)
        await library.filltextboxAction(payment.textboxCity, City)
        await library.filltextboxAction(payment.textboxCountry, Country)
        await library.clickAction(payment.optionCountry)
        await library.clickAction(payment.textboxState)
        var stopt = '//XCUIElementTypeOther[@name="State or province *"]/XCUIElementTypeOther[@name="' + State + '"]'
        var stateopt = await $(stopt)
        console.log(stateopt)
        await library.clickAction(stateopt)
        // for (i = 1; i <= await stateopt.length; i++) {
        //     var states = await library.gettextAction(stateopt[i - 1])
        //     if (State === states) {
        //         await library.clickAction(stateopt[i - 1])
        //         break;
        //     }
        // }
    }
    if (await library.elementdisplayedAction(payment.buttonDone))
        await library.clickAction(payment.buttonDone)
    await library.clickAction(payment.checkboxTermsConditions)
    console.log(await driver.getContexts())
    console.log(await driver.getContexts())
    let contexts = await driver.getContexts()
    console.log(contexts);
    await driver.switchContext(contexts[1]);
    await library.clickAction(payment.buttonPay)
    await library.pagetimeout(payment.pageLoader)
    await driver.switchContext(contexts[0]);
    await library.waituntilelementexistAction(payment.textboxOTP)
    await browser.pause(8000)
    if (await library.elementdisplayedAction(payment.textboxOTP)) {
        var OTP = "1234"
        await library.filltextboxAction(payment.textboxOTP, OTP)
        await browser.pause(2000)
        if (await library.elementdisplayedAction(payment.buttonDone)) {
            await library.clickAction(payment.buttonGo)
        }
        // await library.clickAction(payment.buttonOTPSubmit)
        // await library.clickAction(payment.buttonOTPSubmit)
        await browser.pause(8000)
    }
}
async function McCreditCardPayment(CardNumber, CardExpiryMonth, CardExpiryYear, CVV, CardHolderName, HouseNumber, ApartmentNumber, Pincode, City, Country, State, Email, MobileNumber) {
    await library.clickAction(payment.radioMcCreditCard)
    await library.filltextboxAction(payment.textboxMcCardNumber, CardNumber)
    console.log("cardnumber")
    await library.clickAction(payment.textboxMcExpiryMonth)
    const expmon = '//XCUIElementTypeButton[@name="' + CardExpiryMonth + '"]'
    const expmonloc = await $(expmon)
    await library.clickAction(expmonloc)
    console.log("month")
    await library.filltextboxAction(payment.textboxMcCardExpiryYear, CardExpiryYear)
    const expyear = '//XCUIElementTypeButton[@name="' + cardExpiryYear + '"]'
    const expyearloc = await $(expyear)
    await library.clickAction(expyearloc)
    console.log("year")
    await library.filltextboxAction(payment.textboxMcCVV, CVV)
    console.log("cvv")
    await library.filltextboxAction(payment.textboxMcCardHolderName, CardHolderName)
    console.log("card name")
    //add email phone number
    await library.filltextboxAction(payment.textboxMcEmail, Email)
    await library.filltextboxAction(payment.textboxMcMobileNumber, MobileNumber)
    if (await library.elementdisplayedAction(payment.textboxMcHouseNumber)) {
        await library.filltextboxAction(payment.textboxMcHouseNumber, HouseNumber)
        await library.filltextboxAction(payment.textboxMcApartmentNo, ApartmentNumber)
        await library.filltextboxAction(payment.textboxMcPincode, Pincode)
        await library.filltextboxAction(payment.textboxMcCity, City)
        await library.filltextboxAction(payment.dropdownMcCountry, Country)
        const country = '**/XCUIElementTypeButton[`label == "' + Country + '"`]'
        const countryloc = await $(`-ios class chain${country}`)
        await library.downscrollelementAction(countryloc)
        await library.clickAction(countryloc)
        // await library.clickAction(payment.textboxState)
        // var stopt = '(//XCUIElementTypeOther[@name="State or province"])[2]//XCUIElementTypeOther[@name="' + State + '"]'
        // var stateopt = await $(stopt)
        // console.log(stateopt)
        // await library.clickAction(stateopt)

    }
    if (await library.elementdisplayedAction(payment.buttonDone))
        await library.clickAction(payment.buttonDone)
    await library.clickAction(payment.checkbocMcTerms)
    await library.clickAction(payment.buttonMcContinue)
    await library.waituntilelementexistAction(payment.textboxOTP)
    await browser.pause(8000)
    if (await library.elementdisplayedAction(payment.textboxOTP)) {
        var OTP = "1234"
        await library.filltextboxAction(payment.textboxOTP, OTP)
        await browser.pause(2000)
        if (await library.elementdisplayedAction(payment.buttonDone)) {
            await library.clickAction(payment.buttonGo)
        }
        await browser.pause(8000)
    }
}
async function McNetbanking() {
    await library.clickAction(payment.radioNetbanking)
    await browser.pause(2000)
    await library.clickAction(payment.checkbocMcTerms)
    await browser.pause(2000)
    await library.clickAction(payment.buttonMcContinue)
    await library.clickAction(payment.textInternetBanking)
    await library.clickAction(payment.dropdownMcSelectBank)
    await library.clickAction(payment.optionSelectbank)
    await library.clickAction(payment.buttonMakePayment)
    await library.clickAction(payment.dropdownSelectVal)
    await library.clickAction(payment.optionSelectVal)
    await library.clickAction(payment.buttonSubmit)
}
async function netbanking() {
    await library.clickAction(payment.buttonOtherPayments)
    await browser.pause(4000)
    await library.clickAction(payment.buttonNetbanking)
    await browser.pause(2000)
    await library.clickAction(payment.checkboxTermsConditions)
    await browser.pause(3000)
    console.log(await driver.getContexts())
    console.log(await driver.getContexts())
    let contexts = await driver.getContexts()
    console.log(contexts);
    await driver.switchContext(contexts[1]);
    await library.clickAction(payment.buttonPay)
    await library.pagetimeout(payment.pageLoader)
    await driver.switchContext(contexts[0]);
    await browser.pause(2000)
    await library.clickAction(payment.textInternetBanking)
    await library.clickAction(payment.dropdownSelectBank)
    await library.clickAction(payment.optionSelectbank)
    await library.clickAction(payment.buttonMakePayment)
    await library.clickAction(payment.dropdownSelectVal)
    await library.clickAction(payment.optionSelectVal)
    await library.clickAction(payment.buttonSubmit)
}
async function upi() {
    //this payment not working
}
async function wallet() {
    //this payment not working
}
async function rupay(CardNumber, CardExpiryMonth, cardExpiryYear, CVV, CardHolderName) {
    //this payment not working
}
async function emi(CardNumber, CardExpiryMonth, cardExpiryYear, CVV, CardHolderName) {
    //this payment not working
}
async function McNetbankingPayment() {

    await library.clickAction(payment.radioMcNetbanking)
    await library.clickAction(payment.checkboxMcTermsConditions)
    await library.clickAction(payment.buttonContinue)
    await library.clickAction(payment.buttonMcInternetBanking)
    await library.clickAction(payment.dropdownMcSelectBank)
    await library.clickAction(payment.optionMcTestBank)
    await library.clickAction(payment.buttonMcMakePayment)
    await library.clickAction(payment.dropdownMcStatus)
    await library.clickAction(payment.optionMcSuccess)
    await library.clickAction(payment.buttonMcSubmitPayment)

}

//below function works for mmb reissue payment
async function McCreditCard(MBCardNumber, MBCardExpMonth, MBCardExpYear, MBCVV, MBCardHolderName, MBCardEmail, MBCardMobile, MBHouseNumber, MBApartmentNumber, MBPincode, MBCity, MBCountry, MBState) {
    if (await library.elementdisplayedAction(payment.radioMcCreditCard))
        await library.clickAction(payment.radioMcCreditCard)
    await library.clickAction(payment.dropdownCardType)
    await library.clickAction(payment.optionAmex)
    await library.filltextboxAction(payment.textboxMcCardNo, MBCardNumber)
    console.log("cardnumber")
    await browser.pause(3000)
    await library.clickAction(payment.textboxMcCVV)
    await browser.pause(6000)
    await library.swipedownAction()
    await library.filltextboxAction(payment.textboxMcCardHolderName, MBCardHolderName)
    //await library.filltextboxAction(payment.textboxMcCardHolderName, MBCardHolderName)
    console.log("card holder name")
    await library.filltextboxAction(payment.textboxMcExpiryMonth, MBCardExpMonth)
    console.log("month")
    await library.filltextboxAction(payment.textboxMcCardExpiryYear, MBCardExpYear)
    console.log("year")
    // await library.clickAction(payment.textboxMcCVV)
    // await browser.pause(3000)
    // await library.waituntilelementexistAction(payment.textboxMcCVV)
    await library.filltextboxAction(payment.textboxMcCVV, MBCVV)
    console.log("cvv")
    // await library.filltextboxAction(payment.textboxMcEmail, MBCardEmail)
    // await library.filltextboxAction(payment.textboxMcMobileNumber, MBCardMobile)
    if (await library.elementdisplayedAction(payment.textboxMcHouseNumber)) {
        await library.filltextboxAction(payment.textboxMcHouseNumber, MBHouseNumber)
        await library.filltextboxAction(payment.textboxMcApartmentNo, MBApartmentNumber)
        await library.filltextboxAction(payment.textboxMcPincode, MBPincode)
        await library.filltextboxAction(payment.textboxMcCity, MBCity)
        if (await library.elementdisplayedAction(payment.buttonDone))
            await library.clickAction(payment.buttonDone)
        await library.clickAction(payment.dropdownMcCountry)
        const country = '**/XCUIElementTypeOther[`label CONTAINS "' + MBCountry + '"`]'
        const countryloc = await $(`-ios class chain:${country}`)
        await library.clickAction(countryloc)
        if (await library.elementexistingAction(payment.dropdownMcState)) {
            await library.clickAction(payment.dropdownMcState)
            const state = '**/XCUIElementTypeOther[`label CONTAINS "' + MBState + '"`]'
            const stateloc = await $(`-ios class chain:${state}`)
            await library.clickAction(stateloc)
        }
    }
    if (await library.elementdisplayedAction(payment.buttonDone))
        await library.clickAction(payment.buttonDone)
    await library.clickAction(payment.checkbocMcTerms)
    await library.clickAction(payment.buttonMcPay)
    await library.waituntilelementexistAction(payment.textboxOTP)
    await browser.pause(8000)
    if (await library.elementdisplayedAction(payment.textboxOTP)) {
        var OTP = "1234"
        await library.filltextboxAction(payment.textboxOTP, OTP)
        await browser.pause(2000)
        if (await library.elementdisplayedAction(payment.buttonDone)) {
            await library.clickAction(payment.buttonGo)
        }
        await browser.pause(8000)
    }
}
async function ReissuewithoutPayment() {
    await library.clickAction(payment.checkbocMcTerms)
    await library.clickAction(payment.buttonMcPay)
}
exports.CardIssuedOutsideIndia = CardIssuedOutsideIndia;
exports.McCreditCardPayment = McCreditCardPayment;
exports.McNetbanking = McNetbanking;
exports.netbanking = netbanking;
exports.upi = upi;
exports.wallet = wallet;
exports.rupay = rupay;
exports.emi = emi;
exports.McNetbankingPayment = McNetbankingPayment;
exports.McCreditCard = McCreditCard;
exports.ReissuewithoutPayment = ReissuewithoutPayment;
exports.selectinsurance = selectinsurance;