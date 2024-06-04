const managebookpo= require("../../../src/website/pageobjects/ManageBooking/managebookingpo.js")
const library=require("../../../src/website/common/Genericlibrary.js")
const managebookingPage=require("../../../src/website/common/ManageBooking/managebooking.js")
const validate = require('../../../src/website/common/validation.js')
const home = require('../../../src/website/common/OnewayRoundtrip/HomePage.js')
var exceltojson = require("xlsx-to-json-lc");
const fs = require('fs')
var NodeXls = require('node-xls');
var configData = JSON.parse(fs.readFileSync('configWebsite.json')) 
let OD = JSON.parse(fs.readFileSync('test/testdata/json/website/cancel.json'))
describe('Manage Booking', async () => {
    const mbresult=[];
OD.forEach(({
              ExecutionFlag,Testcase,PNR,Lastname
}) => {

    it('Cancel', async () => {
        
        if (await ExecutionFlag === "Yes") {
    

                   
                    try {
                        
                        await library.createNewsession()
                        await library.urlLaunch(configData['url'])
                        //await browser.pause(2000)
                        //await managebookingPage.incidentpage()
                        await home.AIsignin()
                        await browser.pause(2000)           
                        //await browser.pause(6000)
                        await library.waitforexistAction(managebookpo.labelManageBooking)
                        //await browser.pause(2000)
                        await library.pagescrolltomiddleAction(managebookpo.labelManageBooking)
                        //await browser.pause(2000)
                        await library.clickAction(managebookpo.labelManageBooking)
                        //await browser.pause(2000)
                
                        await library.fillTextbox(managebookpo.textboxBookingRef,PNR)
                        await library.fillTextbox(managebookpo.textboxLastName,Lastname)
                        //await browser.pause(3000)
                        await library.clickAction(managebookpo.buttonSubmit)
                        await library.waitforexistAction(managebookpo.labelPNRRefVal)
                        await library.waitforexistAction(managebookpo.textManageBooking)
                        //await browser.pause(3000)
                        await library.pagescrollAction(managebookpo.textManageBooking)
                        //await browser.pause(1000)
                        await library.clickAction(managebookpo.textManageBooking)
                        //await browser.pause(1000)
                        await library.pagescrollAction(managebookpo.textCancelRefund)
                        //await browser.pause(1000)
                        await library.clickAction( managebookpo.textCancelRefund)
                         await library.waitforexistAction(managebookpo.labelRefundVal)
                         await library.clickAction(managebookpo.buttonConfirmRefund)
                         await library.pagetimeout(managebookpo.confirmpageload)
                         await library.waitforexistAction(managebookpo.textConfirmation)

                         //CANCELLATION TEXT VALIDATION
                         await validate.cancelandrefundvalidation()

                        let day = new Date().getDate();
                        let month = new Date().getMonth();
                        let year = new Date().getFullYear();
                        let hours = new Date().getHours();
                        let minutes = new Date().getMinutes();
    
                        console.log("Day :" + day + "," + "Month : " + month + "," + "Year : " + year);
                        var filename = Testcase + '_' + day + "_" + month + "_" + year + "_" + hours + "_" + minutes + ".png";
    
                        await browser.saveScreenshot("./test/outputartifact/Screenshot/Passed/" + filename.toString());
    
                       var cr1=Testcase
                    var cr1result="Success"
                        var canceljson={
                            "Testcase":[cr1],
                            "DateandTime": new Date().toLocaleString(undefined, {
                                timeZone: 'Asia/Kolkata'
                            }),
                            "Result":[cr1result]
                        }
                        mbresult.push(canceljson)

                      
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
                        var cr2=Testcase
                        var cr2result="Failed"
                            var canceljson={
                                "Testcase":[cr2],
                                "DateandTime": new Date().toLocaleString(undefined, {
                                    timeZone: 'Asia/Kolkata'
                                }),
                                "Result":[cr2result]
                            }
                            mbresult.push(canceljson)
                    }
                    var cancelconversion = JSON.stringify(mbresult)
                    var canceldata = JSON.parse(cancelconversion)
                    var tool = new NodeXls();
                    var xls = tool.json2xls(canceldata, { order: ["Testcase","DateandTime","Result"] });
                    // var xls1=tool.writeFileSync(c)
                    fs.writeFileSync('./test/outputartifact/result/website/CancelResult.xlsx', xls, 'binary');
                
                }
            })
                
            })
        })
