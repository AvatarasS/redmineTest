import { expect, Locator, Page } from '@playwright/test';

export class RepositoryPage {
    page: Page;
    statisticIcon: Locator;
    statisticImage: Locator;
    constructor(page: Page) {
        this.page = page;
        this.statisticIcon = page.locator('.icon-stats');
        this.statisticImage = page.locator('//*[@id="content"]/p[1]/embed');
    }

    async statisticClick() {
        await this.statisticIcon.click();
        expect(this.page).toHaveURL('https://www.redmine.org/projects/redmine/repository/statistics');
    }
}