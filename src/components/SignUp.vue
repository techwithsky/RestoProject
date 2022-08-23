<template>
    <div class="container">
        <img src="../assets/resto.jpg" alt="">
        <h1>Sign Up</h1>
        <input type="text" v-model="name" placeholder="Enter name">
        <input type="text" v-model="email" placeholder="Enter email-ID">
        <input type="password" v-model="password" placeholder="Enter Password">
        <button @click="signup">Sign up</button>
        <p>
            <router-link to="/login">Login</router-link>
        </p>
        <h3 v-show="SignUpSuccess">Sign-up successful !!!</h3>
        <h4 v-show="emptyFields">Please provide all details!!!</h4>
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
            password: '',
            emptyFields: false,
            SignUpSuccess: false
        }
    },
    methods: {
        async signup() {
            let result = await axios.post("http://localhost:3000/users", {
                name: this.name,
                email: this.email,
                password: this.password
            });
            console.table(result.data);
            if (this.name == "" || this.email == "" || this.password == "") {
                this.emptyFields = true;
                console.log('Please provide all details');
            }
            else if (result.status == 201) {
                console.log('status 201, Data submitted successfully!!! ');
                this.SignUpSuccess = true;
                // setTimeout(() => {
                //     this.$router.push({ name: "Home" })
                // }, 2000);
                // localStorage.setItem('Users-Info', JSON.stringify(result.data));
            }
        },
    },
    mounted() {
        let user = localStorage.getItem('Users-Info');
        if (user) {
            this.$router.push({ name: "Home" })
        }
    }
}
</script>

<style scoped>
h4 {
    color: rgb(211, 25, 25);
}
</style>