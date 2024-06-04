const menupo = require('../../../src/ios/pageobjects/MenuLinkspo.js')
const acceptpermissions = require('../../../src/ios/common/HomePage.js')
const library = require('../../../src/ios/common/Genericlibrary.js')
const fs = require('fs')
var NodeXls = require('node-xls');

describe('Hamburger Menu Links', () => {

    it('Verify response status of menu links', async () => {
        const resultarray = [];
        await browser.pause(5000)
        await acceptpermissions.permissionpopup()
        await library.clickAction(menupo.buttonHamburgerMenu)
        var services = ['Flight Status', 'Boarding Passes', 'Track Your Bags', 'Concessionary Fares', 'Flight Schedule', 'Lounge Finder', 'Inflight Magazine', 'Prepare To Travel', 'Baggage Guidelines', 'FAQs', 'About Air India', 'About Flying Returns', 'Press Releases', 'Terms & Conditions', 'App Disclaimer', 'App Settings', 'Contact Us', 'Refund Information', 'AirSewa', 'Air India Website']
        console.log(services.length)
        var result;
        for (var i = 0; i < await services.length; i++) {
            try {
                const service = '//XCUIElementTypeStaticText[@name="' + services[i] + '"]'
                const serviceloc = await $(service)
                if (i >= 9)
                    await library.swipeupAction()
                await library.clickAction(serviceloc)
                await browser.pause(12000)
                if (await library.elementexistingAction(menupo.textSignin)) {
                    await library.clickAction(menupo.textboxEmail)
                    await library.filltextboxAction(menupo.textboxEmail, 'qa.automation@airindia.com')
                    await library.clickAction(menupo.buttonNext)
                    await library.clickAction(menupo.textboxPassword)
                    await library.filltextboxAction(menupo.textboxPassword, 'Automation*123')
                    await library.clickAction(menupo.buttonSignin)
                    await library.waituntilelementexistAction(menupo.textStaySignedIn)
                    await library.clickAction(menupo.buttonYes)
                    await browser.pause(5000)
                }
                if (await library.elementexistingAction(menupo.text404Error)) {
                    result = '404 Error'
                    throw result

                }
                else {
                    result = 'Success'
                    let day = new Date().getDate();
                    let month = new Date().getMonth();
                    let year = new Date().getFullYear();
                    let hours = new Date().getHours();
                    let minutes = new Date().getMinutes();

                    console.log("Day :" + day + "," + "Month : " + month + "," + "Year : " + year);
                    var filename = services[i] + '_' + day + "_" + month + "_" + year + "_" + hours + "_" + minutes + ".png";

                    await browser.saveScreenshot("./test/outputartifact/Screenshot/Passed/" + filename.toString());

                }


                var jsdata = {
                    "TestcaseScenario": [services[i]],
                    "DateandTime": new Date().toLocaleString(undefined, {
                        timeZone: 'Asia/Kolkata'
                    }),
                    "TestcaseResult": [result],
                }

            }
            catch (e) {
                let day = new Date().getDate();
                let month = new Date().getMonth();
                let year = new Date().getFullYear();
                let hours = new Date().getHours();
                let minutes = new Date().getMinutes();

                console.log("Day :" + day + "," + "Month : " + month + "," + "Year : " + year);
                var filename = services[i] + '_' + day + "_" + month + "_" + year + "_" + hours + "_" + minutes + ".png";

                await browser.saveScreenshot("./test/outputartifact/Screenshot/Failed/" + filename.toString());
                var jsdata = {
                    "TestcaseScenario": [services[i]],
                    "DateandTime": new Date().toLocaleString(undefined, {
                        timeZone: 'Asia/Kolkata'
                    }),
                    "TestcaseResult": [result],
                }
            }
            if (await library.elementexistingAction(menupo.buttonNavigateLeft)) {
                await library.clickAction(menupo.buttonNavigateLeft)
            }
            if (await library.elementexistingAction(menupo.buttonBack)) {
                await library.clickAction(menupo.buttonBack)
            }
            if (await library.elementexistingAction(menupo.buttonClose)) {
                await library.clickAction(menupo.buttonClose)
            }
            resultarray.push(jsdata)
            var stringconversion = JSON.stringify(resultarray)
            var finaldata = JSON.parse(stringconversion)
            var tool = new NodeXls();
            var xls = tool.json2xls(finaldata, { order: ["TestcaseScenario", "DateandTime", "TestcaseResult"] });
            fs.writeFileSync('./test/outputartifact/result/mobile/MenuResult.xlsx', xls, 'binary');
        }

    })
})

