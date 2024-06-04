class paymentpo{
    get textPaymentTitle() {
        return $("//div[@class='refx-display-3 header-text']")
    }
    get creditcardtype()
    {
        return $("//span[text()='Select your credit card type']")
    }
    get creditcardoptions()
    {
        return $$("//span[@class='option-label']")
    }
    get creditcardnumber()
    {
        return $("//input[@formcontrolname='cardNumber']")
    }
    get creditcardname()
    {
        return $("//input[@formcontrolname='holderName']")
    }
    get paynow()
    {
        return $(".pay-now-button")
    }
    get buttonCardMode() {
       return $("//span[contains(text(),'Card Payment')]")
    }
    get iframeCardNumber()
    {
        return $("//iframe[@src='https://paypages.test.payment.amadeus.com/1ASIATP/ARIAPP/static/checkout/2.3.0/form-fields/pan.html']")
    }
    get textboxCardNumber() {
        return $("//input[@placeholder='Card Number*']")
    }
    get textboxCardExpiryMonth() {
        return $("//input[@placeholder='MM']")
    }
    get textboxCardExpiryYear() {
        return $("//input[@placeholder='YY']")
    }
    get iframeCVV()
    {
        return $("//iframe[@src='https://paypages.test.payment.amadeus.com/1ASIATP/ARIAPP/static/checkout/2.3.0/form-fields/cvv.html']")
    }
    get textboxSecurityCodeCVV() {
        return $("//input[@placeholder='CVV']")
    }
    get textboxCardName()
    {
        return $("(//div[@class='row ng-star-inserted'])[1]")
    }
    get textboxCardholderName() {
        //return $("//input[@formcontrolname='holderName']")
        return $("//input[@placeholder='Name On The Card*']")
    }
    get textboxCardEmail()
    {
        return $("//input[@type='email']")
    }
    get textboxHouseNumber() {
        return $("//input[@formcontrolname='line1']")
    }
    get textboxApartmentNumber() {
        return $("//input[@formcontrolname='line2']")
    }
    get textboxPincode() {
        return $("//input[@formcontrolname='zipCode']")
    }
    get textboxCity() {
        return $("//input[@formcontrolname='city']")
    }
    get textboxCountry() {
        return $("//input[@formcontrolname='countryCode']")
    }
    get optionCountrySelected() {
        return $("//span[@class='mat-option-text']")
    }
    get dropdownState() {
        //return $("//span[contains(text(),'State or province')]")
        return $("//span[contains(@class,'mat-select-placeholder')]")
    }
    get optionState() {
        return $$("//mat-option[@role='option']//span[@class='mat-option-text']//span")
    }
    get checkboxTermsCondition() {
        return $("//span[@class='mat-checkbox-inner-container']")
    }
    get buttonPay() {
        return $("//button[@id='payment-button']")
    }
    get confirmpageload() {
        //return $("//img[@src='assets/img/animation/animation-loader.jpg']")
        return $("//img[@src='assets/img/animation/animation-loader.svg']")
    }
    get radiobuttonNetbanking()
    {
        return $("//img[@alt='Online Banking']")
    }
    get checkboxTermsConditions()
    {
        //return $("//mat-label[@class='terms-and-conditions-label']")
        return $("//span[@class='mat-checkbox-inner-container']")
    }
    get buttonOtherPay()
    {
        return $("//div[@class='buttons-place ng-star-inserted']//button[@id='payment-button']")
    }
    get textInternetBanking() {
        return $("#tab5")
    }
    get dropdownBank() {
        return $("#txtBankIDBK")
    }
    get optionBank() {
        return $("//select[@id='txtBankIDBK']//option[contains(text(),'Test Bank')]")
    }
    get buttonMakePayment() {
        return $("//button[@id='proceedForm']")
    }
    get textBankStatus() {
        //return $(".bs-example")
        return $("//select[@id='BankStatus']")
    }
    get dropdownStatus() {
        return $("//select[@id='BankStatus']")
    }
    get optionStatus() {
        return $$("//select[@id='BankStatus']/option")
    }
    get buttonPaySubmit() {
        return $("//button[@name='formSubmit']")
    }
    get upi()
    {
        return $("//img[@alt='UnionPay']")
    }
    get wallet()
    {
        return $("//img[@alt='Wallets']")
    }
    get rupay()
    {
        return $("//img[@alt='global.methods-of-payment.rupay']")
    }
    get rupaycardnumber()
    {
        return $("#cnumber")
    }
    get rupayexpmonth()
    {
        return $("#expmon")
    }
    get rupayexpyear()
    {
        return $("#expyr")
    }
    get rupaycvv()
    {
        return $("#cvv2")
    }
    get rupaycardholdername()
    {
        return $("#cname2")
    }
    get buttonOtherPayments()
    {
        return $("//span[contains(text(),'Other Payment Methods')]")
    }
    get emi()
    {
        return $("//img[@alt='iDEAL']")
    }
    get emioption()
    {
        return $("//select[@id='txtBankIDEMI']")
    }
    get optionAxisCard()
    {
        return $("//select[@id='txtBankIDEMI']//option[text()='Axis Credit Card']")
    }
    get radiobuttonemi()
    {
        return $("//label[@for='3EMI']")
    }
    get promocode()
    {
        return $("//span[@class='expansion-panel-title refx-display-5']")
    }
    get enterpromocode()
    {
        return $("//input[@placeholder='Enter Promo Code']")
    }
    get paymenttitle()
    {
        return $("//div[@class='refx-display-3 header-text']")
    }
    get submitpromo()
    {
        return $("//button[@type='submit']")
    }
    get otherpayments()
    {
        return $("//span[contains(text(),'Other Payment Methods')]")
    }
    get PNR() {
        return $(".recloc-id")
    }
    get travelername()
    {
        return $("//div[@class='passenger-recap-pres']//*[@class='name']")
    }
}
module.exports= new paymentpo();