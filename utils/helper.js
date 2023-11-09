export const cleanInput = (input, isArabe = true) => {
    if (isArabe) {
        input = parseInt(input)
        input = !isNaN(input) ? Math.floor(Math.abs(input)) : ''
    } else {
        const romanNumeralRegex = /^(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$|^O$/
        if (romanNumeralRegex.test(input)) {
            input = input.toUpperCase()
        } else {
            input = ''
        }
    }
    return input
}