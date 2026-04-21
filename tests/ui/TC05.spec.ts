import { test, expect } from '@playwright/test';

test('TC05 - Verify suggestion list appears when typing a keyword', async ({ page }) => {
  // 1. Open a web browser and navigate to `https://ecommerce-playground.lambdatest.io/`.
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  
  // 2. Wait until the home page is fully loaded.
  // 3. Locate the search input field in the header.
  const searchInput = page.locator('input[name="search"]').first();
  
  // 4. Click on the search input field.
  await searchInput.click();
  
  // 5. Enter the keyword `mac`.
  // Use pressSequentially to simulate realistic typing so the autocomplete JS triggers
  await searchInput.pressSequentially('mac', { delay: 300 });
  
  // 6. Wait for the suggestion list element to appear (wait for selector).
  // Usually the prediction box is a UL with class autocomplete or dropdown-menu
  const dropdown = page.locator('ul.autocomplete, ul.dropdown-menu').first();
  await expect(dropdown).toBeVisible({ timeout: 15000 });
  
  // 7. Verify the suggestion list is visible.
  await expect(dropdown).toBeVisible();
  
  // 8. Verify the number of suggestions is greater than `0`.
  const suggestions = dropdown.locator('li');
  // At least one suggestion item
  await expect(suggestions.first()).toBeVisible();
  const count = await suggestions.count();
  expect(count).toBeGreaterThan(0);
  
  // 9. Capture the text content of the suggestions.
  const texts = await suggestions.allTextContents();
  
  // 10. Verify at least one suggestion contains `mac` (case-insensitive).
  const hasMac = texts.some(text => text.toLowerCase().includes('mac'));
  expect(hasMac).toBeTruthy();
});
