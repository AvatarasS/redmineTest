import { Locator, Page } from '@playwright/test';

export class RepositoryPage {
    page: Page;
    statisticIcon: Locator;
    statisticImage: Locator;
    
    constructor(page: Page){
        this.page = page;
        this.statisticIcon = page.locator('.icon-stats');
        this.statisticImage = page.locator('//*[@id="content"]/p[1]/embed');
      
    }

    async statisticClick(){
        await this.statisticIcon.click();
    }
    async statisticImageSave(){
        await this.statisticImage.screenshot({ path: 'screens/screen.png' });
    }
 
}