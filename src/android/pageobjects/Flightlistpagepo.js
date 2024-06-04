class Flightlistpagepo {
    get fsa_page_val() {
        return $("//span[normalize-space()='Flights']")
    }

    get fl_stop_txt() {
        //return $$("//div[@class='bound-stop-text ng-star-inserted']")
        return $$(".bound-stop-text-with-info-container")
    }
    get flightnumber() {
        return $$("//span[@class='refx-caption operating-airline-multiline ng-star-inserted']")
    }
    get fl_flt_det() {
        return $$(".view-flight-details-link")
    }
    get economy_cabin() {
        const eco = 'label CONTAINS "Economy"'
        return $(`-ios predicate string:${eco}`)
    }
    get business_cabin() {
        const bsns = 'label CONTAINS "Business"'
        return $(`-ios predicate string:${bsns}`)
    }
    get first_cabin() {
        return $$(".first")
    }
    get cabin_currency() {
        const curr = 'label CONTAINS "INR" and type == "XCUIElementTypeOther"'
        return $$(`-ios predicate string:${curr}`)
    }
    get premiumeco_cabin() {
        return $$(".ecoPremium")
    }
    get cabin_list() {
        return $$('//XCUIElementTypeOther[@name="region"]/XCUIElementTypeOther[3]/XCUIElementTypeOther')
    }
    get buttonSelectFlight() {
        return $('//android.widget.Button[contains(@text,"Your price starts from")]')
    }
    get buttonFlightSelect()
    {
        return $('//XCUIElementTypeButton[@name="SELECT FLIGHT"]')
    }
    get buttonContinue()
    {
        return $('//XCUIElementTypeButton[@name="Continue"]')
    }
    get buttonSelectFare() {
        //return $$('//android.widget.Button[contains(@text,"SELECT")]')
        //return $$('//*[@text="Select"]')
        return $$('android=new UiSelector().textContains("SELECT")')
    }
    get textFares()
    {
        return $$('//XCUIElementTypeStaticText[@name="Price From"]')
    }
    get scrollHorizontal()
    {
        return $('~Horizontal scroll bar, 1 page')
    }
    get fare_selection() {
        //return $$("#selectFare")
        return $$(`//XCUIElementTypeButton[@name="SELECT"]`)
    }
    get buttonUpgradeCabin() {
        const upg = 'label CONTAINS "UPGRADE"'
        return $(`-ios predicate string:${upg}`)
    }
    get buttonKeepCurrentCabin() {
        const kc = 'label CONTAINS "KEEP"'
        return $(`-ios predicate string:${kc}`)
    }
    get journey_details() {
        return $$(".mat-step-icon-state-number")
    }
    get page_loader() {
        //return $("//div[@class='loading ng-star-inserted']/img")
        return $("//img[@src='assets/img/animation/animation-loader.svg']")
    }
    get fill_pax_btn() {
        return $(".next-step-pax")
    }
    get modifysearch() {
        return $("//button[normalize-space()='Modify Search']")
    }
    get searchflt() {
        return $("//button[@id='modify-button']")
    }
    get modifyfrom() {
        return $("//input[@id='origin']")
    }
    get modifyfromsugg() {
        return $$("//span[@class='mat-option-text']")
    }
    get modifyto() {
        return $("//input[@id='destination']")
    }
    get monyeartxt() {
        return $("//span[@class='calendar-header-label refx-display-3']")
    }
    get caldate() {
        return $$("//div[@class='mat-calendar-body-cell-content mat-focus-indicator']")
    }
    get calnxtarrow() {
        return $("//span[@class='navigation-button']")
    }
    get opencal() {
        return $("//button[@aria-label='Open calendar']")
    }
    get paxicon() {
        return $(".passengers-icon")
    }
    get paxcount() {
        return $$(".refx-icon-add")
    }
    get paxminus() {
        return $$(".refx-icon-minus")
    }
    get confrmbtn() {
        return $(".confirm-button")
    }
}
module.exports = new Flightlistpagepo()