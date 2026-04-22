import { test as baseTest, type Page } from "@playwright/test";
import { SearchPage } from "./search-page";
import { CommonPage } from "./common-page";

export const test = baseTest.extend<{
  searchPage: SearchPage;
  commonPage: CommonPage;
}>({
  searchPage: async ({ page, context }, use) => {
    const instance = new SearchPage(page);
    context.on("page", (newPage: Page) => {
      instance.setPage(newPage);
    });
    await use(instance);
  },

  commonPage: async ({ page, context }, use) => {
    const instance = new CommonPage(page);
    context.on("page", (newPage: Page) => {
      instance.setPage(newPage);
    });
    await use(instance);
  },
});
