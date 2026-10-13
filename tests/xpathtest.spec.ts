import {test} from '@playwright/test';
test('xpath', async ({ page }) => {
    await page.goto('https://deepakrao64.github.io/SB/');   
    //await page.locator("//button[text()='Say hello']").click();
   //console.log(await page.locator("//button[text()='Say hello']").isVisible());
   await page.getByRole('button', { name: 'Open practice lab' }).click();
   await page.locator('//button[text()="Say hello"]').isVisible();
   await page.locator("//button[@id='openModalBtn']").click();
   await page.locator("//input[contains(@title, 'username')]").fill('Soniya');
   await page.locator("//label[contains(text(), 'User')]").click();
})