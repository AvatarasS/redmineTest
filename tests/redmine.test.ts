import { test, expect } from "@playwright/test";
import { MainPage } from "./pageobjectmodel/main.page";
import { LoginPage } from "./pageobjectmodel/login.page";
import { RegisterPage } from "./pageobjectmodel/register.page";
import { SearchPage } from "./pageobjectmodel/search.page";
import { RoadmapPage } from "./pageobjectmodel/roadmap.page";
import { RepositoryPage } from "./pageobjectmodel/repository.page";

let mainPage: MainPage;
let loginPage: LoginPage;
let registerPage: RegisterPage;
let searchPage: SearchPage;
let roadmapPage: RoadmapPage;
let repositoryPage: RepositoryPage;

test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    loginPage = new LoginPage(page);
    registerPage = new RegisterPage(page);
    searchPage = new SearchPage(page);
    roadmapPage = new RoadmapPage(page);
    repositoryPage = new RepositoryPage(page);
    await mainPage.visit();
});

test("ID#001 To check response of logining into a not activated, existing account with valid credentials", async ({}) => {
    await mainPage.getLoginPage();
    await loginPage.fillLoginField('Memas');
    await loginPage.fillPasswordField('tQs5_5LM_sV!9*g')
    await loginPage.clickSubmitButton();
    expect(loginPage.flashError).toContainText("You haven't activated your account yet.");
});

test("ID#002 To verify ErrorResponse by creating a new customer's account with cyrillic letters", async({}) => {
    await mainPage.getRegistrationPage();
    await registerPage.fillLoginField('Мемас');
    await registerPage.fillPasswordField('tQs5_5LM_sV!9*g');
    await registerPage.fillFirstnameField('Рандом');
    await registerPage.fillLastnameField('Рандом');
    await registerPage.fillMailField('Рандом@gmail.com');
    await registerPage.clickSubmitButton();
    expect(registerPage.errorExplanation).toBeEnabled();
});

test("ID#003 To verify if search filters are functional and display results grouped by category.", async ({}) => {
    await mainPage.enterToSearchField('test');
    await mainPage.pushEnterButton();
    await searchPage.issueCheckboxChecker();
    await searchPage.clicksubmitButton();
    await searchPage.checkResult();
});

test("ID#004 To verify that the tag sorting functionality in the roadmap works correctly and displays the selected tag.", async ({}) => {
    await mainPage.getRoadmapPage();
    await roadmapPage.turnOffNotUsedCheckbox();
    await roadmapPage.clickSubmitButton();
    await roadmapPage.checkIssueContaining();
});

test("ID#005 To verify if the graph on '/repository/statistics' path is displayed correctly.", async ({}) => {
    await mainPage.getRepositoryPage();
    await repositoryPage.statisticClick();
    expect(repositoryPage.statisticImage).toBeVisible();
});