class additionalservicespo {
    get textAdditionalService() {
        return $('//android.widget.TextView[@text="Additional Services"]')
    }
    get buttonChooseMeal()
    {
        return $('//android.widget.Button[@text="CHOOSE MEAL"]')
    }
    get textMeals()
    {
        return $(`~Meals`)
    }
    get dropdownMcMeal()
    {
        const mcm = '**/XCUIElementTypeOther[`value == "No selection"`]'
        return $$(`-ios class chain:${mcm}`)
    }
    get buttonSelectSeat() {
        return $('//android.widget.Button[@text="SELECT SEAT"]')
    }
    get textPreferredSeat()
    {
         return $(`~Preferred Seat`)
    }
    get confirmpageload() {
        //return $("//img[@src='assets/img/animation/animation-loader.jpg']")
        return $("//img[@src='assets/img/animation/animation-loader.svg']")
    }
    get textSelectSeat() {
        return $('//android.view.View/android.view.View[2]/android.view.View[2]/android.view.View/android.view.View/android.view.View')
    }
    get textMealsTitle()
    {
        return $('UiSelector().textContains("Choose Your Meal at No Extra Cost")')
    }
    get noseatmap() {
        return $("//p[@class='unavailable-content-title refx-display-3 ng-star-inserted']")
    }
    get buttonSkipSeat() {
        return $(`~SKIP SEAT SELECTION`)
    }
    get buttonSelectPax() {
        //return $$("//div[@class='mat-tab-label-content']")
        return $$('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[7]//XCUIElementTypeButton')
    }
    get buttonFreeSeat() {
        const fs = 'label CONTAINS "Free of charge"'
        return $$(`-ios predicate string:${fs}`)
    }
    get buttonFreeSeatConfirm() {
        return $('(//XCUIElementTypeButton[@name="SELECT SEAT"])[2]')
    }
    get contseat() {
        return $("//span[text()='Continue']")
    }
    get windowseatclose() {
        return $("//i[@class='refx-icon-cross']")
    }
    get buttonPreferredSeat() {
        return $$('//android.widget.Button[contains(@text,"Chargeable")]')
    }
    get buttonExtralegroomSeat() {
        return $$('//android.widget.Button[contains(@text,"Extra legroom")]')
    }
    get buttonExtrallegSeatConfirm() {
        return $('(//XCUIElementTypeButton[@name="ACKNOWLEDGE AND SELECT SEAT"])[2]')
    }
    get buttonBusinessClassSeat() {
        return $$("//button[@class='seat-button selectable-button seat-characteristic-available available free-seat ng-star-inserted']")
    }
    get buttonNxtFlight() {
        const nxt = 'label CONTAINS "NEXT FLIGHT"'
        return $(`-ios predicate string:${nxt}`)
        //return $(`~NEXT FLIGHT`)
    }
    get buttonConfirmSeat() {
        const conf = 'label CONTAINS "CONFIRM"'
        return $(`-ios predicate string:${conf}`)
        //return $(`~CONFIRM`)
    }
    get textBaggage()
    {
        return $(`~Prepaid Baggage`)
    }
    get seatrightarr()
    {
        return $("//button[@class='mat-ripple mat-tab-header-pagination mat-tab-header-pagination-after mat-elevation-z4']")
    }

    get dropdownBaggage() {
        const bagg = '**/XCUIElementTypeOther[`value == "No selection"`]'
        return $$(`-ios class chain:${bagg}`)
    }
    get baggageTitle() {
        return $("//strong[contains(text(),'Book Extra Baggage at the Best Price')]")
    }
    get baggagearrow() {
        return $$("//div[@class='service-select-travelers']//span[text()='Please select an option.']")
        //return $$("//div[@class='mat-form-field-flex ng-tns-c32-105']")
    }
    get piecebag() {
        return $$('//XCUIElementTypeButton[@name="Add one"]')
    }
    get baggageList() {
        return $$("//div[@role='listbox']//mat-option")
    }
    get selectionContinue() {
        return $("//div[@class='buttons-place']//span[@class='mat-button-wrapper']")
    }

    get changeAB() {
        return $("//custom-service-category-pres[@id='baggage-service']//button//span[text()='Change']")
    }
    get baggagearrow1() {
        //return $$("//div[@class='service-select-travelers']//span[text()='Please select an option.']")
        return $$("//mat-select-trigger//span[contains(.,'Bag up to')]")
    }
    get continuebookingbtn() {
        return $("//button[@class='mat-focus-indicator continue-button mat-stroked-button mat-button-base']")
    }
    get buttonRequestService() {
        return $(`~REQUEST SERVICE`)
    }
    get textWheelchairTitle() {
        return $('//android.view.View[contains(@text,"Avail Wheelchair Assistance on Request")]')
    }
    get dropdownWheelchair() {
        return $$('//android.widget.Spinner[contains(@text,"Select your wheelchair")]')
    }
    get optionWheelchairToRamp() {
        return $('//android.view.View[contains(@text,"Wheelchair to ramp")]')
    }
    get buttonContinue() {
        return $('//android.widget.Button[contains(@text,"CONTINUE")]')
    }
    get buttonContinueBooking() {
        return $('//android.widget.Button[contains(@text,"CONTINUE THE FLOW")]')
    }
    get textWheelchair()
    {
        return $(`~Wheelchair Assistance`)
    }
    get dropdownMcWheelchair()
    {
        const mcw = '**/XCUIElementTypeOther[`value == "No selection"`]'
        return $$(`-ios class chain:${mcw}`)
    }
    get optionMcWheelchair()
    {
        return $('//XCUIElementTypeButton[@name="Wheelchair - for ramp"]')
    }
    get buttonConfirmClose()
    {
        return $(`~Confirm and Close`)
    }
    get buttonSelectSeatAgain() {
        return $('(//XCUIElementTypeButton[@name="CONFIRM AND SELECT SEATS AGAIN"])[2]')
    }
    get dropdownSelectMeal() {
        return $$('//android.widget.Spinner[contains(@text,"Select your meal")]')
    }
    get optionNoSelection()
    {
        return $('//android.view.View[contains(@text,"No selection")]')
    }
    get checkboxBabyMeal()
    {
        return $$('//XCUIElementTypeOther[@name="Select a baby meal"]')
    }
    // get mealsslct() {
    //     return $$("//span[contains(text(),'Select your meal')]")
    // }
    get mealsoptions() {
        //return $$("//span[@class='subcategory-service-label ng-star-inserted']")
        return $$("//span[@class='mat-option-text']//span[@class='subcategory-service-label ng-star-inserted']")
    }
    get buttonCheckout() {
        return $(`~CHECKOUT`)
    }
    get paymenttitle()
    {
        return $("//div[@class='refx-display-3 header-text']")
    }
    
    

}
module.exports = new additionalservicespo();


