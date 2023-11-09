import ConvertToRomanNumeral from '../services/convertToRoman.js'

const FetchRomanNumerals = async (num) => {
    if (num === 0) return;
    const data = await fetch(`https://romans.justyy.workers.dev/api/romans/?cached&n=${num}`)
    const json = await data.json()
    return json.result
}

test('converts 490 to roman Numerals using api to verify the result', async () => {
    const toRoman = ConvertToRomanNumeral(490)
    const fetchRoman = await FetchRomanNumerals(490)
    expect(toRoman).toBe(fetchRoman)
})

test('converts 5 to roman Numerals using api to verify the result', async () => {
    const toRoman = ConvertToRomanNumeral(5)
    const fetchRoman = await FetchRomanNumerals(5)
    expect(toRoman).toBe(fetchRoman)
})

test('converts 1 to roman Numerals using api to verify the result', async () => {
    const toRoman = ConvertToRomanNumeral(1)
    const fetchRoman = await FetchRomanNumerals(1)
    expect(toRoman).toBe(fetchRoman)
})

test('converts 0 to roman Numerals using api to verify the result', async () => {
    const toRoman = ConvertToRomanNumeral(0)
    const fetchRoman = await FetchRomanNumerals(0)
    expect(toRoman).toBe(fetchRoman)
})