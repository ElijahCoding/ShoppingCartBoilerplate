<template>
  <div class="row">
    <div class="col-sm-4" v-for="product in products">
      <product :product="product"></product>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import Product from './Product'

  export default {
    name: 'products',

    components: {
      Product
    },

    computed: {
      ...mapGetters({
        products: 'shopping/products'
      })
    },

    methods: {
      ...mapActions({
        getProducts: 'shopping/getProducts'
      })
    },

    mounted () {
      this.getProducts()
    }
  }
</script>

<style>
  .thumbnail img {
    width: 100%;
  }
</style>
