import { Locator, Page } from "@playwright/test";

export class LoginPage {
  public page: Page;
  public usernameInput: Locator;
  public passwordInput: Locator;
  public stayInSystem: Locator;
  public logInBtn: Locator;
  public errorMsg: Locator;

  constructor(page: Page) {
    this.usernameInput = page.locator("#username");
    this.passwordInput = page.locator("#password");
    this.stayInSystem = page.locator("#autologin");
    this.logInBtn = page.locator("#login-submit");
    this.errorMsg = page.locator("#flash_error");
  }
  async fillLoginForm(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
  }

  async autoLoginCheck(value: boolean) {
    this.stayInSystem.setChecked(value);
  }
  
  async clickLoginBtn() {
    this.logInBtn.click();
  }
}
