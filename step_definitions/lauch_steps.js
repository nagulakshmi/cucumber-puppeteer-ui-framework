const {Given, setDefaultTimeout} = require("@cucumber/cucumber")

Given('I launch borrowing capacity calculator application', async () => {
    try {
        await scope.page.goto(constants.baseUrl, {
            waitUntil: ["load", "networkidle0", "domcontentloaded"]
        })
    } catch (error) {
        logger.error("Unable to launch the application", error)
    }
})

const applicationLoadStatus = () => {

}
