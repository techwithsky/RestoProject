<template>
    <HeaderVue />
    <h1>Welcome to update restaurant page</h1>
    <form class="update">
        <h3>Update restaurant details</h3>
        <input v-model="name" type="text" placeholder="Enter name" name="name">
        <input v-model="address" type="text" placeholder="Enter address" name="address">
        <input v-model="contact" type="number" placeholder="Enter contact" name="contact">
        <button type="button" @click="updateRestaurant">Update Restaurant</button>
        <h4 v-show="emptyFields">Please provide all details!!!</h4>
        <h3 v-show="addSuccess">Restaurant data updated!!!</h3>
    </form>

</template>

<script>
import HeaderVue from './Header.vue';
import axios from 'axios'

export default {
    name: 'UpdateResto',
    data() {
        return {
            name: '',
            address: '',
            contact: '',
            emptyFields: false,  //if any of the input fields is empty
            addSuccess: false    //shows success message after successful update
        }
    },
    components: {
        HeaderVue
    },
    async mounted() {
        let user = localStorage.getItem('Users-Info');
        if (!user) {
            this.$router.push({ name: "LoginPage" }); //if user not logged in route to login page
        }
        console.warn(this.$route.params.id);
        let result = await axios.get("http://localhost:3000/restaurants/" + this.$route.params.id); //return data of selected element
        this.name = result.data.name;             //updates input fields with fetched details from api
        this.address = result.data.address;
        this.contact = result.data.contact;
    },
    methods: {
        async updateRestaurant() {
            let result1 = await axios.put("http://localhost:3000/restaurants/" + this.$route.params.id,
                {
                    name: this.name,
                    address: this.address,
                    contact: this.contact
                }
            );
            if (result1.status == 200) {
                this.addSuccess = true;
                setTimeout(() => {
                    this.$router.push({ name: 'Home' })
                }, 2000);
            }
        }
    }
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