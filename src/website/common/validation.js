const validationpo = require('../../../src/website/pageobjects/validationpo.js')
const library = require('../common/Genericlibrary.js')

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
async function currencyvalidationMC() {
    var currencytxt = await library.gettextAction(validationpo.textCurrencyMC[0])
    return currencytxt
}
async function RTfromtovalidation(From, To) {
    var FromText = await library.gettextAction(validationpo.textDepartureCode[0])
    await expect(FromText).toBe(From)
    var ToText = await library.gettextAction(validationpo.textArrivalCode[0])
    await expect(ToText).toBe(To)
    var FromText = await library.gettextAction(validationpo.textDepartureCode[1])
    await expect(FromText).toBe(To)
    var ToText = await library.gettextAction(validationpo.textArrivalCode[1])
    await expect(ToText).toBe(From)
}
async function RTfromtodeparturevalidations(From, To) {
    for (var i = 2; i < await validationpo.textDepartureCode.length; i++) {
        var FromText = await library.gettextAction(validationpo.textDepartureCode[i])
        await expect(FromText).toBe(From)
        var ToText = await library.gettextAction(validationpo.textArrivalCode[i])
        await expect(ToText).toBe(To)
    }
}
async function RTfromtoarrivalvalidations(From, To) {
    for (var i = 2; i < await validationpo.textDepartureCode.length; i++) {
        var FromText = await library.gettextAction(validationpo.textDepartureCode[1])
        await expect(FromText).toBe(To)
        var ToText = await library.gettextAction(validationpo.textArrivalCode[1])
        await expect(ToText).toBe(From)
    }
}
async function OWfromtovalidation(From, To) {
    var FromText = await library.gettextAction(validationpo.textDepartureCode[0])
    await expect(FromText).toBe(From)
    var ToText = await library.gettextAction(validationpo.textArrivalCode[0])
    await expect(ToText).toBe(To)
}
async function OWfromtovalidations(From, To) {
    for (var i = 0; i < await validationpo.textDepartureCode.length; i++) {
        var FromText = await library.gettextAction(validationpo.textDepartureCode[i])
        await expect(FromText).toBe(From)
        var ToText = await library.gettextAction(validationpo.textArrivalCode[i])
        await expect(ToText).toBe(To)
    }
}
async function MCSegment1fromtovalidation(From, To) {
    var from1 = "(" + From + ")"
    var FromText = await library.gettextAction(validationpo.textSegment1FromTo[0])
    await expect(FromText).toBe(from1)
    var to1 = "(" + To + ")"
    var ToText = await library.gettextAction(validationpo.textSegment1FromTo[1])
    await expect(ToText).toBe(to1)
}
async function MCSegment2fromtovalidation(From, To) {
    var from1 = "(" + From + ")"
    var FromText = await library.gettextAction(validationpo.textSegment2FromTo[0])
    await expect(FromText).toBe(from1)
    var to1 = "(" + To + ")"
    var ToText = await library.gettextAction(validationpo.textSegment2FromTo[1])
    await expect(ToText).toBe(to1)
}
async function MCSegment3fromtovalidation(From, To) {
    var from1 = "(" + From + ")"
    var FromText = await library.gettextAction(validationpo.textSegment3FromTo[0])
    await expect(FromText).toBe(from1)
    var to1 = "(" + To + ")"
    var ToText = await library.gettextAction(validationpo.textSegment3FromTo[1])
    await expect(ToText).toBe(to1)
}
async function MCSegment4fromtovalidation(From, To) {
    var from1 = "(" + From + ")"
    var FromText = await library.gettextAction(validationpo.textSegment4FromTo[0])
    await expect(FromText).toBe(from1)
    var to1 = "(" + To + ")"
    var ToText = await library.gettextAction(validationpo.textSegment4FromTo[1])
    await expect(ToText).toBe(to1)
}
async function OWdeparturedatevalidation(Departuredate) {
    console.log(await validationpo.textDepartureDate.length)
    var depdate = Departuredate.slice(0, 6)
    //var depdate = Departuredate.slice(0, 2)
    depdate = depdate.replace(/^0+/, '');
    for (var j = 0; j < await validationpo.textDepartureDate.length; j++) {
        var Date = await validationpo.textDepartureDate[j]
        await expect(Date).toHaveTextContaining(depdate,{ignoreCase: true})
    }

}
async function RTdeparturedatevalidation(Departuredate) {
    var depdate = Departuredate.slice(0, 6)
    depdate = depdate.replace(/^0+/, '');
    //for (var j = 0; j < await validationpo.textDepartureDate.length; j++) {
    var Date = await validationpo.textBoundDate[0]
    await expect(Date).toHaveTextContaining(depdate,{ignoreCase: true})
    //}
}
async function RTdeparturedatevalidations(Departuredate) {
    var depdate = Departuredate.slice(0, 6)
    depdate = depdate.replace(/^0+/, '');
    for (var j = 2; j < await validationpo.textDepartureDate.length; j++) {
        var Date = await validationpo.textDepartureDate[j]
        await expect(Date).toHaveTextContaining(depdate,{ignoreCase: true})
    }
}
async function RTreturndatevalidation(Returndate) {
    var retdate = Returndate.slice(0, 6)
    retdate = retdate.replace(/^0+/, '');
    //for (var j = 0; j < await validationpo.textArrivalDate.length; j++) {
    var Date = await validationpo.textBoundDate[1]
    await expect(Date).toHaveTextContaining(retdate,{ignoreCase: true})
    //}
}
async function RTreturndatevalidations(Returndate) {
    var retdate = Returndate.slice(0, 6)
    retdate = retdate.replace(/^0+/, '');
    for (var j = 2; j < await validationpo.textArrivalDate.length; j++) {
        var Date = await validationpo.textArrivalDate[j]
        await expect(Date).toHaveTextContaining(retdate,{ignoreCase: true})
    }
}
async function MCSegment1departuredatevalidation(Departuredate) {
    var depdate = Departuredate.slice(0, 2)
    var dep1date = parseInt(depdate)
    var depmon = Departuredate.slice(2, 6)
    var depdatmon = dep1date + depmon

    for (var j = 0; j < await validationpo.textMCDepartureDate1.length; j++) {
        var dateval = await library.gettextAction(validationpo.textMCDepartureDate1[j])
        //var MCdepdate=dateval.slice(4,9)

        await expect(dateval).toHaveTextContaining(depdatmon)
    }

}
async function MCSegment2departuredatevalidation(Departuredate) {
    var depdate = Departuredate.slice(0, 2)
    var dep1date = parseInt(depdate)
    var depmon = Departuredate.slice(2, 6)
    var depdatmon = dep1date + depmon
    for (var j = 0; j < await validationpo.textMCDepartureDate2.length; j++) {
        var dateval = await library.gettextAction(validationpo.textMCDepartureDate2[j])
        //  var MCdepdate=dateval.slice(4,9)
        await expect(dateval).toHaveTextContaining(depdatmon)
    }

}
async function MCSegment3departuredatevalidation(Departuredate) {
    var depdate = Departuredate.slice(0, 2)
    var dep1date = parseInt(depdate)
    var depmon = Departuredate.slice(2, 6)
    var depdatmon = dep1date + depmon
    for (var j = 0; j < await validationpo.textMCDepartureDate3.length; j++) {
        var dateval = await library.gettextAction(validationpo.textMCDepartureDate3[j])

        //  var MCdepdate=dateval.slice(4,9)
        await expect(dateval).toHaveTextContaining(depdatmon)
    }

}
async function MCSegment4departuredatevalidation(Departuredate) {

    var depdate = Departuredate.slice(0, 2)
    var dep1date = parseInt(depdate)
    var depmon = Departuredate.slice(2, 6)
    var depdatmon = dep1date + depmon
    for (var j = 0; j < await validationpo.textMCDepartureDate4.length; j++) {
        var dateval = await library.gettextAction(validationpo.textMCDepartureDate4[j])
        // var MCdepdate=dateval.slice(4,9)
        await expect(MCdepdate).toHaveTextContaining(depdatmon)
    }

}
async function paxcountvalidation(NumberofAdult, NumberofChild, NumberofInfant) {
    var pax = await library.gettextAction(validationpo.textPaxCount)
    var paxcount = parseInt(pax.slice(1, 2))
    var inputtedpaxcount = parseInt(NumberofAdult) + parseInt(NumberofChild) + parseInt(NumberofInfant)
    await expect(paxcount).toBe(inputtedpaxcount)
}
async function MCpaxcountvalidation(NumberofAdult, NumberofChild, NumberofInfant) {
    var pax = await library.gettextAction(validationpo.textMCPaxCount)
    var paxcount = parseInt(pax.slice(0, 1))
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
}
async function FSorigindestinationvalidation() {
    var FromText = await validationpo.textFlightStatusFrom
    await expect(FromText).toBeExisting()
    var ToText = await validationpo.textFlightStatusTo
    await expect(ToText).toBeExisting()
}
async function FScityvalidation(from, to) {
    var FromText = await validationpo.textFlightStatusFrom
    await expect(FromText).toHaveTextContaining(from)
    var ToText = await validationpo.textFlightStatusTo
    await expect(ToText).toHaveTextContaining(to)
}
async function FSorigincityvalidation(from) {
    var FromText = await validationpo.textFlightStatusFrom
    await expect(FromText).toHaveTextContaining(from)
}
async function FSdestinationvalidation(to) {
    var ToText = await validationpo.textFlightStatusTo
    await expect(ToText).toHaveTextContaining(to)
}
async function FSlastdestinationvalidation(to, count) {
    const To = '(//div[contains(@class,"arrival")]/h4[contains(@class,"aiport-name")])[' + count + ']'
    const ToText = await $(To)
    //var ToText = await validationpo.textFlightStatusTo
    await expect(ToText).toHaveTextContaining(to)
}
async function FStotalduration() {
    await library.waitforexistAction(validationpo.textTotalDuration)
    await expect(validationpo.textTotalDuration).toBeDisplayed()
    await library.pagescrollAction(validationpo.textTotalDuration)
    console.log(await library.gettextAction(validationpo.textTotalDuration))
}
async function flightcodevalidation(InputtedFlightCode) {
    const flightcode = '//span[contains(text(),"' + InputtedFlightCode + '")]'
    const flightcodeloc = await $(flightcode)
    await expect(flightcodeloc).toBeExisting()
    // var code = await library.gettextAction(validationpo.textFlightCode)
    // var flightcode = code.slice(4, 7)
    // await expect(flightcode).toBe(InputtedFlightCode)
}
async function lastflightcodevalidation(InputtedFlightCode, count) {
    const flightcode = '(//span[contains(text(),"' + InputtedFlightCode + '")])[' + count + ']'
    const flightcodeloc = await $(flightcode)
    await expect(flightcodeloc).toBeExisting()
}
async function FSdatevalidation(FromDate) {
    FromDate = FromDate.replace(/^0+/, '');
    const date = '//div[contains(@class,"departure")]/p/span[contains(text(),"' + FromDate + '")]'
    const dateloc = await $(date)
    await expect(dateloc).toBeExisting()
    // var displayeddate = await library.gettextAction(await validationpo.textDate)
    // var inputteddate = FromDate.slice(0, 6)
    // if (await displayeddate.includes(inputteddate))
    //     console.log("Date validation successful")
    // else
    //     throw new Error("Displayed date does not match inputted date!")
}
async function FSlastdatevalidation(FromDate, count) {
    FromDate = FromDate.replace(/^0+/, '');
    const date = '(//div[contains(@class,"departure")]/p/span[contains(text(),"' + FromDate + '")])[' + count + ']'
    const dateloc = await $(date)
    await expect(dateloc).toBeExisting()
}
async function FStimingvalidation(fromtiming, totiming) {
    // const from = '//span[text()="' + fromtiming + '"]'
    // const fromtime = await $(from)
    // await expect(fromtime).toBeExisting()
    // const to = '//span[text()="' + totiming + '"]'
    // const totime = await $(to)
    // await expect(totime).toBeExisting()
    const departuretiming = await library.gettextAction(validationpo.textFlightTimings[0])
    const arrivaltiming = await library.gettextAction(validationpo.textFlightTimings[1])
    if (departuretiming != fromtiming || arrivaltiming != totiming) {
        var e = 'Flight Timing not matching!'
        throw e;
    }

}
async function FSfirsttimingvalidation(fromtiming) {
    const departuretiming = await library.gettextAction(validationpo.textFlightTimings[0])
    if (departuretiming != fromtiming) {
        var e = 'Flight Timing not matching!'
        throw e;
    }
}
async function FSlasttimingvalidation(totiming, count) {
    const arrival = '(//span[@class="flightStatusTime"])[' + count + ']'
    const arrivalloc = await $(arrival)
    const arrivaltiming = await library.gettextAction(arrivalloc)
    if (arrivaltiming != totiming) {
        var e = 'Flight Timing not matching!'
        throw e;
    }

}
async function FSC_RT_origindestinationvalidation(From, To) {
    var displayedFrom = await validationpo.textOrigin[0]
    await expect(displayedFrom).toHaveTextContaining(From)
    var displayedTo = await validationpo.textDestination[0]
    await expect(displayedTo).toHaveTextContaining(To)
    var displayedFrom = await validationpo.textOrigin[1]
    await expect(displayedFrom).toHaveTextContaining(To)
    var displayedTo = await validationpo.textDestination[1]
    await expect(displayedTo).toHaveTextContaining(From)
}
async function FSC_OW_origindestinationvalidation(From, To) {
    var displayedFrom = await validationpo.textOrigin[0]
    await expect(displayedFrom).toHaveTextContaining(From)
    var displayedTo = await validationpo.textDestination[0]
    await expect(displayedTo).toHaveTextContaining(To)
}
async function FSC_RT_datevalidation(FromDate, ToDate) {
    var dep = FromDate
    var inputteddate = dep.slice(0, 2)
    var inputtedmonth = dep.slice(3, 6)
    var inputtedyear = dep.slice(7, 11)
    console.log(await validationpo.textFSCdate[0].getText())
    var displayedfromdate = await validationpo.textFSCdate[0]
    await expect(displayedfromdate).toHaveTextContaining(inputteddate)
    // console.log(await validationpo.textFSCmonthyear[0].getText())
    // var displayedmonthyear = await validationpo.textFSCmonthyear[0]
    // await expect(displayedmonthyear).toHaveTextContaining(inputtedmonth)
    // await expect(displayedmonthyear).toHaveTextContaining(inputtedyear)

    var ret = ToDate
    var inputteddate = ret.slice(0, 2)
    var inputtedmonth = ret.slice(3, 6)
    var inputtedyear = ret.slice(7, 11)
    console.log(await validationpo.textFSCdate[2].getText())
    var displayedtodate = await validationpo.textFSCdate[2]
    await expect(displayedtodate).toHaveTextContaining(inputteddate)
    // console.log(await validationpo.textFSCmonthyear[2].getText())
    // var displayedmonthyear = await validationpo.textFSCmonthyear[2]
    // await expect(displayedmonthyear).toHaveTextContaining(inputtedmonth)
    // await expect(displayedmonthyear).toHaveTextContaining(inputtedyear)
}
async function FSC_OW_datevalidation(FromDate) {
    var dep = FromDate
    var inputteddate = dep.slice(0, 2)
    var inputtedmonth = dep.slice(3, 6)
    var inputtedyear = dep.slice(7, 11)
    console.log(await validationpo.textFSCdate[0].getText())
    var displayedfromdate = await validationpo.textFSCdate[0]
    await expect(displayedfromdate).toHaveTextContaining(inputteddate)
    // console.log(await validationpo.textFSCmonthyear[0].getText())
    // var displayedmonthyear = await validationpo.textFSCmonthyear[0]
    // await expect(displayedmonthyear).toHaveTextContaining(inputtedmonth)
    // await expect(displayedmonthyear).toHaveTextContaining(inputtedyear)
}
async function cancelandrefundvalidation() {
    await expect(validationpo.textConfirmation).toHaveTextContaining('Booking cancelled and refunded')
}


exports.concessionvalidation = concessionvalidation;
exports.promocodevalidation = promocodevalidation;
exports.currencyvalidation = currencyvalidation;
exports.RTfromtovalidation = RTfromtovalidation;
exports.OWfromtovalidation = OWfromtovalidation;
exports.OWdeparturedatevalidation = OWdeparturedatevalidation;
exports.RTreturndatevalidation = RTreturndatevalidation;
exports.RTdeparturedatevalidation = RTdeparturedatevalidation;
exports.paxcountvalidation = paxcountvalidation;
exports.PNRvalidation = PNRvalidation;
exports.FSorigindestinationvalidation = FSorigindestinationvalidation;
exports.FStotalduration = FStotalduration;
exports.flightcodevalidation = flightcodevalidation;
exports.lastflightcodevalidation = lastflightcodevalidation;
exports.FSdatevalidation = FSdatevalidation;
exports.FSlastdatevalidation = FSlastdatevalidation;
exports.FSC_RT_origindestinationvalidation = FSC_RT_origindestinationvalidation;
exports.FSC_OW_origindestinationvalidation = FSC_OW_origindestinationvalidation;
exports.FSC_RT_datevalidation = FSC_RT_datevalidation;
exports.FSC_OW_datevalidation = FSC_OW_datevalidation;
exports.currencyvalidationMC = currencyvalidationMC;
exports.MCSegment1fromtovalidation = MCSegment1fromtovalidation;
exports.MCSegment2fromtovalidation = MCSegment2fromtovalidation;
exports.MCSegment3fromtovalidation = MCSegment3fromtovalidation;
exports.MCSegment4fromtovalidation = MCSegment4fromtovalidation;
exports.MCSegment1departuredatevalidation = MCSegment1departuredatevalidation;
exports.MCSegment2departuredatevalidation = MCSegment2departuredatevalidation;
exports.MCSegment3departuredatevalidation = MCSegment3departuredatevalidation;
exports.MCSegment4departuredatevalidation = MCSegment4departuredatevalidation;
exports.MCpaxcountvalidation = MCpaxcountvalidation;
exports.cancelandrefundvalidation = cancelandrefundvalidation;
exports.OWfromtovalidations = OWfromtovalidations;
exports.RTfromtodeparturevalidations = RTfromtodeparturevalidations;
exports.RTfromtoarrivalvalidations = RTfromtoarrivalvalidations;
exports.RTdeparturedatevalidations = RTdeparturedatevalidations;
exports.RTreturndatevalidations = RTreturndatevalidations;
exports.FScityvalidation = FScityvalidation;
exports.FStimingvalidation = FStimingvalidation;
exports.FSorigincityvalidation = FSorigincityvalidation;
exports.FSfirsttimingvalidation = FSfirsttimingvalidation;
exports.FSdestinationvalidation = FSdestinationvalidation;
exports.FSlastdestinationvalidation = FSlastdestinationvalidation;
exports.FSlasttimingvalidation = FSlasttimingvalidation;
