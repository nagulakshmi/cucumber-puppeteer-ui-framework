const {When, Then} = require("@cucumber/cucumber")

Then('I select {string} as application type', async (applicationType) => {
    const element = await find.findElementByTagAndText('label', applicationType)
    return await element.click()
})

Then('I enter {string} as number of dependents', async (value) => {
    const element = await find.findElementBySelector('select[title="Number of dependants"]')
    return element.value = value
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
    let element = null
    //Don't use xpath, if the id is available. Switch case logic used, considering less number of elements in a page.
    switch (labelText) {
        case 'Living expenses':
            element = await find.findElementById('expenses')
            break
        case 'Current home loan repayments':
            element = await find.findElementById('homeloans')
            break
        case 'Other loan repayments':
            element = await find.findElementById('otherloans')
            break
        case 'Total credit card limits':
            element = await find.findElementById('credit')
            break
        default:
            logger.error("Unable to find th element for : " + labelText)
            throw new Error("Unable to find th element for : " + labelText)
    }
    return input.sendKeys(element, value)
})

When('I click on {string} to calculate', async (buttonName) => {
    let element = null
    //Switch case used even though only one condition, This can be fixed without switch case by referring direct element.
    switch (buttonName) {
        case 'Work out how much I could borrow':
            element = await find.findElementById('btnBorrowCalculater')
            break
        default:
            logger.error("Unable to find th element for : " + buttonName)
            throw new Error("Unable to find th element for : " + buttonName)
    }
    return await element.click()
})

Then('I should see borrowing estimate as {string}', async (borrowingEstimate) => {
    await scope.page.waitFor(2000) // wait for the animation to complete.
    const element = await find.findElementById('borrowResultTextAmount')
    const actualValue = await scope.page.evaluate(el => el.innerText, element)
    return assert.deepEqual(actualValue, borrowingEstimate)
})

Then('I capture the current screen for reference', async () => {
    return await utils.takeScreenShot('calcualte_feature')
})
