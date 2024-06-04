//const owrt = require('../pageobjects/owrtpo.js')
                                // To create New Session
async function createNewsession()
{
    await browser.reloadSession()
}
                                 // Launching url into browser and maximizing window
async function urlLaunch(AIurl)
{
    await browser.url(AIurl)
    await browser.maximizeWindow()
    await browser.pause(6000)
}
                                // To scroll the element into viewpart
async function pagescrollAction(loc)
{
    await loc.scrollIntoView()
}
async function pagescrolltomiddleAction(loc)
{
    await loc.scrollIntoView({ block: 'center', inline: 'center' })
}
                                // click the element
async function clickAction(loc)
{
    await loc.waitForExist({timeout:200000})
    await loc.click()
}
                                // it will wait untill element appear
async function waitforexistAction(loc)
{
    await loc.waitForExist({timeout:200000})
}
async function waitfordisplayedAction(loc)
{
    await loc.waitForDisplayed({ timeout: 100000 })
}
async function waitforclickableAction(loc)
{
    await loc.waitForClickable({ timeout: 100000 })
}
async function switchframeAction(fr)
{
    await browser.switchToFrame(fr)
}
async function parentframeAction()
{
    await browser.switchToParentFrame()
}
async function isexistingAction(loc)
{
    await loc.isExisting()
}
async function clearAction(loc)
{
    await loc.clearValue()
}
async function isclickableAction(loc)
{
    await loc.waitForExist({timeout:100000})
    return await loc.isClickable()
}
async function fillTextbox(loc,value)
{
    await loc.waitForExist({timeout:30000})
    await loc.setValue(value)
}
async function pagetimeout(loc)
{
await loc.waitForExist({reverse:true,timeout:200000})       // 1.5 minustes
}
async function paxselection(loc,pc)
{
   for(var i=1;i<=await pc;i++)
   {
    await loc.click()
   }
}
async function drpdwn(list,txt1)
{
    for(var i=0;i<await list.length;i++)
    {
    var txt=await list[i].getText()
    if(txt==txt1)
    {
        await list[i].click()
        break;
    }
}
}
async function elementdisplayedAction(loc)
{
    var iselementdisplayed = await loc.isDisplayed()
    return iselementdisplayed
}
async function gettextAction(loc)
{
    if (loc.isDisplayed()) {
        var text = await loc.getText()
        return text
    }
}
async function elementclickableAction(loc)
{
    await loc.isClickable()
}
async function movetoelementAction(loc)
{
    await loc.moveTo()
}
async function SwitchWindow(loc)
{
    await browser.switchToWindow(loc)
}
async function CloseWindow()
{
    await browser.closeWindow()
}

exports.CloseWindow = CloseWindow;
exports.SwitchWindow = SwitchWindow;
exports.elementclickableAction = elementclickableAction;
exports.parentframeAction = parentframeAction;
exports.switchframeAction = switchframeAction;
exports.movetoelementAction = movetoelementAction;
exports.isclickableAction = isclickableAction;
exports.waitfordisplayedAction = waitfordisplayedAction;
exports.waitforclickableAction = waitforclickableAction;
exports.elementdisplayedAction = elementdisplayedAction;
exports.gettextAction = gettextAction;
exports.createNewsession=createNewsession;
exports.urlLaunch=urlLaunch;
exports.pagescrollAction=pagescrollAction;
exports.pagescrolltomiddleAction = pagescrolltomiddleAction;
exports.clickAction=clickAction;
exports.waitforexistAction=waitforexistAction;
exports.isexistingAction=isexistingAction;
exports.pagetimeout=pagetimeout;
exports.fillTextbox=fillTextbox;
exports.paxselection=paxselection;
exports.drpdwn=drpdwn;
exports.clearAction = clearAction;