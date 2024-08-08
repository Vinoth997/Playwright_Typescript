import { test } from "@playwright/test";


test.describe("Upload File", ()=>{
    test.beforeEach(async ({ page }) => {
        await page.goto("https://demo.automationtesting.in/FileUpload.html");
      });
      
      test("Upload single file", async ({ page }) => {
        const fileUploader = await page.locator("input#input-4");
        await fileUploader.setInputFiles("./uploadData/file.jpg");
      });
      
      test('Upload multiple file', async ({page}) => {
          const fileLocator = await page.locator('input#input-4');
          await fileLocator.setInputFiles(["./uploadData/file.jpg","./uploadData/screen.png"]);
      })
})

test('Upload file with non input tag locator', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/upload');
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.locator('div#drag-drop-upload').click();
    const fileChooserResolved = await fileChooserPromise;
    await fileChooserResolved.setFiles('./uploadData/file.jpg');
})
