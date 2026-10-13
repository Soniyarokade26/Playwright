import { test, expect } from '@playwright/test';

test('locator', async ({ page }) => {

    await page.goto('https://deepakrao64.github.io/SB/');

    await page.getByRole('button', {name: 'project'}).click();
   
    await page.getByRole('button', {name: 'Launch client portal'}).click();

    await page.getByLabel('Username').fill('admin');

    await page.getByLabel('Password').fill('password');

    await page.getByText('Enter portal').click();

    let isHeadingVisible = await page.getByText('Good morning, investor').isVisible();

      if (isHeadingVisible) {
        console.log('Login successful');
    } else {
        console.log('Login failed');
    }
});