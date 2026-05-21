import { test, expect } from '@playwright/test';
test('login validation', async ({ page }) => {
  await page.goto('http://localhost:8000');

  await page.getByPlaceholder('Enter mobile number').fill('9876543210');

  await page.getByPlaceholder('Enter password').fill('password123');

  await page.locator('button[type="submit"]').click();
  await expect(page).toHaveURL(/dashboard/);

  await expect(page.locator('text=Wallet Balance')).toBeVisible();

  //with invalid password
  /*
  await page.getByPlaceholder('Enter mobile number').fill('9876543210');

  await page.getByPlaceholder('Enter password').fill('passw');

  await page.locator('button[type="submit"]').click();
  */
  //login happened instead of error

  await page.locator('a[href="/recharge"]').first().click();
  
  //validating recharge status with correct details
  await expect(page).toHaveURL(/recharge/);

        await page.getByPlaceholder('Enter mobile number').fill('9999999999');

        // Select Operator
        await page.locator('select').selectOption('Jio');

        // Enter Recharge Amount
        await page.getByPlaceholder('Enter amount').fill('199');

        // Click Recharge Button
        await page.getByRole('button', { name: 'Recharge Now' }).click();

        // Validation / Success Message
        await expect(page.locator('text=successful')).toBeVisible();

        //validating with incorrect details

        

});