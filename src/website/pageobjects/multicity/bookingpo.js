class oneWaypo {

                                       // new tech

get origindestination()
{
    return $$("#typeahead-basic")
}
get origindestinationsuggestion()
{
    return $(".airport-country-detail")
}
get searchflights()
{
    return $("//button[normalize-space()='Show Flights']")
}






















                                           // new tech








    get searchflights() {
        return $("#home")
    }
    get owrtradio() {
        return $$(".form-group .iradio")
    }
    get from() {
        return $("#from")
    }
    get fromdropdown() {
        return $$("//ul[@id='ui-id-2']//li[@class='ui-menu-item']/a")
    }
    get to() {
        return $("#to")
    }
    get calender1() {
        return $("#_depdateeu1")
    }
    get todropdown() {
        return $("//ul[@id='ui-id-3']//li[@class='ui-menu-item']/a")
    }
    get departureicon() {
        return $$("//div[@class='input-group date']//img[@class='ui-datepicker-trigger']")
    }
    get departureiconreturn() {
        return $("//div[@id='id_2']//img[contains(@title,'Date Picker')]")
    }
    get departmonth() {
        return $$("//div[@class='ui-datepicker-title']//span[@class='ui-datepicker-month']")
    }
    get departyear() {
        return $$("//div[@class='ui-datepicker-title']//span[@class='ui-datepicker-year']")
    }
    get selectday0() {
        return $$("//div[@class='ui-datepicker-group ui-datepicker-group-first']//table[@class='ui-datepicker-calendar']//tr//td[@data-handler='selectDay']/a")
    }
    get selectday1() {
        return $$("//div[@class='ui-datepicker-group ui-datepicker-group-last']//table[@class='ui-datepicker-calendar']//tr//td[@data-handler='selectDay']/a")
    }
    get nextmonth() {
        return $(".ui-icon-circle-triangle-e")
    }
    get departingdate() {
        return $("#_depdateeu1")
    }
    get returningdate() {
        return $("#_retdateeu1")
    }
    get calendarimg() {
        return $$("//img[@title='Date Picker']")
    }
    get cabin() {
        return $("#_classType1")
    }
    get cabindropdown() {
        return $$("//div[@class='form-group']//select[@id='_classType1']/option")
    }
    get adultpassenger() {
        return $("#ddladult1")
    }
    get adultpassengercount() {
        return $$("//select[@id='ddladult1']/option")
    }
    get childpassenger() {
        return $("#ddlchildren1")
    }
    get childpassengercount() {
        return $$("//select[@id='ddlchildren1']/option")
    }
    get infantpassenger() {
        return $("#ddlinfants1")
    }
    get infantpassengercount() {
        return $$("//select[@id='ddlinfants1']/option")
    }
    get searchbutton() {
        return $("#btnbooking")
    }
    get selectflightval() {
        return $("//div[@class='refx-title title']")
    }
    get selectflightfilterval() {
        return $(".filters-button-label")
    }
    get flightstoptext() {
        return $$("//div[@class='bound-stop-text-with-info-container']/div")
    }
    get flightlisteconomy() {
        return $$(".eco")

    }
    get flightlistbusiness() {
        return $$(".business")
    }

    get flightlistfirst() {
        return $$("//div[@class='flight-card-button-section ng-star-inserted']//button[@class='mat-focus-indicator mat-button mat-button-base flight-card-button first ng-star-inserted']")
    }
    get flightbusiness1() {
        return $(".flight-card-button-section .business")
    }
    get flightlistrt() {
        return $("//button[@class='mat-focus-indicator flight-card-button-desktop-view mat-button mat-button-base eco ng-star-inserted']")
    }
    get flightlistcabinradio() {
        return $$("//div[@class='refx-body-2 price-card-title-label ng-star-inserted']")
    }
    get flightlistval() {
        return $("//div[@class='refx-subheading-1 title']")
    }
    get cabinlist() {
        return $$("//label[@class='price-card-input-label']/i")
    }
    get continue1() {
        return $("//span[text()='Continue']")
    }
    get continuebutton() {
            return $("//span[contains(text(),'Continue')]")
        }
        // UPGRADE OR KEEP --- CABIN
    get upgrdetonextlevelcabin() {
        return $("//button[@class='mat-focus-indicator accept-btn mat-flat-button mat-button-base ng-star-inserted']//span[@class='mat-button-wrapper']/span")
    }
    get upgrade1() {
        return $("//span[contains(text(),'Upgrade')]")
    }
    get keepcurrentcabin() {
        return $("//span[contains(text(),'Keep')]")
    }
    get flightdetailsval() {
            return $("//h2[text()='Your Flight']")
        }
        // STARTING OF PASSENGER DETAILS  
    get fillpassengerdeatilsbutton() {
        return $("//span[contains(text(),'Fill passenger details')]")
    }
    get passengerdetailsval1() {
        return $("//div[@class='refx-title title']")
    }
    get adult1display() {
        return $("//div[text()='Enter Details of the Adult 1']")
    }
    get PaxAdult1display() {
        return $("//div[text()='Enter Details of Adult']")
    }
    get pax1Display() {
        return $("//div[text()='Please Enter Passenger Details']")
    }
    get adult2display() {
        return $("//div[text()='Enter Details of the Adult 2']")
    }
    get adult3display() {
        return $("//div[text()='Enter Details of the Adult 3']")
    }
    get adult4display() {
        return $("//div[text()='Enter Details of the Adult 4']")
    }
    get adult5display() {
        return $("//div[text()='Enter Details of the Adult 5']")
    }
    get adult6display() {
        return $("//div[text()='Enter Details of the Adult 6']")
    }
    get adult7display() {
        return $("//div[text()='Enter Details of the Adult 7']")
    }
    get adult8display() {
        return $("//div[text()='Enter Details of the Adult 8']")
    }
    get adult9display() {
        return $("//div[text()='Enter Details of the Adult 9']")
    }
    get child0display() {
        return $("//div[text()='Enter Details of Child']")
    }
    get child1display() {
        return $("//div[text()='Enter Details of Child 1']")
    }
    get child2display() {
        return $("//div[text()='Enter Details of Child 2']")
    }
    get child3display() {
        return $("//div[text()='Enter Details of Child 3']")
    }
    get child4display() {
        return $("//div[text()='Enter Details of Child 4']")
    }
    get child5display() {
        return $("//div[text()='Enter Details of Child 5']")
    }
    get child6display() {
        return $("//div[text()='Enter Details of Child 6']")
    }
    get child7display() {
        return $("//div[text()='Enter Details of Child 7']")
    }
    get child8display() {
        return $("//div[text()='Enter Details of Child 8']")
    }
    get child9display() {
        return $("//div[text()='Enter Details of Child 9']")
    }
    get infant0display() {
        return $("//div[text()='Enter Details of Infant']")
    }
    get infant1display() {
        return $("//div[text()='Enter Details of Infant 1']")
    }
    get infant2display() {
        return $("//div[text()='Enter Details of Infant 2']")
    }
    get infant3display() {
        return $("//div[text()='Enter Details of Infant 3']")
    }
    get infant4display() {
        return $("//div[text()='Enter Details of Infant 4']")
    }
    get infant5display() {
        return $("//div[text()='Enter Details of Infant 5']")
    }
    get infant6display() {
        return $("//div[text()='Enter Details of Infant 6']")
    }
    get infant7display() {
        return $("//div[text()='Enter Details of Infant 7']")
    }
    get infant8display() {
        return $("//div[text()='Enter Details of Infant 8']")
    }
    get infant9display() {
        return $("//div[text()='Enter Details of Infant 9']")
    }
    get passengertitle() {
        return $("//div[@class='refx-title title']")
    }


    get passengerdetailsval2() {
        return $("//h2[@class='refx-display-3 personal-info-header-title']")
    }
    get nametittle() {
        //return $("//span[text()='- Please Select -']")
        return $$(".mat-select-arrow-wrapper")
    }
    get nametittledropdown() {
        return $$(".mat-option-text")
    }
    get firstname() {
        return $("input[formcontrolname='firstName']")
    }
    get lastname() {
        return $("input[formcontrolname='lastName']")
    }
    get dob() {
        return $("input[formcontrolname='dob']")
    }
    get ffpbutton() {
        return $$("//mat-select[@role='combobox']")
    }
    get ffpbuttonlist() {
        return $$(".mat-option")
    }
    get passengerdetailsval3() {
        return $("//h2[@class='contact-info-header-title refx-display-3']")
    }
    get email() {
        return $$("input[type='email']")
    }
    get countrycode() {
        return $("input[aria-describedby='countryCodes']")
    }
    get mobilenum() {
        return $("input[type='tel']")
    }
    get ffpnumber() {
        return $("//input[@formcontrolname='frequentFlyerCardId']")
    }
    get termsandcond() {
        return $(".mat-checkbox-inner-container")
    }
    get confirmbutton() {
        return $(".nextBtn")
    }
    get confirmationbutton() {
            return $("//span[text()='Confirm']")
        }
        ///////////// ENDING OF PASSENGER DETAILS///////////
    get confirmpageload() {
        //return $("//img[@src='assets/img/animation/animation-loader.jpg']")
        return $('//div[contains(@class,"contained")]')
    }
    get nextbutton() {
            return $("//span[text()='Next passenger']")
        }
        /////////STARTING OF ADIITIONAL SERVICE////////////
    get additionserviceval1() {
        return $(".refx-title")
    }
    get additionserviceval() {
            return $("//h2[text()='Additional Services']")
        } //  ADDITIONAL BAGGAGE
    get additionalbaggage() {
        return $("//span[text()='Add baggage']")
    }
    get additionalbaggageval() {
        return $("//div[text()='Prepaid Baggage']")
    }
    get additionalbaggagedropdown() {
        return $(".mat-select-min-line")
    }
    get additionalbaggagedropdown1() {
        return $$(".mat-select-min-line")
    }
    get additionalbaggagedropdownlist() {
            return $$(".mat-option-text")
        } /// SEAT SELECTION
    get selectseat() {
        return $("//span[text()='Select Seat']")
    }
    get selectseatval() {
        return $("//div[text()='Seatmap Legend']")
    }
    get totalseat() {
            return $("//div[@class='refx-body-1 flight-recap-travelers-number-of-travelers ng-star-inserted']//span[@class='flight-recap-travelers-number']")
        } // FREE SEAT
    get freeseat() {
        return $$("//button[@class='seat-button selectable-button available free-seat ng-star-inserted']")
    }
    get preferredseat()
    {
        return $$("//button[@class='seat-button selectable-button seat-characteristic-discounted available chargeable-seat discounted-seat ng-star-inserted']")
    }
    get freeseatconfirm() {
        return $("//span[text()='Select seat']")
    }
    get contseat()
    {
        return $("//span[text()='Continue']")
    }
    get extrallegseatconfirm() {
        return $("//span[text()='Acknowledge and select seat']")
    }
    get extralegroomseat() {
        //return $$("//div[@class='extra-leg-space ng-star-inserted']")
        return $$("//tr[@class='extra-leg-row ng-star-inserted']//button")
    }
    get nxtflight()
    {
        //return $("//button[@class='mat-focus-indicator next-btn mat-flat-button mat-button-base']")
        return $("//span[contains(text(),'Next flight')]")
    }
    get confirmseat()
    {
        return $("//span[contains(text(),'Confirm')]")
    }
    get ascontinuebutton() {
        return $("//span[text()='Continue']")
    }
    get checkoutbutton() {
            return $(".next-step-button")
        }
    get paymenttitle()
    {
        return $("//div[@class='refx-display-3 header-text']")
    }
    get promocode()
    {
        return $("//span[@class='expansion-panel-title refx-display-5']")
    }
    get enterpromocode()
    {
        return $("//input[@placeholder='Enter Promo Code']")
    }
    get submitpromo()
    {
        return $("//button[@type='submit']")
    }
        //card payment 
    get cardnumberframe() {
        return $("//iframe[@src='https://paypages.test.payment.amadeus.com/1ASIATP/ARIAPP/static/checkout/1.10.2/form-fields/pan.html']")
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
    get cvvframe() {
        return $("//iframe[@src='https://paypages.test.payment.amadeus.com/1ASIATP/ARIAPP/static/checkout/1.10.2/form-fields/cvv.html']")
    }
    get securityCodeCVV() {
        return $("//input[@placeholder='Enter CVV']")
    }
    get cardholderName() {
        return $("//input[@formcontrolname='holderName']")
    }

    //payment
    get paymentTitle() {
        return $("//div[@class='refx-display-3 header-text']")
    }
    get cardPaymentMode() {
            //return $("//div[@class='vendor-icons col-12 ng-star-inserted']")
            //return $("//span[@class='mat-expansion-indicator ng-tns-c56-47 ng-trigger ng-trigger-indicatorRotate ng-star-inserted']")
            //return $("//span[@class='mat-expansion-indicator ng-tns-c56-45 ng-trigger ng-trigger-indicatorRotate ng-star-inserted']")
            //return $("//mat-expansion-panel-header//span[@class='mat-content ng-tns-c56-45']")
           return $("//span[contains(text(),'Card Issued Outside India')]")
          // return $("//span[contains(text(),'Credit Card')]")
        }
        /*  get cardNumVal() {
              return $("//iframe[@src='https://paypages.test.payment.amadeus.com/1ASIATP/ARIAPP/static/checkout/1.10.2/form-fields/pan.html']")
          }
          get cardNumber() {
              //return $(".mat-form-field-infix .cardNumberField")
              //return $("//div[@class='cardNumberField ng-tns-c32-58']//refx-secure-field-input-pres")
              //return $("//div[@class='cardNumberField ng-tns-c32-64']")
              //return $("//div[@class='cardNumberField ng-tns-c32-42']")
              //return $("#fdaca9b6-1603-4c2c-beab-e11082074d06-check-in-presenter-ccPaymentPrescardNumber")
              //return $$(".cardNumberField")
              //return $("//div[@class='cardNumberField ng-tns-c32-42']//refx-secure-field-input-pres[@class='pan-input click-to-focus ng-invalid ng-star-inserted ng-dirty ng-touched cdk-focused cdk-program-focused']")
              //return $("//div[@class='mat-form-field-infix ng-tns-c32-50']//div[@class='cardNumberField ng-tns-c32-50']")
              //return $("//div[@class='row']//div[@class='mat-form-field-infix ng-tns-c32-50']//div[@class='cardNumberField ng-tns-c32-50']")
              //return $("//input[@placeholder='Your credit card number']")
              return $("//input[@autocomplete='cc-number']")
          }
          get cardInfo() {
              return $$(".mat-form-field-infix")
          }
          get cardExpiryMonth() {
              return $("//div[@class='parts ng-pristine ng-valid ng-touched']")
          }
          get cardExpiryYear() {
              return $("//div[@class='parts ng-pristine ng-valid ng-touched']")
          }
          get securityCodeCVV() {
              //return $("//div[@class='mat-form-field-flex ng-tns-c32-67']//input")
              //return $("//span[contains(.,'Security Code *')]")
              return $("//refx-secure-field-input-pres[@class='cvv-input click-to-focus ng-invalid ng-star-inserted ng-dirty ng-touched']")
          }
          get cardholderName() {
              //return $("//div[@class='mat-form-field-infix ng-tns-c32-66']//input")x
              return $("//input[@formcontrolname='holderName']")
          }*/
    get houseNumber() {
        //return $("//div[@class='mat-form-field-infix ng-tns-c32-68']//input")
        return $("//input[@formcontrolname='line1']")
    }
    get apartmentNumber() {
        //return $("//div[@class='mat-form-field-infix ng-tns-c32-69']//input")
        return $("//input[@formcontrolname='line2']")
    }
    get pincode() {
        //return $("//div[@class='mat-form-field-infix ng-tns-c32-70']//input")
        return $("//input[@formcontrolname='zipCode']")
    }
    get city() {
        //return $("//div[@class='mat-form-field-infix ng-tns-c32-71']//input")
        //return $("//input[@formcontrolname='city']")
        return $("//input[@formcontrolname='city']")
    }
    get country() {
        //return $("//div[@class='mat-form-field-infix ng-tns-c32-72']//input")
        return $("//input[@formcontrolname='countryCode']")
    }
    get countrySelected() {
        return $("//span[@class='mat-option-text']")
    }
    get state() {
        //return $("//mat-select[@formcontrolname='state']")
        //return $("//div[@class='mat-select-value ng-tns-c96-77']//span")
        //return $("//span[@class='mat-select-placeholder mat-select-min-line ng-tns-c96-66 ng-star-inserted']")
        //return $("//div[@class='ng-tns-c96-68 ng-trigger ng-trigger-transformPanel mat-select-panel mat-primary']//mat-option//span[@class='mat-option-text']//span")
        //return $("//mat-option[@role='option']")
        return $("//span[contains(text(),'State or province')]")
    }
    get stateOption() {
        return $$("//mat-option[@role='option']//span[@class='mat-option-text']//span")
    }
    get termsCondition() {
        return $("//span[@class='mat-checkbox-inner-container']")
    }
    get pay() {
        //return $("#payment-button")
        return $("//button[@id='payment-button']")
    }

    get paymentval1() {
        return $("//div[@class='refx-title title']")
    }
    get paymenttype() {
        return $$(".mat-tab-label-content")
    }
    get onlinebanking() {
        return $("//mat-select[@role='combobox']")
    }

    get onlinebankingdropdown() {
        return $$(".vendor-option")
    }
    get paymentcheckbox() {
        return $(".mat-checkbox-inner-container")
    }
    get cardnumber() {
        return $("//input[@formcontrolname='cardNumber']")
    }
    get expirymonth() {
        return $("input[formcontrolname='first']")
    }
    get expiryyear() {
        return $("input[formcontrolname='last']")
    }

    get cardcvvnumber() {
        return $("//input[@formcontrolname='cvv']")
    }
    get paymentval3() {
        return $(".card-holder-info-title")
    }
    get cardname() {
        return $("input[formcontrolname='holderName']")
    }


    get address() {
        return $("//input[@formcontrolname='line1']")
    }
    get zipcode() {
        return $("input[formcontrolname='zipCode']")
    }
    get city() {
        return $("input[formcontrolname='city']")
    }
    get country() {
        return $("input[formcontrolname='countryCode']")
    }
    get countrydropdown() {
        return $$("mat-option[role='option']")
    }
    get state() {
        return $("mat-select[formcontrolname='state']")
    }
    get statedropdown() {
        return $$("span[class='mat-option-text']")
    }
    get checkbox() {
        return $(".mat-checkbox-inner-container")
    }
    get paymenttextval() {

        return $("//h2[contains(text(),'How')]")
    }
    get paymenttype1() {
        return $("#mat-tab-label-0-2")
    }
    get otherpaymentmethod() {
        return $("//div[text()='Other Payment Methods']")
    }
    get paymenticonval() {
        return $("//div[@class='payment-icons row']")
    }
    get paynow() {
        return $(".pay-now-button")
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
    get otherpayments()
    {
        return $("//span[contains(text(),'Other Payment Methods')]")
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
    get confirmationval() {
        return $(".refx-title")
    }
    get lasttitle() {
        return $(".refx-title.title")
    }
    get PNR() {
        return $(".recloc-id")
    }
    get loading() {
        return $("//img[@class='ng-star-inserted']")
    }

    get traveldocumentval() {
        return $("//h2[text()='Travel Document Details']")
    }
    get genderbutton() {
        return $$(".gender-button")
    }
    get tdnationality() {
        return $(".apis-regulatory-per-route-nationality")
    }
    get passportno() {
        return $(".apis-regulatory-per-route-document-number")
    }
    get passportexpiredate() {
        return $(".apis-regulatory-per-route-expiry-date")
    }
    get issuecountry() {
        return $(".apis-regulatory-per-route-issuance-country")
    }
    get malebutton() {
        return $("#mat-button-toggle-1-button")
    }
    get calender2() {
        return $("#_retdateeu1")
    }


    //Travel Document
    get travelDoc() {
        return $("//h2[@class='refx-display-3 apis-regulatory-per-route-header-title']")
    }
    get travelDocOptionalBtn() {
        return $("//span[@class='mat-slide-toggle-content']//span[@class='apis-regulatory-per-route-toggle-button-text refx-caption']")
    }
    get gender() {
        return $$("//mat-button-toggle//button")
    }
    get maleGender() {
        return $("//button[@id='mat-button-toggle-1-button']")
    }
    get femaleGender() {
        return $("//button[@id='mat-button-toggle-2-button']")
    }
    get undisclosedGender() {
        return $("//span[contains(text(),'Undisclosed')]")
    }
    get passportDetails() {
        return $("//div[contains(text(),'Passport Details')]")
    }
    get nationality() {
        return $(".apis-regulatory-per-route-nationality")
    }
    get passportNum() {
        return $("//div[@class='mat-form-field-flex ng-tns-c32-27']")
    }
    get passportNumInput() {
        return $(".apis-regulatory-per-route-document-number")
    }
    get passportExpiry() {
        return $(".apis-regulatory-per-route-expiry-date")
    }
    get passportIssueClick() {
        return $("//div[@class='mat-form-field-infix ng-tns-c32-29']")
    }
    get passportIssueCountry() {
            return $(".apis-regulatory-per-route-issuance-country")
        }
        //No flights Available
    get noflights() {
        return $("//div[text()='No flights found']")
    }
    get nextday() {
        return $$(".cell-content-top")
    }


    //Concessionary 

    get concessionaryType() {
        return $("#concessionaryType1")
    }
    get concessionaryTypeList() {
        return $$("//select[@id='concessionaryType1']/option")
    }
    get concession() {
        return $(".refx-title")
    }
    get armedForces1() {
        return $("//div[contains(text(),'Enter Details of Armed Forces 1')]")
    }
    get armedForces2() {
        return $("//div[contains(text(),'Enter Details of Armed Forces 2')]")
    }
    get armedForces3() {
        return $("//div[contains(text(),'Enter Details of Armed Forces 3')]")
    }
    get armedForces4() {
        return $("//div[contains(text(),'Enter Details of Armed Forces 4')]")
    }
    get armedForces5() {
        return $("//div[contains(text(),'Enter Details of Armed Forces 5')]")
    }
    get armedForces6() {
        return $("//div[contains(text(),'Enter Details of Armed Forces 6')]")
    }
    get armedForces7() {
        return $("//div[contains(text(),'Enter Details of Armed Forces 7')]")
    }
    get armedForces8() {
        return $("//div[contains(text(),'Enter Details of Armed Forces ')]")
    }
    get armedForces9() {
        return $("//div[contains(text(),'Enter Details of Armed Forces 9')]")
    }
    get braveryAwardee1() {
        return $("//div[contains(text(),'Enter Details of Armed Forces Bravery Awardee')]")
    }
    get braveryAwardee2() {
        return $("//div[contains(text(),'Enter Details of Armed Forces Bravery Awardee 2')]")
    }
    get braveryAwardee3() {
        return $("//div[contains(text(),'Enter Details of Armed Forces Bravery Awardee 3')]")
    }
    get braveryAwardee4() {
        return $("//div[contains(text(),'Enter Details of Armed Forces Bravery Awardee 4')]")
    }
    get braveryAwardee5() {
        return $("//div[contains(text(),'Enter Details of Armed Forces Bravery Awardee 5')]")
    }
    get braveryAwardee6() {
        return $("//div[contains(text(),'Enter Details of Armed Forces Bravery Awardee 6')]")
    }
    get braveryAwardee7() {
        return $("//div[contains(text(),'Enter Details of Armed Forces Bravery Awardee 7')]")
    }
    get braveryAwardee8() {
        return $("//div[contains(text(),'Enter Details of Armed Forces Bravery Awardee 8')]")
    }
    get braveryAwardee9() {
        return $("//div[contains(text(),'Enter Details of Armed Forces Bravery Awardee 9')]")
    }
    get paramilitaryForces1() {
        return $("//div[contains(text(),'Enter Details of Paramilitary Forces 1')]")
    }
    get paramilitaryForces2() {
        return $("//div[contains(text(),'Enter Details of Paramilitary Forces 2')]")
    }
    get paramilitaryForces3() {
        return $("//div[contains(text(),'Enter Details of Paramilitary Forces 3')]")
    }
    get paramilitaryForces4() {
        return $("//div[contains(text(),'Enter Details of Paramilitary Forces 4')]")
    }
    get paramilitaryForces5() {
        return $("//div[contains(text(),'Enter Details of Paramilitary Forces 5')]")
    }
    get paramilitaryForces6() {
        return $("//div[contains(text(),'Enter Details of Paramilitary Forces 6')]")
    }
    get paramilitaryForces7() {
        return $("//div[contains(text(),'Enter Details of Paramilitary Forces 7')]")
    }
    get paramilitaryForces8() {
        return $("//div[contains(text(),'Enter Details of Paramilitary Forces 8')]")
    }
    get paramilitaryForces9() {
        return $("//div[contains(text(),'Enter Details of Paramilitary Forces 9')]")
    }
    get reserveEngineer1() {
        return $("//div[contains(text(),'Enter Details of General Reserve Engineering Force 1')]")
    }
    get reserveEngineer2() {
        return $("//div[contains(text(),'Enter Details of General Reserve Engineering Force 2')]")
    }
    get reserveEngineer3() {
        return $("//div[contains(text(),'Enter Details of General Reserve Engineering Force 3')]")
    }
    get reserveEngineer4() {
        return $("//div[contains(text(),'Enter Details of General Reserve Engineering Force 4')]")
    }
    get reserveEngineer5() {
        return $("//div[contains(text(),'Enter Details of General Reserve Engineering Force 5')]")
    }
    get reserveEngineer6() {
        return $("//div[contains(text(),'Enter Details of General Reserve Engineering Force 6')]")
    }
    get reserveEngineer7() {
        return $("//div[contains(text(),'Enter Details of General Reserve Engineering Force 7')]")
    }
    get reserveEngineer8() {
        return $("//div[contains(text(),'Enter Details of General Reserve Engineering Force 8')]")
    }
    get reserveEngineer9() {
        return $("//div[contains(text(),'Enter Details of General Reserve Engineering Force 9')]")
    }
    get student1() {
        return $("//div[contains(text(),'Enter Details of Student 1')]")
    }
    get student2() {
        return $("//div[contains(text(),'Enter Details of Student 2')]")
    }
    get student3() {
        return $("//div[contains(text(),'Enter Details of Student 3')]")
    }
    get student4() {
        return $("//div[contains(text(),'Enter Details of Student 4')]")
    }
    get student5() {
        return $("//div[contains(text(),'Enter Details of Student 5')]")
    }
    get student6() {
        return $("//div[contains(text(),'Enter Details of Student 6')]")
    }
    get student7() {
        return $("//div[contains(text(),'Enter Details of Student 7')]")
    }
    get student8() {
        return $("//div[contains(text(),'Enter Details of Student 8')]")
    }
    get student9() {
        return $("//div[contains(text(),'Enter Details of Student 9')]")
    }
    get seniorCitizen1() {
        return $("//div[contains(text(),'Enter Details of Senior Citizen 1 information')]")
    }
    get seniorCitizen2() {
        return $("//div[contains(text(),'Enter Details of Senior Citizen 2 information')]")
    }
    get seniorCitizen3() {
        return $("//div[contains(text(),'Enter Details of Senior Citizen 3 information')]")
    }
    get seniorCitizen4() {
        return $("//div[contains(text(),'Enter Details of Senior Citizen 4 information')]")
    }
    get seniorCitizen5() {
        return $("//div[contains(text(),'Enter Details of Senior Citizen 5 information')]")
    }
    get seniorCitizen6() {
        return $("//div[contains(text(),'Enter Details of Senior Citizen 6 information')]")
    }
    get seniorCitizen7() {
        return $("//div[contains(text(),'Enter Details of Senior Citizen 7 information')]")
    }
    get seniorCitizen8() {
        return $("//div[contains(text(),'Enter Details of Senior Citizen 7 information')]")
    }
    get seniorCitizen9() {
        return $("//div[contains(text(),'Enter Details of Senior Citizen 9 information')]")
    }
    get warWidow1() {
        return $("//div[contains(text(),'Enter Details of War Widow 1')]")
    }
    get warWidow2() {
        return $("//div[contains(text(),'Enter Details of War Widow 2')]")
    }
    get warWidow3() {
        return $("//div[contains(text(),'Enter Details of War Widow 3')]")
    }
    get warWidow4() {
        return $("//div[contains(text(),'Enter Details of War Widow 4')]")
    }
    get warWidow5() {
        return $("//div[contains(text(),'Enter Details of War Widow 5')]")
    }
    get warWidow6() {
        return $("//div[contains(text(),'Enter Details of War Widow 6')]")
    }
    get warWidow7() {
        return $("//div[contains(text(),'Enter Details of War Widow 7')]")
    }
    get warWidow8() {
        return $("//div[contains(text(),'Enter Details of War Widow 8')]")
    }
    get warWidow9() {
        return $("//div[contains(text(),'Enter Details of War Widow 9')]")
    }
    get warDisabledOfficer1() {
        return $("//div[contains(text(),'Enter Details of War Disabled Officer 1')]")
    }
    get warDisabledOfficer2() {
        return $("//div[contains(text(),'Enter Details of War Disabled Officer 2')]")
    }
    get warDisabledOfficer3() {
        return $("//div[contains(text(),'Enter Details of War Disabled Officer 3')]")
    }
    get warDisabledOfficer4() {
        return $("//div[contains(text(),'Enter Details of War Disabled Officer 4')]")
    }
    get warDisabledOfficer5() {
        return $("//div[contains(text(),'Enter Details of War Disabled Officer 5')]")
    }
    get warDisabledOfficer6() {
        return $("//div[contains(text(),'Enter Details of War Disabled Officer 6')]")
    }
    get warDisabledOfficer7() {
        return $("//div[contains(text(),'Enter Details of War Disabled Officer 7')]")
    }
    get warDisabledOfficer8() {
        return $("//div[contains(text(),'Enter Details of War Disabled Officer 8')]")
    }
    get warDisabledOfficer9() {
        return $("//div[contains(text(),'Enter Details of War Disabled Officer 9')]")
    }

    //Promotion code
    get promotionCode() {
        return $("#pcode1")
    }

    //Aditional Services
    get addServiceTitle() {
        return $("//h2[contains(.,'Additional Services')]")
    }
    get seatslctbtn()
    {
        return $("//div[@class='category seat ng-star-inserted']//button")
    }
    get noseatmap()
    {
        return $("//p[@class='unavailable-content-title refx-display-3 ng-star-inserted']")
    }
    get skipseat()
    {
        return $("//span[contains(text(),'Skip seat selection')]")
    }
    get seatpax()
    {
        //return $$("//div[@class='mat-tab-label-content']")
        return $$(".traveler-name")
    }
    get freeseat()
    {
        return $$("//button[@class='seat-button selectable-button seat-characteristic-available available free-seat ng-star-inserted']")
    }
    get addExtraBaggage() {
        return $("//div[@class='category-recap-footer ng-star-inserted']//span[text()='Add extra bags']")
    }
    get baggageData() {
        return $$(".mat-select-arrow-wrapper")
    }
    get baggagearrow()
    {
        return $$("//div[@class='service-select-travelers']//span[text()='Please select an option.']")
        //return $$("//div[@class='mat-form-field-flex ng-tns-c32-105']")
    }
    get piecebag()
    {
        return $$("//i[@class='refx-icon-add']")
    }
    get baggagearrow1()
    {
        //return $$("//div[@class='service-select-travelers']//span[text()='Please select an option.']")
        return $$("//mat-select-trigger//span[contains(.,'Bag up to')]")
    }
    get baggageList() {
        return $$("//div[@role='listbox']//mat-option")
    }
    get baggageTitle() {
        return $("//strong[contains(text(),'Book Extra Baggage at the Best Price')]")
    }
    get selectionContinue() {
        return $("//div[@class='buttons-place']//span[@class='mat-button-wrapper']")
    }
    get continuebookingbtn()
    {
        return $("//button[@class='mat-focus-indicator continue-button mat-stroked-button mat-button-base']")
    }
    get removeABDropdown() {
        return $("//div[@class='row-action']//i[@class='recap-breakdown-icon ng-star-inserted refx-icon-chevron-top']")
    }
    get changeAB()
    {
        return $("//custom-service-category-pres[@id='baggage-service']//button//span[text()='Change']")
    }
    get removeExtraBags() {
        return $("//span[@class='mat-button-wrapper']//span[contains(text(),'Remove extra bags')]")
    }
    get removeBaggage() {
        return $("//button[@class='mat-focus-indicator delete mat-flat-button mat-button-base']//span[@class='mat-button-wrapper']//span[contains(text(),'Remove')]")
    }
    get requestService() {
        return $("//span[@class='mat-button-wrapper']//span[contains(text(),'Request Service')]")
    }
    get whcrTitle() {
        return $("//div[@class='ng-star-inserted']//h2")
    }
    get whcrDropdown() {
        return $$("//span[contains(.,'Select your wheelchair')]")
        //return $("(//span[text()='Select your wheelchair'])[1]")
    }
    get whcrToRamp() {
        return $("//span[@class='mat-option-text']//span[contains(text(),'Wheelchair to ramp')]")
    }
    get whcrContinue() {
        return $("//span[@class='mat-button-wrapper']//span[contains(text(),'Continue')]")
    }
    get whcrCancel()
    {
        return $("//button[@class='mat-focus-indicator close-btn-bottom mat-stroked-button mat-button-base ng-star-inserted']")
    }
    get whcrcontbooking()
    {
        return $("//span[text()='Continue the flow']")
    }
    get meals()
    {
        return $("//span[contains(text(),'Choose Meal')]")
    }
    get mealsslct()
    {
        return $$("//span[contains(text(),'Select your meal')]")
    }
    get mealsoptions()
    {
        //return $$("//span[@class='subcategory-service-label ng-star-inserted']")
        return $$("//span[@class='mat-option-text']//span[@class='subcategory-service-label ng-star-inserted']")
    }
    get flightstopmeals()
    {
        return $$("//div[@class='ng-star-inserted']//h2")
    }

}
module.exports = new oneWaypo()