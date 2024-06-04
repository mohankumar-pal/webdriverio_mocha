class Flightlistpagepo{
    get fsa_page_val()
{
    return $("//span[normalize-space()='Flights']")
}

get fl_stop_txt()
{
    //return $$("//div[@class='bound-stop-text ng-star-inserted']")
    return $$(".bound-stop-text-with-info-container")
}
get flightnumber()
{
    return $$("//span[@class='refx-caption operating-airline-multiline ng-star-inserted']")
}
get fl_flt_det()
{
   return $$(".view-flight-details-link")
}
get economy_cabin()
{
    return $$(".eco")
}
get business_cabin()
{
    return $$(".business")
}
get cabin_list()
{
    return $$("//div[@class='refx-body-2 price-card-title-label ng-star-inserted']")
}
get fare_selection()
{
    return $$("//button[contains(@id,'selectFare')]")
}
get upgrade_cabin()
{
    return $(".accept-btn")
}
get keep_curr_cabin()
{
    return $(".reject-btn")
}
get journey_details()
{
    return $$(".mat-step-icon-state-number")
}
get pageLoader()
{
    //return $("//div[@class='loading ng-star-inserted']/img")
    return $("//img[@src='assets/img/animation/animation-loader.svg']")
}
get fill_pax_btn()
{
    return $(".next-step-pax")
}
get labelSelectFareType()
{
    return $("//span[normalize-space()='Select Fare Type']")
}
get textFlightNumbers() {
    return $$("//span[@class='aircraftnumber']/bdo")
}
get textFlightTimings() {
    return $$('//div[@class="location-name-and-code"]/time')
}
get textAirportCode() {
    return $$('//abbr[contains(@title,"Airport")]/bdo')
}
get textFareType()
{
    return $$(".ff-name")
}
get buttonSeg1Flights()
{
   return $$("//div[@id='complex-itinerary-bound0']//ul[@class='flight-list']//div[@class='select-button']")
}
get buttonSeg2Flights()
{
    return $$("//div[@id='complex-itinerary-bound1']//ul[@class='flight-list']//div[@class='select-button']")
}
get buttonSeg3Flights()
{
   return $$("//div[@id='complex-itinerary-bound2']//ul[@class='flight-list']//div[@class='select-button']")
}
get buttonSeg4Flights()
{
   return $$("//div[@id='complex-itinerary-bound3']//ul[@class='flight-list']//div[@class='select-button']")
}
get buttonFlightlistContinue()
{
    return $(".tripSummary-btn-continue")
}
get lableCopyRight()
{
    return $(".copyright")
}
}
module.exports=new Flightlistpagepo()