const express = require('express')
const path = require('path')

const expressHbs = require('express-handlebars')
const adminRoutes = require('./routes/adminRoutes')
const shopRoutes = require('./routes/shopRoutes')

const app = express()
app.engine('hbs', expressHbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')
app.set('views', 'views')

// app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/admin/', adminRoutes)
app.use('/', shopRoutes)

app.use(express.static(path.join(__dirname, 'public'))) //serve static files

app.get((req, res) => {
  res.status(404).send('<h1>Page not found</h1>')
})

module.exports = app
