# Automated Testing for Redmine.org using Playwright and TypeScript

This project is an automated testing suite for the website 'https://www.redmine.org/', written in Playwright using TypeScript. The tests cover various features of the website such as login functionality, registration, search, and more.

### Project Setup

To run the automated tests in this project, follow these steps:
1. Clone this repository to your local machine.
2. Run 'npm test' to run the tests.

### Test Cases

The following test cases are included in this project:
1. Verify login functionality: Tests the ability to log in to the Redmine.org website with valid credentials.
2. Trying to signup with Cyrillic letters: Tests the ability to sign up with Cyrillic letters.
3. Verify search functionality: Tests the search functionality of the website by performing a deep search and verifying the results.
4. Verify roadmap sorting: Tests the ability to sort the roadmap on the website.
5. Take screenshot of graph: Takes a screenshot of a graph on the website.

### Results

The test results are automatically generated and can be found in the 'allure-reports' directory. To view the results, run 'npm run allure:generate'.

### Notes

The test cases can be found in the 'tests' directory.
The page object models can be found in the 'pageobjectmodel' directory.
To run the tests with tracing enabled, use the following command: 'npx playwright test --trace on'. This will provide more detailed information during the test run, which can be helpful for debugging purposes.