import test, { Browser, chromium, expect, Locator, Page } from "@playwright/test";

test("Drop down test", async () => {
  const browser: Browser = await chromium.launch({ channel: "chrome" });
  const page: Page = await browser.newPage();

  await page.goto("https://seleniumbase.io/demo_page");

  const countryDropDown = "select#mySelect";

  const countryOption: Locator = await page.locator("select#mySelect");

  await countryOption.scrollIntoViewIfNeeded();

  await page.selectOption(countryDropDown, { value: "25%" });
  await page.selectOption(countryDropDown, { label: "Set to 50%" });
  await page.selectOption(countryDropDown, { index: 3 });

  const allOptions = await page.$$(countryDropDown + "> option");
  console.log(allOptions.length);

  for (const e of allOptions) {
    const text = await e.textContent();
    console.log(text);
    if (text === "Set to 75%") {
      await page.selectOption(countryDropDown, { label: text });
      break;
    }
  }

  const submitButton: Locator = await page.getByRole("button", {
    name: "Click Me (Green)",
  });
  const submitButtonAssert = await submitButton.isDisabled();
  console.log(submitButtonAssert);

  await expect(submitButton).toBeEnabled();

  await submitButton.click();

  await new Promise((resolve) => setTimeout(resolve, 3000));
});
