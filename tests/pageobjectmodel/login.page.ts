import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
    page: Page;
    usernameField: Locator;
    passwordField: Locator;
    submitButton: Locator;
    flasError: Locator;
    constructor(page: Page){
        this.page = page;
        this.usernameField = page.locator('input#username');
        this.passwordField = page.locator('input#password');
        this.submitButton = page.locator('input[type=submit]');
        this.flasError = page.locator('//*[@id="flash_error"]');
    }
    async fillLoginFields(login, password){
        await this.usernameField.fill(login);
        expect(this.usernameField).toHaveValue(login);
        await this.passwordField.fill(password)
        expect(this.passwordField).toHaveValue(password);
    }
    async clicksubmitButton(){
        await this.submitButton.click();
    }
}