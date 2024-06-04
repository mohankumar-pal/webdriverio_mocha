class validationpo {
    get textPromoCode() {
        return $(".message-title")
    }
    get textConcessionApplied() {
        return $(".applied")
    }
    get textCurrency() {
        return $$("//abbr[contains(@class,'price-currency-code')]")
    }
    get textCurrencyMC()
    {
        return $$(".ff-bestprice-currency")
    }
    get textSegment1FromTo()
    {
       return $$("//div[@id='complex-itinerary-bound0']//ul[@class='flight-list']//li[@id='tpl3_bound0-flight1']//article[contains(@class,'flight-box ')]//header[@class='flight-header']//div//label[@class='departure-arrival-location']//div[@class='location-name-and-code']//div//abbr/bdo")
        // return $$("//li[@id='tpl3_bound0-flight1']//article[@class='flight-box selected']//header[@class='flight-header']//div//label[@class='departure-arrival-location']//div[@class='location-name-and-code']//div//abbr/bdo")
    }
    get textSegment2FromTo()
    {
        return $$("//div[@id='complex-itinerary-bound1']//ul[@class='flight-list']//li[@id='tpl3_bound1-flight2']//article[contains(@class,'flight-box ')]//header[@class='flight-header']//div//label[@class='departure-arrival-location']//div[@class='location-name-and-code']//div//abbr/bdo")
        //return $$("//li[@id='tpl3_bound1-flight2']//article[@class='flight-box selected']//header[@class='flight-header']//div//label[@class='departure-arrival-location']//div[@class='location-name-and-code']//div//abbr/bdo")
    }
    get textSegment3FromTo()
    {
        return $$("//div[@id='complex-itinerary-bound2']//ul[@class='flight-list']//li[@id='tpl3_bound2-flight3']//article[contains(@class,'flight-box ')]//header[@class='flight-header']//div//label[@class='departure-arrival-location']//div[@class='location-name-and-code']//div//abbr/bdo")
        //return $$("//li[@id='tpl3_bound2-flight3']//article[@class='flight-box selected']//header[@class='flight-header']//div//label[@class='departure-arrival-location']//div[@class='location-name-and-code']//div//abbr/bdo")
    }
    get textSegment4FromTo()
    {
        return $$("//div[@id='complex-itinerary-bound3']//ul[@class='flight-list']//li[@id='tpl3_bound3-flight4']//article[contains(@class,'flight-box ')]//header[@class='flight-header']//div//label[@class='departure-arrival-location']//div[@class='location-name-and-code']//div//abbr/bdo")
       // return $$("//li[@id='tpl3_bound3-flight4']//article[@class='flight-box selected']//header[@class='flight-header']//div//label[@class='departure-arrival-location']//div[@class='location-name-and-code']//div//abbr/bdo")
    }
    get textDepartureCode() {
        return $$(".bound-departure-airport-code")
    }
    get textArrivalCode() {
        return $$(".bound-arrival-airport-code")
    }
    get textDepartureDate() {
        return $$(".bound-departure-date")
    }
    get textArrivalDate() {
        return $$(".bound-arrival-date")
    }
    get textBoundDate() {
        return $$(".bound-departure-date")
    }
    get textPaxCount() {
        return $("//div[@class='traveler-header']//span[2]")
    }
    get textFlightStatusFrom() {
        //return $("//div[@class='segment-details-departure ']")
        return $('//div[contains(@class,"departure")]/h4[contains(@class,"aiport-name")]')
    }
    get textFlightStatusTo() {
        //return $("//div[@class='segment-details-arrival ']")
        return $('//div[contains(@class,"arrival")]/h4[contains(@class,"aiport-name")]')
    }
    get textTotalDuration() {
        return $("//div[@class='total-duration-col']")
    }
    get textFlightCode() {
        return $(".flight-info-airline-flight")
    }
    get textDate() {
        return $('".date"')
    }
    get textFlightTimings() {
        return $$('//span[@class="flightStatusTime"]')
    }
    get textOrigin() {
        return $$(".display-from-location-code")
    }
    get textDestination() {
        return $$(".display-to-location-code")
    }
    get textFSCdate() {
        return $$("//div[contains(@class,'timetable-outboundcell-day-selected')]//span")
    }
    get textFSCmonthyear() {
        return $$(".timetable-bound-currentmonth")
    }
    get textMCDepartureDate1()
    {
        return $("//div[@class='tripsummary-section tripsummary-section-itinerary']/div[1]")
    }
    get textMCDepartureDate2()
    {
        return $("//div[@class='tripsummary-section tripsummary-section-itinerary']/div[2]")
    }
    get textMCDepartureDate3()
    {
        return $("//div[@class='tripsummary-section tripsummary-section-itinerary']/div[3]")
    }
    get textMCDepartureDate4()
    {
        return $("//div[@class='tripsummary-section tripsummary-section-itinerary']/div[4]")
    }
    get textMCPaxCount()
    {
        return $("//div[@class='tripsummary-section tripsummary-section-traveller']/h3")
    }
    get textConfirmation()
  {
    return $("//h2[@class='panel-title cancelled-banner']//span")
  }
}
module.exports = new validationpo()



