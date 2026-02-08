import { test, expect } from '@playwright/test';

const screenshotDir = 'e2e/screenshots';

test.describe('Homepage', () => {
  test('loads and shows Shady Time heading', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1', { hasText: 'Shady Time' })).toBeVisible();
  });

  test('hero CTA "Listen Now" links to latest episode', async ({ page }) => {
    await page.goto('/');
    const cta = page.locator('a', { hasText: 'Listen Now' });
    await expect(cta).toBeVisible();
    await cta.click();
    await expect(page).toHaveURL(/\/episodes\//);
  });

  test('nav links navigate correctly', async ({ page }) => {
    await page.goto('/');

    // Episodes
    await page.locator('nav a', { hasText: 'Episodes' }).first().click();
    await expect(page).toHaveURL('/episodes');

    // Guests
    await page.locator('nav a', { hasText: 'Guests' }).first().click();
    await expect(page).toHaveURL('/guests');

    // Contact
    await page.locator('nav a', { hasText: 'Contact' }).first().click();
    await expect(page).toHaveURL('/contact');
  });

  test('mobile hamburger menu works', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');

    // Desktop nav should be hidden
    const desktopNav = page.locator('nav.hidden');
    await expect(desktopNav).toBeHidden();

    // Click hamburger button
    const hamburger = page.getByLabel('Toggle navigation menu');
    await expect(hamburger).toBeVisible();
    await hamburger.click();

    // Mobile nav should appear
    const mobileNav = page.locator('nav.md\\:hidden');
    await expect(mobileNav).toBeVisible();

    // Nav links should be visible
    await expect(mobileNav.locator('a', { hasText: 'Episodes' })).toBeVisible();
    await expect(mobileNav.locator('a', { hasText: 'Guests' })).toBeVisible();
    await expect(mobileNav.locator('a', { hasText: 'Contact' })).toBeVisible();
  });

  test('footer has 5 social links', async ({ page }) => {
    await page.goto('/');
    const footer = page.locator('footer');
    const socialLinks = footer.locator('a[target="_blank"]');
    await expect(socialLinks).toHaveCount(5);
  });

  test('screenshot: homepage desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');
    await page.screenshot({ path: `${screenshotDir}/homepage-desktop.png`, fullPage: true });
  });

  test('screenshot: homepage mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    await page.screenshot({ path: `${screenshotDir}/homepage-mobile.png`, fullPage: true });
  });
});
