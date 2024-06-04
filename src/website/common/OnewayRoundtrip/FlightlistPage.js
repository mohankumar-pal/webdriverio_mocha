const flightlistpo = require('../../pageobjects/OnewayRoundtrip/Flightlistpagepo.js')
const library = require('../../common/Genericlibrary.js')

async function flightselection(user_fl_type, cabloc) {
    for (var i = 0; i < await flightlistpo.textFlightStop.length; i++) {
        for (var j = 0; j < await flightlistpo.textFlightStop.length; j++) {
            var stoptext = await library.gettextAction(flightlistpo.textFlightStop[j])
            if (stoptext.includes(user_fl_type)) {
                await library.pagescrolltomiddleAction(flightlistpo.textFlightStop[j])
                await library.clickAction(cabloc[j])
                await library.pagescrollAction(flightlistpo.textFlightDetail[j])
                break;
            }
        }
        if (!stoptext.includes(user_fl_type)) {
            await library.pagescrolltomiddleAction(cabloc[0])
            await library.clickAction(cabloc[0])
            await library.pagescrollAction(flightlistpo.textFlightDetail[0])
        }
        break;
    }
}
async function selectfillpaxbutton() {
    await library.pagescrollAction(flightlistpo.buttonFillPax)
    await library.waitforexistAction(flightlistpo.buttonFillPax)
    await library.clickAction(flightlistpo.buttonFillPax)
    await library.pagetimeout(flightlistpo.page_loader)
    //await browser.pause(4000)
}
async function gotoflights() {
    await browser.pause(3000)
    if (await library.isclickableAction(flightlistpo.buttonShowFlights))
        await library.clickAction(flightlistpo.buttonShowFlights)
    await browser.pause(3000)
    await library.pagetimeout(flightlistpo.page_loader)
    await browser.pause(2000)
    await library.waitforexistAction(flightlistpo.textFlights)
    await browser.pause(2000)
}
async function cabinselection(user_cabin, DoYouWanttoUpgrade) {
    for (var i = 0; i < await flightlistpo.textCabinList.length; i++) {
        var cabtxt = await library.gettextAction(flightlistpo.textCabinList[i])
        if (cabtxt == user_cabin) {
            await library.clickAction(flightlistpo.buttonFareSelection[i])
            break;
        }
    }
    if (cabtxt != user_cabin) {
        await library.clickAction(flightlistpo.buttonFareSelection[0])

    }
    await browser.pause(3000)
    if (await library.elementdisplayedAction(flightlistpo.buttonKeepCurrCabin)) {
        await upgrade(DoYouWanttoUpgrade)
    }
    await library.pagetimeout(flightlistpo.page_loader)
    //await browser.pause(10000)
}
async function upgrade(upgr) {
    if (upgr == "Yes") {
        await library.clickAction(flightlistpo.upgrade_cabin)
    }
    else {
        await library.clickAction(flightlistpo.buttonKeepCurrCabin)
    }
}
async function changefrom(From2) {
    await library.clearAction(flightlistpo.textboxModifyFrom)
    await library.fillTextbox(flightlistpo.textboxModifyFrom, From2)
    await library.waitforexistAction(flightlistpo.optionModifyFromSugg[0])
    //await browser.pause(2000)
    await library.clickAction(flightlistpo.optionModifyFromSugg[0])
}
async function changeto(To2) {
    await library.clearAction(flightlistpo.textboxModifyTo)
    await library.fillTextbox(flightlistpo.textboxModifyTo, To2)
    await library.waitforexistAction(flightlistpo.optionModifyFromSugg[0])
    //await browser.pause(2000)
    await library.clickAction(flightlistpo.optionModifyFromSugg[0])
}
async function changepax(AdultCount, ChildCount, InfantCount, NumberofAdult, NumberofChild, NumberofInfant) {
    await library.clickAction(flightlistpo.iconPax)
    //await browser.pause(2000)
    await library.waitforexistAction(flightlistpo.textAddPax[0])
    if (AdultCount > NumberofAdult) {
        var adt = AdultCount - NumberofAdult
        await library.paxselection(flightlistpo.textAddPax[0], adt)
    }
    else if (AdultCount < NumberofAdult) {
        var adt1 = NumberofAdult - AdultCount
        await library.paxselection(flightlistpo.textMinusPax[0], adt1)
    }
    if (ChildCount > NumberofChild) {
        var chd = ChildCount - NumberofChild
        await library.paxselection(flightlistpo.textAddPax[1], chd)
    }
    else if (ChildCount < NumberofChild) {
        var chd1 = NumberofChild - ChildCount
        await library.paxselection(flightlistpo.textMinusPax[1], chd1)
    }
    if (InfantCount > NumberofInfant) {
        var inf = InfantCount - NumberofInfant
        await library.paxselection(flightlistpo.textAddPax[2], inf)
    }
    else if (InfantCount < NumberofInfant) {
        var inf1 = NumberofInfant - InfantCount
        await library.paxselection(flightlistpo.textMinusPax[2], inf1)
    }
    await library.clickAction(flightlistpo.buttonConfirm)
}
async function mscalendar(DepartureDate2, ReturnDate2) {
    await library.clickAction(flightlistpo.buttonCalendar)
    var dep = DepartureDate2
    var depdate = dep.slice(0, 2)
    var dearturedatetext = parseInt(depdate)
    var depmonyear = dep.slice(3, 16)
    //await browser.pause(2000)
    for (var i = 0; i < 12; i++) {
        var monyrtxt = await library.gettextAction(flightlistpo.textMonthYear)
        if (depmonyear == monyrtxt) {
            for (var j = 0; j < await flightlistpo.buttonDate.length; j++) {
                var day0text = await library.gettextAction(flightlistpo.buttonDate[j])

                if (dearturedatetext == day0text) {
                    await library.clickAction(flightlistpo.buttonDate[j])
                    break;
                }

            }
            break;
        }
        else {
            await library.clickAction(flightlistpo.buttonNextArrow)
            //await browser.pause(2000)
        }
    }

    var dep = ReturnDate2
    var depdate = dep.slice(0, 2)
    var dearturedatetext = parseInt(depdate)
    var depmonyear = dep.slice(3, 16)

    //await browser.pause(2000)
    for (var i = 0; i < 12; i++) {
        var monyrtxt = await library.gettextAction(flightlistpo.textMonthYear)
        if (depmonyear == monyrtxt) {
            for (var j = 0; j < await flightlistpo.buttonDate.length; j++) {
                var day0text = await library.gettextAction(flightlistpo.buttonDate[j])

                if (dearturedatetext == day0text) {
                    await library.clickAction(flightlistpo.buttonDate[j])
                    break;
                }

            }
            break;
        }
        else {
            await library.clickAction(flightlistpo.buttonNextArrow)
            //await browser.pause(2000)
        }
    }

}
async function mscalendar1(DepartureDate2) {
    await library.clickAction(flightlistpo.buttonCalendar)
    var dep = DepartureDate2
    var depdate = dep.slice(0, 2)
    var dearturedatetext = parseInt(depdate)
    var depmonyear = dep.slice(3, 16)

    //await browser.pause(2000)
    for (var i = 0; i < 12; i++) {
        var monyrtxt = await library.gettextAction(flightlistpo.textMonthYear)
        if (depmonyear == monyrtxt) {
            for (var j = 0; j < await flightlistpo.buttonDate.length; j++) {
                var day0text = await library.gettextAction(flightlistpo.buttonDate[j])

                if (dearturedatetext == day0text) {
                    await library.clickAction(flightlistpo.buttonDate[j])
                    break;
                }

            }
            break;
        }
        else {
            await library.clickAction(flightlistpo.buttonNextArrow)
            //await browser.pause(2000)
        }
    }
}
exports.flightselection = flightselection;
exports.cabinselection = cabinselection;
exports.upgrade = upgrade;
exports.changefrom = changefrom;
exports.changeto = changeto;
exports.mscalendar = mscalendar;
exports.changepax = changepax;
exports.mscalendar1 = mscalendar1;
exports.gotoflights = gotoflights;
exports.selectfillpaxbutton = selectfillpaxbutton;