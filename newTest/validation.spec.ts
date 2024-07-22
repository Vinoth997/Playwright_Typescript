import {test, expect} from '@playwright/test'



test('Test 1', async ({page}) => {
    await page.goto("https://www.google.com/");

    await new Promise((resolve) => setTimeout(resolve, 3000));
})

test('Test 2', async ({page}) => {
    await page.goto("https://www.google.com/");

    await new Promise((resolve) => setTimeout(resolve, 3000));
})

test('Test 3', async ({page}) => {
    await page.goto("https://www.google.com/");

    await new Promise((resolve) => setTimeout(resolve, 3000));
})

test('Test 4', async ({page}) => {
    await page.goto("https://www.google.com/");

    await new Promise((resolve) => setTimeout(resolve, 3000));
})

test('Test 5', async ({page}) => {
    await page.goto("https://www.google.com/");

    await new Promise((resolve) => setTimeout(resolve, 3000));
})