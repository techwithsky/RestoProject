<template>
  <div id="app">
    <!-- <Home_1 /> -->
    <!-- <imageMap /> -->
    <!-- <dataBinding /> -->
    <!-- <lifeCycle /> -->
    <!-- <FormVue /> -->
    <!-- <filterVue /> -->
    <axiosFetch />
    <activeBoot />
  </div>
</template>

<script>
// import Home_1 from './components/Hello.vue'
// import imageMap from './components/imagemap.vue'
// import dataBinding from './components/databind.vue'
// import lifeCycle from "./components/lifecycle.vue";
// import FormVue from './components/form.vue'
// import filterVue from './components/filter.vue'
import axiosFetch from "./components/axiosFetch.vue";
import activeBoot from './components/activeBoot.vue'

export default {
  name: "App",
  components: {
    // Home_1,
    // imageMap
    // dataBinding
    // lifeCycle,
    // FormVue
    // filterVue
    axiosFetch,
    activeBoot
  },
};
</script>                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

::-webkit-scrollbar{
    width:20px;
    height: 20px;
}
::-moz-scrollbar{
    width:20px;
    height: 20px;
}
::-webkit-scrollbar-thumb{
    background: linear-gradient(
        to bottom,
        #00c0e2,
        #ff3474
    );
    border-radius: 50px;
}
::-moz-scrollbar-thumb{
    background: linear-gradient(
        to bottom,
        #00c0e2,
        #ff3474
    );
    border-radius: 50px;
}

::-webkit-scrollbar-track{
    background: #474747;
}
::-moz-scrollbar-track{
    background: #474747;
}
</style>
