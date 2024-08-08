import { test, expect } from "@playwright/test";

test.only("Visual Testing Verification", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/tables");
  // await expect(page).toHaveScreenshot();
  // await expect(page).toHaveScreenshot('VisualTesting.png');
  //   await expect(page).toHaveScreenshot([
  //     "vfscreenshot/screenshot",
  //     "VisualTesting.png",
  //   ]);
  // await expect(page).toHaveScreenshot(["vfscreenshotNew","screenshot","VisualTesting.png"]);
 //  await expect(page).toHaveScreenshot("FullPage.png", { fullPage: true });
  await expect(page).toHaveScreenshot('vstScreenshot.png');
});

test("Visual Testing - IFrame hiding verification", async ({ page }) => {});

test("Non Image Screenshot", async ({ page }) => {});
