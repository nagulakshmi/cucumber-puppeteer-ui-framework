const {
    BeforeAll,
    AfterAll,
    Before,
    After,
    setDefaultTimeout
} = require('@cucumber/cucumber')

const appConstants = require('../support/constants')

const puppeteer = require('puppeteer')

//https://github.com/cucumber/cucumber-js/issues/1610 - setDefault timeout is not working on cucumber7.
//Calling outside of hooks, this will make sure timeout set properly. Application not loading in 5000ms in firefox browser.
setDefaultTimeout(appConstants.pageTimeout)

BeforeAll(async () => {
    setGlobalVariables()
    logger.info("Before starting test suite...")
    scope.driver = puppeteer
    logger.info("Running the tests on node environment :", process.env.NODE_ENV)
})

Before(async () => {
    logger.info("Before starting the test ...")
    if (scope.browser != null) {
        await scope.browser.close()
    }

    await launchBrowser()
    logger.info("The browser instance started successfully...")
})

After(async () =>  {
    logger.info("After execution of test....")
    await scope.browser.close()
})

AfterAll(async () => {
    logger.info("After execution of all tests in the suite")
    if (scope.browser != null) {
        await scope.browser.close()
    }
})

//Set the global modules here
const setGlobalVariables = () => {
    global.logger = configureLogger()
    global.scope = require('../support/scope')
    global.constants = appConstants
    global.find = require('../support/find')
    global.utils = require('../support/utils')

}

const configureLogger = () => {
    const winston = require('winston')
    return winston.createLogger({
        level: 'info',
        format: winston.format.simple(),
        transports: [
            new winston.transports.Console(),
            new winston.transports.File({filename: 'combined.log'})
        ]
    })
}

const launchBrowser = async () =>  {
    logger.info("Launch the browser instance....")

    scope.browser = await puppeteer.launch({
        headless: constants.headlessMode,
        devtools: false,
        timeout: constants.pageTimeout,
        ignoreHTTPErrors: true,
        product: "chrome",
        args: [
            '--no-sandbox',
            '--inspect-brk',
            '--remote-debugging-port=9000',
            '--disable-setuid-sandbox',
            '--enable-logging',
            '--single-process',
            '--v=1'
        ]
    })

    scope.folder = '/'
    logger.info("The browser instance start....")

    scope.page = await scope.browser.newPage()
    await scope.page.setCacheEnabled(false)

    await scope.page.setViewport({
        width: constants.width,
        height: constants.height
    })
}