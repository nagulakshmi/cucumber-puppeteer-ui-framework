const reporter = require('cucumber-html-reporter')

const generateTestReport = () => {

    const options = {
        theme: 'bootstrap',
        jsonFile: 'output/results.json',
        output: 'output/cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        screenshotsDirectory: 'screenshots/',
        launchReport: true,
        storeScreenshots: true
    }

    reporter.generate(options)
}

generateTestReport()