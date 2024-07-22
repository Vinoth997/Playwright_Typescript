import {test, expect} from '@playwright/test'

test('Fill Press and Press sequential',async ({page}) => {
    await page.goto("https://ultimateqa.com/filling-out-forms/");

    await page.locator("#et_pb_contact_name_0").fill("Automation");
    await page.locator("#et_pb_contact_message_0").fill("This is regarding test automation practice");

    await page.goto("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_global_contenteditable");
    await page.frameLocator("#iframeResult").getByText("This is a paragraph").fill("Demo");   
})

test("Press sequentially", async ({page}) => {
    await page.goto("https://www.google.co.in/");
    await page.locator("textarea[name=q]").pressSequentially("Test Automation Playwright", { delay: 200 });
    await page.locator("textarea[name=q]").press("ArrowDown+ArrowDown+ArrowDown");
    await page.locator("textarea[name=q]").press("Enter");
})