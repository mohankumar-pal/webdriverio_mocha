
// To scroll the page in down direction
async function downscrollAction() {
    await driver.execute('mobile: scroll', { direction: 'down' });
}
async function downscrollelementAction(loc) {
    const elem = await loc
    await driver.execute('mobile: scroll', { element: elem.elementId, direction: 'down' });
}
// To scroll the page in right direction
async function rightscrollAction() {
    await driver.execute('mobile: scroll', { direction: "right" });
}
async function leftscrollAction() {
    await driver.execute('mobile: scroll', { direction: "left" });
}
// To scroll the page in right direction specific to element
async function rightscrollelementAction(loc) {
    const elem = await loc
    await driver.execute('mobile: scroll', { element: elem.elementId, direction: 'right' });
}
async function swiperightAction(loc) {
    const elem = await loc
    await driver.execute('mobile: swipe', { element: elem.elementId, direction: 'right' });
}
// To swipe up the page
async function swipeupAction() {
    await browser.pause(2000)
    await driver.execute('mobile: swipe', { direction: 'up' })
    await browser.pause(3000)
}
async function swipedownAction() {
    await driver.execute('mobile: swipe', { direction: 'down' })
}
async function swipeleftAction(loc) {
    const elem = await loc
    await driver.execute('mobile: swipe', { element: elem.elementId, direction: 'left' });
    await browser.pause(3000)
}
async function swiperight() {
    await driver.execute('mobile: swipe', { direction: 'right' })
}
// click the element
async function clickAction(loc) {
    await waituntilelementexistAction(loc)
    await loc.click()
}
async function waitfordisplayedAction(loc)
{
    await loc.waitForDisplayed({ timeout: 100000 })
}
// wait until element appears
async function waituntilelementexistAction(loc) {
    await loc.waitForExist({ timeout: 100000 })
}
async function elementdisplayedAction(loc) {
    var iselementdisplayed = await loc.isDisplayed()
    return iselementdisplayed
}
async function gettextAction(loc) {
    if (loc.isDisplayed()) {
        var text = await loc.getText()
        return text
    }
}
async function elementenabledAction(loc) {
    var iselementenabled = await loc.isEnabled()
    return iselementenabled
}
async function elementexistingAction(loc) {
    var iselementexisting = await loc.isExisting()
    return iselementexisting
}
async function filltextboxAction(loc, value) {
    await loc.waitForExist({timeout: 30000 })
    await loc.setValue(value)
}
async function pagetimeout(loc) {
    await loc.waitForExist({ reverse: true, timeout: 100000 })       // 1.5 minutes
}
async function clearAction(loc) {
    await loc.clearValue()
}
exports.downscrollAction = downscrollAction;
exports.downscrollelementAction = downscrollelementAction;
exports.rightscrollAction = rightscrollAction;
exports.rightscrollelementAction = rightscrollelementAction;
exports.swipeupAction = swipeupAction;
exports.clickAction = clickAction;
exports.waitfordisplayedAction = waitfordisplayedAction;
exports.waituntilelementexistAction = waituntilelementexistAction;
exports.elementexistingAction = elementexistingAction;
exports.elementdisplayedAction = elementdisplayedAction;
exports.pagetimeout = pagetimeout;
exports.filltextboxAction = filltextboxAction;
exports.gettextAction = gettextAction;
exports.swiperightAction = swiperightAction;
exports.swipedownAction = swipedownAction;
exports.clearAction = clearAction;
exports.elementenabledAction = elementenabledAction;
exports.swipeleftAction = swipeleftAction;
exports.swiperight = swiperight;
exports.leftscrollAction = leftscrollAction;