import { test, expect } from '@playwright/test';

test('test about page', async ({ page }) => {
  await page.goto('/about');
  await page.getByRole('heading', { name: 'About the Creator of the Demo' }).click();
  await expect(page.locator('h1')).toContainText('About the Creator of the Demo Site');
  await expect(page.locator('body')).toContainText('I am a Software Engineer that works Full Stack and is originally from the Chicagoland area that has ventured into some industries that have a significant amount of challenges based upon the data they work with.');
  await expect(page.locator('body')).toContainText('I have a mind for both Software Development as well Information Security. I have in my career prided myself on doing the best I can for my work as well as work with others to work towards a common goal. It has not always been easy, but I always appreciate a challenge and do my best to ensure what I work on is secure and efficient.');
});