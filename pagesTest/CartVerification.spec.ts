import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { delay } from "../utils/utils";
import { CartPage } from "../pages/CartPage";

test("Cart Verification", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);
    await loginPage.openApplication();
    await loginPage.login("standard_user", "secret_sauce");
    await homePage.addProductToCart("Sauce Labs Onesie");
    await cartPage.clickCartAndValidate(1, homePage.getSelectedProductName());
    await delay(3000);
});
