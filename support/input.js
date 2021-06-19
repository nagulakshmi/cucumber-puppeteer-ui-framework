const sendKeys = async (element, value) => {
    await element.focus()
    await element.type(value)
}

module.exports = {
    sendKeys
}