const paymentpo = require('../../pageobjects/OnewayRoundtrip/paymentpo.js')
const library = require('../../common/Genericlibrary.js')


async function CardIssuedOutsideIndia(CardNumber, CardExpiryMonth, CardExpiryYear, CVV, CardHolderName, HouseNumber, ApartmentNumber, Pincode, City, Country, State) {
    await library.pagescrollAction(paymentpo.textPaymentTitle)
    await library.clickAction(paymentpo.textCardPaymentMode)
    await browser.pause(3000)
    var fr = await paymentpo.iframeCardNumber
    await library.switchframeAction(fr)
    await library.clickAction(paymentpo.textboxCardNumber)
    await library.fillTextbox(paymentpo.textboxCardNumber, CardNumber)
    console.log("cardnumber")
    await library.parentframeAction()
    await library.fillTextbox(paymentpo.textboxCardExpiryMonth, CardExpiryMonth)
    console.log("month")
    await library.fillTextbox(paymentpo.textboxCardExpiryYear, CardExpiryYear)
    console.log("year")
    await browser.pause(2000)
    var fr2 = await paymentpo.iframeCvv
    await library.switchframeAction(fr2)
    await library.fillTextbox(paymentpo.textboxCVV, CVV)
    await browser.pause(1000)
    console.log("cvv")
    await library.parentframeAction()
    // await library.fillTextbox(paymentpo.textboxCardholderName,CardHolderName)
    await browser.keys("\ue004")
    await browser.keys(CardHolderName)
    console.log("card name")
    await browser.pause(3000)
    if (await library.elementdisplayedAction(paymentpo.textboxHouseNumber)) {
        await library.fillTextbox(paymentpo.textboxHouseNumber, HouseNumber)
        await library.fillTextbox(paymentpo.textboxApartmentNumber, ApartmentNumber)
        await library.fillTextbox(paymentpo.textboxPincode, Pincode)
        await library.fillTextbox(paymentpo.textboxCity, City)
        await library.fillTextbox(paymentpo.textboxCountry, Country)
        await library.clickAction(paymentpo.dropdownCountry)
        await library.clickAction(paymentpo.dropdownState)
        for (i = 1; i <= await paymentpo.optionState.length; i++) {
            var states = await library.gettextAction(paymentpo.optionState[i - 1])
            //await browser.pause(2000)
            if (State === states) {
                await library.clickAction(paymentpo.optionState[i - 1])
                break;
            }
        }
    }
    await browser.pause(5000)
    await library.pagescrolltomiddleAction(paymentpo.checkboxTermsConditions)
    await library.clickAction(paymentpo.checkboxTermsConditions)
    await library.pagescrolltomiddleAction(paymentpo.buttonPay)
    await library.clickAction(paymentpo.buttonPay)
    await library.pagetimeout(paymentpo.page_loader)
    await browser.pause(8000)
    if (await library.elementdisplayedAction(await $("//iframe[@id='Cardinal-CCA-IFrame']"))) {
        var ccc = await $("//iframe[@id='Cardinal-CCA-IFrame']")
        await browser.switchToFrame(ccc);
        var OTP = "1234"
        await library.waitforexistAction(paymentpo.lodoCardNetwork)
        await library.fillTextbox(paymentpo.textboxOTPVerify, OTP)
        await library.pagescrolltomiddleAction(paymentpo.buttonOTPSubmit)
        await browser.pause(2000)
        await library.clickAction(paymentpo.buttonOTPSubmit)
        await browser.switchToParentFrame()
        await library.pagetimeout(paymentpo.page_loader)
        await browser.pause(8000)
    }
}
async function selectinsurance() {
    if (await library.isexistingAction(paymentpo.buttonNoInsurance)) {
        await library.pagescrolltomiddleAction(paymentpo.buttonNoInsurance)
        await library.clickAction(paymentpo.buttonNoInsurance)
    }
}
async function netbanking() {
    await library.clickAction(paymentpo.textOtherPayments)
    await browser.pause(3000)
    await library.clickAction(paymentpo.imageNetbanking)
    await library.clickAction(paymentpo.checkboxTermsConditions)
    await library.clickAction(paymentpo.buttonOtherPay)
    await library.pagetimeout(paymentpo.page_loader)
    await browser.pause(3000)
    await library.waitforexistAction(paymentpo.textInternetBanking)
    await library.clickAction(paymentpo.buttonInternetBanking) //mobile responsive
    await library.clickAction(paymentpo.dropdownBank)
    await browser.pause(2000)
    await library.clickAction(paymentpo.optionBank)
    await library.clickAction(paymentpo.buttonMakePayment)
    await library.pagetimeout(paymentpo.page_loader)
    await library.waitforexistAction(paymentpo.textStatus)
    await library.clickAction(paymentpo.dropdownStatus)
    await library.clickAction(paymentpo.optionStatus[1])
    await library.clickAction(paymentpo.buttonSubmitPayment)
    await library.pagetimeout(paymentpo.page_loader)
}
async function upi() {
    await library.clickAction(paymentpo.textOtherPayments)
    //await browser.pause(4000)
    await library.clickAction(paymentpo.imageUpi)
    await library.clickAction(paymentpo.checkboxTermsConditions)
    await library.clickAction(paymentpo.buttonOtherPay)
    await library.pagetimeout(paymentpo.page_loader)
    //await browser.pause(5000)
    await library.clickAction(paymentpo.buttonMakePayment)
    await library.pagetimeout(paymentpo.page_loader)
}
async function wallet() {
    await library.clickAction(paymentpo.textOtherPayments)
    //await browser.pause(4000)
    await library.clickAction(paymentpo.imageWallet)
    await library.clickAction(paymentpo.checkboxTermsConditions)
    await library.clickAction(paymentpo.buttonOtherPay)
    await library.pagetimeout(paymentpo.page_loader)
    //await browser.pause(3000)
    await library.clickAction(paymentpo.buttonMakePayment)
    await library.pagetimeout(paymentpo.page_loader)
}
async function rupay(CardNumber, CardExpiryMonth, cardExpiryYear, CVV, CardHolderName) {
    await library.clickAction(paymentpo.textOtherPayments)
    //await browser.pause(4000)
    await library.clickAction(paymentpo.imageRupay)
    await library.clickAction(paymentpo.checkboxTermsConditions)
    await library.clickAction(paymentpo.buttonOtherPay)
    await library.pagetimeout(paymentpo.page_loader)
    await library.fillTextbox(paymentpo.textboxRupayCardNo, CardNumber)
    await library.fillTextbox(paymentpo.textboxRupayExpMonth, CardExpiryMonth)
    await library.fillTextbox(paymentpo.textboxRupayExpYear, cardExpiryYear)
    await library.fillTextbox(paymentpo.textboxRupayCvv, CVV)
    await library.fillTextbox(paymentpo.textboxRupayCardholderName, CardHolderName)
    //await browser.pause(3000)
    await library.clickAction(paymentpo.buttonMakePayment)
    await library.pagetimeout(paymentpo.page_loader)
}
async function emi(CardNumber, CardExpiryMonth, cardExpiryYear, CVV, CardHolderName) {
    await library.clickAction(paymentpo.textOtherPayments)
    //await browser.pause(4000)
    await library.clickAction(paymentpo.imageEmi)
    await library.clickAction(paymentpo.checkboxTermsConditions)
    await library.clickAction(paymentpo.buttonOtherPay)
    await library.pagetimeout(paymentpo.page_loader)
    await library.clickAction(paymentpo.dropdownEmi)
    await library.clickAction(paymentpo.optionAxisCard)
    await library.clickAction(paymentpo.optionRupayEmi)
    await library.fillTextbox(paymentpo.rupaycardnumber, CardNumber)
    await library.fillTextbox(paymentpo.rupayexpmonth, CardExpiryMonth)
    await library.fillTextbox(paymentpo.rupayexpyear, cardExpiryYear)
    await library.fillTextbox(paymentpo.rupaycvv, CVV)
    await library.fillTextbox(paymentpo.rupaycardholdername, CardHolderName)
    //await browser.pause(3000)
    await library.clickAction(paymentpo.buttonMakePayment)
    await library.pagetimeout(paymentpo.page_loader)
}

exports.CardIssuedOutsideIndia = CardIssuedOutsideIndia;
exports.netbanking = netbanking;
exports.upi = upi;
exports.wallet = wallet;
exports.rupay = rupay;
exports.emi = emi;
exports.selectinsurance = selectinsurance;
