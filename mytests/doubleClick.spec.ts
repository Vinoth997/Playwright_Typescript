import { test, Browser, chromium, Page, Locator } from "@playwright/test";

test('Double click', async () => {
    const browser:Browser = await chromium.launch({channel:"chrome"});
    const page:Page = await browser.newPage();

    await page.goto("https://demoqa.com/buttons");

    const doubleBtn:Locator = await page.locator("button#doubleClickBtn");
    const rightBtn:Locator = await page.locator("button#rightClickBtn");

    await doubleBtn.dblclick();
    await rightBtn.click({button: 'right'});

    await new Promise((resolve)=>setTimeout(resolve, 3000));

})