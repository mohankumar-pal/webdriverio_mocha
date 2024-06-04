const managebookpo = require("../../../src/website/pageobjects/ManageBooking/managebookingpo.js")
const library = require("../../../src/website/common/Genericlibrary.js")
const managebookingPage = require("../../../src/website/common/ManageBooking/managebooking.js")
const paymentPage = require("../../../src/website/common/ManageBooking/paymentpage.js")
const seat = require("../../../src/website/common/ManageBooking/seatselection")
const home = require('../../../src/website/common/OnewayRoundtrip/HomePage.js')
const fs = require('fs')
var NodeXls = require('node-xls');
var configData = JSON.parse(fs.readFileSync('configWebsite.json'))

let OD = JSON.parse(fs.readFileSync('test/testdata/json/website/AdditionalService.json'))
describe('Manage Booking', async () => {
    const mbresult = [];
    OD.forEach(({
        ExecutionFlag, Testcase, PNR, Lastname, MBDoyouwanttoaddAB,
        MBPassenger1Confirm, MBPassenger1AB, MBPassenger2Confirm, MBPassenger2AB, MBPassenger3Confirm, MBPassenger3AB,
        MBPassenger4Confirm, MBPassenger4AB, MBPassenger5Confirm, MBPassenger5AB, MBPassenger6Confirm, MBPassenger6AB, MBPassenger7Confirm,
        MBPassenger7AB, MBPassenger8Confirm, MBPassenger8AB, MBPassenger9Confirm, MBPassenger9AB,
        MBDoyouwanttoaddWC, MBPassenger1ConfirmWC, MBPassenger2ConfirmWC, MBPassenger3ConfirmWC, MBPassenger4ConfirmWC, MBPassenger5ConfirmWC,
        MBPassenger6ConfirmWC, MBPassenger7ConfirmWC, MBPassenger8ConfirmWC, MBPassenger9ConfirmWC, MBDoyouwanttoaddMeal,
        MBPassenger1FoodConfirm, MBPassenger1FoodName, MBPassenger2FoodConfirm, MBPassenger2FoodName, MBPassenger3FoodConfirm,
        MBPassenger3FoodName, MBPassenger4FoodConfirm, MBPassenger4FoodName, MBPassenger5FoodConfirm, MBPassenger5FoodName,
        MBPassenger6FoodConfirm, MBPassenger6FoodName, MBPassenger7FoodConfirm, MBPassenger7FoodName, MBPassenger8FoodConfirm, MBPassenger8FoodName,
        MBPassenger9FoodConfirm, MBPassenger9FoodName, MBDoyouwanttoaddSeat, MBTypeofSeat, MBPaymentType, CardNumber, CardExpMonth, CardExpYear, CVV, CardHolderName, CardEmail, CardMobile, HouseNumber, ApartmentNumber, Pincode, City, Country, State
    }) => {

        it('Additional Service', async () => {

            if (await ExecutionFlag === "Yes") {
                try {
                    await library.createNewsession()
                    await library.urlLaunch(configData['url'])
                    //await browser.pause(2000)
                    //await managebookingPage.incidentpage()
                    //await browser.pause(6000)
                    await home.AIsignin()
                    await browser.pause(2000)

                    await library.waitforexistAction(managebookpo.labelManageBooking)
                    ////await browser.pause(2000)
                    //await library.pagescrollAction(managebookpo.labelManageBooking)
                    //await browser.pause(2000)
                    await library.clickAction(managebookpo.labelManageBooking)
                    //await browser.pause(2000)

                    await library.fillTextbox(managebookpo.textboxBookingRef, PNR)
                    await library.fillTextbox(managebookpo.textboxLastName, Lastname)
                    await library.clickAction(managebookpo.buttonSubmit)
                    ////await browser.pause(2000)
                    await library.waitforexistAction(managebookpo.labelPNRRefVal)
                    await library.waitforexistAction(managebookpo.textManageBooking)
                    //await browser.pause(3000)
                    await library.pagescrollAction(managebookpo.buttonAdditiionalService)
                    await library.clickAction(managebookpo.buttonAdditiionalService)
                    await library.pagetimeout(managebookpo.confirmpageload)
                    await library.waitforexistAction(managebookpo.pagesubtitle)
                    //await browser.pause(3000)

                    const abarray = [];

                    if (MBDoyouwanttoaddWC == "Yes") {
                        //  if(await mb.viewservice.length >0)
                        //  {
                        if (await managebookpo.buttonAddService.isDisplayed()) {
                            await library.pagescrollAction(managebookpo.buttonAddService)
                            await library.clickAction(managebookpo.buttonAddService)
                            //await browser.pause(2000)
                            await library.waitforexistAction(managebookpo.labelAddServiceVal)
                            //await browser.pause(3000)
                            var wcpax = [MBPassenger1ConfirmWC, MBPassenger2ConfirmWC, MBPassenger3ConfirmWC, MBPassenger4ConfirmWC, MBPassenger5ConfirmWC, MBPassenger6ConfirmWC, MBPassenger7ConfirmWC, MBPassenger8ConfirmWC, MBPassenger9ConfirmWC]
                            for (var i = 0; i < await managebookpo.buttonWheelChair.length; i++) {

                                if (wcpax[i] == "Yes") {
                                    await library.pagescrolltomiddleAction(managebookpo.buttonWheelChair[i])
                                    await library.clickAction(managebookpo.buttonWheelChair[i])
                                    // await mb.wcbuttonlist[1].waitForExist({timeout:100000})
                                    // await mb.wcbuttonlist[1].click()
                                    await managebookpo.buttonWheelChair[i].selectByVisibleText("Wheelchair - for ramp")
                                    //await browser.pause(3000)
                                    await library.pagetimeout(managebookpo.confirmpageload)
                                }

                                //break;  
                            }
                            await library.waitforexistAction(managebookpo.buttonWheelChairConfirm)
                            await library.pagescrollAction(managebookpo.buttonWheelChairConfirm)
                            //await browser.pause(3000)
                            await library.clickAction(managebookpo.buttonWheelChairConfirm)
                            //await browser.pause(3000)
                            await library.pagetimeout(managebookpo.confirmpageload)
                            await library.waitforexistAction(managebookpo.pagesubtitle)
                        }
                        //  }
                    }
                    if (MBDoyouwanttoaddMeal == "Yes") {
                        if (await managebookpo.buttonAddMeal.isDisplayed()) {
                            //await browser.pause(3000)
                            await library.pagescrollAction(managebookpo.buttonAddMeal)
                            await library.waitforexistAction(managebookpo.buttonAddMeal)
                            await library.clickAction(managebookpo.buttonAddMeal)
                            //await browser.pause(2000)
                            await library.waitforexistAction(managebookpo.labelMealVal)
                            var mealpax = [MBPassenger1FoodConfirm, MBPassenger2FoodConfirm, MBPassenger3FoodConfirm, MBPassenger4FoodConfirm, MBPassenger5FoodConfirm, MBPassenger6FoodConfirm, MBPassenger7FoodConfirm, MBPassenger8FoodConfirm, MBPassenger9FoodConfirm]
                            var mealname = [MBPassenger1FoodName, MBPassenger2FoodName, MBPassenger3FoodName, MBPassenger4FoodName, MBPassenger5FoodName, MBPassenger6FoodName, MBPassenger7FoodName, MBPassenger8FoodName, MBPassenger9FoodName]
                            for (var i = 0; i < await managebookpo.buttonMeals.length; i++) {

                                if (mealpax[i] == "Yes") {
                                    await library.pagescrollAction(managebookpo.buttonMeals[i])
                                    await library.clickAction(managebookpo.buttonMeals[i])
                                    await managebookpo.buttonMeals[i].selectByVisibleText(mealname[i])
                                    await browser.pause(2000)
                                    await library.pagetimeout(managebookpo.confirmpageload)
                                }
                                //break;
                            }
                            await browser.pause(2000)
                            if (await managebookpo.textContinueFlow.isDisplayed()) {
                                await library.clickAction(managebookpo.textContinueFlow)
                            }
                            await library.waitforexistAction(managebookpo.buttonMealConfirm)
                            await library.pagescrollAction(managebookpo.buttonMealConfirm)
                            await library.clickAction(managebookpo.buttonMealConfirm)
                            await library.pagetimeout(managebookpo.confirmpageload)
                            await library.waitforexistAction(managebookpo.pagesubtitle)
                        }

                    }
                    console.log("DoyouwanttoaddSeat:" + MBDoyouwanttoaddSeat)
                    if (MBDoyouwanttoaddSeat == "Yes") {
                        //   if(await mb.edityourseat.length > 0)
                        //  {
                        if (await managebookpo.buttonSeat.isDisplayed()) {
                            await library.waitforexistAction(managebookpo.buttonSeat)
                            await library.pagescrollAction(managebookpo.buttonSeat)
                            await library.clickAction(managebookpo.buttonSeat)
                            await library.waitforexistAction(managebookpo.labelSeatVal)
                            //await browser.pause(3000)
                            console.log(MBTypeofSeat)
                            if (MBTypeofSeat == "PreferedSeat") {
                                var seatindex = managebookpo.preferedSeat
                            }
                            if (MBTypeofSeat == "FreeSeat") {
                                var seatindex = managebookpo.freeSeat
                            }
                            if (MBTypeofSeat == "ExtralegroomSeat") {
                                var seatindex = managebookpo.extraLegroomSeat
                            }
                            await seat.selectseat(seatindex)

                            //await browser.pause(3000)
                            await library.pagescrollAction(managebookpo.buttonSeatConfirm)
                            await library.clickAction(managebookpo.buttonSeatConfirm)
                            //await browser.pause(3000)
                            if (await managebookpo.buttonSeatConfirm1.isDisplayed()) {
                                await library.pagescrollAction(managebookpo.buttonSeatConfirm1)
                                await library.clickAction(managebookpo.buttonSeatConfirm1)
                                await library.pagetimeout(managebookpo.confirmpageload)
                                //await browser.pause(3000)
                            }
                            await library.waitforexistAction(managebookpo.pagesubtitle)
                            //await browser.pause(2000)
                        }
                        //  }
                    }

                    console.log("MBDoyouwanttoaddAB:" + MBDoyouwanttoaddAB)
                    if (MBDoyouwanttoaddAB == "Yes") {
                        //    if(await mb.viewbaggage.length > 0)
                        //  {
                        if (await managebookpo.buttonAddBaggage.isDisplayed()) {
                            await library.pagescrollAction(managebookpo.buttonAddBaggage)
                            await library.clickAction(managebookpo.buttonAddBaggage)
                            await library.waitforexistAction(managebookpo.labelAddBaggageVal)
                            await browser.pause(3000)
                            var abpaxconfirm = [MBPassenger1Confirm, MBPassenger2Confirm, MBPassenger3Confirm, MBPassenger4Confirm, MBPassenger5Confirm, MBPassenger6Confirm, MBPassenger7Confirm, MBPassenger8Confirm, MBPassenger9Confirm]
                            var paxbaggage = [MBPassenger1AB, MBPassenger2AB, MBPassenger3AB, MBPassenger4AB, MBPassenger5AB, MBPassenger6AB, MBPassenger7AB, MBPassenger8AB, MBPassenger9AB]
                            var bagagelist = [];
                            if (await managebookpo.buttonAddBaggageBox.length > 0) {
                                for (var j = 0; j < 5; j++) {
                                    var abtxt = await library.gettextAction(managebookpo.drpdwnAddBaggageList[j])
                                    bagagelist.push(abtxt)
                                }
                                for (var i = 0; i < await managebookpo.buttonAddBaggageBox.length; i++) {

                                    // AB Passenger

                                    if (abpaxconfirm[i] == "Yes") {
                                        await library.waitforexistAction(managebookpo.buttonAddBaggageBox[i])
                                        await library.pagescrollAction(managebookpo.buttonAddBaggageBox[i])


                                        for (var j = 0; j < 5; j++) {
                                            //var bagagelist = await mb.addbaggagelist[j].getText()
                                            if (bagagelist[j].includes(paxbaggage[i])) {
                                                //await mb.addbaggagelist[j].click()

                                                await managebookpo.buttonAddBaggageBox[i].selectByIndex(j)
                                                await library.pagetimeout(managebookpo.confirmpageload)
                                                break;
                                            }
                                        }
                                        await browser.pause(2000)
                                    }
                                }
                            }
                            if (await managebookpo.iconAddPieceBag.length > 0) {
                                for (i = 0; i < await managebookpo.iconAddPieceBag.length; i++) {
                                    await library.pagescrollAction(managebookpo.iconAddPieceBag[i])
                                    await library.clickAction(managebookpo.iconAddPieceBag[i])
                                }
                            }
                            await library.pagetimeout(managebookpo.confirmpageload)
                            await library.waitforexistAction(managebookpo.buttonAddBaggageConfirm)
                            await library.pagescrollAction(managebookpo.buttonAddBaggageConfirm)
                            await library.clickAction(managebookpo.buttonAddBaggageConfirm)
                            await library.pagetimeout(managebookpo.confirmpageload)
                            await library.waitforexistAction(managebookpo.labelAdditionalServiceVal)
                        }
                        //}
                    }
                    await browser.pause(3000)
                    await library.pagescrollAction(managebookpo.textABContinue)
                    await library.clickAction(managebookpo.textABContinue)
                    await library.pagetimeout(managebookpo.confirmpageload)
                    await browser.pause(16000) //payment page will not always appear
                    var gen = 0
                    // console.log(await mb.paymentval.getText())
                    if (await managebookpo.labelPaymentMethod.isDisplayed()) {
                        gen = 1
                        await library.waitforexistAction(managebookpo.labelPaymentMethod)
                        //await browser.pause(3000)
                        if (MBPaymentType == "Netbanking") {
                            await paymentPage.NetBanking()
                        }
                        if (MBPaymentType == "CreditCard") {
                            await paymentPage.CreditCard(CardNumber, CardExpMonth, CardExpYear, CVV, CardHolderName, CardEmail, CardMobile, HouseNumber, ApartmentNumber, Pincode, City, Country, State)
                        }
                        if (MBPaymentType == "EMI") {
                            await paymentPage.Emi()
                        }
                        if (MBPaymentType == "Wallet") {
                            await paymentPage.Wallet()
                        }
                        if (MBPaymentType == "Rupay") {
                            await paymentPage.Rupay()
                        }
                        if (MBPaymentType == "UPI") {
                            await paymentPage.Upi()
                        }

                        await browser.pause(3000)
                        await library.pagetimeout(managebookpo.confirmpageload)
                        await browser.pause(3000)
                        await library.waitforexistAction(managebookpo.labelConfirmationVal2)


                        //await mb.serviceconfirmation.scrollIntoView({ block: 'center', inline: 'center' })

                    }
                    else {
                        await library.waitforexistAction(managebookpo.labelReservation)
                        //await browser.pause(3000)
                        //await $(".reservation").scrollIntoView({ block: 'center', inline: 'center' })

                    }








                    let day = new Date().getDate();
                    let month = new Date().getMonth();
                    let year = new Date().getFullYear();
                    let hours = new Date().getHours();
                    let minutes = new Date().getMinutes();

                    console.log("Day :" + day + "," + "Month : " + month + "," + "Year : " + year);
                    var filename = Testcase + '_' + day + "_" + month + "_" + year + "_" + hours + "_" + minutes + ".png";

                    await browser.saveScreenshot("./test/outputartifact/Screenshot/Passed/" + filename.toString());
                    var as1 = Testcase
                    var as1result = "Success"
                    var asjson = {
                        "Testcase": [as1],
                        "DateandTime": new Date().toLocaleString(undefined, {
                            timeZone: 'Asia/Kolkata'
                        }),
                        "Result": [as1result]
                    }
                    mbresult.push(asjson)
                    if (await gen != 0) {
                        await mb.returntoMB.scrollIntoView()
                        await mb.returntoMB.click()
                        //await mb.confirmationval.waitForExist({timeout:100000})
                        await mb.pnrrefval.waitForExist({ timeout: 200000 })
                    }
                }
                catch (e) {
                    console.log(e)
                    let day = new Date().getDate();
                    let month = new Date().getMonth();
                    let year = new Date().getFullYear();
                    let hours = new Date().getHours();
                    let minutes = new Date().getMinutes();

                    console.log("Day :" + day + "," + "Month : " + month + "," + "Year : " + year);
                    var filename = Testcase + '_' + day + "_" + month + "_" + year + "_" + hours + "_" + minutes + ".png";

                    await browser.saveScreenshot("./test/outputartifact/Screenshot/Failed/" + filename.toString());
                    var as2 = Testcase
                    var as2result = "Failed"
                    var asjson = {
                        "Testcase": [as2],
                        "DateandTime": new Date().toLocaleString(undefined, {
                            timeZone: 'Asia/Kolkata'
                        }),
                        "Result": [as2result]
                    }
                    mbresult.push(asjson)
                }

                var modifyasconversion = JSON.stringify(mbresult)
                var modifyasdata = JSON.parse(modifyasconversion)
                var tool = new NodeXls();
                var xls = tool.json2xls(modifyasdata, { order: ["Testcase", "DateandTime", "Result"] });

                fs.writeFileSync('./test/outputartifact/result/website/AdditionalService.xlsx', xls, 'binary');

            }


        })
    })
})    