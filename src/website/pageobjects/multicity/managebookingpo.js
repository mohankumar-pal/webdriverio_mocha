class managebooking
{
  get mainpageval()
  {
    //return $("//div[@class='navbar navbar-expand-lg']//a[@class='air-brand']//img[@alt='Air India']")
    //return $("//img[@src='/content/dam/air-india/logos/AirIndia_white_logo.svg']")
    return $("//div[@class='container-bs aic']//a[@class='logo-img dark']//img[@alt='Air India Logo']")
  }
  get managebook()
  {
    
    return $("//div[@id='mat-tab-label-0-1']")
  }
  get Managebooking()
  {
      return $("#profile")
  }
  get returntoMB()
  {
    return $("//button[@class='btn btn-default button-manage-booking']")
  }
  get bookingref()
  {
      
      return $("//input[@id='pnr-ip-id']")
  }
  get lastname()
  {
      return $("//input[@id='lastname-ip-id']")
  }
  get submit()
  {
      return $(".booking-flight-btn")
  }
  get pnrrefval()
  {
      return $("//div[@class='reservation']/span")
  }
  get cancelandrefund()
  {
    return $("//span[text()='Cancel and refund']")
  }
  get refundval()
  {
    return $(".bread-crumb-title")
  }
  get confirmrefund()
  {
    return $(".confirm-refund")
  }
  get confirmation()
  {
    return $(".cancelled-banner")
  }
  get gotohome()
  {
    return $(".go-home")
  }
  get managebookingtext()
  {
    return $("//span[text()='Manage Booking']")
  }
  get managebookinglist()
  {
    return $$("//ul[@class='dropdown-menu dropdown-body']//li/a")
  }
  get contactdetails()
  {
    return $(".traveller-contact-information-title")
  }
  get basicdetails()
  {
    return $$(".apim-card-title-after-validation")
  }
  get dobdate()
  {
    return $$("//input[contains(@id,'ADT-PSPT_0-IDEN_DateOfBirth-DateDay')]")
  }
  get dobmonth()
  {
    return $$("//select[contains(@id,'ADT-PSPT_0-IDEN_DateOfBirth-DateMonth')]")
  }
  get dobyear()
  {
    return $$("//input[contains(@id,'ADT-PSPT_0-IDEN_DateOfBirth-DateYear')]")
  }
  get gotonext()
  {
    return $$("//button//span[text()='Go to next']")
  }
  get email()
  {
    return $("//input[@name='Email']")
  }
  get countrycode()
  {
    return $("#tpl3_widget-input-apimTravellers-contactInformation-PhoneMobileCode")
  }
  get countrycodeoptions()
  {
    return $("//select[@name='PSPT_DocumentIssuingCountry']//option")
  }
  get expday()
  {
    return $("//input[@id='tpl3_widget-input-travellerListAdvanced-traveller_0_ADT-PSPT_0-PSPT_DocumentExpiryDate-DateDay']")
  }
  get expday1()
  {
    return $$("//input[contains(@id,'PSPT_0-PSPT_DocumentExpiryDate-DateDay')]")
  }
  get expmonth()
  {
    return $("//select[@id='tpl3_widget-input-travellerListAdvanced-traveller_0_ADT-PSPT_0-PSPT_DocumentExpiryDate-DateMonth']")
  }
  get expmonth1()
  {
    return $$("//select[contains(@id,'PSPT_0-PSPT_DocumentExpiryDate-DateMonth')]")
  }
  get expyear()
  {
    return $("//input[@id='tpl3_widget-input-travellerListAdvanced-traveller_0_ADT-PSPT_0-PSPT_DocumentExpiryDate-DateYear']")
  }
  get expyear1()
  {
    return $$("//input[contains(@id,'PSPT_0-PSPT_DocumentExpiryDate-DateYear')]")
  }
  get phonenumber()
  {
    return $("#tpl3_widget-input-apimTravellers-contactInformation-PhoneMobile")

  }
  get confirmemail()
  {
    return $("//input[@name='EmailConfirm']")
  }
  get email2()
  {
    return $("//input[@name='Email2']")
  }
  get email3()
  {
    return $("//input[@name='Email3']")
  }
  get emergencyname()
  {
    return $("//input[@name='SosName']")
  }
  get emergencycountrycode()
  {
    return $("#tpl3_widget-input-apimTravellers-contactInformation-SosPhoneCode")
  }
  get emergencyphonenumber()
  {
    return $("//input[@name='SosPhone']")
  }
  get continue()
  {
    return $$(".tripsummary-btn-primary")
  }
get additionalservice()
{
  return $(".btn-add-services")
}
get additionalserviceval()
{
  //return $(".bread-crumb-title")
  return $(".current")
}
get addbaggage()
{
  return $("//button[text()='Add baggage']")
}
get addbaggageval()
{
  return $(".catalogServices-dialog-header-icon")
}
get addbaggagebox()
{
  return $$("//select[@class='form-control']")
}
get addbaggagelist()
{
  return $$("//select[@class='form-control']/option")
}
get addbaggageconfirm()
{
  return $(".serviceSummary-primary-btn-text")
}
get addpiecebag()
{
  return $$("//span[@class='icon-plus']")
}
get travellername()
{
  return $$(".traveller-name")
}
get bookconfirmtitle()
{
  return $(".subtitle")
}
get bookconfirmtitle1()
{
  return $(".reservation-banner")
}
get pnrdata()
{
  return $("//div[@class='reservation']//span[@class='number']")
}
get mpacontinue()
{
  return $("//div[@class='tripsummary-btn tripsummary-button-validate']//button[@class='plnext-widget-btn btn btn-primary tripsummary-btn-primary tripSummary-btn-continue tripsummary-btn-validate validate-btn']//span[text()='continue']")
}
get abcontinue()
{
  return $("//span[text()='continue']")
}
     get selectval()
    {
        return $(".bs-example")
    }
    get selectdropdown()
    {
        return $("#BankStatus")
    }
    get paymentsubmit()
    {
        return $("//button[@name='formSubmit']")
    }
    get confirmationval()
    {
        return $("//h1[normalize-space()='Services confirmation']")
    }
    get confirmpageload()
    {
        //return $("//img[@class='ng-star-inserted']")
        //return $(".loading-content")
        return $("//div[@class='loading-content']")
    }
    get continueflow()
    {
      return $("//span[text()='Continue the flow']")
    }
    get IBval()
    {
        return $("#tab5")
    }
    get selectbank(){
      return $("#txtBankIDBK")
  }
  get selectbankoption()
  {
      return $("//select[@id='txtBankIDBK']//option[contains(text(),'Test Bank')]")
  }
  get makepayment()
  {
      return $("#proceedForm")
  }
  get serviceconfirmation()
  {
    return (".status-banner-text")
  }
  get paymentval()
  {
    //return $(".subtitle")
    return $("//span[@class='heading-text'][text()='Select Method of Payment']")
  }
  
    get additiionalservicebtn()
    {
      return $("//span[text()='Additional Services']")
    }
    get pagesubtitle()
    {
      return $(".subtitle")
    }
    get flights()
    {
      return $("//span[text()='Flights']")
    }





//    RE ISSUE

 get segmentlist()
 {
  //return $$(".itinerary")
  return $$(".dialog-tabs-flight")
 }
 /* get segmentlist()
{
  return $$(".tab-header")
} */
get modifyflight()
{
  return $("//span[text()='Modify Flights']")
}
get seg1box()
{
  return $("//label[@for='tpl3_widget-input-itineraryReviewForm-checkBound0']")
}
get seg2box()
{
  return $("//label[@for='tpl3_widget-input-itineraryReviewForm-checkBound1']")
}
get seg3box()
{
  return $("//label[@for='tpl3_widget-input-itineraryReviewForm-checkBound2']") 
}
get seg4box()
{
  return $("//label[@for='tpl3_widget-input-itineraryReviewForm-checkBound3']")
}

get mandatoryelement()
{
  return $$("//*[@class='control-label mandatory-label']")
}

 get seg1from()
 {
  return $("#tpl3_widget-input-itineraryReviewForm-origin0")
 }
 get seg2from()
 {
  return $("#tpl3_widget-input-itineraryReviewForm-origin1")
 }
 get seg3from()
 {
  return $("#tpl3_widget-input-itineraryReviewForm-origin2")
 }
 get seg4from()
 {
  return $("#tpl3_widget-input-itineraryReviewForm-origin3")
 }
 get seg1to()
 {
  return $("#tpl3_widget-input-itineraryReviewForm-destination0")
 }
 get seg2to()
 {
  return $("#tpl3_widget-input-itineraryReviewForm-destination1")
 }
 get seg3to()
 {
  return $("#tpl3_widget-input-itineraryReviewForm-destination2")
 }
 get seg4to()
 {
  return $("#tpl3_widget-input-itineraryReviewForm-destination3")
 }
 get citysuggestion()
 {
  return $(".autocompleteBox-item-line")
 }
 get departingdate1()
 {
  return $("#tpl3_widget-input-itineraryReviewForm-beginDate0")
 }
 get departingdate2()
 {
  return $("#tpl3_widget-input-itineraryReviewForm-beginDate1")
 }
 get departingdate3()
 {
  return $("#tpl3_widget-input-itineraryReviewForm-beginDate2")
 }
 get departingdate4()
 {
  return $("#tpl3_widget-input-itineraryReviewForm-beginDate3")
 }
get anytime1()
{
  return $("#tpl3_widget-input-itineraryReviewForm-targetTime0")
}
get anytimelist1()
{
  $$("//select[@name='targetTime0']/option")
}
get seg1continue()
{
  //return $("//span[text()='continue']")
  return $("//div[@class='tripsummary-btn tripsummary-button-validate']//span[text()='continue']")
}
get gender()
{
  return $$("//select[@name='IDEN_Gender']")
}
get childgender()
{
  return $$("//select[contains(@id,'CHD-PSPT_0-IDEN_Gender')]")
}
get infantgender()
{
  return $$("//select[contains(@id,'INF-PSPT_0-IDEN_Gender')]")
}
get nationality()
{
  return $("//select[@name='IDEN_Nationality']")
}
get nationalityoptions()
{
  return $("//select[@name='IDEN_Nationality']//option")
}
get mpdnationality()
{
  return $$("//select[@name='IDEN_Nationality']")
}
get mpdnationalityoptions()
{
  return $$("//select[@name='IDEN_Nationality']//option")
}
get mpddocnumber()
{
  return $$("//input[@name='PSPT_DocumentNumber']")
}
get mpdcountrycode1()
{
  return $$("//select[@name='PSPT_DocumentIssuingCountry']")
}
get docnumber()
{
  return $("//input[@name='PSPT_DocumentNumber']")
}
get countrycode1()
{
  return $("//select[@name='PSPT_DocumentIssuingCountry']")
}
get documenttype()
{
  return $$("//select[@name='PSPT_DocumentType']")
}
get travelertitle()
{
  return $$(".travellerList-title")
}
get iconfilter()
{
  return $(".icon-filter")
}
get flightlist()
{
  return $$(".icon-chevron-down")
}
get seg2flightlist(){ 
  
  //return $$("//div[@id='tpl4_upsell-bound1']//div[@class='bound-table-flightline  col-xs-24']//div[@class='bound-table-flightline-details']//div[@data-n-of-cells='6']//label[@class='fare-group-header']")
  //return $$("//div[@id='tpl4_upsell-bound1']//div[@class='bound-table-flightline  col-xs-24']//div[@class='bound-table-flightline-details']//div[@class='fare-group-selection-icon']")
  return $$("//div[@id='tpl4_availability-bound-1']//div[@id='tpl4_availability-elements-bound1']//div[@class='slideDown flights-elements-shadow']//div[@id='tpl4_bound1-bound-table']//div[@id='tpl4_upsell-bound1']//label[@class='fare-group-header']")
}
get cabintext()
{
  return $$(".availability-recommendation-title")
}
get cabinslct()
{
  return $$(".availability-recommendation-sidebar-radio")
}
get returnCabinlist(){
  //return $$("//div[@id='tpl4_availabilityListFare-bound-1-flight-0-fareGroup-0']//div[@class='fare-group-details']//div[@class='fare-group-left-panel']//div[@id='s8']//div[@class='fare-container-row bound-table-flightline-fare-family-list']//div[@class='availability-table-fare-rows-cells']//fieldset//div[@class='availability-list-fares']//div[contains(@class,'availability-list-fares-reco')]//div[@class='availability-recommendation table-row-display bound-table-cell-reco']//div[@class='col-xs-16 availability-recommendation-content ']//div[@class='row availability-reco-content-row']//div[@class='col-xs-20']//div[@class='availability-recommendation-title']")
  //return $$("//div[@id='tpl4_availabilityListFare-bound-1-flight-11-fareGroup-0']//div[@class='fare-group-details']//div[@class='fare-group-left-panel']//div[@id='s8']//div[@class='fare-container-row bound-table-flightline-fare-family-list']//div[@class='availability-table-fare-rows-cells']//fieldset//div[@class='availability-list-fares']//div[contains(@class,'availability-list-fares-reco')]//div[@class='availability-recommendation table-row-display bound-table-cell-reco']//div[@class='col-xs-16 availability-recommendation-content ']//div[@class='row availability-reco-content-row']//div[@class='col-xs-20']//div[@class='availability-recommendation-title']")
  //return $$("//div[@class='fare-group-container fare-group-container-ALL']//div[@class='fare-group-details']//div[@class='fare-group-left-panel']//div[@id='s21']//div[@class='fare-container-row bound-table-flightline-fare-family-list']//div[@class='availability-table-fare-rows-cells']//fieldset//div[@class='availability-list-fares']//div[contains(@class,'availability-list-fares-reco')]//div[@class='availability-recommendation table-row-display bound-table-cell-reco']//div[@class='col-xs-16 availability-recommendation-content ']//div[@class='row availability-reco-content-row']//div[@class='col-xs-20']//div[@class='availability-recommendation-title']")
  return $$("//div[@id='tpl4_availability-bound-1']//div[@class='availability-recommendation-title']")
  //return $$("//div[@class='fare-group-container fare-group-container-ALL']//div[@class='fare-group-details']//div[@class='fare-group-left-panel']//div[@class='fare-container-row bound-table-flightline-fare-family-list']//div[@class='availability-table-fare-rows-cells']//fieldset//div[@class='availability-list-fares']//div[contains(@class,'availability-list-fares-reco')]//div[@class='availability-recommendation table-row-display bound-table-cell-reco']//div[@class='col-xs-16 availability-recommendation-content ']//div[@class='row availability-reco-content-row']//div[@class='col-xs-20']//div[@class='availability-recommendation-title']")
  //return $$("//div[@class='fare-group-container fare-group-container-ALL']//div[@class='fare-group-details']//div[@class='fare-group-left-panel']//div[@atdelegate='d815']//div[@class='fare-container-row bound-table-flightline-fare-family-list']//div[@class='availability-table-fare-rows-cells']//fieldset//div[@class='availability-list-fares']//div[contains(@class,'availability-list-fares-reco')]//div[@class='availability-recommendation table-row-display bound-table-cell-reco']//div[@class='col-xs-16 availability-recommendation-content ']//div[@class='row availability-reco-content-row']//div[@class='col-xs-20']//div[@class='availability-recommendation-title']")
}
get returncabinslct()
{
  return $$("//div[@id='tpl4_availability-bound-1']//label[@class='availability-recommendation-sidebar-radio']")
}
get cabinUnavailable(){
  //return $$(".bound-table-cell-reco-unavailable")
  //return $(".icon.icon-ban-circle")
  return $$("//div[contains(@class,'availability-list-fares')]//div[@class='availability-list-fares-reco fare-group-0 ffcode-WSPECOININ availability-list-fares-reco-unavailable']//div[@class='availability-recommendation table-row-display bound-table-cell-reco bound-table-cell-reco-unavailable']")
}
get addservice()
{
  return $("//button[text()='Add Service']")
}
get addserviceval()
{
  return $(".dialog-title")
}
get wcbutton()
{
  return $$("//select[@class='form-control']")
}
get wcbuttonlist()
{
  return $$("//select[@class='form-control']/option")
}
get wcconfirm()
{
  return $("//span[contains(text(),'Confirm')]")
}
get addmeal()
{
  return $("//button[text()='Add Meal']")
}
get mealval()
{
  return $(".dialog-title")
}
get mealbtn()
{
  return $$("//select[@class='form-control']")
}
get meallist()
{
  return $$("//select[@class='form-control']/option")
}
get mealconfirm()
{
  return $("//span[contains(text(),'Confirm')]")
}
get seat()
{
  return $("//button[text()='Select your Seat']")
}
get seatval()
{
  return $(".dialog-title")
}
get passengerradiobtn()
{
  return $$("//input[@type='radio']")
}
get preferedseat()
{
  return $$("//div[contains(@class,'uicSquare icon-seat-chargeable')]")
  //0return $$("//div[contains(@class,'uicSquare icon-seat-discount')]")
}
get freeseat()
{
  return $$("//div[contains(@class,'uicSquare icon-seat-available')]")
}
get extralegroomseat()
{
  return $$("//tr[@class='seats-row  extra-leg-row']//div[contains(@class,'uicSquare icon-seat-discount')]")
}
get seatconfirm()
{
  return $("//span[contains(text(),'Confirm')]")
}
get seatconfirmbtn()
{
  return $(".btn-confirm-seat")
}
get confirmpageload()
{
    return $("//img[@class='ng-star-inserted']")
}

/// net banking

get netbanking()
{
        //return $("#tpl3_li_AI_NETBANKING")
        return $("//input[contains(@id,'AI_NETBANKING')]")
 }
 get reissuenetbanking()
 {
  return $("#tpl4_li_AI_NETBANKING")
 }
 get creditcard()
 {
  return $("#tpl3_radio_CC")
 }
 get aexpcard()
 {
  return $("//img[@alt='American Express']")
 }
 get cardnumber()
 {
  return $("//input[@name='cardNumber']")
 }
 get cvv()
 {
  return $("//input[@name='securityCode']")
 }
 get cardexpmonth()
 {
  return $("//select[@name='ccMonth']")
 }
 get cardexpyear()
 {
  return $("//select[@name='ccYear']")
 }
 get cardholdername()
 {
  return $("//input[@name='nameOnCard']")
 }
 get cardemail()
 {
  return $("//input[@name='cardHolderEmail']")
 }
 get cardmobile()
 {
  return $("//input[@name='cardHolderPhone']")
 }
 get cardhouseno()
 {
  return $("//input[@name='ccAddressFirstLine']")
 }
 get cardaddress()
 {
  return $("//input[@name='ccAddressSecondLine']")
 }
 get cardpincode()
 {
  return $("//input[@name='ccPostalCode']")
 }
 get cardcity()
 {
  return $("//input[@name='ccCity']")
 }
 get cardcountry()
 {
  return $("//select[@name='ccCountry']")
 }
 get cardstate()
 {
  return $("//select[@name='ccState']")
 }
 get emi()
 {
  return $("#tpl3_radio_AI_EMI")
 }
 get wallet()
 {
  return $("#tpl3_radio_AI_WALLET")
 }
 get rupay()
 {
  return $("tpl3_radio_AI_RUPAY")
 }
 get upi()
 {
  return $("#tpl3_radio_AI_UPI")
 }
 get farebasisscroll()
 {
  return $(".tripsummary-btn-fareBasisInformation-label")
 }
    get terms()
  {
    //return $("//label[@for='w11_widget-input-purchaseForm-termsConditionsForm-termsAndCondition']/strong")
    //return $("//input[@id='w11_widget-input-purchaseForm-termsConditionsForm-termsAndCondition']")
    return $("//Strong[contains(text(),'Yes,')]")
  }
  get reissueterms()
  {
    //return $("//label[@for='w13_widget-input-purchaseForm-termsConditionsForm-termsAndCondition']/strong")
    return $("//input[contains(@id,'widget-input-purchaseForm-termsConditionsForm-termsAndCondition')]")
    
  }
  get conditionbox()
  {
    return $("#w10_widget-input-purchaseForm-termsConditionsForm-termsAndCondition")
    
  }
  get paycontinue()
  {
    //return  $("//span[text()='continue']")
    return $("//span[@class='plnext-widget-btn-text one-icon']")
    //return $("//button[@class='plnext-widget-btn btn btn-primary tripsummary-btn-primary tripSummary-btn-continue tripsummary-btn-validate validate-btn']")
  }
  get selectdropdownlist()
    {
        return $$("//select[@id='BankStatus']/option")
    }
get edityourseat()
{
  return $("//button[normalize-space()='Edit your Seat']")
}
get viewbaggage()
{
  return $("(//button[normalize-space()='View Baggage'])")
}
get viewservice()
{
  return $("//button[normalize-space()='View Service']")
}
get bookingdetails()
{
  return $(".bread-crumb-title")
}
}
module.exports=new managebooking()