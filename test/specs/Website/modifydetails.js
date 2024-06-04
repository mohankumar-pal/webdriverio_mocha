const managebookpo = require("../../../src/website/pageobjects/ManageBooking/managebookingpo.js")
const library = require("../../../src/website/common/Genericlibrary.js")
const managebookingPage = require("../../../src/website/common/ManageBooking/managebooking.js")
const home = require('../../../src/website/common/OnewayRoundtrip/HomePage.js')
var exceltojson = require("xlsx-to-json-lc");
const fs = require('fs')
var NodeXls = require('node-xls');
const managebookingpo = require("../../../src/website/pageobjects/ManageBooking/managebookingpo.js");
var configData = JSON.parse(fs.readFileSync('configWebsite.json'))
let OD = JSON.parse(fs.readFileSync('test/testdata/json/website/modifydetails.json'))
describe('Managebooking', async () => {
    const mbresult = [];
    OD.forEach(({
        ExecutionFlag, Testcase, PNR, Lastname, MDGender, MDDOBdate, MDDOBmonth, MDDOByear, MDEmail2, MDEmail3, MDEmergencyName, MDEmergencyCountrycode, MDEmergencyPhone,
        MDNationality, MDDocNumber, MDCountryCode, MDExpDay, MDExpMonth, MDExpYear, MDDocumentType
    }) => {

        it('Modify Details', async () => {


            if (await ExecutionFlag === "Yes") {


                try {
                    await library.createNewsession()
                    await library.urlLaunch(configData['url'])
                    //await browser.pause(2000)
                    //await managebookingPage.incidentpage()
                    await home.AIsignin()
                    await browser.pause(2000)
                    await library.waitforexistAction(managebookpo.labelManageBooking)
                    //await browser.pause(2000)
                    await library.pagescrolltomiddleAction(managebookpo.labelManageBooking)
                    //await browser.pause(2000)
                    await library.clickAction(managebookpo.labelManageBooking)
                    //await browser.pause(2000)
                    await library.fillTextbox(managebookpo.textboxBookingRef, PNR)
                    await library.fillTextbox(managebookingpo.textboxLastName, Lastname)
                    await library.clickAction(managebookingpo.buttonSubmit)
                    await library.waitforexistAction(managebookingpo.labelPNRRefVal)
                    await library.waitforexistAction(managebookingpo.textManageBooking)
                    //await browser.pause(3000)
                    await library.pagescrollAction(managebookingpo.textManageBooking)
                    await library.clickAction(managebookingpo.textManageBooking)
                    //await browser.pause(2000)
                    await library.elementclickableAction(managebookingpo.managebookinglist[0])
                    await library.clickAction(managebookingpo.managebookinglist[0])
                    await browser.pause(7000)

                    await library.pagetimeout(managebookingpo.confirmpageload)
                    await library.waitforexistAction(managebookingpo.basicdetails[0])
                    //await browser.pause(2000)
                    await library.pagescrollAction(managebookingpo.basicdetails[0])
                    var j = 0
                    var k = 0
                    for (var i = 0; i < await managebookingpo.basicdetails.length; i++) {
                        await library.pagescrollAction(managebookingpo.basicdetails[i])

                        if (await managebookingpo.textboxDobDate.length > 0) {
                            if (await library.elementdisplayedAction(managebookingpo.textboxDobDate[j])) {
                                await library.fillTextbox(managebookingpo.textboxDobDate[j], MDDOBdate)
                                await library.waitfordisplayedAction(managebookingpo.textboxDobMonth[j])
                                await managebookingpo.textboxDobMonth[j].selectByVisibleText(MDDOBmonth)
                                await library.fillTextbox(managebookingpo.textboxDobYear[j], MDDOByear)
                                if (j < (await managebookingpo.textboxDobDate.length - 1))
                                    j = j + 1
                            }

                            if (await managebookingpo.textboxNationality.length > 0) {
                                if (await library.isexistingAction(managebookingpo.drpdownGender[k])) {
                                    if (MDGender == "M")
                                        await managebookingpo.drpdownGender[k].selectByIndex(2)
                                    if (MDGender == "F")
                                        await managebookingpo.drpdownGender[k].selectByIndex(1)
                                    if (k < (await managebookingpo.drpdownGender.length - 1))
                                        k = k + 1
                                }
                                await library.pagescrollAction(managebookingpo.textboxNationality[i])
                                await library.clickAction(managebookingpo.textboxNationality[i])
                                await managebookingpo.textboxNationality[i].selectByVisibleText(MDNationality)
                            }
                            if (await managebookingpo.drpdownDocumentType.length > 0) {
                                //await mb.documenttype.scrollIntoView()
                                await managebookingpo.drpdownDocumentType[i].selectByVisibleText(MDDocumentType)
                            }
                            if (await managebookingpo.textboxDocumentNumber.length > 0) {
                                await library.fillTextbox(managebookingpo.textboxDocumentNumber[i], MDDocNumber)
                            }
                            if (await managebookingpo.textboxCountryCode.length > 0) {
                                await library.pagescrollAction(managebookingpo.textboxCountryCode[i])
                                await managebookingpo.textboxCountryCode[i].selectByVisibleText(MDCountryCode)
                            }
                            if (await managebookingpo.textboxExpDay.length > 0) {
                                await library.fillTextbox(managebookingpo.textboxExpDay[i], MDExpDay)
                                await managebookingpo.textboxExpMonth1[i].selectByVisibleText(MDExpMonth)
                                await library.fillTextbox(managebookingpo.textboxExpYear1[i], MDExpYear)
                            }
                        }
                        if (await managebookingpo.buttonGotoNext.length > 0) {
                            await library.clickAction(managebookingpo.buttonGotoNext[i])
                        }
                        //await browser.pause(3000)
                    }
                    // var ffp = await $$("//input[@name='FREQ_Number_0']")
                    await library.pagescrollAction(managebookingpo.contactdetails)
                    /*   await mb.email.setValue("mk123@gmail.com")
                      await mb.countrycode.setValue("+91")
                      await mb.phonenumber.setValue("8778765645")
                      await mb.confirmemail.setValue("mk123@gmail.com") */
                    await library.fillTextbox(managebookingpo.textboxEmail2, MDEmail2)
                    await library.fillTextbox(managebookingpo.textboxEmail3, MDEmail3)
                    await library.fillTextbox(managebookingpo.textboxEmergencyName, MDEmergencyName)
                    await library.fillTextbox(managebookingpo.textboxEmergencyCountryCode, MDEmergencyCountrycode)
                    //await browser.pause(2000)
                    await library.clickAction(managebookingpo.boxAutoComplete)
                    //await browser.pause(2000)
                    await library.fillTextbox(managebookingpo.textboxEmergencyPhoneNumber, MDEmergencyPhone)
                    //await browser.pause(2000)
                    await library.pagescrollAction(managebookingpo.buttonPaxContinue)
                    //await browser.pause(2000)
                    await library.clickAction(managebookingpo.buttonPaxContinue)
                    await library.pagetimeout(managebookingpo.confirmpageload)
                    await library.waitforexistAction(managebookingpo.labelBookConfirmtitle)
                    await library.pagescrollAction(managebookingpo.labelBookConfirmtitle1)


                    var mpd1 = Testcase
                    console.log(mpd1 + "MPD testcase")
                    var mpd1result = "Success"
                    var mdfjson = {
                        "Testcase": [mpd1],
                        "DateandTime": new Date().toLocaleString(undefined, {
                            timeZone: 'Asia/Kolkata'
                        }),
                        "Result": [mpd1result]
                    }
                    mbresult.push(mdfjson)
                    let day = new Date().getDate();
                    let month = new Date().getMonth();
                    let year = new Date().getFullYear();
                    let hours = new Date().getHours();
                    let minutes = new Date().getMinutes();

                    console.log("Day :" + day + "," + "Month : " + month + "," + "Year : " + year);
                    var filename = Testcase + '_' + day + "_" + month + "_" + year + "_" + hours + "_" + minutes + ".png";

                    await browser.saveScreenshot("./test/outputartifact/Screenshot/Passed/" + filename.toString());
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
                    var mpd2result = "Failed"
                    var mpd2 = Testcase
                    var mdfjson = {
                        "Testcase": [mpd2],
                        "DateandTime": new Date().toLocaleString(undefined, {
                            timeZone: 'Asia/Kolkata'
                        }),
                        "Result": [mpd2result]
                    }
                    mbresult.push(mdfjson)
                }
                var modifypaxconversion = JSON.stringify(mbresult)
                var modifypaxdata = JSON.parse(modifypaxconversion)
                var tool = new NodeXls();
                var xls = tool.json2xls(modifypaxdata, { order: ["Testcase", "DateandTime", "Result"] });
                fs.writeFileSync('./test/outputartifact/result/website/ModifyDetails.xlsx', xls, 'binary');

            }
        })
    })
})

