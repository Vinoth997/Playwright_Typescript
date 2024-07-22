import {
  test,
  expect,
  Browser,
  Page,
  Locator,
  BrowserContext,
} from "@playwright/test";
import { webkit, chromium } from "@playwright/test";

test("Browsercontext test", async () => {
  const browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });

  const browsercontext_1: BrowserContext = await browser.newContext();
  const page_1: Page = await browsercontext_1.newPage();

  await page_1.goto("https://bookcart.azurewebsites.net/");

  const loginBtn1 = await page_1.locator('button[mattooltip="Login"]');
  const userName1 = await page_1.locator('input[ng-reflect-name="username"]');
  const password1 = await page_1.locator('input[ng-reflect-name="password"]');
  const loginButton1 = await page_1
    .locator("button.mdc-button.mdc-button--raised")
    .filter({ hasText: "Login" });
  await loginBtn1.click();
  await userName1.fill("wwwwwww");
  await password1.fill("wwwwwww");
  await loginButton1.click();

  const browsercontext_2: BrowserContext = await browser.newContext();
  const page_2: Page = await browsercontext_2.newPage();

  await page_2.goto("https://bookcart.azurewebsites.net/");
  const loginBtn2 = await page_2.locator('button[mattooltip="Login"]');
  const userName2 = await page_2.locator('input[ng-reflect-name="username"]');
  const password2 = await page_2.locator('input[ng-reflect-name="password"]');
  const loginButton2 = await page_2
    .locator("button.mdc-button.mdc-button--raised")
    .filter({ hasText: "Login" });
  await loginBtn2.click();
  await userName2.fill("wwwwwww");
  await password2.fill("wwwwwww");
  await loginButton2.click();

  //   await browsercontext_1.close();
  //   await browsercontext_2.close();
  //   await browser.close();

  await new Promise((resolve) => setTimeout(resolve, 3000));
});
