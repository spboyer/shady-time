import { test, expect } from '@playwright/test';

const screenshotDir = 'e2e/screenshots';

test.describe('Episodes', () => {
  test('episodes list loads and shows episode cards', async ({ page }) => {
    await page.goto('/episodes');
    await expect(page.locator('h1', { hasText: 'Episodes' })).toBeVisible();
    // 5 episodes in data
    const cards = page.locator('a[href^="/episodes/"]');
    await expect(cards.first()).toBeVisible();
    expect(await cards.count()).toBeGreaterThanOrEqual(5);
  });

  test('click first episode card navigates to detail', async ({ page }) => {
    await page.goto('/episodes');
    const firstCard = page.locator('a[href^="/episodes/"]').first();
    await firstCard.click();
    await expect(page).toHaveURL(/\/episodes\/.+/);
  });

  test('episode detail shows title, YouTube iframe, and show notes', async ({ page }) => {
    await page.goto('/episodes/getting-started-cloud-architecture');
    await expect(page.locator('h1', { hasText: 'Getting Started with Cloud Architecture' })).toBeVisible();
    await expect(page.locator('iframe')).toBeVisible();
    await expect(page.locator('h2', { hasText: 'Show Notes' })).toBeVisible();
  });

  test('"Back to Episodes" link works', async ({ page }) => {
    await page.goto('/episodes/getting-started-cloud-architecture');
    const backLink = page.locator('a', { hasText: 'Back to Episodes' });
    await expect(backLink).toBeVisible();
    await backLink.click();
    await expect(page).toHaveURL('/episodes');
  });

  test('guest links on episode detail navigate to guest page', async ({ page }) => {
    await page.goto('/episodes/getting-started-cloud-architecture');
    const guestLink = page.locator('a', { hasText: 'Alex Rivera' });
    await expect(guestLink).toBeVisible();
    await guestLink.click();
    await expect(page).toHaveURL('/guests/alex-rivera');
  });

  test('screenshot: episodes list desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/episodes');
    await page.screenshot({ path: `${screenshotDir}/episodes-list-desktop.png`, fullPage: true });
  });

  test('screenshot: episodes list mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/episodes');
    await page.screenshot({ path: `${screenshotDir}/episodes-list-mobile.png`, fullPage: true });
  });

  test('screenshot: episode detail desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/episodes/getting-started-cloud-architecture');
    await page.screenshot({ path: `${screenshotDir}/episode-detail-desktop.png`, fullPage: true });
  });

  test('screenshot: episode detail mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/episodes/getting-started-cloud-architecture');
    await page.screenshot({ path: `${screenshotDir}/episode-detail-mobile.png`, fullPage: true });
  });
});
