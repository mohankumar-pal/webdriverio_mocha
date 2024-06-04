var library = require('./Genericlibrary.js')
const homePage = require('../pageobjects/Homepagepo.js')
const Homepagepo = require('../pageobjects/Homepagepo.js')

async function permissionpopup() {
  if (await library.elementdisplayedAction(homePage.buttonEnableLocation[0])) {
    await library.clickAction(homePage.buttonEnableLocation[0])
    await library.clickAction(homePage.buttonAllowWhileUsingApp)
  if(await library.elementdisplayedAction(homePage.buttonAllowNotification[0]))
  {
    await library.clickAction(homePage.buttonAllowNotification[0])
    await library.clickAction(homePage.buttonAllow)
    //await library.waituntilelementexistAction(homePage.imageFlyingReturns)
   
  }
  await homePage.pageForwardScroll
    await library.clickAction(homePage.buttonGetStarted)
  }
}
async function bookflight() {
  await browser.pause(3000)
  //await library.clickAction(homePage.bookFlightPopup[0])
  await library.clickAction(homePage.buttonBookFlight)
}
async function selectroundtrip() {
  await library.clickAction(homePage.buttonRoundTrip)
}
async function selectoneway() {
  await library.clickAction(homePage.buttonOneWay)
}
async function selectmulticity() {
  await library.clickAction(homePage.buttonMulticity)
}
async function fromto(From, To) {
  await library.clickAction(homePage.buttonFrom)
  await library.clickAction(homePage.textboxCity)
  await library.filltextboxAction(homePage.textboxCity, From)
  
  // for (var sp = 0; sp < await homePage.dropdownCityValue.length; sp++) {
  //   var sptext = await library.gettextAction(homePage.dropdownCityValue[sp])
  //   if (sptext == From) {
  //     await library.clickAction(homePage.dropdownCityValue[sp])
  //     break;
  //   }
  // }
  const fromtxt = '//android.widget.TextView[@text="' +From+ '"]'
  const fromloc = await $(fromtxt)
  await library.clickAction(fromloc)
  

  //await library.clickAction(homePage.buttonTo)
  await library.clickAction(homePage.textboxCity)
  await library.filltextboxAction(homePage.textboxCity, To)
  
  // for (var sp = 0; sp < await homePage.dropdownCityValue.length; sp++) {
  //   var sptext = await library.gettextAction(homePage.dropdownCityValue[sp])
  //   if (sptext == To) {
  //     await library.clickAction(homePage.dropdownCityValue[sp])
  //     break;
  //   }
  // }
  const totxt = '//android.widget.TextView[@text="' +To+ '"]'
  const toloc = $(totxt)
  await library.clickAction(toloc)
}
async function mcfromto(frombutton,From,tobutton,To)
{
  await library.clickAction(frombutton)
  await library.clickAction(homePage.textboxCity)
  await library.filltextboxAction(homePage.textboxCity, From)
  await library.waituntilelementexistAction(homePage.dropdownCityValue[0])
  for (var sp = 0; sp < await homePage.dropdownCityValue.length; sp++) {
    var sptext = await library.gettextAction(homePage.dropdownCityValue[sp])
    if (sptext == From) {
      await library.clickAction(homePage.dropdownCityValue[sp])
      break;
    }
  }
                                            
  //await library.clickAction(tobutton)
  await library.clickAction(homePage.textboxCity)
  await library.filltextboxAction(homePage.textboxCity, To)
  await library.waituntilelementexistAction(homePage.dropdownCityValue[0])
  for (var sp = 0; sp < await homePage.dropdownCityValue.length; sp++) {
    var sptext = await library.gettextAction(homePage.dropdownCityValue[sp])
    if (sptext == To) {
      await library.clickAction(homePage.dropdownCityValue[sp])
      break;
    }
  }
}

async function cityandcalendar(Segment, fromlist, tolist, datelist) {
  for (var ft = 0; ft < await Segment ; ft++) {
    if ((Segment > 2) && (ft > 1) ) {
      await library.clickAction(homePage.buttonAddFlight)
    }
    console.log("Segment count" + Segment)
    await mcfromto(homePage.buttonMulticityFrom[ft], fromlist[ft], homePage.buttonMulticityTo[ft], tolist[ft])
    await library.clickAction(homePage.buttonMulticityCalendar[ft])
    await calendar(datelist[ft])
  }
  console.log("org dest completed")
}
async function calendar(Departuredate) {
  await library.waituntilelementexistAction(homePage.textCalendar)
  var departuredate = Departuredate
  var date = departuredate.slice(0, 2)
  var depdate = parseInt(date)
  var depmonth = departuredate.slice(3, 6)
  var depyear = departuredate.slice(7, 11)
  console.log(depdate + "date")
  console.log(depmonth + "month")
  console.log(depyear + "year")
  //while (!await library.elementdisplayedAction(homePage.textCalendar)) {
    var montxt = await library.gettextAction(homePage.textMonth)
    if (await montxt.includes(depmonth)) {
      var datevalue = '//android.widget.TextView[contains(@text,"' +depdate+ '")]'
      var dat = await $$(datevalue)
      console.log(dat)
      console.log(await dat.length)
      for (var i = 0; i < await dat.length; i++) {
        var datetxt = await library.gettextAction(dat[i])
        if (datetxt.includes(depdate)) {
          await library.clickAction(dat[i])
          break;
        }
      }
    }
    else {

    }
  //}
  await library.clickAction(homePage.buttonConfirmDate)
}


async function departcalendar(Departuredate, Returndate) {

  await library.waituntilelementexistAction(homePage.textCalendar)
  var departuredate = Departuredate
  var date = departuredate.slice(0, 2)
  var depdate = parseInt(date)
  var depmonth = departuredate.slice(3, 6)
  var depyear = departuredate.slice(7, 13)
  console.log(depdate + "date")
  console.log(depmonth + "month")
  console.log(depyear + "year")
  var departuredate1 = Returndate
  var date1 = departuredate1.slice(0, 2)
  var depdate1 = parseInt(date1)
  var depmonth1 = departuredate.slice(3, 6)
  var depyear1 = departuredate.slice(7, 13)
  console.log(depdate1 + "date")
  console.log(depmonth1 + "month")
  console.log(depyear1 + "year")

  while (!await library.elementdisplayedAction(homePage.buttonConfirmDate)) {
    var montxt = await library.gettextAction(homePage.textMonth[0])
    if (montxt == depmonth) {
      var datevalue = "//XCUIElementTypeOther//XCUIElementTypeStaticText[@name='" + depdate + "']"
      var dat = await $$(datevalue)
      console.log(datevalue)
      console.log(await dat.length)
      for (var i = 0; i < await dat.length; i++) {
        var datetxt = await library.gettextAction(dat[i])
        if (datetxt == depdate) {
          await library.clickAction(dat[i])
          await library.clickAction(dat[i])
          await library.waituntilelementexistAction(homePage.buttonConfirmDate)
          break;
        }
      }
      var datevalue = "//XCUIElementTypeOther//XCUIElementTypeStaticText[@name='" + depdate1 + "']"
      var dat = await $$(datevalue)
      console.log(datevalue)
      console.log(await dat.length)
      for (var i = 0; i < await dat.length; i++) {
        var datetxt = await library.gettextAction(dat[i])
        if (datetxt == depdate1) {
          await library.clickAction(dat[i])
          //await library.waituntilelementexistAction(homePage.buttonConfirmDate)
          break;
        }
      }
    }
    else {

    }
  }
  await library.clickAction(homePage.buttonConfirmDate)
}

async function passengerselection(NumberofAdult, NumberofChild, NumberofInfant) {
  if (NumberofAdult > 1) {
    for (var j = 0; j < NumberofAdult - 1; j++) {
      await library.clickAction(homePage.buttonPlus[1])
    }
  }
  if (NumberofChild >= 1) {
    for (var j = 0; j < NumberofChild; j++) {
      await library.clickAction(homePage.buttonPlus[3])
    }
  }
  if (NumberofInfant >= 1) {
    for (var j = 0; j < NumberofInfant; j++) {
      await library.clickAction(homePage.buttonPlus[5])
    }
  }

  await library.clickAction(homePage.buttonConfirm)
}
async function cabinselection(CabinType) {
  await browser.pause(1000)
  if (CabinType == "Economy") {
    await library.clickAction(homePage.buttonEconomy)
  }
  if (CabinType == "Business") {
    await library.scrollHorizontalIntoTextView(CabinType)
    await library.clickAction(homePage.buttonBusiness)
  }
  if (CabinType == "First") {
    await library.scrollHorizontalIntoTextView(CabinType)
    await library.clickAction(homePage.buttonFirst)
  }
  if (CabinType == "Premium Economy") {
    await library.scrollHorizontalIntoTextView(CabinType)
    await library.clickAction(homePage.buttonPremiumEconomy)
  }

  await library.clickAction(homePage.buttonConfirm)
}
async function concessionselection(ConcessionaryType) {
  await library.clickAction(homePage.toggleConcession)
  const ct = '//android.widget.TextView[@text="' + ConcessionaryType +'"]'
  const buttonConcession = await $(ct)
  await library.clickAction(buttonConcession)

}
async function promotioncode(Promocode) {
  await library.filltextboxAction(homePage.textboxPromoCode, Promocode)
  //await library.clickAction(homePage.buttonReturn)
}
exports.fromto = fromto;
exports.calendar = calendar;
exports.departcalendar = departcalendar;
exports.passengerselection = passengerselection;
exports.cabinselection = cabinselection;
exports.concessionselection = concessionselection;
exports.promotioncode = promotioncode;
exports.permissionpopup = permissionpopup;
exports.bookflight = bookflight;
exports.selectroundtrip = selectroundtrip;
exports.selectoneway = selectoneway;
exports.selectmulticity = selectmulticity;
exports.cityandcalendar = cityandcalendar;
exports.mcfromto = mcfromto;