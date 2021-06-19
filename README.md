# UI Test framework (Cucumber + Puppeteer)

### How to run the testsuite
* install node dependencies using `yarn install` command
* execute the command `npm test` to run the testsuite
* Refer the `.mvnrc` to know the version
* Refer the `.yarnrc` to set the npm registry

### The browser product can be updated in the properties.json, current code base supports both firefox and chrome

### Install firefox browser
#### For Windows Operating System
`set PUPPETEER_PRODUCT=firefox`
`yarn install`
#### For Mac Operating System
`export PUPPETEER_PRODUCT=firefox`
`yarn install`

#### Cucumber Default timeout
* Cucumber default time out setting not working, when it is called from the hooks.
* Refer the issue here: https://github.com/cucumber/cucumber-js/issues/1610
