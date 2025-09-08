import { test, expect } from '@playwright/test';

test('test gallery page', async ({ page }) => {
  await page.goto('/gallery');
  await expect(page.getByRole('heading')).toContainText('Gallery');
  await expect(page.getByRole('img', { name: '/images/hero_banner.png' })).toBeVisible();
  await page.getByRole('heading', { name: 'Gallery' }).click();
  await page.getByRole('img', { name: '/images/hero_banner.png' }).click();
  await expect(page.getByRole('img', { name: 'Demo Next.JS Modal Image' })).toBeVisible();
  await page.getByRole('button', { name: '×' }).click();
});