class oneway {

    get buttonConfirmNow() {
        return $(`~confirm_now`)
    }
    
    get welcometxt() {
        return $(`~welcomeText`)
    }
    get homemenu() {
        return $$(`//android.widget.ImageView[@resource-id='com.bets.airindia.ui:id/icon']`)
    }
    get multicity() {
        return $(`~Multi City`)
    }
    
    get dateclk() {
        return $(`//android.view.ViewGroup[@resource-id='com.bets.airindia.ui:id/date_layout']`)
    }
    get monthtitle() {
        return $$(`//android.widget.TextView[@resource-id='com.bets.airindia.ui:id/monthTitle']`)
    }
    get yeartitle() {
        return $$(`//android.widget.TextView[@resource-id='com.bets.airindia.ui:id/yearTitle']`)
    }
    get textPassenger() {
        return $('//android.widget.TextView[@text="Passenger"]')
    }
    get textAdult() {
        return $(`~Adult`)
    }
    
    get buttonConfirm() {
        return $(`~CONFIRM`)
    }

    get classval() {
        return $(`//android.widget.TextView[@resource-id='com.bets.airindia.ui:id/cabin_header']`)
    }
    get cabin()
    {
        return $('//android.widget.TextView[@text="Class"]')
    }
    get cabinselection() {
        return $$(`//android.widget.TextView[@resource-id='com.bets.airindia.ui:id/cabin_text']`)
    }
    get buttonSearch() {
        return $('//android.widget.Button')
    }
    
    get calendar()
    {
        return $(`~bookFlight_calendarSelect`)
    }
    
    get dateval()
    {
        return $$(`//XCUIElementTypeOther//XCUIElementTypeStaticText[@name='10']`)
    }
    
    get flregion()
    {
        //return $(`~region`)
        return $(`//XCUIElementTypeOther[@name="region"]/XCUIElementTypeOther[3]/XCUIElementTypeOther`)
    }
    get faretitle()
    {
        //return $(`~Select a Fare`)
        return $('//XCUIElementTypeStaticText[@name="VIEW FLIGHT DETAILS"]')
    }
    
    get cabinslct()
    {
        return $(`~KEEP SUPER VALUE ECONOMY`)
    }
    get textPaxDetails()
    {
        return $('//XCUIElementTypeStaticText[@name="Passenger Details"]')
    }
    get textYourFlight()
    {
        return $('//android.widget.TextView[@text="Your Flight"]')
    }
    get textYourflights()
    {
        return $(`//XCUIElementTypeStaticText[@name="Your Flights"]`)
    }
    get textAdditionalServices()
    {
        return $('(//XCUIElementTypeStaticText[@name="Additional Services"])[1]')
    }
    
    get textPaxTitle()
    {
        return $('//android.view.View/android.view.View[2]/android.view.View[3]/android.widget.TextView[2]')
    }
    get textPassengerDetails()
    {
        return $(`~Passenger Details`)
    }
    get cabintyp()
    {
        const ct = 'label CONTAINS "ECONOMY"'
        return $(`-ios predicate string:${ct}`)
    }
    
   
    get buttonModifySearch()
    {
        return $('//android.widget.Button[@text="MODIFY SEARCH"]')
    }
    get textSelectFareType()
    {
        return $('//XCUIElementTypeStaticText[@name="Select Fare Type"]')
    }
    get closebutton()
    {
        const closebtn = 'type == "XCUIElementTypeImage"'
        return $(`-ios predicate string:${closebtn}`)
    }
    get okay()
    {
        return $(`~Okay`)
    }
    get homebtn()
    {
        return $(`~homeTab.home`)
    }
}
module.exports = new oneway()