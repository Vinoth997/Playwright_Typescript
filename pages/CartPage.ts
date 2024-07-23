import { Page, expect, Locator } from "@playwright/test";
import { HomePage } from "./HomePage";

export class CartPage {
  readonly page: Page;
  readonly cartIcon: Locator;
  readonly cartQuantity: Locator;
  readonly cartProductName: Locator;
  readonly homePage: HomePage;

  constructor(page: Page) {
    this.page = page;
    this.cartIcon = page.locator(".shopping_cart_container");
    this.cartQuantity = page.locator(".cart_quantity");
    this.cartProductName = page.locator(
      ".cart_item_label .inventory_item_name"
    );
    this.homePage = new HomePage(this.page);
  }

  async clickCartAndValidate(quatityCount: number) {
    await this.cartIcon.click();
    await expect(this.cartQuantity).toHaveCount(quatityCount);
    const homePage = new HomePage(this.page);
    await expect(await this.cartProductName.textContent()).toEqual(this.homePage.getSelectedProductName());
  }
}
