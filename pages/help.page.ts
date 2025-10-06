import { Locator, Page } from "@playwright/test";

export class HelpPage {
  public page: Page;
  public helpTitle: Locator;
  public helpSubtitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.helpTitle = page.locator("#content > h2");
    this.helpSubtitle = page.locator(".subtitle");
  }
}
