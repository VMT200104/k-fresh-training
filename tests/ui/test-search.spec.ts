import { test } from '../../pages/base-page';
import { searchData } from '../../data/search.data';

test.describe('Search Functionality Tests', () => {

  test('TC01 - Verify search functionality with a valid keyword', async ({ searchPage }) => {
    const data = searchData.validKeyword;

    // 1, 2, 3. Open browser and Navigate to Home
    await searchPage.gotoHome();

    // 4, 5. Locate and Enter keyword
    await searchPage.typeForAutocomplete({ keyword: data.keyword, typingDelay: 0 });

    // 6. Verify the entered value (Bổ sung cho khớp file .md)
    await searchPage.expectInputValue(data.keyword);

    // 7, 8. Click Search and wait for results (Cấu trúc Search đơn giản)
    await searchPage.search(data);

    // 9, 10, 11. Assertions
    await searchPage.expectUrlContains(new RegExp(`search=${data.keyword}`, 'i'));
    await searchPage.expectPageTitle(new RegExp(`Search - ${data.keyword}`, 'i'));
    await searchPage.expectProductsVisible();
  });

  test('TC02 - Verify search behavior with an invalid keyword', async ({ searchPage }) => {
    const data = searchData.invalidKeyword;

    // 1, 2, 3. Navigate to home
    await searchPage.gotoHome();

    // 4, 5, 6. Enter invalid keyword
    await searchPage.typeForAutocomplete({ keyword: data.keyword, typingDelay: 0 });

    // 7. Verify the entered value
    await searchPage.expectInputValue(data.keyword);

    // 8, 9. Click search and wait
    await searchPage.search(data);

    // 10, 11. Assertions
    await searchPage.expectUrlContains(/search=(%23%24%40%25%26|#\$@%&)/i);
    await searchPage.expectNoProducts();
  });

  test('TC03 - Verify system behavior with an overlength search keyword', async ({ searchPage }) => {
    const data = searchData.maxKeyword;

    // 1, 2, 3. Navigate to home
    await searchPage.gotoHome();

    // 4, 5, 6. Enter 250-char string
    await searchPage.typeForAutocomplete({ keyword: data.keyword, typingDelay: 0 });

    // 7, 8. Click search and wait
    await searchPage.search(data);

    // 9, 10. Assertions
    await searchPage.expectNoProducts();
  });

  test('TC04 - Verify system behavior with a minimum-length search keyword', async ({ searchPage }) => {
    const data = searchData.minKeyword;

    // 1, 2, 3. Navigate to home
    await searchPage.gotoHome();

    // 4, 5, 6. Enter keyword 'a'
    await searchPage.typeForAutocomplete({ keyword: data.keyword, typingDelay: 0 });

    // 7. Verify the entered value
    await searchPage.expectInputValue(data.keyword);

    // 8, 9. Click search and wait
    await searchPage.search(data);

    // 10, 11. Assertions
    await searchPage.expectUrlContains(new RegExp(`search=${data.keyword}`, 'i'));
    await searchPage.expectProductsVisible();
  });

  test('TC05 - Verify suggestion list appears when typing a keyword', async ({ searchPage }) => {
    const data = searchData.suggestionData;

    // 1, 2, 3. Navigate to home
    await searchPage.gotoHome();

    // 4, 5. Enter keyword 'mac'
    await searchPage.typeForAutocomplete(data);

    // 6, 7, 8. Verify suggestions appear and count > 0
    // 9, 10. Verify content 
    await searchPage.expectAutocompleteSuggestions(data);
  });

});
