const findElementById = async () => {
    //TODO:- Implement if required
}

const findElementByClassName = async () => {
    //TODO:- Implement if required
}

const findElementByXPath = async () => {
    //TODO:- Implement if required
}

const findElementByTag = async () => {
    //TODO:- Implement if required
}

const findElementByTestId = async () => {
    //TODO:- Implement if required
}

const findElementByTagAndText = async (tagType, tagText) => {
    const elements = await scope.page.$$(tagType)

    for (const element of elements) {
        const elementText = await scope.page.evaluate(el => el.innerText ? el.innerText.trim() : "", element)
        if (elementText === tagText) {
            logger.info("Match found for type :" + tagType + " and text :", tagText)
            return element
        }
    }

    logger.error("Unable to find the element with type: " + tagType + " with text :" + tagText)
    throw new Error("Unable to find the element with type: " + tagType + " with text :" + tagText)
}

const findElementBySelector = async (selector) => {
    const elements = await scope.page.$$(selector)
    if (elements.length !== 0) {
        return elements[0]
    }
    logger.error("Unable to find using selector :" + selector)
    throw new Error("Unable to find using selector :" + selector)
}




module.exports = {
    findElementById,
    findElementByClassName,
    findElementByXPath,
    findElementByTag,
    findElementByTestId,
    findElementByTagAndText,
    findElementBySelector
}