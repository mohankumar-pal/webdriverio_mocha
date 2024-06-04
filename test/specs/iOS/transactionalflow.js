const oneway = require('../../../src/ios/pageobjects/onewaypo.js')
const fs = require('fs')
var paxdetails = require('../../../src/ios/pageobjects/Passengerdetpo.js')
var passenger = require('../../../src/ios/common/PassengerDetails.js')
const addservice = require('../../../src/ios/pageobjects/additionalservicespo.js')
var addionalservice = require('../../../src/ios/common/AdditionalService.js')
const py = require('../../../src/ios/pageobjects/paymentpo.js')
var payment = require('../../../src/ios/common/PaymentPage.js')
var flightlist = require('../../../src/ios/common/FlightlistPage.js')
const fppo = require('../../../src/ios/pageobjects/Flightlistpagepo.js')
const hppo = require('../../../src/ios/pageobjects/Homepagepo.js')
var home = require('../../../src/ios/common/HomePage.js')
var validation = require('../../../src/ios/pageobjects/validationpo.js')
var validate = require('../../../src/ios/common/Validation.js')
var MBreissue = require('../../../src/ios/common/Reissue.js')
var checkin = require('../../../src/ios/common/Checkin.js')
var checkinpo = require('../../../src/ios/pageobjects/checkinpo.js')
var library = require('../../../src/ios/common/Genericlibrary.js')
var NodeXls = require('node-xls');
const paymentpo = require('../../../src/ios/pageobjects/paymentpo.js')


//const OD = JSON.parse(fs.readFileSync("test/testdata/json/OneWay.json"))
describe('AI Mobile Automation', () => {
  const pnrarray = [];
  
  const OD = JSON.parse(fs.readFileSync("test/testdata/json/mobile/OneWay.json"))
  OD.forEach(({
    Testcase,
    ExecutionFlag,
    From,
    To,
    Departuredate,
    CabinType,
    OnwardCabinType,
    NumberofAdult,
    NumberofChild,
    NumberofInfant,
    IsConcessionary,
    ConcessionaryType,
    Doyouwanttoaddpromocode,
    Promocode
  }) => {

    it('One Way', async () => {
      if (ExecutionFlag == "Yes") {
       
        try {
          //HOMEPAGE
          await browser.pause(5000)
          await home.permissionpopup()
          //BOOK FLIGHT
          await home.bookflight()
          await home.selectoneway()
          //await browser.pause(5000)  //to check if cities are loading after a pause
          await home.fromto(From, To)
          await home.calendar(Departuredate)
          //await expect(oneway.textAdult).toBeExisting()
          await library.clickAction(oneway.textPassenger)
          if (IsConcessionary == "Yes") {
            await home.concessionselection(ConcessionaryType)
          }
          await home.passengerselection(NumberofAdult, NumberofChild, NumberofInfant)
          await library.clickAction(oneway.cabin)
          //await library.waituntilelementexistAction(oneway.buttonConfirm)
          await home.cabinselection(CabinType)
          await library.waituntilelementexistAction(oneway.textPassenger)
          await browser.pause(2000)
          await library.clickAction(oneway.buttonSearch)
          //FLIGHT AND CABIN SELECTION
          await library.waituntilelementexistAction(oneway.buttonModifySearch)
          await browser.pause(9000)
          
          await browser.pause(3000)
          var currencytxt = await validate.currencyvalidation(IsConcessionary)
          

          let day = new Date().getDate();
          let month = new Date().getMonth();
          let year = new Date().getFullYear();
          let hours = new Date().getHours();
          let minutes = new Date().getMinutes();

          console.log("Day :" + day + "," + "Month : " + month + "," + "Year : " + year);
          var filename = Testcase + '_' + day + "_" + month + "_" + year + "_" + hours + "_" + minutes + ".png";

          await browser.saveScreenshot("./test/outputartifact/Screenshot/Passed/" + filename.toString());

         
          var testresult = "Success"

          var scenario = Testcase
          console.log(scenario)
          var jsdata = {
            "TestcaseScenario": [scenario],
            "From": [From],
            "To": [To],
            "DateandTime": new Date().toLocaleString(undefined, {
              timeZone: 'Asia/Kolkata'
            }),
            "Currency": [currencytxt],
            "TestcaseResult": [testresult],


          }
          pnrarray.push(jsdata)
          var stringconversion = JSON.stringify(pnrarray)
          var finaldata = JSON.parse(stringconversion)
          var tool = new NodeXls();
          var xls = tool.json2xls(finaldata, { order: ["TestcaseScenario", "From", "To", "DateandTime", "Currency", "TestcaseResult"] });
          fs.writeFileSync('./test/outputartifact/result/mobile/TransactionalflowResult.xlsx', xls, 'binary');

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


          testresult1 = "Failed"
          var jsdata = {
            "TestcaseScenario": [Testcase],
            "From": [From],
            "To": [To],
            "DateandTime": new Date().toLocaleString(undefined, {
              timeZone: 'Asia/Kolkata'
            }),
            "Currency": [currencytxt],
            "TestcaseResult": [testresult1],
          }
          pnrarray.push(jsdata)
          var stringconversion = JSON.stringify(pnrarray)
          var finaldata = JSON.parse(stringconversion)
          var tool = new NodeXls();
          var xls = tool.json2xls(finaldata, { order: ["TestcaseScenario","From", "To", "DateandTime", "Currency", "TestcaseResult"] });
          fs.writeFileSync('./test/outputartifact/result/mobile/TransactionalflowResult.xlsx', xls, 'binary');

        }

        await browser.closeApp()
        await browser.launchApp()
      }
    })
  })
})


