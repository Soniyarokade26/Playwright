import { test, expect } from '@playwright/test';

test('locators', async ({ page }) => {

    // Open application
    await page.goto('https://deepakrao64.github.io/SB/');

    // 1. getByTestId()
    await page.getByRole('button', { name: 'project' }).click();
    
    //await page.getByTestId('project-button').click();

     // Verify element
    // await expect(page.getByTestId('Launch client portal')).toBeVisible();
    await page.getByRole('button', {name: 'Launch client portal'}).click();
    
    // 2. getByAltText()
    // await expect(
    //     page.getByAltText('Skill Bridge Logo')).toBeVisible();

    // 3. getByTitle()
    await page.getByTitle('Open Project').click();

});