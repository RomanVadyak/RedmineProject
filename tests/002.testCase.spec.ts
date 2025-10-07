import { test, expect } from "@playwright/test";
import { BasePage } from "../pages/base.page";
import { searchWord, noResults } from "../helpers/constants";

test.describe("Searching for playwright", () => {
  test(
    'No results return for the searching "playwright"', async ({ page }) => {
      const basePage = new BasePage(page);

      await basePage.goto();

      await basePage.searchFor(searchWord);

      await expect(basePage.searchResults).toContainText(noResults);
    }
  );
});
