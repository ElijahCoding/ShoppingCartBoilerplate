<template>
  <div id="app">
    <message></message>
    <top-header></top-header>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import TopHeader from '@/components/common/TopHeader'
  import Message from '@/components/common/Message'

  export default {
    name: 'app',
    components: {
      TopHeader, Message
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
  }
</style>
