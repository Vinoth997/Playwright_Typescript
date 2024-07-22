import { test, Browser, chromium, Page, Locator, expect } from "playwright/test";

test('Hover test',async () => {
    const browser:Browser = await chromium.launch({channel: 'chrome'});
    const page: Page = await browser.newPage();

    await page.goto("https://seleniumbase.io/demo_page");

    const hoverButton:Locator = await page.locator('div#myDropdown');
    const optionOne:Locator = await page.locator('a#dropOption1');

    await hoverButton.first().hover();
    await expect(optionOne).toBeVisible();
    await optionOne.click();

    await new Promise((resolve)=>setTimeout(resolve, 3000));
})