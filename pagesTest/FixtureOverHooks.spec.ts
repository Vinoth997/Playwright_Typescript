import { test, expect } from "../fixtures/HooksFixture";
import { delay } from "../utils/utils";

test ("Add and remove product from cart", async ({page, loginLogoutFixture}) => {
    await page.locator("//div[text()='Sauce Labs Backpack']/ancestor::div[@class='inventory_item']//button[text()='Add to cart']").click();
    await delay(3000);
    await page.locator("//div[text()='Sauce Labs Backpack']/ancestor::div[@class='inventory_item']//button[text()='Remove']").click();
})

test ("Empty cart", async ({page, loginLogoutFixture}) => {
    await page.locator("//div[text()='Sauce Labs Backpack']/ancestor::div[@class='inventory_item']//button[text()='Add to cart']").click();
    await delay(3000);
    await page.locator("a.shopping_cart_link").click();
    await expect(await page.locator(".inventory_item_name")).toHaveText("Sauce Labs Backpack");
    await page.locator("//div[text()='Sauce Labs Backpack']/ancestor::div[@class='cart_item_label']//button[text()='Remove']").click();
    await delay(3000);
    await expect(await page.locator(".inventory_item_name")).not.toBeVisible();
})