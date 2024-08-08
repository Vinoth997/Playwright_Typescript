import { test } from "@playwright/test";

test.beforeEach("Open App", async ({ page }) => {
  await page.goto(
    "https://testpages.eviltester.com/styled/basic-html-form-test.html"
  );
});

test("Keyboard actions", async ({ page }) => {
  const textArea = await page.locator("textarea[name=comments]");
  await textArea.press("Control+a");
  await textArea.press("Backspace");
  await textArea.press("A+B+C");
});
