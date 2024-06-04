class managebooking {
  get mainpageval() {
    //return $("//div[@class='navbar navbar-expand-lg']//a[@class='air-brand']//img[@alt='Air India']")
    //return $("//img[@src='/content/dam/air-india/logos/AirIndia_white_logo.svg']")
    return $("//div[@class='container-bs aic']//a[@class='logo-img dark']//img[@alt='Air India Logo']")
  }
  get buttonManageBook() {

    return $("//div[@id='mat-tab-label-0-1']")
  }
  get Managebooking() {
    return $("#profile")
  }
  get returntoMB() {
    return $("//button[@class='btn btn-default button-manage-booking']")
  }
  get textboxBookingRef() {

    return $("//input[@id='pnr-ip-id']")
  }
  get textboxLastname() {
    return $("//input[@id='lastname-ip-id']")
  }
  get buttonSubmit() {
    return $(".booking-flight-btn")
  }
  get textPNRrefval() {
    return $("//div[@class='reservation']/span")
  }
  get buttonCancelandRefund() {
    return $("//span[text()='Cancel and refund']")
  }
  get textRefundVal() {
    return $(".bread-crumb-title")
  }
  get buttonConfirmRefund() {
    return $(".confirm-refund")
  }
  get page_loader() {
    //return $("//div[@class='loading ng-star-inserted']/img")
    return $('//div[contains(@class,"contained")]')
  }
  get classText()
  {
    return $("//div[@class='text']")
  }
  get textConfirmation() {
    return $(".cancelled-banner")
  }
  get gotohome() {
    return $(".go-home")
  }
  get textManageBooking() {
    return $("//span[text()='Manage Booking']")
  }
  get optionManageBooking() {
    return $$("//ul[@class='dropdown-menu dropdown-body']//li/a")
  }
  get textContactDetails() {
    return $(".traveller-contact-information-title")
  }
  get textBasicDetails() {
    return $$(".apim-card-title-after-validation")
  }
  get textboxDobDate() {
    return $$("//input[contains(@id,'ADT-PSPT_0-IDEN_DateOfBirth-DateDay')]")
  }
  get dropdownDobMonth() {
    return $$("//select[contains(@id,'ADT-PSPT_0-IDEN_DateOfBirth-DateMonth')]")
  }
  get textboxDobYear() {
    return $$("//input[contains(@id,'ADT-PSPT_0-IDEN_DateOfBirth-DateYear')]")
  }
  get buttonGoToNext() {
    return $$("//button//span[text()='Go to next']")
  }
  get email() {
    return $("//input[@name='Email']")
  }
  get countrycode() {
    return $("#tpl3_widget-input-apimTravellers-contactInformation-PhoneMobileCode")
  }
  get countrycodeoptions() {
    return $("//select[@name='PSPT_DocumentIssuingCountry']//option")
  }
  get expday() {
    return $("//input[@id='tpl3_widget-input-travellerListAdvanced-traveller_0_ADT-PSPT_0-PSPT_DocumentExpiryDate-DateDay']")
  }
  get textboxExpiryDay1() {
    return $$("//input[contains(@id,'PSPT_0-PSPT_DocumentExpiryDate-DateDay')]")
  }
  get expmonth() {
    return $("//select[@id='tpl3_widget-input-travellerListAdvanced-traveller_0_ADT-PSPT_0-PSPT_DocumentExpiryDate-DateMonth']")
  }
  get dropdownExpiryMonth1() {
    return $$("//select[contains(@id,'PSPT_0-PSPT_DocumentExpiryDate-DateMonth')]")
  }
  get expyear() {
    return $("//input[@id='tpl3_widget-input-travellerListAdvanced-traveller_0_ADT-PSPT_0-PSPT_DocumentExpiryDate-DateYear']")
  }
  get textboxExpiryYear1() {
    return $$("//input[contains(@id,'PSPT_0-PSPT_DocumentExpiryDate-DateYear')]")
  }
  get phonenumber() {
    return $("#tpl3_widget-input-apimTravellers-contactInformation-PhoneMobile")

  }
  get confirmemail() {
    return $("//input[@name='EmailConfirm']")
  }
  get textboxEmail2() {
    return $("//input[@name='Email2']")
  }
  get textboxEmail3() {
    return $("//input[@name='Email3']")
  }
  get textboxEmergencyName() {
    return $("//input[@name='SosName']")
  }
  get textboxEmergencyCountryCode() {
    return $("#tpl3_widget-input-apimTravellers-contactInformation-SosPhoneCode")
  }
  get textboxEmergencyPhoneNumber() {
    return $("//input[@name='SosPhone']")
  }
  get continue() {
    return $$(".tripsummary-btn-primary")
  }
  get additionalservice() {
    return $(".btn-add-services")
  }
  get textAdditionalServiceval() {
    return $(".current")
  }
  get buttonAddBaggage() {
    return $("//button[text()='Add baggage']")
  }
  get iconAddBaggage() {
    return $(".catalogServices-dialog-header-icon")
  }
  get dropdownAddBaggage() {
    return $$("//select[@class='form-control']")
  }
  get addbaggagelist() {
    return $$("//select[@class='form-control']/option")
  }
  get buttonConfirmBaggage() {
    return $(".serviceSummary-primary-btn-text")
  }
  get buttonAddPiecebag() {
    return $$("//span[@class='icon-plus']")
  }
  get travellername() {
    return $$(".traveller-name")
  }
  get textBookingconfirmation() {
    return $(".subtitle")
  }
  get textBookingconfirmation1() {
    return $(".reservation-banner")
  }
  get pnrdata() {
    return $("//div[@class='reservation']//span[@class='number']")
  }
  get buttonContinueMD() {
    return $("//div[@class='tripsummary-btn tripsummary-button-validate']//button[@class='plnext-widget-btn btn btn-primary tripsummary-btn-primary tripSummary-btn-continue tripsummary-btn-validate validate-btn']//span[text()='continue']")
  }
  get buttonContinue() {
    return $("//span[text()='continue']")
  }
  get textStatus() {
    return $(".bs-example")
  }
  get dropdownStatus() {
    return $("#BankStatus")
  }
  get buttonSubmitPayment() {
    return $("//button[@name='formSubmit']")
  }
  get textConfirmationVal() {
    return $("//h1[normalize-space()='Services confirmation']")
  }
  get confirmpageload() {
    //return $("//img[@class='ng-star-inserted']")
    //return $(".loading-content")
    return $("//div[@class='loading-content']")
  }
  get buttonContinueFlow() {
    return $("//span[text()='Continue the flow']")
  }
  get textInternetBanking() {
    return $("#tab5")
  }
  get dropdownSelectBank() {
    return $("#txtBankIDBK")
  }
  get optionBank() {
    return $("//select[@id='txtBankIDBK']//option[contains(text(),'Test Bank')]")
  }
  get buttonMakePayment() {
    return $("#proceedForm")
  }
  get serviceconfirmation() {
    return (".status-banner-text")
  }
  get textPaymentVal() {
    return $("//span[@class='heading-text'][text()='Select Method of Payment']")
  }

  get buttonAdditionalService() {
    return $("//span[text()='Additional Services']")
  }
  get page_loader() {
    //return $("//div[@class='loading ng-star-inserted']/img")
    return $("//img[@src='assets/img/animation/animation-loader.svg']")
  }
  get textPageSubtitle() {
    return $(".subtitle")
  }
  get textFlights() {
    return $("//span[text()='Flights']")
  }





  //    RE ISSUE

  get buttonSegments() {
    return $$(".dialog-tabs-flight")
  }
  get buttonRightArrow() {
    return $(".icon-circle-arrow-right")
  }
  get buttonModifyFlight() {
    return $("//span[text()='Modify Flights']")
  }
  get textSegment1() {
    return $("//label[@for='tpl3_widget-input-itineraryReviewForm-checkBound0']")
  }
  get textSegment2() {
    return $("//label[@for='tpl3_widget-input-itineraryReviewForm-checkBound1']")
  }
  get textSegment3() {
    return $("//label[@for='tpl3_widget-input-itineraryReviewForm-checkBound2']")
  }
  get textSegment4() {
    return $("//label[@for='tpl3_widget-input-itineraryReviewForm-checkBound3']")
  }

  get mandatoryelement() {
    return $$("//*[@class='control-label mandatory-label']")
  }

  get textboxSeg1From() {
    return $("#tpl3_widget-input-itineraryReviewForm-origin0")
  }
  get textboxSeg2From() {
    return $("#tpl3_widget-input-itineraryReviewForm-origin1")
  }
  get textboxSeg3From() {
    return $("#tpl3_widget-input-itineraryReviewForm-origin2")
  }
  get textboxSeg4From() {
    return $("#tpl3_widget-input-itineraryReviewForm-origin3")
  }
  get textboxSeg1to() {
    return $("#tpl3_widget-input-itineraryReviewForm-destination0")
  }
  get textboxSeg2To() {
    return $("#tpl3_widget-input-itineraryReviewForm-destination1")
  }
  get textboxSeg3To() {
    return $("#tpl3_widget-input-itineraryReviewForm-destination2")
  }
  get textboxSeg4To() {
    return $("#tpl3_widget-input-itineraryReviewForm-destination3")
  }
  get optionCity() {
    return $(".autocompleteBox-item-line")
  }
  get textboxDepartingDate1() {
    return $("#tpl3_widget-input-itineraryReviewForm-beginDate0")
  }
  get textboxDepartingDate2() {
    return $("#tpl3_widget-input-itineraryReviewForm-beginDate1")
  }
  get textboxDepartingDate3() {
    return $("#tpl3_widget-input-itineraryReviewForm-beginDate2")
  }
  get textboxDepartingDate4() {
    return $("#tpl3_widget-input-itineraryReviewForm-beginDate3")
  }
  get anytime1() {
    return $("#tpl3_widget-input-itineraryReviewForm-targetTime0")
  }
  get anytimelist1() {
    $$("//select[@name='targetTime0']/option")
  }
  get buttonSeg1Continue() {
    return $("//div[@class='tripsummary-btn tripsummary-button-validate']//span[text()='continue']")
  }
  get dropdownGender() {
    return $$("//select[@name='IDEN_Gender']")
  }
  get childgender() {
    return $$("//select[contains(@id,'CHD-PSPT_0-IDEN_Gender')]")
  }
  get infantgender() {
    return $$("//select[contains(@id,'INF-PSPT_0-IDEN_Gender')]")
  }
  get nationality() {
    return $("//select[@name='IDEN_Nationality']")
  }
  get nationalityoptions() {
    return $("//select[@name='IDEN_Nationality']//option")
  }
  get dropdownNationality() {
    return $$("//select[@name='IDEN_Nationality']")
  }
  get mpdnationalityoptions() {
    return $$("//select[@name='IDEN_Nationality']//option")
  }
  get textboxDocNumber() {
    return $$("//input[@name='PSPT_DocumentNumber']")
  }
  get dropdownCountryCode1() {
    return $$("//select[@name='PSPT_DocumentIssuingCountry']")
  }
  get docnumber() {
    return $("//input[@name='PSPT_DocumentNumber']")
  }
  get countrycode1() {
    return $("//select[@name='PSPT_DocumentIssuingCountry']")
  }
  get dropdownDocumentType() {
    return $$("//select[@name='PSPT_DocumentType']")
  }
  get textTravelerTitle() {
    return $$(".travellerList-title")
  }
  get iconFilter() {
    return $(".icon-filter")
  }
  get iconFlightList() {
    return $$(".icon-chevron-down")
  }
  get listSeg2Flights() {
    return $$("//div[@id='tpl4_availability-bound-1']//div[@id='tpl4_availability-elements-bound1']//div[@class='slideDown flights-elements-shadow']//div[@id='tpl4_bound1-bound-table']//div[@id='tpl4_upsell-bound1']//label[@class='fare-group-header']")
  }
  get textCabin() {
    return $$(".availability-recommendation-title")
  }
  get radiobuttonCabin() {
    return $$(".availability-recommendation-sidebar-radio")
  }
  get listReturnCabin() {
    return $$("//div[@id='tpl4_availability-bound-1']//div[@class='availability-recommendation-title']")
  }
  get radiobuttonReturncabin() {
    return $$("//div[@id='tpl4_availability-bound-1']//label[@class='availability-recommendation-sidebar-radio']")
  }
  get cabinUnavailable() {
    return $$("//div[contains(@class,'availability-list-fares')]//div[@class='availability-list-fares-reco fare-group-0 ffcode-WSPECOININ availability-list-fares-reco-unavailable']//div[@class='availability-recommendation table-row-display bound-table-cell-reco bound-table-cell-reco-unavailable']")
  }
  get DepartCabin() {
    return $$("//div[@id='availability-schedule-outboundsection']//div[contains(@class,'availability-schedule-cabin-container')]")
  }
  get ReturnCabin() {
    return $$("//div[@id='availability-schedule-inboundsection']//div[contains(@class,'availability-schedule-cabin-container')]")
  }
  get DepartFlights() {
    return $("//div[@id='availability-schedule-outboundsection']")
  }
  get ReturnFlights() {
    return $("//div[@id='availability-schedule-inboundsection']")
  }
  get buttonAddService() {
    return $("//button[text()='Add Service']")
  }
  get textAddServiceVal() {
    return $(".dialog-title")
  }
  get buttonWheelchair() {
    return $$("//select[@class='form-control']")
  }
  get wcbuttonlist() {
    return $$("//select[@class='form-control']/option")
  }
  get buttonWcConfirm() {
    return $("//span[contains(text(),'Confirm')]")
  }
  get buttonAddMeal() {
    return $("//button[text()='Add Meal']")
  }
  get textMealVal() {
    return $(".dialog-title")
  }
  get dropdownMeal() {
    return $$("//select[@class='form-control']")
  }
  get meallist() {
    return $$("//select[@class='form-control']/option")
  }
  get buttonMealConfirm() {
    return $("//span[contains(text(),'Confirm')]")
  }
  get buttonSeat() {
    return $("//button[text()='Select your Seat']")
  }
  get viewseat() {
    return $("//button[text()='Edit your Seat']")
  }
  get textSeatVal() {
    return $(".dialog-title")
  }
  get radiobuttonPassenger() {
    return $$("//input[@type='radio']")
  }
  get buttonPreferedSeat() {
    return $$("//div[contains(@class,'uicSquare icon-seat-chargeable')]")
  }
  get buttonFreeSeat() {
    return $$("//div[contains(@class,'uicSquare icon-seat-available')]")
  }
  get buttonExtralegroomSeat() {
    return $$("//tr[@class='seats-row  extra-leg-row']//div[contains(@class,'uicSquare icon-seat-discount')]")
  }
  get buttonSeatConfirm() {
    return $("//span[contains(text(),'Confirm')]")
  }
  get buttonConfirmSeat() {
    return $(".btn-confirm-seat")
  }
  get confirmpageload() {
    return $("//img[@class='ng-star-inserted']")
  }

  /// net banking

  get radiobuttonNetbanking() {
    return $("//input[contains(@id,'AI_NETBANKING')]")
  }
  get reissuenetbanking() {
    return $("#tpl4_li_AI_NETBANKING")
  }
  get creditcard() {
    return $("#tpl3_radio_CC")
  }
  get aexpcard() {
    return $("//img[@alt='American Express']")
  }
  get cardnumber() {
    return $("//input[@name='cardNumber']")
  }
  get cvv() {
    return $("//input[@name='securityCode']")
  }
  get cardexpmonth() {
    return $("//select[@name='ccMonth']")
  }
  get cardexpyear() {
    return $("//select[@name='ccYear']")
  }
  get cardholdername() {
    return $("//input[@name='nameOnCard']")
  }
  get cardemail() {
    return $("//input[@name='cardHolderEmail']")
  }
  get cardmobile() {
    return $("//input[@name='cardHolderPhone']")
  }
  get cardhouseno() {
    return $("//input[@name='ccAddressFirstLine']")
  }
  get cardaddress() {
    return $("//input[@name='ccAddressSecondLine']")
  }
  get cardpincode() {
    return $("//input[@name='ccPostalCode']")
  }
  get cardcity() {
    return $("//input[@name='ccCity']")
  }
  get cardcountry() {
    return $("//select[@name='ccCountry']")
  }
  get cardstate() {
    return $("//select[@name='ccState']")
  }
  get radiobuttonEmi() {
    return $("#tpl3_radio_AI_EMI")
  }
  get radiobuttonWallet() {
    return $("#tpl3_radio_AI_WALLET")
  }
  get radiobuttonRupay() {
    return $("tpl3_radio_AI_RUPAY")
  }
  get radiobuttonUpi() {
    return $("#tpl3_radio_AI_UPI")
  }
  get farebasisscroll() {
    return $(".tripsummary-btn-fareBasisInformation-label")
  }
  get checkboxTerms() {
    return $("//Strong[contains(text(),'Yes,')]")
  }
  get reissueterms() {
    //return $("//label[@for='w13_widget-input-purchaseForm-termsConditionsForm-termsAndCondition']/strong")
    return $("//input[contains(@id,'widget-input-purchaseForm-termsConditionsForm-termsAndCondition')]")

  }
  get conditionbox() {
    return $("#w10_widget-input-purchaseForm-termsConditionsForm-termsAndCondition")

  }
  get buttonContinuePay() {
    return $("//span[@class='plnext-widget-btn-text one-icon']")
  }
  get optionStatus() {
    return $$("//select[@id='BankStatus']/option")
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

}
module.exports = new managebooking()