import { test, expect } from "@playwright/test";
import { delay } from "../utils/utils";
import { faker } from "@faker-js/faker";


test.use({storageState: {cookies: [], origins: []}})

test.beforeEach(async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
    await page.locator("input[name='username']").fill("Admin");
    await page.locator("input[name='password']").fill("admin123");
    await page.locator("button[type='submit']").click();
});

test("Validate Dashboard", async ({ page, context }) => {
  // await context.clearCookies();
  await expect(
    await page.locator(".oxd-userdropdown .oxd-userdropdown-name")
  ).toBeVisible();
  await expect(
    await page.locator(".oxd-userdropdown .oxd-userdropdown-name")
  ).not.toBeEmpty();
});

test("Add Candidate for recruitment", async ({ page }) => {
  await page.getByRole("link", { name: "Recruitment" }).click();
  await page.getByRole("button", { name: "Add" }).click();
  const fName = faker.person.firstName();
  const lName = faker.person.lastName();
  await page.locator("input[name=firstName]").fill(fName);
  await page.locator("input[name=lastName]").fill(lName);
  const email = faker.internet.email({ firstName: fName, lastName: lName });
  await page.locator("//label[text()='Email']//../..//input").fill(email);
  await page.locator("button[type=submit]").click();
  await expect(await page.locator(".oxd-toast--success")).toBeVisible();
  await expect(
    await page.locator(".oxd-text--p.oxd-text--toast-message")
  ).toHaveText("Successfully Saved");
  console.log(`${fName} ${lName}`);
  await expect(
    await page.locator(
      "//label[text()='Name']//../..//p[@class='oxd-text oxd-text--p']"
    )
  ).toHaveText(`${fName} ${lName}`);
});

test.afterEach(async ({ page }) => {
  await page.locator("li.oxd-userdropdown").click();
//   await page.getByRole("menuitem", { name: "Logout" }).click();
//   await delay(4000);
});
