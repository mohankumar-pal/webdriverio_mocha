class managebooking {
  get buttonGoToHome() {
    return $('.incident-top-button')
  }

  get mainpageval() {
    //return $("//div[@class='navbar navbar-expand-lg']//a[@class='air-brand']//img[@alt='Air India']")
    //return $("//img[@src='/content/dam/air-india/logos/AirIndia_white_logo.svg']")
    return $("//div[@class='container-bs aic']//a[@class='logo-img dark']//img[@alt='Air India Logo']")
  }
  get labelManageBooking() {

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
  get textboxLastName() {
    return $("//input[@id='lastname-ip-id']")
  }
  get buttonSubmit() {
    return $(".booking-flight-btn")
  }
  get labelPNRRefVal() {
    return $("//div[@class='reservation']/span")
  }
  get textCancelRefund() {
    return $("//span[text()='Cancel and refund']")
  }
  get labelRefundVal() {
    return $(".bread-crumb-title")
  }
  get buttonConfirmRefund() {
    return $(".confirm-refund")
  }
  get textConfirmation() {
    //return $(".cancelled-banner")
    return $("//h2[@class='panel-title cancelled-banner']//span")
  }
  get gotohome() {
    return $(".go-home")
  }
  get textManageBooking() {
    return $("//span[text()='Manage Booking']")
  }
  get managebookinglist() {
    return $$("//ul[@class='dropdown-menu dropdown-body']//li/a")
  }
  get termscond() {
    return $(".checkbox")
  }
  get contactdetails() {
    return $(".traveller-contact-information-title")
  }
  get basicdetails() {
    return $$(".apim-card-title-after-validation")
  }
  get titleScroll() {
    return $(".title")
  }
  get textboxDobDate() {
    //return $$("//input[contains(@id,'ADT-PSPT_0-IDEN_DateOfBirth-DateDay')]")
    return $$("//input[contains(@id,'IDEN_DateOfBirth-DateDay')]")
  }
  get textboxDobMonth() {
    //return $$("//select[contains(@id,'ADT-PSPT_0-IDEN_DateOfBirth-DateMonth')]")
    return $$("//select[contains(@id,'IDEN_DateOfBirth-DateMonth')]")
  }
  get textboxDobYear() {
    //return $$("//input[contains(@id,'ADT-PSPT_0-IDEN_DateOfBirth-DateYear')]")
    return $$("//input[contains(@id,'IDEN_DateOfBirth-DateYear')]")
  }
  get buttonGotoNext() {
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
  get textboxExpDay() {
    return $$("//input[contains(@id,'PSPT_0-PSPT_DocumentExpiryDate-DateDay')]")
  }
  get expmonth() {
    return $("//select[@id='tpl3_widget-input-travellerListAdvanced-traveller_0_ADT-PSPT_0-PSPT_DocumentExpiryDate-DateMonth']")
  }
  get textboxExpMonth1() {
    return $$("//select[contains(@id,'PSPT_0-PSPT_DocumentExpiryDate-DateMonth')]")
  }
  get expyear() {
    return $("//input[@id='tpl3_widget-input-travellerListAdvanced-traveller_0_ADT-PSPT_0-PSPT_DocumentExpiryDate-DateYear']")
  }
  get textboxExpYear1() {
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
  get boxAutoComplete() {
    return $(".autocompleteBox-item")
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
  get labelAdditionalServiceVal() {
    //return $(".bread-crumb-title")
    return $(".current")
  }
  get buttonAddBaggage() {
    return $("//button[text()='Add baggage']")
  }
  get labelAddBaggageVal() {
    return $(".catalogServices-dialog-header-icon")
  }
  get buttonAddBaggageBox() {
    return $$("//select[@class='form-control']")
  }
  get drpdwnAddBaggageList() {
    return $$("//select[@class='form-control']/option")
  }
  get buttonAddBaggageConfirm() {
    return $(".serviceSummary-primary-btn-text")
  }
  get iconAddPieceBag() {
    return $$("//span[@class='icon-plus']")
  }
  get travellername() {
    return $$(".traveller-name")
  }
  get labelBookConfirmtitle() {
    return $(".subtitle")
  }
  get labelBookConfirmtitle1() {
    return $(".reservation-banner")
  }
  get pnrdata() {
    return $("//div[@class='reservation']//span[@class='number']")
  }
  get buttonPaxContinue() {
    return $("//div[@class='tripsummary-btn tripsummary-button-validate']//button[@class='plnext-widget-btn btn btn-primary tripsummary-btn-primary tripSummary-btn-continue tripsummary-btn-validate validate-btn']//span[text()='continue']")
  }
  get textABContinue() {
    return $("//span[text()='continue']")
  }
  get selectval() {
    return $(".bs-example")
  }
  get selectdropdown() {
    return $("#BankStatus")
  }
  get paymentsubmit() {
    return $("//button[@name='formSubmit']")
  }
  get labelConfirmationVal2() {
    return $("//h1[normalize-space()='Services confirmation']")
  }
  get confirmpageload() {
    //return $("//img[@class='ng-star-inserted']")
    //return $(".loading-content")
    return $("//div[contains(@class,'loading-content')]")
  }
  get textContinueFlow() {
    return $("//span[text()='Continue the flow']")
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
  get serviceconfirmation() {
    return (".status-banner-text")
  }
  get labelPaymentMethod() {
    //return $(".subtitle")
    return $("//span[@class='heading-text'][text()='Select Method of Payment']")
  }

  get buttonAdditiionalService() {
    return $("//span[text()='Additional Services']")
  }
  get pagesubtitle() {
    return $(".subtitle")
  }
  get textFlights() {
    return $("//span[text()='Flights']")
  }
  get labelReservation() {
    return $(".reservation")
  }





  //    RE ISSUE

  get tabSegmentList() {
    //return $$(".itinerary")
    return $$(".dialog-tabs-flight")
  }
  /* get segmentlist()
 {
   return $$(".tab-header")
 } */
  get drpdownModifyFlight() {
    return $("//span[text()='Modify Flights']")
  }
  get textboxSegment1() {
    return $("//label[@for='tpl3_widget-input-itineraryReviewForm-checkBound0']")
  }
  get textboxSegment2() {
    return $("//label[@for='tpl3_widget-input-itineraryReviewForm-checkBound1']")
  }
  get textboxSegment3() {
    return $("//label[@for='tpl3_widget-input-itineraryReviewForm-checkBound2']")
  }
  get textboxSegment4() {
    return $("//label[@for='tpl3_widget-input-itineraryReviewForm-checkBound3']")
  }

  get mandatoryelement() {
    return $$("//*[@class='control-label mandatory-label']")
  }

  get textboxSegment1From() {
    return $("#tpl3_widget-input-itineraryReviewForm-origin0")
  }
  get textboxSegment2From() {
    return $("#tpl3_widget-input-itineraryReviewForm-origin1")
  }
  get textboxSegment3From() {
    return $("#tpl3_widget-input-itineraryReviewForm-origin2")
  }
  get textboxSegment4From() {
    return $("#tpl3_widget-input-itineraryReviewForm-origin3")
  }
  get textboxSegment1To() {
    return $("#tpl3_widget-input-itineraryReviewForm-destination0")
  }
  get textboxSegment2To() {
    return $("#tpl3_widget-input-itineraryReviewForm-destination1")
  }
  get textboxSegment3To() {
    return $("#tpl3_widget-input-itineraryReviewForm-destination2")
  }
  get textboxSegment4To() {
    return $("#tpl3_widget-input-itineraryReviewForm-destination3")
  }
  get citysuggestion() {
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
  get buttonSegment1Continue() {
    //return $("//span[text()='continue']")
    return $("//div[@class='tripsummary-btn tripsummary-button-validate']//span[text()='continue']")
  }
  get drpdownGender() {
    return $$("//select[contains(@name,'IDEN_Gender')]")
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
  get textboxNationality() {
    return $$("//select[@name='IDEN_Nationality']")
  }
  get mpdnationalityoptions() {
    return $$("//select[@name='IDEN_Nationality']//option")
  }
  get textboxDocumentNumber() {
    return $$("//input[@name='PSPT_DocumentNumber']")
  }
  get textboxCountryCode() {
    return $$("//select[@name='PSPT_DocumentIssuingCountry']")
  }
  get docnumber() {
    return $("//input[@name='PSPT_DocumentNumber']")
  }
  get countrycode1() {
    return $("//select[@name='PSPT_DocumentIssuingCountry']")
  }
  get drpdownDocumentType() {
    return $$("//select[@name='PSPT_DocumentType']")
  }
  get labelTravelerTitle() {
    return $$(".travellerList-title")
  }
  get iconFilter() {
    return $(".icon-filter")
  }
  get iconFlightList() {
    return $$(".icon-chevron-down")
  }
  get radioSegment2FlightList() {

    //return $$("//div[@id='tpl4_upsell-bound1']//div[@class='bound-table-flightline  col-xs-24']//div[@class='bound-table-flightline-details']//div[@data-n-of-cells='6']//label[@class='fare-group-header']")
    //return $$("//div[@id='tpl4_upsell-bound1']//div[@class='bound-table-flightline  col-xs-24']//div[@class='bound-table-flightline-details']//div[@class='fare-group-selection-icon']")
    return $$("//div[@id='tpl4_availability-bound-1']//div[@id='tpl4_availability-elements-bound1']//div[@class='slideDown flights-elements-shadow']//div[@id='tpl4_bound1-bound-table']//div[@id='tpl4_upsell-bound1']//label[@class='fare-group-header']")
  }
  get textCabin() {
    return $$(".availability-recommendation-title")
  }
  get radioCabinList() {
    return $$(".availability-recommendation-sidebar-radio")
  }
  get radioReturnCabinlist() {
    //return $$("//div[@id='tpl4_availabilityListFare-bound-1-flight-0-fareGroup-0']//div[@class='fare-group-details']//div[@class='fare-group-left-panel']//div[@id='s8']//div[@class='fare-container-row bound-table-flightline-fare-family-list']//div[@class='availability-table-fare-rows-cells']//fieldset//div[@class='availability-list-fares']//div[contains(@class,'availability-list-fares-reco')]//div[@class='availability-recommendation table-row-display bound-table-cell-reco']//div[@class='col-xs-16 availability-recommendation-content ']//div[@class='row availability-reco-content-row']//div[@class='col-xs-20']//div[@class='availability-recommendation-title']")
    //return $$("//div[@id='tpl4_availabilityListFare-bound-1-flight-11-fareGroup-0']//div[@class='fare-group-details']//div[@class='fare-group-left-panel']//div[@id='s8']//div[@class='fare-container-row bound-table-flightline-fare-family-list']//div[@class='availability-table-fare-rows-cells']//fieldset//div[@class='availability-list-fares']//div[contains(@class,'availability-list-fares-reco')]//div[@class='availability-recommendation table-row-display bound-table-cell-reco']//div[@class='col-xs-16 availability-recommendation-content ']//div[@class='row availability-reco-content-row']//div[@class='col-xs-20']//div[@class='availability-recommendation-title']")
    //return $$("//div[@class='fare-group-container fare-group-container-ALL']//div[@class='fare-group-details']//div[@class='fare-group-left-panel']//div[@id='s21']//div[@class='fare-container-row bound-table-flightline-fare-family-list']//div[@class='availability-table-fare-rows-cells']//fieldset//div[@class='availability-list-fares']//div[contains(@class,'availability-list-fares-reco')]//div[@class='availability-recommendation table-row-display bound-table-cell-reco']//div[@class='col-xs-16 availability-recommendation-content ']//div[@class='row availability-reco-content-row']//div[@class='col-xs-20']//div[@class='availability-recommendation-title']")
    return $$("//div[@id='tpl4_availability-bound-1']//div[@class='availability-recommendation-title']")
    //return $$("//div[@class='fare-group-container fare-group-container-ALL']//div[@class='fare-group-details']//div[@class='fare-group-left-panel']//div[@class='fare-container-row bound-table-flightline-fare-family-list']//div[@class='availability-table-fare-rows-cells']//fieldset//div[@class='availability-list-fares']//div[contains(@class,'availability-list-fares-reco')]//div[@class='availability-recommendation table-row-display bound-table-cell-reco']//div[@class='col-xs-16 availability-recommendation-content ']//div[@class='row availability-reco-content-row']//div[@class='col-xs-20']//div[@class='availability-recommendation-title']")
    //return $$("//div[@class='fare-group-container fare-group-container-ALL']//div[@class='fare-group-details']//div[@class='fare-group-left-panel']//div[@atdelegate='d815']//div[@class='fare-container-row bound-table-flightline-fare-family-list']//div[@class='availability-table-fare-rows-cells']//fieldset//div[@class='availability-list-fares']//div[contains(@class,'availability-list-fares-reco')]//div[@class='availability-recommendation table-row-display bound-table-cell-reco']//div[@class='col-xs-16 availability-recommendation-content ']//div[@class='row availability-reco-content-row']//div[@class='col-xs-20']//div[@class='availability-recommendation-title']")
  }
  get returnCabinSelection() {
    return $$("//div[contains(@id,'availability-bound-1')]//label[@class='availability-recommendation-sidebar-radio']")
  }
  get cabinUnavailable() {
    //return $$(".bound-table-cell-reco-unavailable")
    //return $(".icon.icon-ban-circle")
    return $$("//div[contains(@class,'availability-list-fares')]//div[@class='availability-list-fares-reco fare-group-0 ffcode-WSPECOININ availability-list-fares-reco-unavailable']//div[@class='availability-recommendation table-row-display bound-table-cell-reco bound-table-cell-reco-unavailable']")
  }
  get textScroll() {
    return $("//div[@class='text']")
  }
  get buttonAddService() {
    return $("//button[text()='Add Service']")
  }
  get labelAddServiceVal() {
    return $(".dialog-title")
  }
  get buttonWheelChair() {
    return $$("//select[@class='form-control']")
  }
  get wcbuttonlist() {
    return $$("//select[@class='form-control']/option")
  }
  get buttonWheelChairConfirm() {
    return $("//span[contains(text(),'Confirm')]")
  }
  get buttonAddMeal() {
    return $("//button[text()='Add Meal']")
  }
  get labelMealVal() {
    return $(".dialog-title")
  }
  get buttonMeals() {
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
  get labelSeatVal() {
    return $(".dialog-title")
  }
  get radioPassengerList() {
    return $$("//input[@type='radio']")
  }
  get preferedSeat() {
    return $$("//div[contains(@class,'uicSquare icon-seat-chargeable')]")
    //0return $$("//div[contains(@class,'uicSquare icon-seat-discount')]")
  }
  get freeSeat() {
    return $$("//div[contains(@class,'uicSquare icon-seat-available')]")
  }
  get extraLegroomSeat() {
    return $$("//tr[@class='seats-row  extra-leg-row']//div[contains(@class,'uicSquare icon-seat-discount')]")
  }
  get buttonSeatConfirm() {
    return $("//span[contains(text(),'Confirm')]")
  }
  get buttonSeatConfirm1() {
    return $(".btn-confirm-seat")
  }
  get confirmpageload() {
    return $("//img[@class='ng-star-inserted']")
  }

  /// net banking

  get netbanking() {
    //return $("#tpl3_li_AI_NETBANKING")
    return $("//input[contains(@id,'AI_NETBANKING')]")
  }
  get reissuenetbanking() {
    return $("#tpl4_li_AI_NETBANKING")
  }
  get creditcard() {
    return $("//input[contains(@id,'radio_CC')]")
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
  get emi() {
    return $("#tpl3_radio_AI_EMI")
  }
  get wallet() {
    return $("#tpl3_radio_AI_WALLET")
  }
  get rupay() {
    return $("tpl3_radio_AI_RUPAY")
  }
  get upi() {
    return $("#tpl3_radio_AI_UPI")
  }
  get farebasisscroll() {
    return $(".tripsummary-btn-fareBasisInformation-label")
  }
  get terms() {
    //return $("//label[@for='w11_widget-input-purchaseForm-termsConditionsForm-termsAndCondition']/strong")
    //return $("//input[@id='w11_widget-input-purchaseForm-termsConditionsForm-termsAndCondition']")
    return $("//Strong[contains(text(),'Yes,')]")
  }
  get reissueterms() {
    //return $("//label[@for='w13_widget-input-purchaseForm-termsConditionsForm-termsAndCondition']/strong")
    return $("//input[contains(@id,'widget-input-purchaseForm-termsConditionsForm-termsAndCondition')]")

  }
  get conditionbox() {
    return $("#w10_widget-input-purchaseForm-termsConditionsForm-termsAndCondition")

  }
  get paycontinue() {
    //return  $("//span[text()='continue']")
    return $("//span[@class='plnext-widget-btn-text one-icon']")
    //return $("//button[@class='plnext-widget-btn btn btn-primary tripsummary-btn-primary tripSummary-btn-continue tripsummary-btn-validate validate-btn']")
  }
  get selectdropdownlist() {
    return $$("//select[@id='BankStatus']/option")
  }
  get edityourseat() {
    return $("//button[normalize-space()='Edit your Seat']")
  }
  get viewbaggage() {
    return $("(//button[normalize-space()='View Baggage'])")
  }
  get viewservice() {
    return $("//button[normalize-space()='View Service']")
  }
  get bookingdetails() {
    return $(".bread-crumb-title")
  }
  get buttonOtherPayments() {
    return $("//div[text()='Other Payment Methods']")
  }
  get textNewItinerary() {
    //return $('//XCUIElementTypeStaticText[@name="YOUR NEW ITINERARY IS CONFIRMED!"]')
    return $("//div[text()='Your new itinerary is confirmed!']")
  }
  get dropdownOnlineBanking() {
    return $("//span[text()='Select Online Banking']")
  }
  get buttonNetbanking() {
    return $("//span[text()='AI-NETBANKING']")
  }
  get checkboxTermsCondition() {
    return $('//label[@class="mat-checkbox-layout"]')
  }
  get buttonPayContinue() {
    return $("//button[contains(@class,'pay-now-button')]")
  }
  get linkInternebanking() {
    return $("#tab5")
  }
  get optionBank() {
    return $("#txtBankIDBK")
  }
  get optionBankList() {
    return $("//select[@id='txtBankIDBK']//option[contains(text(),'Test Bank')]")
  }
  get buttonMakePayment() {
    return $("#proceedForm")
  }
  get labelOptionVal() {
    return $(".bs-example")
  }
  get dropdownSelect() {
    return $("#BankStatus")
  }
  get dropdownSelectList() {
    return $$("//select[@id='BankStatus']/option")
  }
  get buttonPaymentSubmit() {
    return $("//button[@name='formSubmit']")
  }
  get buttonCardPaytment() {
    return $("//div[text()='Card Payment']")
  }
  get dropdownCardType() {
    return $("//span[text()='Select your credit card type']")
  }
  get optionAmex() {
    return $("//span[text()='American Express']")
  }
  get imgAmex() {
    return $("//img[@alt='American Express']")
  }
  get textboxCardNumber() {
    //return $("//span[text()='Card Number']")
    return $('//input[@formcontrolname="cardNumber"]')
  }
  get textboxHolderName() {
    return $('//input[@formcontrolname="holderName"]')
  }
  get pageLoader() {
    //return $("//div[@class='loading ng-star-inserted']/img")
    return $('//div[contains(@class,"contained")]')
  }
  get textboxCVV() {
    return $('//input[@formcontrolname="cvv"]')
  }
  get textboxExpMonth() {
    return $('//input[@placeholder="MM"]')
  }
  get textboxExpYear() {
    return $('//input[@placeholder="YYYY"]')
  }
  get textboxCardHolderName() {
    return $("//input[@name='nameOnCard']")
  }
  get textboxCardEmail() {
    return $("//input[@name='cardHolderEmail']")
  }
  get textboxCardMobile() {
    return $("//input[@name='cardHolderPhone']")
  }
  get textboxCardhouseno() {
    return $('//input[@formcontrolname="line1"]')
  }
  get textboxCardAddress() {
    return $('//input[@formcontrolname="line2"]')
  }
  get textboxCardPincode() {
    return $('//input[@formcontrolname="zipCode"]')
  }
  get textboxCardCity() {
    return $('//input[@formcontrolname="city"]')
  }
  get textboxCardCountry() {
    return $('//input[@formcontrolname="countryCode"]')
  }
  get optionCountry() {
    return $('//span[@class="mat-option-text"]')
  }
  get textboxCardState() {
    return $('//mat-select[@formcontrolname="state"]')
    //return $("//select[@name='ccState']")
  }
  get imgEMI() {
    return $("//img[@src='assets/img/amop/emi.svg']")
  }
  get tabEmi() {
    return $("#tab11")
  }
  get optionBankEmi() {
    return $("#txtBankIDEMI")
  }
  get mc_emi() {
    return $("#tpl3_radio_AI_EMI")
  }
  get imgWallet() {
    return $("#tpl3_radio_AI_WALLET")
  }
  get imgRupay() {
    return $("tpl3_radio_AI_RUPAY")
  }
  get imgUpi() {
    return $("#tpl3_radio_AI_UPI")
  }
  get labelConfirmationVal() {
    return $(".reservation-banner")
  }
  get textPNR() {
    return $("//div[@class='reservation']/span")
  }
  get textTravelerName() {
    return $$("//div[@class='traveller-details-text traveller-name']")
  }
  get buttonPromoccode() {
    return $("[name='merchandising_promotion_code']")
  }
  get linkPromocode() {
    return $(".promotion-code-button")
  }
  get emioption() {
    return $("//select[@id='txtBankIDEMI']")
  }
  get optionRupaycredit() {
    return $("//select[@id='txtBankIDEMI']//option[text()='Axis Credit Card']")
  }
  get labelEmi() {
    return $("//label[@for='3EMI']")
  }
  get textboxRupayCardNumber() {
    return $("#cnumber")
  }
  get textboxRupayExpMonth() {
    return $("#expmon")
  }
  get textboxRupayExpYear() {
    return $("#expyr")
  }
  get textboxRupayCVV() {
    return $("#cvv2")
  }
  get textboxRupayCardholderName() {
    return $("#cname2")
  }

}
module.exports = new managebooking()