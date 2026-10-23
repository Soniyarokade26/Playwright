
import { expect, type Locator, type Page } from '@playwright/test';

export class FlipkartPage {
  public static readonly url = 'https://www.flipkart.com/';

  public readonly searchInput: Locator;
  public readonly searchButton: Locator;
  public readonly productLink: Locator;
  public readonly addToCartButton: Locator;
  public readonly cartLink: Locator;

  public constructor(private readonly page: Page) {
    this.searchInput = page.locator('input[name="q"]');
    this.searchButton = page.locator('button[type="submit"]');
    this.productLink = page.locator('a[href*="/p/"]').first();
    this.addToCartButton = page.getByRole('button', {
      name: /add to cart/i
    });
    this.cartLink = page.getByText('Cart', { exact: true });
  }

  public async open() {
    await this.page.goto(FlipkartPage.url);
  }

  public async searchProduct(product: string) {
    await this.searchInput.fill(product);
    await this.searchInput.press('Enter');
  }

  public async expectSearchResults() {
    await expect(this.productLink).toBeVisible();
  }

  public async selectProduct() {
    await this.productLink.click();
  }

  public async addProductToCart() {
    await this.addToCartButton.click();
  }

  public async expectAddToCartButton() {
    await expect(this.addToCartButton).toBeVisible();
  }
}
