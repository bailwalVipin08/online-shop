let productForm = document.getElementById('add-product-form')

productForm.addEventListener('submit', event => {
  event.preventDefault()
  let data = {}
  let formData = new FormData(productForm)
  formData.forEach((value, key) => {
    data[key] = value
  })

  fetch('http://127.0.0.1:3000/admin/add-product', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(response => {
    console.log(response)
  })
})
