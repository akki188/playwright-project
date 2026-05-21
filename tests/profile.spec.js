import { test, expect } from '@playwright/test';

test('faild validation', async ({ page }) => {
  await page.goto('http://localhost:8000');
     await page.getByPlaceholder('Enter mobile number').fill('9876543210');

        await page.getByPlaceholder('Enter password').fill('password123');

        await page.locator('button[type="submit"]').click();

        // Open Profile Page
        await page.getByRole('link', { name: 'Profile' }).click();

        // Verify Profile URL
        await expect(page).toHaveURL(/profile/);

        // Verify Profile Heading
        await expect(page.locator('text=Profile Settings')).toBeVisible();

    });

import { test, expect } from '@playwright/test';

test('Verify Existing User Data Is Visible', async ({ page }) => {

  await page.goto('http://localhost:8000');

  // Login
  await page.getByPlaceholder('Enter mobile number')
    .fill('9876543210');

  await page.getByPlaceholder('Enter password')
    .fill('password123');

  await page.locator('button[type="submit"]').click();

  // Open Profile
  await page.getByRole('link', { name: 'Profile' }).click();

  // Verify existing data
  await expect(
    page.locator('input[value="Rahul Sharma"]')
  ).toBeVisible();

  await expect(
    page.locator('input[value="rahul@example.com"]')
  ).toBeVisible();

  await expect(
    page.locator('input[value="9876543210"]')
  ).toBeVisible();

});