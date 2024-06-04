class paymentpo{
    get paymentTitle() {
        return $("//div[@class='refx-display-3 header-text']")
    }
    get creditcardtype()
    {
        //return $("//div[@class='mat-form-field-infix ng-tns-c32-66']")
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
    get buttonCardPaymentMode() {
       return $('//android.widget.Button[@text="Card Payment"]')
    }
    get textboxCardNumber() {
        return $('//android.widget.EditText[@resource-id="value"]')
    }
    get textboxCardExpiryMonth() {
        return $('//android.widget.EditText[contains(@resource-id,"ccPaymentPresexpiryDate")]')
    }
    get textboxCardExpiryYear() {
        return $('//android.view.View/android.view.View[1]/android.view.View/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[2]/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]/android.widget.EditText')
    }
    get textboxSecurityCodeCVV() {
        return $('(//android.widget.EditText[@resource-id="value"])[2]')
    }
    get textboxCardHolderName() {
        return $('//android.widget.EditText[contains(@resource-id,"ccPaymentPresholderName")]')
    }
    get textboxHouseNumber() {
        return $('//android.widget.EditText[contains(@resource-id,"ccPaymentPres-billingAddressContainer-addressPresenterline")]')
    }
    get textboxApartmentNumber() {
        return $('(//android.widget.EditText[contains(@resource-id,"ccPaymentPres-billingAddressContainer-addressPresenterline")])[2]')
    }
    get textboxPincode() {
        return $('//android.widget.EditText[contains(@resource-id,"zipCode")]')
    }
    get textboxCity() {
        return $('//android.widget.EditText[contains(@resource-id,"city")]')
    }
    get textboxCountry() {
        return $('//android.widget.EditText[contains(@resource-id,"countryCode")]')
    }
    get optionCountry() {
        return $('(//XCUIElementTypeOther[@name="Country"])[2]')
    }
    get textboxState() {
        //return $("//span[contains(text(),'State or province')]")
        return $('//XCUIElementTypeOther[@name="State or province State"]')
    }
    get stateOption() {
        return $$('(//XCUIElementTypeOther[@name="State or province"])[2]//XCUIElementTypeOther')
    }
    get checkboxTermsConditions() {
        return $('//android.widget.CheckBox')
    }
    get buttonPay() {
        return $('//android.widget.Button[@resource-id="payment-button"]')
    }
    get buttonDone()
    {
        return $(`~Done`)
    }
    get confirmpageload() {
        //return $("//img[@src='assets/img/animation/animation-loader.jpg']")
        return $("//img[@src='assets/img/animation/animation-loader.svg']")
    }
    get buttonNetbanking()
    {
        return $('//android.widget.Image[@text="Online Banking"]')
    }
    get checkboxtermsandconditions()
    {
        return $('//XCUIElementTypeStaticText[@name="I have read and agree to the Fare Rules and the"]')
    }
    get otherpaybtn()
    {
        return $("//div[@class='buttons-place ng-star-inserted']//button[@id='payment-button']")
    }
    get textInternetBanking() {
        return $('//XCUIElementTypeLink[@name="Internet Banking"]')
    }
    get dropdownSelectBank() {
        return $('(//XCUIElementTypeOther[@name="complementary"])[2]/XCUIElementTypeOther[5]')
    }
    get optionSelectbank() {
        return $('//XCUIElementTypeButton[@name="Test Bank"]')
    }
    get buttonMakePayment() {
        return $('//XCUIElementTypeButton[@name="Make Payment"]')
    }
    get dropdownSelectVal() {
        //return $(".bs-example")
        return $('//XCUIElementTypeOther[@name="BillDesk"]/XCUIElementTypeOther[1]/XCUIElementTypeOther[2]')
    }
    get optionSelectVal() {
        return $('//XCUIElementTypeButton[@name="Success"]')
    }
    get selectdropdownlist() {
        return $$("//select[@id='BankStatus']/option")
    }
    get buttonSubmit() {
        return $('//XCUIElementTypeButton[@name="Submit"]')
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
    get emi()
    {
        return $("//img[@alt='iDEAL']")
    }
    get emioption()
    {
        return $("//select[@id='txtBankIDEMI']")
    }
    
    get paymenttitle()
    {
        return $("//div[@class='refx-display-3 header-text']")
    }
    
    get buttonOtherPayments()
    {
        return $('//android.widget.Button[contains(@text,"Other Payment Methods")]')
    }
    get PNR() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[4]//XCUIElementTypeStaticText')
    }
    get travelername()
    {
        return $("//div[@class='passenger-recap-pres']//*[@class='name']")
    }
    get radioMcNetbanking() {
        return $('//XCUIElementTypeOther[@name="● Netbanking"]/XCUIElementTypeOther')
    }
    get checkboxTermsConditions() {
        return $('//XCUIElementTypeStaticText[@name="I have read and agree to the"]')
    }
    get buttonContinue() {
        return $('//XCUIElementTypeButton[@name="Continue"]')
    }
    get buttonMcInternetBanking() {
        return $('//XCUIElementTypeLink[@name="Internet Banking"]')
    }
    get dropdownMcSelectBank() {
        return $('///XCUIElementTypeOther[contains(@value,"Select your Bank")]')
    }
    get optionMcTestBank() {
        return $('//XCUIElementTypeButton[contains(@name,"Test Bank")]')
    }
    get buttonMcMakePayment() {
        return $('//XCUIElementTypeButton[@name="Make Payment"]')
    }
    get dropdownMcStatus() {
        return $('//XCUIElementTypeOther[@value="Select"]')
    }
    get optionMcSuccess() {
        return $('//XCUIElementTypeButton[@name="Success"]')
    }
    get buttonMcSubmitPayment() {
        return $('//XCUIElementTypeButton[@name="Submit"]')
    }
}
module.exports= new paymentpo();