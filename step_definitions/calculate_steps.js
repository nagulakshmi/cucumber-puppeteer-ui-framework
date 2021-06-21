const {When, Then} = require("@cucumber/cucumber")

Then('I select {string} as application type', async (applicationType) => {
    const element = await find.findElementByTagAndText('label', applicationType)
    return await element.click()
})

Then('I select {string} as number of dependents', async (expectedValue) => {
    const element = await find.findElementBySelector('select[title="Number of dependants"]')
    return await scope.page.evaluate((element, expectedValue) => {
        element.value = expectedValue
    }, element, expectedValue)
})

Then('I select {string} as property you would like to buy', async (propertyType) => {
    const element = await find.findElementByTagAndText('label', propertyType)
    return await element.click()
})

Then('I enter {string} as {string}', async (labelText, income) => {
    const element = await find.findElementByXPath('//div[contains(label,"' + labelText + '")]//input')
    return await input.sendKeys(element, income)
})

Then('I feed {string} as {string}', async (labelText, value) => {
    let element = await stepHelper.findExpensesElements(labelText)
    return input.sendKeys(element, value)
})

When('I click on {string} to calculate', async (buttonName) => {
    const element = await find.findElementById('btnBorrowCalculater')
    return await element.click()
})

Then('I should see borrowing estimate as {string}', async (borrowingEstimate) => {
    await scope.page.waitFor(2000) // wait for the animation to complete.
    const element = await find.findElementById('borrowResultTextAmount')
    const actualValue = await scope.page.evaluate(el => el.innerText, element)
    return assert.deepEqual(actualValue, borrowingEstimate)
})

Then('I capture the current screen for reference', async () => {
    return await utils.takeScreenShot()
})

When('I click on {string} button', async (elementLabel) => {
    logger.info("Processing button element :" +  elementLabel)
    const element = await find.findElementBySelector('button[class=start-over]')
    return await element.click()
})

Then('I should see {string} as {string}', async (question, expectedValue) => {
    logger.info("Processing question :" +  question)
    const element = await find.findElementByXPath('//li[contains(label, "' + expectedValue +'")]//input')
    const actualValue = await scope.page.evaluate(el => el.checked, element)
    return assert.equal(actualValue, true)
})

Then('I should see Number of dependants as {string}', async (value) => {
    const element = await find.findElementBySelector('select[title="Number of dependants"]')
    const actualValue = await scope.page.evaluate(el=>el.value, element)
    return assert.equal(actualValue, value)
})

Then('It should display {string} as {string}', async (question, expectedValue) => {
    logger.info("Processing question :" +  question)
    const element = await find.findElementByXPath('//div[contains(label, "' + question +'")]//input')
    const actualValue = await scope.page.evaluate(el => el.value, element)
    return assert.equal(actualValue, expectedValue)
})

Then('It should show {string} as {string}', async (labelText, expectedValue) => {
    let element = await stepHelper.findExpensesElements(labelText)
    const actualValue = await scope.page.evaluate(el => el.value, element)
    return assert.equal(actualValue, expectedValue)
})