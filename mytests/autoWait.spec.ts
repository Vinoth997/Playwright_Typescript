import { test, Browser, Page, chromium, Locator } from "@playwright/test";

test("Auto wait test", async () => {
  const browser: Browser = await chromium.launch({ channel: "chrome" });
  const page: Page = await browser.newPage();

  await page.goto("https://www.magupdate.co.uk/reader-enquiry/pbai/204");
  const titleField: Locator = await page.locator("input#Contact_Title");
  const initialsField: Locator = await page.locator("Contact_Initials");

  await titleField.focus();

  await new Promise((resolve) => setTimeout(resolve, 3000));
});
