<template>
  <div class="row">
    <div class="col-sm-4">
      <product></product>
    </div>
  </div>
</template>

<script>
  import Product from './Product'

  export default {
    name: 'products',
    components: {
      Product
    }
  }
</script>

<style>
  .thumbnail img {
    width: 100%;
  }
</style>
