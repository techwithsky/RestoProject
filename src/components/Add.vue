<template>
    <HeaderVue />
    <h1>Welcome to add restaurant page</h1>
    <form class="add">
        <h3>Add restaurant by providing following details</h3>
        <input v-model="name" type="text" placeholder="Enter name" name="name">
        <input v-model="address" type="text" placeholder="Enter address" name="address">
        <input v-model="contact" type="number" placeholder="Enter contact" name="contact">
        <button type="button" @click="addRestaurant">Add Restaurant</button>
        <h4 v-show="emptyFields">Please provide all details!!!</h4>
        <h3 v-show="addSuccess">Restaurant added!!!</h3>
    </form>

</template>

<script>
import HeaderVue from './Header.vue';
import axios from 'axios';

export default {
    name: 'AddResto',
    data() {
        return {
            name: '',
            address: '',
            contact: '',
            emptyFields: false,
            addSuccess: false
        }
    },
    components: {
        HeaderVue
    },
    methods: {
        async addRestaurant() {
            let result = await axios.post("http://localhost:3000/restaurants",
                {
                    name: this.name,
                    address: this.address,
                    contact: this.contact
                }
            );
            if (this.name == '' || this.address == '' || this.contact == '') {
                this.emptyFields = true;
                console.log('Please provide all details');
            } else
                if (result.status == 201) {
                    this.name = '', this.address = '', this.contact = '', this.addSuccess = true,
                        setTimeout(() => {
                            this.$router.push({ name: 'Home' })
                        }, 2000);
                }
            // alert("Button working")
        }
    },
    // mounted() {
    //     let user = localStorage.getItem('Users-Info');
    //     if (!user) {
    //         this.$router.push({ name: "LoginPage" })
    //     }
    // }
}
</script>

<style scoped>
h3 {
    /* margin-left: auto; */
    /* margin-right: auto; */
    text-align: center;
    width: 70%;
    margin: 30px auto;
}
</style>