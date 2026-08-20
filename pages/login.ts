import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly email: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly validationSummary: Locator;

  constructor(page: Page) {
    this.page = page;
    this.email = page.locator('#Email');
    this.password = page.locator('#Password');
    this.loginButton = page.locator('input.login-button');
    this.validationSummary = page.locator('.validation-summary-errors');
  }

  async login(email: string, password: string) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.loginButton.click();
  }

  async getValidationError(): Promise<string> {
    return (await this.validationSummary.textContent())?.trim() ?? '';
  }
}
