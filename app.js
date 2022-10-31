import express from 'express'
import path from 'path';

const app = express()
const port = 3000 || process.env.PORT

app.use('/css', express.static(path.resolve('node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.resolve('node_modules/bootstrap/dist/js')))
app.use('/assets', express.static(path.resolve('src/assets')))

app.set('view engine', 'ejs')
app.set('views', path.resolve('src/views'));

app.get('/', (req, res) => res.render('pages/index'))


app.listen(port, () => console.log(`App listening on http://localhost:${port}`))