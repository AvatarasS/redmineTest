import { test, expect } from "@playwright/test";
import { MainPage } from "./pageobjectmodel/main.page";
import { LoginPage } from "./pageobjectmodel/login.page";
import { RegisterPage } from "./pageobjectmodel/register.page";
import { SearchPage } from "./pageobjectmodel/search.page";
import { RoadmapPage } from "./pageobjectmodel/roadmap.page";
import { RepositoryPage } from "./pageobjectmodel/repository.page";

test.beforeEach(async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.visit();
});

test("ID#001 To check response of logining into a not activated, existing account with valid credentials", async ({ page }) => {
    const mainPage = new MainPage(page);
    const loginPage = new LoginPage(page);
    await mainPage.getLoginPage();
    await loginPage.fillLoginFields('Memas', 'tQs5_5LM_sV!9*g');
    await loginPage.clicksubmitButton();
    expect(loginPage.flasError).toContainText("You haven't activated your account yet.");
    console.log('The logining process should be finished unsuccessfully, the corresponding information message should be displayed to the user')
});
test("ID#002 To try signup with cyrillic letters", async({ page }) => {
    const mainPage = new MainPage(page);
    const registerPage = new RegisterPage(page);
    await mainPage.getRegistrationPage();
    await registerPage.fillCredentialFields('Мемас', 'tQs5_5LM_sV!9*g','Рандом', 'Рандом', 'Рандом@gmail.com');
    await registerPage.clickSubmitButton();
    expect(registerPage.errorExplanation).toBeEnabled();
    console.log('The registration process should be finished unsuccessfully, the corresponding information message should be displayed to the user')
});

test("ID#003 To verify if search filters are functional and display results grouped by category.", async ({ page }) => {
    const mainPage = new MainPage(page);
    const searchPage = new SearchPage(page);
    await mainPage.getSearch('test');
    await searchPage.issueCheckboxChecker();
    await searchPage.clicksubmitButton();
    await searchPage.getResult()
    console.log('The search filters work correctly and display the number of search results found.');

});
test("ID#004 To verify that the tag sorting functionality in the roadmap works correctly and displays the selected tag.", async ({ page }) => {
    const mainPage = new MainPage(page);
    const roadmapPage = new RoadmapPage(page);
    await mainPage.getRoadmapPage();
    await roadmapPage.turnOffNotUsedCheckbox();
    await roadmapPage.checkContaining();
    console.log('Sorting works correctly and displays only the selected option.');
});
test("ID#005 To verify if the graph is displayed correctly and take a screenshot of it.", async ({ page }) => {
    const mainPage = new MainPage(page);
    const repositoryPage = new RepositoryPage(page);
    await mainPage.getRepositoryPage();
    await repositoryPage.statisticClick();
    await repositoryPage.statisticImageSave();
    console.log('The screenshot was saved in the screens/ folder');
});