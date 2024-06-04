class additionalservicespo {
    get textJourneyDetails() {
        return $("//span[normalize-space()='Journey Details']")
    }
    get textAddService() {
        return $("//h2[contains(.,'Additional Services')]")
    }
    get meals() {
        return $("//span[contains(text(),'Choose Meal')]")
    }
    get buttonSelectSeat() {
        return $("//div[@class='category seat ng-star-inserted']//button")
    }
    get confirmpageload() {
        //return $("//img[@src='assets/img/animation/animation-loader.svg']")
        return $('//div[contains(@class,"contained")]')
    }
    get textAdditionServiceval1() {
        return $(".refx-title")
    }
    get textNoSeatMap() {
        return $("//p[@class='unavailable-content-title refx-display-3 ng-star-inserted']")
    }
    get buttonSkipSeat() {
        return $("//span[contains(text(),'Skip seat selection')]")
    }
    get seatpax() {
        //return $$("//div[@class='mat-tab-label-content']")
        return $$(".traveler-name")
    }
    get buttonFreeSeat() {
        return $$("//button[@class='seat-button selectable-button seat-characteristic-available available free-seat ng-star-inserted']")
    }
    get buttonFreeSeatConfirm() {
        return $("//span[text()='Select seat']")
    }
    get buttonContinueSeat() {
        return $("//span[text()='Continue']")
    }
    get windowseatclose() {
        return $("//i[@class='refx-icon-cross']")
    }
    get buttonPreferredSeat() {
        return $$("//button[@class='seat-button selectable-button seat-characteristic-chargeable available chargeable-seat ng-star-inserted']")
    }
    get buttonExtralegroomSeat() {
        return $$("//tr[@class='extra-leg-row ng-star-inserted']//button")
    }
    get buttonExtrallegroomconfirm() {
        return $("//span[text()='Acknowledge and select seat']")
    }
    get page_loader() {
        return $('//div[contains(@class,"contained")]')
        //return $("//img[@src='assets/img/animation/animation-loader.svg']")
    }
    get businessclassseat() {
        return $$("//button[@class='seat-button selectable-button seat-characteristic-available available free-seat ng-star-inserted']")
    }
    get buttonNxetFlight() {
        return $("//span[contains(text(),'Next flight')]")
    }
    get buttonConfirmSeat() {
        return $("//span[contains(text(),'Confirm')]")
    }
    get buttonSeatRightArrow() {
        return $("//button[@class='mat-ripple mat-tab-header-pagination mat-tab-header-pagination-after mat-elevation-z4']")
    }

    get buttonAddExtraBaggage() {
        return $("//div[@class='category-recap-footer ng-star-inserted']//span[text()='Add extra bags']")
    }
    get textBaggageTitle() {
        return $("//strong[contains(text(),'Book Extra Baggage at the Best Price')]")
    }
    get dropdownBaggageArrow() {
        return $$("//div[@class='service-select-travelers']//span[text()='Please select an option.']")
    }
    get textPiecebag() {
        return $$("//i[@class='refx-icon-add']")
    }
    get optionBaggageList() {
        return $$("//div[@role='listbox']//mat-option")
    }
    get buttonSelectionContinue() {
        return $("//div[@class='buttons-place']//span[@class='mat-button-wrapper']")
    }

    get buttonChangeBaggage() {
        return $("//custom-service-category-pres[@id='baggage-service']//button//span[text()='Change']")
    }
    get dropdownBaggageArrow1() {
        return $$("//mat-select-trigger//span[contains(.,'Bag up to')]")
    }
    get buttonContinueBooking() {
        return $("//button[@class='mat-focus-indicator continue-button mat-stroked-button mat-button-base']")
    }
    get buttonRequestService() {
        return $("//span[@class='mat-button-wrapper']//span[contains(text(),'Request Service')]")
    }
    get textWhcrTitle() {
        return $("//div[@class='ng-star-inserted']//h2")
    }
    get dropdownWheelchair() {
        return $$("//span[contains(.,'Please select an option')]")
    }
    get optionWhcrToRamp() {
        return $("//span[@class='mat-option-text']//span[contains(text(),'Wheelchair to ramp')]")
    }
    get buttonWhcrContinue() {
        return $("//span[@class='mat-button-wrapper']//span[contains(text(),'Continue')]")
    }
    get buttonWhcrContBooking() {
        return $("//span[text()='Continue the flow']")
    }
    get buttonSelectSeatAgain() {
        return $("//span[text()='Confirm and select seats again']")
    }
    get buttonMealsSelect() {
        return $$("//span[contains(text(),'Please select an option.')]")
    }
    get optionMeals() {
        return $$("//span[@class='mat-option-text']//span[@class='subcategory-service-label ng-star-inserted']")
    }
    get buttonCheckout() {
        return $(".next-step-button")
    }
    get paymenttitle() {
        return $("//div[@class='refx-display-3 header-text']")
    }
    get textConfirmationVal() {
        return $("//h1[text()='Booking Confirmation']")
    }


}
module.exports = new additionalservicespo();


