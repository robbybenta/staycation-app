const express = require('express')
const path = require('path')
const router = require('./routes/index')
const app = express()
const port = 3030


//req.body

app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static('public'))



app.use(router)

app.listen(port, () => {
    console.log(`aplikasi ini berjalan di ${port}`)
})