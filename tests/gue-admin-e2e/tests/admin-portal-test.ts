import { test } from '@playwright/mcp';

test('GUE Admin Portal Navigation', async ({ context }) => {
  // Navigate to the admin portal
  await test.step('Navigate to admin portal', async () => {
    await context.evaluate('playwright_navigate', {
      url: 'https://gue.acc.local.rhos-ota.tnl-edsn.nl/admin-portal/'
    });
  });
  
  // Get visible text to verify page content
  const pageText = await context.evaluate('playwright_get_visible_text', {});
  
  // Click navigation elements if present
  const hasNavigation = pageText.includes('navigation') || pageText.includes('menu');
  if (hasNavigation) {
    await context.evaluate('playwright_click', {
      selector: '[role="navigation"] a'
    });
  }
  
  // Take a screenshot of the result
  await context.evaluate('playwright_screenshot', {
    path: './test-results/admin-portal.png'
  });
  
  // Close the browser
  await context.evaluate('playwright_close', {});
});