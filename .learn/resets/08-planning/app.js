// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = (num) => {
    return num * 106.58
}

const fromEuroToDollar = (num) => {
    return num * 1.2
}

const fromYenToPound = (num) => {
    return num / 159.87
}

module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };