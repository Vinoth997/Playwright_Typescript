import { Page, expect, Locator } from "@playwright/test";

export class CartPage {
  readonly page: Page;
  readonly cartIcon: Locator;
  readonly cartQuantity: Locator;
  readonly cartProductName: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartIcon = page.locator(".shopping_cart_container");
    this.cartQuantity = page.locator(".cart_quantity");
    this.cartProductName = page.locator(
      ".cart_item_label .inventory_item_name"
    );
  }

  async clickCartAndValidate(quatityCount: number, expectedProduct: string) {
    await this.cartIcon.click();
    await expect(this.cartQuantity).toHaveCount(quatityCount);
    await expect(await this.cartProductName.textContent()).toEqual(expectedProduct);
  }
}
