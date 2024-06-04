const oneway = require('../../../src/ios/pageobjects/onewaypo.js')
const fs = require('fs')
var paxdetails = require('../../../src/ios/pageobjects/Passengerdetpo.js')
var passenger = require('../../../src/ios/common/PassengerDetails.js')
const addService = require('../../../src/ios/pageobjects/additionalservicespo.js')
var additionalservice = require('../../../src/ios/common/AdditionalService.js')
const paymentpage = require('../../../src/ios/pageobjects/paymentpo.js')
var payment = require('../../../src/ios/common/PaymentPage.js')
var flightlist = require('../../../src/ios/common/FlightlistPage.js')
const fppo = require('../../../src/ios/pageobjects/Flightlistpagepo.js')
const hppo = require('../../../src/ios/pageobjects/Homepagepo.js')
var home = require('../../../src/ios/common/HomePage.js')
var validation = require('../../../src/ios/pageobjects/validationpo.js')
var validate = require('../../../src/ios/common/Validation.js')
var MBreissue = require('../../../src/ios/common/Reissue.js')
var checkinpo = require('../../../src/ios/pageobjects/checkinpo.js')
var checkin = require('../../../src/ios/common/Checkin.js')
var library = require('../../../src/ios/common/Genericlibrary.js')
const webaddservice = require('../../../src/website/common/OnewayRoundtrip/AdditionalService.js')
const weblibrary = require('../../../src/website/common/Genericlibrary.js')
const homepo = require('../../../src/website/pageobjects/OnewayRoundtrip/Homepagepo.js')
const flightlistpo = require('../../../src/website/pageobjects/OnewayRoundtrip/Flightlistpagepo.js')
const paxdetailpo = require('../../../src/website/pageobjects/OnewayRoundtrip/Passengerdetpo.js')
const addservicepo = require('../../../src/website/pageobjects/OnewayRoundtrip/additionalservicespo.js')
const paxdetail = require('../../../src/website/common/OnewayRoundtrip/PassengerDetails.js')
var NodeXls = require('node-xls');
const OD = JSON.parse(fs.readFileSync("test/testdata/json/mobile/RoundTrip.json"))
describe('AI Mobile Automation', () => {
  const pnrarray = [];
  const reissueresult = [];
  const checkinresult = [];
  var testexecutionresult;
  OD.forEach(({
    Testcase,
    ExecutionFlag,
    From,
    To,
    Departuredate,
    Returndate,
    CabinType,
    OnwardCabinType,
    ReturnCabinType,
    SearchUsingFlightCode,
    FlightCode,
    ReturnFlightCode,
    NumberofAdult,
    NumberofChild,
    NumberofInfant,
    IsConcessionary,
    ConcessionaryType,
    Doyouwanttoaddpromocode,
    PromoCodeAtPaymentPage,
    Promocode,
    ReturnFlightSubCabinType,
    ReturnFlightDoYouWanttoUpgrade,
    FlightType,
    SubCabinType,
    DoYouWanttoUpgrade,
    ModifySearch,
    ChangeFrom,
    From2,
    ChangeTo,
    To2,
    ChangeDate,
    DepartureDate2,
    ChangeCabin,
    CabinType2,
    ChangePax,
    AdultCount,
    ChildCount,
    InfantCount,
    Adult1Tittle,
    Adult1FirstName,
    Adult1LastName,
    Adult1DOB,
    TravelerInfo1,
    DoyouWanttoAddAdult1FFP,
    FFPairlineAdult1,
    FFPnumberAdult1,
    Adult1Gender,
    Adult1Nationality,
    Adult1PassportNumber,
    Adult1PassportExpiryDate,
    Adult1PassportIssueCountry,
    Adult1Email,
    CountryCode,
    MobileNumber,
    EmergencyContact,
    EmergencyContactName,
    EmergencyCountryCode,
    EmergencyContactMobileno,

    Adult2Tittle,
    Adult2FirstName,
    Adult2LastName,
    Adult2DOB,
    TravelerInfo2,
    DoyouWanttoAddAdult2FFP,
    FFPairlineAdult2,
    FFPnumberAdult2,
    Adult2Gender,
    Adult2Nationality,
    Adult2PassportNumber,
    Adult2PassportExpiryDate,
    Adult2PassportIssueCountry,
    Adult3Tittle,
    Adult3FirstName,
    Adult3LastName,
    Adult3DOB,
    TravelerInfo3,
    DoyouWanttoAddAdult3FFP,
    FFPairlineAdult3,
    FFPnumberAdult3,
    Adult3Gender,
    Adult3Nationality,
    Adult3PassportNumber,
    Adult3PassportExpiryDate,
    Adult3PassportIssueCountry,
    Adult4Tittle,
    Adult4FirstName,
    Adult4LastName,
    Adult4DOB,
    TravelerInfo4,
    DoyouWanttoAddAdult4FFP,
    FFPairlineAdult4,
    FFPnumberAdult4,
    Adult4Gender,
    Adult4Nationality,
    Adult4PassportNumber,
    Adult4PassportExpiryDate,
    Adult4PassportIssueCountry,
    Adult5Tittle,
    Adult5FirstName,
    Adult5LastName,
    Adult5DOB,
    TravelerInfo5,
    DoyouWanttoAddAdult5FFP,
    FFPairlineAdult5,
    FFPnumberAdult5,
    Adult5Gender,
    Adult5Nationality,
    Adult5PassportNumber,
    Adult5PassportExpiryDate,
    Adult5PassportIssueCountry,
    Adult6Tittle,
    Adult6FirstName,
    Adult6LastName,
    Adult6DOB,
    TravelerInfo6,
    DoyouWanttoAddAdult6FFP,
    FFPairlineAdult6,
    FFPnumberAdult6,
    Adult6Gender,
    Adult6Nationality,
    Adult6PassportNumber,
    Adult6PassportExpiryDate,
    Adult6PassportIssueCountry,
    Adult7Tittle,
    Adult7FirstName,
    Adult7LastName,
    Adult7DOB,
    TravelerInfo7,
    DoyouWanttoAddAdult7FFP,
    FFPairlineAdult7,
    FFPnumberAdult7,
    Adult7Gender,
    Adult7Nationality,
    Adult7PassportNumber,
    Adult7PassportExpiryDate,
    Adult7PassportIssueCountry,
    Adult8Tittle,
    Adult8FirstName,
    Adult8LastName,
    Adult8DOB,
    TravelerInfo8,
    DoyouWanttoAddAdult8FFP,
    FFPairlineAdult8,
    FFPnumberAdult8,
    Adult8Gender,
    Adult8Nationality,
    Adult8PassportNumber,
    Adult8PassportExpiryDate,
    Adult8PassportIssueCountry,
    Adult9Tittle,
    Adult9FirstName,
    Adult9LastName,
    Adult9DOB,
    TravelerInfo9,
    DoyouWanttoAddAdult9FFP,
    FFPairlineAdult9,
    FFPnumberAdult9,
    Adult9Gender,
    Adult9Nationality,
    Adult9PassportNumber,
    Adult9PassportExpiryDate,
    Adult9PassportIssueCountry,
    Child1Tittle,
    Child1FirstName,
    Child1LastName,
    Child1DOB,
    DoyouWanttoAddChild1FFP,
    FFPairlineChild1,
    FFPnumberChild1,
    Child1Gender,
    Child1Nationality,
    Child1PassportNumber,
    Child1PassportExpiryDate,
    Child1PassportIssueCountry,
    Child1TravelerInfo,
    Child2Tittle,
    Child2FirstName,
    Child2LastName,
    Child2DOB,
    DoyouWanttoAddChild2FFP,
    FFPairlineChild2,
    FFPnumberChild2,
    Child2Gender,
    Child2Nationality,
    Child2PassportNumber,
    Child2PassportExpiryDate,
    Child2PassportIssueCountry,
    Child2TravelerInfo,
    DoyouWanttoAddChild3FFP,
    FFPairlineChild3,
    FFPnumberChild3,
    Child3Tittle,
    Child3FirstName,
    Child3LastName,
    Child3DOB,
    Child4Tittle,
    Child4FirstName,
    Child4LastName,
    Child4DOB,
    Child3Gender,
    Child3Nationality,
    Child3PassportNumber,
    Child3PassportExpiryDate,
    Child3PassportIssueCountry,
    Child3TravelerInfo,
    DoyouWanttoAddChild4FFP,
    FFPairlineChild4,
    FFPnumberChild4,
    Child4Gender,
    Child4Nationality,
    Child4PassportNumber,
    Child4PassportExpiryDate,
    Child4PassportIssueCountry,
    Child4TravelerInfo,
    Child5Tittle,
    Child5FirstName,
    Child5LastName,
    Child5DOB,
    DoyouWanttoAddChild5FFP,
    FFPairlineChild5,
    FFPnumberChild5,
    Child5Gender,
    Child5Nationality,
    Child5PassportNumber,
    Child5PassportExpiryDate,
    Child5PassportIssueCountry,
    Child5TravelerInfo,
    Child6Tittle,
    Child6FirstName,
    Child6LastName,
    Child6DOB,
    DoyouWanttoAddChild6FFP,
    FFPairlineChild6,
    FFPnumberChild6,
    Child6Gender,
    Child6Nationality,
    Child6PassportNumber,
    Child6PassportExpiryDate,
    Child6PassportIssueCountry,
    Child6TravelerInfo,
    Child7Tittle,
    Child7FirstName,
    Child7LastName,
    Child7DOB,
    DoyouWanttoAddChild7FFP,
    FFPairlineChild7,
    FFPnumberChild7,
    Child7Gender,
    Child7Nationality,
    Child7PassportNumber,
    Child7PassportExpiryDate,
    Child7PassportIssueCountry,
    Child7TravelerInfo,
    Child8Tittle,
    Child8FirstName,
    Child8LastName,
    Child8DOB,
    DoyouWanttoAddChild8FFP,
    FFPairlineChild8,
    FFPnumberChild8,
    Child8Gender,
    Child8Nationality,
    Child8PassportNumber,
    Child8PassportExpiryDate,
    Child8PassportIssueCountry,
    Child8TravelerInfo,
    Child9Tittle,
    Child9FirstName,
    Child9LastName,
    Child9DOB,
    DoyouWanttoAddChild9FFP,
    FFPairlineChild9,
    FFPnumberChild9,
    Infant1FirstName,
    Infant1LastName,
    Infant1DOB,
    Infant1Gender,
    Infant1Nationality,
    Infant1PassportNumber,
    Infant1PassportExpiryDate,
    Infant1PassportIssueCountry,
    Infant1TravelerInfo,
    Infant2FirstName,
    Infant2LastName,
    Infant2DOB,
    Infant2Gender,
    Infant2Nationality,
    Infant2PassportNumber,
    Infant2PassportExpiryDate,
    Infant2PassportIssueCountry,
    Infant2TravelerInfo,
    Infant3FirstName,
    Infant3LastName,
    Infant3DOB,
    Infant3Gender,
    Infant3Nationality,
    Infant3PassportNumber,
    Infant3PassportExpiryDate,
    Infant3PassportIssueCountry,
    Infant3TravelerInfo,
    Infant4FirstName,
    Infant4LastName,
    Infant4DOB,
    Infant4Gender,
    Infant4Nationality,
    Infant4PassportNumber,
    Infant4PassportExpiryDate,
    Infant4PassportIssueCountry,
    Infant4TravelerInfo,
    Infant5FirstName,
    Infant5LastName,
    Infant5DOB,
    Infant5Gender,
    Infant5Nationality,
    Infant5PassportNumber,
    Infant5PassportExpiryDate,
    Infant5PassportIssueCountry,
    Infant5TravelerInfo,
    Infant6FirstName,
    Infant6LastName,
    Infant6DOB,
    Infant6Gender,
    Infant6Nationality,
    Infant6PassportNumber,
    Infant6PassportExpiryDate,
    Infant6PassportIssueCountry,
    Infant6TravelerInfo,
    Infant7FirstName,
    Infant7LastName,
    Infant7DOB,
    Infant7Gender,
    Infant7Nationality,
    Infant7PassportNumber,
    Infant7PassportExpiryDate,
    Infant7PassportIssueCountry,
    Infant7TravelerInfo,
    Infant8FirstName,
    Infant8LastName,
    Infant8DOB,
    Infant8Gender,
    Infant8Nationality,
    Infant8PassportNumber,
    Infant8PassportExpiryDate,
    Infant8PassportIssueCountry,
    Infant8TravelerInfo,
    Infant9FirstName,
    Infant9LastName,
    Infant9DOB,
    Infant9Gender,
    Infant9Nationality,
    Infant9PassportNumber,
    Infant9PassportExpiryDate,
    Infant9PassportIssueCountry,
    Infant9TravelerInfo,
    DoyouwanttoaddAB,
    DomDoyouwanttoaddAB,
    DomAdult1AddBaggage,
    DomAdult2AddBaggage,
    DomAdult3AddBaggage,
    DomAdult4AddBaggage,
    DomAdult5AddBaggage,
    DomAdult6AddBaggage,
    DomAdult7AddBaggage,
    DomAdult8AddBaggage,
    DomAdult9AddBaggage,
    DomChild1AddBaggage,
    DomChild2AddBaggage,
    DomChild3AddBaggage,
    DomChild4AddBaggage,
    DomChild5AddBaggage,
    DomChild6AddBaggage,
    DomChild7AddBaggage,
    DomChild8AddBaggage,
    DomAdult1AB,
    DomAdult2AB,
    DomAdult3AB,
    DomAdult4AB,
    DomAdult5AB,
    DomAdult6AB,
    DomAdult7AB,
    DomAdult8AB,
    DomAdult9AB,
    DomChild1AB,
    DomChild2AB,
    DomChild3AB,
    DomChild4AB,
    DomChild5AB,
    DomChild6AB,
    DomChild7AB,
    DomChild8AB,
    DomChangeAdditionalBaggage, DomChAdult1AddBaggage, DomChAdult2AddBaggage, DomChAdult3AddBaggage, DomChAdult4AddBaggage, DomChAdult5AddBaggage, DomChAdult6AddBaggage, DomChAdult7AddBaggage, DomChAdult8AddBaggage, DomChAdult9AddBaggage, DomChChild1AddBaggage, DomChChild2AddBaggage, DomChChild3AddBaggage, DomChChild4AddBaggage, DomChChild5AddBaggage, DomChChild6AddBaggage, DomChChild7AddBaggage, DomChChild8AddBaggage,
    DomChAdult1AB, DomChAdult2AB, DomChAdult3AB, DomChAdult4AB, DomChAdult5AB, DomChAdult6AB, DomChAdult7AB, DomChAdult8AB, DomChAdult9AB, DomChChild1AB, DomChChild2AB, DomChChild3AB, DomChChild4AB, DomChChild5AB, DomChChild6AB, DomChChild7AB, DomChChild8AB,
    DomRemoveAdditionalBaggage,
    DomDoyouwanttoaddWhcr,
    CardType,
    CardNumber,
    CardExpiryMonth,
    CardExpiryYear,
    CVV,
    CardHolderName,
    HouseNumber,
    ApartmentNumber,
    Pincode,
    City,
    Country,
    State,
    DomAddBaggage,
    DomAdult1Baggage,
    Meals, Pax1Meal, Pax2Meal, Pax3Meal, Pax4Meal, Pax5Meal, Pax6Meal, Pax7Meal, Pax8Meal, Pax9Meal,
    SelectSeat,
    SeatType,
    PaymentType,
    MBDoyouwanttoaddAB,
    Passenger1Confirm, Passenger1AB, Passenger2Confirm, Passenger2AB, Passenger3Confirm, Passenger3AB,
    Passenger4Confirm, Passenger4AB, Passenger5Confirm, Passenger5AB, Passenger6Confirm, Passenger6AB, Passenger7Confirm,
    Passenger7AB, Passenger8Confirm, Passenger8AB, Passenger9Confirm, Passenger9AB,
    DoyouwanttoaddAS, WcPassenger1Confirm, WcPassenger2Confirm, WcPassenger3Confirm, WcPassenger4Confirm, WcPassenger5Confirm,
    WcPassenger6Confirm, WcPassenger7Confirm, WcPassenger8Confirm, WcPassenger9Confirm, DoyouwanttoaddMeal,
    Passenger1FoodConfirm, Passenger1FoodName, Passenger2FoodConfirm, Passenger2FoodName, Passenger3FoodConfirm,
    Passenger3FoodName, Passenger4FoodConfirm, Passenger4FoodName, Passenger5FoodConfirm, Passenger5FoodName,
    Passenger6FoodConfirm, Passenger6FoodName, Passenger7FoodConfirm, Passenger7FoodName, Passenger8FoodConfirm, Passenger8FoodName,
    Passenger9FoodConfirm, Passenger9FoodName, DoyouwanttoaddSeat, TypeofSeat, MBPaymentType, MBCardNumber, MBCardExpMonth, MBCardExpYear, MBCVV, MBCardHolderName, MBCardEmail, MBCardMobile, MBHouseNumber, MBApartmentNumber, MBPincode, MBCity, MBCountry, MBState,
    Gender, DOBdate, DOBmonth, DOByear, Email2, Email3, EmergencyName, EmergencyCountrycode, EmergencyPhone,
    Nationality, DocNumber, MBCountryCode, ExpDay, ExpMonth, ExpYear, DocumentType,
    Segment1, Segment1From, Segment1To, Segment1Date,
    Segment2, Segment2From, Segment2To, Segment2Date, Segment3, Segment3From, Segment3To, Segment3Date,
    Segment4, Segment4From, Segment4To, Segment4Date, Segment1Cabin, Segment2Cabin,
    ManageBooking, AdditionalServices, ModifyDetails, ModifyFlights, Cancel,
    Checkin,
    EmailId,
    CkCountryCode,
    PhoneNumber,
    CkNationality,
    CkCountry,
    AdtGender,
    AdtDOB,
    CkDocumentType,
    CkDocumentNumber,
    CkDocExpDate,
    CkDocIssuingCountry,
    CkHouseAddress,
    VisaNumber,
    VisaCountry,
    VisaIssueDate,
    VisaExpDate,
    VisaIssuingCountry,
    VisaIssuancePlace,
    PurposeOfVisit,
    SendBySMS,
    SendAsPdf,
    SendPassBook,
    FFPProgram,
    FFPNumber,
    timestamp,
    CkNumberofAdult,
    CkNumberofChild,
    DoyouwanttodownloadBP,
    DoyouwanttosendBP,
    SeatSelection,
    CkSeatType,
    CkPaymentType,
    CkCardNumber,
    CkCardExpiryMonth,
    CkCardExpiryYear,
    CkCVV,
    CkCardHolderName,
    CkCardEmail,
    CkHouseNumber,
    CkApartmentNumber,
    CkPincode,
    CkCity,
    CkCardCountry,
    CkState,
    UpdateContactDetails

  }) => {

    it('Round Trip', async () => {
      if (ExecutionFlag == "Yes") {

        try {

          //HOMEPAGE
          await browser.pause(5000)
          await home.permissionpopup()

          //BOOK FLIGHT
          await home.bookflight()
          await home.selectroundtrip()
          await browser.pause(3000)  //to check if cities are loading after a pause
          await home.fromto(From, To)
          await home.departcalendar(Departuredate, Returndate)
          //await expect(oneway.textAdult).toBeExisting()
          await library.clickAction(oneway.textPassenger)
          if (IsConcessionary == "Yes") {
            await home.concessionselection(ConcessionaryType)
          }
          await home.passengerselection(NumberofAdult, NumberofChild, NumberofInfant)
          //await library.waituntilelementexistAction(oneway.buttonConfirm)
          await library.clickAction(oneway.cabin)
          await home.cabinselection(CabinType)
          await library.waituntilelementexistAction(oneway.textPassenger)
          await browser.pause(2000)
          if (Doyouwanttoaddpromocode == "Yes") {
            await home.promotioncode(Promocode)
          }
          await library.clickAction(oneway.buttonSearch)
          //FLIGHT AND CABIN SELECTION
          await library.waituntilelementexistAction(oneway.buttonModifySearch)
          await browser.pause(9000)
          //await library.downscrollAction()
          var promotxt = await validate.promocodevalidation(Doyouwanttoaddpromocode)
          //await library.downscrollAction()
          await browser.pause(3000)
          var currencytxt = await validate.currencyvalidation(IsConcessionary)
          await flightlist.flcabinselection(OnwardCabinType, SubCabinType, DoYouWanttoUpgrade, SearchUsingFlightCode, FlightCode) //onward
          await library.waituntilelementexistAction(oneway.buttonModifySearch)
          await browser.pause(3000)
          await flightlist.flcabinselection(ReturnCabinType, ReturnFlightSubCabinType, DoYouWanttoUpgrade, SearchUsingFlightCode, ReturnFlightCode) //return
          await library.waituntilelementexistAction(oneway.buttonModifySearch)
          await browser.pause(3000)
          //PASSENGER DETAILS
          await library.waituntilelementexistAction(oneway.textYourflights)
          await browser.pause(3000)
          var concessiontxt = await validate.concessionvalidation(IsConcessionary)
          await passenger.selectfillpaxbutton()

          console.log(await driver.getContexts())
          console.log(await driver.getContexts())
          let contexts = await driver.getContexts()
          console.log(contexts);
          await driver.switchContext(contexts[1]);
          var adulttittle = [Adult1Tittle, Adult2Tittle, Adult3Tittle, Adult4Tittle, Adult5Tittle, Adult6Tittle, Adult7Tittle, Adult8Tittle, Adult9Tittle]
          var adultfirstname = [Adult1FirstName, Adult2FirstName, Adult3FirstName, Adult4FirstName, Adult5FirstName, Adult6FirstName, Adult7FirstName, Adult8FirstName, Adult9FirstName]
          var adultlastName = [Adult1LastName, Adult2LastName, Adult3LastName, Adult4LastName, Adult5LastName, Adult6LastName, Adult7LastName, Adult8LastName, Adult9LastName]
          var adultdob = [Adult1DOB, Adult2DOB, Adult3DOB, Adult4DOB, Adult5DOB, Adult6DOB, Adult7DOB, Adult8DOB, Adult9DOB]

          var travelerinfo = [TravelerInfo1, TravelerInfo2, TravelerInfo3, TravelerInfo4, TravelerInfo5, TravelerInfo6, TravelerInfo7, TravelerInfo8, TravelerInfo9]
          var Nationlaity = [Adult1Nationality, Adult2Nationality, Adult3Nationality, Adult4Nationality, Adult5Nationality, Adult6Nationality, Adult7Nationality, Adult8Nationality, Adult9Nationality]
          var passportno = [Adult1PassportNumber, Adult2PassportNumber, Adult3PassportNumber, Adult4PassportNumber, Adult5PassportNumber, Adult6PassportNumber, Adult7PassportNumber, Adult8PassportNumber, Adult9PassportNumber]
          var passportissuecountry = [Adult1PassportIssueCountry, Adult2PassportIssueCountry, Adult3PassportIssueCountry, Adult4PassportIssueCountry, Adult5PassportIssueCountry, Adult6PassportIssueCountry, Adult7PassportIssueCountry, Adult8PassportIssueCountry, Adult9PassportIssueCountry]

          var gender = [Adult1Gender, Adult2Gender, Adult3Gender, Adult3Gender, Adult4Gender, Adult5Gender, Adult6Gender, Adult7Gender, Adult8Gender, Adult9Gender]
          var expirydate = [Adult1PassportExpiryDate, Adult2PassportExpiryDate, Adult3PassportExpiryDate, Adult4PassportExpiryDate, Adult5PassportExpiryDate, Adult6PassportExpiryDate, Adult7PassportExpiryDate, Adult8PassportExpiryDate, Adult9PassportExpiryDate]
          var ffp = [DoyouWanttoAddAdult1FFP, DoyouWanttoAddAdult2FFP, DoyouWanttoAddAdult3FFP, DoyouWanttoAddAdult4FFP, DoyouWanttoAddAdult5FFP, DoyouWanttoAddAdult6FFP, DoyouWanttoAddAdult7FFP, DoyouWanttoAddAdult8FFP, DoyouWanttoAddAdult9FFP]
          var frequentpairlineadult = [FFPairlineAdult1, FFPairlineAdult2, FFPairlineAdult3, FFPairlineAdult4, FFPairlineAdult5, FFPairlineAdult6, FFPairlineAdult7, FFPairlineAdult8, FFPairlineAdult9]
          var frequentflyernumber = [FFPnumberAdult1, FFPairlineAdult2, FFPairlineAdult3, FFPnumberAdult4, FFPairlineAdult5, FFPairlineAdult6, FFPnumberAdult7, FFPairlineAdult8, FFPairlineAdult9]


          var childtittle = [Child1Tittle, Child2Tittle, Child3Tittle, Child4Tittle, Child5Tittle, Child6Tittle, Child7Tittle, Child8Tittle, Child9Tittle]
          var childfirstname = [Child1FirstName, Child2FirstName, Child3FirstName, Child4FirstName, Child5FirstName, Child6FirstName, Child7FirstName, Child8FirstName, Child9FirstName]
          var childlastName = [Child1LastName, Child2LastName, Child3LastName, Child4LastName, Child5LastName, Child6LastName, Child7LastName, Child8LastName, Child9LastName]
          var childdob = [Child1DOB, Child2DOB, Child3DOB, Child4DOB, Child5DOB, Child6DOB, Child7DOB, Child8DOB, Child9DOB]
          var childffp = [DoyouWanttoAddChild1FFP, DoyouWanttoAddChild2FFP, DoyouWanttoAddChild3FFP, DoyouWanttoAddChild4FFP, DoyouWanttoAddChild5FFP, DoyouWanttoAddChild6FFP, DoyouWanttoAddChild7FFP, DoyouWanttoAddChild8FFP, DoyouWanttoAddChild8FFP, DoyouWanttoAddChild9FFP]
          var childfairline = [FFPairlineChild1, FFPairlineChild2, FFPairlineChild3, FFPairlineChild4, FFPairlineChild5, FFPairlineChild6, FFPairlineChild7, FFPairlineChild8, FFPairlineChild9]
          var childfairlinenumber = [FFPnumberChild1, FFPnumberChild2, FFPnumberChild3, FFPnumberChild4, FFPnumberChild5, FFPnumberChild6, FFPnumberChild7, FFPnumberChild8, FFPnumberChild9]
          var childgender = [Child1Gender, Child2Gender, Child3Gender, Child4Gender, Child5Gender, Child6Gender, Child7Gender, Child8Gender]
          var childtravelerinfo = [Child1TravelerInfo, Child2TravelerInfo, Child3TravelerInfo, Child4TravelerInfo, Child5TravelerInfo, Child6TravelerInfo, Child7TravelerInfo, Child8TravelerInfo]
          var childnationality = [Child1Nationality, Child2Nationality, Child3Nationality, Child4Nationality, Child5Nationality, Child6Nationality, Child7Nationality, Child8Nationality]
          var childpassportno = [Child1PassportNumber, Child2PassportNumber, Child3PassportNumber, Child4PassportNumber, Child5PassportNumber, Child6PassportNumber, Child7PassportNumber, Child8PassportNumber]
          var childpassportissuecountry = [Child1PassportIssueCountry, Child2PassportIssueCountry, Child3PassportIssueCountry, Child4PassportIssueCountry, Child5PassportIssueCountry, Child6PassportIssueCountry, Child7PassportIssueCountry, Child8PassportIssueCountry]
          var childpassportexpirydate = [Child1PassportExpiryDate, Child2PassportExpiryDate, Child3PassportExpiryDate, Child4PassportExpiryDate, Child5PassportExpiryDate, Child6PassportExpiryDate, Child7PassportExpiryDate, Child8PassportExpiryDate]

          var infantgender = [Infant1Gender, Infant2Gender, Infant3Gender, Infant4Gender, Infant5Gender, Infant6Gender, Infant7Gender, Infant8Gender, Infant9Gender]
          var infantfirstname = [Infant1FirstName, Infant2FirstName, Infant3FirstName, Infant4FirstName, Infant5FirstName, Infant6FirstName, Infant7FirstName, Infant8FirstName, Infant9FirstName]
          var infantlastname = [Infant1LastName, Infant2LastName, Infant3LastName, Infant4LastName, Infant5LastName, Infant6LastName, Infant7LastName, Infant8LastName, Infant9LastName]
          var infantdob = [Infant1DOB, Infant2DOB, Infant3DOB, Infant4DOB, Infant5DOB, Infant6DOB, Infant7DOB, Infant8DOB, Infant9DOB]
          var infanttravelerinfo = [Infant1TravelerInfo, Infant2TravelerInfo, Infant3TravelerInfo, Infant4TravelerInfo, Infant5TravelerInfo, Infant6TravelerInfo, Infant7TravelerInfo, Infant8TravelerInfo, Infant9TravelerInfo]
          var infantnationality = [Infant1Nationality, Infant2Nationality, Infant3Nationality, Infant4Nationality, Infant5Nationality, Infant6Nationality, Infant7Nationality, Infant8Nationality, Infant9Nationality]
          var infantpassportno = [Infant1PassportNumber, Infant2PassportNumber, Infant3PassportNumber, Infant4PassportNumber, Infant5PassportNumber, Infant6PassportNumber, Infant7PassportNumber, Infant8PassportNumber, Infant9PassportNumber]
          var infantpassportissuecountry = [Infant1PassportIssueCountry, Infant2PassportIssueCountry, Infant3PassportIssueCountry, Infant4PassportIssueCountry, Infant5PassportIssueCountry, Infant6PassportIssueCountry, Infant7PassportIssueCountry, Infant8PassportIssueCountry, Infant9PassportIssueCountry]
          var infantpassportexpirydate = [Infant1PassportExpiryDate, Infant2PassportExpiryDate, Infant3PassportExpiryDate, Infant4PassportExpiryDate, Infant5PassportExpiryDate, Infant6PassportExpiryDate, Infant7PassportExpiryDate, Infant8PassportExpiryDate, Infant9PassportExpiryDate]

          for (var i = 0; i < NumberofAdult; i++) {
            await library.waituntilelementexistAction(paxdetailpo.textPaxDetails)
            if (!await library.elementdisplayedAction(paxdetailpo.textErrorMsg)) {
              await paxdetail.basicdetails(adulttittle[i], adultfirstname[i], adultlastName[i], adultdob[i], gender[i])
              await paxdetail.passportdet(travelerinfo[i], adultfirstname[i], adultlastName[i], gender[i], Nationlaity[i], passportno[i], expirydate[i], passportissuecountry[i])
              await paxdetail.frequentflyer(ffp[i], frequentpairlineadult[i], frequentflyernumber[i])


              if (i == 0) {
                await paxdetail.basiccontact(Adult1Email, Adult1Email, CountryCode, MobileNumber)
                await paxdetail.emergency(EmergencyContact, EmergencyContactName, EmergencyCountryCode, EmergencyContactMobileno,)
              }
              await library.clickAction(paxdetailpo.buttonConfirm)
              await library.pagetimeout(homepo.page_loader)
            }
          }

          for (i = 0; i < NumberofChild; i++) {
            await library.waituntilelementexistAction(paxdetailpo.textPaxDetails)
            if (!await library.elementdisplayedAction(paxdetailpo.textErrorMsg)) {
              await paxdetail.basicdetails(childtittle[i], childfirstname[i], childlastName[i], childdob[i], childgender[i])
              await paxdetail.passportdet(childtravelerinfo[i], childfirstname[i], childlastName[i], childgender[i], childnationality[i], childpassportno[i], childpassportexpirydate[i], childpassportissuecountry[i])
              await paxdetail.frequentflyer(childffp[i], childfairline[i], childfairlinenumber[i])
              await library.clickAction(paxdetailpo.buttonConfirm)
              await library.pagetimeout(homepo.page_loader)
            }
          }

          for (i = 0; i < NumberofInfant; i++) {
            await library.waituntilelementexistAction(paxdetailpo.textPaxDetails)
            if (!await library.elementdisplayedAction(paxdetailpo.textErrorMsg)) {
              await paxdetail.basicdetinf(infantfirstname[i], infantlastname[i], infantdob[i], infantgender[i])
              await paxdetail.passportdet(infanttravelerinfo[i], infantfirstname[i], infantlastname[i], infantgender[i], infantnationality[i], infantpassportno[i], infantpassportexpirydate[i], infantpassportissuecountry[i])
              await library.clickAction(paxdetailpo.buttonConfirm)
              await library.pagetimeout(homepo.page_loader)
            }
          }
          await driver.switchContext(contexts[0]);
          if (await library.elementexistingAction(paxdetails.buttonConfirm))
            await library.clickAction(paxdetails.buttonConfirm)

          //ADDITIONAL SERVICES
          await library.waituntilelementexistAction(oneway.textYourflights)
          await browser.pause(3000)

          await library.waituntilelementexistAction(addService.textAdditionalService)
          await browser.pause(3000)


          console.log(await driver.getContexts())
          console.log(await driver.getContexts())
          let contexts2 = await driver.getContexts()
          console.log(contexts2);
          await driver.switchContext(contexts2[1]);

          //SEAT SELECTION
          await weblibrary.waitforexistAction(addservicepo.textAddService)
          await weblibrary.pagescrollAction(addservicepo.textAddService)
          //await browser.pause(3000)

          if (SelectSeat == "Yes" && await library.elementdisplayedAction(addservicepo.buttonSelectSeat)) {
            await weblibrary.clickAction(addservicepo.buttonSelectSeat)
            //await browser.pause(6000)
            await weblibrary.pagetimeout(homepo.page_loader)
            await weblibrary.waitforexistAction(addservicepo.textAdditionServiceval1)

            if (SeatType == "FreeSeat") {
              var seatindex = addservicepo.buttonFreeSeat
              var seatconfirm = addservicepo.buttonFreeSeatConfirm
            }
            else if (SeatType == "PreferredSeat") {
              var seatindex = addservicepo.buttonPreferredSeat
              var seatconfirm = addservicepo.buttonFreeSeatConfirm
            }
            else if (SeatType == "ExtralegroomSeat") {
              var seatindex = addservicepo.buttonExtralegroomSeat
              var seatconfirm = addservicepo.extrallegseatconfirm
            }
            else if (SeatType == "BusinessClassSeat") {
              var seatindex = addservicepo.businessclassseat
              var seatconfirm = addservicepo.buttonFreeSeatConfirm
            }

            await webaddservice.seatselection(seatindex, seatconfirm)
            await webaddservice.nextflight(seatindex, seatconfirm)

            //await browser.pause(3000)

            await library.clickAction(addservicepo.buttonConfirmSeat)
            await library.pagetimeout(addservicepo.page_loader)
          }

          //BAGGAGE
          if (DoyouwanttoaddAB === "Yes") {

            //await browser.pause(3000)
            var changeflag = 0
            if (await weblibrary.elementdisplayedAction(addservicepo.buttonAddExtraBaggage)) {
              //await browser.pause(3000)
              var paxAdditionalBaggage = [DomAdult1AddBaggage, DomAdult2AddBaggage, DomAdult3AddBaggage, DomAdult4AddBaggage, DomAdult5AddBaggage, DomAdult6AddBaggage, DomAdult7AddBaggage, DomAdult8AddBaggage, DomAdult9AddBaggage, DomChild1AddBaggage, DomChild2AddBaggage, DomChild3AddBaggage, DomChild4AddBaggage, DomChild5AddBaggage, DomChild6AddBaggage, DomChild7AddBaggage, DomChild8AddBaggage]

              var baggageOption = [DomAdult1AB, DomAdult2AB, DomAdult3AB, DomAdult4AB, DomAdult5AB, DomAdult6AB, DomAdult7AB, DomAdult8AB, DomAdult9AB, DomChild1AB, DomChild2AB, DomChild3AB, DomChild4AB, DomChild5AB, DomChild6AB, DomChild7AB, DomChild8AB]

              await webaddservice.addbaggage(DomDoyouwanttoaddAB, paxAdditionalBaggage, baggageOption, changeflag)

              if (DomChangeAdditionalBaggage === "Yes") {
                if (await weblibrary.elementdisplayedAction(addservicepo.buttonChangeBaggage)) {
                  var paxAdditionalBaggage = [DomChAdult1AddBaggage, DomChAdult2AddBaggage, DomChAdult3AddBaggage, DomChAdult4AddBaggage, DomChAdult5AddBaggage, DomChAdult6AddBaggage, DomChAdult7AddBaggage, DomChAdult8AddBaggage, DomChAdult9AddBaggage, DomChChild1AddBaggage, DomChChild2AddBaggage, DomChChild3AddBaggage, DomChChild4AddBaggage, DomChChild5AddBaggage, DomChChild6AddBaggage, DomChChild7AddBaggage, DomChChild8AddBaggage]

                  var baggageOption = [DomChAdult1AB, DomChAdult2AB, DomChAdult3AB, DomChAdult4AB, DomChAdult5AB, DomChAdult6AB, DomChAdult7AB, DomChAdult8AB, DomChAdult9AB, DomChChild1AB, DomChChild2AB, DomChChild3AB, DomChChild4AB, DomChChild5AB, DomChChild6AB, DomChChild7AB, DomChChild8AB]
                  changeflag = 1
                  await webaddservice.changebaggage(paxAdditionalBaggage, baggageOption, changeflag)

                }
              }
            }

          }

          //WHEELCHAIR SELECTION
          if (DomDoyouwanttoaddWhcr === "Yes") {
            if (await weblibrary.elementdisplayedAction(addservicepo.buttonRequestService)) {
              await webaddservice.wheelchair()
              //await browser.pause(2000)
              await webaddservice.wheelchairslctseats(seatindex, seatconfirm)
              console.log("end of wheel chair")
              await weblibrary.pagetimeout(homepo.page_loader)
              if (await weblibrary.elementdisplayedAction(addservicepo.buttonWhcrContBooking)) {
                await weblibrary.clickAction(addservicepo.buttonWhcrContBooking)
              }
            }
          }

          //MEALS SELECTION
          if (Meals === "Yes") {
            if (await weblibrary.elementdisplayedAction(addservicepo.meals)) {
              await weblibrary.pagescrolltomiddleAction(addservicepo.meals)
              await weblibrary.clickAction(addservicepo.meals)
              await weblibrary.waitforexistAction(addservicepo.textAdditionServiceval1)
              var mealspax = [Pax1Meal, Pax2Meal, Pax3Meal, Pax4Meal, Pax5Meal, Pax6Meal, Pax7Meal, Pax8Meal, Pax9Meal]
              await webaddservice.selectmeals(mealspax)
              await weblibrary.clickAction(addservicepo.buttonWhcrContinue)
              await weblibrary.pagetimeout(homepo.page_loader)
              if (await weblibrary.elementdisplayedAction(addservicepo.buttonWhcrContBooking)) {
                await weblibrary.clickAction(addservicepo.buttonWhcrContBooking)
              }
            }
          }

          //CHECKOUT
          await webaddservice.checkout()

          //switch to native app
          await driver.switchContext(contexts2[0]);



          //PAYMENT PAGE
          await library.waituntilelementexistAction(validation.textPromoCode)
          await browser.pause(9000)
          //var promotxt = await validate.promocodepaymentpagevalidation(PromoCodeAtPaymentPage, Promocode)
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
          testexecutionresult = "Passed"
          var scenario = Testcase
          console.log(scenario)
          cabin1 = " "
          var jsdata = {
            "TestcaseScenario": [scenario],
            "PNR": [PNR],
            "From": [From],
            "To": [To],
            "DateandTime": new Date().toLocaleString(undefined, {
              timeZone: 'Asia/Kolkata'
            }),
            "Currency": [currencytxt],
            "Concession": [concessiontxt],
            "PromoCode": [promotxt],
            "TestcaseResult": [testresult],


          }
          pnrarray.push(jsdata)
          var stringconversion = JSON.stringify(pnrarray)
          var finaldata = JSON.parse(stringconversion)
          var tool = new NodeXls();
          var xls = tool.json2xls(finaldata, { order: ["TestcaseScenario", "PNR", "From", "To", "DateandTime", "Concession", "PromoCode", "Currency", "TestcaseResult"] });
          fs.writeFileSync('./test/outputartifact/result/mobile/RoundTripResult.xlsx', xls, 'binary');

          //Passenger Names
          await library.clickAction(oneway.textPax)
          for (var i = 0; i < NumberofAdult; i++) {
            await validate.paxnamevalidation(adultfirstname[i], adultlastName[i])
          }
          for (var i = 0; i < NumberofChild; i++) {
            await validate.paxnamevalidation(childfirstname[i], childlastName[i])
          }
          for (var i = 0; i < NumberofInfant; i++) {
            await validate.paxnamevalidation(infantfirstname[i], infantlastname[i])
          }

        }
        catch (e) {
          console.log(e)
          let day = new Date().getDate();
          new Date().getDate();
          let month = new Date().getMonth();
          let year = new Date().getFullYear();
          let hours = new Date().getHours();
          let minutes = new Date().getMinutes();

          console.log("Day :" + day + "," + "Month : " + month + "," + "Year : " + year);
          var filename = Testcase + '_' + day + "_" + month + "_" + year + "_" + hours + "_" + minutes + ".png";

          await browser.saveScreenshot("./test/outputartifact/Screenshot/Failed/" + filename.toString());

          testexecutionresult = "Failed"
          testresult1 = "Failed"
          pn1 = " "
          var jsdata = {
            "TestcaseScenario": [Testcase],
            "PNR": [pn1],
            "From": [From],
            "To": [To],
            "DateandTime": new Date().toLocaleString(undefined, {
              timeZone: 'Asia/Kolkata'
            }),
            "Currency": [currencytxt],
            "Concession": [concessiontxt],
            "PromoCode": [promotxt],
            "TestcaseResult": [testresult1],
          }
          pnrarray.push(jsdata)
          var stringconversion = JSON.stringify(pnrarray)
          var finaldata = JSON.parse(stringconversion)
          var tool = new NodeXls();
          var xls = tool.json2xls(finaldata, { order: ["TestcaseScenario", "PNR", "From", "To", "DateandTime", "Concession", "PromoCode", "Currency", "TestcaseResult"] });
          fs.writeFileSync('./test/outputartifact/result/mobile/RoundTripResult.xlsx', xls, 'binary');

        }
        //MANAGE BOOKING

        if (ManageBooking == "Yes" && testexecutionresult != "Failed") {
          if (await library.elementdisplayedAction(oneway.buttonCloseIcon))
            await library.clickAction(oneway.buttonCloseIcon)
          if (await library.elementdisplayedAction(checkinpo.buttonOk))
            await library.clickAction(checkinpo.buttonOk)
          //await home.bookflight()
          //await library.clickAction(oneway.buttonMyTrips)

          // //Date Validation
          // await library.waituntilelementexistAction(oneway.buttonManage)
          // const mbdate = '//XCUIElementTypeStaticText[contains(@name,"' + Departuredate + '")]'
          // const mbdateloc = await $(mbdate)
          // await expect(mbdateloc).toBeExisting()

          await library.clickAction(oneway.buttonManage)
          await library.clickAction(oneway.buttonModifyBooking)

          if (ModifyFlights == "Yes") {
            let reissuejsonresult = await MBreissue.reissue(PNR, Testcase, Segment1, Segment1From, Segment1To, Segment1Date,
              Segment2, Segment2From, Segment2To, Segment2Date, Segment3, Segment3From, Segment3To, Segment3Date,
              Segment4, Segment4From, Segment4To, Segment4Date, Segment1Cabin, Segment2Cabin, Gender, DOBdate, DOBmonth, DOByear, Nationality, DocumentType, MBCountryCode, DocNumber, ExpDay, ExpMonth, ExpYear,
              MBPaymentType, MBCardNumber, MBCardExpMonth, MBCardExpYear, MBCVV, MBCardHolderName, MBCardEmail, MBCardMobile, MBHouseNumber, MBApartmentNumber, MBPincode, MBCity, MBCountry, MBState)
            reissueresult.push(reissuejsonresult)
            var stringconversion = JSON.stringify(reissueresult)
            var finaldata = JSON.parse(stringconversion)
            var tool = new NodeXls();
            var xls = tool.json2xls(finaldata, { order: ["Testcase", "PNR", "DateandTime", "Result"] });
            // var xls1=tool.writeFileSync(c)
            fs.writeFileSync('./test/outputartifact/result/mobile/Reissue.xlsx', xls, 'binary');
          }
        }



        //CHECKIN
        if (Checkin == "Yes" && testexecutionresult != "Failed") {
          if (ManageBooking != "Yes") {
            if (await library.elementdisplayedAction(oneway.buttonCloseIcon))
              await library.clickAction(oneway.buttonCloseIcon)
            if (await library.elementdisplayedAction(checkinpo.buttonOk))
              await library.clickAction(checkinpo.buttonOk)
            await library.clickAction(oneway.buttonManage)
          }
          if (await library.elementdisplayedAction(oneway.buttonCloseReissue))
            await library.clickAction(oneway.buttonCloseReissue)
          await browser.pause(2000)
          if (await library.elementdisplayedAction(checkinpo.buttonOk))
            await library.clickAction(checkinpo.buttonOk)

          let checkinjsonresult = await checkin.checkin(Testcase, PNR, Adult1LastName, Checkin, EmailId, CkCountryCode, PhoneNumber, CkNationality, CkCountry, AdtGender,
            AdtDOB, CkDocumentType, CkDocumentNumber, CkDocExpDate, CkDocIssuingCountry, CkHouseAddress, VisaNumber, VisaCountry, VisaIssueDate, VisaExpDate, VisaIssuingCountry, PurposeOfVisit, SendBySMS, SendAsPdf, SendPassBook, FFPProgram, FFPNumber, timestamp, CkNumberofAdult, CkNumberofChild,
            DoyouwanttodownloadBP, DoyouwanttosendBP, SeatSelection, CkSeatType, CkPaymentType, CkCardNumber, CkCardExpiryMonth, CkCardExpiryYear, CkCVV, CkCardHolderName, CkCardEmail, CkHouseNumber, CkApartmentNumber, CkPincode, CkCity, CkCardCountry, CkState, UpdateContactDetails)

          checkinresult.push(checkinjsonresult)
          var stringconversion = JSON.stringify(checkinresult)
          var finaldata = JSON.parse(stringconversion)
          var tool = new NodeXls();
          var xls = tool.json2xls(finaldata, { order: ["TestcaseScenario", "PNR", "DateandTime", "TestcaseResult"] });
          fs.writeFileSync('./test/outputartifact/result/mobile/WebCheckin.xlsx', xls, 'binary');
        }
        await browser.closeApp()
        await browser.launchApp()
      }
    })

  })
})


