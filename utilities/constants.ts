export class Constants {
  // Environment
  static readonly ENV = process.env.ENV || 'qa';

  // Base URL
  static readonly BASE_URL = process.env.BASE_URL || 'https://ecommerce-playground.lambdatest.io';

  // Search URLs
  static readonly HOME_URL = `${Constants.BASE_URL}/index.php?route=common/home`;
  static readonly SEARCH_RESULTS_URL = `${Constants.BASE_URL}/index.php?route=product/search`;

  // Search test data
  static readonly SEARCH_VALID_KEYWORD = process.env.SEARCH_VALID_KEYWORD || 'Macbook';
  static readonly SEARCH_INVALID_KEYWORD = process.env.SEARCH_INVALID_KEYWORD || '#$@%&';
  static readonly SEARCH_MIN_KEYWORD = process.env.SEARCH_MIN_KEYWORD || 'a';
  static readonly SEARCH_AUTOCOMPLETE_KEYWORD = process.env.SEARCH_AUTOCOMPLETE_KEYWORD || 'mac';
  static readonly SEARCH_MAX_LENGTH = Number(process.env.SEARCH_MAX_LENGTH) || 250;

  // Expected messages
  static readonly MSG_NO_PRODUCT = 'There is no product that matches the search criteria.';

  // Timeouts (ms)
  static readonly DEFAULT_TIMEOUT = Number(process.env.DEFAULT_TIMEOUT) || 30000;
  static readonly NAVIGATION_TIMEOUT = Number(process.env.NAVIGATION_TIMEOUT) || 30000;
  static readonly EXPECT_TIMEOUT = Number(process.env.EXPECT_TIMEOUT) || 15000;

  // Autocomplete typing simulation
  static readonly AUTOCOMPLETE_TYPING_DELAY = 300;

  // Data files
  static readonly SEARCH_DATA_JSON_FILE = './data/search-data.json';
}
