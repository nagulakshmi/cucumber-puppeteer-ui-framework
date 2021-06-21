const {
    BeforeAll,
    AfterAll,
    Before,
    After,
    setDefaultTimeout,
    setWorldConstructor,
    setDefinitionFunctionWrapper
} = require('@cucumber/cucumber')

const appConstants = require('../support/constants')
const utils = require('../support/utils')

const puppeteer = require('puppeteer')

//https://github.com/cucumber/cucumber-js/issues/1610 - setDefault timeout is not working on cucumber7.
//Calling outside of hooks, this will make sure timeout set properly. Application not loading in 5000ms in firefox browser.
setDefaultTimeout(appConstants.pageTimeout)

setWorldConstructor(function World({attach, parameters}) {
    global.attach = attach;
    global.parameters = parameters;
})

setDefinitionFunctionWrapper(function (fn, options) {
    return function (...args) {
        return fn.apply(this, args)
            .catch(async error => {
                await utils.takeScreenShot()
                throw error;
            });
    }
})

BeforeAll(async () => {
    utils.setGlobalVariables()
    logger.info("Before starting test suite...")
    scope.driver = puppeteer
    logger.info("Running the tests on node environment :", process.env.NODE_ENV)
})

Before(async () => {
    logger.info("Before starting the test ...")
    await utils.launchBrowser(puppeteer)
    logger.info("The browser instance started successfully...")
})

//Arrow function binds the current context, which prevents the cucumber world instance
//https://github.com/cucumber/cucumber-js/issues/790
After(async function (scenario) {
    logger.info("After execution of test....")
    await utils.takeScreenShot()
    await utils.closeBrowserInstance()
})

AfterAll(async () => {
    logger.info("After execution of all tests in the suite")
    await utils.closeBrowserInstance()
})