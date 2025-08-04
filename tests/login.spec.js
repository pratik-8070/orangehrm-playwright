import { test, expect } from '@playwright/test';

test('Login to OrangeHRM', async ({ page }) => {
  test.setTimeout(60000); // Set timeout to 60 seconds

  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');

  await expect(page).toHaveURL(/dashboard/);
  await expect(page.locator('h6')).toHaveText('Dashboard');
});