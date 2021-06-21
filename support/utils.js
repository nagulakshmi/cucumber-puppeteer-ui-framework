const isUndefined = (value) => {
    return value === undefined
}

const isUndefinedOrNull = (value) => {
    return value === undefined || value === null
}

const takeScreenShot = async () => {
    const screenshot = await scope.page.screenshot()
    attach(screenshot, "image/png")
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

//Set the global modules here
const setGlobalVariables = () => {
    global.scope = require('./scope')
    global.constants = require('./constants')
    global.find = require('./find')
    global.utils = require('./utils')
    global.input = require('./input')
    global.stepHelper = require('./stepHelper')
    global.logger = utils.configureLogger()

    global.chai = require('chai')
    global.assert = chai.assert
    global.expect = chai.expect
}

const launchBrowser = async (puppeteer) =>  {
    logger.info("Launch the browser instance....")

    scope.browser = await puppeteer.launch({
        headless: constants.headlessMode,
        devtools: false,
        timeout: constants.pageTimeout,
        ignoreHTTPErrors: true,
        product: constants.browser,
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

module.exports = {
    isUndefined,
    isUndefinedOrNull,
    takeScreenShot,
    configureLogger,
    setGlobalVariables,
    launchBrowser
}