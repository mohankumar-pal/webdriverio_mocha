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
var library = require('../../../src/ios/common/Genericlibrary.js')
var NodeXls = require('node-xls');
//await browser.pause(200000)
const OD = JSON.parse(fs.readFileSync("test/testdata/json/Multicity.json"))
describe('AI Mobile Automation', () => {
  const pnrarray = [];
  OD.forEach(({
    Testcase, ExecutionFlag, Segment, FlightType, Segment1From, Segment1To, Segment2From,
    Segment2To, Segment3From, Segment3To, Segment4From, Segment4To, Segment1Date,
    Segment2Date, Segment3Date, Segment4Date, CabinType, NumberofAdult, NumberofChild,
    NumberofInfant, SubCabinType, Adult1Tittle, Adult1FirstName, Adult1LastName, Adult1DOB,
    DoyouWanttoAddAdult1FFP, FFPairlineAdult1, FFPnumberAdult1, Adult2Tittle, Adult2FirstName,
    Adult2LastName, Adult2DOB, DoyouWanttoAddAdult2FFP, FFPairlineAdult2, FFPnumberAdult2,
    Adult3Tittle, Adult3FirstName, Adult3LastName, Adult3DOB, DoyouWanttoAddAdult3FFP,
    FFPairlineAdult3, FFPnumberAdult3, Adult4Tittle, Adult4FirstName, Adult4LastName, Adult4DOB,
    DoyouWanttoAddAdult4FFP, FFPairlineAdult4, FFPnumberAdult4, Adult5Tittle, Adult5FirstName,
    Adult5LastName, Adult5DOB, DoyouWanttoAddAdult5FFP, FFPairlineAdult5, FFPnumberAdult5, Adult6Tittle,
    Adult6FirstName, Adult6LastName, Adult6DOB, DoyouWanttoAddAdult6FFP, FFPairlineAdult6, FFPnumberAdult6,
    Adult7Tittle, Adult7FirstName, Adult7LastName, Adult7DOB, DoyouWanttoAddAdult7FFP, FFPairlineAdult7,
    FFPnumberAdult7, Adult8Tittle, Adult8FirstName, Adult8LastName, Adult8DOB, DoyouWanttoAddAdult8FFP,
    FFPairlineAdult8, FFPnumberAdult8, Adult9Tittle, Adult9FirstName, Adult9LastName, Adult9DOB,
    DoyouWanttoAddAdult9FFP, FFPairlineAdult9, FFPnumberAdult9, Infant1FirstName, Infant1LastName, Infant1DOBDay, Infant1DOBMonth, Infant1DOBYear, Infant2FirstName,
    Infant2LastName, Infant2DOBDay, Infant2DOBMonth, Infant2DOBYear, Infant3FirstName,
    Infant3LastName, Infant3DOBDay, Infant3DOBMonth, Infant3DOBYear, Infant4FirstName,
    Infant4LastName, Infant4DOBDay, Infant4DOBMonth, Infant4DOBYear, Infant5FirstName, Infant5LastName,
    Infant5DOBDay, Infant5DOBMonth, Infant5DOBYear, Infant6FirstName, Infant6LastName, Infant6DOBDay,
    Infant6DOBMonth, Infant6DOBYear, Infant7FirstName, Infant7LastName, Infant7DOBDay, Infant7DOBMonth,
    Infant7DOBYear, Infant8FirstName, Infant8LastName, Infant8DOBDay, Infant8DOBMonth, Infant8DOBYear,
    Infant9FirstName, Infant9LastName, Infant9DOBDay, Infant9DOBMonth, Infant9DOBYear, Child1Tittle,
    Child1FirstName, Child1LastName, Child1DOBDay, Child1DOBMonth, Child1DOBYear,
    DoyouWanttoAddChild1FFP, FFPairlineChild1, FFPnumberChild1, Child2Tittle, Child2FirstName,
    Child2LastName, Child2DOBDay, Child2DOBMonth, Child2DOBYear, DoyouWanttoAddChild2FFP, FFPairlineChild2,
    FFPnumberChild2, Child3Tittle, Child3FirstName, Child3LastName, Child3DOBDay, Child3DOBMonth,
    Child3DOBYear, DoyouWanttoAddChild3FFP, FFPairlineChild3, FFPnumberChild3, Child4Tittle, Child4FirstName,
    Child4LastName, Child4DOBDay, Child4DOBMonth, Child4DOBYear, DoyouWanttoAddChild4FFP, FFPairlineChild4,
    FFPnumberChild4, Child5Tittle, Child5FirstName, Child5LastName, Child5DOBDay, Child5DOBMonth,
    Child5DOBYear, DoyouWanttoAddChild5FFP, FFPairlineChild5, FFPnumberChild5, Child6Tittle, Child6FirstName,
    Child6LastName, Child6DOBDay, Child6DOBMonth, Child6DOBYear, DoyouWanttoAddChild6FFP, FFPairlineChild6,
    FFPnumberChild6, Child7Tittle, Child7FirstName, Child7LastName, Child7DOBDay, Child7DOBMonth, Child7DOBYear,
    DoyouWanttoAddChild7FFP, FFPairlineChild7, FFPnumberChild7, Child8Tittle, Child8FirstName, Child8LastName,
    Child8DOBDay, Child8DOBMonth, Child8DOBYear, DoyouWanttoAddChild8FFP, FFPairlineChild8,
    FFPnumberChild8, Child9Tittle, Child9FirstName, Child9LastName, Child9DOBDay, Child9DOBMonth,
    Child9DOBYear, DoyouWanttoAddChild9FFP, FFPairlineChild9, FFPnumberChild9,
    Email, CountryCode, MobileNumber, Adult1gender, Adult1DOBDay, Adult1DOBMonth, Adult1DOBYear, Adult1Nationality, Adult1DocumentNumber,
    Adult1Issuedcountry, Adult1Expirydate, Adult1Expirymonth, Adult1ExpiryYear, Adult2gender, Adult2DOBDay,
    Adult2DOBMonth, Adult2DOBYear, Adult2Nationality, Adult2DocumentNumber, Adult2Issuedcountry, Adult2Expirydate, Adult2Expirymonth,
    Adult2ExpiryYear, Adult3gender, Adult3DOBDay, Adult3DOBMonth, Adult3DOBYear, Adult3Nationality, Adult3DocumentNumber, Adult3Issuedcountry, Adult3Expirydate, Adult3Expirymonth,
    Adult3ExpiryYear, Adult4gender, Adult4DOBDay, Adult4DOBMonth, Adult4DOBYear, Adult4Nationality, Adult4DocumentNumber, Adult4Issuedcountry, Adult4Expirydate, Adult4Expirymonth,
    Adult4ExpiryYear, Adult5gender, Adult5DOBDay, Adult5DOBMonth, Adult5DOBYear, Adult5Nationality, Adult5DocumentNumber, Adult5Issuedcountry, Adult5Expirydate, Adult5Expirymonth,
    Adult5ExpiryYear, Adult6gender, Adult6DOBDay, Adult6DOBMonth, Adult6DOBYear, Adult6Nationality, Adult6DocumentNumber, Adult6Issuedcountry, Adult6Expirydate, Adult6Expirymonth,
    Adult6ExpiryYear, Adult7gender, Adult7DOBDay, Adult7DOBMonth, Adult7DOBYear, Adult7Nationality, Adult7DocumentNumber, Adult7Issuedcountry, Adult7Expirydate, Adult7Expirymonth,
    Adult7ExpiryYear, Adult8gender, Adult8DOBDay, Adult8DOBMonth, Adult8DOBYear, Adult8Nationality, Adult8DocumentNumber, Adult8Issuedcountry, Adult8Expirydate, Adult8Expirymonth,
    Adult8ExpiryYear, Adult9gender, Adult9DOBDay, Adult9DOBMonth, Adult9DOBYear, Adult9Nationality, Adult9DocumentNumber, Adult9Issuedcountry, Adult9Expirydate, Adult9Expirymonth, Adult9ExpiryYear,
    Child1gender, Child1Nationality, Child1DocumentNumber, Child1Issuedcountry, Child1Expirydate, Child1Expirymonth, Child1ExpiryYear,
    Child2gender, Child2Nationality, Child2DocumentNumber, Child2Issuedcountry, Child2Expirydate, Child2Expirymonth, Child2ExpiryYear,
    Child3gender, Child3Nationality, Child3DocumentNumber, Child3Issuedcountry, Child3Expirydate, Child3Expirymonth, Child3ExpiryYear,
    Child4gender, Child4Nationality, Child4DocumentNumber, Child4Issuedcountry, Child4Expirydate, Child4Expirymonth, Child4ExpiryYear,
    Child5gender, Child5Nationality, Child5DocumentNumber, Child5Issuedcountry, Child5Expirydate, Child5Expirymonth, Child5ExpiryYear,
    Child6gender, Child6Nationality, Child6DocumentNumber, Child6Issuedcountry, Child6Expirydate, Child6Expirymonth, Child6ExpiryYear,
    Child7gender, Child7Nationality, Child7DocumentNumber, Child7Issuedcountry, Child7Expirydate, Child7Expirymonth, Child7ExpiryYear,
    Child8gender, Child8Nationality, Child8DocumentNumber, Child8Issuedcountry, Child8Expirydate, Child8Expirymonth, Child8ExpiryYear,
    Child9gender, Child9Nationality, Child9DocumentNumber, Child9Issuedcountry, Child9Expirydate, Child9Expirymonth, Child9ExpiryYear,
    Infant1gender, Infant2gender, Infant3gender, Infant4gender, Infant5gender, Infant6gender, Infant7gender, Infant8gender, Infant9gender,
    Infant1Nationality, Infant2Nationality, Infant3Nationality, Infant4Nationality, Infant5Nationality, Infant6Nationality, Infant7Nationality, Infant8Nationality, Infant9Nationality,
    Infant1DocumentNumber, Infant2DocumentNumber, Infant3DocumentNumber, Infant4DocumentNumber, Infant5DocumentNumber, Infant6DocumentNumber, Infant7DocumentNumber, Infant8DocumentNumber, Infant9DocumentNumber,
    Infant1Issuedcountry, Infant2Issuedcountry, Infant3Issuedcountry, Infant4Issuedcountry, Infant5Issuedcountry, Infant6Issuedcountry, Infant7Issuedcountry, Infant8Issuedcountry, Infant9Issuedcountry,
    Infant1Expirydate, Infant2Expirydate, Infant3Expirydate, Infant4Expirydate, Infant5Expirydate, Infant6Expirydate, Infant7Expirydate, Infant8Expirydate, Infant9Expirydate,
    Infant1Expirymonth, Infant2Expirymonth, Infant3Expirymonth, Infant4Expirymonth, Infant5Expirymonth, Infant6Expirymonth, Infant7Expirymonth, Infant8Expirymonth, Infant9Expirymonth,
    Infant1ExpiryYear, Infant2ExpiryYear, Infant3ExpiryYear, Infant4ExpiryYear, Infant5ExpiryYear, Infant6ExpiryYear, Infant7ExpiryYear, Infant8ExpiryYear, Infant9ExpiryYear,
    CdEmail, CdCountryCode, CdMobNum, CdConfirmEmail, CdEmail2, CdEmail3, EmergencyDetails, EmergencyName, EmergencyCountrycode, EmergencyMobNum, DoyouwanttoaddWC,
    WcPassenger1Confirm, WcPassenger2Confirm, WcPassenger3Confirm, WcPassenger4Confirm, WcPassenger5Confirm, WcPassenger6Confirm, WcPassenger7Confirm, WcPassenger8Confirm, WcPassenger9Confirm,
    DoyouwanttoaddMeals, AddBabyMeal, Passenger1FoodConfirm, Passenger2FoodConfirm, Passenger3FoodConfirm, Passenger4FoodConfirm, Passenger5FoodConfirm, Passenger6FoodConfirm, Passenger7FoodConfirm, Passenger8FoodConfirm, Passenger9FoodConfirm, Passenger1FoodName, Passenger2FoodName, Passenger3FoodName, Passenger4FoodName, Passenger5FoodName, Passenger6FoodName, Passenger7FoodName, Passenger8FoodName, Passenger9FoodName,
    DouyouwanttoaddAB, ABPassenger1Confirm, ABPassenger2Confirm, ABPassenger3Confirm, ABPassenger4Confirm, ABPassenger5Confirm, ABPassenger6Confirm, ABPassenger7Confirm, ABPassenger8Confirm, ABPassenger9Confirm, Passenger1AB, Passenger2AB, Passenger3AB, Passenger4AB, Passenger5AB, Passenger6AB, Passenger7AB, Passenger8AB, Passenger9AB,
    SeatType, DoyouwanttoaddSeat, PaymentType, CardNumber, CardExpMonth, CardExpYear, CVV, CardHolderName, CardEmail, CardMobile, HouseNumber, ApartmentNumber, Pincode, City, Country, State, ManageBooking, ModifyDetails,
    MDTestcase, MBGender, MBDOBdate, MBDOBmonth, MBDOByear, MBEmail2, MBEmail3, MBEmergencyName, MBEmergencyCountrycode, MBEmergencyPhone, CLTestcase, Cancel,
    MBNationality, MBDocNumber, MBCountryCode, MBExpDay, MBExpMonth, MBExpYear, MBDocumentType, RITestcase, RISegment1, RISegment1From, RISegment1To, RISegment1Date,
    RISegment2, RISegment2From, RISegment2To, RISegment2Date, RISegment3, RISegment3From, RISegment3To, RISegment3Date,
    RISegment4, RISegment4From, RISegment4To, RISegment4Date, RISegment1Cabin, RISegment2Cabin, ModifyFlights, MBAS,
    ASTestcase, MBDoyouwanttoaddAB,
    MBPassenger1Confirm, MBPassenger1AB, MBPassenger2Confirm, MBPassenger2AB, MBPassenger3Confirm, MBPassenger3AB,
    MBPassenger4Confirm, MBPassenger4AB, MBPassenger5Confirm, MBPassenger5AB, MBPassenger6Confirm, MBPassenger6AB, MBPassenger7Confirm,
    MBPassenger7AB, MBPassenger8Confirm, MBPassenger8AB, MBPassenger9Confirm, MBPassenger9AB, MBDoyouwanttoaddWC, MBPassenger1ConfirmWC, MBPassenger2ConfirmWC, MBPassenger3ConfirmWC, MBPassenger4ConfirmWC, MBPassenger5ConfirmWC,
    MBPassenger6ConfirmWC, MBPassenger7ConfirmWC, MBPassenger8ConfirmWC, MBPassenger9ConfirmWC,
    MBDoyouwanttoaddMeal,
    MBPassenger1FoodConfirm, MBPassenger1FoodName, MBPassenger2FoodConfirm, MBPassenger2FoodName, MBPassenger3FoodConfirm,
    MBPassenger3FoodName, MBPassenger4FoodConfirm, MBPassenger4FoodName, MBPassenger5FoodConfirm, MBPassenger5FoodName,
    MBPassenger6FoodConfirm, MBPassenger6FoodName, MBPassenger7FoodConfirm, MBPassenger7FoodName, MBPassenger8FoodConfirm, MBPassenger8FoodName,
    MBPassenger9FoodConfirm, MBPassenger9FoodName, MBDoyouwanttoaddSeat, MBTypeofSeat, MBPaymentType,
    Promocode, Doyouwanttoaddpromocode
  }) => {

    it('Multicity', async () => {
      if (ExecutionFlag == "Yes") {
        try {
          //HOMEPAGE
          if (await library.elementdisplayedAction(oneway.buttonConfirmNow)) {
            await library.clickAction(oneway.buttonConfirmNow)
          }
          await browser.pause(5000)
          await home.permissionpopup()
          //BOOK FLIGHT
          await home.bookflight()
          await home.selectmulticity()
          var fromlist = [Segment1From, Segment2From, Segment3From, Segment4From]
          var tolist = [Segment1To, Segment2To, Segment3To, Segment4To]
          var datelist = [Segment1Date, Segment2Date, Segment3Date, Segment4Date]
          await home.cityandcalendar(Segment, fromlist, tolist, datelist)
          await library.clickAction(oneway.textPassenger)
          await library.waituntilelementexistAction(oneway.textAdult)
          // if (IsConcessionary == "Yes") {
          //   await home.concessionselection(ConcessionaryType)
          // }
          await home.passengerselection(NumberofAdult, NumberofChild, NumberofInfant)
          await library.clickAction(oneway.cabin)
          await library.waituntilelementexistAction(oneway.buttonConfirm)
          await home.cabinselection(CabinType)
          await library.waituntilelementexistAction(oneway.textPassenger)
          // if (Doyouwanttoaddpromocode == "Yes") {
          //   await home.promotioncode(Promocode)
          // }
          await library.clickAction(oneway.buttonSearch)
          //FLIGHT AND CABIN SELECTION
          await library.waituntilelementexistAction(oneway.textSelectFareType)
          await browser.pause(9000)
          //await library.downscrollAction()
          //var promotxt = validate.promocodevalidation(Doyouwanttoaddpromocode)
          //await browser.pause(3000)
          var currencytxt = await validate.multicitycurrencyvalidation()
          await flightlist.multicitycabinselection(CabinType, SubCabinType)
          await flightlist.flightselection(FlightType, Segment)
          //PASSENGER DETAILS
          await library.waituntilelementexistAction(oneway.textPaxDetails)
          //var concessiontxt = await validate.concessionvalidation(IsConcessionary)
          //await passenger.selectfillpaxbutton()
          var adulttittle = [Adult1Tittle, Adult2Tittle, Adult3Tittle, Adult4Tittle, Adult5Tittle, Adult6Tittle, Adult7Tittle, Adult8Tittle, Adult9Tittle]
          var adultfirstname = [Adult1FirstName, Adult2FirstName, Adult3FirstName, Adult4FirstName, Adult5FirstName, Adult6FirstName, Adult7FirstName, Adult8FirstName, Adult9FirstName]
          var adultlastName = [Adult1LastName, Adult2LastName, Adult3LastName, Adult4LastName, Adult5LastName, Adult6LastName, Adult7LastName, Adult8LastName, Adult9LastName]
          var adultdobday = [Adult1DOBDay, Adult2DOBDay, Adult3DOBDay, Adult4DOBDay, Adult5DOBDay, Adult6DOBDay, Adult7DOBDay, Adult8DOBDay, Adult9DOBDay]
          var adultdobmonth = [Adult1DOBMonth, Adult2DOBMonth, Adult3DOBMonth, Adult4DOBMonth, Adult5DOBMonth, Adult6DOBMonth, Adult7DOBMonth, Adult8DOBMonth, Adult9DOBMonth]
          var adultdobyear = [Adult1DOBYear, Adult2DOBYear, Adult3DOBYear, Adult4DOBYear, Adult5DOBYear, Adult6DOBYear, Adult7DOBYear, Adult8DOBYear, Adult9DOBYear]
          //var travelerinfo = [TravelerInfo1, TravelerInfo2, TravelerInfo3, TravelerInfo4, TravelerInfo5, TravelerInfo6, TravelerInfo7, TravelerInfo8, TravelerInfo9]
          var Nationlaity = [Adult1Nationality, Adult2Nationality, Adult3Nationality, Adult4Nationality, Adult5Nationality, Adult6Nationality, Adult7Nationality, Adult8Nationality, Adult9Nationality]
          var passportno = [Adult1DocumentNumber, Adult2DocumentNumber, Adult3DocumentNumber, Adult4DocumentNumber, Adult5DocumentNumber, Adult6DocumentNumber, Adult7DocumentNumber, Adult8DocumentNumber, Adult9DocumentNumber]
          var passportissuecountry = [Adult1Issuedcountry, Adult2Issuedcountry, Adult3Issuedcountry, Adult4Issuedcountry, Adult5Issuedcountry, Adult6Issuedcountry, Adult7Issuedcountry, Adult8Issuedcountry, Adult9Issuedcountry]

          var gender = [Adult1gender, Adult2gender, Adult3gender, Adult3gender, Adult4gender, Adult5gender, Adult6gender, Adult7gender, Adult8gender, Adult9gender]
          var expirydate = [Adult1Expirydate, Adult2Expirydate, Adult3Expirydate, Adult4Expirydate, Adult5Expirydate, Adult6Expirydate, Adult7Expirydate, Adult8Expirydate, Adult9Expirydate]
          var ffp = [DoyouWanttoAddAdult1FFP, DoyouWanttoAddAdult2FFP, DoyouWanttoAddAdult3FFP, DoyouWanttoAddAdult4FFP, DoyouWanttoAddAdult5FFP, DoyouWanttoAddAdult6FFP, DoyouWanttoAddAdult7FFP, DoyouWanttoAddAdult8FFP, DoyouWanttoAddAdult9FFP]
          var frequentpairlineadult = [FFPairlineAdult1, FFPairlineAdult2, FFPairlineAdult3, FFPairlineAdult4, FFPairlineAdult5, FFPairlineAdult6, FFPairlineAdult7, FFPairlineAdult8, FFPairlineAdult9]
          var frequentflyernumber = [FFPnumberAdult1, FFPairlineAdult2, FFPairlineAdult3, FFPnumberAdult4, FFPairlineAdult5, FFPairlineAdult6, FFPnumberAdult7, FFPairlineAdult8, FFPairlineAdult9]


          var childtittle = [Child1Tittle, Child2Tittle, Child3Tittle, Child4Tittle, Child5Tittle, Child6Tittle, Child7Tittle, Child8Tittle, Child9Tittle]
          var childfirstname = [Child1FirstName, Child2FirstName, Child3FirstName, Child4FirstName, Child5FirstName, Child6FirstName, Child7FirstName, Child8FirstName, Child9FirstName]
          var childlastName = [Child1LastName, Child2LastName, Child3LastName, Child4LastName, Child5LastName, Child6LastName, Child7LastName, Child8LastName, Child9LastName]
          var childdobDay = [Child1DOBDay, Child2DOBDay, Child3DOBDay, Child4DOBDay, Child5DOBDay, Child6DOBDay, Child7DOBDay, Child8DOBDay, Child9DOBDay]
          var childdobMonth = [Child1DOBMonth, Child2DOBMonth, Child3DOBMonth, Child4DOBMonth, Child5DOBMonth, Child6DOBMonth, Child7DOBMonth, Child8DOBMonth, Child9DOBMonth]
          var childdobYear = [Child1DOBYear, Child2DOBYear, Child3DOBYear, Child4DOBYear, Child5DOBYear, Child6DOBYear, Child7DOBYear, Child8DOBYear, Child9DOBYear]
          var childffp = [DoyouWanttoAddChild1FFP, DoyouWanttoAddChild2FFP, DoyouWanttoAddChild3FFP, DoyouWanttoAddChild4FFP, DoyouWanttoAddChild5FFP, DoyouWanttoAddChild6FFP, DoyouWanttoAddChild7FFP, DoyouWanttoAddChild8FFP, DoyouWanttoAddChild8FFP, DoyouWanttoAddChild9FFP]
          var childfairline = [FFPairlineChild1, FFPairlineChild2, FFPairlineChild3, FFPairlineChild4, FFPairlineChild5, FFPairlineChild6, FFPairlineChild7, FFPairlineChild8, FFPairlineChild9]
          var childfairlinenumber = [FFPnumberChild1, FFPnumberChild2, FFPnumberChild3, FFPnumberChild4, FFPnumberChild5, FFPnumberChild6, FFPnumberChild7, FFPnumberChild8, FFPnumberChild9]
          var childgender = [Child1gender, Child2gender, Child3gender, Child4gender, Child5gender, Child6gender, Child7gender, Child8gender, Child9gender]
          //var childtravelerinfo = [Child1TravelerInfo, Child2TravelerInfo, Child3TravelerInfo, Child4TravelerInfo, Child5TravelerInfo, Child6TravelerInfo, Child7TravelerInfo, Child8TravelerInfo]
          var childnationality = [Child1Nationality, Child2Nationality, Child3Nationality, Child4Nationality, Child5Nationality, Child6Nationality, Child7Nationality, Child8Nationality]
          var childpassportno = [Child1DocumentNumber, Child2DocumentNumber, Child3DocumentNumber, Child4DocumentNumber, Child5DocumentNumber, Child6DocumentNumber, Child7DocumentNumber, Child8DocumentNumber, Child9DocumentNumber]
          var childpassportissuecountry = [Child1Issuedcountry, Child2Issuedcountry, Child3Issuedcountry, Child4Issuedcountry, Child5Issuedcountry, Child6Issuedcountry, Child7Issuedcountry, Child8Issuedcountry, Child9Issuedcountry]
          var childpassportexpirydate = [Child1Expirydate, Child2Expirydate, Child3Expirydate, Child4Expirydate, Child5Expirydate, Child6Expirydate, Child7Expirydate, Child8Expirydate, Child8Expirydate]

          var infantgender = [Infant1gender, Infant2gender, Infant3gender, Infant4gender, Infant5gender, Infant6gender, Infant7gender, Infant8gender, Infant9gender]
          var infantfirstname = [Infant1FirstName, Infant2FirstName, Infant3FirstName, Infant4FirstName, Infant5FirstName, Infant6FirstName, Infant7FirstName, Infant8FirstName, Infant9FirstName]
          var infantlastname = [Infant1LastName, Infant2LastName, Infant3LastName, Infant4LastName, Infant5LastName, Infant6LastName, Infant7LastName, Infant8LastName, Infant9LastName]
          var infantdobday = [Infant1DOBDay, Infant2DOBDay, Infant3DOBDay, Infant4DOBDay, Infant5DOBDay, Infant6DOBDay, Infant7DOBDay, Infant8DOBDay, Infant9DOBDay]
          var infantdobmonth = [Infant1DOBMonth, Infant2DOBMonth, Infant3DOBMonth, Infant4DOBMonth, Infant5DOBMonth, Infant6DOBMonth, Infant7DOBMonth, Infant8DOBMonth, Infant9DOBMonth]
          var infantdobyear = [Infant1DOBYear, Infant2DOBYear, Infant3DOBYear, Infant4DOBYear, Infant5DOBYear, Infant6DOBYear, Infant7DOBYear, Infant8DOBYear, Infant9DOBYear]
          //var infanttravelerinfo = [Infant1TravelerInfo, Infant2TravelerInfo, Infant3TravelerInfo, Infant4TravelerInfo, Infant5TravelerInfo, Infant6TravelerInfo, Infant7TravelerInfo, Infant8TravelerInfo, Infant9TravelerInfo]
          var infantnationality = [Infant1Nationality, Infant2Nationality, Infant3Nationality, Infant4Nationality, Infant5Nationality, Infant6Nationality, Infant7Nationality, Infant8Nationality, Infant9Nationality]
          var infantpassportno = [Infant1DocumentNumber, Infant2DocumentNumber, Infant3DocumentNumber, Infant4DocumentNumber, Infant5DocumentNumber, Infant6DocumentNumber, Infant7DocumentNumber, Infant8DocumentNumber, Infant9DocumentNumber]
          var infantpassportissuecountry = [Infant1Issuedcountry, Infant2Issuedcountry, Infant3Issuedcountry, Infant4Issuedcountry, Infant5Issuedcountry, Infant6Issuedcountry, Infant7Issuedcountry, Infant8Issuedcountry, Infant9Issuedcountry]
          var infantpassportexpirydate = [Infant1Expirydate, Infant2Expirydate, Infant3Expirydate, Infant4Expirydate, Infant5Expirydate, Infant6Expirydate, Infant7Expirydate, Infant8Expirydate, Infant9Expirydate]

          var j = 0  //for infant
          for (var i = 0; i < NumberofAdult; i++) {
            var intpassport = 0
            await library.waituntilelementexistAction(oneway.textPassengerDetails)
            await browser.pause(3000)
            if (!await library.elementdisplayedAction(paxdetails.textErrors)) {

              await passenger.mcbasicdetails(adulttittle[i], adultfirstname[i], adultlastName[i], gender[i])

              //intpassport = await passenger.mcpassportdet(travelerinfo[i], adultfirstname[i], adultlastName[i], gender[i], Nationlaity[i], passportno[i], expirydate[i], passportissuecountry[i])
              await passenger.mcfrequentflyer(ffp[i], frequentpairlineadult[i], frequentflyernumber[i])
              if (await library.elementdisplayedAction(paxdetails.buttonDone))
                await library.clickAction(paxdetails.buttonDone)
              if (await library.elementdisplayedAction(paxdetails.buttonGoNext))
                await library.clickAction(paxdetails.buttonGoNext)
              await browser.pause(2000)
              //INFANT
              // if (await library.elementdisplayedAction(paxdetails.textInfant)) {
                if (j <= NumberofInfant) {
                //for (i = 0; i < NumberofInfant; i++) {
                await library.waituntilelementexistAction(paxdetails.textboxInfantFirstName)
                await passenger.mcbasicdetinfch(infantfirstname[j], infantlastname[j], infantdobday[j], infantdobmonth[j], infantdobyear[j], infantgender[j])
                j++
                //await passenger.mcpassportdet(infanttravelerinfo[i], infantfirstname[i], infantlastname[i], infantgender[i], infantnationality[i], infantpassportno[i], infantpassportexpirydate[i], infantpassportissuecountry[i])
                if (await library.elementdisplayedAction(paxdetails.buttonDone))
                  await library.clickAction(paxdetails.buttonDone)
                //}
              }
              if (i == 0) {
                if (await intpassport == 0) {
                  await passenger.mcbasiccontact(CdEmail, CdConfirmEmail, CdCountryCode, CdMobNum)
                  await passenger.mcemergency(EmergencyDetails, EmergencyName, EmergencyCountrycode, EmergencyMobNum)
                }

                else if (await intpassport == 1) {
                  await passenger.mcintbasiccontact(Adult1Email, Adult1Email, CountryCode, MobileNumber)
                  await passenger.mcintemergency(EmergencyDetails, EmergencyName, EmergencyCountrycode, EmergencyMobNum)
                }
              }
              if (await library.elementdisplayedAction(paxdetails.buttonDone))
                await library.clickAction(paxdetails.buttonDone)


            }
          }

          for (i = 0; i < NumberofChild; i++) {
            await library.waituntilelementexistAction(oneway.textPaxTitle)
            await browser.pause(8000)
            if (!await library.elementdisplayedAction(paxdetails.textErrorMsg)) {
              await passenger.mcbasicdetinfch(childtittle[i], childfirstname[i], childlastName[i], childdobDay[i], childdobMonth[i], childdobYear[i], childgender[i])
              //await passenger.mcpassportdet(childtravelerinfo[i], childfirstname[i], childlastName[i], childgender[i], childnationality[i], childpassportno[i], childpassportexpirydate[i], childpassportissuecountry[i])
              await passenger.mcfrequentflyer(childffp[i], childfairline[i], childfairlinenumber[i])
              if (await library.elementdisplayedAction(paxdetails.buttonDone))
                await library.clickAction(paxdetails.buttonDone)
              if (await library.elementdisplayedAction(paxdetails.buttonGoNext))
                await library.clickAction(paxdetails.buttonGoNext)
            }
          }


          // if (await library.elementdisplayedAction(paxdetails.buttonConfirm))
          //   await library.clickAction(paxdetails.buttonConfirm)
          await library.clickAction(paxdetails.checkboxSavePax)
          if (await library.elementdisplayedAction(paxdetails.buttonContinue))
            await library.clickAction(paxdetails.buttonContinue)

          //add pax details code here


          //ADDITIONAL SERVICES
          await library.waituntilelementexistAction(oneway.textAdditionalServices)
          await browser.pause(5000)
          //SEAT SELECTION
          if (DoyouwanttoaddSeat == "Yes") {
            await library.clickAction(addservice.textPreferredSeat)
            await library.waituntilelementexistAction(addservice.textSelectSeat)
            await browser.pause(9000)
            if (SeatType == "FreeSeat") {
              var seatindex = addservice.buttonFreeSeat
              var seatconfirm = addservice.buttonFreeSeatConfirm
            }
            else if (SeatType == "PreferredSeat") {
              var seatindex = addservice.buttonPreferredSeat
              var seatconfirm = addservice.buttonFreeSeatConfirm
            }
            else if (SeatType == "ExtralegroomSeat") {
              var seatindex = addservice.buttonExtralegroomSeat
              var seatconfirm = addservice.buttonExtrallegSeatConfirm
            }
            else if (SeatType == "BusinessClassSeat") {
              var seatindex = addservice.buttonBusinessClassSeat
              var seatconfirm = addservice.buttonFreeSeatConfirm
            }

            await addionalservice.seatselection(seatindex, seatconfirm)
            await addionalservice.nextflight(SeatType)
            await addionalservice.confirmseat()
            await library.waituntilelementexistAction(oneway.textYourFlight)
          }

          //BAGGAGE SELECTION //CURRENTLY BAGGAGE OPTION NOT AVAILABLE
          if (DouyouwanttoaddAB === "Yes") {
            await library.clickAction(addservice.textBaggage)
            await browser.pause(3000)

            if (await addservice.dropdownBaggage[0].isDisplayed()) {
              await browser.pause(3000)
              var paxAdditionalBaggage = [ABPassenger1Confirm, ABPassenger2Confirm, ABPassenger3Confirm, ABPassenger4Confirm, ABPassenger5Confirm, ABPassenger6Confirm, ABPassenger7Confirm, ABPassenger8Confirm, ABPassenger9Confirm]

              var baggageOption = [Passenger1AB, Passenger2AB, Passenger3AB, Passenger4AB, Passenger5AB, Passenger6AB, Passenger7AB, Passenger8AB, Passenger9AB]

              await addionalservice.addbaggage(DouyouwanttoaddAB, paxAdditionalBaggage, baggageOption)
              await library.waituntilelementexistAction(oneway.textAdditionalServices)
            }

          }
          //MEALS SELECTION
          if (DoyouwanttoaddMeals === "Yes") {
            await library.clickAction(addservice.textMeals)
            await library.waituntilelementexistAction(addservice.dropdownMcMeal[0])
            var mealspax = [Passenger1FoodName, Passenger2FoodName, Passenger3FoodName, Passenger4FoodName, Passenger5FoodName, Passenger6FoodName, Passenger7FoodName, Passenger8FoodName, Passenger9FoodName]
            await addionalservice.multicityselectmeals(mealspax, AddBabyMeal)
            await library.waituntilelementexistAction(oneway.textAdditionalServices)
          }
          //WHEELCHAIR SELECTION
          if (DoyouwanttoaddWC === "Yes") {
            var ConfirmWheelchair = [WcPassenger1Confirm, WcPassenger2Confirm, WcPassenger3Confirm, WcPassenger4Confirm, WcPassenger5Confirm, WcPassenger6Confirm, WcPassenger7Confirm, WcPassenger8Confirm, WcPassenger9Confirm]
            await addionalservice.multicitywheelchair(ConfirmWheelchair)
            //unable to inspect seatmap
            await addionalservice.wheelchairslctseats(SeatType)
            await library.waituntilelementexistAction(oneway.textYourFlight)
            console.log("end of wheel chair")
            if (await library.elementdisplayedAction(addservice.buttonContinueBooking)) {
              await library.clickAction(addservice.buttonContinueBooking)
            }
            await library.waituntilelementexistAction(oneway.textAdditionalServices)
          }
          await addionalservice.multicitycheckout()
          //PAYMENT PAGE
          await library.waituntilelementexistAction(validation.textPromoCode)
          await browser.pause(9000)
          //var promotxt = await validate.promocodepaymentpagevalidation(PromoCodeAtPaymentPage, Promocode)
          if (await library.elementdisplayedAction(validation.textPromoCode)) {
            if (PaymentType === "Card Payment") {
              await payment.CardIssuedOutsideIndia(CardNumber, CardExpiryMonth, CardExpiryYear, CVV, CardHolderName, HouseNumber, ApartmentNumber, Pincode, City, Country, State)
            }
            else if (PaymentType === "NetBanking") {
              await payment.netbanking()
            }
            else if (PaymentType === "UPI") {
              await payment.upi()
            }
            else if (PaymentType === "Wallet") {
              await payment.wallet()
            }
            else if (PaymentType === "RuPay") {
              await payment.rupay(CardNumber, CardExpiryMonth, cardExpiryYear, CVV, CardHolderName)
            }
            else if (PaymentType === "EMI") {
              await payment.emi(CardNumber, CardExpiryMonth, cardExpiryYear, CVV, CardHolderName)
            }
            await browser.pause(3000)
            console.log("end of payment")
          }
          //PNR VALIDATION
          var PNR = await validate.PNRvalidation()


          let day = new Date().getDate();
          let month = new Date().getMonth();
          let year = new Date().getFullYear();
          let hours = new Date().getHours();
          let minutes = new Date().getMinutes();

          console.log("Day :" + day + "," + "Month : " + month + "," + "Year : " + year);
          var filename = Testcase + '_' + day + "_" + month + "_" + year + "_" + hours + "_" + minutes + ".png";

          await browser.saveScreenshot("./test/outputartifact/Screenshot/Passed/" + filename.toString());

          console.log(PNR)
          var testresult = "Success"

          var scenario = Testcase
          console.log(scenario)
          cabin1 = " "
          var jsdata = {
            "TestcaseScenario": [scenario],
            "PNR": [PNR],
            "Segment1From": [Segment1From],
            "Segment1To": [Segment1To],
            "Segment2From": [Segment2From],
            "Segment2To": [Segment2To],
            "Segment3From": [Segment3From],
            "Segment3To": [Segment3To],
            "Segment4From": [Segment4From],
            "Segment4To": [Segment4To],
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
          var xls = tool.json2xls(finaldata, { order: ["TestcaseScenario", "PNR", "Segment1From", "Segment1To", "Segment2From", "Segment2To", "Segment3From", "Segment3To", "Segment4From", "Segment4To", "DateandTime", "Currency", "TestcaseResult"] });
          fs.writeFileSync('./test/outputartifact/result/MulticityResult.xlsx', xls, 'binary');

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
          pn1 = " "
          var jsdata = {
            "TestcaseScenario": [Testcase],
            "PNR": [pn1],
            "Segment1From": [Segment1From],
            "Segment1To": [Segment1To],
            "Segment2From": [Segment2From],
            "Segment2To": [Segment2To],
            "Segment3From": [Segment3From],
            "Segment3To": [Segment3To],
            "Segment4From": [Segment4From],
            "Segment4To": [Segment4To],
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
          var xls = tool.json2xls(finaldata, { order: ["TestcaseScenario", "PNR", "Segment1From", "Segment1To", "Segment2From", "Segment2To", "Segment3From", "Segment3To", "Segment4From", "Segment4To", "DateandTime", "Currency", "TestcaseResult"] });
          fs.writeFileSync('./test/outputartifact/result/MulticityResult.xlsx', xls, 'binary');

        }
        await browser.closeApp()
        await browser.launchApp()
      }
    })

  })
})


