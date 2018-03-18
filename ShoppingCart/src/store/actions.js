import axios from 'axios'

// get products
export const getProducts = ({ commit }) => {
  return axios.get('http://cartapi.test/api/products').then((response) => {
    commit('setProducts', response.data)
    return Promise.resolve()
  })
}

// add a product to our cart
export const addProductToCart = ({ commit }, { product, quantity }) => {
  commit('appendToCart', product)

  return axios.post('http://cartapi.test/api/cart', {
    product_id: product.id,
    quantity
  })
}
// get cart
// remove a product from our cart
// remove all produts from our cart
