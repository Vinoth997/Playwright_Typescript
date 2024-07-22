import {test, expect, Locator} from "@playwright/test"

test('Title Verification',async ({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await expect(page).toHaveTitle("Swag Labs");
})

test('Successful Login Verification', async ({page})=>{
    await page.goto("https://www.saucedemo.com/");
    const userName:Locator = await page.locator('input#user-name');
    const password:Locator = await page.locator('input#password');
    const loginBtn:Locator = await page.locator('input#login-button');
    const cartIcon:Locator = await page.locator('a.shopping_cart_link');

    userName.fill('standard_user');
    password.fill('secret_sauce')
    loginBtn.click();

    await expect(cartIcon).toBeVisible();
})

test('Unsuccessful Login Verification', async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    const userName:Locator = await page.locator('input#user-name');
    const password:Locator = await page.locator('input#password');
    const loginBtn:Locator = await page.locator('input#login-button');
    const cartIcon:Locator = await page.locator('a.shopping_cart_link');

    userName.fill('standard_user');
    password.fill('secret_sauce')
    loginBtn.click();

    await expect(cartIcon).toBeVisible();
})