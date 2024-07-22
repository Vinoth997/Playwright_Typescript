import { test, Browser, chromium, Page, Locator } from "playwright/test";

test("Type character sequentially", async () => {
  const browser: Browser = await chromium.launch({ channel: "chrome" });
  const page: Page = await browser.newPage();

  await page.goto("https://www.flipkart.com/");

  const textField: Locator = await page.locator("input[name='q']");

  await textField.pressSequentially("macbook air m1", { delay: 500 });

  await new Promise((resolve) => setTimeout(resolve, 3000));
});
