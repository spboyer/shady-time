import { test, expect } from '@playwright/test';

const screenshotDir = 'e2e/screenshots';

test.describe('Guests', () => {
  test('guests list loads and shows guest cards', async ({ page }) => {
    await page.goto('/guests');
    await expect(page.locator('h1', { hasText: 'Guests' })).toBeVisible();
    const cards = page.locator('a[href^="/guests/"]');
    await expect(cards.first()).toBeVisible();
    expect(await cards.count()).toBeGreaterThanOrEqual(4);
  });

  test('click first guest card navigates to detail', async ({ page }) => {
    await page.goto('/guests');
    const firstCard = page.locator('a[href^="/guests/"]').first();
    await firstCard.click();
    await expect(page).toHaveURL(/\/guests\/.+/);
  });

  test('guest detail shows name, bio, social links, and episode appearances', async ({ page }) => {
    await page.goto('/guests/alex-rivera');
    await expect(page.locator('h1', { hasText: 'Alex Rivera' })).toBeVisible();
    await expect(page.locator('h2', { hasText: 'About' })).toBeVisible();
    // Alex Rivera has social links (twitter, linkedin)
    const socialLinks = page.locator('a[target="_blank"][rel*="noopener"]');
    expect(await socialLinks.count()).toBeGreaterThanOrEqual(1);
    // Episode appearances
    await expect(page.locator('h2', { hasText: 'Episodes featuring Alex Rivera' })).toBeVisible();
  });

  test('screenshot: guests list desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/guests');
    await page.screenshot({ path: `${screenshotDir}/guests-list-desktop.png`, fullPage: true });
  });

  test('screenshot: guest detail desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/guests/alex-rivera');
    await page.screenshot({ path: `${screenshotDir}/guest-detail-desktop.png`, fullPage: true });
  });
});

test.describe('Contact', () => {
  test('contact page loads with social links and form', async ({ page }) => {
    await page.goto('/contact');
    await expect(page.locator('h1', { hasText: 'Get in Touch' })).toBeVisible();
    await expect(page.locator('h2', { hasText: 'Follow Us' })).toBeVisible();
    await expect(page.locator('h2', { hasText: 'Send a Message' })).toBeVisible();
    // Form fields
    await expect(page.locator('input#name')).toBeVisible();
    await expect(page.locator('input#email')).toBeVisible();
    await expect(page.locator('textarea#message')).toBeVisible();
    await expect(page.locator('button[type="submit"]', { hasText: 'Send Message' })).toBeVisible();
  });

  test('contact form validates required fields', async ({ page }) => {
    await page.goto('/contact');
    // Try submitting empty form — browser validation should prevent submission
    const submitBtn = page.locator('button[type="submit"]');
    await submitBtn.click();
    // The form should still be on the contact page (not navigated away)
    await expect(page).toHaveURL('/contact');
    // Check that the name input has the required validation
    const nameInput = page.locator('input#name');
    const isRequired = await nameInput.getAttribute('required');
    expect(isRequired).not.toBeNull();
  });

  test('screenshot: contact desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/contact');
    await page.screenshot({ path: `${screenshotDir}/contact-desktop.png`, fullPage: true });
  });

  test('screenshot: contact mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/contact');
    await page.screenshot({ path: `${screenshotDir}/contact-mobile.png`, fullPage: true });
  });
});
