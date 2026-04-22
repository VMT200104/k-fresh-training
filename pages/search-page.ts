import test, { expect, Page } from '@playwright/test';
import { SearchTestData, SuggestionTestData } from '../models/search-data.model';
import { Constants } from '../utilities/constants';
import { SearchLocators } from '../locators/search.locators';
import { CommonPage } from './common-page';

export class SearchPage extends SearchLocators {

  commonPage: CommonPage;

  constructor(page: Page) {
    super(page);
    this.commonPage = new CommonPage(page);
  }

  /**
   * Navigates to the home page.
   */
  async gotoHome() {
    await test.step('Navigate to home page', async () => {
      await this.page.goto(Constants.HOME_URL);
    });
  }

  /**
   * Performs a search using the provided keyword by clicking the search input and button.
   * @param data Search test data containing the keyword.
   */
  async search(data: Pick<SearchTestData, 'keyword'>) {
    await test.step(`Search for "${data.keyword}"`, async () => {
      await this.inputSearchHeader.click();
      await this.inputSearchHeader.fill(data.keyword);
      await this.btnSearchHeader.click();
      // networkidle: chờ khi không có request nào trong 500ms
      await this.page.waitForLoadState('networkidle');
    });
  }

  /**
   * Types a keyword slowly to trigger autocomplete suggestions.
   * @param data Suggestion test data containing keyword and typing delay.
   */
  async typeForAutocomplete(data: Pick<SuggestionTestData, 'keyword' | 'typingDelay'>) {
    await test.step(`Type "${data.keyword}" to trigger autocomplete`, async () => {
      await this.inputSearchHeader.click();
      await this.inputSearchHeader.pressSequentially(data.keyword, { delay: data.typingDelay });
    });
  }

  /**
   * Verifies the search input contains the expected value.
   * @param keyword The expected keyword in the input field.
   */
  async expectInputValue(keyword: string) {
    await test.step(`Verify search input has value "${keyword}"`, async () => {
      await expect(this.inputSearchHeader).toHaveValue(keyword);
    });
  }

  /**
   * Verifies the URL contains the expected search pattern.
   * @param pattern A string or RegExp to match against the current URL.
   */
  async expectUrlContains(pattern: RegExp | string) {
    await test.step(`Verify URL contains: ${pattern}`, async () => {
      await expect(this.page).toHaveURL(pattern);
    });
  }

  /**
   * Verifies the page title matches the expected pattern.
   * @param pattern A string or RegExp to match against the page title.
   */
  async expectPageTitle(pattern: RegExp | string) {
    await test.step(`Verify page title matches: ${pattern}`, async () => {
      await expect(this.page).toHaveTitle(pattern);
    });
  }

  /**
   * Verifies that at least one product is visible in the search results.
   */
  async expectProductsVisible() {
    await test.step('Verify products are visible in results', async () => {
      await expect(this.productItems.first()).toBeVisible();
    });
  }

  /**
   * Verifies that no products are shown and the no-product message is displayed.
   */
  async expectNoProducts() {
    await test.step('Verify no products are shown', async () => {
      await expect(this.msgNoProduct).toBeVisible();
      await expect(this.productItems).toHaveCount(0);
    });
  }

  /**
   * Verifies the autocomplete dropdown is visible and contains the expected suggestion text.
   * @param data Suggestion test data with expected text and timeout.
   */
  async expectAutocompleteSuggestions(data: Pick<SuggestionTestData, 'expectedSuggestionText' | 'dropdownTimeout'>) {
    await test.step(`Verify autocomplete contains "${data.expectedSuggestionText}"`, async () => {
      await expect(this.dropdownAutocomplete).toBeVisible({ timeout: data.dropdownTimeout });
      await expect(this.dropdownSuggestionItems.first()).toBeVisible();
      const texts = await this.dropdownSuggestionItems.allTextContents();
      const hasMatch = texts.some(text =>
        text.toLowerCase().includes(data.expectedSuggestionText.toLowerCase())
      );
      expect(hasMatch).toBeTruthy();
    });
  }
}
