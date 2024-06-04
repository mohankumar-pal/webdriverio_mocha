const managebookingPage = require("../../../src/website/common/ManageBooking/managebooking.js")
const library = require("../../../src/website/common/Genericlibrary.js")
const payment = require("../../../src/website/common/ManageBooking/paymentpage.js")
var exceltojson = require("xlsx-to-json-lc");
const home = require('../../../src/website/common/OnewayRoundtrip/HomePage.js')
const fs = require('fs')
var NodeXls = require('node-xls');
const managebookingpo = require("../../../src/website/pageobjects/ManageBooking/managebookingpo.js");
var configData = JSON.parse(fs.readFileSync('configWebsite.json'))
let OD = JSON.parse(fs.readFileSync('test/testdata/json/website/reissue.json'))
describe('Trip Type', async () => {
    const mbresult = [];
    OD.forEach(({
        ExecutionFlag, Testcase, PNR, Lastname, RISegment1, RISegment1From, RISegment1To, RISegment1Date,
        RISegment2, RISegment2From, RISegment2To, RISegment2Date, RISegment3, RISegment3From, RISegment3To, RISegment3Date,
        RISegment4, RISegment4From, RISegment4To, RISegment4Date, RISegment1Cabin, RISegment2Cabin, Gender, DOBdate, DOBmonth, DOByear, Nationality, DocumentType, CountryCode, DocNumber, ExpDay, ExpMonth, ExpYear,
        PaymentType, CardNumber, CardExpMonth, CardExpYear, CVV, CardHolderName, CardEmail, CardMobile, HouseNumber, ApartmentNumber, Pincode, City, Country, State,
    }) => {

        it('Modify Flights', async () => {

            if (await ExecutionFlag === "Yes") {



                try {

                    await library.createNewsession()
                    await library.urlLaunch(configData['url'])
                    await browser.pause(2000)
                    //await managebookingPage.incidentpage()
                    await home.AIsignin()
                    await browser.pause(2000)
                    await browser.pause(6000)
                    await library.waitforexistAction(managebookingpo.labelManageBooking)
                    await browser.pause(2000)
                    /*  await library.pagescrollAction(managebookpo.labelManageBooking)
                     await browser.pause(2000) */
                    await library.clickAction(managebookingpo.labelManageBooking)
                    await browser.pause(2000)

                    await library.fillTextbox(managebookingpo.textboxBookingRef, PNR)
                    await library.fillTextbox(managebookingpo.textboxLastName, Lastname)
                    await library.clickAction(managebookingpo.buttonSubmit)

                    await library.pagescrollAction(managebookingpo.textManageBooking)
                    await browser.pause(3000)
                    await library.clickAction(managebookingpo.textManageBooking)
                    await browser.pause(3000)
                    await library.waitforexistAction(managebookingpo.drpdownModifyFlight)
                    await library.pagescrollAction(managebookingpo.drpdownModifyFlight)
                    await library.clickAction(managebookingpo.drpdownModifyFlight)
                    await browser.pause(3000)
                    await library.waitforexistAction(managebookingpo.pagesubtitle)
                    await browser.pause(3000)
                    await library.pagescrollAction(managebookingpo.textFlights)
                    await library.waitforexistAction(managebookingpo.textFlights)
                    await browser.pause(4000)
                    //await mb.segmentlist[0].click()
                    if (RISegment1 == "Yes") {
                        await library.clickAction(managebookingpo.textboxSegment1)
                        await library.waitforexistAction(managebookingpo.textboxSegment1From)
                        await browser.pause(2000)
                        await managebookingpo.textboxSegment1From.clearValue()
                        await browser.pause(2000)
                        await library.fillTextbox(managebookingpo.textboxSegment1From, RISegment1From)
                        await library.waitforexistAction(managebookingpo.citysuggestion)
                        await managebookingpo.citysuggestion.moveTo()
                        await library.clickAction(managebookingpo.citysuggestion)
                        await browser.pause(2000)
                        await managebookingpo.textboxSegment1To.clearValue()
                        await browser.pause(2000)
                        await library.fillTextbox(managebookingpo.textboxSegment1To, RISegment1To)
                        await library.waitforexistAction(managebookingpo.citysuggestion)

                        await managebookingpo.citysuggestion.moveTo()
                        await library.clickAction(managebookingpo.citysuggestion)
                        await browser.pause(2000)
                        await managebookingpo.textboxDepartingDate1.clearValue()
                        await browser.pause(2000)
                        await library.fillTextbox(managebookingpo.textboxDepartingDate1, RISegment1Date)
                        await browser.pause(2000)
                    }
                    /*  await mb.anytime1.click()
                      await browser.pause(2000)
                      console.log("12")
                       for(var i=0;i<26;i++)
                      {
                         console.log("13")
                         var anytimelisttext1=await mb.anytimelist1[i].getText()
                         console.log(anytimelist1text+"14")
                         if(anytimelisttext1=="08:00")
                         {
                             console.log("15")
                            await mb.anytimelist1[i].click()
                            console.log("17")
                            break;
                         }
                      } */

                    if (RISegment2 == "Yes") {
                        await library.pagescrollAction(managebookingpo.textboxSegment2)
                        await library.clickAction(managebookingpo.textboxSegment2)
                        await library.waitforexistAction(managebookingpo.textboxSegment2From)
                        await browser.pause(2000)
                        await managebookingpo.textboxSegment2From.clearValue()
                        await browser.pause(2000)
                        await library.fillTextbox(managebookingpo.textboxSegment2From, RISegment2From)

                        await library.waitforexistAction(managebookingpo.citysuggestion)
                        await managebookingpo.citysuggestion.moveTo()
                        await library.clickAction(managebookingpo.citysuggestion)

                        await browser.pause(2000)
                        await managebookingpo.textboxSegment2To.clearValue()
                        await library.fillTextbox(managebookingpo.textboxSegment2To, RISegment2To)
                        await library.waitforexistAction(managebookingpo.citysuggestion)
                        await managebookingpo.citysuggestion.moveTo()
                        await library.clickAction(managebookingpo.citysuggestion)
                        await browser.pause(2000)
                        await managebookingpo.textboxDepartingDate2.clearValue()
                        await browser.pause(2000)
                        await library.fillTextbox(managebookingpo.textboxDepartingDate2, RISegment2Date)
                        await browser.pause(2000)

                    }
                    if (RISegment3 == "Yes") {
                        await library.clickAction(managebookingpo.textboxSegment3)
                        await library.waitforexistAction(managebookingpo.textboxSegment3From)
                        await managebookingpo.textboxSegment3From.clearValue()
                        await library.fillTextbox(managebookingpo.textboxSegment3From)
                        await library.waitforexistAction(managebookingpo.citysuggestion)
                        await managebookingpo.citysuggestion.moveTo()
                        await library.clickAction(managebookingpo.citysuggestion)
                        await managebookingpo.textboxSegment3To.clearValue()
                        await library.fillTextbox(managebookingpo.textboxSegment3To)
                        await library.waitforexistAction(managebookingpo.citysuggestion)
                        await managebookingpo.citysuggestion.moveTo()
                        await library.clickAction(managebookingpo.citysuggestion)
                        await managebookingpo.textboxDepartingDate3.clearValue()
                        await library.fillTextbox(managebookingpo.textboxDepartingDate3)

                    }
                    if (RISegment4 == "Yes") {
                        await library.clickAction(managebookingpo.textboxSegment4)
                        await library.waitforexistAction(managebookingpo.textboxSegment4From)
                        await managebookingpo.textboxSegment4From.clearValue()
                        await library.fillTextbox(managebookingpo.textboxSegment4From)
                        await library.waitforexistAction(managebookingpo.citysuggestion)
                        await managebookingpo.citysuggestion.moveTo()
                        await library.clickAction(managebookingpo.citysuggestion)
                        await managebookingpo.textboxSegment4To.clearValue()
                        await library.fillTextbox(managebookingpo.textboxSegment4To)
                        await library.waitforexistAction(managebookingpo.citysuggestion)
                        await managebookingpo.citysuggestion.moveTo()
                        await library.clickAction(managebookingpo.citysuggestion)
                        await managebookingpo.textboxDepartingDate4.clearValue()
                        await library.fillTextbox(managebookingpo.textboxDepartingDate4)

                    }
                    await browser.pause(3000)
                    await library.clickAction(managebookingpo.buttonSegment1Continue)
                    await library.pagetimeout(managebookingpo.confirmpageload)

                    await browser.pause(5000)
                    await library.waitforexistAction(managebookingpo.pagesubtitle)
                    await browser.pause(2000)
                    await library.waitforexistAction(managebookingpo.iconFilter)
                    await library.pagescrollAction(managebookingpo.iconFilter)
                    if (RISegment1 == "Yes") {
                        await library.pagescrollAction(managebookingpo.iconFlightList[1])
                        await library.clickAction(managebookingpo.iconFlightList[1])

                        await browser.pause(3000)
                        for (var j = 0; j < await managebookingpo.textCabin.length; j++) {

                            for (var i = 0; i < await managebookingpo.textCabin.length; i++) {

                                var cabinprint = await managebookingpo.textCabin[i].getText()
                                await browser.pause(3000)

                                if (cabinprint == RISegment1Cabin) {
                                    if (await managebookingpo.textCabin[i].isClickable())
                                        await library.clickAction(managebookingpo.textCabin[i])
                                    else if (await managebookingpo.radioCabinList[0].isDisplayed())
                                        await library.clickAction(managebookingpo.radioCabinList[0])
                                    break;
                                }
                            }

                            await browser.pause(2000)
                            if (cabinprint != RISegment1Cabin) {
                                await library.clickAction(managebookingpo.radioCabinList[0])
                            }

                            break;
                        }
                        await library.pagetimeout(managebookingpo.confirmpageload)
                        await browser.pause(2000)
                        await library.pagescrolltomiddleAction(managebookingpo.buttonSegment1Continue)
                        await library.clickAction(managebookingpo.buttonSegment1Continue)
                        await library.pagetimeout(managebookingpo.confirmpageload)

                        await browser.pause(4000)
                        //handled here
                        /*if (await mb.cabinslct[0].isDisplayed()) {
                            await mb.cabinslct[0].scrollIntoView({ block: 'center', inline: 'center' })
                            await mb.cabinslct[0].click()
                            await mb.confirmpageload.waitForExist({ reverse: true, timeout: 200000 })
                            await mb.seg1continue.click()
                        }
                        await mb.confirmpageload.waitForExist({ reverse: true, timeout: 200000 })
                        await browser.pause(3000)
                    }*/
                        if (await managebookingpo.radioCabinList.length && RISegment2 == "No") {
                            await library.pagescrolltomiddleAction(managebookingpo.radioCabinList[0])
                            await library.clickAction(managebookingpo.radioCabinList[0])
                            await library.clickAction(managebookingpo.buttonSegment1Continue)
                        }
                        await browser.pause(3000)
                        await library.pagetimeout(managebookingpo.confirmpageload)
                        await browser.pause(3000)
                    }

                    if (RISegment2 == "Yes") {

                        // await $("//label[@for='tpl4_bound-1-flight-4-fareGroup-0']").click()
                        //await mb.seg2flightlist[0].waitForExist()
                        await library.clickAction(managebookingpo.radioSegment2FlightList[0])
                        await library.waitforexistAction(managebookingpo.radioReturnCabinlist[0])

                        for (var j = 0; j < await managebookingpo.radioReturnCabinlist.length; j++) {

                            //console.log("e") 
                            for (var i = 0; i < await managebookingpo.radioReturnCabinlist.length; i++) {

                                var cabinprint = await library.gettextAction(managebookingpo.radioReturnCabinlist[i])

                                if (cabinprint == RISegment2Cabin) {

                                    //await mb.returnCabinlist[i].click()
                                    if (await managebookingpo.radioReturnCabinlist[i].isClickable())
                                        await library.clickAction(managebookingpo.radioReturnCabinlist[i])
                                    else if (await managebookingpo.returnCabinSelection[0].isDisplayed())
                                        await library.clickAction(managebookingpo.returnCabinSelection[0])
                                    await library.pagetimeout(managebookingpo.confirmpageload)
                                    console.log("cabin selected")
                                    break;

                                }
                            }
                            // }
                            if (cabinprint != RISegment2Cabin) {
                                await library.pagescrolltomiddleAction(managebookingpo.radioReturnCabinlist[0])
                                await library.clickAction(managebookingpo.radioReturnCabinlist[0])

                            }
                            if (await managebookingpo.returnCabinSelection[0].isDisplayed()) {
                                await library.pagescrolltomiddleAction(managebookingpo.returnCabinSelection[0])
                                await library.clickAction(managebookingpo.returnCabinSelection[0])
                            }
                            break;
                        }
                        await browser.pause(2000)
                        await library.pagetimeout(managebookingpo.confirmpageload)
                        await library.pagescrollAction(managebookingpo.buttonSegment1Continue)
                        await library.clickAction(managebookingpo.buttonSegment1Continue)
                        await library.pagetimeout(managebookingpo.confirmpageload)

                        //handled here
                        // if (await mb.returncabinslct.length ) {
                        //     await mb.returncabinslct[0].scrollIntoView({ block: 'center', inline: 'center' })
                        //     await mb.returncabinslct[0].click()
                        //     await mb.returncabinslct[0].click()
                        // }
                        await library.pagetimeout(managebookingpo.confirmpageload)
                        await browser.pause(5000)

                    }
                    //await mb.seg1continue.waitForExist()
                    await library.pagescrollAction(managebookingpo.buttonSegment1Continue)
                    await library.pagetimeout(managebookingpo.confirmpageload)
                    await browser.pause(4000)
                    await library.pagescrollAction(managebookingpo.textScroll)
                    await library.pagescrollAction(managebookingpo.buttonSegment1Continue)
                    await library.clickAction(managebookingpo.buttonSegment1Continue)
                    await browser.pause(4000)
                    await library.pagetimeout(managebookingpo.confirmpageload)
                    await browser.pause(5000)
                    if (await managebookingpo.buttonSegment1Continue.isDisplayed() && RISegment2 == "Yes") {
                        await library.pagescrollAction(managebookingpo.buttonSegment1Continue)
                        await library.clickAction(managebookingpo.buttonSegment1Continue)
                        await browser.pause(3000)
                        await library.pagetimeout(managebookingpo.confirmpageload)
                        await browser.pause(5000)
                        //await mb.travelertitle[0].waitForExist({ timeout: 100000 })
                    }

                    if (await managebookingpo.labelTravelerTitle.length > 0) {
                        for (var i = 0; i < await managebookingpo.labelTravelerTitle.length; i++) {
                            await library.pagescrollAction(managebookingpo.labelTravelerTitle[i])
                            await browser.pause(2000)
                            if (await managebookingpo.textboxDobDate.length > 0) {
                                if (await managebookingpo.textboxDobDate[j].isDisplayed()) {
                                    await library.fillTextbox(managebookingpo.textboxDobDate[j], DOBdate)
                                    await managebookingpo.textboxDobMonth[j].selectByVisibleText(DOBmonth)
                                    await library.fillTextbox(managebookingpo.textboxDobYear[j], DOByear)
                                    if (j < (await managebookingpo.textboxDobDate.length - 1))
                                        j = j + 1
                                }
                                if (await managebookingpo.drpdownGender[i].isDisplayed()) {
                                    if (Gender == "M")
                                        await managebookingpo.drpdownGender[i].selectByIndex(2)
                                    if (Gender == "F")
                                        await managebookingpo.drpdownGender[i].selectByIndex(1)
                                }
                                if (await managebookingpo.textboxNationality[i].isDisplayed()) {
                                    await library.pagescrollAction(managebookingpo.textboxNationality[i])
                                    await library.clickAction(managebookingpo.textboxNationality[i])
                                    await managebookingpo.textboxNationality[i].selectByVisibleText(Nationality)
                                }
                                if (await managebookingpo.drpdownDocumentType[i].isDisplayed()) {
                                    //await mb.documenttype.scrollIntoView()
                                    await managebookingpo.drpdownDocumentType[i].selectByVisibleText(DocumentType)
                                }
                                if (await managebookingpo.textboxDocumentNumber[i].isDisplayed()) {
                                    await library.fillTextbox(managebookingpo.textboxDocumentNumber[i], DocNumber)
                                }
                                if (await managebookingpo.textboxCountryCode[i].isDisplayed()) {
                                    await library.pagescrollAction(managebookingpo.textboxCountryCode[i])
                                    await managebookingpo.textboxCountryCode[i].selectByVisibleText(CountryCode)
                                }
                                if (await managebookingpo.textboxExpDay[i].isDisplayed()) {
                                    await library.pagescrollAction(managebookingpo.textboxExpDay[i])
                                    await library.fillTextbox(managebookingpo.textboxExpDay[i], ExpDay)
                                    await library.fillTextbox(managebookingpo.textboxExpYear[i], ExpYear)
                                    await managebookingpo.textboxExpMonth[i].selectByVisibleText(ExpMonth)
                                }
                            }
                        }
                        if (await managebookingpo.buttonSegment1Continue.isDisplayed()) {
                            await library.pagescrollAction(managebookingpo.buttonSegment1Continue)

                            await browser.pause(3000)
                            await library.clickAction(managebookingpo.buttonSegment1Continue)
                            await library.pagetimeout(managebookingpo.confirmpageload)
                            await browser.pause(6000)
                        }
                    }
                    // await browser.pause(3000)

                    // await mb.seg1continue.waitForExist()
                    // await browser.pause(2000)

                    // await mb.seg1continue.click()
                    // await mb.confirmpageload.waitForExist({ reverse: true, timeout:200000 })
                    // await browser.pause(3000)

                    //await mb.paymentval.waitForExist({ timeout: 100000 })
                    //await browser.pause(6000)
                    if (await managebookingpo.labelPaymentMethod.isDisplayed()) {
                        await browser.pause(2000)
                        if (PaymentType == "Netbanking") {
                            await payment.NetBanking()
                        }
                        if (PaymentType == "CreditCard") {
                            await payment.CreditCard(CardNumber, CardExpMonth, CardExpYear, CVV, CardHolderName, CardEmail, CardMobile, HouseNumber, ApartmentNumber, Pincode, City, Country, State)
                        }
                        if (PaymentType == "EMI") {
                            await payment.Emi()
                        }
                        if (PaymentType == "Wallet") {
                            await payment.Wallet()
                        }
                        if (PaymentType == "Rupay") {
                            await payment.Rupay()
                        }
                        if (PaymentType == "UPI") {
                            await payment.Upi()
                        }
                    }
                    await browser.pause(6000)
                    await library.pagetimeout(managebookingpo.confirmpageload)
                    if (await managebookingpo.checkboxTermsCondition.isDisplayed()) {
                        await library.pagescrollAction(managebookingpo.checkboxTermsCondition)
                        await library.clickAction(managebookingpo.checkboxTermsCondition)
                        await library.pagescrollAction(managebookingpo.titleScroll)

                        await library.pagescrollAction(managebookingpo.buttonSegment1Continue)
                        await browser.pause(2000)
                        await library.clickAction(managebookingpo.buttonSegment1Continue)
                        await browser.pause(4000)
                        await library.pagetimeout(managebookingpo.confirmpageload)
                    }
                    await library.waitforexistAction(managebookingpo.pagesubtitle)
                    await library.waitforexistAction(managebookingpo.textManageBooking)
                    await browser.pause(3000)


                    // await mb.seg1continue.click()
                    let day = new Date().getDate();
                    let month = new Date().getMonth();
                    let year = new Date().getFullYear();
                    let hours = new Date().getHours();
                    let minutes = new Date().getMinutes();

                    console.log("Day :" + day + "," + "Month : " + month + "," + "Year : " + year);
                    var filename = Testcase + '_' + day + "_" + month + "_" + year + "_" + hours + "_" + minutes + ".png";

                    await browser.saveScreenshot("./test/outputartifact/Screenshot/Passed/" + filename.toString());
                    var ri1 = Testcase
                    var ri1result = "Success"
                    var reissuejson = {
                        "Testcase": [ri1],
                        "DateandTime": new Date().toLocaleString(undefined, {
                            timeZone: 'Asia/Kolkata'
                        }),
                        "Result": [ri1result]
                    }
                    mbresult.push(reissuejson)

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
                    var ri2 = Testcase
                    var ri2result = "Failed"
                    var reissuejson = {
                        "Testcase": [ri2],
                        "DateandTime": new Date().toLocaleString(undefined, {
                            timeZone: 'Asia/Kolkata'
                        }),
                        "Result": [ri2result]
                    }
                    mbresult.push(reissuejson)
                }
                var modifyflconversion = JSON.stringify(mbresult)
                var modifyfldata = JSON.parse(modifyflconversion)
                var tool = new NodeXls();
                var xls = tool.json2xls(modifyfldata, { order: ["Testcase", "DateandTime", "Result"] });
                fs.writeFileSync('./test/outputartifact/result/website/Reissue.xlsx', xls, 'binary');
            }
        })
    })

})