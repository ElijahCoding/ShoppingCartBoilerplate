// set products
export const setProducts = (state, products) => {
  state.products = products
}

// append on cart
export const appendToCart = (state, { product, quantity }) => {
  const existing = state.cart.find((item) => {
    return item.product.id === product.id
  })

  if (existing) {
    existing.quantity++
  } else {
    state.cart.push({
      product,
      quantity: quantity
    })
  }
}
// set cart
// clear cart
// remove from cart
