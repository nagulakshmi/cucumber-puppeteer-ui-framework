const {v4: uuidv4} = require('uuid')

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

module.exports = {
    isUndefined,
    isUndefinedOrNull,
    takeScreenShot
}