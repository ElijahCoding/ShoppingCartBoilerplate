// set products
export const setProducts = (state, products) => {
  state.products = products
}

// append on cart
export const appendToCart = (state, product) => {
  state.cart.push(product)
}
// set cart
// clear cart
// remove from cart
