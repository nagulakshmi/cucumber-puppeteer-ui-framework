const isUndefined = (value) => {
    return value === undefined
}

const isUndefinedOrNull = (value) => {
    return value === undefined || value === null
}

module.exports = {
    isUndefined,
    isUndefinedOrNull
}