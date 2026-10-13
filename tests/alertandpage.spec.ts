import { test, chromium, expect } from '@playwright/test';

test('Handle Alerts', async () => {

    const browser = await chromium.launch({
        channel: 'chrome',
        headless: false
    });

    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on('dialog', async (dialog) => {

        let message = dialog.message();
        console.log('Alert message:', message);
        expect(message).toBe('I am a JS Alert');
        await dialog.accept();
    });

    await page.getByRole('button', {name: 'Click for JS Alert'}).click();

    await page.pause();

    //await browser.close();
});