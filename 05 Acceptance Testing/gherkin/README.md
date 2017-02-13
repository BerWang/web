
# BDD Acceptance testing Website

Make sure the latest Chrome browser is installed.

Make sure the latest version of NodeJS is installed.
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
source ~/.bashrc
nvm list-remote
nvm install 7.5.0
```
Navigate to this directory and install required packages then run cucumber:
```
npm install cucumber selenium-webdriver chromedriver
./node_modules/.bin/cucumber-js
  Feature: Example feature

      As a user of Cucumber.js
      I want to have documentation on Cucumber
      So that I can concentrate on building awesome applications

    Scenario: Reading documentation
    ✔ Given I am on the Cucumber.js GitHub repository
    ✔ When I click on "CLI"
    ✔ Then I should see "Running specific features"

  1 scenario (1 passed)
  3 steps (3 passed)
  0m03.953s
```
