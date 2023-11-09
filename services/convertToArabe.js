const ConvertToArabeNumeral = (value) => {
    if (value == '') return ''
    if (value == 'O') return 0

    const romanToArabicMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let total = 0
    let previousValue = 0

    for (let i = value.length - 1; i >= 0; i--) {
        const currentValue = romanToArabicMap[value[i]]

        if (currentValue < previousValue) {
            total -= currentValue
        } else {
            total += currentValue
        }

        previousValue = currentValue
    }

    return total
}

export default ConvertToArabeNumeral