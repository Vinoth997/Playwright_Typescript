import {test} from "@playwright/test"


test.beforeEach("Open App", async ({page}) => {
    await page.goto("https://demo.opencart.com/");
})

test("Hover action", async ({page}) => {
    await page.getByRole("link", {name: "Components", exact: true}).hover();
})
