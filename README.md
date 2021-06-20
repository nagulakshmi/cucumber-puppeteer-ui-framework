# UI Test framework (Cucumber + Puppeteer)

### How to run the testsuite?

* Refer the `.nvmrc` to know the version
* Refer the `.yarnrc` to set the npm registry
* install node dependencies using `yarn install` command
* execute the command `npm test` to run the testsuite in local
* execute the command `npm testDev & npm testStage` to run the testsuite of other environments
* if the yarn package manager unavailable, npm can be used with the same commands

###Features
* Test suite captures screenshot under the screenshots folder
* HTML test report generated which helps users to read information easily, it also helps to understand the time consumed between the steps
* Test suite runs in both Firefox and Chromium browsers.
* Uses all latest node version & npm modules
* properties.json used to adjust each environment, headless mode and screen settings.
* info & error logs added into a file for the user reference

By default, the test suite runs using Chromium browser. The browser product can be updated in the properties.json, current code base supports both firefox and chrome
The below instruction helps users to switch between the browsers.

### How to switch between the browsers?

#### For Windows Operating System - firefox
`set PUPPETEER_PRODUCT=firefox&&yarn add puppeteer&&yarn install`
#### For Mac Operating System - firefox
`export PUPPETEER_PRODUCT=firefox&&yarn add puppeteer&&yarn install`
#### For Windows Operating System - chrome
`set PUPPETEER_PRODUCT=chrome&&yarn add puppeteer&&yarn install`
#### For Mac Operating System - chrome
`export PUPPETEER_PRODUCT=chrome&&yarn add puppeteer&&yarn install`

#### Cucumber Default timeout
* Cucumber default time out setting not working, when it is called from the hooks.
* Refer the issue here: https://github.com/cucumber/cucumber-js/issues/1610
