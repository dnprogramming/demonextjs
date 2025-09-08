import { test, expect } from '@playwright/test';

test('test contact page', async ({ page }) => {
  await page.goto('/contact');
  await page.getByRole('heading', { name: 'Contact Us' }).click();
  await page.getByText('If you have any questions or').click();
  await page.getByText('Name:').click();
  await page.getByRole('textbox', { name: 'Name:' }).click();
  await page.getByRole('textbox', { name: 'Name:' }).fill('Demo');
  await page.getByText('Email:').click();
  await page.getByRole('textbox', { name: 'Email:' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).fill('demo@test.net');
  await page.getByRole('textbox', { name: 'Message:' }).click();
  await page.getByRole('textbox', { name: 'Message:' }).fill('Demo Example');
  await expect(page.getByRole('heading')).toContainText('Contact Us');
  await expect(page.locator('form')).toContainText('Email:');
});