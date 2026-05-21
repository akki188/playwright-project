import { test, expect } from '@playwright/test';

test('success validation', async ({ page }) => {
  await page.goto('http://localhost:8000');

    await page.getByPlaceholder('Enter mobile number').fill('9876543210');

    await page.getByPlaceholder('Enter password').fill('password123');

    await page.locator('button[type="submit"]').click();

    await page.getByRole('link', { name: 'Transactions'}).click();

    await page.locator('select').selectOption('success');

    await expect(page.locator('select')).toHaveValue('success');


})