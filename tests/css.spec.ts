import { test, expect } from '@playwright/test';

test('Verify portfolio updated today', async ({ page }) => {

    // Open application
    await page.goto('https://deepakrao64.github.io/SB/');

    // 1. CSS locator using data-testid
    await page.locator('[data-testid="tab-button"]').click();

    await expect(page.getByTestId('Launch client portal')).toBeVisible();

    // 2. CSS locator using alt
    await expect( page.locator('img[alt="brand"]')).toBeVisible();

    // 3. CSS locator using title
    await page.locator('[title="Open Project"]').click();

    // Login
    await page.locator('#username').fill('admin');

    await page.locator('#password').fill('password');

    await page.locator('button').filter({ hasText: 'Enter portal' }).click();

    // Verify
    await expect(page.locator('text=Good morning, investor')).toBeVisible();
});