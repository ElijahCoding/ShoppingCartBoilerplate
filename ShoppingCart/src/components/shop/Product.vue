<template>
  <div class="thumbnail">
    <img :src="product.image" :alt="product.title">
    <div class="caption">
      <a href="#">{{ product.title }}</a> £{{ product.price }}
      <p>{{ product.description }}</p>
      <a href="#" class="btn btn-default" role="button" @click.prevent="addToCart">Add to cart</a>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    props: ['product'],

    methods: {
      ...mapActions({
        addProductToCart: 'shopping/addProductToCart'
      }),

      addToCart () {
        this.addProductToCart({
          product: this.product,
          quantity: 1
        })
      }
    }
  }
</script>
