const library = require('../../common/Genericlibrary.js')
const managebookpo = require('../../pageobjects/ManageBooking/managebookingpo.js')
async function selectseat(seatindex)
{
    for(var i=0;i<await managebookpo.tabSegmentList.length;i++)
    {
      await library.pagescrolltomiddleAction(managebookpo.tabSegmentList[i])
      await library.clickAction(managebookpo.tabSegmentList[i])

     await browser.pause(3000)
     for (var j=0;j<await managebookpo.radioPassengerList.length;j++)
     { 
      await library.pagescrolltomiddleAction(managebookpo.radioPassengerList[j])
      await library.clickAction(managebookpo.radioPassengerList[j])
       await browser.pause(3000)
       if(await seatindex.length > 0){
        if(await seatindex[j].isDisplayed())
        {
          await library.pagescrolltomiddleAction(seatindex[j])
          await library.clickAction(seatindex[j])
        await browser.pause(3000)
        }
      }

     }
     await library.pagetimeout(managebookpo.confirmpageload)
    }
}
exports.selectseat=selectseat;