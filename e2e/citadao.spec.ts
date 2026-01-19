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

  test('should display latest edition highlight', async ({ page }) => {
    const latestCard = page.locator('.latest__card');
    await expect(latestCard).toBeVisible();
    await expect(latestCard.locator('h2')).toContainText('CITADÃO');
  });

  test('should display edition information', async ({ page }) => {
    const editionItem = page.locator('.edition-item').first();
    await expect(editionItem).toBeVisible();
    await expect(editionItem.locator('h3')).toContainText('CITADÃO');
  });

  test('should display tunas list in edition', async ({ page }) => {
    const editionItem = page.locator('.edition-item').first();
    const tunasList = editionItem.locator('.edition-item__tunas');
    await expect(tunasList).toBeVisible();
  });
});
