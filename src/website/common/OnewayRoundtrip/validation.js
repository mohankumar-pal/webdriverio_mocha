const validationpo = require('../../pageobjects/validationpo.js')
const library = require('../Genericlibrary.js')

async function promocodevalidation(Doyouwanttoaddpromocode) {
    if (Doyouwanttoaddpromocode == "Yes") {
        await library.waitforexistAction(validationpo.textPromoCode)
        var promotxt = await library.gettextAction(validationpo.textPromoCode)
        console.log(promotxt)
        return promotxt
    }
    else {
        return ''
    }
}
async function concessionvalidation(IsConcessionary) {
    if (IsConcessionary == "Yes") {
        await library.waitforexistAction(validationpo.textConcessionApplied)
        await library.pagescrolltomiddleAction(validationpo.textConcessionApplied)
        await browser.pause(4000)
        var concessiontxt = await library.gettextAction(validationpo.textConcessionApplied)
        console.log(concessiontxt)
        return concessiontxt
    }
    else {
        return ''
    }
}
async function currencyvalidation() {
    var currencytxt = await library.gettextAction(validationpo.textCurrency[0])
    return currencytxt
}
async function fromtovalidation(From, To) {
    console.log(await validationpo.textDepartureCode.length)
    for (var i = 0; i < await validationpo.textDepartureCode.length; i++) {
        var FromText = await library.gettextAction(validationpo.textDepartureCode[i])
        await expect(FromText).toBe(From)
        var ToText = await library.gettextAction(validationpo.textArrivalCode[i])
        await expect(ToText).toBe(To)
    }
}
async function OWdeparturedatevalidation(Departuredate) {
    console.log(await validationpo.textDepartureDate.length)
    var depdate = Departuredate.slice(0, 6)
    for (var j = 0; j < await validationpo.textDepartureDate.length; j++) {
        var Date = await validationpo.textDepartureDate[j]
        await expect(Date).toHaveTextContaining(depdate)
    }

}
async function RTdeparturedatevalidation(Departuredate) {
    var depdate = Departuredate.slice(0, 6)
    for (var j = 0; j < await validationpo.textDepartureDate.length; j++) {
        var Date = await validationpo.textDepartureDate[j]
        await expect(Date).toHaveTextContaining(depdate)
    }
}
async function RTreturndatevalidation(Returndate) {
    var retdate = Returndate.slice(0, 6)
    for (var j = 0; j < await validationpo.textArrivalDate.length; j++) {
        var Date = await validationpo.textArrivalDate[j]
        await expect(Date).toHaveTextContaining(retdate)
    }
}
async function paxcountvalidation(NumberofAdult, NumberofChild, NumberofInfant) {
    var pax = await library.gettextAction(validationpo.textPaxCount)
    var paxcount = parseInt(pax.slice(1, 2))
    var inputtedpaxcount = parseInt(NumberofAdult) + parseInt(NumberofChild) + parseInt(NumberofInfant)
    await expect(paxcount).toBe(inputtedpaxcount)
}
async function isAlphanumeric(str) {
    if ((/^[a-zA-Z0-9]+$/.test(str)) && (str.length == 6)) {
        return true
    }
    else {
        return false
    }
}
async function PNRvalidation(PNR) {
    var PNRvalid = await isAlphanumeric(PNR)
    console.log("PNR Validation: " + PNRvalid)
    await expect(PNRvalid).toBe(true)
    return PNR
}
async function FSorigindestinationvalidation() {
    var FromText = await library.gettextAction(validationpo.textFlightStatusFrom)
    await expect(FromText).toBeExisting()
}
async function FStotalduration() {
    await library.waitforexistAction(validationpo.textTotalDuration)
    await expect(validationpo.textTotalDuration).toBeDisplayed()
}
async function flightcodevalidation(InputtedFlightCode) {
    var code = await library.gettextAction(validationpo.textFlightCode)
    var flightcode = code.slice(4,8)
    await expect(flightcode).toBe(InputtedFlightCode)
}

exports.concessionvalidation = concessionvalidation;
exports.promocodevalidation = promocodevalidation;
exports.currencyvalidation = currencyvalidation;
exports.fromtovalidation = fromtovalidation;
exports.OWdeparturedatevalidation = OWdeparturedatevalidation;
exports.RTreturndatevalidation = RTreturndatevalidation;
exports.RTdeparturedatevalidation = RTdeparturedatevalidation;
exports.paxcountvalidation = paxcountvalidation;
exports.PNRvalidation = PNRvalidation;
exports.FSorigindestinationvalidation = FSorigindestinationvalidation;
exports.FStotalduration = FStotalduration;
exports.flightcodevalidation = flightcodevalidation;