class Homepagepo {
    get buttonGoToHome() {
        return $('.incident-top-button')
    }
    get rowSelectEmail() {
        return $('//div[@class="table-row"]')
    }
    get buttonSearchFlights() {
        //return $("//span[normalize-space()='Flights']")
        return $("//button[contains(@class,'showFlightBtn')]")
    }
    get buttonAndroidAllow() {
        return $("//android.widget.Button[@resource-id='com.android.chrome:id/positive_button']")
    }
    get buttonAndroidAcceptAll() {
        return $("//android.widget.Button[@text='Accept all']")
    }
    get textboxFrom() {
        return $("//input[@id='From']")
    }
    get textboxEnterFrom() {
        return $("(//input[@id='From'])[2]")
    }
    get textboxAndroidFrom() {
        return $("//input[@placeholder='From']")
    }
    get textboxAndroidTo() {
        return $("//input[@placeholder='To']")
    }
    get to() {
        return $("//input[@id='To']")
    }
    get textboxEnterTo() {
        return $("(//input[@id='To'])[2]")
    }
    get optionFromToSugg() {
        return $$("//span[@class='airport-code-detail']")
    }
    get textboxSigninEmail() {
        return $('//input[contains(@class,"text-box")]')
    }
    get textboxSigninPassword() {
        return $('//input[@type="password"]')
    }
    get buttonSigninSubmit() {
        return $('//input[@type="submit"]')
    }
    get buttonSigninYes() {
        return $('//input[@value="Yes"]')
    }
    get buttonSigninNo() {
        return $('//input[@value="No"]')
    }
    get buttonClose() {
        return $('//span[@id="close-icon"]')
    }
    get buttonGiftPopup() {
        return $('//div[@id="gif-popup"]')
    }
    get buttonCalender() {
        return $$("//input[@class='btn bi bi-calendar3']")
    }
    get buttonAndroidCalendar() {
        return $("//input[contains(@id,'mat-input-4')]")
    }
    get textMonthYear() {
        return $$("//div[@class='ngb-dp-month-name ng-star-inserted']")
    }
    get buttonDate() {
        return $$("(//div[@class='ngb-dp-month-name ng-star-inserted'])[3]/following-sibling::ngb-datepicker-month//span")
        //return $$("(//div[@class='ngb-dp-month ng-star-inserted'])[1]//div[@class='ngb-dp-day ng-star-inserted']/span")
    }
    get cal_nxt_mon() {
        return $$("(//div[@class='ngb-dp-month ng-star-inserted'])[2]//div[@class='ngb-dp-day ng-star-inserted']/span")
    }
    get buttonNextMonthArrow() {
        return $("//button[@aria-label='Next month']")
    }
    get radiobtnTripType() {
        return $$(".mat-radio-label")
    }
    get dropdownTripType() {
        return $(".oneRoundMultiDesktop")
    }
    get optionOneway() {
        return $("//mat-option/span[text()='One Way']")
    }
    get dropdownPaxCount() {
        return $("#dropdownForm1")
        //return $("(//div[contains(@id,'dropdownForm1')])[2]")
    }
    get dropdownAndroidPax() {
        return $("//button[contains(@class,'btn-lg')]")
    }
    get buttonAndroidConfirmPax() {
        return $("//span[text()=' Confirm ']")
    }
    get buttonAdd() {
        return $$("//button[text()=' + ']")
    }
    get chd_cnt() {
        return $("(//button[@class='col-2'])[2]")
    }
    get inf_cnt() {
        return $("(//button[@class='col-2'])[3]")
    }
    get dropdownClassType() {
        return $("#class-type")
    }
    get dropdownMobileClassType() {
        return $("(//button[contains(@class,'btn-lg')])[2]")
    }
    get optionClassTypeList() {
        return $$("//mat-option[@role='option']//span[@class='mat-option-text']")
    }
    get dropdownConcessionType() {
        return $("#concession-type")
        //return $('//button[contains(@class,"concession-none")]')
    }
    get optionConcessionTypeList() {
        return $$("//mat-option[@role='option']//span[@class='mat-option-text']")
    }
    get concession_applied() {
        return $(".applied")
    }
    get concession_error() {
        return $(".mat-error")
    }
    get buttonPromoCode() {
        return $("//button[contains(@class,'promocodeBtn')]")
    }
    get textboxPromoCode() {
        return $("//input[@id='promoCode']")
    }
    get promomsg() {
        return $(".message-title")
    }
    get buttonShowFlights() {
        return $("//button[contains(@class,'showFlightBtn')]")
    }
    get page_loader() {
        //return $("//div[@class='loading ng-star-inserted']/img")
        //return $("//img[@src='assets/img/animation/animation-loader.svg']")
        return $('//div[contains(@class,"contained")]')
    }
}
module.exports = new Homepagepo()