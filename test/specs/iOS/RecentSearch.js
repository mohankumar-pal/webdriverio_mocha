const oneway = require('../../../src/ios/pageobjects/onewaypo.js')
const fs = require('fs')
var home = require('../../../src/ios/common/HomePage.js')
var library = require('../../../src/ios/common/Genericlibrary.js')
var NodeXls = require('node-xls');
const search = require('../../../src/ios/pageobjects/RecentSearchpo.js')
const homePage = require('../../../src/ios/pageobjects/Homepagepo.js');
const Homepagepo = require('../../../src/ios/pageobjects/Homepagepo.js');

describe('AI Mobile Automation', () => {
  const OD = JSON.parse(fs.readFileSync("test/testdata/json/mobile/OW_RecentSearch.json"))
  const FromArray = [];
  const ToArray = [];
  const DateArray = [];
  const ReturnDateArray = [];
  const CabinArray = [];
  const PaxArray = [];
  const ResultArray = [];
  OD.forEach(async ({
    Testcase,
    Select_RecentSearch,
    TripType,
    ExecutionFlag,
    CityDateSelection,
    From,
    To,
    Departuredate,
    Returndate,
    CabinType,
    NumberofAdult,
    NumberofChild,
    NumberofInfant,
    IsConcessionary,
    ConcessionaryType
  }) => {
    it('RecentSearch', async () => {
      if (ExecutionFlag == "Yes") {
        try {

          //Homepage
          await browser.pause(4000)
          await home.permissionpopup()
          //await browser.pause(5000)
          if (await library.elementdisplayedAction(Homepagepo.buttonHome))
            await library.clickAction(Homepagepo.buttonHome)

          //Book flight
          await home.bookflight()
          await library.clickAction(Homepagepo.buttonHome)
          await home.bookflight()

          //select triptype
          if (TripType == "oneway")
            await home.selectoneway()
          else if (TripType == "roundtrip")
            await home.selectroundtrip()
          await browser.pause(2000)

          if (CityDateSelection == "Yes") {
            //select org-dest
            await home.fromto(From, To)

            //select date
            if (TripType == "oneway")
              await home.calendar(Departuredate)
            else if (TripType == "roundtrip")
              await home.departcalendar(Departuredate, Returndate)

          }
          //Passenger selection
          await library.clickAction(oneway.textPassenger)
          if (IsConcessionary == "Yes") {
            const ct = "//XCUIElementTypeCell[@name='" + ConcessionaryType + "']"
            const buttonConcession = await $(ct)
            if (await library.elementdisplayedAction(buttonConcession)) {
              await library.clickAction(homePage.toggleConcession) //close prev toggle
            }
            await home.concessionselection(ConcessionaryType)
          }
          await home.clearpassengerselection()
          await home.passengerselection(NumberofAdult, NumberofChild, NumberofInfant)

          //Cabin selection
          await library.clickAction(oneway.cabin)
          await browser.pause(6000)
          await home.cabinselection(CabinType)
          await library.waituntilelementexistAction(oneway.textPassenger)
          await browser.pause(2000)

          //search flights
          await library.clickAction(oneway.buttonSearch)

          //flight list screen
          await library.waituntilelementexistAction(oneway.buttonModifySearch)

          //push data to array
          FromArray.push(From)
          ToArray.push(To)
          DateArray.push(Departuredate)
          CabinArray.push(CabinType)
          var TotalPax = parseInt(NumberofAdult) + parseInt(NumberofChild) + parseInt(NumberofInfant)
          PaxArray.push(TotalPax)

          //close flight list screen
          if (await library.elementdisplayedAction(oneway.buttonCloseIcon))
            await library.clickAction(oneway.buttonCloseIcon)
          if (await library.elementdisplayedAction(oneway.buttonOk))
            await library.clickAction(oneway.buttonOk)
          //await browser.pause(5000)

          //Recent search --> this will work for iOS 6.0 build
          if (Select_RecentSearch == "Yes") {
            await browser.pause(7000)
            await library.clickAction(search.buttonRecentSearch)
            //await browser.pause(5000)
            await library.waituntilelementexistAction(search.iconRecentFirst)
            var searchcount = await search.iconRecent.length
            console.log(searchcount)
            //var j = searchcount - 1 //recent search displays only last 10 searches
            var j = FromArray.length - 1
            for (var i = 1; i <= await searchcount; i++) {
              if (j >= 0) {
                //search order assertion is done using indexing i.e. first cell should have last array item
                const searchitem = '(//XCUIElementTypeCell)[' + i + ']'
                const searchitemloc = await $(searchitem)
                const searchtxt = await library.gettextAction(searchitemloc)
                console.log(searchtxt)
                console.log(FromArray[j])
                await expect(searchitemloc).toHaveTextContaining(FromArray[j])
                console.log(ToArray[j])
                await expect(searchitemloc).toHaveTextContaining(ToArray[j])
                const deptdate = DateArray[j].slice(0, 6)
                console.log(deptdate)
                await expect(searchitemloc).toHaveTextContaining(deptdate)
                console.log(CabinArray[j])
                await expect(searchitemloc).toHaveTextContaining(CabinArray[j])
                console.log(PaxArray[j] + " Passenger")
                await expect(searchitemloc).toHaveTextContaining(PaxArray[j] + " Passenger")
                j--
                // const SearchItemWithUniqueFrom = "//XCUIElementTypeCell[" + i + "]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeStaticText[@name='" + FromArray[j] + "']"
                // const SearchItemWithUniqueFromloc = await $(SearchItemWithUniqueFrom)
                // await expect(SearchItemWithUniqueFromloc).toBeExisting()
                // const SearchItemWithUniqueTo = "//XCUIElementTypeCell[" + i + "]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeStaticText[@name='" + FromArray[j] + "']/following-sibling::XCUIElementTypeStaticText[@name='" + ToArray[j] + "']"
                // const SearchItemWithUniqueToloc = await $(SearchItemWithUniqueTo)
                // await expect(SearchItemWithUniqueToloc).toBeExisting()
                // const SearchItemWithUniqueDate = "//XCUIElementTypeCell[" + i + "]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeStaticText[@name='" + FromArray[j] + "']/following-sibling::XCUIElementTypeStaticText[@name='" + ToArray[j] + "']/following-sibling::XCUIElementTypeStaticText[contains(@name,'" + DateArray[j].slice(0, 6) + "')]"
                // const SearchItemWithUniqueDateloc = await $(SearchItemWithUniqueDate)
                // await expect(SearchItemWithUniqueDateloc).toBeExisting()
              }
            }
            let day = new Date().getDate();
            let month = new Date().getMonth();
            let year = new Date().getFullYear();
            let hours = new Date().getHours();
            let minutes = new Date().getMinutes();
            console.log("Day :" + day + "," + "Month : " + month + "," + "Year : " + year);
            var filename = Testcase + '_' + day + "_" + month + "_" + year + "_" + hours + "_" + minutes + ".png";
            await browser.saveScreenshot("./test/outputartifact/Screenshot/Passed/" + filename.toString());
            var testresult = "Success"
            var jsdata = {
              "TestcaseScenario": [Testcase],
              "DateandTime": new Date().toLocaleString(undefined, {
                timeZone: 'Asia/Kolkata'
              }),
              "TestcaseResult": [testresult],
            }
            ResultArray.push(jsdata)
            var stringconversion = JSON.stringify(ResultArray)
            var finaldata = JSON.parse(stringconversion)
            var tool = new NodeXls();
            var xls = tool.json2xls(finaldata, { order: ["TestcaseScenario", "DateandTime", "TestcaseResult"] });
            fs.writeFileSync('./test/outputartifact/result/mobile/RecentSearchResult.xlsx', xls, 'binary');
            await library.clickAction(search.buttonCloseSearch)
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
          var testresult = "Failed"
          var jsdata = {
            "TestcaseScenario": [Testcase],
            "DateandTime": new Date().toLocaleString(undefined, {
              timeZone: 'Asia/Kolkata'
            }),
            "TestcaseResult": [testresult],
          }
          ResultArray.push(jsdata)
          var stringconversion = JSON.stringify(ResultArray)
          var finaldata = JSON.parse(stringconversion)
          var tool = new NodeXls();
          var xls = tool.json2xls(finaldata, { order: ["TestcaseScenario", "DateandTime", "TestcaseResult"] });
          fs.writeFileSync('./test/outputartifact/result/mobile/RecentSearchResult.xlsx', xls, 'binary');
        }
      }
    })
  })
})



