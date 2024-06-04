class flightschedulepo
{
get bookmanage()
{
    return $("//a[@id='headernav0']")
}
get flightschedule()
{
    //return $("#header0menu0link4")
    return $("//a[normalize-space()='Flight Schedule']")
}
get fstitle()
{
    return $("//h1[normalize-space()='Flight Schedule']")
}
get radiobuttonRoundTrip()
{
    return $("//label[@for='mat-radio-2-input']//span[@class='mat-radio-label-content']")
}
get radiobuttonOneway()
{
    return $("//label[@for='mat-radio-3-input']//span[@class='mat-radio-label-content']")
}
get textboxFromDate()
{
    return $("(//input[@name='dp'])[1]")
}
get textboxToDate()
{
    return $("(//input[@name='dp'])[2]")
}

get textMonth()
{
    return $$("(//select[@title='Select month']/option)")
}
get textYear()
{
    return $$("(//select[@title='Select year']/option)")
}
get buttonDate()
{
    return $$("//div[@class='ngb-dp-day']//div[@class='btn-light']")
}
get buttonNextMonArrow()
{
    return $("//button[@aria-label='Next month']")
}
get textboxFrom()
{
    return $("//input[@id='  From*']")
}
get textboxTo()
{ 
    return $("//input[@id='  To*']")
}
get optionFromToSugg()
{
    return $$(".airport-code-detail")
}
get buttonSubmit()
{
    return $("//button[normalize-space()='SUBMIT']")
}
get page_loader() {
    //return $("//div[@class='loading ng-star-inserted']/img")
    return $('//div[contains(@class,"contained")]')
}
get textFlightDetails()
{
    return $("//div[@id='outbound-TimeTableBlock']//h2")
}
get pageload()
{
    return $(".loading-content")
}
get outbound()
{
    return $("//div[@id='outbound-TimeTableBlock']")
}
get inbound()
{
    return $("//div[@id='inbound-TimeTableBlock']")
}
}
module.exports=new flightschedulepo();
