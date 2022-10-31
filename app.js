import express from 'express'
import path from 'path'

const app = express();
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')


// app.use('/css', express.static(path.resolve('node_modules/bootstrap/dist/css')))
// app.use('/js', express.static(path.resolve('node_modules/bootstrap/dist/js')))

app.get("/", (req, res) => {
    res.sendFile(path.resolve('views/index.html'))
});

app.listen(port, () => console.log(`server running on port http://localhost:${port}`));