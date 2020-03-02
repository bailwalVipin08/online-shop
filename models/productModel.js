const fs = require('fs')
const path = `${__dirname}/../dev-data/products.json`

Product = class {
  constructor(product) {
    this.title = product.name
    this.price = product.cost
    this.description = product.description
  }

  save() {
    let products = []
    products.push(this)
    fs.readFile(path, (error, content) => {
      if (!error) {
        products = JSON.parse(content)
      }
      products.push(this)
      fs.writeFile(path, JSON.stringify(products), err => {
        console.log(err)
      })
    })
  }

  static fetchAll(cb) {
    fs.readFile(path, (error, content) => {
      if (error) {
        cb([])
      }
      cb(JSON.parse(content))
    })
  }
}

module.exports = Product
