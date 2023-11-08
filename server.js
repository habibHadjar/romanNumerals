import express from 'express'
import { fileURLToPath } from 'url'
import { create } from 'express-handlebars'
import ToRomanNumeral from './romanNumerals.js'
import { config } from 'dotenv'
import ToArabeNumeral from './arabeNumerals.js'
config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = new URL('.', `file://${__filename}`).pathname

const PORT = process.env.PORT || 4242

const app = express()

const hbs = create()
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.set('views', `${__dirname}/views`)
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('home')
})

app.post('/', (req, res) => {
    function cleanInput(input, isArabe = true) {
        if (isArabe) {
            input = Math.floor(Math.abs(parseInt(input)))
            input != NaN ? input : 0
        } else {
            const regex = /^(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/
            if (!regex.test(input) || input == undefined) input = ''
            input = input.toUpperCase()
        }
        return input
    }
    const arabe = cleanInput(req.body.arabe)
    const roman = cleanInput(req.body.roman, false)
    
    const result = {
        roman: ToRomanNumeral(arabe),
        arabe: ToArabeNumeral(roman)
    }
    const number = {
        arabe: arabe,
        roman: roman
    }

    res.render('home', { number: number, result: result })
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

export default app