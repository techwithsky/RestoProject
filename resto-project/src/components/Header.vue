<template>
    <div class="nav">
        <RouterLink to="/">Home</RouterLink>
        <router-link to="/add">Add Restaurant</router-link>
        <router-link to="/update">Update Restaurant</router-link>
        <router-link id="logoutBtn" @click="logout" to="">Logout</router-link>
    </div>
</template>

<script>
export default {
    name: 'HeaderVue',
    methods: {
        logout() {
            localStorage.clear();
            // prompt("Do you really want to logout");
            this.$router.push({ name: 'LoginPage' })
        }
    }
}
</script>

<style>
.nav {
    background-color: rgb(43, 43, 43);
    min-width: 540px;
    overflow: hidden;
}

.nav a {
    font-family: 'Montserrat', sans-serif;
    color: antiquewhite;
    padding: 15px 25px;
    text-decoration: none;
    float:left;
}

.nav a:hover {
    background-color: rgb(208, 208, 208);
    color: black;
}

logoutBtn {
    float: right;
}

::-webkit-scrollbar {
    display: none;
}
</style>