import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { delay } from "../utils/utils";

test("Login", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.openApplication();
  await loginPage.login("standard_user", "secret_sauce");
  await loginPage.verifySuccessfullLogin("Swag Labs");
  await delay(2000);
});

test("Negative Test Login", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.openApplication();
  await loginPage.login("standard_user", "sdfsdfs");
  await loginPage.verifyUnSuccessfullLogin("Username and password do not match any user in this service");
  await delay(2000);
});
