import { expect, Locator, Page } from '@playwright/test';

export class RoadmapPage {
    page: Page;
    submitButton: Locator;
    constructor(page: Page) {
        this.page = page;
        this.submitButton = page.locator('.button-small');
    }

    async turnOffNotUsedCheckbox() {
        let trackersIdCheckbox = await this.page.locator('//*[@id="sidebar"]/form/ul[1]/li//input[not(@value="1")]').all();
        for (let element of trackersIdCheckbox) {
            await element.click();
            expect(element).not.toBeChecked();
        }
    }

    async clickSubmitButton() {
        await this.submitButton.click();
    }

    async checkIssueContaining() {
        let issueTrackers = await this.page.locator('//*[@id="roadmap"]/form[1]//tbody/tr//a').all();
        for (let element of issueTrackers) {
            expect(await element.innerText()).toContain('Defect');
        }
    }
}