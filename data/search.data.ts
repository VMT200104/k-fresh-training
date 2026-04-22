import { SearchTestData } from '../models/search-data.model';
import { Constants } from '../utilities/constants';

export const searchData = {
    validKeyword: {
        keyword: Constants.SEARCH_VALID_KEYWORD,
        expectResults: true
    } as SearchTestData,
    invalidKeyword: {
        keyword: Constants.SEARCH_INVALID_KEYWORD,
        expectResults: false,
        noProductMessage: Constants.MSG_NO_PRODUCT
    } as SearchTestData,
    minKeyword: {
        keyword: Constants.SEARCH_MIN_KEYWORD,
        expectResults: true
    } as SearchTestData,
    maxKeyword: {
        keyword: 'a'.repeat(Constants.SEARCH_MAX_LENGTH),
        expectResults: false,
        noProductMessage: Constants.MSG_NO_PRODUCT
    } as SearchTestData,
    suggestionData: {
        keyword: Constants.SEARCH_AUTOCOMPLETE_KEYWORD,
        typingDelay: Constants.AUTOCOMPLETE_TYPING_DELAY,
        dropdownTimeout: 15000,
        expectedSuggestionText: Constants.SEARCH_AUTOCOMPLETE_KEYWORD
    }
};
