class flightstatuspo
{
get iconFlightStatus()
{
    return $(".booking-flight-icon")
}
get textboxFlightNumber()
{
    return $("//input[@id='flight-number-ip-id']")
}
get dropdownDate() {
    return $('//mat-select[@placeholder="Select"]')
}

get selectdate()
{
    return $("//input[@id='datepickerlone']")
}
get textboxFromDate()
{
    return $("//input[@name='dp']")
}
get textMonth()
{
    return $$("(//select[@title='Select month']/option)")
}
get textYear()
{
    return $("(//select[@title='Select year']/option)[1]")
}
get buttonDate()
{
    return $$("//div[@class='ngb-dp-day ng-star-inserted']//div[@class='btn-light ng-star-inserted']")
}
get buttonNextMonArrow()
{
    return $("//button[@aria-label='Next month']")
}
get buttonShowFlight()
{
    return $("//button[text()=' SHOW FLIGHTS ']")
}
get iconAirIndia() {
    return $("//img[@alt='Air India Logo']")
}
get iconAirIndia2() {
    return $("(//img[@alt='Air India Logo'])[2]")
}
get page_loader() {
    //return $("//div[@class='loading ng-star-inserted']/img")
    return $("//img[@src='assets/img/animation/animation-loader.svg']")
}
get textTitle()
{
    return $(".title-container")
}
get divDeparture() {
    return $('//div[@class="departure"]')
}
get divDeparture2() {
    return $('(//div[@class="departure"])[2]')
}
get buttonFlightStatus() {
    return $$("//button[contains(@class,'accordion-button')]/ul")
}
get textTotalDuration()
{
    return $("//div[@class='total-duration-col']")
}
get confirmpageload() {
    return $('//div[contains(@class,"contained")]')
}
get imagePageLoading()
{
    return $(".loading-content")
}
}
module.exports=new flightstatuspo();
