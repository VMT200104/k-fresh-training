/**
 * Interface for search test data used across TC01–TC05
 */
export interface SearchTestData {
    /** The keyword to type into the search input */
    keyword: string;
    /** Whether products are expected to appear in the results */
    expectResults: boolean;
    /** Optional: regex pattern to validate the URL after search */
    expectedUrlPattern?: RegExp;
    /** Optional: regex pattern to validate the page title */
    expectedTitlePattern?: RegExp;
    /** Optional: message expected when no products are found */
    noProductMessage?: string;
}

/**
 * Interface for autocomplete/suggestion test data (TC05)
 */
export interface SuggestionTestData {
    /** The keyword to type for triggering suggestions */
    keyword: string;
    /** Delay in ms between each keystroke to simulate real typing */
    typingDelay: number;
    /** Timeout in ms to wait for the suggestion dropdown to appear */
    dropdownTimeout: number;
    /** The text fragment expected inside at least one suggestion */
    expectedSuggestionText: string;
}

/**
 * Interface for search result validation
 */
export interface SearchResultExpectation {
    /** Whether the product list should be visible */
    hasProducts: boolean;
    /** Expected product count (0 means no products) */
    expectedCount?: number;
    /** Whether the "no product" message should be displayed */
    showNoProductMessage: boolean;
}
