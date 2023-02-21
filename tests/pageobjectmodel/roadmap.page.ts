import { expect, Locator, Page } from '@playwright/test';

export class RoadmapPage {
    page: Page;
    trackersIdCheckbox: any;
    submitButton: Locator;
    issueTrackers: any;
    constructor(page: Page){
        this.page = page;
        //this.trackersIdCheckbox = page.$$('//*[@id="sidebar"]/form/ul[1]/li//input[not(@value="1")]');
        this.submitButton = page.locator('.button-small');
        //this.issueTrackers = page.$$('//*[@id="roadmap"]/form[1]//tbody/tr//a');
    }

    async turnOffNotUsedCheckbox(){
        for (const element of await this.page.$$('//*[@id="sidebar"]/form/ul[1]/li//input[not(@value="1")]')){
            await element.click();
        }
        await this.submitButton.click();
    }
    async checkContaining(){
        for (const element of await this.page.$$('//*[@id="roadmap"]/form[1]//tbody/tr//a')){
            await expect(await element.innerText()).toContain('Defect');
        }
    }
}