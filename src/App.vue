<template>
  <div id="app">
    <section class="section">
      <div class="container">
        <HelloWorld />
      </div>
    </section>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  beforeCreate() {
    this.$liff.init({
      liffId: '1654371376-432e1Kbo',
    });
  },
  components: {
    HelloWorld
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
