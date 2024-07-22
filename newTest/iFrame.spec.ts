import {test, expect} from "@playwright/test"
import { delay } from "../tests/utils";

test("Handle iframe with name", async ({page}) => {
    await page.goto("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_form");
    const frameLoc = await page.frame("iframeResult");
    await frameLoc?.locator("#fname").fill("Test Code");

    await delay(3000);
})

test("Hnadle iframe with Url", async ({page}) => {
    await page.goto("https://www.w3schools.com/html/html_iframe.asp");
    const urlIframe = page.frame({url: "https://www.w3schools.com/html/default.asp"});
    const inputField = urlIframe?.locator("#tnb-google-search-input");
    const searchBtn = urlIframe?.locator("#tnb-google-search-submit-btn");

    await inputField?.fill("Alerts");
    await searchBtn?.click();
    await delay(3000);
})

test("Handle iframe with framelocator", async ({page}) => {
    await page.goto("https://www.w3schools.com/html/html_iframe.asp");
    const iframeLocator = page.frameLocator("[title='W3Schools HTML Tutorial']");
    const inputField = iframeLocator.locator("#tnb-google-search-input");
    const searchBtn = iframeLocator.locator("#tnb-google-search-submit-btn");

    await inputField.fill("Dialog");
    await searchBtn.click();
    await delay(3000);
})