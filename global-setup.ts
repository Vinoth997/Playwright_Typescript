import { chromium } from "playwright";
import { expect } from "playwright/test";

async function globalSetup() {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      );
    await page.locator("input[name='username']").fill("Admin");
    await page.locator("input[name='password']").fill("admin123");
    await page.locator("button[type='submit']").click();
    await expect(await page.locator(".oxd-topbar-header-title")).toBeVisible();
    await expect(await page.locator(".oxd-topbar-header-title .oxd-topbar-header-breadcrumb")).toHaveText("Dashboard");
    await page.context().storageState({path: "./playwright/.auth/global_auth.json"})
}

export default globalSetup;