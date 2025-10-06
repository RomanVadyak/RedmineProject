import { test, expect } from "@playwright/test";
import { BasePage } from "../pages/base.page";
import { DownloadPage } from "../pages/download.page";

test(
  "Verify Roadmap page is not found and go back to Download page",
  { tag: "@004" },
  async ({ page }) => {
    const basePage = new BasePage(page);
    const downloadPage = new DownloadPage(page);

    await basePage.goto();
    await basePage.goToDownloadPage();

    await downloadPage.goToRoadmapPage();
    await expect(downloadPage.pageNotFound).toBeVisible();
    await expect(downloadPage.notFoundText).toContainText(
      "The page you were trying to access doesn't exist or has been removed."
    );
    await downloadPage.goToBackPage();
    await expect(page).toHaveURL(/projects\/redmine\/wiki\/Download/);
  }
);
