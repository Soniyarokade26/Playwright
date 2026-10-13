// 




import { test, expect, chromium } from '@playwright/test';

/* 
Syntax
test('method name', async ({page}) => {

  //test code
});

//Headless

*/


test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');   //It open the browser and enter url
  await page.waitForTimeout(10000); // Wait for 10 seconds
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);   //Validate whether page opened - title - PW
});

test('get started link', async ({ }) => {
  
  //Browser launch with provided settings
  const browser = await chromium.launch({
    channel:"chrome",
    headless:false
  });

  //Create isolated session
  const context = await browser.newContext();

  //Create Page - tb or window
  const page = await context.newPage();

  //Enter Url
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});