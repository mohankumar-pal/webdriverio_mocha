const mb = require('../../pageobjects/ManageBooking/managebookingpo.js')
async function selectseat(seatindex)
{
    for(var i=0;i<await mb.segmentlist.length;i++)
    {
     await mb.segmentlist[i].scrollIntoView({ block: 'center', inline: 'center' })
     await mb.segmentlist[i].click()
     await browser.pause(3000)
     for (var j=0;j<await mb.passengerradiobtn.length;j++)
     { 
        await mb.passengerradiobtn[j].scrollIntoView({ block: 'center', inline: 'center' })
       await mb.passengerradiobtn[j].click()
       await browser.pause(3000)
       if(await seatindex.length > 0){
        if(await seatindex[j].isDisplayed())
        {
        await seatindex[j].scrollIntoView({ block: 'center', inline: 'center' })
        await seatindex[j].click()
        await browser.pause(3000)
        //break;
        }
      }
       //break;
     }
     await mb.confirmpageload.waitForExist({ reverse: true, timeout:200000 })
     //break;
    }
}
exports.selectseat=selectseat;