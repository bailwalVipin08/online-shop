const Product = require('../models/productModel')

exports.getAddProduct = (req, res) => {
  res.render('add-product', {
    title: 'Shop: Add Product',
    pageHeading: 'Add a new product',
  })
}

exports.addProduct = (req, res, next) => {
  const product = new Product(req.body)
  product.save()
  res.redirect('/')
}

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll(products => {
    res.status(200).render('index', {
      title: 'Shop - Home',
      pageHeading: 'Welcome to this online-shop',
      items: products.length,
      products: products,
    })
  })
}
