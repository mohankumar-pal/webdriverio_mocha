class checkin {
    get buttonCheckin() {
        return $('//XCUIElementTypeButton[@name="Check-in"]')
        //return $(`~homeTab.checkIns`)
    }
    get buttonLeftArrowBack() {
        return $('//XCUIElementTypeStaticText[@name="ITINERARY"]/preceding-sibling::XCUIElementTypeButton')
    }
    get buttonModifyBooking() {
        return $('//XCUIElementTypeStaticText[@name="Modify Booking"]')
    }
    get buttonManage() {
        return $('//XCUIElementTypeStaticText[@name="View Trip"]')
        //return $('//XCUIElementTypeButton[@name="MANAGE" or @name="Manage"]')
    }
    get textboxReferenceNumber() {
        return $('//XCUIElementTypeStaticText[@name="Booking Reference / Ticket Number"]/following-sibling::XCUIElementTypeTextField')
    }
    get textboxLastname() {
        return $('//XCUIElementTypeStaticText[@name="Last Name"]/following-sibling::XCUIElementTypeTextField')
    }
    get buttonCheck_in() {
        return $('//XCUIElementTypeButton[@name="CHECK-IN"]')
    }
    get buttonStartCheckin1() {
        return $('//XCUIElementTypeButton[@name="Start Check-In"]')
    }
    get buttonStartCheckin() {
        return $$('//XCUIElementTypeButton[@name="Start Check-In"]')
    }
    get buttonCheckinTrips() {
        return $('//XCUIElementTypeStaticText[@name="Check-In"]')
    }
    get textSelectPassenger() {
        return $('//XCUIElementTypeStaticText[contains(@name,"SELECT PASSENGER")]')
    }
    get buttonContinueCheckin() {
        return $(`~Continue`)
    }
    get textCheckinBaggage() {
        return $('//XCUIElementTypeStaticText[@name="ARE YOUR BAGS SAFE FOR TAKE-OFF?"]')
    }
    get buttonAgreeContinue() {
        return $('//XCUIElementTypeButton[@name="I Agree And Continue"]')
    }
    get textCheckedIn() {
        return $('//XCUIElementTypeStaticText[@name="YOU ARE CHECKED IN!"]')
    }
    get textSelectSeat() {
        return $(`~Select your seat`)
    }
    get buttonConfirmSeatSelection() {
        return $(`~Confirm And Continue`)
    }
    get buttonGoToNextFlight() {
        return $(`~Confirm And Go To Next Flight`)
    }
    get buttonViewBoardingPass() {
        return $(`~View Boarding Passes`)
    }
    get textSuccessCheckedIn() {
        return $('//XCUIElementTypeStaticText[@name="Checked in"]')
    }
    get textBoardingPass() {
        return $('//XCUIElementTypeStaticText[@name="BOARDING PASS"]')
    }
    get buttonDownloadBoardingPass() {
        return $(`~Download / Print`)
    }
    get buttonCloseBoardingPass() {
        return $(`~Done`)
    }
    get buttonSendBoardingPass() {
        return $(`~Send Boarding Passes`)
    }
    get checkboxSendPdf() {
        return $(`~Send by email in PDF format`)
    }
    get textboxPdfEmail() {
        return $('//XCUIElementTypeOther[@name="Email"]')
    }
    get buttonSendPassbook() {
        return $(`~Send by email in Passbook pass format`)
    }
    get toggleSendAllPass() {
        return $(`~Send all passes to the same email address`)
    }
    get buttonSendBySms() {
        return $(`~Send by SMS`)
    }
    get textboxSmsCountryCode1() {
        return $('//XCUIElementTypeStaticText[@name="Country calling code"]')
        //return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[10]/XCUIElementTypeOther[1]/XCUIElementTypeOther[7]/XCUIElementTypeOther[2]')
    }
    get textboxSmsCountryCode2() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[9]/XCUIElementTypeOther[1]/XCUIElementTypeOther[7]/XCUIElementTypeOther[2]')
    }
    get textboxSmsCountryCode3() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[15]/XCUIElementTypeOther[1]/XCUIElementTypeOther[7]/XCUIElementTypeOther[2]')
    }
    get textboxSmsCountryCode4() {
        return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[11]/XCUIElementTypeOther[1]/XCUIElementTypeOther[7]/XCUIElementTypeOther[2]')
    }
    get optionCountryCode() {
        return $('(//XCUIElementTypeOther[@name="Country calling code"])[2]')
    }
    get textboxPhoneNumber() {
        return $('//XCUIElementTypeTextField[@value="Enter phone number"]')
    }
    get textboxEmailId() {
        return $$('//XCUIElementTypeOther[@name="Email Address"]')
    }
    get textboxCountryCode() {
        return $$('//XCUIElementTypeOther[@name="Country calling code"]')
    }
    get textboxSmsPhoneNumber() {
        return $('//XCUIElementTypeTextField[@value="Enter phone number"]')
    }
    get textboxMobileNumber() {
        return $$('//XCUIElementTypeOther[@name="Phone Number"]')
    }
    get checkboxFillSameInfo() {
        return $(`~Same information for all passengers.`)
    }
    get textRequiredInfo() {
        return $('//XCUIElementTypeStaticText[@name="REQUIRED INFORMATION"]')
    }
    get buttonExitCheckin() {
        return $('//XCUIElementTypeButton[@name="Exit Check-In"]')
    }
    get textboxCountryOfResidence() {
        return $('//XCUIElementTypeOther[@name="Country information, region"]/XCUIElementTypeOther[2]')
    }
    get optionCountry() {
        return $('(//XCUIElementTypeOther[@name="Country of residence"])[2]')
    }
    get buttonSaveCountry() {
        return $('//XCUIElementTypeButton[@name="Save Country Information"]')
    }
    get textboxNationality() {
        //return $('//XCUIElementTypeStaticText[contains(@name,"Nationality")]')
        return $('//XCUIElementTypeOther[@name="Nationality information, region"]/XCUIElementTypeOther[2]')
    }
    get optionNationality() {
        return $('(//XCUIElementTypeOther[@name="Nationality"])[2]')
    }
    get buttonSaveNationality() {
        return $('//XCUIElementTypeButton[@name="Save Nationality Information"]')
    }
    get buttonSavePersDetails() {
        return $('//XCUIElementTypeButton[@name="Save Personal Details"]')
    }
    get buttonFemale() {
        return $('//XCUIElementTypeSwitch[@name="FEMALE"]')
    }
    get buttonoMale() {
        return $('//XCUIElementTypeSwitch[@name="MALE"]')
    }
    get buttonSelectDate() {
        return $('(//XCUIElementTypeSwitch)[3]')
    }
    get buttonCalendar() {
        return $(`~Open calendar`)
    }
    get buttonTravelDocuments() {
        return $('//XCUIElementTypeButton[@name="Travel document"]')
    }
    get dropdownDocType() {
        return $('//XCUIElementTypeStaticText[@name="Document type"]')
    }
    get optionDocType() {
        return $('//XCUIElementTypeOther[@name="Passport"]')
    }
    get textboxDocNumber() {
        return $('//XCUIElementTypeOther[@name="Travel document, region"]/XCUIElementTypeOther[15]/XCUIElementTypeTextField')
        //return $('//XCUIElementTypeStaticText[@name="Document number"]')
    }
    get textboxWebDocNumber() {
        return $("//input[contains(@class,'document-number-input')]")
    }
    get textboxCountry() {
        return $('//XCUIElementTypeStaticText[@name="Country"]')
    }
    get dropdownCountry() {
        return $('//XCUIElementTypeOther[@name="Country"]')
    }
    get textboxDocExpDate() {
        return $('//XCUIElementTypeTextField[@value="Day | Month | Year"]')
    }
    get textboxDocIssuingCountry() {
        //return $('//XCUIElementTypeOther[@name="Travel document, region"]/XCUIElementTypeOther[37]/XCUIElementTypeOther[1]')
        return $('//XCUIElementTypeStaticText[@name="Document issuing country"]')
    }
    get textboxWebDocIssuingCountry() {
        return $("//input[contains(@class,'document-issuance-country-input')]")
    }
    get dropdownDocIssuingCountry() {
        return $('//XCUIElementTypeOther[@name="Document issuing country"]')
    }
    get optionWebDocIssuingCountry() {
        return $('//span[contains(@class,"mat-option-text")]')
    }
    get buttonSaveTravelDoc() {
        return $('//XCUIElementTypeButton[@name="Save Travel Document"]')
    }
    get buttonNextPassenger() {
        return $(`~Continue To Next Passenger`)
        //return $(`~CONTINUE TO NEXT PASSENGER`)
    }
    get buttonDetailsContinue() {
        return $(`~Continue`)
    }
    get textSeeDetails() {
        //return $(`~See Details`)
        return $('//XCUIElementTypeStaticText[@name="View Cart Details"]')
    }
    get buttonRightArrow() {
        return $$('//XCUIElementTypeStaticText[@name="Gate"]')
    }
    get buttonIssueBoardingPass() {
        return $(`~Send Boarding Passes`)
    }
    get textBoardingPassSent() {
        return $(`~BOARDING PASSES SENT`)
    }
    get buttonBackToHome() {
        return $(`~//XCUIElementTypeButton[@name="BACK TO HOME"]`)
    }
    get buttonCloseIcon() {
        return $('//XCUIElementTypeStaticText[@name="Check in now"]/following-sibling::XCUIElementTypeImage')
        //return $('//XCUIElementTypeApplication[@name="Air India QA"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeImage')
    }
    get buttonOk() {
        //return $(`~Ok`)
        return $('//XCUIElementTypeButton[@name="Confirm"]')
    }
    get buttonHome() {
        return $(`~homeTab.home`)
    }
    get textCheckinHome() {
        return $(`~Check-In`)
    }
    get textHomepageBoardingPass() {
        return $(`~View Boarding Pass`)
    }
    get keyConfirm() {
        return $('//XCUIElementTypeButton[@name="Confirm"]')
    }
    get buttonBack() {
        return $(`~navigationBackBlackLeft`)
        //return $(`~Back`)
    }
    get textboxVisaNumber() {
        return $('//XCUIElementTypeTextField[@value = "Visa number"]')
    }
    get textboxVisaCountry() {
        //return $('//XCUIElementTypeStaticText[@name="Country where the visa applies"]')
        return $('//XCUIElementTypeOther[@name="Visa information, region"]/XCUIElementTypeOther[3]')
    }
    get optionVisaCountry() {
        return $('(//XCUIElementTypeOther[@name="Country where the visa applies"])[2]')
    }
    get textboxVisaIssueDate() {
        return $('//XCUIElementTypeTextField[@value="Day | Month | Year"]')
    }
    get textboxVisaExpDate() {
        return $('(//XCUIElementTypeTextField[@value="Day | Month | Year"])[1]')
    }
    get textboxVisaIssuingCountry() {
        return $('//XCUIElementTypeOther[@name="Visa information, region"]/XCUIElementTypeOther[8]')
        //return $('//XCUIElementTypeStaticText[@name="Visa issuing country"]')
    }
    get optionVisaIssuingCountry() {
        return $('(//XCUIElementTypeOther[@name="Visa issuing country"])[2]')
    }
    get buttonSaveVisa() {
        return $('//XCUIElementTypeButton[@name="Save Visa Information"]')
    }
    get dropdownPurposeOfVisit() {
        return $('//XCUIElementTypeOther[@name="Purpose of visit Choose your purpose of visit"]')
    }
    get optionPurposeOfVisit() {
        return $('//XCUIElementTypeOther[@name="Purpose of visit"]/XCUIElementTypeOther')
    }
    get buttonSaveAddInfo() {
        return $('//XCUIElementTypeButton[@name="Save Additional Information"]')
    }
    get textboxHouseNumber() {
        return $('//XCUIElementTypeTextField[@value="Number and street name"]')
    }
    get textboxPostcode() {
        return $('//XCUIElementTypeTextField[@value="Postcode / zip"]')
    }
    get textboxCity() {
        return $('//XCUIElementTypeTextField[@value="City"]')
    }
    get textboxAddressCountry() {
        return $('//XCUIElementTypeOther[@name="Destination address, region"]/XCUIElementTypeOther[6]')
    }
    get optionAddressCountry() {
        return $('(//XCUIElementTypeOther[@name="Country"])[2]')
    }
    get dropdownState() {
        return $('//XCUIElementTypeOther[@name="State"]')
    }
    get buttonSaveAddress() {
        return $('//XCUIElementTypeButton[@name="Save Destination Address"]')
    }
}
module.exports = new checkin()