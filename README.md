Cypress-E2E

Automation Framework using below components:

Page Object Model (Page Class + Test Files)

Commands.js

Fixtures

Mochawesome HTMl Report

Running using headless mode

1) Ensure you have the following installed for the best user experience:

NPM - version 8+
Node - version 16+
(Note: Node installation from the provided link also installs NPM.)

To confirm you have the correct versions, type these commands into your terminal:

npm --version
node --version

2)Clone: 
Open the project in your favorite editor.
Launch a Terminal in your editor (usually found in the bottom right corner).
Install necessary dependencies by running:
npm install --save-dev
Verify your Cypress installation by launching the Test Runner:
npx cypress open
If all went well, the Test Runner should appear. Here you can select the feature to execute and the browser to use.

In the test runner, select the feature to execute and the desired browser from the dropdown and visualize the test execution

Running Tests 🧪
To run the tests via CLI on a headless mode

npx cypress run
