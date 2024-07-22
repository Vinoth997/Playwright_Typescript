import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { delay } from "../tests/utils";

test("Login", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.openApplication();
  await loginPage.login("standard_user", "secret_sauce");
  await loginPage.verifySuccessfullLogin("Swag Labs");
  await delay(2000);
});
