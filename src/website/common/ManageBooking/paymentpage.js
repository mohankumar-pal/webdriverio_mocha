const library = require('../../common/Genericlibrary.js')
const managebookpo = require('../../pageobjects/ManageBooking/managebookingpo.js')
const paymentpo = require('../../pageobjects/OnewayRoundtrip/paymentpo.js')

async function NetBanking() {
    await library.clickAction(managebookpo.buttonOtherPayments)
    await library.clickAction(managebookpo.dropdownOnlineBanking)
    await library.clickAction(managebookpo.buttonNetbanking)
    await browser.pause(1000)
    await library.pagescrollAction(managebookpo.checkboxTermsCondition)
    await browser.pause(2000)
    await library.clickAction(managebookpo.checkboxTermsCondition)
    await browser.pause(2000)
    await library.pagescrollAction(managebookpo.buttonPayContinue)
    // await library.pagescrollAction(managebookpo.buttonPayContinue)
    // await library.pagescrollAction(managebookpo.buttonPayContinue)
    // await browser.pause(3000)
    await library.clickAction(managebookpo.buttonPayContinue)
    await library.waitforexistAction(managebookpo.linkInternebanking)

    await browser.pause(3000)
    await library.clickAction(managebookpo.optionBank)

    await browser.pause(2000)
    await library.clickAction(managebookpo.optionBankList)
    await library.clickAction(managebookpo.buttonMakePayment)

    await library.waitforexistAction(managebookpo.labelOptionVal)
    await library.clickAction(managebookpo.dropdownSelect)

    await browser.pause(3000)
    await library.clickAction(managebookpo.dropdownSelectList[1])
    await library.clickAction(managebookpo.buttonPaymentSubmit)



}
async function CreditCard(CardNumber, CardExpMonth, CardExpYear, CVV, CardHolderName, CardEmail, CardMobile, HouseNumber, ApartmentNumber, Pincode, City, Country, State) {
    await library.clickAction(managebookpo.buttonCardPaytment)
    await library.clickAction(managebookpo.dropdownCardType)
    await library.clickAction(managebookpo.optionAmex)
    await browser.pause(2000)
    await library.fillTextbox(managebookpo.textboxCardNumber, CardNumber)
    await library.pagetimeout(managebookpo.pageLoader)
    await browser.pause(5000)
    await library.fillTextbox(managebookpo.textboxHolderName, CardHolderName)
    await browser.pause(2000)
    await library.fillTextbox(managebookpo.textboxExpMonth, CardExpMonth)
    await library.fillTextbox(managebookpo.textboxExpYear, CardExpYear)
    await library.fillTextbox(managebookpo.textboxCVV, CVV)
    //await library.fillTextbox(managebookpo.textboxCardEmail,CardEmail)
    //await library.fillTextbox(managebookpo.textboxCardMobile,CardMobile)
    await library.fillTextbox(managebookpo.textboxCardhouseno, HouseNumber)
    await library.fillTextbox(managebookpo.textboxCardAddress, ApartmentNumber)
    await library.fillTextbox(managebookpo.textboxCardPincode, Pincode)
    await library.fillTextbox(managebookpo.textboxCardCity, City)
    await library.fillTextbox(managebookpo.textboxCardCountry, Country)
    await library.clickAction(managebookpo.optionCountry)
    //await managebookpo.textboxCardCountry.selectByVisibleText(Country)
    await library.clickAction(managebookpo.textboxCardState)
    await browser.pause(2000)
    await managebookpo.textboxCardState.selectByVisibleText(State)
    await browser.pause(1000)
    await library.pagescrollAction(managebookpo.checkboxTermsCondition)
    await browser.pause(2000)
    await library.clickAction(managebookpo.checkboxTermsCondition)
    await browser.pause(2000)
    await library.pagescrollAction(managebookpo.buttonPayContinue)
    await browser.pause(2000)
    // await library.pagescrollAction(managebookpo.labelPaymentMethod)
    // await browser.pause(2000)
    // await library.pagescrollAction(managebookpo.buttonPayContinue)
    // await browser.pause(3000)
    await library.clickAction(managebookpo.buttonPayContinue)
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
async function Emi() {
    await library.clickAction(managebookpo.imgEMI)
    await browser.pause(1000)
    await library.pagescrollAction(managebookpo.checkboxTermsCondition)
    await browser.pause(2000)
    await library.clickAction(managebookpo.checkboxTermsCondition)
    await browser.pause(2000)
    await library.pagescrollAction(managebookpo.buttonPayContinue)
    await pyt.mc_paymentval.scrollIntoView()
    await library.pagescrollAction(managebookpo.labelPaymentMethod)
    await library.pagescrollAction(managebookpo.buttonPayContinue)
    await browser.pause(3000)
    await library.clickAction(managebookpo.buttonPayContinue)
    await library.waitforexistAction(managebookpo.tabEmi)
    await library.clickAction(managebookpo.optionBankEmi)
}
async function Upi() {
    await library.clickAction(managebookpo.imgUpi)
    await browser.pause(1000)
    await library.pagescrollAction(managebookpo.checkboxTermsCondition)
    await browser.pause(2000)
    await library.clickAction(managebookpo.checkboxTermsCondition)
    await browser.pause(2000)
    await library.pagescrollAction(managebookpo.buttonPayContinue)
    await library.pagescrollAction(managebookpo.labelPaymentMethod)
    await library.pagescrollAction(managebookpo.buttonPayContinue)
    await browser.pause(3000)
    await library.clickAction(managebookpo.buttonPayContinue)
    await library.pagetimeout(managebookpo.pageLoader)
    await browser.pause(5000)
    await library.clickAction(managebookpo.buttonMakePayment)
    await library.pagetimeout(managebookpo.pageLoader)
}
async function Wallet() {
    await library.clickAction(managebookpo.imgWallet)
    await browser.pause(1000)
    await library.pagescrollAction(managebookpo.checkboxTermsCondition)
    await browser.pause(2000)
    await library.clickAction(managebookpo.checkboxTermsCondition)
    await browser.pause(2000)
    await library.pagescrollAction(managebookpo.buttonPayContinue)
    await library.pagescrollAction(managebookpo.labelPaymentMethod)
    await library.pagescrollAction(managebookpo.buttonPayContinue)
    await browser.pause(3000)
    await library.clickAction(managebookpo.buttonPayContinue)
    await library.pagetimeout(managebookpo.pageLoader)
    await browser.pause(5000)
    await library.clickAction(managebookpo.buttonMakePayment)
    await library.pagetimeout(managebookpo.pageLoader)

}
async function Rupay(CardNumber, CardExpMonth, CardExpYear, CVV, CardHolderName) {
    await library.clickAction(managebookpo.imgRupay)
    await browser.pause(1000)
    await library.pagescrollAction(managebookpo.checkboxTermsCondition)
    await browser.pause(2000)
    await library.clickAction(managebookpo.checkboxTermsCondition)
    await browser.pause(2000)
    await library.pagescrollAction(managebookpo.buttonPayContinue)
    await library.pagescrollAction(managebookpo.labelPaymentMethod)
    await library.pagescrollAction(managebookpo.buttonPayContinue)
    await browser.pause(3000)
    await library.clickAction(managebookpo.buttonPayContinue)
    await library.pagetimeout(managebookpo.pageLoader)
    await library.clickAction(managebookpo.emioption)
    await library.clickAction(managebookpo.optionRupaycredit)
    await library.clickAction(managebookpo.labelEmi)
    await library.fillTextbox(managebookpo.textboxRupayCardNumber, CardNumber)
    await library.fillTextbox(managebookpo.textboxRupayExpMonth, CardExpMonth)
    await library.fillTextbox(managebookpo.textboxRupayExpYear, CardExpYear)
    await library.fillTextbox(managebookpo.textboxRupayCVV, CVV)
    await library.fillTextbox(managebookpo.textboxRupayCardholderName, CardHolderName)
    await browser.pause(3000)
    await library.clickAction(managebookpo.buttonMakePayment)
    await library.pagetimeout(managebookpo.pageLoader)
}
exports.NetBanking = NetBanking;
exports.CreditCard = CreditCard;
exports.Upi = Upi;
exports.Emi = Emi;
exports.Wallet = Wallet;
exports.Rupay = Rupay;
