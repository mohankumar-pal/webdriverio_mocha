class Flightlistpagepo{
    get textFlights()
{
    return $("//span[normalize-space()='Flights']")
}
get buttonShowFlights()
{
    return $("//button[text()=' Show Flight ']")
}
get textFlightStop()
{
    return $$(".bound-stop-text-with-info-container")
}
get flightnumber()
{
    return $$("//span[@class='refx-caption operating-airline-multiline ng-star-inserted']")
}
get textFlightDetail()
{
   return $$(".view-flight-details-link")
}
get optionEconomyCabin()
{
    return $$(".eco")
}
get optionBusinessCabin()
{
    return $$(".business")
}
get optionFirstCabin()
{
    return $$(".first")
}
get textFlightNumbers() {
    return $$("//span[contains(@class,'operating-airline-multiline')]")
}
get textFlightLists() {
    return $$("//div[@class='basic-flight-card-layout-top-section-container row']")
}
get textFromTimings() {
    return $$("//div[contains(@class,'bound-departure-datetime')]")
}
get textFromTiming() {
    return $("//span[contains(@class,'seg-details-dep-time')]")
}
get textToTimings() {
    return $$("//div[contains(@class,'bound-arrival-datetime')]")
}
get textToTiming() {
    return $("//span[contains(@class,'seg-details-arv-time')]")
}
get buttonViewFlightDetails() {
    return $$("//a[contains(@class,'view-flight-details-link')]")
}
get textOrigin() {
    return $("//div[contains(@class,'seg-details-dep-airport')]/bdo")
}
get textDestination() {
    return $("//div[contains(@class,'seg-details-arv-airport')]/bdo")
}
get iconCross() {
    return $("//button[contains(@title,'Close')]")
}
get textCurrency()
{
    return $$("//abbr[contains(@class,'price-currency-code')]")
}
get optionPremiumCabin()
{
    return $$(".ecoPremium")
}
get buttonFlightCard() {
    return $$("//button[contains(@class,'flight-card-button')]")
}
get textCabinList()
{
    return $$("//div[@class='refx-body-2 price-card-title-label ng-star-inserted']")
}
get buttonFareSelection()
{
    return $$("//button[contains(@id,'selectFare')]")
}
get upgrade_cabin()
{
    return $(".accept-btn")
}
get buttonKeepCurrCabin()
{
    return $(".reject-btn")
}
get textJourneyDetails()
{
    return $$(".mat-step-icon-state-number")
}
get page_loader()
{
    //return $("//div[@class='loading ng-star-inserted']/img")
    return $('//div[contains(@class,"contained")]')
}
get buttonFillPax()
{
    return $(".next-step-pax")
}
get buttonModifySearch()
{
    return $("//button[normalize-space()='Modify Search']")
}
get buttonSearchflight()
{
    return $("//button[@id='modify-button']")
}
get textboxModifyFrom()
{
    return $("//input[@id='origin']")
}
get optionModifyFromSugg()
{
    return $$("//span[@class='mat-option-text']")
}
get textboxModifyTo()
{
    return $("//input[@id='destination']")
}
get textMonthYear()
{
    return $("//span[@class='calendar-header-label refx-display-3']")
}
get buttonDate()
{
    return $$("//div[@class='mat-calendar-body-cell-content mat-focus-indicator']")
}
get buttonNextArrow()
{
    return $("//span[@class='navigation-button']")
}
get buttonCalendar()
{
    return $("//button[@aria-label='Open calendar']")
}
get iconPax()
{
    return $(".passengers-icon")
}
get textAddPax()
{
    return $$(".refx-icon-add")
}
get textMinusPax()
{
    return $$(".refx-icon-minus")
}
get buttonConfirm()
{
    return $(".confirm-button")
}
}
module.exports=new Flightlistpagepo()