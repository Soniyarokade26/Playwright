
import { expect, test, type Page } from '@playwright/test';

class FlipkartPage {
  constructor(private readonly page: Page) {}

  async open() {
    await this.page.goto('https://www.flipkart.com');
  }

  async searchProduct(product: string) {
    const searchBox = this.page.locator('input[name="q"]');
    await searchBox.fill(product);
    await searchBox.press('Enter');
  }

  async expectSearchResults() {
    await expect(this.page.locator('a[href*="/p/"]').first()).toBeVisible();
  }

  async selectProduct() {
    await this.page.locator('a[href*="/p/"]').first().click();
  }

  async expectAddToCartButton() {
    await expect(this.page.getByRole('button', { name: /add to cart/i })).toBeVisible();
  }

  async addProductToCart() {
    await this.page.getByRole('button', { name: /add to cart/i }).click();
  }
}

test('Search and add product to Flipkart cart', async ({ page }) => {
  const flipkart = new FlipkartPage(page);

  // Step 1: Open Flipkart
  await flipkart.open();

  // Step 2: Search for a mobile phone
  await flipkart.searchProduct('Samsung mobile');

  // Step 3: Verify search results
  await flipkart.expectSearchResults();

  // Step 4: Select the first product
  await flipkart.selectProduct();

  // Step 5: Verify Add to Cart is available
  await flipkart.expectAddToCartButton();

  // Step 6: Add the product to cart
  await flipkart.addProductToCart();
});
