import { test, Page, Browser, chromium, Locator } from "@playwright/test";

test("Focus element test", async () => {
  const browser: Browser = await chromium.launch({ channel: "chrome" });
  const page: Page = await browser.newPage();

  await page.goto("https://www.magupdate.co.uk/reader-enquiry/pbai/204");

  const titleField: Locator = await page.locator("input#Contact_Title");

  await titleField.focus();

  await new Promise((resolve) => setTimeout(resolve, 3000));
});
