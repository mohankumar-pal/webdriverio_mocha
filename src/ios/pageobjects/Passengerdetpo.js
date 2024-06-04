class Passengerdetails {
    get textTitle() {
        return $('//XCUIElementTypeOther[@name="Title - Please Select -"]')
        //return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[7]/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther[7]/XCUIElementTypeOther[2]')
    }
    get dropdownTitle() {
        return $('//XCUIElementTypeOther[@name="Title"]')
    }
    get textConcessionTitle() {
        return $('//XCUIElementTypeOther[@name="Title"]')
    }
    get dropdownNameTitle() {
        return $$('(//XCUIElementTypeOther[@name="Title"])[2]//XCUIElementTypeOther')
    }

    get Mr() {
        return $("span[aria-label='Mr']")
    }

    get Mrs() {
        return $("span[aria-label='Mrs']")
    }

    get Ms() {
        return $("span[aria-label='Ms']")
    }

    get Mstr() {
        return $("span[aria-label='Mstr']")
    }

    get Doctor() {
        return $("span[aria-label='Doctor']")
    }

    get Miss() {
        return $("span[aria-label='Miss']")
    }

    get textboxFirstName() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[10]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther[7]/XCUIElementTypeTextField')
        //return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[7]/XCUIElementTypeOther[2]/XCUIElementTypeOther[1]/XCUIElementTypeOther[7]/XCUIElementTypeOther')
    }
    get textboxMcFirstName() {
        return $('//XCUIElementTypeOther[@name="First/Given Name *"]')
    }
    get textboxConFirstName() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[8]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther[7]/XCUIElementTypeTextField')
    }
    get textConLastName() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[8]/XCUIElementTypeOther[3]/XCUIElementTypeOther/XCUIElementTypeOther[7]/XCUIElementTypeTextField')
    }
    get textConDOB() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[8]/XCUIElementTypeOther[4]/XCUIElementTypeOther/XCUIElementTypeOther[7]/XCUIElementTypeOther')
    }
    get textboxInfantFirstName() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[7]/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther[7]/XCUIElementTypeOther')
    }
    get textboxLastName() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[10]/XCUIElementTypeOther[3]/XCUIElementTypeOther/XCUIElementTypeOther[7]/XCUIElementTypeTextField')
        //return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[7]/XCUIElementTypeOther[3]/XCUIElementTypeOther/XCUIElementTypeOther[7]/XCUIElementTypeOther')
    }
    get textboxMcLastname() {
        return $('//XCUIElementTypeOther[@name="Surname/Last Name *"]')
    }
    get textboxMcSurname() {
        return $('//XCUIElementTypeOther[@name="Surname/Last Name"]')
    }
    get textboxMcNationality() {
        return $('//XCUIElementTypeOther[@name="Nationality *"]')
    }
    get dropdownMcDocType() {
        return $('//XCUIElementTypeOther[@name="Document type: *"]')
    }
    get optionPassport() {
        return $('//XCUIElementTypeButton[@name="Passenger passport"]')
    }
    get textboxMcPassportNo() {
        return $('//XCUIElementTypeOther[@name="Document number: *"]')
    }
    get dropdownMcIssuingCountry() {
        return $('//XCUIElementTypeOther[@name="Issuing country code: *"]')
    }
    get textboxAdultExpiryDate() {
        return $('//XCUIElementTypeOther[@name="Expiration date:"]/XCUIElementTypeTextField[1]')
    }
    get dropdownAdultExpiryMonth() {
        return $('//XCUIElementTypeOther[@name="Expiration date:"]/XCUIElementTypeOther[2]')
    }
    get textboxAdultExpiryYear() {
        return $('//XCUIElementTypeOther[@name="Expiration date:"]/XCUIElementTypeTextField[2]')
    }
    get buttonGoNext() {
        return $('//XCUIElementTypeButton[@name="GO TO NEXT"]')
    }
    get textboxInfantLastName() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[7]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther[7]/XCUIElementTypeOther')
    }
    get textboxDOB() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[7]/XCUIElementTypeOther[4]/XCUIElementTypeOther/XCUIElementTypeOther[7]/XCUIElementTypeOther')
    }
    get textboxDOB2() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[7]/XCUIElementTypeOther[5]/XCUIElementTypeOther/XCUIElementTypeOther[7]/XCUIElementTypeTextField')
    }
    get textboxInfantDOB() {
        //return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[7]/XCUIElementTypeOther[3]/XCUIElementTypeOther/XCUIElementTypeOther[7]/XCUIElementTypeOther')
        return $('//XCUIElementTypeOther[@name="Date of Birth"]')
    }
    get textboxAdultDay() {
        const day = '**/XCUIElementTypeTextField[`value == "Day"`][1]'
        return $(`-ios class chain:${day}`)
    }
    get dropdownAdultMonth() {
        const mon = '**/XCUIElementTypeOther[`value == "Month"`][1]'
        return $(`-ios class chain:${mon}`)
    }
    get textboxAdultYear() {
        const year = '**/XCUIElementTypeTextField[`value == "Year"`][1]'
        return $(`-ios class chain:${year}`)
    }
    get textboxDay() {
        const day = '**/XCUIElementTypeTextField[`value == "Day"`]'
        return $(`-ios class chain:${day}`)
    }
    get textboxYear() {
        const year = '**/XCUIElementTypeTextField[`value == "Year"`]'
        return $(`-ios class chain:${year}`)
    }
    get dropdownMonth() {
        const mon = '**/XCUIElementTypeOther[`value == "Month"`]'
        return $(`-ios class chain:${mon}`)
    }
    get gender() {
        return $$(".personal-info-gender-select-type-input")
    }

    get toggleTravelerInfo() {
        //return $("(//span[@class='mat-slide-toggle-bar'])[1]")
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[9]/XCUIElementTypeOther/XCUIElementTypeOther[1]')
    }

    get textboxTravelerFirstName() {
        //return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[10]/XCUIElementTypeOther[1]/XCUIElementTypeOther[7]/XCUIElementTypeTextField')
        return $('//XCUIElementTypeOther[@name="First name"]')
    }
    get textboxTravelFirstName() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[9]/XCUIElementTypeOther[1]/XCUIElementTypeOther[7]/XCUIElementTypeTextField')
    }
    get infomname() {
        return $(".apis-regulatory-per-route-middle-name")
    }

    get textboxTravelerLastName() {
        //return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[10]/XCUIElementTypeOther[3]/XCUIElementTypeOther[7]/XCUIElementTypeTextField')
        return $('//XCUIElementTypeOther[@name="Last name"]')
    }
    get textboxTravelLastName() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[9]/XCUIElementTypeOther[3]/XCUIElementTypeOther[7]/XCUIElementTypeTextField')
    }
    get dropdownMcGender() {
        return $('//XCUIElementTypeOther[@name="Gender: *"]')
    }
    get dropdownGender() {
        return $('//XCUIElementTypeOther[@name="Gender refx-apis-regulatory-per-route-pres.gender.placeholder"]')
    }
    get dropdownGenderField() {
        //return $('//XCUIElementTypeOther[@name="Gender Select gender"]')
        return $('//XCUIElementTypeOther[@name="Gender refx-apis-regulatory-per-route-pres.gender.placeholder"]')
    }
    get optionMcMale() {
        return $('//XCUIElementTypeButton[contains(@name,"Male")]')
    }
    get optionMcFemale() {
        return $('//XCUIElementTypeButton[contains(@name,"Female")]')
    }
    get optionMcUndisclosed() {
        return $('//XCUIElementTypeButton[@name="Undisclosed"]')
    }
    get optionMale() {
        return $('//XCUIElementTypeOther[@name="Male"]')
    }
    get optionFemale() {
        return $('//XCUIElementTypeOther[@name="Female"]')
    }
    get optionDisclosed() {
        return $('//XCUIElementTypeOther[@name="Undisclosed"]')
    }

    get textboxNationality() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[10]/XCUIElementTypeOther[6]/XCUIElementTypeOther[7]/XCUIElementTypeOther[2]')
        //return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[10]/XCUIElementTypeOther[5]/XCUIElementTypeOther[7]/XCUIElementTypeOther[2]')
    }
    get textboxNationality2() {
        //return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[10]/XCUIElementTypeOther[6]/XCUIElementTypeOther[7]/XCUIElementTypeOther[2]')
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[10]/XCUIElementTypeOther[5]/XCUIElementTypeOther[7]/XCUIElementTypeOther[2]')
    }
    get textboxTravelNationality() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[9]/XCUIElementTypeOther[6]/XCUIElementTypeOther[7]/XCUIElementTypeOther[2]')
    }
    get dropdownNationality() {
        return $('(//XCUIElementTypeOther[@name="Nationality"])[2]')
    }

    get textboxPassportNo() {
        //return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[10]/XCUIElementTypeOther[12]/XCUIElementTypeOther[7]/XCUIElementTypeOther')
        return $('//XCUIElementTypeStaticText[@name="Passport Number"]')
    }
    get textboxTravelPassportNo() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[9]/XCUIElementTypeOther[7]/XCUIElementTypeOther[7]/XCUIElementTypeOther')
    }
    get textboxPassportExpiryDate() {
        //return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[10]/XCUIElementTypeOther[14]/XCUIElementTypeOther[7]/XCUIElementTypeOther')
        return $('//XCUIElementTypeOther[@name="Passport Expiry"]')
    }
    get textboxTravelPassportExpDate() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[9]/XCUIElementTypeOther[8]/XCUIElementTypeOther[7]/XCUIElementTypeOther')
    }
    get textboxPassportIssueCountry() {
        //return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[10]/XCUIElementTypeOther[16]/XCUIElementTypeOther[7]/XCUIElementTypeOther[2]')
        return $('//XCUIElementTypeStaticText[@name="Passport Issue Country"]')
    }
    get textboxTravelPassportIssueCountry() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[9]/XCUIElementTypeOther[9]/XCUIElementTypeOther[7]/XCUIElementTypeOther[2]')
    }
    get dropdownPassportIssueCountry() {
        return $('(//XCUIElementTypeOther[@name="Passport Issue Country"])[2]')
    }
    get passportcountryoption() {
        return $("span[class='mat-option-text'] span")
    }

    get buttonFFP() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[9]/XCUIElementTypeOther[1]/XCUIElementTypeOther[7]/XCUIElementTypeOther[2]')
    }
    get buttonMcFFP() {
        return $('//XCUIElementTypeSwitch[@name="WOULD YOU LIKE TO PROVIDE FLYER PROGRAM? YES"]')
    }

    get optionFFP() {
        return $('(//XCUIElementTypeOther[@name="Frequent Flyer Program"])[2]//XCUIElementTypeOther[@name="Air India - Flying Returns"]')
    }
    get dropdownMcFFP() {
        return $('//XCUIElementTypeStaticText[@name="Frequent Flyer airline :"]')
    }
    get optionMcFFP() {
        return $('//XCUIElementTypeButton[@name="Air India"]')
    }
    get ffpbuttonlist() {
        return $$(".mat-option")
    }

    get textboxFFPnumber() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[9]/XCUIElementTypeOther[2]/XCUIElementTypeOther[7]/XCUIElementTypeOther')
    }
    get textboxMcFFPnumber() {
        return $('//XCUIElementTypeOther[@name="Frequent Flyer number :"]')
    }
    get textboxEmail() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[11]/XCUIElementTypeOther[1]/XCUIElementTypeOther[7]/XCUIElementTypeTextField')
    }
    get textboxMcEmail() {
        return $('//XCUIElementTypeOther[@name="Email *"]')
    }
    get textboxConfirmEmailId() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[11]/XCUIElementTypeOther[2]/XCUIElementTypeOther[7]/XCUIElementTypeOther')

    }
    get textboxMcConfirmEmail() {
        return $('//XCUIElementTypeOther[@name="Confirm Email *"]')
    }
    get confirmemail() {
        return $$(".contact-info-confirm-email-input")
    }
    get textboxConEmail() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[12]/XCUIElementTypeOther[1]/XCUIElementTypeOther[7]/XCUIElementTypeOther')
    }
    get textboxIntEmail() {
        //return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[14]/XCUIElementTypeOther[1]/XCUIElementTypeOther[7]/XCUIElementTypeOther')
        return $('//XCUIElementTypeStaticText[@name="Email Address"]')
    }
    get textboxTravelEmail() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[13]/XCUIElementTypeOther[1]/XCUIElementTypeOther[7]/XCUIElementTypeOther')
    }
    get textboxConConfirmEmail() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[12]/XCUIElementTypeOther[2]/XCUIElementTypeOther[7]/XCUIElementTypeOther')
    }
    get textboxIntConfirmEmail() {
        //return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[14]/XCUIElementTypeOther[2]/XCUIElementTypeOther[7]/XCUIElementTypeOther')
        return $('//XCUIElementTypeStaticText[@name="Confirm Email Address"]')
    }
    get textboxTravelConfirmEmail() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[13]/XCUIElementTypeOther[2]/XCUIElementTypeOther[7]/XCUIElementTypeOther')
    }
    get textboxCountryCode() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[13]/XCUIElementTypeOther[1]/XCUIElementTypeOther[7]/XCUIElementTypeOther[2]')

    }
    get textboxMcCountryCode() {
        //return $('//XCUIElementTypeOther[contains(@name,"Country Code")]')
        return $('//XCUIElementTypeOther[contains(@name,"Country Code")]/following-sibling::XCUIElementTypeOther')
    }

    get textboxConCountryCode() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[14]/XCUIElementTypeOther[1]/XCUIElementTypeOther[7]/XCUIElementTypeOther[2]')
    }
    get textboxIntCountryCode() {
        return $('//XCUIElementTypeStaticText[@name="Country Code"]')
    }
    get textboxTravelCountryCode() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[15]/XCUIElementTypeOther[1]/XCUIElementTypeOther[7]/XCUIElementTypeOther[2]')
    }
    get textboxConMobile() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[14]/XCUIElementTypeOther[2]/XCUIElementTypeOther[7]/XCUIElementTypeOther')
    }
    get textboxContactMobile() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[15]/XCUIElementTypeOther[2]/XCUIElementTypeOther[7]/XCUIElementTypeOther')
    }
    get textboxIntMobile() {
        //return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[16]/XCUIElementTypeOther[2]/XCUIElementTypeOther[7]/XCUIElementTypeOther')
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[16]/XCUIElementTypeOther[2]/XCUIElementTypeOther[7]/XCUIElementTypeTextField')
    }
    get textboxTravelMobile() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[15]/XCUIElementTypeOther[2]/XCUIElementTypeOther[7]/XCUIElementTypeOther')
    }
    get optionCountryCode() {
        return $('(//XCUIElementTypeOther[@name="Country Code"])[2]')
    }
    get textboxEmergencyCountryCode() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[16]/XCUIElementTypeOther[2]/XCUIElementTypeOther[7]')
    }
    get textboxConEmgCountryCode() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[17]/XCUIElementTypeOther[2]/XCUIElementTypeOther[7]')
    }
    get textboxIntEmgCountryCode() {
        //return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[19]/XCUIElementTypeOther[2]/XCUIElementTypeOther[7]')
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[18]/XCUIElementTypeOther[2]/XCUIElementTypeOther[7]/XCUIElementTypeOther[1]')
    }
    get textboxTravelEmgCode() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[19]/XCUIElementTypeOther[2]/XCUIElementTypeOther[7]')
    }
    get optionEmergencyCountryCode() {
        return $('(//XCUIElementTypeOther[@name="Country Code"])[3]')
    }
    get textboxPhoneNumber() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[16]/XCUIElementTypeOther[3]/XCUIElementTypeOther[7]')
    }
    get textboxMcEmgCountryCode() {
        //return $('//XCUIElementTypeOther[@name="Emergency Number *"]')
        return $('//XCUIElementTypeOther[@name="Emergency phone country code *"]//following-sibling::XCUIElementTypeOther')
    }
    get textboxMcEmgMobile() {
        const em = '**/XCUIElementTypeTextField[`value == "Enter an Emergency Phone"`]'
        return $(`-ios class chain:${em}`)
    }
    get textboxConEmMobile() {
        //return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[17]/XCUIElementTypeOther[3]/XCUIElementTypeOther[7]/XCUIElementTypeOther')
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[17]/XCUIElementTypeOther[3]/XCUIElementTypeOther[7]')
    }
    get textboxIntEmgMobile() {
        //return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[19]/XCUIElementTypeOther[3]/XCUIElementTypeOther[7]/XCUIElementTypeTextField')
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[18]/XCUIElementTypeOther[3]/XCUIElementTypeOther[7]/XCUIElementTypeTextField')
    }
    get textboxTravelEmgMobile() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[19]/XCUIElementTypeOther[3]/XCUIElementTypeOther[7]/XCUIElementTypeTextField')
    }
    get textboxPhoneNo() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[13]/XCUIElementTypeOther[2]/XCUIElementTypeOther[7]/XCUIElementTypeOther')
    }
    get textboxMcMobile() {
        return $('//XCUIElementTypeOther[@name="Mobile phone number *"]')
    }
    get textboxMcMobNumber() {
        return $('//XCUIElementTypeTextField[@value="Enter your Mobile Number"]')
    }
    get buttonDone() {
        return $(`~Done`)
    }
    get textInfant() {
        return $('//XCUIElementTypeStaticText[@name="infant"]')
    }
    get buttonFillPaxDetails() {
        return $(`~Fill Passenger Details`)
    }
    get textPaxTitle() {
        return $(`//XCUIElementTypeOther[@name="Title"]`)
    }
    get textPaxInfo() {
        const pd = 'label CONTAINS "For Domestic travel "'
        return $(`-ios predicate string:${pd}`)
        //return $(`//XCUIElementTypeStaticText[@name="Please Enter Passenger Details"]`)
    }
    get anotheremail() {
        return $(".contact-info-add-email")
    }

    get anotherphone() {
        return $(".contact-info-add-phone")
    }

    get emergencyphone() {
        return $$(".contact-info-name-input")
    }

    get checkboxConsent() {
        return $('//XCUIElementTypeStaticText[@name="I Agree To -"]')
        //return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[16]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther[2]')
    }
    get checkboxMcConsent() {
        return $('//XCUIElementTypeOther[contains(@name,"Save your personal information")]')
    }
    get toggleEmergencyContact() {
        //return $("(//span[@class='mat-slide-toggle-bar'])[2]")
        return $(`~Fill Emergency Contact Information`)
    }
    get buttonEmergencyContact() {
        return $('//XCUIElementTypeSwitch[@name="FILL EMERGENCY CONTACT? YES"]')
    }
    get textboxEmergencyContactName() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[16]/XCUIElementTypeOther[1]/XCUIElementTypeOther[7]/XCUIElementTypeOther')
    }
    get textboxMcEmgName() {
        return $('//XCUIElementTypeOther[@name="Emergency Name *"]')
    }
    get textboxConContactName() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[17]/XCUIElementTypeOther[1]/XCUIElementTypeOther[7]/XCUIElementTypeOther')
    }
    get textboxIntEmgContactName() {
        //return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[19]/XCUIElementTypeOther[1]/XCUIElementTypeOther[7]/XCUIElementTypeTextField')
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[18]/XCUIElementTypeOther[1]/XCUIElementTypeOther[7]/XCUIElementTypeOther')
    }
    get textboxTravelEmgContactName() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[19]/XCUIElementTypeOther[1]/XCUIElementTypeOther[7]/XCUIElementTypeTextField')
    }
    get emergencycontactcode() {
        return $("//div[@class='mat-form-field-infix ng-tns-c32-87']")
    }

    get emergencyphoneno() {
        return $("(//input[@type='tel'])[2]")
    }

    get nextbutton() {
        return $("//span[text()='Next passenger']")
    }

    get buttonNextPassenger() {
        return $(`~NEXT PASSENGER`)
    }
    get buttonContinue() {
        return $(`~Continue`)
    }
    get textErrorMsg() {
        return $(`~complementary`)
    }
    get textErrors() {
        const err = 'label CONTAINS "Error"'
        return $(`-ios predicate string:${err}`)
    }
    get checkboxSavePax() {
        return $('//XCUIElementTypeStaticText[@name="Save your personal information now, save time in future visits."]')
    }
    get buttonConfirm() {
        return $(`~CONFIRM`)
    }

}

module.exports = new Passengerdetails();