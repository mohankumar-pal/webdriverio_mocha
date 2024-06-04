const library = require('../../common/Genericlibrary.js')
const managebookpo = require('../../pageobjects/ManageBooking/managebookingpo.js')





async function incidentpage() {
    if (await library.elementdisplayedAction(managebookpo.buttonGoToHome))
        await library.clickAction(managebookpo.buttonGoToHome)
    await browser.pause(2000)
}
exports.incidentpage=incidentpage;