import { Locator, Page } from "@playwright/test";

export class ForumPage {
  public page: Page;
  public helpBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.helpBtn = page.locator(
      "#content > table > tbody > tr:nth-child(2) > td.name > a"
    );
  }

  async openHelpPage() {
    await this.helpBtn.click();
  }
}
