import { test, expect } from '@playwright/test';

test('TC03 - Verify system behavior with an overlength search keyword', async ({ page }) => {
  // 1. Open a web browser (Chrome, Firefox, Edge, etc.).
  // 2. Navigate to: `https://ecommerce-playground.lambdatest.io/`.
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  
  // 3. Wait until the home page is fully loaded.
  // 4. Locate the search input field in the header.
  const searchInput = page.locator('input[name="search"]').first();
  
  // 5. Click on the search input field.
  await searchInput.click();
  
  // 6. Enter a 250-character string into the search field.
  const longKeyword = 'a'.repeat(250);
  await searchInput.fill(longKeyword);
  
  // 7. Click the **Search** button or press **Enter**.
  const searchButton = page.locator('button.type-text').first();
  await searchButton.click();
  
  // 8. Wait for the search results page to load completely.
  await page.waitForLoadState('networkidle');
  
  // 9. Verify the message displayed is: `There is no product that matches the search criteria.`
  await expect(page.locator('text=There is no product that matches the search criteria.')).toBeVisible();
  
  // Verify no products displayed
  const products = page.locator('.product-layout, .product-thumb');
  await expect(products).toHaveCount(0);
});
