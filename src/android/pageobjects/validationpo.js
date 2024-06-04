class validationpo{
    get textPromoApplied() {
        return $('//android.widget.TextView[contains(@text,"Promo code")]')
    }
    get textMulticityCurrency() {
        return $('//XCUIElementTypeOther[@name="Air India - Flights"]/XCUIElementTypeOther[15]/XCUIElementTypeOther[3]/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeStaticText')
    }
    get buttonFlightSelect() {
        return $('//android.widget.Button[contains(@text,"Your price starts from")]')
    }
    get textConcessionApplied() {
        return $('//android.widget.TextView[contains(@text,"Concession applied")]')
    }
    get textPromoCode()
    {
        return $('//android.widget.Button[contains(@text,"promo codes")]')
    }
    get textboxPromoCode()
    {
        return $('//android.widget.EditText[@resource-id="undefinedcode"]')
    }
    get buttonSubmitPromo()
    {
        return $('//android.widget.Button[@text="APPLY"]')
    }
    get textConfirmation() {
        return $('//XCUIElementTypeStaticText[@name="Confirmation"]')
    }
    get textPNR() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[5]/XCUIElementTypeStaticText')
    }
}
module.exports = new validationpo()