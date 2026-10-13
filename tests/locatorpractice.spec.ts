import { test, expect } from '@playwright/test';

test('Practice Playwright Locators without const', async ({ page }) => {
  // Navigate to the test page
  await page.goto('https://testautomationpractice.blogspot.com/');

  // 1. getByAltText()
  //await expect(page.getByAltText('gui elements')).toBeVisible();

  // 2. getByTitle()
  //await expect(page.getByTitle('Automation Practice')).toBeVisible();

  // 3. getByTestId()
  //await expect(page.getByTestId('test-element-id')).toBeVisible();

  // 4. getByLabel()
  await page.getByLabel('Name:').fill('John Doe');
  await page.getByLabel('Email:').fill('johndoe@example.com');
  await page.getByLabel('Phone:').fill('1234567890');
  await page.getByLabel('Address:').fill('123 Main Street');
  await page.getByLabel('Male', { exact: true }).check();
  await page.getByLabel('Sunday').check();

  // 5. getByPlaceholder()
  await page.getByPlaceholder('Start typing to search...').fill('Playwright');

  // 6. getByRole()
  await page.getByRole('combobox', { name: 'Country:' }).selectOption('japan');
  await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();

  // 7. getByText()
  await expect(page.getByText('Automation Testing Practice')).toBeVisible();
});