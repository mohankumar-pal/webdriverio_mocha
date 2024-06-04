const payment = require('../pageobjects/paymentpo.js')
const library = require('../common/Genericlibrary.js')
const { reissue } = require('../../ios/common/Reissue.js')

async function CardIssuedOutsideIndia(CardNumber, CardExpiryMonth, CardExpiryYear, CVV, CardHolderName, HouseNumber, ApartmentNumber, Pincode, City, Country, State) {
    await library.clickAction(payment.buttonCardPaymentMode)
    await library.clickAction(payment.textboxCardNumber)
    await library.filltextboxAction(payment.textboxCardNumber,CardNumber)
    console.log("cardnumber")
    await library.filltextboxAction(payment.textboxCardExpiryMonth,CardExpiryMonth)
    console.log("month")
    await library.filltextboxAction(payment.textboxCardExpiryYear,CardExpiryYear)
    console.log("year")
    await library.filltextboxAction(payment.textboxSecurityCodeCVV,CVV)
    console.log("cvv")
    await library.filltextboxAction(payment.textboxCardHolderName,CardHolderName)
    console.log("card name")
    if (await library.elementdisplayedAction(payment.textboxHouseNumber)) {
        await library.filltextboxAction(payment.textboxHouseNumber,HouseNumber)
        await library.filltextboxAction(payment.textboxApartmentNumber,ApartmentNumber)
        await library.filltextboxAction(payment.textboxPincode,Pincode)
        await library.filltextboxAction(payment.textboxCity,City)
        await library.filltextboxAction(payment.textboxCountry,Country)
        await library.clickAction(payment.optionCountry)
        await library.clickAction(payment.textboxState)
        var stopt = '(//XCUIElementTypeOther[@name="State or province"])[2]//XCUIElementTypeOther[@name="'+ State +'"]'
        var stateopt = await $$(stopt)
        console.log(stateopt)
        for (i = 1; i <= await stateopt.length; i++) {
            var states = await library.gettextAction(stateopt[i - 1])
            if (State === states) {
                await library.clickAction(stateopt[i - 1])
                break;
            }
        }
    }
    if (await library.elementdisplayedAction(payment.buttonDone))
        await library.clickAction(payment.buttonDone)
    await library.clickAction(payment.checkboxTermsConditions)
    await library.clickAction(payment.buttonPay)
}
async function netbanking() {
    await library.clickAction(payment.buttonOtherPayments)
    await browser.pause(4000)
    await library.clickAction(payment.buttonNetbanking)
    await browser.pause(2000)
    await library.clickAction(payment.checkboxTermsConditions)
    await library.clickAction(payment.buttonPay)
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

exports.CardIssuedOutsideIndia = CardIssuedOutsideIndia;
exports.netbanking = netbanking;
exports.upi = upi;
exports.wallet = wallet;
exports.rupay = rupay;
exports.emi = emi;

