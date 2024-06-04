const menupo = require('../../../src/website/pageobjects/MenuLinkspo.js')
const homepo = require('../../../src/website/pageobjects/OnewayRoundtrip/Homepagepo.js')
const home = require('../../../src/website/common/OnewayRoundtrip/HomePage.js')
const library = require('../../../src/website/common/Genericlibrary.js')
const menu = require('../../../src/website/common/menulinks.js')
const fs = require('fs')
var NodeXls = require('node-xls');
const configData = JSON.parse(fs.readFileSync('configWebsite.json'))

describe('Web Menu Links', () => {

    it('Verify website menu links', async () => {
        const resultarray = [];
        //LAUNCH URL
        await library.createNewsession()
        await library.urlLaunch(configData['url'])
        await home.AIsignin()
        await library.waitforexistAction(homepo.buttonSearchFlights)
        var services = ['Book & Manage', 'Where We Fly', 'Prepare to Travel', 'Air India Experience', 'Loyalty', 'Support', 'Search', 'Sign In']
        console.log(services.length)
        var result;
        for (var i = 0; i < await services.length; i++) {
            try {
                //search
                if (services[i] == 'Search')
                    await menu.SearchLink()

                //support
                if (services[i] == 'Support')
                    await menu.SupportLink()

                //sign in
                if (services[i] == 'Sign In')
                    await menu.SignInLink()

                //Book & Manage
                if (services[i] == 'Book & Manage')
                    await menu.BookAndManageLink()

                //where we fly
                if (services[i] == 'Where We Fly')
                    await menu.WhereWeFlyLink()

                //prepare to travel
                if (services[i] == 'Prepare to Travel')
                    await menu.PrepareToTravelLink()

                //Air India Experience
                if (services[i] == 'Air India Experience')
                    await menu.AirIndiaExperienceLink()

                //Loyalty
                if (services[i] == 'Loyalty')
                    await menu.LoyaltyLink()


                result = 'Validated'
                let day = new Date().getDate();
                let month = new Date().getMonth();
                let year = new Date().getFullYear();
                let hours = new Date().getHours();
                let minutes = new Date().getMinutes();

                console.log("Day :" + day + "," + "Month : " + month + "," + "Year : " + year);
                var filename = services[i] + '_' + day + "_" + month + "_" + year + "_" + hours + "_" + minutes + ".png";

                await browser.saveScreenshot("./test/outputartifact/Screenshot/Passed/" + filename.toString());
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
            resultarray.push(jsdata)
            var stringconversion = JSON.stringify(resultarray)
            var finaldata = JSON.parse(stringconversion)
            var tool = new NodeXls();
            var xls = tool.json2xls(finaldata, { order: ["TestcaseScenario", "DateandTime", "TestcaseResult"] });
            fs.writeFileSync('./test/outputartifact/result/website/MenuResult.xlsx', xls, 'binary');
            await library.clickAction(menupo.iconAirIndia)
        }
    })
})

