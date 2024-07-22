import { expect, test } from "@playwright/test";
import { link } from "fs";
import { resolve } from "path";

test("Normal Click action", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  const userName = await page.locator("#user-name");
  const password = await page.locator("#password");
  const loginBtn = await page.locator("#login-button");

  await userName.pressSequentially("standard_user", { delay: 200 });
  await password.pressSequentially("secret_sauce", { delay: 200 });
  await loginBtn.click();
});

test("Different click action", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");

  const addEleBtn = await page.getByText("Add Element");
  const deleteBtn = await page.getByText("Delete");

  await expect(deleteBtn).not.toBeVisible();
  await addEleBtn.click();
  await expect(deleteBtn).toBeVisible();

  for (let i = 2; i > (await deleteBtn.elementHandles()).length; i) {
    // console.log((await deleteBtn.elementHandles()).length);
    await addEleBtn.click();
  }

//   const deleteBtnHandles = await deleteBtn.elementHandles();
// console.log((await deleteBtn.elementHandles()).length);
for (let i = (await deleteBtn.elementHandles()).length - 1; i =  0; i--) {
  console.log(`Hai ${(await deleteBtn.elementHandles()).length}`);
  await deleteBtn.click();
}

// await addEleBtn.dblclick();

await new Promise((resolve)=>setTimeout(resolve,3000)); 
});


test("Right Click", async ({page}) => {
  await page.goto("https://swisnl.github.io/jQuery-contextMenu/3.x/demo.html");

  const button = await page.locator(".context-menu-one.btn.btn-neutral");
  await button.click({button: "right"});

  const editButton = await page.locator("//span[text()='Edit']/parent::li");
  const linkText = await page.getByRole("link" ,{name: "FontAwesome icons"});
  const gitHubLink = await page.locator(".edit-on-github.fa.fa-github");
  await page.waitForTimeout(3000);

  await expect(editButton).toBeVisible();
  // await gitHubLink.click({force: true});

  await linkText.click({force: true});
  
  await new Promise((resolve)=>setTimeout(resolve, 3000));
});