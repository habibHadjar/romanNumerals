import express from 'express'
import { fileURLToPath } from 'url'
import { create } from 'express-handlebars'
import ToRomanNumeral from './romanNumerals.js'
import { config } from 'dotenv'
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

app.post('/submit', (req, res) => {
    let inputValue = req.body.number
    inputValue = parseInt(inputValue)
    inputValue = Math.abs(inputValue)
    inputValue = Math.floor(inputValue)
    inputValue != NaN ? inputValue : 0
    
    const romanNumeral = ToRomanNumeral(inputValue)

    // Render the updated form view with the result
    res.render('home', { result: romanNumeral })
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

export default app