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
    }
    async getLoginPage(){
        await this.loginPageButton.click();
    }
    async getRegistrationPage(){
        await this.registerPageButton.click();
    }
    async getSearch(search){
        await this.searchField.fill(search);
        await this.page.keyboard.press('Enter');
    }
    async getRoadmapPage(){
        await this.roadmap.click();
    }
    async getRepositoryPage(){
        await this.repository.click();
    }




}