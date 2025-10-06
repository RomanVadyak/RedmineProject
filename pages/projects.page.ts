import { Locator, Page } from "@playwright/test";

export class ProjectsPage {
  public page: Page;
  public redmineBtn: Locator;

  constructor(page: Page) {
    this.redmineBtn = page.locator("#projects-index > ul > li > div > a");
  }

  async goToRedminePage() {
    await this.redmineBtn.click();
  }
}
