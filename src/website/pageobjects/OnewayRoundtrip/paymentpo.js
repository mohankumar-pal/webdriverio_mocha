class paymentpo {
    get textPaymentTitle() {
        return $("//div[contains(@class,'payment-checkout')]")
    }
    get creditcardtype() {
        //return $("//div[@class='mat-form-field-infix ng-tns-c32-66']")
        return $("//span[text()='Select your credit card type']")
    }
    get creditcardoptions() {
        return $$("//span[@class='option-label']")
    }
    get creditcardnumber() {
        return $("//input[@formcontrolname='cardNumber']")
    }
    get creditcardname() {
        return $("//input[@formcontrolname='holderName']")
    }
    get paynow() {
        return $(".pay-now-button")
    }
    get textCardPaymentMode() {
        return $("//span[contains(text(),'Card Payment')]")
    }
    get textboxCardNumber() {
        return $("//input[@placeholder='Your credit card number']")
    }
    get textboxCardExpiryMonth() {
        //return $("//input[@placeholder='Month']")
        return $("//input[@placeholder='MM']")
    }
    get textboxCardExpiryYear() {
        //return $("//input[@placeholder='Year']")
        return $("//input[@placeholder='YY']")
    }
    get iframeCardNumber() {
        return $("//iframe[@src='https://paypages.test.payment.amadeus.com/1ASIATP/ARIAPP/static/checkout/2.3.0/form-fields/pan.html']")
    }
    get iframeCvv() {
        return $("//iframe[@src='https://paypages.test.payment.amadeus.com/1ASIATP/ARIAPP/static/checkout/2.3.0/form-fields/cvv.html']")
    }
    get textboxCVV() {
        return $("//input[@placeholder='Enter CVV']")
    }
    get textboxCardholderName() {
        return $("//input[@formcontrolname='holderName']")
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
    get dropdownCountry() {
        return $("//span[@class='mat-option-text']")
    }
    get dropdownState() {
        return $("//span[contains(@class,'mat-select-placeholder')]")
    }
    get optionState() {
        return $$("//mat-option[@role='option']//span[@class='mat-option-text']//span")
    }
    get checkboxTermsConditions() {
        return $("//span[contains(@class,'mat-checkbox-inner-container')]")
    }
    get buttonPay() {
        return $("//button[@id='payment-button']")
    }
    get lodoCardNetwork() {
        return $("//div[@class='logo-container']")
    }
    get textboxOTPVerify() {
        return $("//form[@name='cardholderInput']/input[1]")
    }
    get buttonOTPSubmit() {
        return $("//input[@value='SUBMIT']")
    }
    get confirmpageload() {
        //return $("//img[@src='assets/img/animation/animation-loader.jpg']")
        return $('//div[contains(@class,"contained")]')
    }
    get page_loader() {
        //return $("//div[@class='loading ng-star-inserted']/img")
        return $('//div[contains(@class,"contained")]')
    }
    get textboxOTP() {
        return $("//input[@placeholder=' Enter Code Here']")
    }
    get buttonSubmitOTP() {
        return $("//input[@value='SUBMIT']")
    }
    get imageNetbanking() {
        return $("//img[@alt='Online Banking']")
    }
    get termsconditions() {
        //return $("//mat-label[@class='terms-and-conditions-label']")
        return $("//span[@class='mat-checkbox-inner-container']")
    }
    get buttonOtherPay() {
        return $("//div[@class='buttons-place ng-star-inserted']//button[@id='payment-button']")
    }
    get textInternetBanking() {
        return $("#tab5")
    }
    get buttonInternetBanking() {
        return $("//span[text()='Internet Banking']")
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
    get textStatus() {
        return $("//select[@id='BankStatus']")
    }
    get dropdownStatus() {
        return $("//select[@id='BankStatus']")
    }
    get optionStatus() {
        return $$("//select[@id='BankStatus']/option")
    }
    get buttonSubmitPayment() {
        return $("//button[@name='formSubmit']")
    }
    get imageUpi() {
        return $("//img[@alt='UnionPay']")
    }
    get imageWallet() {
        return $("//img[@alt='Wallets']")
    }
    get imageRupay() {
        return $("//img[@alt='global.methods-of-payment.rupay']")
    }
    get textboxRupayCardNo() {
        return $("#cnumber")
    }
    get textboxRupayExpMonth() {
        return $("#expmon")
    }
    get textboxRupayExpYear() {
        return $("#expyr")
    }
    get textboxRupayCvv() {
        return $("#cvv2")
    }
    get textboxRupayCardholderName() {
        return $("#cname2")
    }
    get imageEmi() {
        return $("//img[@alt='iDEAL']")
    }
    get dropdownEmi() {
        return $("//select[@id='txtBankIDEMI']")
    }
    get optionAxisCard() {
        return $("//select[@id='txtBankIDEMI']//option[text()='Axis Credit Card']")
    }
    get optionRupayEmi() {
        $("//label[@for='3EMI']")
    }
    get textPromocode() {
        return $("//span[@class='expansion-panel-title refx-display-5']")
    }
    get enterpromocode() {
        return $("//input[@placeholder='Enter Promo Code']")
    }
    get paymenttitle() {
        return $("//div[@class='refx-display-3 header-text']")
    }
    get submitpromo() {
        return $("//button[@type='submit']")
    }
    get textOtherPayments() {
        return $("//span[contains(text(),'Other Payment Methods')]")
    }
    get PNR() {
        return $(".recloc-id")
    }
    get travelername() {
        return $("//div[@class='passenger-recap-pres']//*[@class='name']")
    }
    get buttonNoInsurance() {
        //return $("#radio-button-deselected")
        return $('//button[text()="Select"]')
    }
}
module.exports = new paymentpo();