import { expect, test } from "@playwright/test";

test.slow(({browserName})=>browserName==="chromium");
test("Locator test", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.locator("//input[@name='user-name']").fill("standard_user");
  await page.locator("input#password").fill("secret_sauce");
  await page.locator("input#login-button").click();

  await expect(
    await page.locator(".header_label .app_logo").textContent()
  ).toEqual("Swag Labs");

  const optionList = await page
    .locator(".inventory_item_label .inventory_item_name")
    .elementHandles();

  for (const option of optionList) {
    console.log(await option.textContent());
    const expectedString = "Sauce Labs Bike Light";
    if ((await option.textContent()) === expectedString) {
      await page
        .locator(
          `//div[@class='inventory_item_name ' and text()='${expectedString}']/parent::a`
        )
        .click();
    }
  }

  const addToCart = await page.locator("button#add-to-cart");
  await addToCart.click();

  const cartBadge = await page.locator(
    "#shopping_cart_container .shopping_cart_badge"
  );
  const cartBadgeContent = await cartBadge.textContent();

  if (cartBadgeContent !== null) {
    const itemCount = parseInt(cartBadgeContent, 10);
    await expect(itemCount).toBeGreaterThan(0);
  } else {
    throw new Error("Cart badge text content is null");
  }

  await new Promise((resolve) => setTimeout(resolve, 3000));
});

test("Getmethod", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/login");
  await page.getByLabel("Email:", { exact: true }).fill("testmail@mail.com");

  const headerMenu = await page.locator("ul.top-menu.notmobile li a[href]").elementHandles();

  for (const menuList of headerMenu) {
    console.log(await menuList.textContent());
  }

  await page.getByPlaceholder("Search store").fill("Mobile");
  await page.locator("button.search-box-button").click();
  // await page.getByAltText("");
  // await page.getByTitle("");
  // await page.getByPlaceholder("");
  // await page.getByRole("button",{name: 'Search'});
  // await page.getByTitle("Search");
  const footerLinks = await page.locator(".footer-upper a").elementHandles();
  for (const iterator of footerLinks) {
    // await page.locator("").textContent();
    const text = await iterator.textContent();
    console.log(text);
  }
  await page.getByRole('button', {name: 'Search'}).click();
  await expect(page.getByRole('button', {name: 'Search'})).toBeEnabled();

  await new Promise((resolve)=>setTimeout(resolve,3000));
});
