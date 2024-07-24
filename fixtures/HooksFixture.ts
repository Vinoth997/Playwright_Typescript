import { test as base, expect } from "@playwright/test";

type MyHookFixture = {
  loginLogoutFixture: undefined;
};

export const test = base.extend<MyHookFixture>({
  loginLogoutFixture: async ({ page }, use) => {
    const loginLogoutFixture = undefined;

    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();

    await use(loginLogoutFixture);

    await page.locator("#react-burger-menu-btn").click();
    await expect(await page.locator("#logout_sidebar_link")).toBeVisible();
    await page.locator("#logout_sidebar_link").click();
  },
});

export{expect} from "@playwright/test"
