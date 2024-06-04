const managebooking = require('../../pageobjects/OnewayRoundtrip/managebookingpo.js')
const library = require('../../common/Genericlibrary.js')
async function selectseat(seatindex)
{
    for(var i=0;i<await managebooking.buttonSegments.length;i++)
    {
     await library.pagescrolltomiddleAction(managebooking.buttonSegments[i])
     await library.clickAction(managebooking.buttonSegments[i])
     await library.pagetimeout(managebooking.page_loader)
     if(await library.elementdisplayedAction(managebooking.buttonRightArrow)){
        await library.elementclickableAction(managebooking.buttonRightArrow)
     }
     await browser.pause(3000)
     for (var j=0;j<await managebooking.radiobuttonPassenger.length;j++)
     { 
        await library.pagescrolltomiddleAction(managebooking.radiobuttonPassenger[j])
       await library.clickAction(managebooking.radiobuttonPassenger[j])
       await browser.pause(3000)
       if(await seatindex.length > 0){
        if(await library.elementdisplayedAction(seatindex[j]))
        {
        await library.pagescrolltomiddleAction(seatindex[j])
        await library.clickAction(seatindex[j])
        await browser.pause(3000)
        }
      }
     }
     await library.pagetimeout(managebooking.page_loader)
    }
}
exports.selectseat=selectseat;