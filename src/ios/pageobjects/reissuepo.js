class reissue {
    get optionModifyFlight() {
        return $('//XCUIElementTypeButton[@name="Change Flights"]')
        //return $(`~Modify Flights`)
    }
    get buttonChangeFlight() {
        return $("//button[contains(@class,'modify-flights-button')]")
    }
    get textSelectTravellers() {
        return $('//XCUIElementTypeStaticText[@name="Select Travellers"]')
    }
    get checkboxSegments() {
        //return $$('//XCUIElementTypeOther[contains(@name,"flight")]/preceding-sibling::XCUIElementTypeOther/XCUIElementTypeSwitch')
        //return $$('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther/XCUIElementTypeSwitch')
        return $$('//div[@formarrayname="bounds"]//label[@class="mat-checkbox-layout"]')
    }
    get textConfirmed() {
        return $$('//XCUIElementTypeStaticText[@name="Status: Confirmed"]')
    }
    get textboxFrom() {
        return $$('//XCUIElementTypeOther[contains(@name,"From *")]')
    }
    get textboxTo() {
        return $$('//XCUIElementTypeOther[contains(@name,"To *")]')
    }
    get textboxDepartDate() {
        return $$('//XCUIElementTypeStaticText[@name="Departure date"]')
    }
    get textboxWebDepartureDate() {
        return $$("//input[contains(@id,'departureDate')]")
    }
    get textMonthYear() {
        return $('//XCUIElementTypeButton[@name="Show year picker"]')
    }
    get buttonDone() {
        return $(`~Done`)
    }
    get buttonNxtMonth() {
        return $(`~Next Month`)
    }
    get buttonSearch() {
        return $('//XCUIElementTypeButton[@name="Search"]')
    }
    get textRevisedItinerary() {
        return $('//XCUIElementTypeStaticText[@name="Your Revised Itinerary"]')
    }
    get buttonCheckout() {
        //return $('//XCUIElementTypeButton[@name="Checkout"]')
        return $("//button[contains(@class,'pay-now-button')]")
    }
    get buttonContinue() {
        return $('//XCUIElementTypeButton[@name="Continue"]')
    }
    get textManagebooking() {
        return $('//XCUIElementTypeStaticText[@name="Manage Booking"]')
    }
    get textMcPaxDetails() {
        return $(`~Fill in details`)
    }
    get textFlights() {
        return $('//XCUIElementTypeStaticText[@name="Flights"]')
    }
    get textSelectFlight() {
        return $('//XCUIElementTypeStaticText[contains(@name,"SELECT FLIGHT")]')
    }
    get textItinerary() {
        return $('(//XCUIElementTypeStaticText[@name="ITINERARY"])[2]')
    }
    get textPayBooking() {
        return $("//div[text()='Payment']")
        //return $('//XCUIElementTypeOther[contains(@name,"Pay - Booking")]')
    }
    get textPayment() {
        return $("//h2[text()='How would you like to pay?']")
        //return $('//XCUIElementTypeStaticText[@name="Select Method of Payment"]')
    }
    get textPriceToBePaid() {
        return $("//span[text()='Price to be paid']")
    }
    get textAutomaticRefund() {
        return $("//span[text()='Automatic refund:']")
    }
    get dropdownManageBooking() {
        return $(`~MANAGE BOOKING`)
    }
}
module.exports = new reissue()
