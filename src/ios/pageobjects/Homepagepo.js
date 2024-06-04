class Homepagepo {
    get buttonBookFlight() {
        return $(`~homeTab.bookFlights`)
    }
    get buttonHome() {
        return $(`~homeTab.home`)
    }
    get buttonRoundTrip() {
        return $(`~Round Trip`)
    }
    get buttonOneWay() {
        return $('~One Way')
    }
    get buttonMulticity() {
        return $(`~Multi City`)
    }
    get buttonEnableLocation() {
        return $(`~Enable Location Services`)
    }
    get buttonAllowWhileUsingApp() {
        return $('~Allow While Using App')
    }
    get buttonAllowNotification() {
        return $(`~Allow Notifications`)
    }
    get buttonAllow() {
        return $(`~Allow`)
    }
    get imageFlyingReturns() {
        //return $(`~returns`)
        return $(`~Flying Returns`)
    }
    get buttonGetStarted() {
        return $(`~GET STARTED`)
    }
    get buttonFrom() {
        return $(`~FROM`)
    }
    get buttonFSFrom() {
        return $(`~From`)
    }
    get textboxCity() {
        // const loc = 'value == "Enter City / Airport Name"'
        // return $(`-ios predicate string:${loc}`)
        //return $('//XCUIElementTypeApplication[@name="Air India QA"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTextField')
        return $('//XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTextField')
    }
    get dropdownCityValue() {
        //return $$(`//XCUIElementTypeScrollView//XCUIElementTypeStaticText`)
        return $$('//XCUIElementTypeScrollView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeStaticText')
    }
    get buttonMulticityFrom() {
        return $$('//XCUIElementTypeStaticText[@name="From"]')
    }
    get buttonMulticityTo() {
        return $$('//XCUIElementTypeStaticText[@name="To"]')
    }
    get buttonTo() {
        return $(`~To`)
    }
    get buttonCalendar() {
        return $(`~SELECT YOUR TRAVEL DATE`)
    }
    get buttonMulticityCalendar() {
        return $$('//XCUIElementTypeStaticText[@name="Date"]')
    }
    get buttonAddFlight() {
        return $(`~ADD FLIGHT`)
    }
    get buttonConfirmDate() {
        return $(`~Confirm Date`)
    }
    get textMonth() {
        return $$("//XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther//XCUIElementTypeStaticText")
    }
    get buttonPlus() {
        return $$(`//XCUIElementTypeButton`)
    }
    get buttonMinus() {
        return $$('//XCUIElementTypeButton')
    }
    get textPaxCount() {
        return $$('//XCUIElementTypeStaticText')
    }
    get buttonConfirm() {
        return $(`~Confirm`)
    }
    get buttonBusiness() {
        //return $(`~Business`)
        return $('//XCUIElementTypeScrollView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeImage[4]')
        //return $('(//XCUIElementTypeImage[@name="cabinClass_PlaceHolder"])[3]')
    }
    get buttonPremiumEconomy() {
        //return $(`~Premium Economy`)
        return $('//XCUIElementTypeScrollView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeImage[9]')
    }
    get scrollPremiumEconomy() {
        return $('//XCUIElementTypeScrollView/XCUIElementTypeOther/XCUIElementTypeImage[3]')
    }
    get buttonFirst() {
        //return $(`~First`)
        return $('//XCUIElementTypeScrollView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeImage[6]')
    }
    get buttonEconomy() {
        //return $(`~Economy`)
        return $('//XCUIElementTypeScrollView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeImage[2]')
    }
    get buttonTestdisc() {
        return $(`~TESTDISC`)
    }
    get textSelectClass() {
        return $(`~SELECT CLASS`)
    }
    get buttonCabin() {
        return $('//XCUIElementTypeStaticText[@name=" Maharaja Experience"]/following-sibling::XCUIElementTypeScrollView')
    }
    get toggleConcession() {
        const contype = '**/XCUIElementTypeSwitch[`value == "0"`][2]'
        return $(`-ios class chain:${contype}`)
    }


    get promo_code() {
        return $('XCUIElementTypeTextField')
    }
    get textboxPromoCode() {
        return $('//XCUIElementTypeTextField[@value = "Promo Code"]')
    }
    get buttonReturn() {
        return $(`~Return`)
    }

    get page_loader() {
        return $('//div[contains(@class,"contained")]')
    }
}
module.exports = new Homepagepo()