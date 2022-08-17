<template>
  <div id="app">
    <Home_1 />
    <imageMap />
<!-- <dataBinding /> -->
  </div>
</template>

<script>
import Home_1 from './components/Hello.vue'
import imageMap from './components/imagemap.vue'
// import dataBinding from './components/databind.vue'

export default {
  name: 'App',
  components: {
    Home_1,
    imageMap
    // dataBinding
  }
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
