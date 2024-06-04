class multicitypo
{
    get bookbtn()
    {
        return $(`~homeTab.bookFlights`)
    }
    get confirmbtn()
    {
       return $("~confirm_now")
    }
    get welcometxt()
    {
        return $("~welcomeText")
    }
    get homemenu()
    {
        return $$("//android.widget.ImageView[@resource-id='com.bets.airindia.ui:id/icon']")
    }
    get roundtrip()
   {
    return $("~Round Trip")
   }
    get multicity()
    {
        return $("~Multi City")
    }
    get multicityval()
    {
        return $("#com.bets.airindia.ui:id/multiCityHeader")
    }
    get seg1from()
    {
        return $("~from 0")
    }
    get citysearch()
    {                                                     
        return $("//android.widget.EditText[@resource-id='com.bets.airindia.ui:id/search_text']")
    }
    get cityvalueclk()
    {
    return $$("//android.widget.TextView[@resource-id='com.bets.airindia.ui:id/name']")
    }
    get toval()
   {
    return $("//android.widget.TextView[@resource-id='com.bets.airindia.ui:id/dialog_title']")
   }
   get dateval()
   {
    return $("//android.widget.TextView[@resource-id='com.bets.airindia.ui:id/headerText']")
   }
   get seg1date()
   {
   
    return $$("//android.widget.TextView[@resource-id='com.bets.airindia.ui:id/multiCityDate']")
   }
   get monthtxt()
   {
    return $$("//android.widget.TextView")
   }
   get seg1dateselect()
   {
    //return $$(".android.widget.TextView")
 return $$("//android.widget.FrameLayout/android.widget.TextView")
   // return ("//android.widget.TextView[@text='15']")
  // return ("//android.widget.FrameLayout[@index='2']/android.widget.TextView")
 // return $$("(//android.widget.ImageView[@content-desc='Lottie'])")
// return $$("//android.widget.TextView[@text='April']//android.view.ViewGroup[@resource-id='com.bets.airindia.ui:id/calendar_grid']//android.view.ViewGroup//android.view.ViewGroup//android.widget.FrameLayout/android.widget.TextView")
   }
   get seg2to()
   {
    return $("~text_tt_to_dest 0")
   }
   get paxclassdrpdwn()
   {
    return $$("//android.widget.TextView[@resource-id='com.bets.airindia.ui:id/field_selector_text']")
   }
   get plusbutton()
{
    return $$("//android.widget.ImageView[@resource-id='com.bets.airindia.ui:id/plusButton']")
}
get donebtn()
{
    return $("//android.widget.Button[@resource-id='com.bets.airindia.ui:id/done_button']")
}

get classval()
{
    return $("//android.widget.TextView[@resource-id='com.bets.airindia.ui:id/cabin_header']")
}
get cabinselection()
{
    return $$("//android.widget.TextView[@resource-id='com.bets.airindia.ui:id/cabin_text']")
}
get searchbtn()
{
    return $("//android.widget.Button[@resource-id='com.bets.airindia.ui:id/search_button']")
}
get loader()
{
    return $("//android.widget.ImageView[@id='com.bets.airindia.ui:id/loader_animation']")
}
get selectflightsval()
{
    return $("//android.widget.TextView[@text='Select flights']")
}
get selectfaretype()
{
    return $("//android.view.View[@text='Select Fare Type']")
}
get cabintxt()
{
   // return $$(".android.view.View")
   //return $$("//android.view.View[@index='2']")
  // return $$("//*[contains(@text,'ECONOMY')]")
  // return $$("//android.view.View[contains(text(),'ECONOMY')]")
 return $('android=new UiSelector().text("WEB SPECIAL ECONOMY")')
 // return $$('android=new UiSelector().textContains("ECONOMY").className("android.view.View")')
}
}
module.exports=new multicitypo()