const ct = require('../../../src/website/pageobjects/chatbotpo.js')

var exceltojson = require("xlsx-to-json-lc");
const fs = require('fs')
var NodeXls = require('node-xls');


var configData = JSON.parse(fs.readFileSync('configWebsite.json'))
let OD = JSON.parse(fs.readFileSync('test/testdata/json/website/OneWay.json'))
describe('Trip Type', async () => {
    it('Lauch url', async () => {
        await browser.reloadSession()
        await browser.url("https://strgaidtqacbot001.z29.web.core.windows.net/")
        await browser.maximizeWindow()
        await ct.icon.click()
        await $(".custom-loader").waitForExist({ reverse: true })
        await ct.pic.waitForDisplayed()
    });
    const pnrarray = [];
    OD.forEach(({ ExecutionFlag, Question, Expected }) => {

        it('Chatbot', async () => {

            if (ExecutionFlag === "Yes") {
                await ct.input.setValue(Question)
                await ct.send.click()
                await ct.bouncing.waitForExist({ reverse: true })
                await browser.pause(10000)

                await ct.response[2].waitForDisplayed()
                await ct.response[2].waitForExist()
                await browser.pause(10000)
                var Res = await ct.response[2].getText()


                var result
                if (Expected.toLowerCase() === Res.toLowerCase()) {
                    result = "Pass"
                }
                else {
                    result = "fail"
                }


                var jsdata = {
                    "Question": [Question],
                    "Expected": [Expected],
                    "Actual Response": [Res],
                    "Result": [result]
                }

                pnrarray.push(jsdata)
                var stringconversion = JSON.stringify(pnrarray)
                var finaldata = JSON.parse(stringconversion)
                var tool = new NodeXls();
                var xls = tool.json2xls(finaldata, { order: ["Question", "Expected", "Actual Response", "Result"] });
                fs.writeFileSync('./test/outputartifact/result/website/Result.xlsx', xls, 'binary');

                //  fs.writeFile("final.json", JSON.stringify(jsdata), err => {

                //     // Checking for errors
                //     if (err) throw err; 
                // })
            }






        })


    })


})

