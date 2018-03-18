import axios from 'axios'

// get products
export const getProducts = ({ commit }) => {
  return axios.get('http://cartapi.test/api/products').then((response) => {
    commit('setProducts', response.data)
    return Promise.resolve()
  })
}

// get cart
// add a product to our cart
// remove a product from our cart
// remove all produts from our cart
