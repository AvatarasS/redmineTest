import { expect, Locator, Page } from '@playwright/test';

export class MainPage {
    page: Page;
    loginPageButton: Locator;
    registerPageButton: Locator;
    searchField: Locator;
    roadmap: Locator;
    repository: Locator;
    constructor(page: Page){
        this.page = page;
        this.loginPageButton = page.locator('.login');
        this.registerPageButton = page.locator('.register');
        this.searchField = page.locator('#q');
        this.roadmap = page.locator('.roadmap');
        this.repository = page.locator('.repository');
    }
    async visit(){
        await this.page.goto('https://www.redmine.org/');
        expect(this.page).toHaveURL('https://www.redmine.org/');
    }
    async getLoginPage(){
        await this.loginPageButton.click();
        expect(this.page).toHaveURL('https://www.redmine.org/login');
    }
    async getRegistrationPage(){
        await this.registerPageButton.click();
        expect(this.page).toHaveURL('https://www.redmine.org/account/register');
    }
    async enterToSearchField(search){
        await this.searchField.fill(search);
        expect(this.searchField).toHaveValue(search);
    }
    async pushEnterButton(){
        await this.page.keyboard.press('Enter');
        await expect(this.page).toHaveURL(new RegExp('^https://www.redmine.org/projects/redmine/search'));
    }
    async getRoadmapPage(){
        await this.roadmap.click();
        expect(this.page).toHaveURL('https://www.redmine.org/projects/redmine/roadmap');
    }
    async getRepositoryPage(){
        await this.repository.click();
        expect(this.page).toHaveURL('https://www.redmine.org/projects/redmine/repository');
    }
}