const loyaltypo= require("../../../src/website/pageobjects/Loyalty/loyaltypo.js")
const library=require("../../../src/website/common/Genericlibrary.js")
const managebookingPage=require("../../../src/website/common/ManageBooking/managebooking.js")
var exceltojson = require("xlsx-to-json-lc");
const fs = require('fs')
var NodeXls = require('node-xls');
var configData = JSON.parse(fs.readFileSync('configWebsite.json')) 
//let OD = JSON.parse(fs.readFileSync('test/testdata/json/cancel.json'))
describe('Manage Booking', async () => {
    const mbresult=[];
/* OD.forEach(({
            
}) => { */

    it('Loyalty', async () => {
        
        if (await "Yes" === "Yes") {
    

                   
                    try {
                        
                        await library.createNewsession()
                        await library.urlLaunch(configData['url'])
                        await browser.pause(2000)

                        await library.waitforexistAction(loyaltypo.buttonAccountCreation)
                        await library.clickAction(loyaltypo.buttonAccountCreation)
                        await library.waitforexistAction(loyaltypo.labelCreateanAccount)
                        var FN="Mohan"
                        await library.fillTextbox(loyaltypo.buttonFirstname,FN)
                        var LN="kumar"
                        await library.fillTextbox(loyaltypo.buttonLastname,LN)
                        var dob="12/10/1999"
                        await library.fillTextbox(loyaltypo.buttonDOB,dob)

                       await library.clickAction(loyaltypo.buttonContinue)
                       await browser.pause(10000)

                       await library.waitforexistAction(loyaltypo.labelContactInfo)
                       await library.pagescrolltomiddleAction(loyaltypo.buttonMobileNum,mobilenum)
                        var mobilenum="8756452345"
                       await library.fillTextbox(loyaltypo.buttonMobileNum,mobilenum)
                       await library.pagescrolltomiddleAction(loyaltypo.buttonOTP)
                       await library.clickAction(loyaltypo.buttonOTP)
                       await library.isexistingAction(loyaltypo.checkboxRecaptcha)
                       
                       await browser.pause(40000)


                       

                       /*  let day = new Date().getDate();
                        let month = new Date().getMonth();
                        let year = new Date().getFullYear();
                        let hours = new Date().getHours();
                        let minutes = new Date().getMinutes();
    
                        console.log("Day :" + day + "," + "Month : " + month + "," + "Year : " + year);
                        var filename = Testcase + '_' + day + "_" + month + "_" + year + "_" + hours + "_" + minutes + ".png";
    
                        await browser.saveScreenshot("./test/testdata/Screenshot/Passed/" + filename.toString());
    
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
 */
                      
                    }
                    catch (e) {
                     /*    let day = new Date().getDate();
                        let month = new Date().getMonth();
                        let year = new Date().getFullYear();
                        let hours = new Date().getHours();
                        let minutes = new Date().getMinutes();
    
                        console.log("Day :" + day + "," + "Month : " + month + "," + "Year : " + year);
                        var filename = Testcase + '_' + day + "_" + month + "_" + year + "_" + hours + "_" + minutes + ".png";
    
                        await browser.saveScreenshot("./test/testdata/Screenshot/Failed/" + filename.toString());
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

                    
                     */
                    
                    }
                  
                  /*   var cancelconversion = JSON.stringify(mbresult)
                    var canceldata = JSON.parse(cancelconversion)
                    var tool = new NodeXls();
                    var xls = tool.json2xls(canceldata, { order: ["Testcase","DateandTime","Result"] });
                    // var xls1=tool.writeFileSync(c)
                    fs.writeFileSync('./test/testdata/result/CancelResult.xlsx', xls, 'binary'); */
                
                }
            })
                
        //    })
        })
