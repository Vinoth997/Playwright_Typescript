import { test, expect } from "@playwright/test";

test.beforeEach("Navigate to url", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
});

test.afterEach(async ({page}) => {
    console.log("Execute ended");
})

test("Pass", async ({ page }) => {
  const userName = await page.locator("input#user-name");
  const password = await page.locator("input#password");
  const loginBtn = await page.locator("#login-button");

  await userName.fill("standard_user");
  await password.fill("secret_sauce");
  await loginBtn.click();

  await expect(page.locator(".header_label .app_logo")).toBeVisible();
});

test("Fail", async ({ page }) => {
  const userName = await page.locator("#user-name");
  const password = await page.locator("#password");
  const loginBtn = await page.locator("#login-button");

  await userName.fill("standard_");
  await password.fill("secret_sauce");
  await loginBtn.click();

  await expect(page.locator(".header_label .app_logo")).not.toBeVisible();
});
