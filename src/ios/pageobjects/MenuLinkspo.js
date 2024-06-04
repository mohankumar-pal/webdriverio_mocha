class MenuLinks {
    get buttonHamburgerMenu() {
        return $(`~hamburger`)
    }
    get scrollviewExploreIndia() {
        return $('//XCUIElementTypeScrollView/XCUIElementTypeOther/XCUIElementTypeScrollView')
    }
    get textPopularDestinations() {
        return $('//XCUIElementTypeStaticText[@name="POPULAR DESTINATIONS"]')
    }
    get textViewAll() {
        return $('//XCUIElementTypeStaticText[@name="POPULAR DESTINATIONS"]/following-sibling::XCUIElementTypeScrollView/XCUIElementTypeOther/XCUIElementTypeStaticText[@name="View All"]')
    }
    get textOneway() {
        return $(`~One Way`)
    }
    get buttonAddTrip() {
        return $(`~ADD TRIP`)
    }
    get textActiveTrips() {
        return $(`~Active Trips`)
    }
    get textPastTrips() {
        return $(`~Past Trips`)
    }
    get textNoPastTrips() {
        //return $(`~No Past Trips`)
        return $(`~myTripsNoListImage`)
    }
    get textMySplash() {
        return $('//XCUIElementTypeStaticText[@name="POPULAR DESTINATIONS"]/following-sibling::XCUIElementTypeScrollView/XCUIElementTypeOther/XCUIElementTypeStaticText[@name="My Splash"]')
    }
    get textboxReferenceNumber() {
        return $('//XCUIElementTypeStaticText[@name="Booking Reference / Ticket Number"]')
    }
    get textboxLastname() {
        return $('//XCUIElementTypeStaticText[@name="Last Name"]')
    }
    get keyReturn() {
        return $(`~Return`)
    }
    get buttonCheckin() {
        return $('//XCUIElementTypeButton[@name="CHECK-IN"]')
    }
    get popupError() {
        //return $('//XCUIElementTypeStaticText[@name="Error"]')
        return $('//XCUIElementTypeStaticText[contains(@name,"Error")]')
    }
    get textLoyaltyDataNotFound() {
        return $('//XCUIElementTypeStaticText[@name="Data not found."]')
    }
    get textLoyaltySignIn() {
        return $('//XCUIElementTypeStaticText[@name="SIGN IN"]')
    }
    get textboxLoyaltyEmail() {
        return $('//XCUIElementTypeTextField[@name="Email Address"]')
    }
    get textboxLoyaltyPassword() {
        return $('//XCUIElementTypeSecureTextField[@name="Password"]')
    }
    get buttonLoyaltySignIn() {
        return $('//XCUIElementTypeButton[@name="Sign In"]')
    }
    get buttonCancel() {
        return $(`~Cancel`)
    }
    get textLoyalty() {
        return $('//XCUIElementTypeStaticText[@name="Loyalty"]')
    }
    get textHome() {
        return $(`~Home`)
    }
    get buttonClose() {
        return $('//XCUIElementTypeButton[@name="closeIcon"]')
        //return $('//XCUIElementTypeWindow/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeButton')
    }
    get textAboutFlyingReturns() {
        return $('(//XCUIElementTypeStaticText[@name="About Flying Returns"])[2]')
    }
    get textSignin() {
        return $('//XCUIElementTypeOther[@name="Sign in"]')
    }
    get textboxEmail() {
        return $('//XCUIElementTypeTextField[@name="YourID@airindia.com"]')
    }
    get buttonNext() {
        return $('(//XCUIElementTypeButton[@name="Next"])[1]')
    }
    get textboxPassword() {
        return $('//XCUIElementTypeSecureTextField[contains(@name,"Enter the password")]')
    }
    get buttonSignin() {
        return $('//XCUIElementTypeButton[@name="Sign in"]')
    }
    get textStaySignedIn() {
        return $('//XCUIElementTypeStaticText[@name="Stay signed in?"]')
    }
    get buttonYes() {
        return $('//XCUIElementTypeButton[@name="Yes"]')
    }
    get text403Error() {
        return $('//XCUIElementTypeStaticText[@name="Error 403 Forbidden"]')
    }
    get text404Error() {
        return $('//XCUIElementTypeStaticText[@name="404"]')
    }
    get buttonNavigateLeft() {
        return $(`~navigationBackChevronLeft`)
    }
    get buttonBack() {
        return $(`~Back`)
    }
    get buttonLeftArrow() {
        return $('//XCUIElementTypeButton')
    }
    get buttonRoute() {
        return $(`~Route`)
    }
    get buttonCalendar() {
        return $('//XCUIElementTypeStaticText[@name="Departure Date"]/following-sibling::XCUIElementTypeButton[1]')
    }
    get buttonFSCalendar() {
        return $('//XCUIElementTypeStaticText[@name="Select Date"]/following-sibling::XCUIElementTypeButton[1]')
    }
    get buttonGetFlightStatus() {
        return $(`~Get Flight Status`)
    }
    get textboxFlightNumber() {
        return $('(//XCUIElementTypeStaticText[@name="Flight Number"])[2]/following-sibling::XCUIElementTypeTextField')
    }
    get textFlightStatus() {
        return $(`~FLIGHT STATUS`)
    }
    get imageNoFlightStatus() {
        return $('//XCUIElementTypeImage[@name="myTripsNoListImage"]')
    }
    get buttonRecent() {
        return $(`~Recent`)
    }
}
module.exports = new MenuLinks()