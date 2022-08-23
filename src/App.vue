<template>

  <router-view />
  <!-- <HomePage /> -->
  <!-- <sign-up /> -->
</template>

<script>
// import SignUp from './components/SignUp.vue'
// import HomePage from './components/Home.vue'
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
  background-color: #ffffff;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container,
.add ,
.update{
  margin-top: 40px;
  min-width: 400px;
  width: 40%;
  display: block;
  border: 1px solid grey;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 20px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.container img {
  padding: 20px 0;
}

input {
  box-sizing: border-box;
  display: block;
  min-width: 200px;
  width: 60%;
  font-size: 14px;
  height: 40px;
  margin-bottom: 10px;
  padding-left: 20px;
  /* background-color: rgb(255, 239, 218); */
  border: 1px solid black;
  /* border-radius: 5px; */
  margin-left: auto;
  margin-right: auto;
}

button {
  box-sizing: border-box;
  width: 60%;
  margin-top: 20px;
  min-width: 100px;
  /* width: 20%; */
  height: 43px;
  cursor: pointer;
  /* font-family: 'Fredoka One', cursive; */
  font-size: 16px;
  color: #f3f3f3;
  background-color: #1266f1;
  border: none;
  border-radius: 5px;
}

button:focus,
button:hover {
  color: #fff;
  background-color: #0c56d0;
}

button:focus {
  box-shadow: 0 4px 10px 0 rgb(0 0 0 / 20%), 0 4px 20px 0 rgb(0 0 0 / 10%)
}

button:active {
  transform: scale(0.95);
}
</style>
