class additionalservicespo {
    get addServiceTitle() {
        return $("//h2[contains(.,'Additional Services')]")
    }
    get meals()
    {
        return $("//span[contains(text(),'Choose Meal')]")
    }
    get seatslctbtn() {
        return $("//div[@class='category seat ng-star-inserted']//button")
    }
    get confirmpageload() {
        //return $("//img[@src='assets/img/animation/animation-loader.jpg']")
        return $("//img[@src='assets/img/animation/animation-loader.svg']")
    }
    get additionserviceval1() {
        return $(".refx-title")
    }
    get noseatmap() {
        return $("//p[@class='unavailable-content-title refx-display-3 ng-star-inserted']")
    }
    get skipseat() {
        return $("//span[contains(text(),'Skip seat selection')]")
    }
    get seatpax() {
        //return $$("//div[@class='mat-tab-label-content']")
        return $$(".traveler-name")
    }
    get freeseat() {
        return $$("//button[@class='seat-button selectable-button seat-characteristic-available available free-seat ng-star-inserted']")
    }
    get freeseatconfirm() {
        return $("//span[text()='Select seat']")
    }
    get contseat() {
        return $("//span[text()='Continue']")
    }
    get windowseatclose() {
        return $("//i[@class='refx-icon-cross']")
    }
    get preferredseat() {
        return $$("//button[@class='seat-button selectable-button seat-characteristic-discounted available chargeable-seat discounted-seat ng-star-inserted']")
    }
    get extralegroomseat() {
        //return $$("//div[@class='extra-leg-space ng-star-inserted']")
        return $$("//tr[@class='extra-leg-row ng-star-inserted']//button")
    }
    get extrallegseatconfirm() {
        return $("//span[text()='Acknowledge and select seat']")
    }
    get businessclassseat() {
        return $$("//button[@class='seat-button selectable-button seat-characteristic-available available free-seat ng-star-inserted']")
    }
    get nxtflight() {
        //return $("//button[@class='mat-focus-indicator next-btn mat-flat-button mat-button-base']")
        return $("//span[contains(text(),'Next flight')]")
    }
    get confirmseat() {
        return $("//span[contains(text(),'Confirm')]")
    }


    get addExtraBaggage() {
        return $("//div[@class='category-recap-footer ng-star-inserted']//span[text()='Add extra bags']")
    }
    get baggageTitle() {
        return $("//strong[contains(text(),'Book Extra Baggage at the Best Price')]")
    }
    get baggagearrow() {
        return $$("//div[@class='service-select-travelers']//span[text()='Please select an option.']")
        //return $$("//div[@class='mat-form-field-flex ng-tns-c32-105']")
    }
    get piecebag() {
        return $$("//i[@class='refx-icon-add']")
    }
    get baggageList() {
        return $$("//div[@role='listbox']//mat-option")
    }
    get selectionContinue() {
        return $("//div[@class='buttons-place']//span[@class='mat-button-wrapper']")
    }

    get changeAB() {
        return $("//custom-service-category-pres[@id='baggage-service']//button//span[text()='Change']")
    }
    get baggagearrow1() {
        //return $$("//div[@class='service-select-travelers']//span[text()='Please select an option.']")
        return $$("//mat-select-trigger//span[contains(.,'Bag up to')]")
    }
    get continuebookingbtn() {
        return $("//button[@class='mat-focus-indicator continue-button mat-stroked-button mat-button-base']")
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
    get whcrcontbooking() {
        return $("//span[text()='Continue the flow']")
    }
    get selectseatagain() {
        return $("//span[text()='Confirm and select seats again']")
    }
    get mealsslct() {
        return $$("//span[contains(text(),'Select your meal')]")
    }
    get mealsslct() {
        return $$("//span[contains(text(),'Select your meal')]")
    }
    get mealsoptions() {
        //return $$("//span[@class='subcategory-service-label ng-star-inserted']")
        return $$("//span[@class='mat-option-text']//span[@class='subcategory-service-label ng-star-inserted']")
    }
    get checkoutbutton() {
        return $(".next-step-button")
    }
    get paymenttitle()
    {
        return $("//div[@class='refx-display-3 header-text']")
    }
    get confirmationval() {
        return $(".refx-title")
    }
    get labelAddServicePage()
    {
        return $("//strong[normalize-space()='Add/Modify']")
    }
    get textAddService()
{
  return $("//button[text()='Add Service']")
}
get pageLoader()
{
    //return $("//div[@class='loading ng-star-inserted']/img")
    return $('//div[contains(@class,"contained")]')
}
get addServiceVal()
{
  return $(".dialog-title")
}
get buttonWheelChair()
{
  return $$("//select[@class='form-control']")
}
get buttonWheelChairConfirm()
{
  return $("//span[contains(text(),'Confirm')]")
}
get labelSubtitle()
    {
      return $(".subtitle")
    }
    get textAddMeal()
    {
      return $("//button[text()='Add Meal']")
    }
    get textMealVal()
{
  return $(".dialog-title")
}
get buttonMeals()
{
  return $$("//select[@class='form-control']")
}
get mc_mealbtnlist()
{
    return $$("//select[@class='form-control']/option") 
}
get textContinueFlow()
{
  return $("//span[text()='Continue the flow']")
}
get buttonMealConfirm()
{
  return $("//span[contains(text(),'Confirm')]")
}
get textAddBaggage()
{
  return $("//button[text()='Add baggage']")
}
get iconAddBaggageVal()
{
  return $(".catalogServices-dialog-header-icon")
}
get AdditionalBaggageBox()
{
  return $$("//select[@class='form-control']")
}
get optionAddBaggageList()
{
  return $$("//select[@class='form-control']/option")
}
get buttonAddBaggageConfirm()
{
  return $(".serviceSummary-primary-btn-text")
}
get iconAddPieceBag()
{
  return $$("//span[@class='icon-plus']")
}
get buttonSeat()
{
  return $("//button[text()='Select your Seat']")
}
get labelSeatVal()
{
  return $(".dialog-title")
}
get iconPreferedSeat()
{
  return $$("//div[contains(@class,'uicSquare icon-seat-chargeable')]")
  //0return $$("//div[contains(@class,'uicSquare icon-seat-discount')]")
}
get iconFreeSeat()
{
  return $$("//div[contains(@class,'uicSquare icon-seat-available')]")
}
get iconExtraLegRoomSeat()
{
  return $$("//tr[@class='seats-row  extra-leg-row']//div[contains(@class,'uicSquare icon-seat-discount')]")
}
get labelSeatConfirm()
{
  return $("//span[contains(text(),'Confirm')]")
}
get buttonSeatConfirm()
{
  return $(".btn-confirm-seat")
}
get tabSegmentList()
{
 //return $$(".itinerary")
 return $$(".dialog-tabs-flight")
}
get radiobuttonPaxList()
{
  return $$("//input[@type='radio']")
}
get textABContinue()
{
  return $("//span[text()='continue']")
}
get addServicePageTop() {
  return $('//strong[text()="Add/Modify "]')
}
get addServicePageend()
{
  return $(".servicesbreakdown-title")
}
}
module.exports = new additionalservicespo();


