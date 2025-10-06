import { test, expect } from "@playwright/test";
import { BasePage } from "../pages/base.page";

test(
  'No results return for the searching "playwright"',
  { tag: "@002" },
  async ({ page }) => {
    const basePage = new BasePage(page);

    await basePage.goto();

    await basePage.searchFor("playwright");

    await expect(basePage.searchResults).toContainText("Results (0)");
  }
);
