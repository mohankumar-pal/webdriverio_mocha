class Passengerdetails {
    get textTitle() {
        return $('//android.widget.TextView[@text="Title"]')
    }
    get dropdownTitle() {
        return $('//XCUIElementTypeOther[@name="Title"]')
    }
    get textConcessionTitle() {
        return $('//XCUIElementTypeOther[@name="Title"]')
    }
    get dropdownNameTitle() {
        return $$('//android.view.View[contains(@resource-id,"mat-option")]')
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
        return $('//android.widget.EditText[contains(@resource-id,"firstName")]')
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
        return $('//android.widget.EditText[contains(@resource-id,"firstName")]')
    }
    get textboxLastName() {
        return $('//android.widget.EditText[contains(@resource-id,"lastName")]')
    }
    get dropdownGenderField() {
        return $('//android.widget.TextView[@text="Gender"]')
    }
    get textboxMcLastname() {
        return $('//XCUIElementTypeOther[@name="Surname/Last Name *"]')
    }
    get buttonGoNext() {
        return $('//XCUIElementTypeButton[@name="GO TO NEXT"]')
    }
    get textboxInfantLastName() {
        return $('//android.widget.EditText[contains(@resource-id,"lastName")]')
    }
    get textboxDOB() {
        return $('//android.widget.EditText[contains(@resource-id,"dob")]')
    }
    get textboxInfantDOB() {
        return $('//android.widget.EditText[contains(@resource-id,"dob")]')
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
        //return $('//android.widget.ToggleButton')
        return $('//android.widget.TextView[@text="I want to fill advanced information now"]')
    }

    get textboxTravelerFirstName() {
        return $('(//android.widget.EditText[contains(@resource-id,"firstName")])[2]')
    }
    get textboxTravelFirstName() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[9]/XCUIElementTypeOther[1]/XCUIElementTypeOther[7]/XCUIElementTypeTextField')
    }
    get infomname() {
        return $(".apis-regulatory-per-route-middle-name")
    }

    get textboxTravelerLastName() {
        return $('(//android.widget.EditText[contains(@resource-id,"lastName")])[2]')
    }
    get textboxTravelLastName() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[9]/XCUIElementTypeOther[3]/XCUIElementTypeOther[7]/XCUIElementTypeTextField')
    }
    get dropdownGender() {
        return $('//XCUIElementTypeOther[@name="Gender refx-apis-regulatory-per-route-pres.gender.placeholder"]')
    }

    get optionMale() {
        return $('//android.view.View[@text="Male"]')
    }

    get optionFemale() {
        return $('//android.view.View[@text="Female"]')
    }

    get optionDisclosed() {
        return $('//android.view.View[@text="Undisclosed"]')
    }

    get textboxNationality() {
        return $('//android.widget.EditText[contains(@resource-id,"nationality")]')
    }
    get textboxTravelNationality() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[9]/XCUIElementTypeOther[6]/XCUIElementTypeOther[7]/XCUIElementTypeOther[2]')
    }
    get dropdownNationality() {
        return $('//android.widget.ListView[contains(@text,"Nationality")]')
    }

    get textboxPassportNo() {
        return $('//android.widget.EditText[contains(@resource-id,"documentNumber")]')
    }
    get textboxTravelPassportNo() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[9]/XCUIElementTypeOther[7]/XCUIElementTypeOther[7]/XCUIElementTypeOther')
    }
    get textboxPassportExpiryDate() {
        return $('//android.widget.EditText[contains(@resource-id,"expiryDate")]')
    }
    get textboxTravelPassportExpDate() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[9]/XCUIElementTypeOther[8]/XCUIElementTypeOther[7]/XCUIElementTypeOther')
    }
    get textboxPassportIssueCountry() {
        return $('//android.widget.EditText[contains(@resource-id,"issuanceCountry")]')
    }
    get textboxTravelPassportIssueCountry() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[9]/XCUIElementTypeOther[9]/XCUIElementTypeOther[7]/XCUIElementTypeOther[2]')
    }
    get dropdownPassportIssueCountry() {
        return $('//android.widget.ListView[contains(@text,"Passport Issue Country")]')
    }
    get passportcountryoption() {
        return $("span[class='mat-option-text'] span")
    }

    get buttonFFP() {
        return $('//android.widget.Spinner[contains(@resource-id,"FrequentFlyerprogram")]')
    }
    get buttonMcFFP() {
        return $('//XCUIElementTypeSwitch[@name="WOULD YOU LIKE TO PROVIDE FLYER PROGRAM? YES"]')
    }

    get optionFFP() {
        return $('//android.view.View[contains(@text,"Air India - Flying Returns")]')
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
        return $('//android.widget.EditText[contains(@resource-id,"frequentFlyerCardId")]')
    }
    get textboxMcFFPnumber() {
        return $('//XCUIElementTypeOther[@name="Frequent Flyer number :"]')
    }
    get textboxEmail() {
        return $('//android.widget.EditText[contains(@resource-id,"email")]')
    }
    get textboxMcEmail() {
        return $('//XCUIElementTypeOther[@name="Email *"]')
    }
    get textboxConfirmEmailId() {
        return $('//android.widget.EditText[contains(@resource-id,"confirmedEmail")]')
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
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[14]/XCUIElementTypeOther[1]/XCUIElementTypeOther[7]/XCUIElementTypeOther')
    }
    get textboxTravelEmail() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[13]/XCUIElementTypeOther[1]/XCUIElementTypeOther[7]/XCUIElementTypeOther')
    }
    get textboxConConfirmEmail() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[12]/XCUIElementTypeOther[2]/XCUIElementTypeOther[7]/XCUIElementTypeOther')
    }
    get textboxIntConfirmEmail() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[14]/XCUIElementTypeOther[2]/XCUIElementTypeOther[7]/XCUIElementTypeOther')
    }
    get textboxTravelConfirmEmail() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[13]/XCUIElementTypeOther[2]/XCUIElementTypeOther[7]/XCUIElementTypeOther')
    }
    get textboxCountryCode() {
        return $('//android.widget.EditText[contains(@resource-id,"phoneCountryCode")]')
    }
    get textboxMcCountryCode() {
        return $('//XCUIElementTypeOther[@name="Country code: *"]')
    }

    get textboxConCountryCode() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[14]/XCUIElementTypeOther[1]/XCUIElementTypeOther[7]/XCUIElementTypeOther[2]')
    }
    get textboxIntCountryCode() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[16]/XCUIElementTypeOther[1]/XCUIElementTypeOther[7]/XCUIElementTypeOther[2]')
    }
    get textboxTravelCountryCode() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[15]/XCUIElementTypeOther[1]/XCUIElementTypeOther[7]/XCUIElementTypeOther[2]')
    }
    get textboxConMobile() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[14]/XCUIElementTypeOther[2]/XCUIElementTypeOther[7]/XCUIElementTypeOther')
    }
    get textboxIntMobile() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[16]/XCUIElementTypeOther[2]/XCUIElementTypeOther[7]/XCUIElementTypeOther')
    }
    get textboxTravelMobile() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[15]/XCUIElementTypeOther[2]/XCUIElementTypeOther[7]/XCUIElementTypeOther')
    }
    get optionCountryCode() {
        return $('//android.widget.ListView[contains(@text,"Country Code")]')
    }
    get textboxEmergencyCountryCode() {
        return $('//android.widget.EditText[contains(@resource-id,"emergencyItemcountryPhoneExtension")]')
    }
    get textboxConEmgCountryCode() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[17]/XCUIElementTypeOther[2]/XCUIElementTypeOther[7]')
    }
    get textboxIntEmgCountryCode() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[19]/XCUIElementTypeOther[2]/XCUIElementTypeOther[7]')
    }
    get textboxTravelEmgCode() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[18]/XCUIElementTypeOther[2]/XCUIElementTypeOther[7]')
    }
    get optionEmergencyCountryCode() {
        return $('//android.widget.ListView[contains(@text,"Country Code")]')
    }
    get textboxPhoneNumber() {
        return $('//android.widget.EditText[contains(@resource-id,"emergencyItemphone")]')
    }
    get textboxMcEmgCountryCode() {
        return $('//XCUIElementTypeOther[@name="Emergency Number *"]')
    }
    get textboxMcEmgMobile() {
        const em = '**/XCUIElementTypeTextField[`value == "Enter an Emergency Phone"`]'
        return $(`-ios class chain:${em}`)
    }
    get textboxConEmMobile() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[17]/XCUIElementTypeOther[3]/XCUIElementTypeOther[7]/XCUIElementTypeOther')
    }
    get textboxIntEmgMobile() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[19]/XCUIElementTypeOther[3]/XCUIElementTypeOther[7]/XCUIElementTypeTextField')
    }
    get textboxTravelEmgMobile() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[18]/XCUIElementTypeOther[3]/XCUIElementTypeOther[7]/XCUIElementTypeTextField')
    }
    get textboxPhoneNo() {
        return $('(//android.widget.EditText[contains(@resource-id,"phoneItem")])[2]')
    }
    get textboxMcMobile() {
        return $('//XCUIElementTypeOther[@name="Mobile phone number *"]')
    }
    get buttonDone() {
        return $(`~Done`)
    }
    get textInfant() {
        return $('//XCUIElementTypeStaticText[@name="infant"]')
    }
    get buttonFillPaxDetails() {
        return $('//android.widget.Button[@text="FILL PASSENGER DETAILS"]')
    }
    get textPaxTitle() {
        return $('//android.view.View/android.view.View[2]/android.view.View[3]/android.widget.TextView[2]')
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
        return $('//android.widget.TextView[contains(@text,"I Agree To -")]')
    }

    get toggleEmergencyContact() {
        return $('//android.widget.ToggleButton')
    }
    get buttonEmergencyContact() {
        return $('//XCUIElementTypeSwitch[@name="FILL EMERGENCY CONTACT? YES"]')
    }
    get textboxEmergencyContactName() {
        return $('//android.widget.EditText[contains(@resource-id,"emergencyContactName")]')
    }
    get textboxMcEmgName() {
        return $('//XCUIElementTypeOther[@name="Emergency Name *"]')
    }
    get textboxConContactName() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[17]/XCUIElementTypeOther[1]/XCUIElementTypeOther[7]/XCUIElementTypeOther')
    }
    get textboxIntEmgContactName() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[19]/XCUIElementTypeOther[1]/XCUIElementTypeOther[7]/XCUIElementTypeTextField')
    }
    get textboxTravelEmgContactName() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[18]/XCUIElementTypeOther[1]/XCUIElementTypeOther[7]/XCUIElementTypeTextField')
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
        return $('//android.widget.Button[contains(@text,"NEXT PASSENGER")]')
    }
    get buttonContinue() {
        return $(`~Continue`)
    }
    get textErrorMsg() {
        return $('//android.widget.TextView[contains(@text,"error")]')
    }
    get textErrors() {
        const err = 'label CONTAINS "Error"'
        return $(`-ios predicate string:${err}`)
    }
    get checkboxSavePax() {
        return $('//XCUIElementTypeStaticText[@name="Save your personal information now, save time in future visits."]')
    }
    get buttonConfirm() {
        return $('//android.widget.Button[contains(@text,"CONFIRM")]')
    }

}

module.exports = new Passengerdetails();