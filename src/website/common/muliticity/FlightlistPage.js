const library = require('../../common/Genericlibrary.js')
const flightlistpo = require('../../pageobjects/multicity/Flightlistpagepo.js')


async function fsa(user_fl_type,cabloc)
{
      
        for (var i = 0; i < await fppo.fl_stop_txt.length; i++) {
            for (var j = 0; j < await fppo.fl_stop_txt.length; j++) {
                var stoptext = await fppo.fl_stop_txt[j].getText()
               if(stoptext.includes(user_fl_type))
               {
                //await cabloc[j].scrollIntoView({ block: 'center', inline: 'center' })
                await fppo.fl_stop_txt[j].scrollIntoView({ block: 'center', inline: 'center' })
                await cabloc[j].click()
                await gl.pageScroll(fppo.fl_flt_det[j])
                break;
               }
               
            }
            if (!stoptext.includes(user_fl_type)) {
                await cabloc[0].scrollIntoView({ block: 'center', inline: 'center' })
                await cabloc[0].click()
                await gl.pageScroll(fppo.fl_flt_det[0])
            }
            break;

        }
    
}
async function cabinselection(user_cabin)
{
    for(var i=0;i<await fppo.cabin_list.length;i++)
    {
        var cabtxt=await fppo.cabin_list[i].getText()
        if(cabtxt==user_cabin)
        {
            await fppo.fare_selection[i].click()
            break;
        }
    }
    if(cabtxt!=user_cabin)
    {
        await fppo.fare_selection[0].click()
        
    }
    await browser.pause(5000)
}
async function upgrade(upgr)
{
    if(upgr=="Yes")
    {
        await fppo.upgrade_cabin.click()
    }
    else{
        await fppo.keep_curr_cabin.click()
    }
}

async function fareSelection(userfare)
{
    for(var ff=0;ff<await flightlistpo.textFareType.length;ff++)
    {
        await library.clickAction(flightlistpo.textFareType[ff])
        await browser.pause(3000)
        var fftext=await library.gettextAction(flightlistpo.textFareType[ff])
        if(fftext==userfare)
        {
          await library.clickAction(flightlistpo.textFareType[ff])
          break;
        }
      
    }
   /*  if(fftext!=userfare)
    {
        await gl.clickAction(fppo.mc_fsa_fare_type[0])
    } */
}
exports.fsa=fsa;
exports.cabinselection=cabinselection;
exports.upgrade=upgrade;
exports.fareSelection=fareSelection;