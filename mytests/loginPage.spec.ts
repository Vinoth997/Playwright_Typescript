import { test, expect, Browser, Page, Locator } from "@playwright/test";
import { webkit, chromium, firefox } from "playwright";

test("Login Function", async () => {
  const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
  const page: Page = await browser.newPage();

  await page.goto("https://bookcart.azurewebsites.net/");

  const loginBtn = await page.locator('button[mattooltip="Login"]');
  const userName = await page.locator('input[ng-reflect-name="username"]');
  const password = await page.locator('input[ng-reflect-name="password"]');
  const loginButton = await page
    .locator("button.mdc-button.mdc-button--raised")
    .filter({ hasText: "Login" });

  await expect(loginBtn).toBeVisible();
  await loginBtn.click();

  await expect(userName).toBeVisible();
  await userName.fill("brucewayne");
  await expect(password).toBeVisible();
  await password.fill("Bruce000");

  await expect(loginButton).toBeVisible();
  await loginButton.click();

  const pageTitle = await page.title();

  console.log("Page title : ", pageTitle);

  await page.screenshot({ path: "homepage.png" });

  await expect(pageTitle).toEqual("BookCart");

  await new Promise(resolve => setTimeout(resolve, 3000));
});
