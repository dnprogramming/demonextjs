import { test, expect } from '@playwright/test';

test('test shop page', async ({ page }) => {
  await page.goto('/shop');
  await expect(page.getByRole('img', { name: 'Next.JS Banner' })).toBeVisible();
  await page.getByRole('img', { name: 'Next.JS Banner' }).click();
});