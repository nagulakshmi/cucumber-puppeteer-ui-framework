const {Then} = require("@cucumber/cucumber")

Then('I select {string} as application type', async (applicationType) => {
    const element = await find.findElementByTagAndText('label', applicationType)
    return element.click()
})


Then('I enter {string} as number of dependents', async (value) => {
    const element = await find.findElementBySelector('select[title="Number of dependants"]')
    return element.value = value
})


Then('I select {string} as property you would like to buy', async (propertyType) => {
    const element = await find.findElementByTagAndText('label', propertyType)
    return element.click()
})