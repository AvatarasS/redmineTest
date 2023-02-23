import { expect, Locator, Page } from '@playwright/test';

export class RegisterPage {
    page: Page;
    userLogin: Locator;
    userPassword: Locator;
    userPasswordAgain: Locator;
    userFirstName: Locator;
    userLastName: Locator;
    userMail: Locator;
    submitButton: Locator;
    errorExplanation: Locator;
    constructor(page: Page) {
        this.page = page;
        this.userLogin = page.locator('#user_login');
        this.userPassword = page.locator('#user_password');
        this.userPasswordAgain = page.locator('#user_password_confirmation');
        this.userFirstName = page.locator('#user_firstname');
        this.userLastName = page.locator('#user_firstname');
        this.userMail = page.locator('#user_mail');
        this.submitButton = page.locator('//*[@id="new_user"]/input');
        this.errorExplanation = page.locator('#errorExplanation');
    }
    async fillCredentialFields(login, password, firstname, lastname, mail) {
        await this.userLogin.fill(login);
        await this.userPassword.fill(password);
        await this.userPasswordAgain.fill(password);
        await this.userFirstName.fill(firstname);
        await this.userLastName.fill(lastname);
        await this.userMail.fill(mail);
    }
    async clickSubmitButton(){
        await this.submitButton.click();
    }
}