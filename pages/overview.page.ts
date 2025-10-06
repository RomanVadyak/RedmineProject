import { Locator, Page } from "@playwright/test";

export class OverviewPage {
  public page: Page;
  public overviewTitle: Locator;
  public overviewSubtitle: Locator;
  public administrator: Locator;
  public adminName: Locator;

  constructor(page: Page) {
    this.overviewTitle = page.locator("#content > h2");
    this.overviewSubtitle = page.locator(
      "#content > div.splitcontent > div.splitcontentleft > div.wiki > p"
    );
    this.administrator = page.locator(
      "#content > div.splitcontent > div.splitcontentright > div.members.box > p:nth-child(2) > a"
    );
    this.adminName = page.locator("#content > h2");
  }

  async goToAdministratorsPage() {
    await this.administrator.click();
  }
}
