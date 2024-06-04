const managebooking = require("../../pageobjects/OnewayRoundtrip/managebookingpo.js")
const library = require('../../common/Genericlibrary.js')
const fs = require('fs')
var configData = JSON.parse(fs.readFileSync('configWebsite.json')) 

async function cancel(PNR, Lastname, Testcase)
                 {
                    try {
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

                        await library.pagescrollAction(managebooking.textManageBooking)
                        //await browser.pause(1000)
                        await library.clickAction(managebooking.textManageBooking)
                        //await browser.pause(1000)
                        await library.pagescrollAction(managebooking.buttonCancelandRefund)
                        //await browser.pause(1000)
                        await library.clickAction(managebooking.buttonCancelandRefund)
                        await library.waitforexistAction(managebooking.textRefundVal)
                        await library.clickAction(managebooking.buttonConfirmRefund)
                        await library.pagetimeout(managebooking.page_loader)
                        await library.waitforexistAction(managebooking.textConfirmation)

                        let day = new Date().getDate();
                        let month = new Date().getMonth();
                        let year = new Date().getFullYear();
                        let hours = new Date().getHours();
                        let minutes = new Date().getMinutes();
    
                        console.log("Day :" + day + "," + "Month : " + month + "," + "Year : " + year);
                        var filename = 'CL_'+Testcase + '_' + day + "_" + month + "_" + year + "_" + hours + "_" + minutes + ".png";
    
                        await browser.saveScreenshot("./test/testdata/Screenshot/Passed/" + filename.toString());
    
    
                        console.log(await library.gettextAction(managebooking.textConfirmation))
                       var cr1=Testcase
                    var cr1result="Success"
                        var mbjson={
                            "Testcase":[cr1],
                            "DateandTime": new Date().toLocaleString(undefined, {
                                timeZone: 'Asia/Kolkata'
                            }),
                            "Result":[cr1result]
                        }
                    }
                    catch (e) {
                        let day = new Date().getDate();
                        let month = new Date().getMonth();
                        let year = new Date().getFullYear();
                        let hours = new Date().getHours();
                        let minutes = new Date().getMinutes();
    
                        console.log("Day :" + day + "," + "Month : " + month + "," + "Year : " + year);
                        var filename = 'CL_'+Testcase + '_' + day + "_" + month + "_" + year + "_" + hours + "_" + minutes + ".png";
    
                        await browser.saveScreenshot("./test/testdata/Screenshot/Failed/" + filename.toString());
                        var cr2=Testcase
                        var cr2result="Failed"
                            var mbjson={
                                "Testcase":[cr2],
                                "DateandTime": new Date().toLocaleString(undefined, {
                                    timeZone: 'Asia/Kolkata'
                                }),
                                "Result":[cr2result]
                            }
                            
                    
                    }
                    
                    return mbjson

                }
             exports.cancel=cancel;   
