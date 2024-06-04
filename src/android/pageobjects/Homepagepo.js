class Homepagepo {
    get buttonBookFlight() {
        return $('//android.widget.TextView[@text="Book Flight"]')
    }
    get buttonRoundTrip() {
        return $(`~Round Trip`)
    }
    get buttonOneWay() {
        return $('//android.widget.TextView[@text="One Way"]')
    }
    get buttonMulticity() {
        return $(`~Multi City`)
    }
    get buttonEnableLocation()
    {
        return $$('android.widget.Button')
    }
    get buttonAllowWhileUsingApp()
    {
        return $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_one_time_button"]')
    }
    get buttonAllowNotification()
    {
        return $$("android.widget.Button")
    }
    get pageForwardScroll()
    {
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')
    }
    get buttonAllow()
    {
        return $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]')
    }
    get imageFlyingReturns()
    {
        return $('//android.widget.TextView[@text="Explore The World With Flying Returns"]')
    }
    get buttonGetStarted()
    {
        return $('android.widget.Button')
    }
    get buttonFrom() {
        return $('//android.widget.ScrollView/android.view.View[1]/android.view.View[1]/android.widget.TextView[1]')
    }
    get textboxCity() {
        return $('android.widget.EditText')
    }
    get dropdownCityValue() {
        return $$(`//XCUIElementTypeScrollView//XCUIElementTypeStaticText`)
    }
    get buttonMulticityFrom()
    {
        return $$('//XCUIElementTypeStaticText[@name="From"]')
    }
    get buttonMulticityTo()
    {
        return $$('//XCUIElementTypeStaticText[@name="To"]')
    }
    get buttonTo() {
        return $('//android.widget.ScrollView/android.view.View[1]/android.view.View[3]/android.widget.TextView[1]')
    }
    get textCalendar()
    {
        return $('//android.widget.TextView[@text="Select Your Travel Date"]')
    }
    get buttonMulticityCalendar()
    {
        return $$('//XCUIElementTypeStaticText[@name="Date"]')
    }
    get buttonAddFlight()
    {
        return $(`~ADD FLIGHT`)
    }
    get buttonConfirmDate()
    {
        return $('//android.widget.Button')
    }
    get textMonth()
    {
        return $('//android.view.View/android.view.View[1]/android.view.View/android.widget.TextView[1]')
    }
    get buttonPlus() {
        return $$('android.widget.Button')
    }
    get buttonConfirm() {
        return $('//android.widget.TextView[@text="CONFIRM"]')
    }
    get buttonBusiness()
    {
        return $('//android.widget.TextView[@text="Business"]')
    }
    get buttonPremiumEconomy()
    {
        return $('//android.widget.TextView[@text="Premium Economy"]')
    }
    get buttonFirst()
    {
        return $('//android.widget.TextView[@text="First"]')
    }
    get buttonEconomy()
    {
        return $('//android.widget.TextView[@text="Economy"]')
    }
    get toggleConcession() {
        return $('//android.view.View/android.view.View[2]/android.view.View[2]')
    }
    
    
    get promo_code() {
        return $('XCUIElementTypeTextField')
    }
    get textboxPromoCode() {
        return $('//android.widget.EditText')
    }
    get buttonReturn()
    {
        return $(`~Return`)
    }
    
    get page_loader() {
        return $("//img[@src='assets/img/animation/animation-loader.svg']")
    }
    get bookFlightPopup()
    {
        return $$("android.view.View")
    }
}
module.exports = new Homepagepo()