import { test, expect } from "../fixtures/TestDataFixtures";

test.beforeEach("Login", async ({page, urldata, logindata}) => {
    await page.goto(urldata.appurl);
    await page.locator("input[name=username]").fill(logindata.uname);
    await page.locator("input[name=password]").fill(logindata.pwd);
    await page.getByRole("button", {name: "Login"}).click();
    await expect(await page.getByRole("heading", {name : "Dashboard"})).toBeVisible();
})

test("Add Candidate for recruitment", async ({ page, testdata }) => {
    await page.getByRole("link", { name: "Recruitment" }).click();
    await page.getByRole("button", { name: "Add" }).click();
    await page.locator("input[name=firstName]").fill(testdata.fname);
    await page.locator("input[name=lastName]").fill(testdata.lname);
    await page.locator("//label[text()='Email']//../..//input").fill(testdata.email);
    await page.locator("button[type=submit]").click();
    await expect(await page.locator(".oxd-toast--success")).toBeVisible();
    await expect(
      await page.locator(".oxd-text--p.oxd-text--toast-message")
    ).toHaveText("Successfully Saved");
    console.log(`${testdata.fname} ${testdata.lname}`);
    await expect(
      await page.locator(
        "//label[text()='Name']//../..//p[@class='oxd-text oxd-text--p']"
      )
    ).toHaveText(`${testdata.fname} ${testdata.lname}`);
  });