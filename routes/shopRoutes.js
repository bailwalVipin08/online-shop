const express = require('express')
const router = express()
const prodController = require('../controllers/prodController')

router.route('/').get(prodController.getProducts)

module.exports = router
