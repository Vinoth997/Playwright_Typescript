import { test, expect } from "@playwright/test";
import logindata from "../testdata/loginData.json";
import testdata from "../testdata/testData.json"

test.beforeEach(async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.locator("input[name='username']").fill(logindata.username);
  await page.locator("input[name='password']").fill(logindata.password);
  await page.locator("button[type='submit']").click();
});

test("Validate Dashboard", async ({ page, context }) => {
  // await context.clearCookies();
  await expect(
    await page.locator(".oxd-userdropdown .oxd-userdropdown-name")
  ).toBeVisible();
  await expect(
    await page.locator(".oxd-userdropdown .oxd-userdropdown-name")
  ).not.toBeEmpty();
});

testdata.forEach((data) => {
  test(`Add Candidate for recruitment for ${data.fname} ${data.mname} ${data.lname}`, async ({ page }) => {
    await page.getByRole("link", { name: "Recruitment" }).click();
    await page.getByRole("button", { name: "Add" }).click();
  
    await page.locator("input[name=firstName]").fill(data.fname);
    await page.locator("input[name=middleName]").fill(data.mname);
    await page.locator("input[name=lastName]").fill(data.lname);
    
    await page.locator("//label[text()='Email']//../..//input").fill(data.email);
  
    await page.locator("button[type=submit]").click();
    await expect(await page.locator(".oxd-toast--success")).toBeVisible();
    await expect(
      await page.locator(".oxd-text--p.oxd-text--toast-message")
    ).toHaveText("Successfully Saved");
    await expect(
      await page.locator(
        "//label[text()='Name']//../..//p[@class='oxd-text oxd-text--p']"
      )
    ).toHaveText(`${data.fname} ${data.mname} ${data.lname}`);
  });
});

// for(const data of testdata){
//   test(`Add Candidate for recruitment for ${data.fname} ${data.mname} ${data.lname}`, async ({ page }) => {
//     await page.getByRole("link", { name: "Recruitment" }).click();
//     await page.getByRole("button", { name: "Add" }).click();
  
//     await page.locator("input[name=firstName]").fill(data.fname);
//     await page.locator("input[name=middleName]").fill(data.mname);
//     await page.locator("input[name=lastName]").fill(data.lname);
    
//     await page.locator("//label[text()='Email']//../..//input").fill(data.email);
  
//     await page.locator("button[type=submit]").click();
//     await expect(await page.locator(".oxd-toast--success")).toBeVisible();
//     await expect(
//       await page.locator(".oxd-text--p.oxd-text--toast-message")
//     ).toHaveText("Successfully Saved");
//     await expect(
//       await page.locator(
//         "//label[text()='Name']//../..//p[@class='oxd-text oxd-text--p']"
//       )
//     ).toHaveText(`${data.fname} ${data.mname} ${data.lname}`);
//   });
// }

test.afterEach(async ({ page }) => {
  await page.locator("li.oxd-userdropdown").click();
  //   await page.getByRole("menuitem", { name: "Logout" }).click();
  //   await delay(4000);
});
