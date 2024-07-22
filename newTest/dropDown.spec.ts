import { test, expect } from "@playwright/test";

test("Handle Dropdown with value and visible text", async ({ page }) => {
  await page.goto("https://artoftesting.com/samplesiteforselenium");
  const dropDown = await page.locator("#testingDropdown");
  await dropDown.scrollIntoViewIfNeeded();
  await page.waitForTimeout(3000);
  await dropDown.selectOption("Manual");

  await dropDown.selectOption({value: "Performance"});
  await dropDown.selectOption({label: "Performance"});
  await dropDown.selectOption({index: 1});

  await new Promise((resolve) => setTimeout(resolve, 3000));
});

test("Handle dropdown with label", async ({ page }) => {
  await page.goto(
    "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_option_label"
  );

  const iFrameLocator = await page.frameLocator("#iframewrapper #iframeResult");
  const dropDownLoc = await page.locator("#cars");
//   await iFrameLocator.locator("#cars").selectOption("Audi");
await iFrameLocator.getByLabel("Choose a car:").selectOption("Audi");

  await new Promise((resolve) => setTimeout(resolve, 2000));
});

test("Handle Multi select dropdown", async ({ page }) => {
  await page.goto("https://demoqa.com/select-menu");

  const dropDownLoc = await page.locator("#cars");

  await dropDownLoc.scrollIntoViewIfNeeded();
  await dropDownLoc.selectOption(['Opel', 'Audi', 'Volvo']);


  await new Promise((resolve) => setTimeout(resolve, 2000));
});
