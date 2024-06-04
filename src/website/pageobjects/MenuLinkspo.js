class MenuLinks {
get linkSearch() {
    return $("//a[@id='search-button']")
}
get textboxSearch() {
    return $("//input[@id='search']")
}
get iconSearch() {
    return $("//a[@class='search-icon']")
}
get textSearchResults() {
    return $("//h2[normalize-space()='Search Results']")
}
get iconAirIndia() {
    return $("//img[@alt='Air India Logo']")
}
get linkSupport() {
    return $("//a[@id='topMenu1']")
}
get dropdownContactUs() {
    return $("//a[@id='topMenu1submenu0']")
}
get textContactUs() {
    return $("//h1[normalize-space()='Contact Us']")
}
get dropdownFAQ() {
    return $("//a[@id='topMenu1submenu1']")
}
get textFAQ() {
    return $("//h1[normalize-space()='FAQ']")
}
get linkSignIn() {
    return $("//div[@id='signIn']")
}
get textSignIn() {
    return $("//h2[normalize-space()='Sign In']")
}
get linkBookManage() {
    return $("//a[normalize-space()='Book & Manage']")
}
get textBookFlightTickets() {
    return $("//h2[normalize-space()='Book Flight Tickets']")
}
get linkWhereWeFly() {
    return $("//a[normalize-space()='Where We Fly']")
}
get divFromTo() {
    return $("//div[@class='selector-inputs booking-form']")
}
get linkpreparetotravel() {
    return $("//a[normalize-space()='Prepare to Travel']")
}
get linkairindiaexperience() {
    return $("//a[normalize-space()='Air India Experience']")
}
get linkLoyalty() {
    return $("//a[normalize-space()='Loyalty']")
}
get textCreateAnAccount() {
    return $("//p[normalize-space()='Create an account']")
}


get buttonHamburgerMenu() {
    return $(`~hamburger`)
}
get buttonClose() {
    return $('//XCUIElementTypeWindow/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeButton')
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
get text404Error() {
    return $('//XCUIElementTypeStaticText[@name="404"]')
}
get buttonNavigateLeft() {
    return $(`~navigationBackChevronLeft`)
}
get buttonBack() {
    return $(`~Back`)
}
}
module.exports = new MenuLinks()