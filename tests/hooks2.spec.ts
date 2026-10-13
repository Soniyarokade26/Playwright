import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
    console.log('Before Excution of any tests');
});


test.afterAll(async () => {
    console.log('After Excution of all tests');
});

test.beforeEach(async ({ page }) => {
    console.log('Before Excution of any tests');
});

test('Test 1', async ({ page }) => {
    console.log('Executing Test 1');
});

test('Test 2', async ({ page }) => {
    console.log('Executing Test 2');
});

test.afterEach(async () => {
    console.log('After Excution of each test');
});
