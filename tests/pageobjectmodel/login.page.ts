import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
    usernameField: Locator;
    passwordField: Locator;
    submitButton: Locator;
    flashError: Locator;
    constructor(page: Page) {
        this.usernameField = page.locator('input#username');
        this.passwordField = page.locator('input#password');
        this.submitButton = page.locator('input[type=submit]');
        this.flashError = page.locator('//*[@id="flash_error"]');
    }

    async fillLoginField(login) {
        await this.usernameField.fill(login);
        expect(this.usernameField).toHaveValue(login);
    }

    async fillPasswordField(password) {
        await this.passwordField.fill(password)
        expect(this.passwordField).toHaveValue(password);
    }

    async clickSubmitButton() {
        await this.submitButton.click();
    }
}