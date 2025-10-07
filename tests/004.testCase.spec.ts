import { test, expect } from "@playwright/test";
import { BasePage } from "../pages/base.page";
import { DownloadPage } from "../pages/download.page";
import { downloadUrl, errorPage } from "../helpers/constants";

test.describe("Roadmap page", () => {
  test(
    "Verify Roadmap page is not found and go back to Download page", async ({ page }) => {
      const basePage = new BasePage(page);
      const downloadPage = new DownloadPage(page);

      await basePage.goto();
      await basePage.goToDownloadPage();

      await downloadPage.goToRoadmapPage();
      await expect(downloadPage.pageNotFound).toBeVisible();
      await expect(downloadPage.notFoundText).toContainText(errorPage);
      await downloadPage.goToBackPage();
      await expect(page).toHaveURL(downloadUrl);
    }
  );
});
