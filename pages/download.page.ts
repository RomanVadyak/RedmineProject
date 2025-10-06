import { Locator, Page } from "@playwright/test";

export class DownloadPage {
  public page: Page;
  public roadmapBtn: Locator;
  public pageNotFound: Locator;
  public notFoundText: Locator;
  public goBackBtn: Locator;

  constructor(page: Page) {
    this.roadmapBtn = page.locator(
      "#content > div.wiki.wiki-page > ul:nth-child(14) > li:nth-child(1) > a"
    );
    this.pageNotFound = page.locator("body > h1");
    this.notFoundText = page.locator("body > p:nth-child(2)");
    this.goBackBtn = page.locator("body > p:nth-child(3) > a");
  }

  async goToRoadmapPage() {
    await this.roadmapBtn.click();
  }
  async goToBackPage() {
    await this.goBackBtn.click();
  }
}
