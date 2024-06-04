const menupo = require('../../../src/website/pageobjects/MenuLinkspo.js')
const library = require('../../../src/website/common/Genericlibrary.js')
const fs = require('fs')
var NodeXls = require('node-xls');

async function SearchLink() {
    await browser.pause(4000)
    await library.clickAction(menupo.linkSearch)
    await library.waitforexistAction(menupo.textboxSearch)
    await library.fillTextbox(menupo.textboxSearch, 'checkin')
    await library.clickAction(menupo.iconSearch)
    await library.waitforexistAction(menupo.textSearchResults)
    await browser.pause(2000)
    
}
async function SupportLink() {
    await library.clickAction(menupo.linkSupport)
    await library.clickAction(menupo.dropdownContactUs)
    await library.waitforexistAction(menupo.textContactUs)
    await browser.pause(4000)
    await library.clickAction(menupo.iconAirIndia)
    await library.clickAction(menupo.linkSupport)
    await library.clickAction(menupo.dropdownFAQ)
    await library.waitforexistAction(menupo.textFAQ)
    await browser.pause(4000)
    
}
async function SignInLink() {
    await browser.pause(2000)
    await library.clickAction(menupo.linkSignIn)
    await library.waitforexistAction(menupo.textSignIn)
    await browser.pause(2000)
    
}
async function BookAndManageLink() {
    var bookmanagelinks = ['Book', 'Search Flights', 'Corporate Travel Programme', 'Group Booking', 'Special Offers', 'Travel Insurance', 'Flight Schedule', 'Manage', 'Check In Online', 'Manage Booking', 'Seat Selection & Upgrades', 'Self-Service Re-accommodation', 'Request Refund', 'Flight Status']
    var bookmanagetitles = ['Book', 'Book Flights', 'Corporate Travel Programme', 'Group Booking', 'Special Offers', 'Tata AIG Travel Insurance', 'Flight Schedule', 'Manage', 'Check In Online', 'Manage Booking', 'Seat Selection & Upgrades', 'Self-Service Re-accommodation', 'Request Refund', 'Flight Status']
    for (var i = 0; i < await bookmanagelinks.length; i++) {
        const linktext = "//a[normalize-space()='" + bookmanagelinks[i] + "']"
        const linkloc = await $(linktext)
        const titletext = "//span[normalize-space()='" + bookmanagetitles[i] + "']"
        const titleloc = await $(titletext)
        await browser.pause(3000)
        await library.clickAction(menupo.linkBookManage)
        await browser.pause(2000)
        await library.clickAction(linkloc)
        await library.waitforexistAction(titleloc)
        await browser.pause(2000)
    }
}
async function WhereWeFlyLink() {
    const whereweflylinks = ['Route Map', 'Nonstop International Flights', 'Popular Flights', 'Partner Airlines']
    for (var i = 0; i < await whereweflylinks.length; i++) {
        const linkstext = "//a[normalize-space()='" + whereweflylinks[i] + "']"
        const linksloc = await $(linkstext)
        await browser.pause(2000)
        await library.clickAction(menupo.linkWhereWeFly)
        await browser.pause(2000)
        await library.clickAction(linksloc)
        if (whereweflylinks[i] == 'Route Map')
            await library.waitforexistAction(menupo.divFromTo)
        else {
            const titletext = "//span[normalize-space()='" + whereweflylinks[i] + "']"
            const titleloc = await $(titletext)
            await library.waitforexistAction(titleloc)
            await browser.pause(2000)
        }
    }
}
async function PrepareToTravelLink() {
    var preparetotravellinks = ['Baggage Guidelines', 'Airport Information', 'Visas, Documents and Travel Tips', 'First-time Travellers, Children and Pets', 'Health and Medical Assistance']
    var preparetotraveltitles = ['Baggage', 'Airport Information', 'Visas, Documents & Travel Tips', 'First-time Flyers, Children & Pets', 'Health & Medical Assistance']
    for (var i = 0; i < await preparetotravellinks.length; i++) {
        const linktext = "//a[normalize-space()='" + preparetotravellinks[i] + "']"
        const linkloc = await $(linktext)
        const titletext = "//span[normalize-space()='" + preparetotraveltitles[i] + "']"
        const titleloc = await $(titletext)
        await browser.pause(2000)
        await library.clickAction(menupo.linkpreparetotravel)
        await browser.pause(2000)
        await library.clickAction(linkloc)
        
        await library.waitforexistAction(titleloc)
        await browser.pause(2000)
    }
}
async function AirIndiaExperienceLink() {
    var airindiaexperiencelinks = ['Air India Experience', 'At the Airport', 'In the Air', 'The Air India Fleet']
    for (var i = 0; i < await airindiaexperiencelinks.length; i++) {
        const linktext = "//a[normalize-space()='" + airindiaexperiencelinks[i] + "']"
        const linkloc = await $(linktext)
        const titletext = "//span[normalize-space()='" + airindiaexperiencelinks[i] + "']"
        const titleloc = await $(titletext)
        await browser.pause(2000)
        await library.clickAction(menupo.linkairindiaexperience)
        await library.clickAction(linkloc)
        await browser.pause(2000)
        await library.waitforexistAction(titleloc)
        await browser.pause(2000)
    }
}
async function LoyaltyLink() {
    var loyaltylinks = ['Loyalty', 'About Flying Returns', 'Sign Up', 'Sign In', 'Points Calculator', 'Earn Points', 'Spend Points', 'Flying Returns FAQ', 'Important Updates', 'Partner Offers']
    var loyaltytitles = ['Flying Returns', 'About Flying Returns', 'Sign Up', 'Sign In', 'Points Calculator', 'Earn Points', 'Spend Points', 'FAQs', 'Important Updates', 'Partner Offers']
    for (var i = 0; i < await loyaltylinks.length; i++) {
        const titletext = "//span[normalize-space()='" + loyaltytitles[i] + "']"
        const titleloc = await $(titletext)
        await browser.pause(2000)
        await library.clickAction(menupo.linkLoyalty)
        if (loyaltylinks[i] == 'Sign Up') {
            const linktext = "//li[@class='withoutLogin']//a[normalize-space()='" + loyaltylinks[i] + "']"
            const linkloc = await $(linktext)
            await library.clickAction(linkloc)
            await library.waitforexistAction(menupo.textCreateAnAccount)
        }
        else if (loyaltylinks[i] == 'Sign In') {
            const linktext = "//a[normalize-space()='" + loyaltylinks[i] + "']"
            const linkloc = await $(linktext)
            await browser.pause(2000)
            await library.clickAction(linkloc)
            await library.waitforexistAction(menupo.textSignIn)
        }
        else if (loyaltylinks[i] == 'Spend Points') {
            const linktext = "//li[@class='withoutLogin']//a[normalize-space()='" + loyaltylinks[i] + "']"
            const linkloc = await $(linktext)
            await browser.pause(2000)
            await library.clickAction(linkloc)
            await library.waitforexistAction(titleloc)
        }
        else if (loyaltylinks[i] == 'Flying Returns FAQ') {
            const linktext = "//li[@class='withoutLogin']//a[normalize-space()='" + loyaltylinks[i] + "']"
            const linkloc = await $(linktext)
            await browser.pause(2000)
            await library.clickAction(linkloc)
            await library.waitforexistAction(titleloc)
        }
        else {
            const linktext = "//a[normalize-space()='" + loyaltylinks[i] + "']"
            const linkloc = await $(linktext)
            await browser.pause(2000)
            await library.clickAction(linkloc)
            await library.waitforexistAction(titleloc)
        }
    }
}

exports.SearchLink = SearchLink;
exports.SupportLink = SupportLink;
exports.SignInLink = SignInLink;
exports.BookAndManageLink = BookAndManageLink;
exports.WhereWeFlyLink = WhereWeFlyLink;
exports.PrepareToTravelLink = PrepareToTravelLink;
exports.AirIndiaExperienceLink = AirIndiaExperienceLink;
exports.LoyaltyLink = LoyaltyLink;
