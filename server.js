import express from 'express'
import { fileURLToPath } from 'url'
import { create } from 'express-handlebars'
import { config } from 'dotenv'
config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = new URL('.', `file://${__filename}`).pathname;

const PORT = process.env.PORT || 4242

const app = express()

const hbs = create()
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.set('views', `${__dirname}/views`);

app.get('/', (req, res) => {
    res.render('home', {test: 'test'})
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

export default app