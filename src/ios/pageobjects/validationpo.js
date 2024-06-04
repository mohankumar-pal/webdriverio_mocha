class validationpo{
    get textPromoApplied() {
        const promomsg = '**/XCUIElementTypeStaticText[`label CONTAINS "Promo code"`]'
        return $(`-ios class chain:${promomsg}`)
    }
    get textMulticityCurrency() {
        return $('//XCUIElementTypeOther[@name="Air India - Flights"]/XCUIElementTypeOther[15]/XCUIElementTypeOther[3]/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeStaticText')
    }
    get buttonFlightSelect() {
        const fslct = '**/XCUIElementTypeButton[`label CONTAINS "From"`]'
        return $(`-ios class chain:${fslct}`)
    }
    get textConcessionApplied() {
        const capply = 'label CONTAINS "Concession applied"'
        return $(`-ios predicate string:${capply}`)
    }
    get textPromoCode()
    {
        const promo = 'label CONTAINS "promo codes"'
        return $(`-ios predicate string:${promo}`)
    }
    get textMcPromoCode()
    {
        return $('//XCUIElementTypeStaticText[@name="promotion code"]')
    }
    get textboxPromoCode()
    {
        return $('//XCUIElementTypeOther[contains(@name,"promo codes")]/XCUIElementTypeOther[2]/XCUIElementTypeOther[7]/XCUIElementTypeOther')
    }
    get buttonSubmitPromo()
    {
        return $('//XCUIElementTypeButton[@name="Apply"]')
    }
    get textConfirmation() {
        return $('//XCUIElementTypeStaticText[@name="Confirmation"]')
    }
    get textPNR() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[4]/XCUIElementTypeStaticText')
    }
}
module.exports = new validationpo()