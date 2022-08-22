<template>
    <HeaderVue />
    <h1>Welcome to home page</h1>
    <hr>
    <h2>List Of Restaurants</h2>

    <table>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Contact</th>
        </tr>
        <tr v-for="item in restaurants" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.address}}</td>
            <td>{{item.contact}}</td>
        </tr>
    </table>
</template>

<script>
import HeaderVue from './Header.vue';
import axios from 'axios';

export default {
    name: 'HomePage',
    data() {
        return {
        restaurants:[]
      }  
    },
    components: {
        HeaderVue
    },
    async mounted() {
        let user = localStorage.getItem('Users-Info');
        if (!user) {
            this.$router.push({ name: "LoginPage" })
        }
        let result = await axios.get("http://localhost:3000/restaurants");
        console.table(result.data)
        this.restaurants = result.data
    }
}
</script>

<style>
table{
    width: 60%;
    margin-left: auto;
    margin-right: auto;
}
table,td,th{
    border: 1px solid black;
    border-collapse: collapse;
}
td,th{
    padding: 5px 10px;
}
</style>