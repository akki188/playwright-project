import { test, expect } from '@playwright/test';
test('login validation', async ({ page }) => {
  await page.goto('http://localhost:8000');

  await page.getByPlaceholder('Enter mobile number').fill('9876543210');

  await page.getByPlaceholder('Enter password').fill('password123');

  await page.getByRole('button', { name: 'Login' }).click();
});