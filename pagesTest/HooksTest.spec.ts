import { expect } from "playwright/test";
import { test } from "../fixtures/POMFixture";

test.beforeEach(async ({loginPage}) => {
    await loginPage.openApplication();
    await loginPage.login("standard_user", "secret_sauce");
})

test("add to cart", async ({homePage}) => {
    await homePage.addProductToCart("Sauce Labs Bolt T-Shirt");
})

test.afterEach(async ({page}) => {
    const menuBtn = page.locator("#react-burger-menu-btn");
    await menuBtn.click();
    const logoutBtn = page.locator("#logout_sidebar_link");
    await expect(logoutBtn).toBeVisible();
    await logoutBtn.click();
})