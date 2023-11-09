const ConvertToRomanNumeral = (value) => {
    if (value == '') return ''
    if (value === 0) return 'O'

    const romanSymbols = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }

    let result = ''

    for (const symbol in romanSymbols) { // For each letter
        while (value >= romanSymbols[symbol]) {
            // if the number is greater than the letter value, concat the letter and substract the value from the number
            result += symbol
            value -= romanSymbols[symbol]
        }
    }

    return result
}

export default ConvertToRomanNumeral