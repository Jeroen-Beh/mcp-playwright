import { test, expect } from '@playwright/test';

test.describe('GUE Admin Portal Tests', () => {
  test('should navigate to admin portal and verify key functionality', async ({ page }) => {
    // Navigate to the admin portal
    await page.goto('/admin-portal/');
    
    // Verify main UI elements are present
    await expect(page.getByRole('banner')).toBeVisible();
    await expect(page.getByRole('main')).toBeVisible();
    
    // Look for navigation menu
    const navigation = page.getByRole('navigation');
    await expect(navigation).toBeVisible();
    
    // Find and verify menu items
    const menuItems = navigation.getByRole('link');
    const menuCount = await menuItems.count();
    
    if (menuCount > 0) {
      // Click first menu item to test navigation
      await menuItems.first().click();
      
      // Verify we navigated away from home page
      await expect(page).not.toHaveURL(/.*\/admin-portal\/?$/);
      
      // Take screenshot of navigation result
      await page.screenshot({ path: './test-results/admin-portal-navigation.png' });
    }
  });
});