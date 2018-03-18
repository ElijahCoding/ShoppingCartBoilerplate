<template>
  <header class="header">
    <div class="container">
      {{ cartItemCount }} items in cart (£{{ cartTotal }})

      <div class="pull-right" v-if="user.authenticated">
        {{ user.data.name }}
      </div>
    </div>
  </header>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'top-header',

    computed: {
      ...mapGetters({
        cartItemCount: 'shopping/cartItemCount',
        cartTotal: 'shopping/cartTotal',
        user: 'auth/user'
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
