import { Locator, Page } from '@playwright/test';
import { CommonLocators } from './common-locators';

export class SearchLocators extends CommonLocators {

    constructor(page: Page) {
        super(page);
        this.searchLocatorInitialization();
    }

    override setPage(page: Page) {
        super.setPage(page);
        this.searchLocatorInitialization();
    }

    // Search input & button
    inputSearchHeader!: Locator;
    btnSearchHeader!: Locator;

    // Autocomplete dropdown (TC05)
    dropdownAutocomplete!: Locator;
    dropdownSuggestionItems!: Locator;

    // Search result - product listing (TC01, TC03, TC04)
    productItems!: Locator;

    // Search result - no product message (TC02, TC03)
    msgNoProduct!: Locator;

    searchLocatorInitialization() {
        // Search input in header (used in TC01–TC05)
        this.inputSearchHeader = this.page.locator('input[name="search"]').first();

        // Search button / magnifying glass icon (used in TC01–TC05)
        this.btnSearchHeader = this.page.locator('button.type-text').first();

        // Autocomplete suggestion dropdown (TC05)
        this.dropdownAutocomplete = this.page.locator('ul.autocomplete, ul.dropdown-menu').first();

        // Individual suggestion items inside dropdown (TC05)
        this.dropdownSuggestionItems = this.dropdownAutocomplete.locator('li');

        // Product grid items in search results (TC01, TC03, TC04)
        this.productItems = this.page.locator('.product-layout, .product-thumb');

        // "No product" message displayed when search returns empty (TC02, TC03)
        this.msgNoProduct = this.page.locator('text=There is no product that matches the search criteria.');
    }
}
