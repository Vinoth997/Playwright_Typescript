const{webkit, firefox, chromium} = require('playwright');
import{test, expect, Browser, Page} from '@playwright/test'

test('login test', async () => {
    const browser:Browser = await chromium.launch({headless:false});
    const page:Page = await browser.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    const userName = await page.locator('[name="username"]');
    const password = await page.locator('[name="password"]');
    const loginbtn = await page.locator('button[type="submit"]');

    await userName.fill('Admin');
    await password.fill('admin123');
    await loginbtn.click();

    const title = await page.title();
    console.log(title);

    await page.screenshot({path: `orangeHRM.png`});

    await new Promise(resolve => setTimeout(resolve, 3000));

})