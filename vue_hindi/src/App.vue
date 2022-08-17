<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <Home_1 data="Akash is here" msg="Web developement"/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Home_1 from './components/Home.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Home_1
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
