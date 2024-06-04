const library = require('../../common/Genericlibrary.js')
const homepo = require('../../pageobjects/multicity/Homepagepo.js')

async function incidentpage() {
    if (await library.elementdisplayedAction(homepo.buttonGoToHome))
        await library.clickAction(homepo.buttonGoToHome)
    await browser.pause(2000)
}
async function AIsignin() {
    await library.waitfordisplayedAction(homepo.textboxSigninEmail)
    //if(await library.elementdisplayedAction(homepo.textboxSigninEmail)) {
    await browser.pause(2000)
    await library.fillTextbox(homepo.textboxSigninEmail, "qa.automation@airindia.com")
    await browser.pause(2000)
    await library.clickAction(homepo.buttonSigninSubmit)
    await browser.pause(2000)
    await library.fillTextbox(homepo.textboxSigninPassword, "Automation*123")
    await browser.pause(4000)
    await library.clickAction(homepo.buttonSigninSubmit)
    await browser.pause(2000)
    if (await library.elementdisplayedAction(homepo.buttonSigninNo))
        await library.clickAction(homepo.buttonSigninNo)
    await browser.pause(22000) //gift popup
    if (await library.isexistingAction(homepo.buttonClose)) {
        await library.clickAction(homepo.buttonClose)
    }
    //}
}
async function FromToSelection(fl, From, tl, To) {
    await browser.pause(3000)
    await library.fillTextbox(fl, From)
    await browser.pause(5000)
    await library.waitforexistAction(homepo.optionFromToSugg[0])
    for (var sp = 0; sp < await homepo.optionFromToSugg.length; sp++) {
        var suggText = await homepo.optionFromToSugg[sp].getText()
        if (suggText == From) {
            await library.clickAction(homepo.optionFromToSugg[sp])
        }
    }
    await browser.pause(3000)
    await library.fillTextbox(tl, To)
    await browser.pause(5000)
    await library.waitforexistAction(homepo.optionFromToSugg[0])
    for (var sp1 = 0; sp1 < await homepo.optionFromToSugg.length; sp1++) {
        var sugg1Text = await homepo.optionFromToSugg[sp1].getText()
        if (sugg1Text == To) {
            await library.clickAction(homepo.optionFromToSugg[sp1])
        }
    }


}

async function departureDateSelection(departdate, to) {
    var dep = departdate
    var depdate = dep.slice(0, 2)
    var dearturedatetext = parseInt(depdate)
    var depmon = dep.slice(3, 6)
    var depyr = dep.slice(7, 11)
    // await browser.pause(4000)
    for (var i = 0; i < await homepo.optionMonth.length; i++) {
        var mcmon = await homepo.optionMonth[i].getText()
        if (depmon == mcmon) {
            for (var j = 0; j < await homepo.optionYear.length; j++) {
                var mcyr = await homepo.optionYear[j].getText()
                if (depyr == mcyr) {
                    for (var k = 0; k < await homepo.optionDate.length; k++) {
                        var mcdate = await homepo.optionDate[k].getText()
                        if (mcdate == dearturedatetext) {
                            //await browser.pause(3000)
                            await library.pagescrolltomiddleAction(to)
                            await browser.pause(4000)
                            await homepo.optionDate[k].click()
                            break;
                        }
                    }
                }
                else {
                    await homepo.buttonCalendarNext.click()
                }
            }
            break;
        }
        else {
            await homepo.buttonCalendarNext.click()

        }

    }
}


async function passengerSelection(NumberofAdult, NumberofChild, NumberofInfant) {
    await library.clickAction(homepo.dropdownPaxCount)
    if (NumberofAdult > 1) {
        var adt = NumberofAdult - 1
        await library.paxselection(homepo.buttonPlus[0], adt)
    }
    await library.paxselection(homepo.buttonPlus[1], NumberofChild)
    await library.paxselection(homepo.buttonPlus[2], NumberofInfant)
}
async function cabinSelection(CabinType) {
    await library.clickAction(homepo.typeCabin)
    await library.drpdwn(homepo.typeCabinList, CabinType)
}
async function concessionSelection(ConcessionaryType) {
    await library.clickAction(homepo.typeConcession)
    await library.drpdwn(homepo.typeConcessionList, ConcessionaryType)
}
async function promotionCode(Promocode) {
    await library.clickAction(homepo.promoCode)
    await library.fillTextbox(homepo.textboxPromoCode, Promocode)
}



exports.FromToSelection = FromToSelection;
exports.departureDateSelection = departureDateSelection;
exports.passengerSelection = passengerSelection;
exports.cabinSelection = cabinSelection;
exports.concessionSelection = concessionSelection;
exports.promotionCode = promotionCode;
exports.departureDateSelection = departureDateSelection;
exports.incidentpage = incidentpage;
exports.AIsignin = AIsignin;