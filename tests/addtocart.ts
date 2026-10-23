
import { expect, type Locator, type Page } from '@playwright/test';

export class AddToCartPage {
  public static readonly url = 'https://www.saucedemo.com/';

  public readonly usernameInput: Locator;
  public readonly passwordInput: Locator;
  public readonly signInButton: Locator;
  public readonly addToCartButton: Locator;
  public readonly cartBadge: Locator;
  public readonly cartLink: Locator;
  public readonly productName: Locator;

  public constructor(private readonly page: Page) {
    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.signInButton = page.getByRole('button', { name: 'Login' });
    this.addToCartButton = page.getByRole('button', { name: 'Add to cart' }).first();
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.cartLink = page.locator('.shopping_cart_link');
    this.productName = page.getByText('Sauce Labs Backpack');
  }

  public async open() {
    await this.page.goto(AddToCartPage.url);
  }

  public async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }

  public async addProductToCart() {
    await this.addToCartButton.click();
  }

  public async expectCartCount(count: string) {
    await expect(this.cartBadge).toHaveText(count);
  }

  public async openCart() {
    await this.cartLink.click();
  }

  public async expectProductInCart() {
    await expect(this.productName).toBeVisible();
  }
}
