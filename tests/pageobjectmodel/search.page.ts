import { expect, Locator, Page } from '@playwright/test';

export class SearchPage {
    page: Page;
    submitButton: Locator;
    constructor(page: Page) {
        this.page = page;
        this.submitButton = page.locator('//*[@id="search-form"]/p[3]/input');}

    async issueCheckboxChecker() {
        const issueCheckbox = await this.page.locator('//*[@id="search-types"]//input[not(@checked="checked")]').all();
        for (let element of issueCheckbox) {
            await element.click();
            expect(element).toBeChecked();}}

    async clicksubmitButton() {
        await this.submitButton.click();}

    async checkResult() {
        let resultsCount = await this.page.locator('//*[@id="search-results-counts"]//a').all();
        for (let element of resultsCount) {
            expect(element).toBeVisible();}}
}
