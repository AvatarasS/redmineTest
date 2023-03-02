import { expect, Locator, Page } from '@playwright/test';

export class RegisterPage {
    userLogin: Locator;
    userPassword: Locator;
    userPasswordAgain: Locator;
    userFirstName: Locator;
    userLastName: Locator;
    userMail: Locator;
    submitButton: Locator;
    errorExplanation: Locator;
    constructor(page: Page) {
        this.userLogin = page.locator('#user_login');
        this.userPassword = page.locator('#user_password');
        this.userPasswordAgain = page.locator('#user_password_confirmation');
        this.userFirstName = page.locator('#user_firstname');
        this.userLastName = page.locator('#user_firstname');
        this.userMail = page.locator('#user_mail');
        this.submitButton = page.locator('//*[@id="new_user"]/input');
        this.errorExplanation = page.locator('#errorExplanation');}

    async fillLoginField(login) {
        await this.userLogin.fill(login);
        expect(this.userLogin).toHaveValue(login);}

    async fillPasswordField(password) {
        await this.userPassword.fill(password);
        expect(this.userPassword).toHaveValue(password);
        await this.userPasswordAgain.fill(password);
        expect(this.userPasswordAgain).toHaveValue(password);}
    
    async fillFirstnameField(firstname) {
        await this.userFirstName.fill(firstname);
        expect(this.userFirstName).toHaveValue(firstname);}

    async fillLastnameField(lastname) {
        await this.userLastName.fill(lastname);
        expect(this.userLastName).toHaveValue(lastname);}
    
    async fillMailField(mail) {
        await this.userMail.fill(mail);
        expect(this.userMail).toHaveValue(mail);}

    async clickSubmitButton(){
        await this.submitButton.click();}
}