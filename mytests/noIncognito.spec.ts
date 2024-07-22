import { test, BrowserContext, chromium, Page } from "@playwright/test";

test("No incognito test", async () => {
  const browser: BrowserContext = await chromium.launchPersistentContext("", {
    channel: "chrome",
  });
//   const page: Page = await browser.newPage();
  const pages = browser.pages();
  const page:Page = pages[0];

  await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

  await new Promise((resolve)=>setTimeout(resolve, 3000));
});
