import { test, expect } from '@playwright/test';

test('TC01 - Verify search functionality with a valid keyword', async ({ page }) => {
  // 1. Open a web browser
  // 2. Navigate to: `https://ecommerce-playground.lambdatest.io/`
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  
  // 3. Wait until the home page is fully loaded.
  // 4. Locate and click on the search input field in the header.
  const searchInput = page.locator('input[name="search"]').first();
  await searchInput.click();
  
  // 5. Enter the valid keyword `Macbook` into the search field.
  await searchInput.fill('Macbook');
  
  // 6. Verify the entered value is displayed correctly in the input field.
  await expect(searchInput).toHaveValue('Macbook');
  
  // 7. Click the **Search** button (magnifying glass icon).
  const searchButton = page.locator('button.type-text').first();
  await searchButton.click();
  
  // 8. Wait for the search results page to load.
  await page.waitForLoadState('networkidle');
  
  // 9. Verify the URL contains the parameter `search=Macbook`.
  await expect(page).toHaveURL(/search=Macbook/i);
  
  // 10. Verify the page title is related to the search.
  await expect(page).toHaveTitle(/Search - Macbook/i);
  
  // 11. Verify that the product list is displayed and includes at least one relevant product.
  const products = page.locator('.product-layout, .product-thumb');
  await expect(products.first()).toBeVisible();
});
