import {test} from '@playwright/test';

test.describe('test group', () => {
    test('test case 1', async ({ page }) => {
        console.log('inside test1');
    });

    test('test case 2', async ({ page }) => {
        console.log('inside test2');
    });

    test('test case 3', async ({ page }) => {
        console.log('inside test3');
    });

    test('test case 4', async ({ page }) => {
        console.log('inside test4');
    });
});