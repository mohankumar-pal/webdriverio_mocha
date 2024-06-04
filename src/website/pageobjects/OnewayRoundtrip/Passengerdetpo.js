class Passengerdetails
{
    get textPaxDetails() {
        return $("//span[text()='PASSENGER DETAILS']")
    }
    get textPaxTitle(){
        return $(".personal-info-title")
    }

    get dropdownNameTitle(){
        return  $$(".mat-option-text")
    }

    get Mr(){
        return $("span[aria-label='Mr']")
    }

    get Mrs(){
        return $("span[aria-label='Mrs']")
    }
    
    get Ms(){
        return $("span[aria-label='Ms']")
    }

    get Mstr(){
        return $("span[aria-label='Mstr']")
    }

    get Doctor(){
        return $("span[aria-label='Doctor']")
    }

    get Miss(){
        return $("span[aria-label='Miss']")
    }

    get textboxFirstName(){
        return $("input[formcontrolname='firstName']")
    }

    get textboxLastname(){
        return $("input[formcontrolname='lastName']")
    }

    get textboxDateofbirth(){
        return $("input[formcontrolname='dob']")
    }
    get buttonCalendar() {
        return $('//button[@aria-label="Open calendar"]')
    }
    get buttonPassportCalendar() {
        return $('(//button[@aria-label="Open calendar"])[2]')
    }
    get buttonLeftArrow() {
        return $('//button[@aria-label="Previous 24 years"]')
    }
    get buttonRightArrow() {
        return $('//button[@aria-label="Next 24 years"]')
    }
    get dropdownGender(){
        return $$(".personal-info-gender-select-type-input")
    }

    get toggleTravelerInfo(){
        return $("//span[text()='I want to fill advanced information now']")
        //return $("//label[@class='mat-slide-toggle-label']/span[@class='mat-slide-toggle-bar']")
    }

    get textBoxInfoFirstName(){
        //return $(".apis-regulatory-per-route-first-name")
        return $('//input[contains(@class,"apis-regulatory-per-route-first-name")]')
    }

    get infomname(){
        return $('//input[contains(@class,"apis-regulatory-per-route-middle-name")]')
    }

    get textboxInfoLastName(){
        return $('//input[contains(@class,"apis-regulatory-per-route-last-name")]')
    }

    get dropdownInfoGender(){
        return $(".apis-regulatory-per-route-gender-select-type-input")
    }

    get optionInfoGenderMale(){
        return $("//span[contains(text(),'Male')]")
    }
    
    get optionInfoGenderFemale(){
        return $("//span[contains(text(),'Female')]")
    }

    get optionInfoGenderDisclosed(){
        return $("//span[contains(text(),'Undisclosed')]")
    }

    get textboxNationality(){
        return $(".apis-regulatory-per-route-nationality")
    }

    get optionNationality(){
        return $(".mat-option-text")
    }

    get textboxPassportNo(){
        return $(".apis-regulatory-per-route-document-number")
    }

    get textboxPassportExpiryDate(){
        return $(".apis-regulatory-per-route-expiry-date")
    }

    get textboxPassportIssueCountry(){
        return $(".apis-regulatory-per-route-issuance-country")
    }

    get passportcountryoption(){
        return $("span[class='mat-option-text'] span")
    }

    get buttonFFP() {
        return $$("(//mat-select[@role='combobox'])[2]")
    }
    get ffpbuttonlist() {
        return $$(".mat-option")
    }

    get textboxFFPnumber() {
        return $("//input[@formcontrolname='frequentFlyerCardId']")
    }

    get textboxEmail() {
        return $$("//input[@type='email']")
    }

    get confirmemail(){
        return $$(".contact-info-confirm-email-input")
    }

    get textboxCountryCode(){
        return $$("input[aria-describedby='countryCodes']")
    }

    get countrycodeoption(){
        return $(".mat-option")
    }

    get textboxPhoneNumber(){
        return $$("input[type='tel']")
    }

    get anotheremail(){
        return $(".contact-info-add-email")
    }

    get anotherphone(){
        return $(".contact-info-add-phone")
    }

    get emergencyphone(){
        return $$(".contact-info-name-input")
    }

    get buttonConsent(){
        //return $(".mat-checkbox-inner-container")
        return $("//span[@class='mat-checkbox-inner-container']")
    }
    get buttonAndroidConsent() {
        return $("//span[text()='I Agree To - ']")
    }
    get toggleEmergencyContact(){
        //return $("//label[@for='mat-slide-toggle-2-input']//span[@class='mat-slide-toggle-bar']")
        return $("//span[contains(@class,'emergency-contact-details-toggle-button-text')]")
    }

    get textboxEmergencyContactName(){
        return $(".contact-info-name-input")
    }

    get emergencycontactcode(){
        return $("//div[@class='mat-form-field-infix ng-tns-c32-87']")
    }

    get emergencyphoneno(){
        return $("(//input[@type='tel'])[2]")
    }

    get nextbutton() {
        return $("//span[text()='Next passenger']")
    }

    get buttonConfirm() {
        return $(".nextBtn")
    }
    get textErrorMsg()
    {
        return $(".form-error-message-panel")
    }
}

module.exports= new Passengerdetails();