import {test, expect} from '@playwright/test'

test.describe(()=>{
    test.beforeEach('Open Application', async ({page}) => {
        await page.goto('https://playwright.dev/docs/test-global-setup-teardown');
    })

    test('Annotate', {
        annotation:{
            type: 'URL link',
            description: 'https://playwright.dev/docs/test-global-setup-teardown'
        }
    }, async ({page}) => {
        await expect(await page.locator('.theme-doc-markdown.markdown h1')).toHaveText('Global setup and teardown');
    })
})