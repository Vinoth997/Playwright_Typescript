import { test, expect } from "@playwright/test";

test("Assertions Test", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  const loginBtn = page.locator("input#login-button");

  await expect(loginBtn).toHaveCount(1);
  await expect(loginBtn).toBeEnabled();
  // await expect(loginBtn).toBeDisabled();
  await expect.soft(loginBtn).toBeDisabled();
  // await expect(loginBtn).toBeFocused();
  await expect(loginBtn).toBeVisible();
  // await expect(loginBtn).toBeHidden();
  await expect(loginBtn).toHaveText("Login");
  await expect(loginBtn).toHaveAttribute("data-test");
  await expect(loginBtn).toHaveId("login-button");
  await expect(page).toHaveURL("https://www.saucedemo.com/");
  await expect(page).toHaveTitle("Swag Labs");
  expect(5).toBe(5);
  await expect(page, "The title contains the expected text").not.toHaveTitle(
    "Swag Labs"
  );

  await new Promise((resolve) => setTimeout(resolve, 3000));
});
