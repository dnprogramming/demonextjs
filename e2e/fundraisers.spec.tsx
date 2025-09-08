import { test, expect } from '@playwright/test';

test('test fundraisers page', async ({ page }) => {
  await page.goto('/fundraisers');
  await expect(page.getByRole('heading')).toContainText('Fundraiser');
  await page.getByText('We are excited to announce').click();
  await page.getByText('We would love to work with').click();
  await expect(page.locator('body')).toContainText('We are excited to announce that we are now offering fundraising opportunities for schools, sports teams, and other organizations!');
  await expect(page.locator('body')).toContainText('We would love to work with you to help you reach your fundraising goals!');
});