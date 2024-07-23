import { expect, Locator, Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly productName: Locator;
  readonly addToCartBtn: Locator;

  getProductName: string;

  constructor(page: Page) {
    this.page = page;
    this.productName = page.locator(".inventory_item_name");
    this.addToCartBtn = page.getByText("Add to cart");
    this.getProductName = "";
  }

  async addProductToCart(expectedProduct: string) {
    const productNameTextList = await this.productName.elementHandles();

    for (const [index, productTitle] of productNameTextList.entries()) {
      const productList = await productTitle.textContent();
      if (productList === expectedProduct) {
        this.getProductName = productList;
        console.log(`+++++++ ${this.getProductName} +++++++`);
        await this.addToCartBtn.nth(index).click();
        console.log(`Added ${expectedProduct} to cart`);
        break;
      }
    }
  }

  getSelectedProductName() {
    console.log(`------- ${this.getProductName} -------`);
    return this.getProductName;
  }
}
