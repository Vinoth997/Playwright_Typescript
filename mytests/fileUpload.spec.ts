import { test, Browser, chromium, Page, Locator } from "@playwright/test";
import path from "path";

test("File upload test", async () => {
  const browser: Browser = await chromium.launch({ channel: "chrome" });
  const page: Page = await browser.newPage();

  await page.goto("https://the-internet.herokuapp.com/upload");

  const uploadFile: Locator = await page.locator("input#file-upload");

  await uploadFile.setInputFiles([path.join("D:/New folder/Nebula.jpg")]);

  await page.waitForTimeout(3000);

  await uploadFile.setInputFiles([]);

  await new Promise((resolve) => setTimeout(resolve, 3000));
});
