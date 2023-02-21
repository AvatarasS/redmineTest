import { expect, Locator, Page } from '@playwright/test';

export class SearchPage {
    page: Page;
    issue0: Locator;
    issue1: Locator;
    issue2: Locator;
    issue3: Locator;
    issue4: Locator;
    submitButton: Locator;
    resultsCount: any;
    constructor(page: Page){
        this.page = page;
        this.issue0 = page.locator('//*[@id="search-types"]/label[1]/input');
        this.issue1 = page.locator('//*[@id="search-types"]/label[2]/input');
        this.issue2 = page.locator('//*[@id="search-types"]/label[3]/input');
        this.issue3 = page.locator('//*[@id="search-types"]/label[5]/input');
        this.issue4 = page.locator('//*[@id="search-types"]/label[6]/input');
        this.submitButton = page.locator('//*[@id="search-form"]/p[3]/input');


        
    }

    async deepSearch(){
        await this.issue0.click();
        await this.issue1.click();
        await this.issue2.click();
        await this.issue3.click();
        await this.issue4.click();
        await this.submitButton.click();
        this.resultsCount = await this.page.$$('//*[@id="search-results-counts"]//a');
    }

    async getResult(){
        for (const element of this.resultsCount){
            await element.isEnabled;
            console.log(await element.innerText());
        }
    }
}