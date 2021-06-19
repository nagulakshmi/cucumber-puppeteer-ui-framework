const {
    BeforeAll,
    AfterAll,
    Before,
    After,
    setDefaultTimeout
} = require('@cucumber/cucumber')

const puppeteer = require('puppeteer')

BeforeAll(async function () {
    setGlobalVariables()
    logger.info("Before starting test suite...")
})

Before(async function () {

})

After(async function () {

})

AfterAll(async function () {

})

//Set the global modules here
const setGlobalVariables = () => {
    global.logger = configureLogger()
}

const configureLogger = () => {

    const winston = require('winston')

    return winston.createLogger({
        level: 'info',
        format: winston.format.simple(),
        transports: [
            new winston.transports.Console(),
            new winston.transports.File({ filename: 'combined.log' })
        ]
    })
}