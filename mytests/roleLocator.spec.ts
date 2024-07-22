import { test, Browser, chromium, Page, expect } from "@playwright/test";

test("Aria role locator test", async () => {
  const browser: Browser = await chromium.launch({ channel: "chrome" });
  const page: Page = await browser.newPage();

  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/register"
  );

  await expect(
    page.getByRole("heading", { name: "Register Account" })
  ).toBeVisible();

  await expect(page.getByRole("link", { name: "Address Book" })).toBeVisible();
  await expect(page.getByRole("radio", {name: "Yes"})).toBeVisible();
  await page.getByRole("radio", {name: "Yes"}).click();

  await expect(page.getByRole("radio", { name: "Yes" })).toBeChecked();

  await page.getByRole("checkbox").click();

  await expect(page.getByRole("button", {name: "Continue"})).toBeEnabled();
  await page.getByRole("button", {name: "Continue"}).click();

  await new Promise((resolve) => setTimeout(resolve, 3000));
});
