const managebooking = require("../../pageobjects/OnewayRoundtrip/managebookingpo.js")
const fs = require('fs')
var configData = JSON.parse(fs.readFileSync('configWebsite.json'))
const seatmap = require('./seatselection.js')
const payment = require('./MBpaymentpage.js');
const library = require('../../common/Genericlibrary.js')

async function mbadditionalservice(PNR, Lastname, Testcase,MBDoyouwanttoaddAB,
    Passenger1Confirm, Passenger1AB, Passenger2Confirm, Passenger2AB, Passenger3Confirm, Passenger3AB,
    Passenger4Confirm, Passenger4AB, Passenger5Confirm, Passenger5AB, Passenger6Confirm, Passenger6AB, Passenger7Confirm,
    Passenger7AB, Passenger8Confirm, Passenger8AB, Passenger9Confirm, Passenger9AB,
    DoyouwanttoaddAS, WcPassenger1Confirm, WcPassenger2Confirm, WcPassenger3Confirm, WcPassenger4Confirm, WcPassenger5Confirm,
    WcPassenger6Confirm, WcPassenger7Confirm, WcPassenger8Confirm, WcPassenger9Confirm, DoyouwanttoaddMeal,
    Passenger1FoodConfirm, Passenger1FoodName, Passenger2FoodConfirm, Passenger2FoodName, Passenger3FoodConfirm,
    Passenger3FoodName, Passenger4FoodConfirm, Passenger4FoodName, Passenger5FoodConfirm, Passenger5FoodName,
    Passenger6FoodConfirm, Passenger6FoodName, Passenger7FoodConfirm, Passenger7FoodName, Passenger8FoodConfirm, Passenger8FoodName,
    Passenger9FoodConfirm, Passenger9FoodName, DoyouwanttoaddSeat, TypeofSeat, MBPaymentType, MBCardNumber, MBCardExpMonth, MBCardExpYear, MBCVV, MBCardHolderName, MBCardEmail, MBCardMobile, MBHouseNumber, MBApartmentNumber, MBPincode, MBCity, MBCountry, MBState) 
    {
    try {
        if(!await library.elementdisplayedAction(managebooking.buttonAdditionalService))
        {
            await browser.url(configData['url'])
                        
                        //await browser.pause(6000)
                        
                        await library.waitforexistAction(managebooking.buttonManageBook)
                        //await browser.pause(2000)
                        await library.pagescrolltomiddleAction(managebooking.buttonManageBook)
                        //await browser.pause(2000)
                        await library.clickAction(managebooking.buttonManageBook)
                        //await browser.pause(2000)


                        await library.fillTextbox(managebooking.textboxBookingRef,PNR)
                        await library.fillTextbox(managebooking.textboxLastname,Lastname)
                        await library.clickAction(managebooking.buttonSubmit)
                        await library.waitforexistAction(managebooking.textPNRrefval)
                        await library.waitforexistAction(managebooking.textManageBooking)
                        //await browser.pause(3000)
        }
        await library.pagescrollAction(managebooking.buttonAdditionalService)
        await library.clickAction(managebooking.buttonAdditionalService)
        await library.pagetimeout(managebooking.page_loader)
        await library.waitforexistAction(managebooking.textPageSubtitle)
        //await browser.pause(3000)
        const abarray = [];
        console.log("DoyouwanttoaddAS:" + DoyouwanttoaddAS)

        if (DoyouwanttoaddAS == "Yes") {
            if (await library.elementdisplayedAction(managebooking.buttonAddService)) {
                await library.pagescrollAction( managebooking.buttonAddService)
                await library.clickAction(managebooking.buttonAddService)
                //await browser.pause(2000)
                await library.waitforexistAction(managebooking.textAddServiceVal)
                //await browser.pause(3000)
                var wcpax = [WcPassenger1Confirm, WcPassenger2Confirm, WcPassenger3Confirm, WcPassenger4Confirm, WcPassenger5Confirm, WcPassenger6Confirm, WcPassenger7Confirm, WcPassenger8Confirm, WcPassenger9Confirm]
                for (var i = 0; i < await managebooking.buttonWheelchair.length; i++) {

                    if (wcpax[i] == "Yes") {
                        await library.pagescrolltomiddleAction(managebooking.buttonWheelchair[i])
                        await managebooking.buttonWheelchair[i].selectByVisibleText("Wheelchair - for ramp")
                        //await browser.pause(3000)
                        await library.pagetimeout(managebooking.page_loader)
                    }

                    //break;  
                }
                console.log("wheelchair end")
                await library.waitforexistAction(managebooking.buttonWcConfirm)
                await library.pagescrollAction(managebooking.buttonWcConfirm)
                //await browser.pause(3000)
                await library.clickAction(managebooking.buttonWcConfirm)
                //await browser.pause(3000)
                await library.pagetimeout(managebooking.page_loader)
                await library.waitforexistAction(managebooking.textPageSubtitle)
            }
        }
        console.log("DoyouwanttoaddMeal" + DoyouwanttoaddMeal)
        if (DoyouwanttoaddMeal == "Yes") {
            if (await library.elementdisplayedAction(managebooking.buttonAddMeal)) {
                //await browser.pause(3000)
                await library.pagescrollAction( managebooking.buttonAddMeal)
                await library.clickAction(managebooking.buttonAddMeal)
                //await browser.pause(2000)
                await library.waitforexistAction(managebooking.textMealVal)
                var mealpax = [Passenger1FoodConfirm, Passenger2FoodConfirm, Passenger3FoodConfirm, Passenger4FoodConfirm, Passenger5FoodConfirm, Passenger6FoodConfirm, Passenger7FoodConfirm, Passenger8FoodConfirm, Passenger9FoodConfirm]
                var mealname = [Passenger1FoodName, Passenger2FoodName, Passenger3FoodName, Passenger4FoodName, Passenger5FoodName, Passenger6FoodName, Passenger7FoodName, Passenger8FoodName, Passenger9FoodName]
                for (var i = 0; i < await managebooking.dropdownMeal.length; i++) {

                    if (mealpax[i] == "Yes") {
                        await library.pagescrollAction(managebooking.dropdownMeal[i])
                        await managebooking.dropdownMeal[i].selectByVisibleText(mealname[i])
                        //await browser.pause(2000)
                        await library.pagetimeout(managebooking.page_loader)
                    }
                  
                }
                //await browser.pause(2000)
                if(await library.elementdisplayedAction(managebooking.buttonContinueFlow))
                {
                    await library.clickAction(managebooking.buttonContinueFlow)
                }
                await library.pagescrolltomiddleAction(managebooking.buttonMealConfirm)
                await library.clickAction( managebooking.buttonMealConfirm)
                await library.pagetimeout(managebooking.page_loader)
                //await browser.pause(6000)
                await library.waitforexistAction(managebooking.textPageSubtitle)
            }

        }
        console.log("DoyouwanttoaddSeat:" + DoyouwanttoaddSeat)
        if (DoyouwanttoaddSeat == "Yes") {
            if (await library.elementdisplayedAction(managebooking.buttonSeat)) {
                await library.waitforexistAction(managebooking.buttonSeat)
                await library.pagescrollAction(managebooking.buttonSeat)
                await library.clickAction(managebooking.buttonSeat)
                await library.waitforexistAction(managebooking.textSeatVal)
                //await browser.pause(3000)
                console.log(TypeofSeat)
                if (TypeofSeat == "PreferedSeat") {
                    var seatindex = managebooking.buttonPreferedSeat
                }
                if (TypeofSeat == "FreeSeat") {
                    var seatindex = managebooking.buttonFreeSeat
                }
                if (TypeofSeat == "ExtralegroomSeat") {
                    var seatindex = managebooking.buttonExtralegroomSeat
                }
                await seatmap.selectseat(seatindex)

                //await browser.pause(3000)

                await library.clickAction(managebooking.buttonSeatConfirm)
                //await browser.pause(3000)
                await library.pagetimeout(managebooking.page_loader)
                if (await library.elementdisplayedAction(managebooking.buttonConfirmSeat)) {
                    await library.pagescrollAction(managebooking.buttonConfirmSeat)
                    await library.clickAction(managebooking.buttonConfirmSeat)
                    await library.pagetimeout(managebooking.page_loader)
                    //await browser.pause(3000)
                }
                console.log("finally")
                await library.waitforexistAction(managebooking.textPageSubtitle)
                console.log("wait")
                //await browser.pause(2000)
            }
        }

        console.log("MBDoyouwanttoaddAB:" + MBDoyouwanttoaddAB)
        if (MBDoyouwanttoaddAB == "Yes") {
            if (await library.elementdisplayedAction(managebooking.buttonAddBaggage)) {
                await library.pagescrollAction(managebooking.buttonAddBaggage)
                await library.clickAction(managebooking.buttonAddBaggage)
                await library.waitforexistAction(managebooking.iconAddBaggage)
                //await browser.pause(3000)
                var abpaxconfirm = [Passenger1Confirm, Passenger2Confirm, Passenger3Confirm, Passenger4Confirm, Passenger5Confirm, Passenger6Confirm, Passenger7Confirm, Passenger8Confirm, Passenger9Confirm]
                var paxbaggage = [Passenger1AB, Passenger2AB, Passenger3AB, Passenger4AB, Passenger5AB, Passenger6AB, Passenger7AB, Passenger8AB, Passenger9AB]
                var bagagelist = [];
                if(await managebooking.dropdownAddBaggage.length > 0)
                {
                for (var j = 0; j < 5; j++) {
                    var abtxt = await library.gettextAction(managebooking.addbaggagelist[j])
                    bagagelist.push(abtxt)
                }
                for (var i = 0; i < await managebooking.dropdownAddBaggage.length; i++) {

                    // AB Passenger

                    if (abpaxconfirm[i] == "Yes") {
                        await library.waitforexistAction(managebooking.dropdownAddBaggage[i])
                        await library.pagescrollAction(managebooking.dropdownAddBaggage[i])
                        for (var j = 0; j < 5; j++) {
                            if (bagagelist[j].includes(paxbaggage[i])) {
                                await managebooking.dropdownAddBaggage[i].selectByIndex(j)
                                await library.pagetimeout(managebooking.page_loader)
                                //await browser.pause(2000)
                                break;
                            }
                        }
                        //await browser.pause(2000)
                    }
                }
            }
            if(await managebooking.buttonAddPiecebag.length>0)
            {
                for(i=0;i<await managebooking.buttonAddPiecebag.length;i++)
                {
                    await library.pagescrollAction(managebooking.buttonAddPiecebag[i])
                    await library.clickAction(managebooking.buttonAddPiecebag[i])
                }
            }
                await library.pagetimeout(managebooking.page_loader)
                //await browser.pause(3000)
                await library.pagescrollAction(managebooking.buttonConfirmBaggage)
                await library.clickAction(managebooking.buttonConfirmBaggage)
                await library.pagetimeout(managebooking.page_loader)
                //await browser.pause(9000)
                await library.waitforexistAction(managebooking.textAdditionalServiceval)
            }
        }
        //await browser.pause(3000)
        await library.pagescrolltomiddleAction(managebooking.buttonContinue)
        await library.clickAction(managebooking.buttonContinue)
        await library.pagetimeout(managebooking.page_loader)
        //await browser.pause(9000)
        if(await library.elementdisplayedAction(managebooking.textPaymentVal))
        {
        //await browser.pause(3000)
        if (MBPaymentType == "Netbanking") {
            await payment.Netbanking()
        }
        if (MBPaymentType == "CreditCard") {
            await payment.creditcard(MBCardNumber, MBCardExpMonth, MBCardExpYear, MBCVV, MBCardHolderName, MBCardEmail, MBCardMobile, MBHouseNumber, MBApartmentNumber, MBPincode, MBCity, MBCountry, MBState)
        }
        if (MBPaymentType == "EMI") {
            await payment.emi()
        }
        if (MBPaymentType == "Wallet") {
            await payment.wallet()
        }
        if (MBPaymentType == "Rupay") {
            await payment.rupay()
        }
        if (MBPaymentType == "UPI") {
            await payment.upi()
        }

        //await browser.pause(3000)

        await library.pagetimeout(managebooking.page_loader)

        //await browser.pause(5000)
        await library.waitforexistAction(managebooking.textConfirmationVal)
        //await browser.pause(3000)
        //await browser.pause(3000)
    }

       

        let day = new Date().getDate();
        let month = new Date().getMonth();
        let year = new Date().getFullYear();
        let hours = new Date().getHours();
        let minutes = new Date().getMinutes();

        console.log("Day :" + day + "," + "Month : " + month + "," + "Year : " + year);
        var filename = 'AD_'+Testcase + '_' + day + "_" + month + "_" + year + "_" + hours + "_" + minutes + ".png";

        await browser.saveScreenshot("./test/testdata/Screenshot/Passed/" + filename.toString());
        var as1 = Testcase
        var as1result = "Success"
        var mbjson = {
            "Testcase": [as1],
            "DateandTime": new Date().toLocaleString(undefined, {
                timeZone: 'Asia/Kolkata'
            }),
            "Result": [as1result]
        }
        
        await library.pagescrollAction(managebooking.returntoMB)
        await library.clickAction(managebooking.returntoMB)
        await library.waitforexistAction(managebooking.textPNRrefval)
    }
    catch (e) {
        console.log(e)
        let day = new Date().getDate();
        let month = new Date().getMonth();
        let year = new Date().getFullYear();
        let hours = new Date().getHours();
        let minutes = new Date().getMinutes();

        console.log("Day :" + day + "," + "Month : " + month + "," + "Year : " + year);
        var filename = 'AD_'+Testcase + '_' + day + "_" + month + "_" + year + "_" + hours + "_" + minutes + ".png";

        await browser.saveScreenshot("./test/testdata/Screenshot/Failed/" + filename.toString());
        var as2 = Testcase
        var as2result = "Failed"
        var mbjson = {
            "Testcase": [as2],
            "DateandTime": new Date().toLocaleString(undefined, {
                timeZone: 'Asia/Kolkata'
            }),
            "Result": [as2result]
        }
    }
    return mbjson
}


exports.mbadditionalservice = mbadditionalservice;      