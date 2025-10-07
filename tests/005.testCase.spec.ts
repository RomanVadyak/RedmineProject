import { test, expect } from "@playwright/test";
import { BasePage } from "../pages/base.page";
import { ProjectsPage } from "../pages/projects.page";
import { OverviewPage } from "../pages/overview.page";
import { redmineSubtitle, adminLang } from "../helpers/constants";

test.describe("Redmine link to Overview page", () => {
  test("Verify Redmine link on Projects page redirects to Overview", async ({ page }) => {
    const basePage = new BasePage(page);
    const projectPage = new ProjectsPage(page);
    const overviewPage = new OverviewPage(page);

    await basePage.goto();
    await basePage.goToProjectsPage();

    await projectPage.goToRedminePage();
    await expect(overviewPage.overviewTitle).toBeVisible();
    await expect(overviewPage.overviewSubtitle).toContainText(redmineSubtitle);
    await overviewPage.goToAdministratorsPage();
    expect(overviewPage.adminName).toContainText(adminLang);
  });
});
