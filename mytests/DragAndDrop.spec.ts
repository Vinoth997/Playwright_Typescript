import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://demoqa.com/droppable/");
});

test("Drag and Drop Approach 1", async ({ page }) => {
  await page.getByText("Drag me", { exact: true }).hover();
  await page.mouse.down();
  await page.getByLabel("Simple").locator("#droppable").hover();
  await page.mouse.up();
  await expect(page.getByLabel("Simple").locator("#droppable")).toHaveText(
    "Dropped!"
  );
});

test("Drag and Drop Approach 2", async ({ page }) => {
  await page
    .getByText("Drag me", { exact: true })
    .dragTo(page.getByLabel("Simple").locator("#droppable"), {
      sourcePosition: { x: 0, y: 0 },
      targetPosition: { x: 144.9, y: 144.9 },
    });
//   await expect(page.getByLabel("Simple").locator("#droppable")).toHaveText(
//     "Dropped!"
//   );
});
