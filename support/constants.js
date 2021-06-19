let config = require('konfig')({
    path: './config'
})

module.exports = {
    baseUrl: config.properties.baseUrl,
    width: config.properties.width,
    height: config.properties.height,
    headlessMode: config.properties.headlessMode,
    pageTimeout: config.properties.pageTimeout
}