import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the main title', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Tunadão 1998');
  });

  test('should have navigation', async ({ page, isMobile }) => {
    if (isMobile) {
      // On mobile, navigation is behind hamburger menu
      const menuBtn = page.locator('.header__menu-btn');
      await expect(menuBtn).toBeVisible();
    } else {
      // On desktop, navigation is visible
      const nav = page.getByRole('navigation', { name: 'Navegação principal' });
      await expect(nav).toBeAttached();
    }
  });

  test('should have footer', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });

  test('should have skip to content link for accessibility', async ({ page }) => {
    const skipLink = page.getByRole('link', { name: /ir para conteúdo/i });
    await expect(skipLink).toBeAttached();
  });

  test('should have stats bar', async ({ page }) => {
    const statsBar = page.locator('.stats-bar').first();
    await expect(statsBar).toBeVisible();
    await expect(statsBar.locator('.stats-bar__item')).toHaveCount(5);
  });

  test('should have section links to main pages', async ({ page }) => {
    await expect(page.locator('#sobre-preview')).toBeAttached();
    await expect(page.locator('#citadao-preview')).toBeAttached();
    await expect(page.locator('#palmares-preview')).toBeAttached();
    await expect(page.locator('#music-cta')).toBeAttached();
  });
});

test.describe('Navigation via section images', () => {
  test('should navigate to Sobre page via section image', async ({ page }) => {
    await page.goto('/');
    await page.locator('#sobre-preview .section-image a').click();
    await expect(page).toHaveURL(/\/sobre\/?$/);
    await expect(page.locator('h1')).toContainText('Sobre Nós');
  });

  test('should navigate to Citadão page via section image', async ({ page }) => {
    await page.goto('/');
    await page.locator('#citadao-preview .section-image a').click();
    await expect(page).toHaveURL(/\/citadao\/?$/);
    await expect(page.locator('h1')).toContainText('Festival Citadão');
  });

  test('should navigate to Palmarés page via section image', async ({ page }) => {
    await page.goto('/');
    await page.locator('#palmares-preview .section-image a').click();
    await expect(page).toHaveURL(/\/palmares\/?$/);
    await expect(page.locator('h1')).toContainText('Palmarés');
  });
});
