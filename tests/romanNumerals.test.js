import ConvertToRomanNumeral from '../services/convertToRoman.js'

const FetchRomanNumerals = async (num) => {
    if (num === 0) return;
    const data = await fetch(`https://romans.justyy.workers.dev/api/romans/?cached&n=${num}`)
    const json = await data.json()
    return json.result
}

test('converts 490 to roman Numerals using api to verify the result', async () => {
    const conversionValue = ConvertToRomanNumeral(490)
    const referenceValue = await FetchRomanNumerals(490)
    expect(conversionValue).toBe(referenceValue)
})

test('converts 5 to roman Numerals using api to verify the result', async () => {
    const conversionValue = ConvertToRomanNumeral(5)
    const referenceValue = await FetchRomanNumerals(5)
    expect(conversionValue).toBe(referenceValue)
})

test('converts 1 to roman Numerals using api to verify the result', async () => {
    const conversionValue = ConvertToRomanNumeral(1)
    const referenceValue = await FetchRomanNumerals(1)
    expect(conversionValue).toBe(referenceValue)
})

test('converts 0 to roman Numerals using api to verify the result', async () => {
    const conversionValue = ConvertToRomanNumeral(0)
    const referenceValue = await FetchRomanNumerals(0)
    expect(conversionValue).toBe(referenceValue)
})