<template>
    <div class="container">
        <img src="../assets/resto.jpg" alt="">
        <h1>Login</h1>
        <input type="text" v-model="email" placeholder="Enter email-ID" required>
        <input type="password" v-model="password" placeholder="Enter Password" required>
        <button @click="login">Sign In</button>
        <h4 v-show="emptyCredentials">Please provide all details!!!</h4>
        <p>
            <router-link to="/sign-up">SignUp</router-link>
        </p>
        <!-- <h3 v-show="SignUpSuccess">Sign-up successful !!!</h3> -->
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'LoginPage',
    data() {
        return {
            email: '',
            password: '',
            emptyCredentials: false
        }
    },
    methods: {
        async login() {
            let result = await axios.get(
                `http://localhost:3000/users/?email=${this.email}&password=${this.password}`
            );
            if (this.email == "" || this.password == "") {
                this.emptyCredentials = true;
                console.log('Please provide all details');
            }
            else if (result.status == 200 && result.data.length > 0) {
                console.log('status 200,Login successful!!! ');
                this.$router.push({ name: "Home" })
                localStorage.setItem('Users-Info', JSON.stringify(result.data[0]));
            }
        }
    },
    mounted() {
        let user = localStorage.getItem('Users-Info');
        if (user) {
            this.$router.push({ name: "Home" });
        }
    }
}
</script>

<style>
.container a {
    color: rgb(53, 41, 37);
}
</style>