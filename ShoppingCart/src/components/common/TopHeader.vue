<template>
  <header class="header">
    <div class="container">
      {{ cartItemCount }} items in cart (£0.00)
    </div>
  </header>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'top-header',

    computed: {
      ...mapGetters({
        cartItemCount: 'cartItemCount'
      })
    }
  }
</script>

<style>
  .header {
    background-color: #222;
    color: #fff;
    padding: 20px;
    margin-bottom: 20px;
  }
</style>
