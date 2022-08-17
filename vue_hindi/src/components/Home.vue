<template>
  <div>
    <h1 v-show="show">Hello Akash Pawar</h1>
    <h3 v-show="show">Software developer</h3>
    <h1 v-show="!show">Hello Krishnan Naidu</h1>
    <h3 v-show="!show">Css destroyer</h3>
    <button @click="display">Change name</button>
  </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default {
  name: "Home_1",
  props: {
    data: String,
    msg: String,
  },
  data() {
    return { show: true };
  },
  methods: {
    // hello(data) {
    //   console.log("Hello console!!!");
    //   alert(data);
    // },
    display() {
      this.show = !this.show;
    },
  },
};
</script>
