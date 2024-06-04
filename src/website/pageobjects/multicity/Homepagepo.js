class Homepagepo{
get buttonGoToHome()
{
    return $('.incident-top-button')
}
get textboxSigninEmail() {
    return $('//input[contains(@class,"text-box")]')
}
get textboxSigninPassword() {
    return $('//input[@type="password"]')
}
get buttonSigninSubmit() {
    return $('//input[@type="submit"]')
}
get buttonSigninYes() {
    return $('//input[@value="Yes"]')
}
get buttonSigninNo() {
    return $('//input[@value="No"]')
}
get buttonClose() {
    //return $('//span[@id="close-icon"]')
    return $('//button[@class="ai-dw-close-btn"]')
}
get buttonGiftPopup() {
    return $('//div[@id="gif-popup"]')
}
get buttonSearchFlights()
{
    return $("//span[normalize-space()='Flights']")
}
get from()
{
    return $("(//input[@id='typeahead-basic'])[1]")
}
get to()
{
    return $("(//input[@id='typeahead-basic'])[2]") 
}
get from2()
{
    return $("(//input[@id='typeahead-basic'])[3]")
}
get to2()
{
    return $("(//input[@id='typeahead-basic'])[4]") 
}
get from3()
{
    return $("(//input[@id='typeahead-basic'])[5]")
}
get to3()
{
    return $("(//input[@id='typeahead-basic'])[6]") 
}
get from4()
{
    return $("(//input[@id='typeahead-basic'])[7]")
}
get to4()
{
    return $("(//input[@id='typeahead-basic'])[8]") 
}
get optionFromToSugg()
{
    return $$("//span[@class='airport-code-detail']")
}
get depart_date()
{
   // return $("[name='dpFromDate']")
   return $$("//input[@class='btn bi bi-calendar3']")
}
get cal_mon_yr_txt()
{
    //return $$("//ngb-datepicker-navigation[@class='ng-star-inserted']//div[@class='ngb-dp-month-name ng-star-inserted']")
    return $$("//div[@class='ngb-dp-month-name ng-star-inserted']")
}
get cal_curr_mon()
{
    return $$("(//div[@class='ngb-dp-month ng-star-inserted'])[1]//div[@class='ngb-dp-day ng-star-inserted']/span")
}
get cal_nxt_mon()
{
    return $$("(//div[@class='ngb-dp-month ng-star-inserted'])[2]//div[@class='ngb-dp-day ng-star-inserted']/span")   
}
get cal_nxt_mon_arw()
{
    return $("//button[@aria-label='Next month']")
}
get trp_lbl()
{
    return $$(".mat-radio-label")
}
get dropdownPaxCount()
{
    return $("#dropdownForm1")
}
get buttonPlus()
{
    //return $$(".col-2")
    return $$("//button[text()=' + ']")
}
get chd_cnt()
{
    return $("(//button[@class='col-2'])[2]")
}
get inf_cnt()
{
    return $("(//button[@class='col-2'])[3]")
}
get typeCabin()
{
    return $("#mat-select-value-1")
}
get typeCabinList()
{
    return $$("//mat-option[@role='option']//span[@class='mat-option-text']")
}
get typeConcession()
{
    return $("#mat-select-value-3")
}
get typeConcessionList()
{
    return $$("//mat-option[@role='option']//span[@class='mat-option-text']")
}
get promoCode()
{
    return $(".promo-code-text")
}
get textboxPromoCode()
{
    return $("//div[@class='promoCode ng-star-inserted']//input[@type='text']")
}
get show_flights()
{
    return $(".show-flight-btn")
}
get pageLoader()
{
    //return $("//div[@class='loading ng-star-inserted']/img")
    return $('//div[contains(@class,"contained")]')
}
get hyperLinkMulticity()
{
    return $("//div[contains(@class,'multi-city-hyperlink')]")
}
get labelFlight1()
{
    return $("//span[normalize-space()='Flight 1']")
}
get textboxDate()
{
    return $$("[name='dp']")
}
get optionMonth()
{
    return $$("//select[@aria-label='Select month']/option")
}
get optionYear()
{
    return $$("//select[@aria-label='Select year']/option")
}
get optionDate()
{
    return $$("//div[@class='btn-light ng-star-inserted']")
}
get buttonCalendarNext()
{
    return $("//button[@aria-label='Next month']")
}
get iconCalendar()
{
    return $$(".calendar-icon")
}
get textboxFrom()
{
    return $$("//div[@class='auto-complete-container']//input[@placeholder='From']")
}
get textboxTo()
{
    return $$("//div[@class='auto-complete-container']//input[@placeholder='To']")   
}
get buttonAddFlights()
{
   return $(".add-button-block")
}
get buttonShowFlights()
{
    return $(".booking-flight-btn")
}
get buttonRemoveFlights()
{
    return $(".remove-flight")
}
get labelFlightSugg()
{
    return $$(".ngb-dp-navigation-chevron")
}
}
module.exports=new Homepagepo()