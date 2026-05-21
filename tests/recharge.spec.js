import { test, expect } from '@playwright/test';
test('login validation', async ({ page }) => {
  await page.goto('http://localhost:8000');

  await page.getByPlaceholder('Enter mobile number').fill('9876543210');

  await page.getByPlaceholder('Enter password').fill('password123');

  await page.locator('button[type="submit"]').click();
  await expect(page).toHaveURL(/dashboard/);

  await expect(page.locator('text=Wallet Balance')).toBeVisible();

  await page.locator('a[href="/recharge"]').first().click();

  await page.getByRole('button', { name: 'Recharge Now' }).click();

  await expect(page.getByText('The mobile field is required.')).toBeVisible();

  await expect(page.getByText('The operator field is required.')).toBeVisible();

  await expect(page.getByText('The amount field is required.')).toBeVisible();
});
