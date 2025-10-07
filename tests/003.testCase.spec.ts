import { test, expect } from "@playwright/test";
import { BasePage } from "../pages/base.page";
import { LoginPage } from "../pages/login.page";
import { faker } from "@faker-js/faker";
import { wrongLogin } from "../helpers/constants";

test.describe("Login", () => {
  test("Login attempt with unregistered credentials shows error", async ({ page }) => {
    const basePage = new BasePage(page);
    const loginPage = new LoginPage(page);

    await basePage.goto();
    await basePage.goToLoginPage();

    const username = faker.internet.username();
    const password = faker.internet.password();

    await loginPage.fillLoginForm(username, password);
    await loginPage.autoLoginCheck(true);
    await loginPage.clickLoginBtn();

    await expect(loginPage.errorMsg).toBeVisible({ timeout: 10000 });
    await expect(loginPage.errorMsg).toContainText(wrongLogin);
  });
});
