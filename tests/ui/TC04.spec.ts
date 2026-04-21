import { test, expect } from '@playwright/test';

test('TC04 - Verify system behavior with a minimum-length search keyword', async ({ page }) => {
  // 1. Open a web browser (Chrome, Firefox, Edge, etc.).
  // 2. Navigate to: `https://ecommerce-playground.lambdatest.io/`.
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  
  // 3. Wait until the home page is fully loaded.
  // 4. Locate the search input field in the header.
  const searchInput = page.locator('input[name="search"]').first();
  
  // 5. Click on the search input field.
  await searchInput.click();
  
  // 6. Enter the minimum-length keyword `a`.
  await searchInput.fill('a');
  
  // 7. Verify the value `a` is displayed correctly in the input field.
  await expect(searchInput).toHaveValue('a');
  
  // 8. Click the **Search** button or press **Enter**.
  const searchButton = page.locator('button.type-text').first();
  await searchButton.click();
  
  // 9. Wait for the search results page to load completely.
  await page.waitForLoadState('networkidle');
  
  // 10. Verify the URL contains the search parameter `search=a`.
  await expect(page).toHaveURL(/search=a/i);
  
  // 11. Verify the product list is displayed.
  const products = page.locator('.product-layout, .product-thumb');
  await expect(products.first()).toBeVisible();
});
