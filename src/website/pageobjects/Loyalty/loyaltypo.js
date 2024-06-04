class loyaltypo
{

get buttonAccountCreation()
{
    return $("#createAccountButton")
}
get labelCreateanAccount()
{
    return $("//div[@class='intro']")
}
get buttonFirstname()
{
    return $("#givenName")
}
get buttonLastname()
{
    return $("#surname")
}
get buttonDOB()
{
    return $("#extension_birthdate")
}
get buttonContinue()
{
    return $("#continueBtn")
}
get buttonMobileNum()
{
    return $("#extension_userPhoneNumber")
}
get labelContactInfo()
{
    return $("#contactInfo_label")
}
get buttonOTP()
{
    return $("#send_mobile_otp")
}
get checkboxRecaptcha()
{
    return $(".iti__selected-flag")
}

}
module.exports=new loyaltypo();
