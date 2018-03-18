<template>
  <div class="mini-cart">
    <ul class="list-group" v-if="cart.length">
      <li class="list-group-item" v-for="item in cart">
        <a href="#" class="badge">Remove</a>
        {{ item.quantity }} x {{ item.product.title }} @ £{{ item.product.price }}
      </li>
      <li class="list-group-item">
        <a href="#">Clear cart</a>
      </li>
    </ul>
    <p v-else>No items in cart</p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'mini-cart',

    computed: {
      ...mapGetters({
        cart: 'cart'
      })
    }
  }
</script>
