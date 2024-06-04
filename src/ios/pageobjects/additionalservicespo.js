class additionalservicespo {
    get textAdditionalService() {
        return $('//XCUIElementTypeStaticText[@name="Additional Services"]')
    }
    get buttonChooseMeal() {
        return $(`~Choose Meal`)
    }
    get textMeals() {
        return $(`~Meals`)
    }
    get dropdownMcMeal() {
        const mcm = '**/XCUIElementTypeOther[`value == "No selection"`]'
        return $$(`-ios class chain:${mcm}`)
    }
    get buttonSelectSeat() {
        return $(`~Select Seat`)
    }
    get textPreferredSeat() {
        return $(`~Preferred Seat`)
    }
    get confirmpageload() {
        return $('//div[contains(@class,"contained")]')
        //return $("//img[@src='assets/img/animation/animation-loader.svg']")
    }
    get textSelectSeat() {
        return $(`~SELECT YOUR PREFERRED SEAT`)
    }
    get textTravellers() {
        //return $('//XCUIElementTypeStaticText[@text="List of travellers"]')
        return $("//h3[@class='sectionTitle' and text()='List of travellers']")
    }
    get textMealsTitle() {
        return $('//XCUIElementTypeOther[@name="Choose Your Meal at No Extra Cost"]')
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
    get radioMcPassenger() {
        //return $$('//XCUIElementTypeOther[@class="UIAView"]/XCUIElementTypeOther[@text="●"]')
        return $$('//input[@name="travellers"]')
    }
    get buttonFreeSeat() {
        const fs = 'label CONTAINS "Free of charge"'
        return $$(`-ios predicate string:${fs}`)
    }
    get buttonMcFreeSeat() {
        return $$('//div[contains(@class,"uicSquare icon-seat-available")]')
        //return $$('//XCUIElementTypeButton[contains(@text,"free of charge")]')
    }
    get buttonFreeSeatConfirm() {
        return $('(//XCUIElementTypeButton[@name="Select Seat"])[2]')
    }
    get contseat() {
        return $("//span[text()='Continue']")
    }
    get windowseatclose() {
        return $("//i[@class='refx-icon-cross']")
    }
    get buttonPreferredSeat() {
        const ps = 'label CONTAINS "Chargeable"'
        return $$(`-ios predicate string:${ps}`)
    }
    get buttonMcPreferredSeat() {
        return $$('//div[contains(@class,"uicSquare icon-seat-chargeable")]')
        //return $$('//XCUIElementTypeButton[not(contains(@text,"Leg space seat")) and contains(@text,"Seat") and not(contains(@text,"free of charge")) and not(contains(@text,"selected")) and not(contains(@text,"Scheduled"))]')
    }
    get buttonExtralegroomSeat() {
        const els = 'label CONTAINS "Exit row seat, Extra legroom seat"'
        return $$(`-ios predicate string:${els}`)
    }
    get buttonMcExtralegroomseat() {
        return $$('//tr[@class="seats-row  extra-leg-row"]//div[contains(@class,"uicSquare icon-seat-chargeable")]')
        //return $$('//XCUIElementTypeButton[contains(@text,"Leg space seat")]')
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
    get buttonMcNextSectors() {
        //return $$('//XCUIElementTypeButton[contains(@text," - ")]')
        return $$('//li[contains(@class,"dialog-tabs-flight")]/a')
    }
    get buttonMcRightArrow() {
        return $('//*[@id="btn-ctrl-horizontal-next"]')
    }
    get buttonConfirmSeat() {
        const conf = 'label CONTAINS "CONFIRM"'
        return $(`-ios predicate string:${conf}`)
        //return $(`~CONFIRM`)
    }
    get buttonMcConfirmSeat() {
        //return $('//XCUIElementTypeButton[@text="Confirm"]')
        return $("(//span[contains(@class,'plnext-widget-btn-text one-icon')])[2]")
    }
    get textBaggage() {
        return $(`~Prepaid Baggage`)
    }
    get seatrightarr() {
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
        return $(`~Request Service`)
    }
    get textWheelchairTitle() {
        return $('//XCUIElementTypeStaticText[@name="AVAIL WHEELCHAIR ASSISTANCE ON REQUEST"]')
    }
    get dropdownWheelchair() {
        const wd = 'label CONTAINS "Please select an option"'
        return $$(`-ios predicate string:${wd}`)
        //return $("(//span[text()='Select your wheelchair'])[1]")
    }
    get optionWheelchairToRamp() {
        const wtr = 'label CONTAINS "Wheelchair to ramp"'
        return $(`-ios predicate string:${wtr}`)
    }
    get buttonContinue() {
        return $(`~Continue`)
    }
    get buttonContinueCheckout() {
        return $(`~Continue`)
    }
    get buttonContinueBooking() {
        return $('(//XCUIElementTypeButton[@name="CONTINUE THE FLOW"])[2]')
    }
    get textWheelchair() {
        return $(`~Wheelchair Assistance`)
    }
    get dropdownMcWheelchair() {
        const mcw = '**/XCUIElementTypeOther[`value == "No selection"`]'
        return $$(`-ios class chain:${mcw}`)
    }
    get optionMcWheelchair() {
        return $('//XCUIElementTypeButton[@name="Wheelchair - for ramp"]')
    }
    get buttonConfirmClose() {
        return $(`~Confirm and Close`)
    }
    get buttonSelectSeatAgain() {
        return $('(//XCUIElementTypeButton[@name="CONFIRM AND SELECT SEATS AGAIN"])[2]')
    }
    get dropdownSelectMeal() {
        const ms = 'label CONTAINS "Select your meal"'
        return $$(`-ios predicate string:${ms}`)
    }
    get optionNoSelection() {
        const no = 'label CONTAINS "No selection"'
        return $(`-ios predicate string:${no}`)
    }
    get checkboxBabyMeal() {
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
    get paymenttitle() {
        return $("//div[@class='refx-display-3 header-text']")
    }



}
module.exports = new additionalservicespo();


