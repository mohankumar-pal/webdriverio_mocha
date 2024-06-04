const library = require('../../common/Genericlibrary.js')
const paxdetailpo = require('../../pageobjects/multicity/Passengerdetpo.js')


async function basicdetails(adulttittle, firstname, lastname, dateofbirth, gender) {
    
        await lib.clickAction(pd.title)
        await browser.pause(1000)
        for (var i = 0; i < await pd.nametittledropdown.length; i++) {
            var title = await pd.nametittledropdown[i].getText()
            if (title === adulttittle) {
                await lib.clickAction(pd.nametittledropdown[i])
                break;
            }
        }

        await browser.pause(3000)
        await lib.fillTextbox(pd.firstname, firstname)
        await lib.fillTextbox(pd.lastname, lastname)
        await lib.fillTextbox(pd.dateofbirth, dateofbirth)
        if (await pd.gender.length != 0) {
            await lib.clickAction(pd.gender[0])
            for (var i = 0; i < await pd.nametittledropdown.length; i++) {
                var title = await pd.nametittledropdown[i].getText()
                if (title === gender) {
                    await lib.clickAction(pd.nametittledropdown[i])
                    break;
                }
            }
        }


    
}

async function basicdetinf(firstname, lastname, dateofbirth, gender) {
    await lib.fillTextbox(pd.firstname, firstname)
    await lib.fillTextbox(pd.lastname, lastname)
    await lib.fillTextbox(pd.dateofbirth, dateofbirth)
    if (await pd.gender.length != 0) {
        await lib.clickAction(pd.gender[0])
        for (var i = 0; i < await pd.nametittledropdown.length; i++) {
            var title = await pd.nametittledropdown[i].getText()
            if (title === gender) {
                await lib.clickAction(pd.nametittledropdown[i])
                break;
            }
        }
    }
}

async function passportdet(traveldoc, emergencyfname, emergencylname, emergencygender,
    Nationlaity, passportnumber, Expirydate, passportissuecountry) {
    if (traveldoc === "Yes") {
        if (await pd.travelerinfo.isDisplayed() || await pd.infofname.isDisplayed()) {
            if (await pd.travelerinfo.isDisplayed())
                await lib.clickAction(pd.travelerinfo)
            await browser.pause(1000)
            await lib.clickAction(pd.infofname)
            await lib.fillTextbox(pd.infofname, emergencyfname)
            await lib.clickAction(pd.infolname)
            await lib.fillTextbox(pd.infolname, emergencylname)

            if (await pd.infogender.isDisplayed()) {
                await pd.infogender.scrollIntoView({ block: 'center', inline: 'center' })
                await lib.clickAction(pd.infogender)
                await browser.pause(1000)
                if (emergencygender == "Male") {
                    await lib.clickAction(pd.infogendermale)
                } else if (emergencygender == "Female") {
                    await lib.clickAction(pd.infogenderfemale)
                } else {
                    await lib.clickAction(pd.infogenderdisclosed)
                }
            }

            await lib.fillTextbox(pd.nationality, Nationlaity)
            await browser.pause(1000)
            await lib.clickAction(pd.nationalityoption[0])
            await browser.pause(1000)
            await lib.fillTextbox(pd.passportno, passportnumber)
            await lib.fillTextbox(pd.passportexpirydate, Expirydate)
            await browser.pause(1000)
            await lib.fillTextbox(pd.passportissuecountry, passportissuecountry)
        }
    }
}

async function frequentflyer(FFP, FFPairlineAdult1, Frequentflyernumber) {
    if (FFP == "Yes") {
        await lib.clickAction(pd.ffpbutton[3])
        await browser.pause(1000)
        await $("//span[@aria-label='" + FFPairlineAdult1 + "']").click()
        await lib.fillTextbox(pd.ffpnumber, Frequentflyernumber)
    }

}

async function basiccontact(Emailaddress, confirmemail, countrycode,
    Mobilenumber) {


    await lib.fillTextbox(pd.email[0], Emailaddress)
    await lib.fillTextbox(pd.email[1], confirmemail)
    // if(Additionalemail=="Yes"){
    //     await   lib.fillTextbox(pd.email[2],Emailaddress)
    //     await   lib.fillTextbox(pd.email[3],confirmemail)
    // }
    await browser.pause(2000)
    await lib.fillTextbox(pd.countrycode[0], countrycode)
    await lib.fillTextbox(pd.phonenumber[0], Mobilenumber)
    // if(Additionalphone=="Yes"){
    //     await lib.fillTextbox(pd.countrycode[1],countrycode)
    //     await lib.fillTextbox(pd.phonenumber[1],Mobilenumber)
    // }




    await lib.clickAction(pd.consent)


}
async function emergency(EmergencyContact, Emergencycontactname, emergencyCode, Emergencyphoneno) {
    if (EmergencyContact == "Yes") {
        if (await pd.emergencycontact.isDisplayed())
            await lib.clickAction(pd.emergencycontact)
        await browser.pause(1000)
        await lib.fillTextbox(pd.emergencycontactname, Emergencycontactname)
        await lib.fillTextbox(pd.countrycode[1], emergencyCode)
        await lib.fillTextbox(pd.phonenumber[1], Emergencyphoneno)


    }


}
async function MCAdultInfant(NumberofAdult,Adult1Tittle,Adult2Tittle,Adult3Tittle,Adult4Tittle,Adult5Tittle,Adult6Tittle,Adult7Tittle,Adult8Tittle,Adult9Tittle,
    Adult1FirstName,Adult2FirstName,Adult3FirstName,Adult4FirstName,Adult5FirstName,Adult6FirstName,Adult7FirstName,Adult8FirstName,Adult9FirstName,
    Adult1LastName,Adult2LastName,Adult3LastName,Adult4LastName,Adult5LastName,Adult6LastName,Adult7LastName,Adult8LastName,Adult9LastName,
    DoyouWanttoAddAdult1FFP,DoyouWanttoAddAdult2FFP,DoyouWanttoAddAdult3FFP,DoyouWanttoAddAdult4FFP,DoyouWanttoAddAdult5FFP,DoyouWanttoAddAdult6FFP,DoyouWanttoAddAdult7FFP,
    DoyouWanttoAddAdult8FFP,DoyouWanttoAddAdult9FFP,FFPnumberAdult1,FFPnumberAdult2,FFPnumberAdult3,FFPnumberAdult4,FFPnumberAdult5,FFPnumberAdult6,FFPnumberAdult7,FFPnumberAdult8,FFPnumberAdult9,
    Adult1gender,Adult2gender,Adult3gender,Adult4gender,Adult5gender,Adult6gender,Adult7gender,Adult8gender,Adult9gender,
    Adult1DOBDay,Adult2DOBDay,Adult3DOBDay,Adult4DOBDay,Adult5DOBDay,Adult6DOBDay,Adult7DOBDay,Adult8DOBDay,Adult9DOBDay,
    Adult1DOBMonth,Adult2DOBMonth,Adult3DOBMonth,Adult4DOBMonth,Adult5DOBMonth,Adult6DOBMonth,Adult7DOBMonth,Adult8DOBMonth,Adult9DOBMonth,
    Adult1DOBYear,Adult2DOBYear,Adult3DOBYear,Adult4DOBYear,Adult5DOBYear,Adult6DOBYear,Adult7DOBYear,Adult8DOBYear,Adult9DOBYear,
    Adult1Nationality,Adult2Nationality,Adult3Nationality,Adult4Nationality,Adult5Nationality,Adult6Nationality,Adult7Nationality,Adult8Nationality,Adult9Nationality,
    Adult1DocumentNumber,Adult2DocumentNumber,Adult3DocumentNumber,Adult4DocumentNumber,Adult5DocumentNumber,Adult6DocumentNumber,Adult7DocumentNumber,Adult8DocumentNumber,Adult9DocumentNumber,
    Adult1Issuedcountry,Adult2Issuedcountry,Adult3Issuedcountry,Adult4Issuedcountry,Adult5Issuedcountry,Adult6Issuedcountry,Adult7Issuedcountry,Adult8Issuedcountry,Adult9Issuedcountry,
    Adult1Expirydate,Adult2Expirydate,Adult3Expirydate,Adult4Expirydate,Adult5Expirydate,Adult6Expirydate,Adult7Expirydate,Adult8Expirydate,Adult9Expirydate,
    Adult1Expirymonth,Adult2Expirymonth,Adult3Expirymonth,Adult4Expirymonth,Adult5Expirymonth,Adult6Expirymonth,Adult7Expirymonth,Adult8Expirymonth,Adult9Expirymonth,
    Adult1ExpiryYear,Adult2ExpiryYear,Adult3ExpiryYear,Adult4ExpiryYear,Adult5ExpiryYear,Adult6ExpiryYear,Adult7ExpiryYear,Adult8ExpiryYear,Adult9ExpiryYear,
    Infant1FirstName,Infant2FirstName,Infant3FirstName,Infant4FirstName,Infant5FirstName,Infant6FirstName,Infant7FirstName,Infant8FirstName,Infant9FirstName,
    Infant1LastName,Infant2LastName,Infant3LastName,Infant4LastName,Infant5LastName,Infant6LastName,Infant7LastName,Infant8LastName,Infant9LastName,
    Infant1DOBDay,Infant2DOBDay,Infant3DOBDay,Infant4DOBDay,Infant5DOBDay,Infant6DOBDay,Infant7DOBDay,Infant8DOBDay,Infant9DOBDay,
    Infant1DOBMonth,Infant2DOBMonth,Infant3DOBMonth,Infant4DOBMonth,Infant5DOBMonth,Infant6DOBMonth,Infant7DOBMonth,Infant8DOBMonth,Infant9DOBMonth,
    Infant1DOBYear,Infant2DOBYear,Infant3DOBYear,Infant4DOBYear,Infant5DOBYear,Infant6DOBYear,Infant7DOBYear,Infant8DOBYear,Infant9DOBYear,
    Infant1gender,Infant2gender,Infant3gender,Infant4gender,Infant5gender,Infant6gender,Infant7gender,Infant8gender,Infant9gender,
    Infant1Nationality,Infant2Nationality,Infant3Nationality,Infant4Nationality,Infant5Nationality,Infant6Nationality,Infant7Nationality,Infant8Nationality,Infant9Nationality,
    Infant1DocumentNumber,Infant2DocumentNumber,Infant3DocumentNumber,Infant4DocumentNumber,Infant5DocumentNumber,Infant6DocumentNumber,Infant7DocumentNumber,Infant8DocumentNumber,Infant9DocumentNumber,
    Infant1Issuedcountry,Infant2Issuedcountry,Infant3Issuedcountry,Infant4Issuedcountry,Infant5Issuedcountry,Infant6Issuedcountry,Infant7Issuedcountry,Infant8Issuedcountry,Infant9Issuedcountry,
    Infant1Expirydate,Infant2Expirydate,Infant3Expirydate,Infant4Expirydate,Infant5Expirydate,Infant6Expirydate,Infant7Expirydate,Infant8Expirydate,Infant9Expirydate,
    Infant1Expirymonth,Infant2Expirymonth,Infant3Expirymonth,Infant4Expirymonth,Infant5Expirymonth,Infant6Expirymonth,Infant7Expirymonth,Infant8Expirymonth,Infant9Expirymonth,
    Infant1ExpiryYear,Infant2ExpiryYear,Infant3ExpiryYear,Infant4ExpiryYear,Infant5ExpiryYear,Infant6ExpiryYear,Infant7ExpiryYear,Infant8ExpiryYear,Infant9ExpiryYear,
    NumberofInfant)
{
     for(var ad=0;ad<await NumberofAdult;ad++)
    {
        if(NumberofInfant==0)
        {
            var adtgotobtn=[0,1,2,3,4,5,6,7,8]
        }

        else if(NumberofInfant==1)
        {
            var adtgotobtn=[0,2,3,4,5,6,7,8,9]
        }
        else if(NumberofInfant==2)
        {
            var adtgotobtn=[0,2,4,5,6,7,8,9,10]
        }
        else if(NumberofInfant==3)
        {
            var adtgotobtn=[0,2,4,6,7,8,9,10,11]
        }
        else if(NumberofInfant==4)
        {
            var adtgotobtn=[0,2,4,6,8,9,10,11,12]
        }
        else if(NumberofInfant==5)
        {
            var adtgotobtn=[0,2,4,6,8,10,11,12,13]
        }
        else if(NumberofInfant==6)
        {
            var adtgotobtn=[0,2,4,6,8,10,12,13,14]
        }
        else if(NumberofInfant==7)
        {
            var adtgotobtn=[0,2,4,6,8,10,12,14,15]
        }
        else if(NumberofInfant==8)
        {
            var adtgotobtn=[0,2,4,6,8,10,12,14,16]
        }
        else if(NumberofInfant==9)
        {
            var adtgotobtn=[0,2,4,6,8,10,12,14,16,18]
        }
              
 
    var adtloc="//select[@id='tpl10_widget-input-apimTravellers-traveller_"+ad+"_ADT-IDEN_TitleCode']/option"
    var adttitle=await $$(adtloc)
    var adttitlelist=[Adult1Tittle,Adult2Tittle,Adult3Tittle,Adult4Tittle,Adult5Tittle,Adult6Tittle,Adult7Tittle,Adult8Tittle,Adult9Tittle]
      
     await library.drpdwn(adttitle,adttitlelist[ad])
     await browser.pause(3000)
                                             // Gender 
  
    var adtgenloc="#widget-group-apimTravellers-traveller_"+ad+"_ADT-PSPT_0-IDEN_Gender"
   console.log(adtgenloc)
    var adtgen= $(adtgenloc)
    console.log(adtgen.length)
    if(await adtgen.isDisplayed())
   {
    var adtgenloc1="//select[@id='tpl10_widget-input-apimTravellers-traveller_"+ad+"_ADT-PSPT_0-IDEN_Gender']/option"
   
   
    var adtgen1=await $$(adtgenloc1)
   var adtgenlist=[Adult1gender,Adult2gender,Adult3gender,Adult4gender,Adult5gender,Adult6gender,Adult7gender,Adult8gender,Adult9gender]
   await library.drpdwn(adtgen1,adtgenlist[ad])
   }

   var adtfnlist=[Adult1FirstName,Adult2FirstName,Adult3FirstName,Adult4FirstName,Adult5FirstName,Adult6FirstName,Adult7FirstName,Adult8FirstName,Adult9FirstName]
   var adtfnloc="//input[@id='tpl10_widget-input-apimTravellers-traveller_"+ad+"_ADT-IDEN_FirstName']"
    var adtfn=await $(adtfnloc)
    await library.fillTextbox(adtfn,adtfnlist[ad])
    await browser.pause(3000)
  var adtlnlist=[Adult1LastName,Adult2LastName,Adult3LastName,Adult4LastName,Adult5LastName,Adult6LastName,Adult7LastName,Adult8LastName,Adult9LastName]
    var adtlnloc="//input[@id='tpl10_widget-input-apimTravellers-traveller_"+ad+"_ADT-IDEN_LastName']"
    var adtln=await $(adtlnloc)
    await library.fillTextbox(adtln,adtlnlist[ad])
    await browser.pause(3000)
    var ffpconfirmlist=[DoyouWanttoAddAdult1FFP,DoyouWanttoAddAdult2FFP,DoyouWanttoAddAdult3FFP,DoyouWanttoAddAdult4FFP,DoyouWanttoAddAdult5FFP,DoyouWanttoAddAdult6FFP,DoyouWanttoAddAdult7FFP,
        DoyouWanttoAddAdult8FFP,DoyouWanttoAddAdult9FFP]




   var adtdayloc="//input[@id='tpl10_widget-input-apimTravellers-traveller_"+ad+"_ADT-PSPT_0-IDEN_DateOfBirth-DateDay']"
  var adtday=$(adtdayloc)
  if(await adtday.isDisplayed())
  {
    await browser.pause(3000)
    var adtdaylist=[Adult1DOBDay,Adult2DOBDay,Adult3DOBDay,Adult4DOBDay,Adult5DOBDay,Adult6DOBDay,Adult7DOBDay,Adult8DOBDay,Adult9DOBDay]
    await library.fillTextbox(adtday,adtdaylist[ad])
    await browser.pause(3000)
    var adtmonloc="//select[@id='tpl10_widget-input-apimTravellers-traveller_"+ad+"_ADT-PSPT_0-IDEN_DateOfBirth-DateMonth']/option"
    var adtmon=await $$(adtmonloc)
    var adtmonlist=[Adult1DOBMonth,Adult2DOBMonth,Adult3DOBMonth,Adult4DOBMonth,Adult5DOBMonth,Adult6DOBMonth,Adult7DOBMonth,Adult8DOBMonth,Adult9DOBMonth]
    await library.drpdwn(adtmon,adtmonlist[ad])
    await browser.pause(3000)
    var adtyrloc="//input[@id='tpl10_widget-input-apimTravellers-traveller_"+ad+"_ADT-PSPT_0-IDEN_DateOfBirth-DateYear']"
    var adtyr=await $(adtyrloc)
    var adtyrlist=[Adult1DOBYear,Adult2DOBYear,Adult3DOBYear,Adult4DOBYear,Adult5DOBYear,Adult6DOBYear,Adult7DOBYear,Adult8DOBYear,Adult9DOBYear]
     await library.fillTextbox(adtyr,adtyrlist[ad])
     await browser.pause(3000)
     var adtnationalloc="//select[@id='tpl10_widget-input-apimTravellers-traveller_"+ad+"_ADT-PSPT_0-IDEN_Nationality']/option"
     var adtnational=await $$(adtnationalloc)
     var adtnationallist=[Adult1Nationality,Adult2Nationality,Adult3Nationality,Adult4Nationality,Adult5Nationality,Adult6Nationality,Adult7Nationality,Adult8Nationality,Adult9Nationality]
     await library.drpdwn(adtnational,adtnationallist[ad])
     await browser.pause(3000)
} 

                 

    if(ffpconfirmlist[ad]=="Yes")
    {
        await library.clickAction(paxdetailpo.buttonFFP[ad])
        await browser.pause(3000)

        var adtffploc="tpl10_widget-input-apimTravellers-traveller_"+ad+"_ADT-FREQ_Number_0"
       var adtffp=await $(adtffploc)
        
       var ffpnumlist=[FFPnumberAdult1,FFPnumberAdult2,FFPnumberAdult3,FFPnumberAdult4,FFPnumberAdult5,FFPnumberAdult6,FFPnumberAdult7,FFPnumberAdult8,FFPnumberAdult9,]
       await library.fillTextbox(adtffp,ffpnumlist[ad])
       await browser.pause(3000)
    }
    var adtdocloc="//select[@id='tpl10_widget-input-apimTravellers-traveller_"+ad+"_ADT-PSPT_0-PSPT_DocumentType']"
   var adtdoc=$(adtdocloc)
    if(await adtdoc.isDisplayed())
    {
    var adtdocloc1="//select[@id='tpl10_widget-input-apimTravellers-traveller_"+ad+"_ADT-PSPT_0-PSPT_DocumentType']/option"
     var adtdoc1=await $$(adtdocloc1)
     await library.clickAction(adtdoc1[1])
     await browser.pause(3000)
    var adtdocnumloc="//input[@id='tpl10_widget-input-apimTravellers-traveller_"+ad+"_ADT-PSPT_0-PSPT_DocumentNumber']"
    var adtdocnum=await $(adtdocnumloc)
    var adtdocnumlist=[ Adult1DocumentNumber,Adult2DocumentNumber,Adult3DocumentNumber,Adult4DocumentNumber,Adult5DocumentNumber,Adult6DocumentNumber,Adult7DocumentNumber,Adult8DocumentNumber,Adult9DocumentNumber]
    await library.fillTextbox(adtdocnum,adtdocnumlist[ad])
    await browser.pause(3000)
    var adtissueconloc="//select[@id='tpl10_widget-input-apimTravellers-traveller_"+ad+"_ADT-PSPT_0-PSPT_DocumentIssuingCountry']/option"
    var adtissuecon=await $$(adtissueconloc)
    var adtissueconlist=[ Adult1Issuedcountry,Adult2Issuedcountry,Adult3Issuedcountry,Adult4Issuedcountry,Adult5Issuedcountry,Adult6Issuedcountry,Adult7Issuedcountry,Adult8Issuedcountry,Adult9Issuedcountry]
    await library.drpdwn(adtissuecon,adtissueconlist[ad])
    await browser.pause(3000)
    var expdayloc="//input[@id='tpl10_widget-input-apimTravellers-traveller_"+ad+"_ADT-PSPT_0-PSPT_DocumentExpiryDate-DateDay']"
    var expday=await $(expdayloc)
    var expdaylist=[Adult1Expirydate,Adult2Expirydate,Adult3Expirydate,Adult4Expirydate,Adult5Expirydate,Adult6Expirydate,Adult7Expirydate,Adult8Expirydate,Adult9Expirydate]
    await library.fillTextbox(expday,expdaylist[ad])
    await browser.pause(3000)
    var expmonloc="//select[@id='tpl10_widget-input-apimTravellers-traveller_"+ad+"_ADT-PSPT_0-PSPT_DocumentExpiryDate-DateMonth']/option"
    var expmon=await $$(expmonloc)
    var expmonlist=[Adult1Expirymonth,Adult2Expirymonth,Adult3Expirymonth,Adult4Expirymonth,Adult5Expirymonth,Adult6Expirymonth,Adult7Expirymonth,Adult8Expirymonth,Adult9Expirymonth]
    await library.drpdwn(expmon,expmonlist[ad])
    await browser.pause(3000)
    var expyrloc="//input[@id='tpl10_widget-input-apimTravellers-traveller_"+ad+"_ADT-PSPT_0-PSPT_DocumentExpiryDate-DateYear']"
    var expyr=await $(expyrloc)
    var expyrlist=[Adult1ExpiryYear,Adult2ExpiryYear,Adult3ExpiryYear,Adult4ExpiryYear,Adult5ExpiryYear,Adult6ExpiryYear,Adult7ExpiryYear,Adult8ExpiryYear,Adult9ExpiryYear]
    await library.fillTextbox(expyr,expyrlist[ad])
    await browser.pause(3000)

}


    await paxdetailpo.buttonGoToNext[adtgotobtn[ad]].click()
    await browser.pause(3000)



                                            // Infant
if(await paxdetailpo.textInfant.isDisplayed())
{
    var infgoto=[1,3,5,7,9,11,13,15,17]
    var daymon=[0,1,2,3,4,5,6,7,8]
    var infgenloc="#widget-group-apimTravellers-traveller_"+ad+"_ADT_INF-PSPT_0-IDEN_Gender"
    var infgen=$(infgenloc)
    if(await infgen.isDisplayed())
    {
        var daymon=[2,6,10,14,18,22,26,30]
        var infgenloc1="//select[@id='tpl10_widget-input-apimTravellers-traveller_"+ad+"_ADT_INF-PSPT_0-IDEN_Gender']/option"
        var infgen1=$$(infgenloc1)
        var infgenlist=[Infant1gender,Infant2gender,Infant3gender,Infant4gender,Infant5gender,Infant6gender,Infant7gender,Infant8gender,Infant9gender]
        await library.drpdwn(infgen1,infgenlist[ad])
        await browser.pause(2000)
    }


   var inffnloc="//input[@id='tpl10_widget-input-apimTravellers-traveller_"+ad+"_ADT_INF-IDEN_FirstName']"
   var inffn=$(inffnloc)
if(await inffn.isDisplayed())
{
   
var inffnlist=[Infant1FirstName,Infant2FirstName,Infant3FirstName,Infant4FirstName,Infant5FirstName,Infant6FirstName,Infant7FirstName,Infant8FirstName,Infant9FirstName]
await library.fillTextbox(inffn,inffnlist[ad])
await browser.pause(3000)
var inflnloc="//input[@id='tpl10_widget-input-apimTravellers-traveller_"+ad+"_ADT_INF-IDEN_LastName']"
var infln=$(inflnloc)
var inflnlist=[Infant1LastName,Infant2LastName,Infant3LastName,Infant4LastName,Infant5LastName,Infant6LastName,Infant7LastName,Infant8LastName,Infant9LastName]
await library.fillTextbox(infln,inflnlist[ad]) 
await browser.pause(3000)

//var infdayloc="//input[@id='tpl10_widget-input-apimTravellers-traveller_"+ad+"_ADT_INF-PSPT_0-IDEN_DateOfBirth-DateDay']"
var infdayloc="[name='DateDay']"
console.log(infdayloc)
var infday=$$(infdayloc)
var daymonarray =daymon[ad]
var infdaylist=[Infant1DOBDay,Infant2DOBDay,Infant3DOBDay,Infant4DOBDay,Infant5DOBDay,Infant6DOBDay,Infant7DOBDay,Infant8DOBDay,Infant9DOBDay]
await library.fillTextbox(infday[daymonarray],infdaylist[ad])
await browser.pause(3000)
//var infmonloc="//select[@id='tpl10_widget-input-apimTravellers-traveller_"+ad+"_ADT_INF-PSPT_0-IDEN_DateOfBirth-DateMonth']/option"
 var infmonloc="//select[@name='DateMonth']/option"
console.log(infmonloc)
var infmon=$$(infmonloc)

var infmonlist=[Infant1DOBMonth,Infant2DOBMonth,Infant3DOBMonth,Infant4DOBMonth,Infant5DOBMonth,Infant6DOBMonth,Infant7DOBMonth,Infant8DOBMonth,Infant9DOBMonth]
await library.drpdwn(infmon,infmonlist[ad])
await browser.pause(3000)
//var infyrloc="//input[@id='tpl10_widget-input-apimTravellers-traveller_"+ad+"_ADT_INF-PSPT_0-IDEN_DateOfBirth-DateYear']"
var infyrloc="[name='DateYear']"
var infyr=$$(infyrloc)
var infyrlist=[Infant1DOBYear,Infant2DOBYear,Infant3DOBYear,Infant4DOBYear,Infant5DOBYear,Infant6DOBYear,Infant7DOBYear,Infant8DOBYear,Infant9DOBYear]
await library.fillTextbox(infyr[daymonarray],infyrlist[ad])
await browser.pause(3000)
}
var infnatloc="//select[@id='tpl10_widget-input-apimTravellers-traveller_"+ad+"_ADT_INF-PSPT_0-IDEN_Nationality']"
var infnat=$(infnatloc)
if(await infnat.isDisplayed())
{
    var infnatloc1="//select[@id='tpl10_widget-input-apimTravellers-traveller_"+ad+"_ADT_INF-PSPT_0-IDEN_Nationality']/option"
    var infnat1=$$(infnatloc1)
    var infnatlist=[Infant1Nationality,Infant2Nationality,Infant3Nationality,Infant4Nationality,Infant5Nationality,Infant6Nationality,Infant7Nationality,Infant8Nationality,Infant9Nationality]
    await library.drpdwn(infnat1,infnatlist[ad])
     await browser.pause(2000)
     var infdocloc="//select[@id='tpl10_widget-input-apimTravellers-traveller_"+ad+"_ADT_INF-PSPT_0-PSPT_DocumentType']/option"
     var infdoc=$$(infdocloc)
     await library.clickAction(infdoc[1])
     await browser.pause(2000)
     var infdocnumloc="//input[@id='tpl10_widget-input-apimTravellers-traveller_"+ad+"_ADT_INF-PSPT_0-PSPT_DocumentNumber']"
     var infdocnum=$(infdocnumloc)
     var infdocnumlist=[Infant1DocumentNumber,Infant2DocumentNumber,Infant3DocumentNumber,Infant4DocumentNumber,Infant5DocumentNumber,Infant6DocumentNumber,Infant7DocumentNumber,Infant8DocumentNumber,Infant9DocumentNumber]
    await library.fillTextbox(infdocnum,infdocnumlist[ad])
    await browser.pause(3000)
    var infissueconloc="//select[@id='tpl10_widget-input-apimTravellers-traveller_"+ad+"_ADT_INF-PSPT_0-PSPT_DocumentIssuingCountry']/option"
    var infissuecon=$$(infissueconloc)
    var infissueconlist=[ Infant1Issuedcountry,Infant2Issuedcountry,Infant3Issuedcountry,Infant4Issuedcountry,Infant5Issuedcountry,Infant6Issuedcountry,Infant7Issuedcountry,Infant8Issuedcountry,Infant9Issuedcountry]
    await library.drpdwn(infissuecon,infissueconlist[ad])
    await browser.pause(2000)
    var infdocdayloc="//input[@id='tpl10_widget-input-apimTravellers-traveller_"+ad+"_ADT_INF-PSPT_0-PSPT_DocumentExpiryDate-DateDay']"
    var infdocday=$(infdocdayloc)
    var infdocdaylist=[Infant1Expirydate,Infant2Expirydate,Infant3Expirydate,Infant4Expirydate,Infant5Expirydate,Infant6Expirydate,Infant7Expirydate,Infant8Expirydate,Infant9Expirydate]
   await library.fillTextbox(infdocday,infdocdaylist[ad])
   await browser.pause(2000)
   var infdocmonloc="//select[@id='tpl10_widget-input-apimTravellers-traveller_"+ad+"_ADT_INF-PSPT_0-PSPT_DocumentExpiryDate-DateMonth']/option"
    var infdocmon=$$(infdocmonloc)
    var infdocmonlist=[Infant1Expirymonth,Infant2Expirymonth,Infant3Expirymonth,Infant4Expirymonth,Infant5Expirymonth,Infant6Expirymonth,Infant7Expirymonth,Infant8Expirymonth,Infant9Expirymonth]
    await library.drpdwn(infdocmon,infdocmonlist[ad])
    await browser.pause(2000)
    var infdocyrloc="//input[@id='tpl10_widget-input-apimTravellers-traveller_"+ad+"_ADT_INF-PSPT_0-PSPT_DocumentExpiryDate-DateYear']"
    var infdocyr=$(infdocyrloc)
    var infdocyrlist=[Infant1ExpiryYear,Infant2ExpiryYear,Infant3ExpiryYear,Infant4ExpiryYear,Infant5ExpiryYear,Infant6ExpiryYear,Infant7ExpiryYear,Infant8ExpiryYear,Infant9ExpiryYear]
   await library.fillTextbox(infdocyr,infdocyrlist[ad])

}


await paxdetailpo.buttonGoToNext[infgoto[ad]].click()
await browser.pause(3000)
    }

}

                                                                           

}

async function MCChild(NumberofAdult,NumberofInfant,NumberofChild,Child1Tittle,Child2Tittle,Child3Tittle,Child4Tittle,Child5Tittle,Child6Tittle,Child7Tittle,Child8Tittle,Child9Tittle,
    Child1FirstName,Child2FirstName,Child3FirstName,Child4FirstName,Child5FirstName,Child6FirstName,Child7FirstName,Child8FirstName,Child9FirstName,
    Child1LastName,Child2LastName,Child3LastName,Child4LastName,Child5LastName,Child6LastName,Child7LastName,Child8LastName,Child9LastName,
    Child1DOBDay,Child2DOBDay,Child3DOBDay,Child4DOBDay,Child5DOBDay,Child6DOBDay,Child7DOBDay,Child8DOBDay,Child9DOBDay,
    Child1DOBMonth,Child2DOBMonth,Child3DOBMonth,Child4DOBMonth,Child5DOBMonth,Child6DOBMonth,Child7DOBMonth,Child8DOBMonth,Child9DOBMonth,
    Child1DOBYear,Child2DOBYear,Child3DOBYear,Child4DOBYear,Child5DOBYear,Child6DOBYear,Child7DOBYear,Child8DOBYear,Child9DOBYear,
    DoyouWanttoAddChild1FFP,DoyouWanttoAddChild2FFP,DoyouWanttoAddChild3FFP,DoyouWanttoAddChild4FFP,DoyouWanttoAddChild5FFP,DoyouWanttoAddChild6FFP,DoyouWanttoAddChild7FFP,DoyouWanttoAddChild8FFP,DoyouWanttoAddChild9FFP,
   FFPnumberChild1,FFPnumberChild2,FFPnumberChild3,FFPnumberChild4,FFPnumberChild5,FFPnumberChild6,FFPnumberChild7,FFPnumberChild8,FFPnumberChild9,
   Child1gender,Child2gender,Child3gender,Child4gender,Child5gender,Child6gender,Child7gender,Child8gender,Child9gender,
   Child1Nationality,Child2Nationality,Child3Nationality,Child4Nationality,Child5Nationality,Child6Nationality,Child7Nationality,Child8Nationality,Child9Nationality,
   Child1DocumentNumber,Child2DocumentNumber,Child3DocumentNumber,Child4DocumentNumber,Child5DocumentNumber,Child6DocumentNumber,Child7DocumentNumber,Child8DocumentNumber,Child9DocumentNumber,
   Child1Issuedcountry,Child2Issuedcountry,Child3Issuedcountry,Child4Issuedcountry,Child5Issuedcountry,Child6Issuedcountry,Child7Issuedcountry,Child8Issuedcountry,Child9Issuedcountry,
   Child1Expirydate,Child2Expirydate,Child3Expirydate,Child4Expirydate,Child5Expirydate,Child6Expirydate,Child7Expirydate,Child8Expirydate,Child9Expirydate,
    Child1Expirymonth,Child2Expirymonth,Child3Expirymonth,Child4Expirymonth,Child5Expirymonth,Child6Expirymonth,Child7Expirymonth,Child8Expirymonth,Child9Expirymonth,
    Child1ExpiryYear,Child2ExpiryYear,Child3ExpiryYear,Child4ExpiryYear,Child5ExpiryYear,Child6ExpiryYear,Child7ExpiryYear,Child8ExpiryYear,Child9ExpiryYear,
   

    
    )
{
for(var ch=0;ch<await NumberofChild;ch++)
{
    if(NumberofAdult!=0)
    {
        
        var chloc=parseInt(ch)+parseInt(NumberofAdult)
        console.log(chloc)
    }
    else{
        var chloc=ch
    }
    if((NumberofAdult!=0)&&(NumberofInfant!=0))
    {
        var chdgoto=parseInt(ch)+parseInt(NumberofAdult)+parseInt(NumberofInfant)
    }
    else if(NumberofAdult!=0)
    {
        var chdgoto=parseInt(ch)+parseInt(NumberofAdult)
    }
    else{
        var chdgoto=ch
    }
    if(NumberofAdult!=0)
    {
        var ffpcount=parseInt(NumberofAdult)+parseInt(ch)
    }
    var chdtitloc="//select[@id='tpl10_widget-input-apimTravellers-traveller_"+chloc+"_CHD-IDEN_TitleCode']/option"
    var chdtit=$$(chdtitloc)
    var chdtitlist=[Child1Tittle,Child2Tittle,Child3Tittle,Child4Tittle,Child5Tittle,Child6Tittle,Child7Tittle,Child8Tittle,Child9Tittle]
    await library.drpdwn(chdtit,chdtitlist[ch])
    await browser.pause(2000)
   var chdgenloc="#widget-group-apimTravellers-traveller_"+chloc+"_CHD-PSPT_0-IDEN_Gender"
   var chdgen=$(chdgenloc)
   if(await chdgen.isDisplayed())
   {
    var chdgenloc1="//select[@id='tpl10_widget-input-apimTravellers-traveller_"+chloc+"_CHD-PSPT_0-IDEN_Gender']/option"
    var chdgen1=$$(chdgenloc1)
    var chdgenlist=[Child1gender,Child2gender,Child3gender,Child4gender,Child5gender,Child6gender,Child7gender,Child8gender,Child9gender]
    await library.drpdwn(chdgen1,chdgenlist[ch])
    await browser.pause(2000)
}

    var chdfnloc="//input[@id='tpl10_widget-input-apimTravellers-traveller_"+chloc+"_CHD-IDEN_FirstName']"
    var chdfn=$(chdfnloc)
    var chdfnlist=[Child1FirstName,Child2FirstName,Child3FirstName,Child4FirstName,Child5FirstName,Child6FirstName,Child7FirstName,Child8FirstName,Child9FirstName]
    await library.fillTextbox(chdfn,chdfnlist[ch])
    var chdlnloc="//input[@id='tpl10_widget-input-apimTravellers-traveller_"+chloc+"_CHD-IDEN_LastName']"
    var chdln=$(chdlnloc)
    var chdlnlist=[Child1LastName,Child2LastName,Child3LastName,Child4LastName,Child5LastName,Child6LastName,Child7LastName,Child8LastName,Child9LastName]
    await library.fillTextbox(chdln,chdlnlist[ch])
    await browser.pause(2000)
    if(await chdgen.isDisplayed())
    {
        var chddayloc="//input[@id='tpl10_widget-input-apimTravellers-traveller_"+chloc+"_CHD-PSPT_0-IDEN_DateOfBirth-DateDay']"
    }
    else
    {
    var chddayloc="//input[@id='tpl10_widget-input-apimTravellers-traveller_"+chloc+"_CHD-IDEN_DateOfBirth-DateDay']"
    }
    var chdday=$(chddayloc)
    var chddaylist=[Child1DOBDay,Child2DOBDay,Child3DOBDay,Child4DOBDay,Child5DOBDay,Child6DOBDay,Child7DOBDay,Child8DOBDay,Child9DOBDay]
     await library.fillTextbox(chdday,chddaylist[ch])
     await browser.pause(2000)
     if(await chdgen.isDisplayed())
     {
        var chdmonloc="//select[@id='tpl10_widget-input-apimTravellers-traveller_"+chloc+"_CHD-PSPT_0-IDEN_DateOfBirth-DateMonth']/option"
     }
     else{
     var chdmonloc="//select[@id='tpl10_widget-input-apimTravellers-traveller_"+chloc+"_CHD-IDEN_DateOfBirth-DateMonth']/option"
     }
     var chdmon=$$(chdmonloc)
     var chdmonlist=[Child1DOBMonth,Child2DOBMonth,Child3DOBMonth,Child4DOBMonth,Child5DOBMonth,Child6DOBMonth,Child7DOBMonth,Child8DOBMonth,Child9DOBMonth]
     await library.drpdwn(chdmon,chdmonlist[ch])
     await browser.pause(2000)
     if(await chdgen.isDisplayed())
     {
        var chdyrloc="//input[@id='tpl10_widget-input-apimTravellers-traveller_"+chloc+"_CHD-PSPT_0-IDEN_DateOfBirth-DateYear']"   
     }
     else{
     var chdyrloc="//input[@id='tpl10_widget-input-apimTravellers-traveller_"+chloc+"_CHD-IDEN_DateOfBirth-DateYear']"
     }
     var chdyr=$(chdyrloc)
     var chdyrlist=[ Child1DOBYear,Child2DOBYear,Child3DOBYear,Child4DOBYear,Child5DOBYear,Child6DOBYear,Child7DOBYear,Child8DOBYear,Child9DOBYear]
    await library.fillTextbox(chdyr,chdyrlist[ch])
    await browser.pause(2000)
    chdffpconfirmlist=[DoyouWanttoAddChild1FFP,DoyouWanttoAddChild2FFP,DoyouWanttoAddChild3FFP,DoyouWanttoAddChild4FFP,DoyouWanttoAddChild5FFP,DoyouWanttoAddChild6FFP,DoyouWanttoAddChild7FFP,DoyouWanttoAddChild8FFP,DoyouWanttoAddChild9FFP]
   if(chdffpconfirmlist[ch]=="Yes")
   {
    await library.clickAction(paxdetailpo.buttonFFP[ffpcount])
        await browser.pause(3000)
    var chdffploc="//input[@id='tpl10_widget-input-apimTravellers-traveller_"+chloc+"_CHD-FREQ_Number_0']"
  var chdffp=$(chdffploc)
  var chdffplist=[FFPnumberChild1,FFPnumberChild2,FFPnumberChild3,FFPnumberChild4,FFPnumberChild5,FFPnumberChild6,FFPnumberChild7,FFPnumberChild8,FFPnumberChild9]
  await library.fillTextbox(chdffp,chdffplist[ch])
  await browser.pause(2000)
  }
  var infnatloc="#widget-group-apimTravellers-traveller_"+chloc+"_CHD-PSPT_0-IDEN_Nationality"
var infnat=$(infnatloc)
if(await infnat.isDisplayed())
{
    var infnatloc1="//select[@id='tpl10_widget-input-apimTravellers-traveller_"+chloc+"_CHD-PSPT_0-IDEN_Nationality']/option"
    var infnat1=$$(infnatloc1)
    var infnatlist=[Child1Nationality,Child2Nationality,Child3Nationality,Child4Nationality,Child5Nationality,Child6Nationality,Child7Nationality,Child8Nationality,Child9Nationality]
    await library.drpdwn(infnat1,infnatlist[ch])
    await browser.pause(2000)
    var chddoctypeloc="//select[@id='tpl10_widget-input-apimTravellers-traveller_"+chloc+"_CHD-PSPT_0-PSPT_DocumentType']/option"
    var chddoctype=$$(chddoctypeloc)
    await library.clickAction(chddoctype[1])
    await browser.pause(2000)
    var chddocnumloc="//input[@id='tpl10_widget-input-apimTravellers-traveller_"+chloc+"_CHD-PSPT_0-PSPT_DocumentNumber']"
    var chddocnum=$(chddocnumloc)
    var chddocnumlist=[Child1DocumentNumber,Child2DocumentNumber,Child3DocumentNumber,Child4DocumentNumber,Child5DocumentNumber,Child6DocumentNumber,Child7DocumentNumber,Child8DocumentNumber,Child9DocumentNumber]
    await library.fillTextbox(chddocnum,chddocnumlist[ch])
    await browser.pause(2000)
    var chdissconloc="//select[@id='tpl10_widget-input-apimTravellers-traveller_"+chloc+"_CHD-PSPT_0-PSPT_DocumentIssuingCountry']/option"
    var chdisscon=$$(chdissconloc)
    var chdissconlist=[ Child1Issuedcountry,Child2Issuedcountry,Child3Issuedcountry,Child4Issuedcountry,Child5Issuedcountry,Child6Issuedcountry,Child7Issuedcountry,Child8Issuedcountry,Child9Issuedcountry]
     await library.drpdwn(chdisscon,chdissconlist[ch])
     await browser.pause(2000)
     var chdexpdayloc="//input[@id='tpl10_widget-input-apimTravellers-traveller_"+chloc+"_CHD-PSPT_0-PSPT_DocumentExpiryDate-DateDay']"
     var chdexpday=$(chdexpdayloc)
     var chdexpdaylist=[Child1Expirydate,Child2Expirydate,Child3Expirydate,Child4Expirydate,Child5Expirydate,Child6Expirydate,Child7Expirydate,Child8Expirydate,Child9Expirydate]
    await library.fillTextbox(chdexpday,chdexpdaylist[ch])
    await browser.pause(2000)
    var chdexpmonloc="//select[@id='tpl10_widget-input-apimTravellers-traveller_"+chloc+"_CHD-PSPT_0-PSPT_DocumentExpiryDate-DateMonth']/option"
    var chdexpmon=$$(chdexpmonloc)
    var chdexpmonlist=[Child1Expirymonth,Child2Expirymonth,Child3Expirymonth,Child4Expirymonth,Child5Expirymonth,Child6Expirymonth,Child7Expirymonth,Child8Expirymonth,Child9Expirymonth]
    await library.drpdwn(chdexpmon,chdexpmonlist[ch])
    await browser.pause(2000)
    var chdexpyrloc="//input[@id='tpl10_widget-input-apimTravellers-traveller_"+chloc+"_CHD-PSPT_0-PSPT_DocumentExpiryDate-DateYear']"
    var chdexpyr=$(chdexpyrloc)
    var chdexpyrlist=[Child1ExpiryYear,Child2ExpiryYear,Child3ExpiryYear,Child4ExpiryYear,Child5ExpiryYear,Child6ExpiryYear,Child7ExpiryYear,Child8ExpiryYear,Child9ExpiryYear]
     await library.fillTextbox(chdexpyr,chdexpyrlist[ch])
     await browser.pause(2000)

}
await paxdetailpo.buttonGoToNext[chdgoto].click()
await browser.pause(3000)

    }    
}

async function contactDetails(CdEmail,CdCountryCode,CdMobNum,CdConfirmEmail,CdEmail2,CdEmail3,EmergencyDetails,EmergencyName,EmergencyCountrycode,EmergencyMobNum)
{
await library.fillTextbox(paxdetailpo.buttonEmail,CdEmail)
await browser.pause(2000)
await library.fillTextbox(paxdetailpo.buttonCountryCode,CdCountryCode)
await browser.pause(2000)
await library.clickAction(paxdetailpo.optionCountryCode)
await browser.pause(2000)
await library.fillTextbox(paxdetailpo.buttonMobileNumber,CdMobNum)
await browser.pause(2000)
await library.fillTextbox(paxdetailpo.buttonConfirmEmail,CdConfirmEmail)
await browser.pause(2000)
if(EmergencyDetails=="Yes")
{
    
    var gt=await paxdetailpo.mc_emerg_yes_btn.length
    var emerg=parseInt(gt)-1
    await library.clickAction(paxdetailpo.buttonEmergencyYes[emerg])
    await library.fillTextbox(paxdetailpo.buttonEmergencyName,EmergencyName)
    await browser.pause(2000)
    await library.fillTextbox(paxdetailpo.buttonEmergencyCountryCode,EmergencyCountrycode)
    await browser.pause(2000)
    await library.clickAction(paxdetailpo.optionCountryCode)
await browser.pause(2000)
    await library.fillTextbox(paxdetailpo.buttonEmergencyMobileNumber,EmergencyMobNum)
    await browser.pause(2000)
}
}
exports.basicdetails = basicdetails;
exports.passportdet = passportdet;
exports.basiccontact = basiccontact;
exports.emergency = emergency;
exports.frequentflyer = frequentflyer;
exports.basicdetinf = basicdetinf;
exports.MCAdultInfant=MCAdultInfant;
exports.MCChild=MCChild;
exports.contactDetails=contactDetails;