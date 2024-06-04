const paymentpo = require('../../pageobjects/Checkin/paymentpo.js')
const library = require('../Genericlibrary.js')

async function CardIssuedOutsideIndia(CardNumber, CardExpiryMonth, CardExpiryYear, CVV, CardHolderName, CardEmail, HouseNumber, ApartmentNumber, Pincode, City, Country, State) {
    await browser.pause(3000)
    await library.pagescrolltomiddleAction(paymentpo.textPaymentTitle)
    if (await library.elementdisplayedAction(paymentpo.buttonCardMode))
        await library.clickAction(paymentpo.buttonCardMode)
    await browser.pause(3000)
    var frame = await paymentpo.iframeCardNumber
    await library.switchframeAction(frame)
    await library.clickAction(paymentpo.textboxCardNumber)
    await library.fillTextbox(paymentpo.textboxCardNumber, CardNumber)
    await library.parentframeAction()
    await library.fillTextbox(paymentpo.textboxCardExpiryMonth, CardExpiryMonth)
    await library.fillTextbox(paymentpo.textboxCardExpiryYear, CardExpiryYear)
    await browser.pause(2000)
    var frame2 = await paymentpo.iframeCVV
    await library.switchframeAction(frame2)
    await library.fillTextbox(paymentpo.textboxSecurityCodeCVV, CVV)
    await browser.pause(1000)
    await library.parentframeAction
    await library.pagescrolltomiddleAction(paymentpo.textboxSecurityCodeCVV)
    // await library.clickAction(paymentpo.textboxCardName)
    // await library.fillTextbox(paymentpo.textboxCardholderName,CardHolderName)
    await browser.keys("\ue004")
    await browser.keys(CardHolderName)
    await browser.pause(3000)
    // if (await library.elementdisplayedAction(paymentpo.textboxCardEmail))
    //     await library.fillTextbox(paymentpo.textboxCardEmail, CardEmail)
    await browser.keys("\ue004")
    await browser.keys(CardEmail)
    // if (await library.elementdisplayedAction(paymentpo.textboxHouseNumber)) {
    //     await library.fillTextbox(paymentpo.textboxHouseNumber, HouseNumber)
    //     await library.pagescrolltomiddleAction(paymentpo.textboxApartmentNumber)
    //     await library.fillTextbox(paymentpo.textboxApartmentNumber, ApartmentNumber)
    //     await library.fillTextbox(paymentpo.textboxPincode, Pincode)
    //     await library.fillTextbox(paymentpo.textboxCity, City)
    //     await library.fillTextbox(paymentpo.textboxCountry, Country)
    //     await library.clickAction(paymentpo.optionCountrySelected)
    //     await library.clickAction(paymentpo.dropdownState)
    //     for (i = 1; i <= await paymentpo.optionState.length; i++) {
    //         var states = await library.gettextAction(paymentpo.optionState[i - 1])
    //         if (State === states) {
    //             await paymentpo.optionState[i - 1].click()
    //             break;
    //         }
    //     }
    // }
    await browser.keys("\ue004")
    await browser.keys(HouseNumber)
    await browser.keys("\ue004")
    await browser.keys(ApartmentNumber)
    await browser.keys("\ue004")
    await browser.keys(Pincode)
    await browser.keys("\ue004")
    await browser.keys(City)
    await browser.keys("\ue004")
    await browser.keys(Country)
    await browser.keys("\ue004")
    await browser.keys("\ue007")
    await browser.keys('Goa')
    await browser.keys("\ue007")

    await browser.pause(5000)
    // await library.pagescrolltomiddleAction(paymentpo.checkboxTermsCondition)
    // await library.clickAction(paymentpo.checkboxTermsCondition)
    // await library.pagescrolltomiddleAction(paymentpo.buttonPay)
    // await library.clickAction(paymentpo.buttonPay)
    await browser.keys("\ue004")
    await $(".terms-and-conditions-label").click() // this line is not working

    await library.pagetimeout(paymentpo.confirmpageload)
    await browser.pause(6000)
}
async function netbanking() {
    await library.clickAction(paymentpo.buttonOtherPayments)
    await browser.pause(4000)
    await library.clickAction(paymentpo.radiobuttonNetbanking)
    await library.clickAction(paymentpo.checkboxTermsConditions)
    await library.clickAction(paymentpo.buttonOtherPay)
    await library.pagetimeout(paymentpo.confirmpageload)
    await browser.pause(3000)
    await library.waitforexistAction(paymentpo.textInternetBanking)
    await library.clickAction(paymentpo.dropdownBank)
    await browser.pause(2000)
    await library.clickAction(paymentpo.optionBank)
    await library.clickAction(paymentpo.buttonMakePayment)
    await library.pagetimeout(paymentpo.confirmpageload)
    await library.waitforexistAction(paymentpo.textBankStatus)
    await library.clickAction(paymentpo.dropdownStatus)
    await library.clickAction(paymentpo.optionStatus[1])
    await library.clickAction(paymentpo.buttonPaySubmit)
    await library.pagetimeout(paymentpo.confirmpageload)
}
async function upi() {
    await library.clickAction(paymentpo.otherpayments)
    await browser.pause(4000)
    await library.clickAction(paymentpo.upi)
    await library.clickAction(paymentpo.termsconditions)
    await library.clickAction(paymentpo.otherpaybtn)
    await library.pagetimeout(paymentpo.confirmpageload)
    await browser.pause(5000)
    await library.clickAction(paymentpo.makepayment)
    await library.pagetimeout(paymentpo.confirmpageload)
}
async function wallet() {
    await library.clickAction(paymentpo.otherpayments)
    await browser.pause(4000)
    await library.clickAction(paymentpo.wallet)
    await library.clickAction(paymentpo.termsconditions)
    await library.clickAction(paymentpo.otherpaybtn)
    await library.waitfordisplayedAction(paymentpo.confirmpageload)
    await browser.pause(3000)
    await library.clickAction(paymentpo.makepayment)
    await library.pagetimeout(paymentpo.confirmpageload)
}
async function rupay(CardNumber, CardExpiryMonth, cardExpiryYear, CVV, CardHolderName) {
    await library.clickAction(paymentpo.otherpayments)
    await browser.pause(4000)
    await library.clickAction(paymentpo.rupay)
    await library.clickAction(paymentpo.termsconditions)
    await library.clickAction(paymentpo.otherpaybtn)
    await library.pagetimeout(paymentpo.confirmpageload)
    await library.fillTextbox(paymentpo.rupaycardnumber, CardNumber)
    await library.fillTextbox(paymentpo.rupayexpmonth, CardExpiryMonth)
    await library.fillTextbox(paymentpo.rupayexpyear, cardExpiryYear)
    await library.fillTextbox(paymentpo.rupaycvv, CVV)
    await library.fillTextbox(paymentpo.rupaycardholdername, CardHolderName)
    await browser.pause(3000)
    await library.clickAction(paymentpo.makepayment)
    await library.pagetimeout(paymentpo.confirmpageload)
}
async function emi(CardNumber, CardExpiryMonth, cardExpiryYear, CVV, CardHolderName) {
    await library.clickAction(paymentpo.otherpayments)
    await browser.pause(4000)
    await library.clickAction(paymentpo.emi)
    await library.clickAction(paymentpo.termsconditions)
    await library.clickAction(paymentpo.otherpaybtn)
    await library.pagetimeout(paymentpo.confirmpageload)
    await library.clickAction(paymentpo.emioption)
    await library.clickAction(paymentpo.optionAxisCard)
    await library.clickAction(paymentpo.radiobuttonemi)
    await library.fillTextbox(paymentpo.rupaycardnumber, CardNumber)
    await library.fillTextbox(paymentpo.rupayexpmonth, CardExpiryMonth)
    await library.fillTextbox(paymentpo.rupayexpyear, cardExpiryYear)
    await library.fillTextbox(paymentpo.rupaycvv, CVV)
    await library.fillTextbox(paymentpo.rupaycardholdername, CardHolderName)
    await browser.pause(3000)
    await library.clickAction(paymentpo.makepayment)
    await library.pagetimeout(paymentpo.confirmpageload)
}
async function Payment(PaymentType, CardNumber, CardExpiryMonth, CardExpiryYear, CVV, CardHolderName, CardEmail, HouseNumber, ApartmentNumber, Pincode, City, CardCountry, State) {
    if (await library.elementdisplayedAction(paymentpo.textPaymentTitle)) {
        if (PaymentType === "Card Payment") {
            await CardIssuedOutsideIndia(CardNumber, CardExpiryMonth, CardExpiryYear, CVV, CardHolderName, CardEmail, HouseNumber, ApartmentNumber, Pincode, City, CardCountry, State)
        }
        else if (PaymentType === "NetBanking") {
            await netbanking()
        }
        else if (PaymentType === "UPI") {
            await upi()
        }
        else if (PaymentType === "Wallet") {
            await wallet()
        }
        else if (PaymentType === "RuPay") {
            await rupay(CardNumber, CardExpiryMonth, cardExpiryYear, CVV, CardHolderName)
        }
        else if (PaymentType === "EMI") {
            await emi(CardNumber, CardExpiryMonth, cardExpiryYear, CVV, CardHolderName)
        }
        await library.pagetimeout(paymentpo.confirmpageload)
        await browser.pause(3000)
        console.log("end of payment")
        await browser.pause(3000)
    }
}

exports.CardIssuedOutsideIndia = CardIssuedOutsideIndia;
exports.netbanking = netbanking;
exports.upi = upi;
exports.wallet = wallet;
exports.rupay = rupay;
exports.emi = emi;
exports.Payment = Payment;