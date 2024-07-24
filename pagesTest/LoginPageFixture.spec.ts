import { test } from "../fixtures/POMFixture";

test("Login", async ({ loginPage }) => {
  await loginPage.openApplication();
  await loginPage.login("standard_user", "secret_sauce");
  await loginPage.verifySuccessfullLogin("Swag Labs");
});

test("Add to Cart", async ({ loginPage, homePage }) => {
  await loginPage.openApplication();
  await loginPage.login("standard_user", "secret_sauce");
  await loginPage.verifySuccessfullLogin("Swag Labs");
  await homePage.addProductToCart("Sauce Labs Backpack");
  console.log(await homePage.getSelectedProductName());
});

test("Cart Verification", async ({ loginPage, homePage, cartPage }) => {
  await loginPage.openApplication();
  await loginPage.login("standard_user", "secret_sauce");
  await loginPage.verifySuccessfullLogin("Swag Labs");
  await homePage.addProductToCart("Sauce Labs Backpack");
  await cartPage.clickCartAndValidate(1, homePage.getSelectedProductName());
});
