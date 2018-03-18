<template>
  <div class="thumbnail">
    <img :src="product.image" :alt="product.title">
    <div class="caption">
      <a href="#">{{ product.title }}</a> £{{ product.price }}
      <p>{{ product.description }}</p>
      <a href="#" class="btn btn-default" role="button">Add to cart</a>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['product']
  }
</script>
