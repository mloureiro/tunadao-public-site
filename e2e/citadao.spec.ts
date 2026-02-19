import { test, expect } from '@playwright/test';

test.describe('Citadão Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/citadao/');
  });

  test('should display the main title', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Citadão');
  });

  test('should display editions list', async ({ page }) => {
    const editions = page.locator('.edition-card');
    await expect(editions.first()).toBeVisible();
  });

  test('should display edition information', async ({ page }) => {
    const editionCard = page.locator('.edition-card').first();
    await expect(editionCard).toBeVisible();
    await expect(editionCard.locator('h3')).toContainText('CITADÃO');
  });

  test('should navigate to edition detail page', async ({ page }) => {
    const editionLink = page.locator('.edition-link').first();
    await expect(editionLink).toBeVisible();
  });
});
