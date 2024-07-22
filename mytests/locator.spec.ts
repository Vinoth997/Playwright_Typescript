import {
  test,
  Browser,
  chromium,
  Page,
  Locator,
  expect,
} from "@playwright/test";

test("Locator test", async () => {
  const browser: Browser = await chromium.launch({ channel: "chrome" });
  const page: Page = await browser.newPage();

  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/register"
  );

  const firstname: Locator = page.locator("id=input-firstname");
  const laststname: Locator = page.locator("id=input-lastname");

  await firstname.fill("Demo");
  await laststname.fill("Automation labs");

  const logo: Locator = await page.locator(".img-responsive");
  const logoExist = await logo.isEnabled();
  console.log(logoExist);

  const header: Locator = await page.locator("text=Register Account");
  const headerexist = await header.isEnabled();
  console.log(headerexist);

  const continuebtn: Locator = await page.locator("text=Continue");
  const continuebtnExist = await continuebtn.isEnabled();
  console.log(continuebtnExist);

  const forgotPwdLink: Locator = await page.locator("text=Forgotten Password");
  const forgotPwdLinkExist = await forgotPwdLink.isEnabled();
  console.log(forgotPwdLinkExist);

  const emailField: Locator = await page.locator("css=input#input-email");
  const telephoneField: Locator = await page.locator(
    'css=input[name="telephone"]'
  );
  const privacyCheckbox: Locator = await page.locator(
    'css=input[name="agree"]'
  );

  await emailField.fill("vvvvvv@mail.com");
  await telephoneField.fill("8564123564");
  await privacyCheckbox.check();

  const password: Locator = await page.locator(
    'xpath=//input[@id="input-password"]'
  );
  const confirmPassword: Locator = await page.locator(
    '//input[@id="input-confirm"]'
  );

  await password.fill("qqwwqwqwqw");
  await confirmPassword.fill("sdfasdsad");

  const listOption = await page.locator(".list-group a");
  const allOptions = await listOption.all();

  for (const row of allOptions) {
    const textContent = await row.textContent();
    console.log(textContent);
  }

  await expect(page.locator(".list-group a")).toHaveCount(14);
  
  // await expect(page.locator(".list-group a")).toHaveText("Login");

  await new Promise((resolve) => setTimeout(resolve, 3000));
});
