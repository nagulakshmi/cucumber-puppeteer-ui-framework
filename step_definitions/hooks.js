const {
    BeforeAll,
    AfterAll,
    Before,
    After,
    setDefaultTimeout,
    Given
} = require('@cucumber/cucumber')

const puppeteer = require('puppeteer')

BeforeAll(async function () {

    setGlobalVariables()
    logger.info("Before starting test suite...")
    scope.driver = puppeteer

    logger.info("Running the tests on node environment :", process.env.NODE_ENV)
    setDefaultTimeout(constants.pageTimeout)
})

Before(async function () {
    logger.info("Before starting the test ...")
    if (scope.browser != null) {
        scope.browser.close()
    }

    await launchBrowser();

    logger.info("The browser instance started successfully...")
})

After(async function () {
    logger.info("After execution of test....")
    await scope.browser.close()
})

AfterAll(async function () {
    logger.info("After execution of all tests in the suite")
    if (scope.browser != null) {
        await scope.browser.close()
    }
})

//Set the global modules here
const setGlobalVariables = () => {
    global.logger = configureLogger()
    global.scope = require('../support/scope')
    global.constants = require('../support/constants')
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
        ignoreHTTPErrors: true,
        args: [
            '--no-sandbox',
            '--window-size=1920, 1080',
            '--inspect-brk',
            '--remote-debugging-port=9000',
            '--disable-setuid-sandbox',
            '--enable-logging',
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