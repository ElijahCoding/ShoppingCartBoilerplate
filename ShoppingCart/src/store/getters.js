// products
export const products = (state) => {
  return state.products
}

// cart
export const cart = (state) => {
  return state.cart
}

// cart item count
export const cartItemCount = (state) => {
  return state.cart.length
}

// cart total
export const cartTotal = (state) => {
  return state.cart.reduce((a, b) => {
    return a + b.product.price * b.quantity
  }, 0).toFixed(2)
}
