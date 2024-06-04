const library = require('../../common/Genericlibrary.js')
const addservicepo = require('../../pageobjects/multicity/additionalservicespo.js')

async function NoSeatSelection() {
    while (await ad.noseatmap.isDisplayed()) {
        await ad.skipseat.click()
        await browser.pause(3000)
    }
}
async function seatselection(seatidx, seatconf) {
    if (await ad.noseatmap.isDisplayed())
        await NoSeatSelection()

    else {
        for (i = 0; i < await ad.seatpax.length; i++) {

            await ad.seatpax[i].scrollIntoView({ block: 'center', inline: 'center' })
            await browser.pause(2000)
            if (await ad.noseatmap.isDisplayed()) {
                await NoSeatSelection()
                break;
            }
            else {
                if (await seatidx.length > 0) {
                    await seatidx[i].scrollIntoView({ block: 'center', inline: 'center' })
                    await browser.pause(3000)
                    await seatidx[i].click()
                    await browser.pause(3000)
                    await ad.confirmpageload.waitForExist({ reverse: true, timeout: 200000 })
                    if (await seatconf.isDisplayed())
                        await seatconf.click()
                    await ad.confirmpageload.waitForExist({ reverse: true, timeout: 200000 })
                    await browser.pause(2000)

                }
            }
        }
    }
    console.log("seats selected")
    await browser.pause(4000)

}

async function nextflight(seatidx, seatconf) {
    while (await ad.nxtflight.isDisplayed()) {
        console.log("next flight")
        await ad.nxtflight.scrollIntoView()
        await ad.nxtflight.click()
        if (await ad.contseat.isDisplayed())
            await ad.contseat.click()
        await browser.pause(6000)
        await ad.confirmpageload.waitForExist({ reverse: true, timeout: 200000 })
        await ad.additionserviceval1.waitForExist({ timeout: 100000 })

        await seatselection(seatidx, seatconf)

    }

}

async function confirmseat() {
    if (await ad.confirmseat.isDisplayed()) {
        await ad.confirmseat.scrollIntoView()
        await ad.confirmseat.click()
        await ad.confirmpageload.waitForExist({ reverse: true, timeout: 200000 })
        if (await ad.contseat.isDisplayed())
            await ad.contseat.click()
        await ad.confirmpageload.waitForExist({ reverse: true, timeout: 200000 })

    }
}

async function wheelchair() {
    await ow.requestService.scrollIntoView()
    await ad.requestService.click()
    await ad.whcrTitle.waitForExist()

    var flightstop = await ad.whcrDropdown.length
    console.log(flightstop)
    console.log("Selecting wheel chair")

    for (var i = 1; i <= await flightstop; i++) {
        await ad.whcrDropdown[0].scrollIntoView({ block: 'center', inline: 'center' })
        await ad.whcrDropdown[0].click()
        await ad.whcrToRamp.waitForExist()
        await ad.whcrToRamp.click()

    }
    await ad.whcrContinue.click()
}

async function wheelchairslctseats(seatindex, seatconfirm) {
    if (await ad.selectseatagain.isDisplayed()) {
        await ad.selectseatagain.click()
        await browser.pause(4000)
        await ad.confirmpageload.waitForExist({ reverse: true, timeout: 200000 })
        await seatselection(seatindex, seatconfirm)
        await nextflight(seatindex, seatconfirm)
        await browser.pause(3000)
        await confirmseat()
        await ad.confirmpageload.waitForExist({ reverse: true, timeout: 200000 })

    }
}

async function selectbaggage(baggageslct, flightstop, paxAdditionalBaggage, baggageOption,changeflag) {
    for (var j = 1; j <= await flightstop; j++) {

        if (paxAdditionalBaggage[j - 1] === "Yes") {
            console.log("iteration " + [j])
            await browser.pause(5000)
            var baggageSelected = baggageOption[j - 1]
            console.log(baggageSelected)
            if(changeflag==0){
            await baggageslct[0].scrollIntoView({ block: 'center', inline: 'center' })
            await baggageslct[0].click()
            }
            else{
                await baggageslct[j-1].scrollIntoView({ block: 'center', inline: 'center' })
                await baggageslct[j-1].click()
            }

            for (var k = 0; k <= await ad.baggageList.length; k++) {

                var baggageselect = await ad.baggageList[k].getText()
                console.log(baggageselect)
                if (baggageselect.includes(baggageSelected)) {

                    await ad.baggageList[k].click()
                    await browser.pause(2000)

                    break;
                }
            }
        }
    }
}

async function addbaggage(DomDoyouwanttoaddAB, paxAdditionalBaggage, baggageOption,changeflag) {
    await ad.addExtraBaggage.scrollIntoView({ block: 'center', inline: 'center' })
    await ad.addExtraBaggage.click()
    console.log("add extra baggage clicked")
    await browser.pause(3000)
    await ad.baggageTitle.waitForExist()
    console.log("baggage title displayed")

    var flightstop = await ad.baggagearrow.length
    console.log("baggages count:" + flightstop)
    var piecebag = await ad.piecebag.length
    console.log("Piece Bag count:" + piecebag)

    if (DomDoyouwanttoaddAB === "Yes") {

        var baggageslct = ad.baggagearrow
        await selectbaggage(baggageslct, flightstop, paxAdditionalBaggage, baggageOption,changeflag)

    }
    await INTbaggage(piecebag)

    await ad.selectionContinue.scrollIntoView()
    await ad.selectionContinue.click()
    await browser.pause(5000)
    await ad.confirmpageload.waitForExist({ reverse: true, timeout: 200000 })
}

async function INTbaggage(piecebag) {
    if (await piecebag > 0) {
        for (i = 0; i < await piecebag; i++) {
            if (await ad.piecebag[i].isClickable()) {
                await ad.piecebag[i].scrollIntoView({ block: 'center', inline: 'center' })
                await ad.piecebag[i].click()
            }
        }
    }
}

async function changebaggage(paxAdditionalBaggage, baggageOption,changeflag) {
    await ad.changeAB.click()
    await browser.pause(3000)
    await ad.baggageTitle.waitForExist()
    console.log("baggage title displayed")

    var flightstop = await ad.baggagearrow1.length
    console.log("baggages count:" + flightstop)
    var piecebag = await ad.piecebag.length
    console.log("Piece Bag count:" + piecebag)

    await INTbaggage(piecebag)
    var baggageslct = ad.baggagearrow1
    await selectbaggage(baggageslct, flightstop, paxAdditionalBaggage, baggageOption,changeflag)

    await ad.selectionContinue.scrollIntoView()
    await ad.selectionContinue.click()
    await browser.pause(5000)
    await ad.confirmpageload.waitForExist({ reverse: true, timeout: 200000 })
    if (await ad.continuebookingbtn.isDisplayed()) {
        await ad.continuebookingbtn.click()
        await browser.pause(3000)
    }
}

async function selectmeals(mealspax) {
    var flightstop = await ad.mealsslct.length
    console.log("Selecting meals")
    for (var i = 1; i <= await flightstop; i++) {

        await ad.mealsslct[0].scrollIntoView({ block: 'center', inline: 'center' })
        await ad.mealsslct[0].click()
        await ad.mealsoptions[0].waitForExist()
        for (j = 0; j < await ad.mealsoptions.length; j++) {

            var mealtxt = await ad.mealsoptions[j].getText()
            if (mealtxt == mealspax[i - 1]) {
                await ad.mealsoptions[j].scrollIntoView({ block: 'center', inline: 'center' })
                await ad.mealsoptions[j].click()
                break;
            }
        }

    }
}


async function MCWheelChair(WcPassenger1Confirm, WcPassenger2Confirm, WcPassenger3Confirm, WcPassenger4Confirm, WcPassenger5Confirm, WcPassenger6Confirm, WcPassenger7Confirm, WcPassenger8Confirm, WcPassenger9Confirm)
{
   
        if (await addservicepo.textAddService.isDisplayed()) {
            await library.pagescrollAction(addservicepo.textAddService)
            await library.clickAction(addservicepo.textAddService)
            await browser.pause(2000)
            await library.waitforexistAction(addservicepo.addServiceVal)
            await browser.pause(3000)
            var wcpax = [WcPassenger1Confirm, WcPassenger2Confirm, WcPassenger3Confirm, WcPassenger4Confirm, WcPassenger5Confirm, WcPassenger6Confirm, WcPassenger7Confirm, WcPassenger8Confirm, WcPassenger9Confirm]
            for (var i = 0; i < await addservicepo.buttonWheelChair.length; i++) {

                if (wcpax[i] == "Yes") {
                    await library.pagescrolltomiddleAction(addservicepo.buttonWheelChair[i])
                    await library.clickAction(addservicepo.buttonWheelChair[i])

                    await addservicepo.buttonWheelChair[i].selectByVisibleText("Wheelchair - for ramp")
                    await browser.pause(3000)
                   await library.pagetimeout(addservicepo.pageLoader)
                }

                //break;  
            }
            await library.waitforexistAction(addservicepo.buttonWheelChairConfirm)
            await library.pagescrollAction(addservicepo.buttonWheelChairConfirm)
            await browser.pause(3000)
            await library.clickAction(addservicepo.buttonWheelChairConfirm)
            await browser.pause(3000)
            await library.pagetimeout(addservicepo.pageLoader)
            await library.waitforexistAction(addservicepo.labelSubtitle)
        }
    
}

async function MCAddMeal(Passenger1FoodConfirm, Passenger2FoodConfirm, Passenger3FoodConfirm, Passenger4FoodConfirm, Passenger5FoodConfirm, Passenger6FoodConfirm, Passenger7FoodConfirm, Passenger8FoodConfirm, Passenger9FoodConfirm,Passenger1FoodName, Passenger2FoodName, Passenger3FoodName, Passenger4FoodName, Passenger5FoodName, Passenger6FoodName, Passenger7FoodName, Passenger8FoodName, Passenger9FoodName)
{
    if (await addservicepo.textAddMeal.isDisplayed()) {
        await browser.pause(3000)
        await library.pagescrollAction(addservicepo.textAddMeal)
        await library.waitforexistAction(addservicepo.textAddMeal)
        await library.clickAction(addservicepo.textAddMeal)
        await browser.pause(2000)
        await library.waitforexistAction(addservicepo.textMealVal)
        var mealpax = [Passenger1FoodConfirm, Passenger2FoodConfirm, Passenger3FoodConfirm, Passenger4FoodConfirm, Passenger5FoodConfirm, Passenger6FoodConfirm, Passenger7FoodConfirm, Passenger8FoodConfirm, Passenger9FoodConfirm]
        var mealname = [Passenger1FoodName, Passenger2FoodName, Passenger3FoodName, Passenger4FoodName, Passenger5FoodName, Passenger6FoodName, Passenger7FoodName, Passenger8FoodName, Passenger9FoodName]
        for (var i = 0; i < await addservicepo.buttonMeals.length; i++) {

            if (mealpax[i] == "Yes") {
                await library.pagescrollAction(addservicepo.buttonMeals[i])
                await library.clickAction(addservicepo.buttonMeals[i])
                await addservicepo.buttonMeals[i].selectByVisibleText(mealname[i])
                await browser.pause(2000)
                await library.pagetimeout(addservicepo.pageLoader)
                
            }
            //break;
        }
        await browser.pause(2000)
        if(await addservicepo.textContinueFlow.isDisplayed())
        {
            await library.clickAction(addservicepo.textContinueFlow)
        
        }
        await library.pagescrollAction(addservicepo.buttonMealConfirm)
        await library.clickAction(addservicepo.buttonMealConfirm)
        await library.pagetimeout(addservicepo.pageLoader)
       await library.waitforexistAction(addservicepo.labelSubtitle)
    
    }

}
async function MCAdditionalBaggage(ABPassenger1Confirm, ABPassenger2Confirm, ABPassenger3Confirm, ABPassenger4Confirm, ABPassenger5Confirm, ABPassenger6Confirm, ABPassenger7Confirm, ABPassenger8Confirm, ABPassenger9Confirm,Passenger1AB, Passenger2AB, Passenger3AB, Passenger4AB, Passenger5AB, Passenger6AB, Passenger7AB, Passenger8AB, Passenger9AB)
{
    
        if (await addservicepo.textAddBaggage.isDisplayed()) {
            await library.pagescrollAction(addservicepo.textAddBaggage)
             await library.clickAction(addservicepo.textAddBaggage)
             await library.waitforexistAction(addservicepo.iconAddBaggageVal)
            await browser.pause(3000)
            var abpaxconfirm = [ABPassenger1Confirm, ABPassenger2Confirm, ABPassenger3Confirm, ABPassenger4Confirm, ABPassenger5Confirm, ABPassenger6Confirm, ABPassenger7Confirm, ABPassenger8Confirm, ABPassenger9Confirm]
            var paxbaggage = [Passenger1AB, Passenger2AB, Passenger3AB, Passenger4AB, Passenger5AB, Passenger6AB, Passenger7AB, Passenger8AB, Passenger9AB]
            var bagagelist = [];
            if(await addservicepo.AdditionalBaggageBox.length > 0)
            {
            for (var j = 0; j < 5; j++) {
                var abtxt = await library.gettextAction( addservicepo.optionAddBaggageList[j])
                bagagelist.push(abtxt)
            }
            for (var i = 0; i < await addservicepo.AdditionalBaggageBox.length; i++) {

                // AB Passenger

                if (abpaxconfirm[i] == "Yes") {
                    await library.waitforexistAction(addservicepo.AdditionalBaggageBox[i])
                   await library.pagescrollAction(addservicepo.AdditionalBaggageBox[i])
                    for (var j = 0; j < 5; j++) {
                        //var bagagelist = await mb.addbaggagelist[j].getText()
                        if (bagagelist[j].includes(paxbaggage[i])) {
                            //await mb.addbaggagelist[j].click()
                            await addservicepo.AdditionalBaggageBox[i].selectByIndex(j)
                           await library.pagetimeout(addservicepo.pageLoader)
                            break;
                        }
                    }
                    await browser.pause(2000)
                }
            }
        }
        if(await addservicepo.iconAddPieceBag.length>0)
        {
            for(i=0;i<await addservicepo.iconAddPieceBag.length;i++)
            {
                await library.pagescrollAction(addservicepo.iconAddPieceBag[i])
                await library.clickAction(addservicepo.iconAddPieceBag[i])
            }
        }
           await library.pagetimeout(addservicepo.pageLoader)
           await library.pagescrollAction(addservicepo.buttonAddBaggageConfirm)
            await browser.pause(3000)
            await library.clickAction(addservicepo.buttonAddBaggageConfirm)
            await library.pagetimeout(addservicepo.pageLoader)
            await browser.pause(6000)
            await library.waitforexistAction(addservicepo.labelSubtitle)
        
        }
    
}

async function selectseat(seatindex)
{
    for(var i=0;i<await addservicepo.tabSegmentList.length;i++)
    {
        await library.pagescrolltomiddleAction(addservicepo.tabSegmentList[i])
        await library.clickAction(addservicepo.tabSegmentList[i])
     
     await browser.pause(3000)
     for (var j=0;j<await addservicepo.radiobuttonPaxList.length;j++)
     { 
        await library.pagescrolltomiddleAction(addservicepo.radiobuttonPaxList[j])
        await library.clickAction(addservicepo.radiobuttonPaxList[j])
       await browser.pause(3000)
       if(await seatindex.length > 0){
        if(await seatindex[j].isDisplayed())
        {
            await library.pagescrolltomiddleAction(seatindex[j].scrollIntoView)
            await library.clickAction(seatindex[j])
        
        await browser.pause(3000)
        //break;
        }
      }
       //break;
     }
    await library.pagetimeout(addservicepo.pageLoader)
     //break;
    }
}


async function MCSeatMap(TypeofSeat)
{
      if (await addservicepo.buttonSeat.isDisplayed()) {
        await library.waitforexistAction(addservicepo.buttonSeat)
        await library.pagescrolltomiddleAction(addservicepo.buttonSeat)
        await library.clickAction(addservicepo.buttonSeat)
        await library.waitforexistAction( addservicepo.labelSeatVal)
                
                await browser.pause(3000)
                console.log(TypeofSeat)
                if (TypeofSeat == "PreferedSeat") {
                    var seatindex = addservicepo.iconPreferedSeat
                }
                if (TypeofSeat == "FreeSeat") {
                    var seatindex = addservicepo.iconFreeSeat
                }
                if (TypeofSeat == "ExtralegroomSeat") {
                    var seatindex = addservicepo.iconExtraLegRoomSeat
                }
                await selectseat(seatindex)

                await browser.pause(3000)
                await library.pagescrollAction(addservicepo.labelSeatConfirm)
                await library.clickAction(addservicepo.labelSeatConfirm)
                
                await browser.pause(3000)
                if (await addservicepo.buttonSeatConfirm.isDisplayed()) {
                    await library.pagescrollAction(addservicepo.buttonSeatConfirm)
                    await library.clickAction(addservicepo.buttonSeatConfirm)
                    await library.pagetimeout(addservicepo.pageLoader)
                    await browser.pause(3000)
                }
                await library.waitforexistAction(addservicepo.labelSubtitle)
                await browser.pause(2000)
            }
}
exports.seatselection = seatselection;
exports.addbaggage = addbaggage;
exports.changebaggage = changebaggage;
exports.NoSeatSelection = NoSeatSelection;
exports.nextflight = nextflight;
exports.confirmseat = confirmseat
exports.wheelchair = wheelchair
exports.wheelchairslctseats = wheelchairslctseats
exports.INTbaggage = INTbaggage
exports.selectbaggage = selectbaggage
exports.selectmeals = selectmeals;
exports.MCWheelChair=MCWheelChair;
exports.MCAddMeal=MCAddMeal;
exports.MCAdditionalBaggage=MCAdditionalBaggage;
exports.MCSeatMap=MCSeatMap;
