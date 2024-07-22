import test, { Browser, BrowserContext, Page, chromium } from "playwright/test";

test("Auth test", async () => {
  const browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });
  const context: BrowserContext = await browser.newContext();
  const page: Page = await context.newPage();

//   await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");

const username = 'admin';
const password = 'admin';
const authHeader = 'Basic ' + btoa(username+':'+password);
page.setExtraHTTPHeaders({Authorization: createAuthHeader(username, password)});

await page.goto("https://the-internet.herokuapp.com/basic_auth");

await new Promise(resolve => setTimeout(resolve, 3000));
});

function createAuthHeader(username:any, password:any){
    return 'Basic ' + btoa(username+':'+password);
}
