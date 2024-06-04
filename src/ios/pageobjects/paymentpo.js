class paymentpo {
    get paymentTitle() {
        return $("//div[@class='refx-display-3 header-text']")
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
    get radioMcCreditCard() {
        return $('//XCUIElementTypeButton[@name="CARD PAYMENT"]')
    }

    get radioAmexCard() {
        return $('//XCUIElementTypeImage[@name="American Express"]')
    }
    get buttonCardPaymentMode() {
        return $(`~CARD PAYMENT`)
    }
    get textboxMcCardNumber() {
        return $('//XCUIElementTypeOther[@name="Card Number *"]')
    }
    get textboxCardNumber() {
        return $('//XCUIElementTypeOther[@name="CARD PAYMENT, region"]/XCUIElementTypeOther[1]')
    }
    get textboxCardExpiryMonth() {
        //const mon = 'value == "Month"'
        const mon = 'value == "MM"'
        return $(`-ios predicate string:${mon}`)
    }
    get textboxMcExpiryMonth() {
        return $('//XCUIElementTypeTextField[@value="MM"]')
        //return $('//XCUIElementTypeOther[@name="Credit card expiry month *"]')
    }
    get textboxCardExpiryYear() {
        // const yr = 'value == "Year"'
        const yr = 'value == "YY"'
        return $(`-ios predicate string:${yr}`)
    }
    get textboxMcCardExpiryYear() {
        return $('//XCUIElementTypeTextField[@value="YYYY"]')
        //return $('//XCUIElementTypeOther[@name="Credit card expiry year *"]')
    }
    get textboxSecurityCodeCVV() {
        const cvv = 'value == "Security Code *"'
        return $(`-ios predicate string:${cvv}`)
    }
    get textboxMcCVV() {
        return $('//XCUIElementTypeTextField[@value="Enter CVV"]')
        //return $('//XCUIElementTypeStaticText[@name="Security code"]')
    }
    get textboxCardHolderName() {
        const cardholdername = '**/XCUIElementTypeTextField[`value contains "full name"`]'
        return $(`-ios class chain:${cardholdername}`)
        //return $('//XCUIElementTypeStaticText[contains(@name,"full name")]')
    }
    get textboxMcCardHolderName() {
        return $('(//XCUIElementTypeTextField)[2]')
        //return $('//XCUIElementTypeOther[@name="Name on card *"]')
    }
    get textboxMcEmail() {
        return $('//XCUIElementTypeOther[@name="E mail Address *"]')
    }
    get textboxMcMobileNumber() {
        return $('//XCUIElementTypeOther[@name="Mobile Number *"]')
    }
    get textboxHouseNumber() {
        return $('//XCUIElementTypeOther[contains(@name,"House Number And Street Name")]')
    }
    get textboxMcHouseNumber() {
        return $('//XCUIElementTypeOther[@name="CARD PAYMENT, tab panel"]/XCUIElementTypeOther[9]/XCUIElementTypeOther/XCUIElementTypeTextField')
        //return $('//XCUIElementTypeOther[@name="House Number and Street Name *"]')
    }
    get textboxApartmentNumber() {
        return $('//XCUIElementTypeStaticText[contains(@name,"Apartment, building, floor, etc.")]')
    }
    get textboxMcApartmentNo() {
        return $('//XCUIElementTypeOther[@name="CARD PAYMENT, tab panel"]/XCUIElementTypeOther[10]/XCUIElementTypeOther/XCUIElementTypeTextField')
        //return $('//XCUIElementTypeOther[@name="Apartment, building, floor, etc"]')
    }
    get textboxPincode() {
        return $('//XCUIElementTypeOther[@name="Postcode / Zip"]')
    }
    get textboxMcPincode() {
        return $('//XCUIElementTypeOther[@name="CARD PAYMENT, tab panel"]/XCUIElementTypeOther[11]/XCUIElementTypeOther/XCUIElementTypeTextField')
        //return $('//XCUIElementTypeOther[@name="Postcode / Zip *"]')
    }
    get textboxCity() {
        return $('//XCUIElementTypeOther[@name="City"]')
    }
    get textboxMcCity() {
        return $('//XCUIElementTypeOther[@name="CARD PAYMENT, tab panel"]/XCUIElementTypeOther[12]/XCUIElementTypeOther/XCUIElementTypeTextField')
        //return $('//XCUIElementTypeOther[@name="City *"]')
    }
    get textboxCountry() {
        return $('//XCUIElementTypeOther[@name="Country"]')
    }
    get dropdownMcCountry() {
        return $('//XCUIElementTypeOther[@name="Country"]')
        //return $('//XCUIElementTypeOther[@name="Country *"]')
    }
    get dropdownMcState() {
        return $('//XCUIElementTypeOther[@name="State or province"]')
    }
    get optionCountry() {
        return $('//XCUIElementTypeOther[@name="Country *"]/XCUIElementTypeOther')
    }
    get textboxState() {
        return $('//XCUIElementTypeOther[@name="State or province"]')
        //return $('//XCUIElementTypeOther[@name="State or province State"]')
    }
    get stateOption() {
        return $$('(//XCUIElementTypeOther[@name="State or province"])[2]//XCUIElementTypeOther')
    }
    get checkboxTermsConditions() {
        return $('//XCUIElementTypeSwitch[contains(@name,"I have read and agree to the Fare Rules and the")]')
        //return $('//XCUIElementTypeStaticText[@name="I have read and agree to the Fare Rules and the"]')
    }
    get checkbocMcTerms() {
        return $('//XCUIElementTypeSwitch[contains(@name,"I have read and agree to the ")]')
    }
    get buttonMcContinue() {
        return $('//XCUIElementTypeButton[@name="Continue"]')
    }
    get buttonMcPay() {
        return $(`~Pay Now`)
    }
    get buttonPay() {
        //const pyt = 'label CONTAINS "PAY"'
        //return $('//XCUIElementTypeButton[contains(@name,"Pay ")]')
        return $('//button[@id="payment-button"]')
    }
    get pageLoader() {
        //return $("//div[@class='loading ng-star-inserted']/img")
        return $('//div[contains(@class,"contained")]')
    }
    get buttonDone() {
        return $(`~Done`)
    }
    get buttonGo() {
        return $(`~Go`)
    }
    get confirmpageload() {
        //return $("//img[@src='assets/img/animation/animation-loader.jpg']")
        return $("//img[@src='assets/img/animation/animation-loader.svg']")
    }
    get buttonNetbanking() {
        return $('//XCUIElementTypeImage[@name="Online Banking"]')
    }
    get radioNetbanking() {
        return $('//XCUIElementTypeStaticText[@name="Netbanking"]')
    }
    get checkboxtermsandconditions() {
        return $('//XCUIElementTypeStaticText[@name="I have read and agree to the Fare Rules and the"]')
    }
    get otherpaybtn() {
        return $("//div[@class='buttons-place ng-star-inserted']//button[@id='payment-button']")
    }
    get textInternetBanking() {
        return $('//XCUIElementTypeLink[@name="Internet Banking"]')
    }
    get dropdownSelectBank() {
        //return $('(//XCUIElementTypeOther[@name="complementary"])[2]/XCUIElementTypeOther[5]')
        return $('//XCUIElementTypeOther[contains(@value,"Select your Bank")]')
    }
    get dropdownMcSelectBank() {
        return $('//XCUIElementTypeOther[contains(@value,"Select your Bank")]')
    }
    get optionSelectbank() {
        return $('//XCUIElementTypeButton[contains(@name,"Test Bank")]')
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
    get upi() {
        return $("//img[@alt='UnionPay']")
    }
    get wallet() {
        return $("//img[@alt='Wallets']")
    }
    get rupay() {
        return $("//img[@alt='global.methods-of-payment.rupay']")
    }
    get rupaycardnumber() {
        return $("#cnumber")
    }
    get rupayexpmonth() {
        return $("#expmon")
    }
    get rupayexpyear() {
        return $("#expyr")
    }
    get rupaycvv() {
        return $("#cvv2")
    }
    get rupaycardholdername() {
        return $("#cname2")
    }
    get emi() {
        return $("//img[@alt='iDEAL']")
    }
    get emioption() {
        return $("//select[@id='txtBankIDEMI']")
    }

    get paymenttitle() {
        return $("//div[@class='refx-display-3 header-text']")
    }

    get buttonOtherPayments() {
        return $('//XCUIElementTypeButton[@name="OTHER PAYMENT METHODS"]')
    }
    get PNR() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[4]//XCUIElementTypeStaticText')
    }
    get travelername() {
        return $("//div[@class='passenger-recap-pres']//*[@class='name']")
    }
    get textboxOTP() {
        const otp = '**/XCUIElementTypeTextField[`value == " Enter Code Here"`]'
        return $(`-ios class chain:${otp}`)
    }
    get dropdownCardType() {
        return $('//XCUIElementTypeStaticText[@name="Credit Card Type"]')
        //return $('//XCUIElementTypeStaticText[@name="Card type"]')
    }
    get optionAmexCard() {
        return $('//XCUIElementTypeOther[@name="American Express"]')
    }
    get buttonOTPSubmit() {
        return $('//XCUIElementTypeButton[@name="SUBMIT"]')
    }
    get dropdownCardType() {
        return $('//XCUIElementTypeOther[@name="Credit Card Type"]')
    }
    get radioMcAmexCard() {
        return $('//XCUIElementTypeImage[@name="American Express"]')
    }
    get optionAmex() {
        return $('//XCUIElementTypeOther[@name="American Express"]')
        //return $('//XCUIElementTypeOther[@name="American Express"]')
    }
    get textboxMcCardNo() {
        return $('//XCUIElementTypeTextField')
        //return $('//XCUIElementTypeTextField[@value="Enter the credit card number"]')
    }
    get radioMcNetbanking() {
        return $('//XCUIElementTypeOther[@name="● Netbanking"]/XCUIElementTypeOther')
    }
    get checkboxMcTermsConditions() {
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
    get buttonSelectInsurance() {
        return $('//XCUIElementTypeButton[@name="SELECT"]')
    }
    get buttonNoInsurance() {
        return $('//button[text()="Select"]')
    }
    get buttonOpt1Insurance() {
        return $('(//button[text()="Select"])[2]')
    }
    get buttonOpt2Insurance() {
        return $('(//button[text()="Select"])[3]')
    }
    get textInsurance() {
        return $('//XCUIElementTypeStaticText[@name="Do You Want To Add An Insurance?"]')
    }
}
module.exports = new paymentpo();