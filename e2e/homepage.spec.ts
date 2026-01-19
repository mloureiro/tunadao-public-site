import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the main title', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Tunadão 1998');
  });

  test('should have navigation', async ({ page }) => {
    const nav = page.locator('header nav');
    await expect(nav).toBeAttached();
  });

  test('should have footer', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });

  test('should have skip to content link for accessibility', async ({ page }) => {
    const skipLink = page.getByRole('link', { name: /ir para conteúdo/i });
    await expect(skipLink).toBeAttached();
  });

  test('should have highlight cards linking to main sections', async ({ page }) => {
    const highlightCards = page.locator('.highlight-card');
    await expect(highlightCards).toHaveCount(3);
  });

  test('should have stats section', async ({ page }) => {
    const statsSection = page.locator('.stats');
    await expect(statsSection).toBeVisible();
    await expect(page.locator('.stats__item')).toHaveCount(4);
  });
});

test.describe('Navigation via highlight cards', () => {
  test('should navigate to Sobre page via highlight card', async ({ page }) => {
    await page.goto('/');
    await page.locator('.highlight-card').filter({ hasText: /sobre/i }).click();
    await expect(page).toHaveURL('/sobre/');
    await expect(page.locator('h1')).toContainText('Sobre Nós');
  });

  test('should navigate to Citadão page via highlight card', async ({ page }) => {
    await page.goto('/');
    await page.locator('.highlight-card').filter({ hasText: /citadão/i }).click();
    await expect(page).toHaveURL('/citadao/');
    await expect(page.locator('h1')).toContainText('Festival Citadão');
  });

  test('should navigate to Palmarés page via highlight card', async ({ page }) => {
    await page.goto('/');
    await page.locator('.highlight-card').filter({ hasText: /palmarés/i }).click();
    await expect(page).toHaveURL('/palmares/');
    await expect(page.locator('h1')).toContainText('Palmarés');
  });
});
