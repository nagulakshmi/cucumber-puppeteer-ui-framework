const { v4: uuidv4 } = require('uuid')

const isUndefined = (value) => {
    return value === undefined
}

const isUndefinedOrNull = (value) => {
    return value === undefined || value === null
}

const takeScreenShot = async (testCaseName) => {
    await scope.page.screenshot({
        path: "." + scope.folder + "screenshot/" + uuidv4() + ".jpg",
        type: "jpeg",
        fullPage: true
    })
}

module.exports = {
    isUndefined,
    isUndefinedOrNull,
    takeScreenShot
}