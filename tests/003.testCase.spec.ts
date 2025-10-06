import { test, expect } from "@playwright/test";
import { BasePage } from "../pages/base.page";
import { LoginPage } from "../pages/login.page";
import { faker } from "@faker-js/faker";

test(
  "Login attempt with unregistered credentials shows error",
  { tag: "@003" },
  async ({ page }) => {
    const basePage = new BasePage(page);
    const loginPage = new LoginPage(page);

    await basePage.goto();
    await basePage.goToLoginPage();

    const username = faker.internet.username();
    const password = faker.internet.password();

    await loginPage.fillLoginForm(username, password);
    await loginPage.autoLoginCheck(true);
    await loginPage.clickLoginBtn();

    await expect(loginPage.errorMsg).toBeAttached();
    await expect(loginPage.errorMsg).toContainText("Invalid user or password");
  }
);
