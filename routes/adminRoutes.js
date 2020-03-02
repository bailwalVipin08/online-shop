const express = require('express')
const prodController = require('../controllers/prodController')
const router = express()

router
  .route('/add-product')
  .get(prodController.getAddProduct)
  .post(prodController.addProduct)

module.exports = router
