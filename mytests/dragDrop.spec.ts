import { Browser, chromium, Locator, test, Page } from "@playwright/test";

test("Drag drop test", async () => {
  const browser: Browser = await chromium.launch({ channel: "chrome" });
  const page: Page = await browser.newPage();

  // await page.goto("https://jqueryui.com/droppable/");
  await page.goto("https://demoqa.com/droppable");

  const dragElt: Locator = await page.locator(".simple-drop-container div#draggable");

  const dropElt: Locator = await page.locator(".simple-drop-container div#droppable");

  await dragElt.dragTo(dropElt);

  await new Promise((resolve) => setTimeout(resolve, 3000));
});
