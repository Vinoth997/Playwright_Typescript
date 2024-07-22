import { chromium, test, Browser, Page } from "@playwright/test";

test("google test", async () => {
  const browser: Browser = await chromium.launch({ channel: "chrome" });
  const page: Page = await browser.newPage();

  await page.goto("https://www.google.co.in/");

  const inputField = await page.locator("textarea[name='q']");

  await inputField.fill("google");

  const optionList = await page.$$(
    "li[role='presentation'] div[role='presentation']:not([style*='display: none;']) span"
  );

  for (const iterator of optionList) {
    const value = await iterator.textContent();
    console.log(value);
    if (value === "google translate") {
      await iterator.click();
      break;
    }
  }

//   await page.getByRole("heading", { name: "Google Translate" }).click();

  await page.getByRole("link", {name: "translate.google.co.in"}).click();

  await page.getByTestId("").fill("");

  await new Promise((resolve) => setTimeout(resolve, 3000));
});
