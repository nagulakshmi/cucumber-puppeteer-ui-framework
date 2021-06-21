const findExpensesElements = async (labelText) => {
    //Don't use xpath, if the id is available. Switch case logic used, considering less number of elements in a page.
    switch (labelText) {
        case 'Living expenses':
            return await find.findElementById('expenses')
        case 'Current home loan repayments':
            return await find.findElementById('homeloans')
        case 'Other loan repayments':
            return await find.findElementById('otherloans')
        case 'Total credit card limits':
            return await find.findElementById('credit')
        default:
            logger.error("Unable to find th element for : " + labelText)
            throw new Error("Unable to find th element for : " + labelText)
    }
}

module.exports = {
    findExpensesElements
}