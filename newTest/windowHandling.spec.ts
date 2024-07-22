import { test, expect } from "@playwright/test";
import { delay } from "../tests/utils";

test("Handling new tab", async ({ context }) => {
  const page = await context.newPage();

  await page.goto("https://testpages.eviltester.com/styled/windows-test.html");
  const basicAjaxBtn = page.locator("#gobasicajax");

  const pagePromise = context.waitForEvent("page");

  await basicAjaxBtn.click();
  const newPage = await pagePromise;

  const category = newPage.locator("#combo1");
  const submitBtn = newPage.locator("[name=submitbutton]");

  await category.selectOption({value: "3"});
  await submitBtn.click();

  await delay(3000);
});
