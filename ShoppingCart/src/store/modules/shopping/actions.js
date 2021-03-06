import axios from 'axios'

// get products
export const getProducts = ({ commit }) => {
  return axios.get('http://cartapi.test/api/products').then((response) => {
    commit('setProducts', response.data)
    return Promise.resolve()
  })
}

// add a product to our cart
export const addProductToCart = ({ commit, dispatch }, { product, quantity }) => {
  commit('appendToCart', { product, quantity })

  // Dispatch flashMessage
  dispatch('flashMessage', 'Item added to cart', { root: true })

  return axios.post('http://cartapi.test/api/cart', {
    product_id: product.id,
    quantity
  })
}

// get cart
export const getCart = ({ commit }) => {
  return axios.get('http://cartapi.test/api/cart').then((response) => {
    commit('setCart', response.data)
    return Promise.resolve()
  })
}

// remove a product from our cart
export const removeProductFromCart = ({ commit }, productId) => {
  commit('removeFromCart', productId)
  return axios.delete(`http://cartapi.test/api/cart/${productId}`)
}

// remove all produts from our cart
export const removeAllProductsFromCart = ({ commit, dispatch }) => {
  commit('clearCart')

  dispatch('flashMessage', 'All items removed.', { root: true })

  return axios.delete(`http://cartapi.test/api/cart`)
}
