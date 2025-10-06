import { test, expect } from "@playwright/test";
import { BasePage } from "../pages/base.page";
import { ProjectsPage } from "../pages/projects.page";
import { OverviewPage } from "../pages/overview.page";

test("Verify Redmine link on Projects page redirects to Overview",{ tag: "@005" }, async ({
  page,
}) => {
  const basePage = new BasePage(page);
  const projectPage = new ProjectsPage(page);
  const overviewPage = new OverviewPage(page);

  await basePage.goto();
  await basePage.goToProjectsPage();

  await projectPage.goToRedminePage();
  await expect(overviewPage.overviewTitle).toBeVisible();
  await expect(overviewPage.overviewSubtitle).toContainText(
    "Redmine is a flexible project management web application written using Ruby on Rails framework."
  );
  await overviewPage.goToAdministratorsPage();
  expect(overviewPage.adminName).toContainText("Jean-Philippe Lang");
});
