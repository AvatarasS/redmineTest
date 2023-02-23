import { test, expect } from "@playwright/test";
import {MainPage} from "./pageobjectmodel/main.page";
import { LoginPage } from "./pageobjectmodel/login.page";
import { RegisterPage } from "./pageobjectmodel/register.page";
import { SearchPage } from "./pageobjectmodel/search.page";
import { RoadmapPage } from "./pageobjectmodel/roadmap.page";
import { RepositoryPage } from "./pageobjectmodel/repository.page";

/*test.beforeEach(async ({ page }) => {
    await page.goto('https://www.redmine.org/');
});*/

test("Verify login functionality", async ({ page }) => {
    const mainPage = new MainPage(page);
    const loginPage = new LoginPage(page);
    await mainPage.getLoginPage();
    await loginPage.fillLoginFields('Memas', 'tQs5_5LM_sV!9*g');
    await loginPage.submitButton.click();
    expect(loginPage.flasError).toContainText("You haven't activated your account yet.");
});
test('Trying to signup with Cyrillic letters', async({ page }) => {
    const mainPage = new MainPage(page);
    const registerPage = new RegisterPage(page);
    await mainPage.getRegistrationPage();
    await registerPage.fillCredentialFields('Мемас', 'tQs5_5LM_sV!9*g','Рандом', 'Рандом', 'Рандом@gmail.com');
    await registerPage.clickSubmitButton();
    expect(registerPage.errorExplanation).toBeEnabled();
});

test("Verify search functionality", async ({ page }) => {
    const mainPage = new MainPage(page);
    const searchPage = new SearchPage(page);
    await mainPage.getSearch('test');
    await searchPage.deepSearch();
    await
    await searchPage.getResult()

});
test("Verify roadmap sorting", async ({ page }) => {
    const mainPage = new MainPage(page);
    const roadmapPage = new RoadmapPage(page);
    await mainPage.getRoadmapPage();
    await roadmapPage.turnOffNotUsedCheckbox();
    await roadmapPage.checkContaining();
});
test("Take screenshot of graph", async ({ page }) => {
    const mainPage = new MainPage(page);
    const repositoryPage = new RepositoryPage(page);
    await mainPage.getRepositoryPage();
    await repositoryPage.statisticClick();
    await repositoryPage.statisticImageSave();
});