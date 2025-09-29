import { test } from '@modelcontextprotocol/sdk';
import { ensureBrowser } from '../src/toolHandler';
import { BROWSER_TOOLS } from '../src/tools';

test('Explore GUE Admin Portal', async () => {
  const page = await ensureBrowser();
  
  // Navigate to the admin portal
  await page.goto('https://gue.acc.local.rhos-ota.tnl-edsn.nl/admin-portal/');
  
  // Wait for navigation and key elements
  await page.waitForLoadState('networkidle');
  
  // Find and interact with navigation if present
  const navigationElements = await page.$$('[role="navigation"] a');
  if (navigationElements.length > 0) {
    // Click first navigation item
    await navigationElements[0].click();
    await page.waitForLoadState('networkidle');
  }
  
  // Take screenshot of the result
  await page.screenshot({ path: './test-results/admin-portal.png' });
  
  // Clean up
  await page.close();
});