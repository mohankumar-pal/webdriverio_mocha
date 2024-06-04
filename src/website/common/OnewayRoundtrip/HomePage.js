const library = require('../../common/Genericlibrary.js')
const homepo = require('../../pageobjects/OnewayRoundtrip/Homepagepo.js')

async function fromto(From, To) {
    await browser.pause(4000)
    await library.pagescrolltomiddleAction(homepo.textboxFrom)
    await library.fillTextbox(homepo.textboxFrom, From)
    await library.waitforexistAction(homepo.optionFromToSugg[0])
    await browser.pause(2000)
    const from = '//span[@class="airport-code-detail" and text()="' + From + '"]'
    const fromloc = await $(from)
    await library.clickAction(fromloc)
    // for (var sp = 0; sp < await homepo.optionFromToSugg.length; sp++) {
    //     var sptext = await library.gettextAction(homepo.optionFromToSugg[sp])
    //     if (sptext == From) {
    //         await library.clickAction(homepo.optionFromToSugg[sp])
    //     }
    // }
    //await browser.pause(3000)
    await library.fillTextbox(homepo.to, To)
    await library.waitforexistAction(homepo.optionFromToSugg[0])
    await browser.pause(2000)
    const to = '//span[@class="airport-code-detail" and text()="' + To + '"]'
    const toloc = await $(to)
    await library.clickAction(toloc)
    // for (var sp1 = 0; sp1 < await homepo.optionFromToSugg.length; sp1++) {
    //     var sptest = await library.gettextAction(homepo.optionFromToSugg[sp1])
    //     if (sptest == To) {
    //         await library.clickAction(homepo.optionFromToSugg[sp1])
    //     }
    // }

}
async function androidfromto(From, To) {
    await browser.pause(4000)
    await library.clickAction(homepo.textboxAndroidFrom)
    await library.pagescrolltomiddleAction(homepo.textboxEnterFrom)
    await library.clearAction(homepo.textboxEnterFrom)
    await library.clickAction(homepo.textboxAndroidFrom)
    await library.fillTextbox(homepo.textboxEnterFrom, From)
    await library.waitforexistAction(homepo.optionFromToSugg[0])
    await browser.pause(2000)
    const from = '//span[@class="airport-code-detail" and text()="' + From + '"]'
    const fromloc = await $(from)
    await library.clickAction(fromloc)
    await library.clickAction(homepo.textboxAndroidTo)
    //await library.clearAction(homepo.to)
    await library.fillTextbox(homepo.textboxEnterTo, To)
    await library.waitforexistAction(homepo.optionFromToSugg[0])
    await browser.pause(2000)
    const to = '//span[@class="airport-code-detail" and text()="' + To + '"]'
    const toloc = await $(to)
    await library.clickAction(toloc)

}
async function AIsignin() {
    await browser.pause(5000)
    if (await library.elementdisplayedAction(homepo.textboxSigninEmail)) {
        await library.waitfordisplayedAction(homepo.textboxSigninEmail)
        await browser.pause(2000)
        await library.fillTextbox(homepo.textboxSigninEmail, "qa.automation@airindia.com")
        await browser.pause(2000)
        await library.clickAction(homepo.buttonSigninSubmit)
        await browser.pause(2000)
        await library.fillTextbox(homepo.textboxSigninPassword, "Automation*12345")
        await browser.pause(2000)
        await library.clickAction(homepo.buttonSigninSubmit)
        await browser.pause(2000)
        await library.clickAction(homepo.buttonSigninNo)
        await library.waitforexistAction(homepo.buttonSearchFlights)
    }
}
async function ReSignIn() {
    if (await library.elementdisplayedAction(homepo.rowSelectEmail)) {
        await library.clickAction(homepo.rowSelectEmail)
        await browser.pause(2000)
        await library.fillTextbox(homepo.textboxSigninPassword, "Automation*12345")
        await browser.pause(2000)
        await library.clickAction(homepo.buttonSigninSubmit)
        await browser.pause(2000)
        await library.clickAction(homepo.buttonSigninNo)
    }
}
async function incidentpage() {
    if (await library.elementdisplayedAction(homepo.buttonGoToHome))
        await library.clickAction(homepo.buttonGoToHome)
    //await browser.pause(2000)
}
async function selectoneway() {
    await library.clickAction(homepo.dropdownTripType)
    await library.clickAction(homepo.optionOneway)
    //await library.pagescrolltomiddleAction(homepo.buttonShowFlights)
}
async function androidselectoneway() {
    await library.clickAction(homepo.radiobtnTripType[0])
    await library.pagescrolltomiddleAction(homepo.buttonShowFlights)
}
async function selectroundtrip() {
    await library.clickAction(homepo.radiobtnTripType[1])
    await library.pagescrolltomiddleAction(homepo.buttonShowFlights)
}
async function departcalendar(departdate) {

    var dep = departdate
    var depdate = dep.slice(0, 2)
    var dearturedatetext = parseInt(depdate)
    var depmonyear = dep.slice(3, 16)

    //await browser.pause(5000)
    for (var i = 0; i < 12; i++) {
        var monyrtxt = await library.gettextAction(homepo.textMonthYear[2])
        if (depmonyear == monyrtxt) {
            for (var j = 0; j < await homepo.buttonDate.length; j++) {
                var day0text = await library.gettextAction(homepo.buttonDate[j])

                if (dearturedatetext == day0text) {
                    await library.clickAction(homepo.buttonDate[j])
                    break;
                }

            }
            break;
        }

        else {
            await library.clickAction(homepo.buttonNextMonthArrow)
            //await browser.pause(2000)
        }
    }
}

async function passengerselection(NumberofAdult, NumberofChild, NumberofInfant) {
    await library.clickAction(homepo.dropdownPaxCount)
    if (NumberofAdult > 1) {
        var adt = NumberofAdult - 1
        await library.paxselection(homepo.buttonAdd[0], adt)
    }
    await library.paxselection(homepo.buttonAdd[1], NumberofChild)
    await library.paxselection(homepo.buttonAdd[2], NumberofInfant)
}
async function androidpassengerselection(NumberofAdult, NumberofChild, NumberofInfant) {
    await library.clickAction(homepo.dropdownAndroidPax)
    await browser.pause(3000)
    if (NumberofAdult > 1) {
        var adt = NumberofAdult - 1
        await library.paxselection(homepo.buttonAdd[3], adt)
    }
    await library.paxselection(homepo.buttonAdd[4], NumberofChild)
    await library.paxselection(homepo.buttonAdd[5], NumberofInfant)
    await library.clickAction(homepo.buttonAndroidConfirmPax)

}
async function cabinselection(CabinType) {
    await library.clickAction(homepo.dropdownClassType)
    await browser.pause(2000)
    await library.drpdwn(homepo.optionClassTypeList, CabinType)
}

async function concessionselection(ConcessionaryType) {
    await library.clickAction(homepo.dropdownConcessionType)
    await library.drpdwn(homepo.optionConcessionTypeList, ConcessionaryType)
}
async function promotioncode(Promocode) {
    await library.clickAction(homepo.buttonPromoCode)
    await library.fillTextbox(homepo.textboxPromoCode, Promocode)
}
exports.fromto = fromto;
exports.androidfromto = androidfromto;
exports.departcalendar = departcalendar;
exports.passengerselection = passengerselection;
exports.androidpassengerselection = androidpassengerselection;
exports.cabinselection = cabinselection;
exports.concessionselection = concessionselection;
exports.promotioncode = promotioncode;
exports.incidentpage = incidentpage;
exports.selectoneway = selectoneway;
exports.androidselectoneway = androidselectoneway;
exports.selectroundtrip = selectroundtrip;
exports.AIsignin = AIsignin;
exports.ReSignIn = ReSignIn;
