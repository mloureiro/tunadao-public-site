import { test, expect } from '@playwright/test';

test.describe('Citadão Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/citadao/');
  });

  test('should display the main title', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Festival Citadão');
  });

  test('should display editions list', async ({ page }) => {
    const editions = page.locator('.edition-item');
    await expect(editions.first()).toBeVisible();
  });

  test('should display edition information', async ({ page }) => {
    const editionItem = page.locator('.edition-item').first();
    await expect(editionItem).toBeVisible();
    await expect(editionItem.locator('h3')).toContainText('CITADÃO');
  });

  test('should display tunas list in edition', async ({ page }) => {
    const editionItem = page.locator('.edition-item').first();
    const tunasList = editionItem.locator('.tunas-avatars').first();
    await expect(tunasList).toBeVisible();
  });
});
