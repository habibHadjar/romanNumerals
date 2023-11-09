import express from 'express'
import { fileURLToPath } from 'url'
import { create } from 'express-handlebars'
import ConvertToRomanNumeral from './services/convertToRoman.js'
import ConvertToArabeNumeral from './services/convertToArabe.js'
import { cleanInput } from './utils/helper.js'
import { config } from 'dotenv'
config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = new URL('.', `file://${__filename}`).pathname

const PORT = process.env.PORT || 4242

const app = express()
app.use(express.json())

const hbs = create()
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.set('views', `${__dirname}/views`)
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('layouts/main')
})

app.post('/api/convertToRoman/', (req, res) => {
    const arabe = cleanInput(req.body.arabe)
    const romanResult = ConvertToRomanNumeral(arabe)
    res.json({ arabe: arabe, result: romanResult })
})

app.post('/api/convertToArabe/', (req, res) => {
    const roman = cleanInput(req.body.roman, false)
    const arabeResult = ConvertToArabeNumeral(roman)
    res.json({ roman: roman, result: arabeResult })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

export default app