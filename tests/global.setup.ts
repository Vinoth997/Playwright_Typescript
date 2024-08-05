import {test, expect} from "@playwright/test"

test("Login Test", async ({page}) => {
    await page.goto(
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      );
    await page.locator("input[name='username']").fill("Admin");
    await page.locator("input[name='password']").fill("admin123");
    await page.locator("button[type='submit']").click();
    await expect(await page.locator(".oxd-topbar-header-title")).toBeVisible();
    await expect(await page.locator(".oxd-topbar-header-title .oxd-topbar-header-breadcrumb")).toHaveText("Dashboard");
    await page.context().storageState({path: "./playwright/.auth/global_auth.json"});
})