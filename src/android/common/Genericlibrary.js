
                                // To scroll the page in down direction
async function downscrollAction()
{
    await driver.execute('mobile: scroll', { direction: 'down' });
}
async function downscrollelementAction(loc)
{
    const elem = await loc
    await driver.execute('mobile: scroll', { element: elem.elementId, direction: 'down' });
}
                                // To scroll the page in right direction
async function rightscrollAction()
{
    await driver.execute('mobile: scroll', { direction: "right" });
}
                                // To scroll the page in right direction specific to element
async function rightscrollelementAction(loc)
{
    const elem = await loc
    await driver.execute('mobile: scroll', { element: elem.elementId, direction: 'right' });
}
async function swiperightAction(loc)
{
    const elem = await loc
    await driver.execute('mobile: swipe', { element: elem.elementId, direction: 'right' });
}  
                                // To swipe up the page
async function swipeupAction()
{
    await driver.execute('mobile: swipe', { direction: 'up' })
}
                                // click the element
async function clickAction(loc)
{
    await waituntilelementexistAction(loc)
    await loc.click()
}
                                // wait until element appears
async function waituntilelementexistAction(loc)
{
    await loc.waitForExist({timeout:200000})
}
async function scrollHorizontalIntoTextView(text)
{
    const scroll = 'android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollTextIntoView("' + text + '").setMaxSearchSwipes(1)'
    const scrollloc = $(scroll)
    return scrollloc
}
async function scrollHorizontal()
{
    const scroll = 'android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()'
    const scrollloc = $(scroll)
    return scrollloc
}
async function scrollVerticalIntoTextView(text)
{
    const scroll = 'android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("' + text + '").setMaxSearchSwipes(1)'
    const scrollloc = $(scroll)
    return scrollloc
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
async function elementexistingAction(loc)
{
    var iselementexisting = await loc.isExisting()
    return iselementexisting
}
async function filltextboxAction(loc,value)
{
    await loc.setValue(value)
}
async function pagetimeout(loc)
{
await loc.waitForExist({reverse:true,timeout:100000})       // 1.5 minutes
}

exports.downscrollAction = downscrollAction;
exports.downscrollelementAction = downscrollelementAction;
exports.rightscrollAction = rightscrollAction;
exports.rightscrollelementAction = rightscrollelementAction;
exports.swipeupAction = swipeupAction;
exports.clickAction=clickAction;
exports.waituntilelementexistAction = waituntilelementexistAction;
exports.elementexistingAction = elementexistingAction;
exports.elementdisplayedAction = elementdisplayedAction;
exports.pagetimeout=pagetimeout;
exports.filltextboxAction = filltextboxAction;
exports.gettextAction = gettextAction;
exports.swiperightAction = swiperightAction;
exports.scrollHorizontalIntoTextView = scrollHorizontalIntoTextView;
exports.scrollVerticalIntoTextView = scrollVerticalIntoTextView;
exports.scrollHorizontal = scrollHorizontal;
