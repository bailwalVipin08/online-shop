const express = require('express')
const expressHbs = require('express-handlebars')

const app = express()


app.get('', (req, res) => {
    res.send('Started Working...')
})

module.exports = app