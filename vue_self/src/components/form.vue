<template>
  <div>
    <p v-if="error.length>0">
      <B> &#9888; Please resolve the following errors</B>
      <ul>
        <li v-for="err in error" v-bind:key='err.id'>{{err}}</li>
      </ul>
    </p>
    <form @submit="loginData">
      <input
        type="text"
        v-model="username"
        placeholder="Enter your name"
      /><br /><br />
      <input
        type="password"
        v-model="password"
        placeholder="Enter your password"
      /><br/><br>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormVue",
  data() {
    return {error:[],username: null, password: null};
  },
  methods: {
    loginData(e) {
      console.log("logindata -",this.username , this.password);
      this.error=[];
      if(this.username && this.password){
        console.warn('No error');
        }
      if(!this.username){
        this.error.push('Please enter username');
      }
      if(!this.password){
        this.error.push('Please enter password');
      }
      console.log('Hello',this.error)
      e.preventDefault();
      },
  },
};
</script>

<style scoped>
div {
  display: block;
}
input {
  background-color: antiquewhite;
  color: #000;
  width: 200px;
  font-family: calibri;
  border-radius: 5px;
}
button {
  background-color: rgb(0, 198, 233);
  color: #fff;
  border-radius: 5px;
  width: 150px;
  font-size: 20px;
}
button:hover {
  cursor: pointer;
}
ul{
  list-style-type:circle;
}
</style>