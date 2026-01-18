import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the main title', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Tunadão 1998');
  });

  test('should have navigation links', async ({ page }) => {
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();

    await expect(nav.getByRole('link', { name: /início/i })).toBeVisible();
    await expect(nav.getByRole('link', { name: /sobre/i })).toBeVisible();
    await expect(nav.getByRole('link', { name: /citadão/i })).toBeVisible();
    await expect(nav.getByRole('link', { name: /palmarés/i })).toBeVisible();
  });

  test('should have footer with social links', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });

  test('should have skip to content link for accessibility', async ({ page }) => {
    const skipLink = page.getByRole('link', { name: /ir para conteúdo/i });
    await expect(skipLink).toBeAttached();
  });
});

test.describe('Navigation', () => {
  test('should navigate to Sobre page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /sobre/i }).first().click();
    await expect(page).toHaveURL('/sobre/');
    await expect(page.locator('h1')).toContainText('Sobre Nós');
  });

  test('should navigate to Citadão page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /citadão/i }).first().click();
    await expect(page).toHaveURL('/citadao/');
    await expect(page.locator('h1')).toContainText('Festival Citadão');
  });

  test('should navigate to Palmarés page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /palmarés/i }).first().click();
    await expect(page).toHaveURL('/palmares/');
    await expect(page.locator('h1')).toContainText('Palmarés');
  });

  test('should navigate to Contacto page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /contacto/i }).first().click();
    await expect(page).toHaveURL('/contacto/');
    await expect(page.locator('h1')).toContainText('Contacto');
  });
});
