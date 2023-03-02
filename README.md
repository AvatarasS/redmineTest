# Automated Testing for Redmine.org using Playwright and TypeScript

This project is an automated testing suite for the website (https://www.redmine.org/), written in Playwright using TypeScript. The tests cover various features of the website such as login functionality, registration, search, and more.

### Project Setup

To run the automated tests in this project, follow these steps:
1. Clone this repository to your local machine.
    - Open the terminal or command prompt on your machine.
    - Navigate to the directory where you want to download the repository.
    - Run the following command: 
    ```git clone https://github.com/AvatarasS/redmineTest.git```.
    - Once complete, the repository will be downloaded to the directory you specified.
2. Navigate to the project directory:
    ```cd repository-name```
3. Install all packages and dependencies using npm:
    ```npm install```
4. Run ```npm test``` to run the tests.

### Test Cases

The following test cases are included in this project:
1. ID#001 To check response of logining into a not activated, existing account with valid credentials.
2. ID#002 To verify ErrorResponse by creating a new customer's account with cyrillic letters.
3. ID#003 To verify if search filters are functional and display results grouped by category.
4. ID#004 To verify that the tag sorting functionality in the roadmap works correctly and displays the selected tag.
5. ID#005 To verify if the graph on '/repository/statistics' path is displayed correctly.

### Results

The test results are automatically generated and can be found in the 'allure-reports' directory. To view the results, run 'npm run allure:generate'.

### Notes

The test cases can be found in the `tests' directory.
The page object models can be found in the 'pageobjectmodel' directory.
To run the tests with tracing enabled, use the following command: ```npx playwright test --trace on```. This will provide more detailed information during the test run, which can be helpful for debugging purposes.