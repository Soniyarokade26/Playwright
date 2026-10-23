
import { expect, test } from '@playwright/test';

test('Verify product added to cart', async ({ page }) => {

  // Step 1: Open website
  await page.goto('https://www.saucedemo.com/');

  // Step 2: Login
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // Step 3: Add product to cart
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // Step 4: Verify cart count
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');

  // Step 5: Open cart
  await page.locator('[data-test="shopping-cart-link"]').click();

  // Step 6: Verify product is displayed
  await expect(page.locator('[data-test="inventory-item-name"]')).toHaveText('Sauce Labs Backpack');

});
