<template>
  <div>
    <h1>Lifecycle methods</h1>
    <h2>{{ msg }}</h2>
    <h3>{{ message }}</h3>
    <!-- <input type="text" v-model="message" /> -->
    <input v-model="message" />
  </div>
</template>

<script>
export default {
  name: "lifeCycle",
  data() {
    return {
      msg: "Learning Lifecycle methods in Vue js",
      message: "message to be updated",
    };
  },
  beforeCreate() {
    console.warn("beforeCreate called -", this.msg);
  },
  created() {
    // setTimeout(() => {
    this.msg = "created called after 2 seconds";
    document.getElementById("app").style.color = "red";
    console.warn("created called -", this.msg);
    // }, 2000);
  },
  beforeMount() {
    // setTimeout(() => {
    this.msg = "beforeMount called after 4 seconds";
    document.getElementById("app").style.color = "green";
    console.warn("beforeMount called -", this.msg);
    // }, 4000);
  },
  mounted() {
    // setTimeout(() => {
    this.msg = "Mounted called after 6 seconds";
    document.getElementById("app").style.color = "goldenrod";
    console.warn("mounted called -", this.msg);
    // }, 6000);
  },
  beforeUpdate() {
    // setTimeout(() => {
    this.msg = "beforeUpdate called after 8 seconds";
    document.getElementById("app").style.color = "dark blue";
    console.warn("beforeUpdate called -", this.msg);
    // }, 8000);
  },
  updated() {
    // setTimeout(() 
    this.msg = "Updated called after 10 seconds";
    document.getElementById("app").style.color = "chocolate";
    console.warn("updated called -", this.msg);
    // }, 10000);
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
input {
  width: 500px;
}
</style>
                    