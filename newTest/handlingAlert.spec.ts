import { test, expect } from "@playwright/test";

test("Handle Alert", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

  const alertLoc = await page.getByText("Click for JS Alert");
  const result = await page.locator("#result");

  page.on("dialog", (dialog) => {
    expect(dialog.type()).toEqual("alert");
    expect(dialog.message()).toEqual("I am a JS Alert");
    dialog.accept();
  });
  await alertLoc.click();
  await expect(result).toHaveText("You successfully clicked an alert");
  await new Promise((resolve) => setTimeout(resolve, 3000));
});

test("Handle Confirm Alert", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

  const confirmAlertLoc = await page.getByRole("button", {
    name: "Click for JS Confirm",
  });
  const result = await page.locator("#result");

  page.on("dialog", (dialog) => {
    expect(dialog.type()).toEqual("confirm");
    expect(dialog.message()).toEqual("I am a JS Confirm");
    dialog.accept();
  });
  await confirmAlertLoc.click();
  await expect(result).toHaveText("You clicked: Ok");
  await new Promise((resolve) => setTimeout(resolve, 3000));
});

test("Handle Prompt Alert", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

  const promptAlertLoc = await page.getByRole("button", {
    name: "Click for JS Prompt",
  });
  const result = await page.locator("#result");

  page.on("dialog", (dialog) => {
    expect(dialog.type()).toEqual("prompt");
    expect(dialog.message()).toEqual("I am a JS prompt");
    expect(dialog.defaultValue()).toEqual("");
    dialog.accept("Hai this is a prompt");
  });

  await promptAlertLoc.click();
  await expect(result).toContainText("Hai this is a prompt");

  await new Promise((resolve) => setTimeout(resolve, 3000));
});
