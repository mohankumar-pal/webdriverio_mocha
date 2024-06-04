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
async function paxnamevalidation(firstname, lastname) {
    var name = firstname + ' ' + lastname
    const paxname = '//XCUIElementTypeStaticText[@name="' + name + '"]'
    const paxloc = await $(paxname)
    await expect(paxloc).toBeExisting()
}
async function promocodepaymentpagevalidation(PromoCodeAtPaymentPage, Promocode) {
    if (PromoCodeAtPaymentPage == "Yes") {
        await library.clickAction(validation.textPromoCode)
        await library.filltextboxAction(validation.textboxPromoCode, Promocode)
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
        var currency = currtxt.slice(81, 84)
    else
        var currency = currtxt.slice(5, 8)
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
    //await library.downscrollAction()
    await library.swipeupAction()
    if (IsConcessionary == "Yes") {
        await library.waituntilelementexistAction(validation.textConcessionApplied)
        var concession = await library.gettextAction(validation.textConcessionApplied)
        console.log(concession)
        return concession
    }
}
async function isAlphanumeric(str) {
    if ((/^[a-zA-Z0-9]+$/.test(str)) && (str.length == 6)) {
        return true
    }
    else {
        return false
    }
}
async function PNRvalidation() {
    //await library.waituntilelementexistAction(validation.textConfirmation)
    await library.waituntilelementexistAction(validation.textPNR)
    await browser.pause(4000)
    const pnr = await validation.textPNR
    await library.clickAction(pnr)
    var PNR = await library.gettextAction(pnr)

    var PNRvalid = await isAlphanumeric(PNR)
    console.log("PNR Validation: " + PNRvalid)
    await expect(PNRvalid).toBe(true)
    return PNR
}
async function FlightStatusValidation(flightnumbers, fromcity, tocity, fromdate) {
    const flightnumber = '//XCUIElementTypeStaticText[contains(@name,"' + flightnumbers + '")]'
    const flightnumberloc = await $(flightnumber)
    await library.waituntilelementexistAction(flightnumberloc)
    await expect(flightnumberloc).toBeExisting()

    const from = '//XCUIElementTypeStaticText[@name="' + fromcity + '"]'
    const fromloc = await $(from)
    await expect(fromloc).toBeExisting()

    const to = '//XCUIElementTypeStaticText[@name="' + tocity + '"]'
    const toloc = await $(to)
    await expect(toloc).toBeExisting()

    const departuredate = '//XCUIElementTypeStaticText[contains(@name,"' + fromdate.slice(0, 6) + '")]'
    const departuredateloc = await $(departuredate)
    await expect(departuredateloc).toBeExisting()
}
async function FSCityDateValidation(fromcity, tocity, fromdate) {
    const from = '//XCUIElementTypeStaticText[@name="' + fromcity + '"]'
    const fromloc = await $(from)
    await expect(fromloc).toBeExisting()

    const to = '//XCUIElementTypeStaticText[@name="' + tocity + '"]'
    const toloc = await $(to)
    await expect(toloc).toBeExisting()

    const departuredate = '//XCUIElementTypeStaticText[contains(@name,"' + fromdate.slice(0, 6) + '")]'
    const departuredateloc = await $(departuredate)
    await expect(departuredateloc).toBeExisting()
}
async function FlightNumberValidation(flightnumbers) {
    const flightnumber = '//XCUIElementTypeStaticText[contains(@name,"' + flightnumbers + '")]'
    const flightnumberloc = await $(flightnumber)
    await library.waituntilelementexistAction(flightnumberloc)
    await expect(flightnumberloc).toBeExisting()
}

exports.promocodevalidation = promocodevalidation;
exports.currencyvalidation = currencyvalidation;
exports.multicitycurrencyvalidation = multicitycurrencyvalidation;
exports.concessionvalidation = concessionvalidation;
exports.promocodepaymentpagevalidation = promocodepaymentpagevalidation;
exports.PNRvalidation = PNRvalidation;
exports.paxnamevalidation = paxnamevalidation;
exports.FlightStatusValidation = FlightStatusValidation;
exports.FSCityDateValidation = FSCityDateValidation;
exports.FlightNumberValidation = FlightNumberValidation;
