import { test, expect } from '@playwright/test';

test('TC02 - Verify search behavior with an invalid keyword', async ({ page }) => {
  // 1. Open a web browser (Chrome, Firefox, Edge, etc.).
  // 2. Navigate to: `https://ecommerce-playground.lambdatest.io/`.
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  
  // 3. Wait until the home page is fully loaded.
  // 4. Locate the search input field in the header.
  const searchInput = page.locator('input[name="search"]').first();
  
  // 5. Click on the search input field.
  await searchInput.click();
  
  // 6. Enter the invalid keyword `#$@%&` into the search field.
  await searchInput.fill('#$@%&');
  
  // 7. Verify the entered value is displayed correctly in the input field.
  await expect(searchInput).toHaveValue('#$@%&');
  
  // 8. Click the **Search** button (magnifying glass icon).
  const searchButton = page.locator('button.type-text').first();
  await searchButton.click();
  
  // 9. Wait for the search results page to load.
  await page.waitForLoadState('networkidle');
  
  // 10. Verify the URL contains the corresponding encoded search parameter: `search=%23%24%40%25%26`.
  // Playwright's toHaveURL might auto-decode, so we can use a basic regex.
  await expect(page).toHaveURL(/search=(%23%24%40%25%26|#\$@%&)/i);
  
  // 11. Verify the message displayed is: `There is no product that matches the search criteria.`
  await expect(page.locator('text=There is no product that matches the search criteria.')).toBeVisible();
  
  // 12. Observe the results page and any messages shown.
  const products = page.locator('.product-layout, .product-thumb');
  await expect(products).toHaveCount(0);
});
