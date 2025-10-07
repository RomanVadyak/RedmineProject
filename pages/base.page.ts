import { Locator, Page } from "@playwright/test";

export class BasePage {
  public page: Page;
  public forumBtn: Locator;
  public searchInput: Locator;
  public searchResults: Locator;
  public loginBtn: Locator;
  public downloadBtn: Locator;
  public projectsBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.forumBtn = page.locator(".boards");
    this.searchInput = page.locator("#q");
    this.searchResults = page.locator("#content h3");
    this.loginBtn = page.locator(".login");
    this.downloadBtn = page.locator(".download");
    this.projectsBtn = page.locator("#top-menu > ul > li:nth-child(2) > a");
  }

  async goto() {
    await this.page.goto("/");
  }

  async openForumPage() {
    await this.forumBtn.click();
  }

  async searchFor(word: string) {
    await this.searchInput.fill(word);
    await this.searchInput.press("Enter");
  }

  async goToLoginPage() {
    await this.loginBtn.click();
  }

  async goToDownloadPage() {
    await this.downloadBtn.click();
  }

  async goToProjectsPage() {
    await this.projectsBtn.click();
  }
}
