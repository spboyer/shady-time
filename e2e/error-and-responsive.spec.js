import { test, expect } from '@playwright/test';

const screenshotDir = 'e2e/screenshots';

test.describe('404 / Not Found', () => {
  test('invalid URL shows 404 page', async ({ page }) => {
    await page.goto('/nonexistent-page');
    await expect(page.locator('h1', { hasText: 'Page Not Found' })).toBeVisible();
  });

  test('invalid episode slug shows not found', async ({ page }) => {
    await page.goto('/episodes/this-episode-does-not-exist');
    await expect(page.locator('h1', { hasText: 'Episode Not Found' })).toBeVisible();
  });

  test('invalid guest slug shows not found', async ({ page }) => {
    await page.goto('/guests/this-guest-does-not-exist');
    await expect(page.locator('h1', { hasText: 'Guest Not Found' })).toBeVisible();
  });
});

test.describe('Responsive screenshot suite', () => {
  const pages = [
    { name: 'homepage', path: '/' },
    { name: 'episodes', path: '/episodes' },
    { name: 'episode-detail', path: '/episodes/getting-started-cloud-architecture' },
    { name: 'guests', path: '/guests' },
    { name: 'guest-detail', path: '/guests/alex-rivera' },
    { name: 'contact', path: '/contact' },
    { name: '404', path: '/nonexistent' },
  ];

  const viewports = [
    { name: 'mobile', width: 375, height: 812 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'desktop', width: 1280, height: 800 },
  ];

  for (const pg of pages) {
    for (const vp of viewports) {
      test(`screenshot: ${pg.name} @ ${vp.name} (${vp.width}px)`, async ({ page }) => {
        await page.setViewportSize({ width: vp.width, height: vp.height });
        await page.goto(pg.path);
        await page.screenshot({
          path: `${screenshotDir}/${pg.name}-${vp.name}.png`,
          fullPage: true,
        });
      });
    }
  }
});
