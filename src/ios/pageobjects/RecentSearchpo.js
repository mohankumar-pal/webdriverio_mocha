class RecentSearch {
    get buttonRecentSearch() {
        return $(`~bookFlightRecentSearchIcon`)
    }
    get iconRecent() {
        return $$('//XCUIElementTypeImage[contains(@name,"recent")]')
    }
    get iconRecentFirst() {
        return $('//XCUIElementTypeImage[contains(@name,"recent")]')
    }
    get buttonCloseSearch() {
        return $('//XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeButton')
    }
}
module.exports = new RecentSearch();