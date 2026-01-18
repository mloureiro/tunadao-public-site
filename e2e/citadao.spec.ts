import { test, expect } from '@playwright/test';

test.describe('Citadão Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/citadao/');
  });

  test('should display the main title', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Festival Citadão');
  });

  test('should display editions grid', async ({ page }) => {
    const editions = page.locator('.edition-card');
    await expect(editions.first()).toBeVisible();
  });

  test('should navigate to edition detail page', async ({ page }) => {
    await page.locator('.edition-card').first().click();
    await expect(page).toHaveURL(/\/citadao\/\d{4}\//);
    await expect(page.locator('h1')).toContainText('CITADÃO');
  });
});

test.describe('Citadão Edition Detail Page', () => {
  test('should display edition information', async ({ page }) => {
    await page.goto('/citadao/2024/');

    await expect(page.locator('h1')).toContainText('CITADÃO 2024');
    await expect(page.getByText('18ª Edição')).toBeVisible();
  });

  test('should display tunas list', async ({ page }) => {
    await page.goto('/citadao/2024/');

    const tunasSection = page.locator('.tunas');
    await expect(tunasSection).toBeVisible();
    await expect(tunasSection.locator('.tuna-item')).toHaveCount(4);
  });

  test('should have navigation to other editions', async ({ page }) => {
    await page.goto('/citadao/2024/');

    await expect(page.getByRole('link', { name: /Todas as edições/i })).toBeVisible();
  });
});
