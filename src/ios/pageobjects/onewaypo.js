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
        return $(`~PASSENGERS`)
    }
    get textAdult() {
        return $(`~Adult`)
    }
    get textPassengers() {
        return $(`~Passengers`)
    }
    get buttonConfirm() {
        return $(`~CONFIRM`)
    }

    get classval() {
        return $(`//android.widget.TextView[@resource-id='com.bets.airindia.ui:id/cabin_header']`)
    }
    get cabin() {
        return $(`~CLASS`)
        //return $(`~Cabin Class`)
    }
    get cabinselection() {
        return $$(`//android.widget.TextView[@resource-id='com.bets.airindia.ui:id/cabin_text']`)
    }
    get iconCalendar() {
        return $('//XCUIElementTypeImage[@name="Calendar"]')
    }
    get buttonSearch() {
        return $(`~Search Flights`)
    }
    get buttonCloseIcon() {
        return $('//XCUIElementTypeWindow[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeImage')
        //return $('//XCUIElementTypeApplication[@name="Air India QA"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeImage')
    }
    get buttonCloseReissue() {
        return $('//XCUIElementTypeStaticText[@name="Modify Booking"]/following-sibling::XCUIElementTypeImage')
    }
    get keyConfirm() {
        return $('//XCUIElementTypeButton[@name="Confirm"]')
    }
    get keyOK() {
        return $(`~OK`)
    }
    get buttonOk() {
        return $(`~Ok`)
    }
    get buttonMyTrips() {
        return $(`~homeTab.myTrips`)
    }
    get buttonManage() {
        return $('//XCUIElementTypeStaticText[@name="View Trip"]')
        //return $('//XCUIElementTypeButton[@name="MANAGE" or @name="Manage"]')
    }
    get dropdownManageBooking() {
        return $(`~MANAGE BOOKING`)
    }
    get buttonModifyBooking() {
        return $('//XCUIElementTypeStaticText[@name="Modify Booking"]')
    }
    get textMbPassenger() {
        return $('//XCUIElementTypeStaticText[contains(@name,"Passenger")]')
    }
    get calendar() {
        return $(`~bookFlight_calendarSelect`)
    }

    get dateval() {
        return $$(`//XCUIElementTypeOther//XCUIElementTypeStaticText[@name='10']`)
    }

    get flregion() {
        //return $(`~region`)
        return $(`//XCUIElementTypeOther[@name="region"]/XCUIElementTypeOther[3]/XCUIElementTypeOther`)
    }
    get faretitle() {
        //return $(`~Select a Fare`)
        return $('//XCUIElementTypeStaticText[@name="VIEW FLIGHT DETAILS"]')
    }

    get cabinslct() {
        return $(`~KEEP SUPER VALUE ECONOMY`)
    }
    get textPaxDetails() {
        return $('//XCUIElementTypeStaticText[@name="Passenger Details"]')
    }
    get textYourFlight() {
        return $(`//XCUIElementTypeStaticText[@name="Your Flight"]`)
    }
    get textYourflights() {
        return $(`//XCUIElementTypeStaticText[@name="Your Flights"]`)
    }
    get textAdditionalServices() {
        return $('(//XCUIElementTypeStaticText[@name="Additional Services"])[1]')
    }

    get textPaxTitle() {
        return $(`//XCUIElementTypeOther[@name="Title"]`)
    }
    get textPassengerDetails() {
        return $(`~Passenger Details`)
    }
    get cabintyp() {
        const ct = 'label CONTAINS "ECONOMY"'
        return $(`-ios predicate string:${ct}`)
    }


    get buttonModifySearch() {
        return $(`~Modify Booking`)
    }
    get iconCross() {
        return $('//XCUIElementTypeStaticText[@name="Flight selection"]/following-sibling::XCUIElementTypeImage')
    }
    get textSelectFareType() {
        return $('//XCUIElementTypeStaticText[@name="Select Fare Type"]')
    }
    get closebutton() {
        const closebtn = 'type == "XCUIElementTypeImage"'
        return $(`-ios predicate string:${closebtn}`)
    }
    get okay() {
        return $(`~Okay`)
    }
    get homebtn() {
        return $(`~homeTab.home`)
    }
    get textPax() {
        return $('//XCUIElementTypeOther[contains(@name,"Passenger")]')
    }
    get textPaxNames() {
        return $$('//XCUIElementTypeOther[@name="Passengers"]/following-sibling::XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeStaticText')
    }
}
module.exports = new oneway()