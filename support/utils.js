const isUndefined = (value) => {
    return value === undefined
}

const isUndefinedOrNull = (value) => {
    return value === undefined || value === null
}

const takeScreenShot = async (testCaseName) => {
    const date = new Date();
    await scope.page.screenshot({
        path: "." + scope.folder + "screenshot_" + date.getUTCMilliseconds() + ".jpg",
        type: "jpeg",
        fullPage: true
    })
}

module.exports = {
    isUndefined,
    isUndefinedOrNull,
    takeScreenShot
}