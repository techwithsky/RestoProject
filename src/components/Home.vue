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
            <th>Actions</th>
        </tr>
        <tr v-for="item in restaurants" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.address }}</td>
            <td>{{ item.contact }}</td>
            <td class="actionsTd">
                <router-link :to="/update/ + item.id">
                    <span id="editIcon" class='fas'>&#xf044;</span>
                </router-link>
                <span @click="removeData(item.id)" id="removeIcon" class='fas'>&#xf1f8;</span>
            </td>
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
            restaurants: []
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
    },
    methods: {
       async removeData(id) {
            console.warn(id)
            let result = await axios.delete("http://localhost:3000/restaurants/" + id);
            if (result.status == 200) {
                this.$router.push({ name: "LoginPage" })
            }
        }
    }
}
</script>

<style scoped>
table {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
}

table,
td,
th {
    border: 1px solid black;
    border-collapse: collapse;
}

td,
th {
    padding: 10px;
}

a {
    text-decoration: none;
}

.actionsTd {
    padding: 0px;
}

#editIcon {
    width: 37%;
    color: transparent;
    text-align: center;
    text-shadow: 0 0 0 green;
}

#removeIcon {
    cursor: pointer;
    width: 37%;
    text-align: center;
    font-size: 15px;
    color: red;
    /* height: 20px;
    width:20px; */
}
</style>