class Passengerdetails
{
    get title(){
        return $(".personal-info-title")
    }

    get nametittledropdown(){
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

    get firstname(){
        return $("input[formcontrolname='firstName']")
    }

    get lastname(){
        return $("input[formcontrolname='lastName']")
    }

    get dateofbirth(){
        return $("input[formcontrolname='dob']")
    }

    get gender(){
        return $$(".personal-info-gender-select-type-input")
    }

    get travelerinfo(){
        //return $("(//span[@class='mat-slide-toggle-bar'])[1]")
        return $("//label[@for='mat-slide-toggle-2-input']//span[@class='mat-slide-toggle-bar']")
    }

    get infofname(){
        return $(".apis-regulatory-per-route-first-name")
    }

    get infomname(){
        return $(".apis-regulatory-per-route-middle-name")
    }

    get infolname(){
        return $(".apis-regulatory-per-route-last-name")
    }

    get infogender(){
        return $(".apis-regulatory-per-route-gender-select-type-input")
    }

    get infogendermale(){
        return $("//span[contains(text(),'Male')]")
    }
    
    get infogenderfemale(){
        return $("//span[contains(text(),'Female')]")
    }

    get infogenderdisclosed(){
        return $("//span[contains(text(),'Undisclosed')]")
    }

    get nationality(){
        return $(".apis-regulatory-per-route-nationality")
    }

    get nationalityoption(){
        return $$(".mat-option-text")
    }

    get passportno(){
        return $(".apis-regulatory-per-route-document-number")
    }

    get passportexpirydate(){
        return $(".apis-regulatory-per-route-expiry-date")
    }

    get passportissuecountry(){
        return $(".apis-regulatory-per-route-issuance-country")
    }

    get passportcountryoption(){
        return $("span[class='mat-option-text'] span")
    }

    get ffpbutton() {
        return $$("//mat-select[@role='combobox']")
    }
    get ffpbuttonlist() {
        return $$(".mat-option")
    }

    get ffpnumber() {
        return $("//input[@formcontrolname='frequentFlyerCardId']")
    }

    get email() {
        return $$("//input[@type='email']")
    }

    get confirmemail(){
        return $$(".contact-info-confirm-email-input")
    }

    get countrycode(){
        return $$("input[aria-describedby='countryCodes']")
    }

    get countrycodeoption(){
        return $(".mat-option")
    }

    get phonenumber(){
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

    get consent(){
        return $(".mat-checkbox-inner-container")
    }

    get emergencycontact(){
        //return $("(//span[@class='mat-slide-toggle-bar'])[2]")
        return $("//label[@for='mat-slide-toggle-1-input']//span[@class='mat-slide-toggle-bar']")
    }

    get emergencycontactname(){
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

    get confirmbutton() {
        return $(".nextBtn")
    }
    get labelPaxDetailsPage()
    {
        return $("//strong[normalize-space()='Add/Modify']")
    }
    get mc_pax_tittle()
    {
        return $("[name='IDEN_TitleCode']")
    }
    get buttonFFP()
    {
        return $$("//button[@aria-pressed='false']")
    }
    get buttonGoToNext()
    {
        return $$(".btn-apim-validate")
    }
    get buttonEmergencyYes()
    {
        return $$("//button[@aria-pressed='false']")
    }
    get textInfant()
    {
        return $("//h2[normalize-space()='Infant']")
    }
    get buttonEmail()
    {
        return $("#tpl10_widget-input-apimTravellers-contactInformation-Email")
    }
    get buttonCountryCode()
    {
        return $("#tpl10_widget-input-apimTravellers-contactInformation-PhoneMobileCode")
    }
    get optionCountryCode()
    {
        return $(".autocompleteBox-item-selected")
    }
    get buttonMobileNumber()
    {
        return $("#tpl10_widget-input-apimTravellers-contactInformation-PhoneMobile")
    }
    get buttonConfirmEmail()
    {
        return $("#tpl10_widget-input-apimTravellers-contactInformation-EmailConfirm")
    }
    get mc_cd_email2()
    {
        return $("#tpl10_widget-input-apimTravellers-contactInformation-Email2")
    }
    get mc_cd_email3()
    {
        return $("#tpl10_widget-input-apimTravellers-contactInformation-Email3")
    }
    get buttonEmergencyName()
    {
        return $("#tpl10_widget-input-apimTravellers-contactInformation-SosName")
    }
    get buttonEmergencyCountryCode()
    {
        return $("#tpl10_widget-input-apimTravellers-contactInformation-SosPhoneCode")
    }
get buttonEmergencyMobileNumber()
{
    return $("#tpl10_widget-input-apimTravellers-contactInformation-SosPhone")
}
get buttonPaxDetailContinue()
{
    return $(".tripSummary-btn-continue")
}




}

module.exports= new Passengerdetails();