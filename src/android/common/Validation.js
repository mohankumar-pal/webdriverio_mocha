const validation = require('../pageobjects/validationpo')
const library = require('./Genericlibrary.js')
async function promocodevalidation(Doyouwanttoaddpromocode) {
    if (Doyouwanttoaddpromocode == "Yes") {
        await library.waituntilelementexistAction(validation.textPromoApplied)
        var promo = await library.gettextAction(validation.textPromoApplied)
        console.log(promo)
        return promo
    }
}
async function promocodepaymentpagevalidation(PromoCodeAtPaymentPage, Promocode) {
    if (PromoCodeAtPaymentPage == "Yes") {
        await library.clickAction(validation.textPromoCode)
        await library.filltextboxAction(validation.textboxPromoCode,Promocode)
        await library.clickAction(validation.buttonSubmitPromo)
        await library.waituntilelementexistAction(validation.textPromoApplied)
        await browser.pause(7000)
        var promotxt = await library.gettextAction(validation.textPromoApplied)
        console.log(promotxt)
        return promotxt
    }
}
async function currencyvalidation(IsConcessionary) {
    var currtxt = await library.gettextAction(validation.buttonFlightSelect)
    if (IsConcessionary == "Yes")
        var currency = currtxt.slice(33, 36)
    else
        var currency = currtxt.slice(23, 26)
    console.log("Currency: " + currency)
    return currency
}
async function multicitycurrencyvalidation() {
    var currtxt = await library.gettextAction(validation.textMulticityCurrency)
        //var currency = currtxt.slice(0, 3)
    console.log("Currency: " + currtxt)
    return currtxt
}
async function concessionvalidation(IsConcessionary) {
    
    if (IsConcessionary == "Yes") {
        await library.waituntilelementexistAction(validation.textConcessionApplied)
        var concession = await library.gettextAction(validation.textConcessionApplied)
        console.log(concession)
        return concession
    }
}
async function isAlphanumeric(str) {
    if((/^[a-zA-Z0-9]+$/.test(str))&&(str.length==6))
    {
       return true
    }
    else{
       return false
    }
 }
async function PNRvalidation() {
    await library.waituntilelementexistAction(validation.textConfirmation)
    await browser.pause(7000)
    const pnr = await validation.textPNR
    var PNR = await library.gettextAction(pnr)

    var PNRvalid = await isAlphanumeric(PNR)
    console.log("PNR Validation: " + PNRvalid)
    await expect(PNRvalid).toBe(true)
    return PNR
}
exports.promocodevalidation = promocodevalidation;
exports.currencyvalidation = currencyvalidation;
exports.multicitycurrencyvalidation = multicitycurrencyvalidation;
exports.concessionvalidation = concessionvalidation;
exports.promocodepaymentpagevalidation = promocodepaymentpagevalidation;
exports.PNRvalidation = PNRvalidation;