const {v4: uuidv4} = require('uuid')

const isUndefined = (value) => {
    return value === undefined
}

const isUndefinedOrNull = (value) => {
    return value === undefined || value === null
}

const takeScreenShot = async () => {
    const screenshot = await scope.page.screenshot({
        path: "." + scope.folder + "screenshots/" + uuidv4() + ".png",
        type: "jpeg",
        fullPage: true
    })
    attach(screenshot, "image/png")
}

module.exports = {
    isUndefined,
    isUndefinedOrNull,
    takeScreenShot
}