class paymentpo{
    get paymentTitle() {
        return $("//div[@class='refx-display-3 header-text']")
    }
    get cardPaymentMode() {
       return $("//span[contains(text(),'Card Issued Outside India')]")
    }
    get cardNumber() {
        return $("//input[@placeholder='Your credit card number']")
    }
    get cardExpiryMonth() {
        return $("//input[@placeholder='Month']")
    }
    get cardExpiryYear() {
        return $("//input[@placeholder='Year']")
    }
    get securityCodeCVV() {
        return $("//input[@placeholder='Enter CVV']")
    }
    get cardholderName() {
        return $("//input[@formcontrolname='holderName']")
    }
    get houseNumber() {
        return $("//input[@formcontrolname='line1']")
    }
    get apartmentNumber() {
        return $("//input[@formcontrolname='line2']")
    }
    get pincode() {
        return $("//input[@formcontrolname='zipCode']")
    }
    get city() {
        return $("//input[@formcontrolname='city']")
    }
    get country() {
        return $("//input[@formcontrolname='countryCode']")
    }
    get countrySelected() {
        return $("//span[@class='mat-option-text']")
    }
    get state() {
        return $("//span[contains(text(),'State or province')]")
    }
    get stateOption() {
        return $$("//mat-option[@role='option']//span[@class='mat-option-text']//span")
    }
    get termsCondition() {
        return $("//span[@class='mat-checkbox-inner-container']")
    }
    get pay() {
        return $("//button[@id='payment-button']")
    }
    get confirmpageload() {
        //return $("//img[@src='assets/img/animation/animation-loader.jpg']")
        return $("//img[@src='assets/img/animation/animation-loader.svg']")
    }
    get netbanking()
    {
        return $("//img[@alt='Online Banking']")
    }
    get termsconditions()
    {
        return $("//mat-label[@class='terms-and-conditions-label']")
    }
    get otherpaybtn()
    {
        return $("//div[@class='buttons-place ng-star-inserted']//button[@id='payment-button']")
    }
    get IBval() {
        return $("#tab5")
    }
    get selectbank() {
        return $("#txtBankIDBK")
    }
    get selectbankoption() {
        return $("//select[@id='txtBankIDBK']//option[contains(text(),'Test Bank')]")
    }
    get makepayment() {
        return $("#proceedForm")
    }
    get selectval() {
        //return $(".bs-example")
        return $("//select[@id='BankStatus']")
    }
    get selectdropdown() {
        return $("//select[@id='BankStatus']")
    }
    get selectdropdownlist() {
        return $$("//select[@id='BankStatus']/option")
    }
    get paymentsubmit() {
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
    get textboxRupayCardNumber()
    {
        return $("#cnumber")
    }
    get textboxRupayExpMonth()
    {
        return $("#expmon")
    }
    get textboxRupayExpYear()
    {
        return $("#expyr")
    }
    get textboxRupayCVV()
    {
        return $("#cvv2")
    }
    get textboxRupayCardholderName()
    {
        return $("#cname2")
    }
    get emi()
    {
        return $("//img[@alt='iDEAL']")
    }
    get emioption()
    {
        return $("//select[@id='txtBankIDEMI']")
    }
    get optionRupaycredit()
    {
        return $("//select[@id='txtBankIDEMI']//option[text()='Axis Credit Card']")
    }
    get promocode()
    {
        return $("//span[@class='expansion-panel-title refx-display-5']")
    }
    get labelEmi()
    {
        return $("//label[@for='3EMI']")
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
    get PNR() {
        return $(".recloc-id")
    }
    get labelPaymentMethod()
  {
    //return $(".subtitle")
    return $("//span[@class='heading-text'][text()='Select Method of Payment']")
  }
  get buttonNetbanking()
{
        //return $("#tpl3_li_AI_NETBANKING")
        return $("//input[contains(@id,'AI_NETBANKING')]")
 }
 get checkboxTermsCondition()
 {
   //return $("//label[@for='w11_widget-input-purchaseForm-termsConditionsForm-termsAndCondition']/strong")
   //return $("//input[@id='w11_widget-input-purchaseForm-termsConditionsForm-termsAndCondition']")
   return $("//Strong[contains(text(),'Yes,')]")
 }
 get buttonPayContinue()
 {
   //return  $("//span[text()='continue']")
   return $("//span[@class='plnext-widget-btn-text one-icon']")
   //return $("//button[@class='plnext-widget-btn btn btn-primary tripsummary-btn-primary tripSummary-btn-continue tripsummary-btn-validate validate-btn']")
 }
 get linkInternebanking()
    {
        return $("#tab5")
    }
    get optionBank(){
      return $("#txtBankIDBK")
  }
  get optionBankList()
  {
      return $("//select[@id='txtBankIDBK']//option[contains(text(),'Test Bank')]")
  }
  get buttonMakePayment()
  {
      return $("#proceedForm")
  }
  get labelOptionVal()
  {
      return $(".bs-example")
  }
  get dropdownSelect()
  {
      return $("#BankStatus")
  }
  get dropdownSelectList()
    {
        return $$("//select[@id='BankStatus']/option")
    }
    get buttonPaymentSubmit()
    {
        return $("//button[@name='formSubmit']")
    }
    get mc_creditcard()
    {
     return $("#tpl3_radio_CC")
    }
    get imgAmex()
 {
  return $("//img[@alt='American Express']")
 }
 get textboxCardNumber()
 {
  return $("//input[@name='cardNumber']")
 }
 get pageLoader()
{
    //return $("//div[@class='loading ng-star-inserted']/img")
    return $('//div[contains(@class,"contained")]')
}
 get textboxCVV()
 {
  return $("//input[@name='securityCode']")
 }
 get textboxExpMonth()
 {
  return $("//select[@name='ccMonth']")
 }
 get textboxExpYear()
 {
  return $("//select[@name='ccYear']")
 }
 get textboxCardHolderName()
 {
  return $("//input[@name='nameOnCard']")
 }
 get textboxCardEmail()
 {
  return $("//input[@name='cardHolderEmail']")
 }
 get textboxCardMobile()
 {
  return $("//input[@name='cardHolderPhone']")
 }
 get textboxCardhouseno()
 {
  return $("//input[@name='ccAddressFirstLine']")
 }
 get textboxCardAddress()
 {
  return $("//input[@name='ccAddressSecondLine']")
 }
 get textboxCardPincode()
 {
  return $("//input[@name='ccPostalCode']")
 }
 get textboxCardCity()
 {
  return $("//input[@name='ccCity']")
 }
 get textboxCardCountry()
 {
  return $("//select[@name='ccCountry']")
 }
 get textboxCardState()
 {
  return $("//select[@name='ccState']")
 }
 get imgEMI()
 {
    return $("//img[@src='assets/img/amop/emi.svg']")
 }
 get tabEmi()
 {
    return $("#tab11")
 }
 get optionBankEmi()
 {
    return $("#txtBankIDEMI")
 }
 get mc_emi()
 {
  return $("#tpl3_radio_AI_EMI")
 }
 get imgWallet()
 {
  return $("#tpl3_radio_AI_WALLET")
 }
 get imgRupay()
 {
  return $("tpl3_radio_AI_RUPAY")
 }
 get imgUpi()
 {
  return $("#tpl3_radio_AI_UPI")
 }
 get labelConfirmationVal()
 {
     return $(".reservation-banner")
 }
get textPNR()
{
    return $("//div[@class='reservation']/span")
}
get textTravelerName()
{
    return $$("//div[@class='traveller-details-text traveller-name']")
}
get buttonPromoccode()
{
    return $("[name='merchandising_promotion_code']")
}
get linkPromocode()
{
    return $(".promotion-code-button")
}
get lodoCardNetwork()
{
    return $("//div[@class='logo-container']")
}
get textboxOTPVerify()
{
    return $("//form[@name='cardholderInput']/input[1]")
}
get buttonOTPSubmit()
{
    return $("//form[@name='cardholderInput']/input[2]")
}

}
module.exports= new paymentpo();