import { test, expect } from '@playwright/test';

test('test homepage', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('body')).toContainText('Home');
  await expect(page.locator('body')).toContainText('About');
  await expect(page.locator('body')).toContainText('Contact');
  await expect(page.locator('body')).toContainText('Gallery');
  await expect(page.locator('body')).toContainText('Fundraisers');
  await expect(page.locator('body')).toContainText('Shop');
  await expect(page.locator('h1')).toContainText('Need an application developed?');
  await expect(page.getByRole('img', { name: 'Demo Hero Banner' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'First Card' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Second Card*' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Third Card' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Facebook' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Instagram' })).toBeVisible();
  await page.getByRole('button', { name: 'Second Demo Type' }).click();
});