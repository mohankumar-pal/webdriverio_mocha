class checkinpo {
    get buttonCheckin() {
        return $("//span[contains(text(),'Check-')]")
    }
    get textboxPNR() {
        return $("//input[@id='checkin-pnr-ip-id']")
    }
    get textboxLastName() {
        return $("//input[@id='lastname-ip-id']")
    }
    get buttonSubmit() {
        return $("//button[text()=' CHECK IN ']")
    }
    get textCheckinTitle()
    {
        return $(".title-container")
    }
    get buttonStartCheckin() {
        return $$("//span[contains(text(),'Start Check-in')]")
    }
    get textboxEmailId() {
        return $$("//input[@type='email']")
    }
    get countrycode()
    {
        return $$(".phone-number-country-code-input")
    }
    get textboxCountryCode() {
        return $$("//input[@placeholder='Country calling code']")
    }
    get optionCountryCode()
    {
        return $("//span[@class='mat-option-text']")
    }
    get textboxMobileNumber() {
        return $$("//input[@placeholder='Phone number']")
    }
    get pageScroll() {
        return $(".refx-debug-link.technical-details-link")
    }
    get ExitCheckin() {
        return $("//span[@class='mat-button-wrapper']//span[contains(text(),'Exit Check-in')] ")
    }
    get buttonContinue() {
        return $("//span[@class='mat-button-wrapper']//span[contains(text(),'Continue')]")
    }
    get buttonAgreeContinue() {
        return $("//div[@class='footer-wrapper']//span[contains(text(),'I agree and continue')]")
    }
    get confirmpageload()
    {
        return $('//div[contains(@class,"contained")]')
    }
    get buttonoMale()
    {
        return $("//span[text()='Male']")
    }
    get buttonFemale()
    {
        return $("//span[text()='Female']")
    }
    get buttonCalendar()
    {
        return $("//button[@aria-label='Open calendar']")
    }
    get buttonSelectDate()
    {
        return $("//button[contains(@class,'mat-calendar-body-active')]")
    }
    get adtdob()
    {
        return $("//input[@formcontrolname='birthDate']")
    }
    get buttonSavePersDetails()
    {
        return $("//span[text()='Save personal details']")
    }
    get buttonConfirmSeat() {
        return $(".next-btn")
    }
    get buttonNxtFlight()
    {
        return $("//span[text()='Confirm and go to next flight']")
    }
    get buttonSelectedSeats()
    {
        return $$("//span[contains(@class,'cdk-visually-hidden selected-message')]")
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
    get seatrightarr()
    {
        return $("//button[@class='mat-ripple mat-tab-header-pagination mat-tab-header-pagination-after mat-elevation-z4']")
    }
    get buttonPreferredSeat() {
        return $$("//button[@class='seat-button selectable-button seat-characteristic-chargeable available chargeable-seat ng-star-inserted']")
    }
    get buttonExtralegroomSeat() {
        return $$("//tr[@class='extra-leg-row ng-star-inserted']//button")
    }
    get buttonExtralegSeatConfirm() {
        return $("//span[text()='Acknowledge and select seat']")
    }
    get businessclassseat() {
        return $$("//button[@class='seat-button selectable-button seat-characteristic-available available free-seat ng-star-inserted']")
    }
    get textNoSeatMap() {
        return $("//p[@class='unavailable-content-title refx-display-3 ng-star-inserted']")
    }
    get buttonSkipSeat() {
        return $("//span[contains(text(),'Skip seat selection')]")
    }
    get seatpax()
    {
        return $$(".traveler-name")
    }
    get nxtflight() {
        //return $("//button[@class='mat-focus-indicator next-btn mat-flat-button mat-button-base']")
        return $("//span[contains(text(),'Next flight')]")
    }
    get textPaxTitle()
    {
        return $(".main-title")
    }
    get textboxNationality()
    {
        return $("//input[@placeholder='Nationality']")
    }
    get optionNationality()
    {
        return $("//span[@class='mat-option-text']//span")
    }
    get buttonSaveNationality()
    {
        return $("//span[text()='Save nationality information']")
    }
    get textboxCountry()
    {
        return $("//input[@placeholder='Country of residence']")
    }
    get buttonSaveCountry()
    {
        return $("//span[text()='Save country information']")
    }
    get dropdownDocType()
    {
        return $(".mat-select-value")
    }
    get optionDocType()
    {
        return $("(//span[@class='mat-option-text'])")
    }
    get textboxDocNumber()
    {
        return $("//input[@placeholder='Document number']")
    }
    get documentcountry()
    {
        return $("//input[@formcontrolname='documentCountryCode']")
    }
    get textboxDocExpDate()
    {
        return $("//input[@formcontrolname='documentExpiryDate']")
    }
    get textboxDocIssuingCountry()
    {
        return $("//input[@formcontrolname='documentIssuanceCountryCode']")
    }
    get buttonSaveTravelDoc()
    {
        return $("//span[text()='Save travel document']")
    }
    get textboxHouseNumber()
    {
        return $("//input[@formcontrolname='line1']")
    }
    get textboxPostcode()
    {
        return $("//input[@formcontrolname='zipCode']")
    }
    get textboxCity() {
        return $("//input[@formcontrolname='city']")
    }
    get city()
    {
        return $("//input[@formcontrolname='city']")
    }
    get dropdownState()
    {
        return $("//span[text()='Select a state']")
    }
    get optionState() {
        return $("//mat-option[@role='option']//span[@class='mat-option-text']//span")
    }
    get textboxAddressCountry()
    {
        return $("//input[@formcontrolname='countryCode']")
    }
    get buttonSaveAddress()
    {
        return $("//span[text()='Save destination address']")
    }
    get textboxVisaNumber()
    {
        return $("//input[@data-placeholder='Visa number']")
    }
    get textboxVisaCountry()
    {
        return $("//input[@data-placeholder='Country where the visa applies']")
    }
    get textboxVisaIssueDate()
    {
        return $("//input[contains(@id,'RegulatoryDetailsTravelDocumentdocumentIssueDate')]")
    }
    get textboxVisaExpDate()
    {
        return $("(//input[contains(@id,'RegulatoryDetailsTravelDocumentdocumentExpiryDate')])[2]")
    }
    get textboxVisaCountry2()
    {
        return $("//input[@placeholder='Visa issuing country']")
    }
    get textboxVisaIssuancePlace()
    {
        return $("//input[@placeholder='Visa issuance place']")
    }
    get buttonSaveVisa()
    {
        return $("//span[text()='Save visa information']")
    }
    get dropdownPurposeOfVisit()
    {
        return $("//span[text()='Choose your purpose of visit']")
    }
    get optionPurposeOfVisit()
    {
        return $$("//span[@class='mat-option-text']")
    }
    get buttonSaveAddInfo()
    {
        return $("//span[text()='Save additional information']")
    }
    get buttonNextPassenger()
    {
        return $("//span[text()='Continue to next passenger']")
    }
    get buttonDetailsContinue()
    {
        return $("//span[text()='Continue']")
    }
    get buttonViewBoardingPass() {
        return $("//button//span[@class='mat-button-wrapper']//span[contains(text(),'View Boarding Passes')]")
    }
    get buttonDownload() {
        return $$("//span[text()='Download / Print']")
    }
    get buttonSendBoardingPass() {
        return $("//span[@class='mat-button-wrapper']//span[contains(text(),'Send boarding passes')]")
    }
    get textboxSendAsPdf() {
        return $("//span[@class='mat-checkbox-label']//span[contains(text(),'Send by email in PDF format')]")
    }
    get textboxSendPDFEmail() {
        return $("//input[@aria-required='true']")
    }
    get buttonSendPassbook() {
        return $("//span[@class='mat-checkbox-label']//span[contains(text(),'Send by email in Passbook pass format')]")
    }
    get buttonSendToAllPax() {
        return $("//span[contains(text(),'Send all passes to the same email address')]")
    }
    get textboxEmail()
    {
        return $$("//input[@type='passbookEmail']")
    }
    get buttonSendBySMS() {
        return $("//span[@class='mat-checkbox-label']//span[contains(text(),'Send by SMS')]")
    }
    get textboxPhoneNumber() {
        return $("//input[@placeholder='Enter phone number']")
    }
    get buttonIssueBoardingPass() {
        return $("//span[@class='mat-button-wrapper']//span[contains(text(),'Send boarding passes')]")
    }
    get managebooking()
    {
        return $("//h2[text()='Manage Your Booking']")
    }
    get buttonUpdateContact()
    {
        return $("//span[text()='Update Contact Details']")
    }
    get textPaxContact()
    {
        return $$("//h2[contains(@class,'contact-details-title')]")
    }
    get buttonContinueNext()
    {
        return $("#continue")
    }
    get frequentFlyer() {
        return $(".ff-number")
    }
    get ffpProgram() {
        return $$("//div[@role='listbox']//mat-option")
    }
    get ffpNumber() {
        return $("//input[@formcontrolname='frequentFlyerCardId']")
    }
    get ffpConfirm() {
        return $("//span[@class='mat-button-wrapper']//span[contains(text(),'Confirm')]")
    }
    get rightArrowClick(){
        return $("//i[@class='refx-icon-chevron-right']")
    }
    get backtohome(){
        return $("//span[text()='Back to home']")
    }
    get textHowCanWeReachYou() {
        return $(".title-container")
    }
}

module.exports = new checkinpo()