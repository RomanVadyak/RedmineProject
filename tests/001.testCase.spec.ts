import { test, expect } from "@playwright/test";
import { BasePage } from "../pages/base.page";
import { ForumPage } from "../pages/forum.page";
import { HelpPage } from "../pages/help.page";

test(
  "Help title is visible and subtitle have correct text",
  { tag: "@001" },
  async ({ page }) => {
    const basePage = new BasePage(page);
    const forumPage = new ForumPage(page);
    const helpPage = new HelpPage(page);

    await basePage.goto();

    await basePage.openForumPage();
    await forumPage.openHelpPage();

    await expect(helpPage.helpTitle).toBeVisible();
    await expect(helpPage.helpSubtitle).toContainText("Get public help");
  }
);
