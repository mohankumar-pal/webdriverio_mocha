var exceltojson = require("xlsx-to-json-lc");
const validate = require("../../../src/website/common/validation.js")

const fs = require('fs')
var NodeXls = require('node-xls');
// Page Objects
const homepo = require('../../../src/website/pageobjects/multicity/Homepagepo.js')
const flightlistpo = require('../../../src/website/pageobjects/multicity/Flightlistpagepo.js')
var paxdetailpo = require('../../../src/website/pageobjects/multicity/Passengerdetpo.js')

const addservicepo = require('../../../src/website/pageobjects/multicity/additionalservicespo.js')
const paymentpo = require('../../../src/website/pageobjects/multicity/paymentpo.js')
// Common Files
var home = require('../../../src/website/common/muliticity/HomePage.js')
var flightlist = require('../../../src/website/common/muliticity/FlightlistPage.js')
var paxdetail = require('../../../src/website/common/muliticity/PassengerDetails.js')
var addservice = require('../../../src/website/common/muliticity/AdditionalService.js')
var payment = require('../../../src/website/common/muliticity/PaymentPage.js')
const library = require('../../../src/website/common/Genericlibrary.js')


var configData = JSON.parse(fs.readFileSync('configWebsite.json'))
let OD = JSON.parse(fs.readFileSync('test/testdata/json/website/MulticityMB.json'))
describe('Trip Type', async () => {
    const pnrarray = [];
    const cancelbook = [];
    const modifyflight = [];
    const modifyAS = [];
    const modifypax = [];
    OD.forEach(({
        Testcase, ExecutionFlag, Segment, Segment1From, Segment1To, Segment2From,
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
        DoyouwanttoaddMeals, Passenger1FoodConfirm, Passenger2FoodConfirm, Passenger3FoodConfirm, Passenger4FoodConfirm, Passenger5FoodConfirm, Passenger6FoodConfirm, Passenger7FoodConfirm, Passenger8FoodConfirm, Passenger9FoodConfirm, Passenger1FoodName, Passenger2FoodName, Passenger3FoodName, Passenger4FoodName, Passenger5FoodName, Passenger6FoodName, Passenger7FoodName, Passenger8FoodName, Passenger9FoodName,
        DouyouwanttoaddAB, ABPassenger1Confirm, ABPassenger2Confirm, ABPassenger3Confirm, ABPassenger4Confirm, ABPassenger5Confirm, ABPassenger6Confirm, ABPassenger7Confirm, ABPassenger8Confirm, ABPassenger9Confirm, Passenger1AB, Passenger2AB, Passenger3AB, Passenger4AB, Passenger5AB, Passenger6AB, Passenger7AB, Passenger8AB, Passenger9AB,
        TypeofSeat, DoyouwanttoaddSeat, PaymentType, CardNumber, CardExpMonth, CardExpYear, CVV, CardHolderName, CardEmail, CardMobile, HouseNumber, ApartmentNumber, Pincode, City, Country, State, ManageBooking, ModifyDetails,
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

        it('Oneway', async () => {

            if (await ExecutionFlag === "Yes") {
                try {

                    await library.createNewsession()
                    await library.urlLaunch(configData['url'])
                    //await browser.pause(2000)
                    //await home.incidentpage()
                    await home.AIsignin()
                    await browser.pause(2000)

                    await library.waitfordisplayedAction(homepo.hyperLinkMulticity)
                    await library.clickAction(homepo.hyperLinkMulticity)
                    const w = await browser.getWindowHandles()
                    await browser.switchToWindow(w[1])
                    await library.waitfordisplayedAction(homepo.labelFlight1)
                    // //await browser.pause(10000)
                    for (var ft = 0; ft < await Segment; ft++) {

                        var fromList = [Segment1From, Segment2From, Segment3From, Segment4From]
                        var toList = [Segment1To, Segment2To, Segment3To, Segment4To]
                        var departureDateList = [Segment1Date, Segment2Date, Segment3Date, Segment4Date]
                        await library.pagescrolltomiddleAction(homepo.textboxFrom[ft])
                        await home.FromToSelection(homepo.textboxFrom[ft], fromList[ft], homepo.textboxTo[ft], toList[ft])
                        //await browser.pause(5000)
                        await library.clickAction(homepo.textboxDate[ft])
                        // //await browser.pause(10000)
                        await home.departureDateSelection(departureDateList[ft], homepo.textboxTo[ft])
                        //await browser.pause(3000)
                        if (ft == 0) {
                            if (await homepo.labelFlightSugg.length != 0) {
                                await library.clickAction(homepo.iconCalendar[0])
                            }
                            //  await $("//span[normalize-space()='Flight 1']").click()   
                            //await $$(".calendar-icon")[0].click()
                        }
                        else if (ft == 1) {
                            if (await homepo.labelFlightSugg.length != 0) {
                                await library.clickAction(homepo.iconCalendar[1])

                            }
                            // await $("//span[normalize-space()='Flight 2']").click()
                            // await $$(".calendar-icon")[1].click()
                        }
                        else if (ft == 2) {
                            if (await homepo.labelFlightSugg.length != 0) {
                                await library.clickAction(homepo.iconCalendar[2])
                            }


                        }
                        else if (ft == 3) {
                            if (await homepo.labelFlightSugg.length != 0) {
                                await library.clickAction(homepo.iconCalendar[3])
                            }

                        }
                        if ((Segment == 2) && (ft == 1)) {
                            await library.clickAction(homepo.buttonRemoveFlights)
                        }
                        if ((Segment > 3) && (ft > 1) && (ft != Segment - 1)) {
                            //await browser.pause(5000)
                            await homepo.buttonAddFlights.click()
                        }

                    }
                    //await browser.pause(3000)
                    await home.passengerSelection(NumberofAdult, NumberofChild, NumberofInfant)
                    //await browser.pause(3000)
                    await home.cabinSelection(CabinType)
                    console.log("Cabin selection completed")

                    //await browser.pause(4000)
                    await homepo.buttonShowFlights.click()
                    await library.pagetimeout(homepo.pageLoader)

                    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                    await library.waitforexistAction(flightlistpo.labelSelectFareType)
                    //await browser.pause(5000)
                    await validate.MCpaxcountvalidation(NumberofAdult, NumberofChild, NumberofInfant)

                    if (Segment == 2) {
                        await validate.MCSegment1departuredatevalidation(Segment1Date)
                        await validate.MCSegment2departuredatevalidation(Segment2Date)
                    }
                    else if (Segment == 3) {
                        await validate.MCSegment1departuredatevalidation(Segment1Date)
                        await validate.MCSegment2departuredatevalidation(Segment2Date)
                        await validate.MCSegment3departuredatevalidation(Segment3Date)
                    }
                    else if (Segment == 3) {
                        await validate.MCSegment1departuredatevalidation(Segment1Date)
                        await validate.MCSegment2departuredatevalidation(Segment2Date)
                        await validate.MCSegment3departuredatevalidation(Segment3Date)
                        await validate.MCSegment4departuredatevalidation(Segment4Date)
                    }
                    var currencytxt = await validate.currencyvalidationMC()
                    await flightlist.fareSelection(SubCabinType)
                    //await browser.pause(9000)

                    if (Segment == 2) {
                        await browser.pause(3000)
                        await library.pagescrollAction(flightlistpo.buttonSeg1Flights[0])
                        await library.clickAction(flightlistpo.buttonSeg1Flights[0])
                        await browser.pause(4000)
                        await validate.MCSegment1fromtovalidation(Segment1From, Segment1To)
                        //await browser.pause(5000)
                        await library.pagescrollAction(flightlistpo.buttonSeg2Flights[0])
                        await library.clickAction(flightlistpo.buttonSeg2Flights[0])
                        //await browser.pause(4000)
                        await validate.MCSegment2fromtovalidation(Segment2From, Segment2To)
                        //await browser.pause(5000)
                    }
                    if (Segment == 3) {
                        await library.pagescrollAction(flightlistpo.buttonSeg1Flights[0])
                        await library.clickAction(flightlistpo.buttonSeg1Flights[0])
                        await validate.MCSegment1fromtovalidation(Segment1From, Segment1To)
                        //await browser.pause(5000)
                        await library.pagescrollAction(flightlistpo.buttonSeg2Flights[0])
                        await library.clickAction(flightlistpo.buttonSeg2Flights[0])
                        await validate.MCSegment2fromtovalidation(Segment2From, Segment2To)
                        //await browser.pause(5000)
                        await library.pagescrollAction(flightlistpo.buttonSeg3Flights[0])
                        await library.clickAction(flightlistpo.buttonSeg3Flights[0])
                        await validate.MCSegment3fromtovalidation(Segment3From, Segment3To)
                        //await browser.pause(5000)
                    }
                    if (Segment == 4) {
                        await library.pagescrollAction(flightlistpo.buttonSeg1Flights[0])
                        await library.clickAction(flightlistpo.buttonSeg1Flights[0])
                        await validate.MCSegment1fromtovalidation(Segment1From, Segment1To)
                        //await browser.pause(5000)
                        await library.pagescrollAction(flightlistpo.buttonSeg2Flights[0])
                        await library.clickAction(flightlistpo.buttonSeg2Flights[0])
                        await validate.MCSegment2fromtovalidation(Segment2From, Segment2To)
                        //await browser.pause(5000)
                        await library.pagescrollAction(flightlistpo.buttonSeg3Flights[0])
                        await library.clickAction(flightlistpo.buttonSeg3Flights[0])
                        await validate.MCSegment3fromtovalidation(Segment3From, Segment3To)
                        //await browser.pause(5000)
                        await library.pagescrollAction(flightlistpo.buttonSeg4Flights[0])
                        await library.clickAction(flightlistpo.buttonSeg4Flights[0])
                        await validate.MCSegment4fromtovalidation(Segment4From, Segment4To)
                        //await browser.pause(5000)
                    }
                    //await browser.pause(4000)
                    await flightlistpo.lableCopyRight.scrollIntoView()
                    //await browser.pause(7000)
                    /*  await gl.pageScroll(fppo.mc_cont_btn)
                     //await browser.pause(2000) */
                    await library.clickAction(flightlistpo.buttonFlightlistContinue)
                    await library.pagetimeout(flightlistpo.pageLoader)
                    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////                    
                    await library.waitforexistAction(paxdetailpo.labelPaxDetailsPage)
                    //await browser.pause(10000)
                    await paxdetail.MCAdultInfant(NumberofAdult, Adult1Tittle, Adult2Tittle, Adult3Tittle, Adult4Tittle, Adult5Tittle, Adult6Tittle, Adult7Tittle, Adult8Tittle, Adult9Tittle,
                        Adult1FirstName, Adult2FirstName, Adult3FirstName, Adult4FirstName, Adult5FirstName, Adult6FirstName, Adult7FirstName, Adult8FirstName, Adult9FirstName,
                        Adult1LastName, Adult2LastName, Adult3LastName, Adult4LastName, Adult5LastName, Adult6LastName, Adult7LastName, Adult8LastName, Adult9LastName,
                        DoyouWanttoAddAdult1FFP, DoyouWanttoAddAdult2FFP, DoyouWanttoAddAdult3FFP, DoyouWanttoAddAdult4FFP, DoyouWanttoAddAdult5FFP, DoyouWanttoAddAdult6FFP, DoyouWanttoAddAdult7FFP,
                        DoyouWanttoAddAdult8FFP, DoyouWanttoAddAdult9FFP, FFPnumberAdult1, FFPnumberAdult2, FFPnumberAdult3, FFPnumberAdult4, FFPnumberAdult5, FFPnumberAdult6, FFPnumberAdult7, FFPnumberAdult8, FFPnumberAdult9,
                        Adult1gender, Adult2gender, Adult3gender, Adult4gender, Adult5gender, Adult6gender, Adult7gender, Adult8gender, Adult9gender,
                        Adult1DOBDay, Adult2DOBDay, Adult3DOBDay, Adult4DOBDay, Adult5DOBDay, Adult6DOBDay, Adult7DOBDay, Adult8DOBDay, Adult9DOBDay,
                        Adult1DOBMonth, Adult2DOBMonth, Adult3DOBMonth, Adult4DOBMonth, Adult5DOBMonth, Adult6DOBMonth, Adult7DOBMonth, Adult8DOBMonth, Adult9DOBMonth,
                        Adult1DOBYear, Adult2DOBYear, Adult3DOBYear, Adult4DOBYear, Adult5DOBYear, Adult6DOBYear, Adult7DOBYear, Adult8DOBYear, Adult9DOBYear,
                        Adult1Nationality, Adult2Nationality, Adult3Nationality, Adult4Nationality, Adult5Nationality, Adult6Nationality, Adult7Nationality, Adult8Nationality, Adult9Nationality,
                        Adult1DocumentNumber, Adult2DocumentNumber, Adult3DocumentNumber, Adult4DocumentNumber, Adult5DocumentNumber, Adult6DocumentNumber, Adult7DocumentNumber, Adult8DocumentNumber, Adult9DocumentNumber,
                        Adult1Issuedcountry, Adult2Issuedcountry, Adult3Issuedcountry, Adult4Issuedcountry, Adult5Issuedcountry, Adult6Issuedcountry, Adult7Issuedcountry, Adult8Issuedcountry, Adult9Issuedcountry,
                        Adult1Expirydate, Adult2Expirydate, Adult3Expirydate, Adult4Expirydate, Adult5Expirydate, Adult6Expirydate, Adult7Expirydate, Adult8Expirydate, Adult9Expirydate,
                        Adult1Expirymonth, Adult2Expirymonth, Adult3Expirymonth, Adult4Expirymonth, Adult5Expirymonth, Adult6Expirymonth, Adult7Expirymonth, Adult8Expirymonth, Adult9Expirymonth,
                        Adult1ExpiryYear, Adult2ExpiryYear, Adult3ExpiryYear, Adult4ExpiryYear, Adult5ExpiryYear, Adult6ExpiryYear, Adult7ExpiryYear, Adult8ExpiryYear, Adult9ExpiryYear,
                        Infant1FirstName, Infant2FirstName, Infant3FirstName, Infant4FirstName, Infant5FirstName, Infant6FirstName, Infant7FirstName, Infant8FirstName, Infant9FirstName,
                        Infant1LastName, Infant2LastName, Infant3LastName, Infant4LastName, Infant5LastName, Infant6LastName, Infant7LastName, Infant8LastName, Infant9LastName,
                        Infant1DOBDay, Infant2DOBDay, Infant3DOBDay, Infant4DOBDay, Infant5DOBDay, Infant6DOBDay, Infant7DOBDay, Infant8DOBDay, Infant9DOBDay,
                        Infant1DOBMonth, Infant2DOBMonth, Infant3DOBMonth, Infant4DOBMonth, Infant5DOBMonth, Infant6DOBMonth, Infant7DOBMonth, Infant8DOBMonth, Infant9DOBMonth,
                        Infant1DOBYear, Infant2DOBYear, Infant3DOBYear, Infant4DOBYear, Infant5DOBYear, Infant6DOBYear, Infant7DOBYear, Infant8DOBYear, Infant9DOBYear,
                        Infant1gender, Infant2gender, Infant3gender, Infant4gender, Infant5gender, Infant6gender, Infant7gender, Infant8gender, Infant9gender,
                        Infant1Nationality, Infant2Nationality, Infant3Nationality, Infant4Nationality, Infant5Nationality, Infant6Nationality, Infant7Nationality, Infant8Nationality, Infant9Nationality,
                        Infant1DocumentNumber, Infant2DocumentNumber, Infant3DocumentNumber, Infant4DocumentNumber, Infant5DocumentNumber, Infant6DocumentNumber, Infant7DocumentNumber, Infant8DocumentNumber, Infant9DocumentNumber,
                        Infant1Issuedcountry, Infant2Issuedcountry, Infant3Issuedcountry, Infant4Issuedcountry, Infant5Issuedcountry, Infant6Issuedcountry, Infant7Issuedcountry, Infant8Issuedcountry, Infant9Issuedcountry,
                        Infant1Expirydate, Infant2Expirydate, Infant3Expirydate, Infant4Expirydate, Infant5Expirydate, Infant6Expirydate, Infant7Expirydate, Infant8Expirydate, Infant9Expirydate,
                        Infant1Expirymonth, Infant2Expirymonth, Infant3Expirymonth, Infant4Expirymonth, Infant5Expirymonth, Infant6Expirymonth, Infant7Expirymonth, Infant8Expirymonth, Infant9Expirymonth,
                        Infant1ExpiryYear, Infant2ExpiryYear, Infant3ExpiryYear, Infant4ExpiryYear, Infant5ExpiryYear, Infant6ExpiryYear, Infant7ExpiryYear, Infant8ExpiryYear, Infant9ExpiryYear,
                        NumberofInfant,
                    )
                    if (await NumberofChild != 0) {
                        await paxdetail.MCChild(NumberofAdult, NumberofInfant, NumberofChild, Child1Tittle, Child2Tittle, Child3Tittle, Child4Tittle, Child5Tittle, Child6Tittle, Child7Tittle, Child8Tittle, Child9Tittle,
                            Child1FirstName, Child2FirstName, Child3FirstName, Child4FirstName, Child5FirstName, Child6FirstName, Child7FirstName, Child8FirstName, Child9FirstName,
                            Child1LastName, Child2LastName, Child3LastName, Child4LastName, Child5LastName, Child6LastName, Child7LastName, Child8LastName, Child9LastName,
                            Child1DOBDay, Child2DOBDay, Child3DOBDay, Child4DOBDay, Child5DOBDay, Child6DOBDay, Child7DOBDay, Child8DOBDay, Child9DOBDay,
                            Child1DOBMonth, Child2DOBMonth, Child3DOBMonth, Child4DOBMonth, Child5DOBMonth, Child6DOBMonth, Child7DOBMonth, Child8DOBMonth, Child9DOBMonth,
                            Child1DOBYear, Child2DOBYear, Child3DOBYear, Child4DOBYear, Child5DOBYear, Child6DOBYear, Child7DOBYear, Child8DOBYear, Child9DOBYear,
                            DoyouWanttoAddChild1FFP, DoyouWanttoAddChild2FFP, DoyouWanttoAddChild3FFP, DoyouWanttoAddChild4FFP, DoyouWanttoAddChild5FFP, DoyouWanttoAddChild6FFP, DoyouWanttoAddChild7FFP, DoyouWanttoAddChild8FFP, DoyouWanttoAddChild9FFP,
                            FFPnumberChild1, FFPnumberChild2, FFPnumberChild3, FFPnumberChild4, FFPnumberChild5, FFPnumberChild6, FFPnumberChild7, FFPnumberChild8, FFPnumberChild9,
                            Child1gender, Child2gender, Child3gender, Child4gender, Child5gender, Child6gender, Child7gender, Child8gender, Child9gender,
                            Child1Nationality, Child2Nationality, Child3Nationality, Child4Nationality, Child5Nationality, Child6Nationality, Child7Nationality, Child8Nationality, Child9Nationality,
                            Child1DocumentNumber, Child2DocumentNumber, Child3DocumentNumber, Child4DocumentNumber, Child5DocumentNumber, Child6DocumentNumber, Child7DocumentNumber, Child8DocumentNumber, Child9DocumentNumber,
                            Child1Issuedcountry, Child2Issuedcountry, Child3Issuedcountry, Child4Issuedcountry, Child5Issuedcountry, Child6Issuedcountry, Child7Issuedcountry, Child8Issuedcountry, Child9Issuedcountry,
                            Child1Expirydate, Child2Expirydate, Child3Expirydate, Child4Expirydate, Child5Expirydate, Child6Expirydate, Child7Expirydate, Child8Expirydate, Child9Expirydate,
                            Child1Expirymonth, Child2Expirymonth, Child3Expirymonth, Child4Expirymonth, Child5Expirymonth, Child6Expirymonth, Child7Expirymonth, Child8Expirymonth, Child9Expirymonth,
                            Child1ExpiryYear, Child2ExpiryYear, Child3ExpiryYear, Child4ExpiryYear, Child5ExpiryYear, Child6ExpiryYear, Child7ExpiryYear, Child8ExpiryYear, Child9ExpiryYear,

                        )
                    }


                    await paxdetail.contactDetails(CdEmail, CdCountryCode, CdMobNum, CdConfirmEmail, CdEmail2, CdEmail3, EmergencyDetails, EmergencyName, EmergencyCountrycode, EmergencyMobNum)
                    //await browser.pause(9000)
                    await library.clickAction(paxdetailpo.buttonPaxDetailContinue)

                    await library.pagetimeout(flightlistpo.pageLoader)
                    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////                 

                    await library.waitforexistAction(addservicepo.labelAddServicePage)
                    console.log("Reached additional service page")
                    //await browser.pause(10000)
                    if (DoyouwanttoaddWC == "Yes") {
                        await addservice.MCWheelChair(WcPassenger1Confirm, WcPassenger2Confirm, WcPassenger3Confirm, WcPassenger4Confirm, WcPassenger5Confirm, WcPassenger6Confirm, WcPassenger7Confirm, WcPassenger8Confirm, WcPassenger9Confirm)
                    }
                    if (DoyouwanttoaddMeals == "Yes") {
                        await addservice.MCAddMeal(Passenger1FoodConfirm, Passenger2FoodConfirm, Passenger3FoodConfirm, Passenger4FoodConfirm, Passenger5FoodConfirm, Passenger6FoodConfirm, Passenger7FoodConfirm, Passenger8FoodConfirm, Passenger9FoodConfirm, Passenger1FoodName, Passenger2FoodName, Passenger3FoodName, Passenger4FoodName, Passenger5FoodName, Passenger6FoodName, Passenger7FoodName, Passenger8FoodName, Passenger9FoodName)
                    }
                    if (DouyouwanttoaddAB == "Yes") {
                        await addservice.MCAdditionalBaggage(ABPassenger1Confirm, ABPassenger2Confirm, ABPassenger3Confirm, ABPassenger4Confirm, ABPassenger5Confirm, ABPassenger6Confirm, ABPassenger7Confirm, ABPassenger8Confirm, ABPassenger9Confirm, Passenger1AB, Passenger2AB, Passenger3AB, Passenger4AB, Passenger5AB, Passenger6AB, Passenger7AB, Passenger8AB, Passenger9AB)
                    }
                    if (DoyouwanttoaddSeat == "Yes") {
                        await addservice.MCSeatMap(TypeofSeat)
                    }
                    //await browser.pause(6000)
                    if ((DoyouwanttoaddWC != "Yes") && (DoyouwanttoaddMeals != "Yes") && (DouyouwanttoaddAB != "Yes") && (DoyouwanttoaddSeat != "Yes")) {
                        await library.pagescrolltomiddleAction(addservicepo.addServicePageend)
                        //await browser.pause(3000)
                        await library.pagescrollAction(addservicepo.addServicePageTop)
                        //await browser.pause(3000)
                        await library.pagescrolltomiddleAction(addservicepo.addServicePageend)
                    }
                    else {
                        // await gl.waitforexistAction(ad.mc_abcontinue)
                        await library.pagescrolltomiddleAction(addservicepo.textABContinue)
                    }
                    await library.clickAction(addservicepo.textABContinue)
                    await library.pagetimeout(addservicepo.pageLoader)
                    //await browser.pause(3000)
                    await library.waitforexistAction(paymentpo.labelPaymentMethod)
                    //await browser.pause(10000)
                    if (Doyouwanttoaddpromocode == "Yes") {
                        await library.fillTextbox(paymentpo.buttonPromoccode, Promocode)
                        //await browser.pause(3000)
                        await library.clickAction(paymentpo.linkPromocode)
                    }
                    if (PaymentType == "Netbanking") {
                        await payment.MCNetBanking()
                    }
                    if (PaymentType == "CreditCard") {
                        await payment.MCCreditCard(CardNumber, CardExpMonth, CardExpYear, CVV, CardHolderName, CardEmail, CardMobile, HouseNumber, ApartmentNumber, Pincode, City, Country, State)
                    }
                    if (PaymentType == "EMI") {
                        await payment.MCEmi()
                    }
                    if (PaymentType == "Wallet") {
                        await payment.MCWallet()
                    }
                    if (PaymentType == "Rupay") {
                        await payment.MCRupay(CardNumber, CardExpMonth, CardExpYear, CVV, CardHolderName)
                    }
                    if (PaymentType == "UPI") {
                        await payment.MCUpi()
                    }


                    //await browser.pause(3000)

                    await library.pagetimeout(paymentpo.pageLoader)

                    //await browser.pause(3000)
                    await library.waitforexistAction(paymentpo.labelConfirmationVal)
                    //await browser.pause(3000)
                    var pnrdetails = await library.gettextAction(paymentpo.textPNR)
                    await validate.PNRvalidation(pnrdetails)
                    var travelername = await library.gettextAction(paymentpo.textTravelerName[0])
                    var fullname = travelername.split(' ')
                    var lastname = fullname[1]
                    console.log(lastname)



                    let timestamp = new Date().toString("dd-MM-yyyy hh:ss:mm").replace(" ", "_");
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
                    cabin1 = " "
                    var jsdata = {
                        "TestcaseScenario": [scenario],
                        "LastName": [lastname],
                        "PNR": [pnrdetails],
                        "Segment1From": [Segment1From],
                        "Segment1To": [Segment1To],
                        "Segment2From": [Segment2From],
                        "Segment2To": [Segment2To],
                        "Segment3From": [Segment3From],
                        "Segment3To": [Segment3To],
                        "Segment4From": [Segment4From],
                        "Segment4To": [Segment4To],
                        "Currency": [currencytxt],
                        "TestcaseResult": [testresult],
                        "DateandTime": new Date().toLocaleString(undefined, {
                            timeZone: 'Asia/Kolkata'
                        }),

                    }
                    pnrarray.push(jsdata)

                    await browser.closeWindow()
                    await browser.switchToWindow(w[0])


                    /*  if(ManageBooking=="Yes")
                     {
                      await browser.url(configData['url'])
                                      
                      //await browser.pause(6000)
                      
                      await mb.managebook.waitForExist({timeout:200000})
                      //await browser.pause(2000)
                      await mb.managebook.scrollIntoView({ block: 'center', inline: 'center' })
                      //await browser.pause(2000)
                      await mb.managebook.click()
                      //await browser.pause(2000)
              
              
                      await mb.bookingref.setValue(pnrdetails)
                      await mb.lastname.setValue(lastname)
                      await mb.submit.click()
                      ////await browser.pause(2000)
                      await mb.pnrrefval.waitForExist({ timeout: 200000 })
                      await mb.managebookingtext.waitForExist({ timeout: 200000 })
                      //await browser.pause(3000)
                      if(ModifyDetails=="Yes")
                      {
                        var modifypaxresult= await mbd.modifypaxdetails(MDTestcase,MBGender, MBDOBdate, MBDOBmonth, MBDOByear, MBEmail2, MBEmail3, MBEmergencyName, MBEmergencyCountrycode, MBEmergencyPhone,
                             MBNationality, MBDocNumber, MBCountryCode, MBExpDay, MBExpMonth, MBExpYear, MBDocumentType)
                             modifypax.push(modifypaxresult)
                             var modifypaxconversion = JSON.stringify(modifypax)
                             var modifypaxdata = JSON.parse(modifypaxconversion)
                             var tool = new NodeXls();
                             var xls = tool.json2xls(modifypaxdata, { order: ["Testcase", "DateandTime", "Result"] });
                                 fs.writeFileSync('./test/testdata/result/ModifyDetails.xlsx', xls, 'binary');
                      }
                      if(Segment==2)
                      {
                      if (ModifyFlights == "Yes") {
                        var modifyflresult= await mbf.reissue(RITestcase,RISegment1, RISegment1From, RISegment1To, RISegment1Date,
                             RISegment2, RISegment2From, RISegment2To, RISegment2Date, RISegment3, RISegment3From, RISegment3To, RISegment3Date,
                             RISegment4, RISegment4From, RISegment4To, RISegment4Date, RISegment1Cabin, RISegment2Cabin, MBGender, MBDOBdate, MBDOBmonth, MBDOByear, MBNationality, MBDocumentType, MBCountryCode, MBDocNumber, MBExpDay, MBExpMonth, MBExpYear,
                             PaymentType, CardNumber, CardExpMonth, CardExpYear, CVV, CardHolderName, CardEmail, CardMobile, HouseNumber, ApartmentNumber, Pincode, City, Country, State)
                             modifyflight.push(modifyflresult)
                             var modifyflconversion = JSON.stringify(modifyflight)
                             var modifyfldata = JSON.parse(modifyflconversion)
                             var tool = new NodeXls();
                             var xls = tool.json2xls(modifyfldata, { order: ["Testcase", "DateandTime", "Result"] });
                                 fs.writeFileSync('./test/testdata/result/Reissue.xlsx', xls, 'binary');
                    
                    
                    
                         }
                 }
                 if (MBAS == "Yes") {
                     var mbaresult=await mba.mbadditionalservice(ASTestcase,MBDoyouwanttoaddAB,
                         MBPassenger1Confirm, MBPassenger1AB, MBPassenger2Confirm, MBPassenger2AB, MBPassenger3Confirm, MBPassenger3AB,
                         MBPassenger4Confirm, MBPassenger4AB, MBPassenger5Confirm, MBPassenger5AB, MBPassenger6Confirm, MBPassenger6AB, MBPassenger7Confirm,
                         MBPassenger7AB, MBPassenger8Confirm, MBPassenger8AB, MBPassenger9Confirm, MBPassenger9AB,
                         MBDoyouwanttoaddWC, MBPassenger1ConfirmWC, MBPassenger2ConfirmWC, MBPassenger3ConfirmWC, MBPassenger4ConfirmWC, MBPassenger5ConfirmWC,
                         MBPassenger6ConfirmWC, MBPassenger7ConfirmWC, MBPassenger8ConfirmWC, MBPassenger9ConfirmWC, MBDoyouwanttoaddMeal,
                         MBPassenger1FoodConfirm, MBPassenger1FoodName, MBPassenger2FoodConfirm, MBPassenger2FoodName, MBPassenger3FoodConfirm,
                         MBPassenger3FoodName, MBPassenger4FoodConfirm, MBPassenger4FoodName, MBPassenger5FoodConfirm, MBPassenger5FoodName,
                         MBPassenger6FoodConfirm, MBPassenger6FoodName, MBPassenger7FoodConfirm, MBPassenger7FoodName, MBPassenger8FoodConfirm, MBPassenger8FoodName,
                         MBPassenger9FoodConfirm, MBPassenger9FoodName, MBDoyouwanttoaddSeat, MBTypeofSeat, MBPaymentType, CardNumber, CardExpMonth, CardExpYear, CVV, CardHolderName, CardEmail, CardMobile, HouseNumber, ApartmentNumber, Pincode, City, Country, State)
                 
                       modifyAS.push(mbaresult)
                       var modifyasconversion = JSON.stringify(modifyAS)
                       var modifyasdata = JSON.parse(modifyasconversion)
                       var tool = new NodeXls();
                      var xls = tool.json2xls(modifyasdata, { order: ["Testcase", "DateandTime", "Result"] });
    
                      fs.writeFileSync('./test/testdata/result/AdditionalService.xlsx', xls, 'binary');
                 
                 
                 
                     }
                      if (Cancel == "Yes") {
                         var cancelresult=await mbc.cancel(CLTestcase)
                         cancelbook.paush(cancelresult)
 
                         var cancelconversion = JSON.stringify(cancelbook)
                         var canceldata = JSON.parse(cancelconversion)
                         var tool = new NodeXls();
                         var xls = tool.json2xls(canceldata, { order: ["Testcase","DateandTime","Result"] });
                         // var xls1=tool.writeFileSync(c)
                         fs.writeFileSync('./test/testdata/result/CancelResult.xlsx', xls, 'binary');
                     }
                     }
               */














                } catch (e) {
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
                    var lastname1 = " "

                    var jsdata = {
                        "TestcaseScenario": [Testcase],
                        "LastName": [lastname1],
                        "PNR": [pn1],
                        "Segment1From": [Segment1From],
                        "Segment1To": [Segment1To],
                        "Segment2From": [Segment2From],
                        "Segment2To": [Segment2To],
                        "Segment3From": [Segment3From],
                        "Segment3To": [Segment3To],
                        "Segment4From": [Segment4From],
                        "Segment4To": [Segment4To],
                        "Currency": [currencytxt],
                        "TestcaseResult": [testresult1],
                        "DateandTime": new Date().toLocaleString(undefined, {
                            timeZone: 'Asia/Kolkata'
                        }),
                    }
                    pnrarray.push(jsdata)


                }
                var stringconversion = JSON.stringify(pnrarray)
                var finaldata = JSON.parse(stringconversion)
                var tool = new NodeXls();
                var xls = tool.json2xls(finaldata, { order: ["TestcaseScenario", "LastName", "PNR", "Segment1From", "Segment1To", "Segment2From", "Segment2To", "Segment3From", "Segment3To", "Segment4From", "Segment4To", "Currency", "DateandTime", "TestcaseResult"] });

                fs.writeFileSync('./test/outputartifact/result/website/MulticityResult.xlsx', xls, 'binary');
            }

        })
    })
})
