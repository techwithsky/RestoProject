<template>
    <div class="container">
        <img src="../assets/resto.jpg" alt="">
        <h1>Sign Up</h1>
        <input type="text" v-model="name" placeholder="Enter name">
        <input type="text" v-model="email" placeholder="Enter email-ID">
        <input type="password" v-model="password" placeholder="Enter Password">
        <button @click="signup">Sign up</button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'SignUp',
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async signup() {
            let result = await axios.post("http://localhost:3000/users", {
                name: this.name,
                email: this.email,
                password: this.password
            });
            console.warn(result);
            if (result.status == 201) {
                console.log('status is 201 ')
            }
            localStorage.setItem('Users-Info',JSON.stringify(result.data))
        },
    },
}
</script>

<style>
.container {
    width: 400px;
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
    width: 500px;
}

.container img {
    padding: 20px 0;
}

.container input {
    display: block;
    width: 280px;
    height: 40px;
    margin-bottom: 10px;
    padding-left: 20px;
    /* background-color: rgb(255, 239, 218); */
    border: 1px solid black;
    /* border-radius: 5px; */
    margin-left: auto;
    margin-right: auto;
}

.container button {
    margin-top: 20px;
    width: 300px;
    height: 40px;
    cursor: pointer;
    /* display: block; */
    background-color: rgb(4, 184, 207);
    border: 2px solid black;
    /* border-radius: 5px; */
}
</style>