export const cleanInput = (input, isArabe = true) => {
    if (isArabe) {
        input = parseInt(input)
        input = !isNaN(input) ? Math.floor(Math.abs(input)) : 0
    } else {
        const romanNumeralRegex = /^(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/
        if (input == 'O') {
            return input
        } else if (romanNumeralRegex.test(input)) {
            input = input.toUpperCase()
        } else {
            input = ''
        }
    }
    return input
}