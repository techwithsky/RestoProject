<template>
    <div class="nav">
        <!-- <img src="../assets/qq.png" height=50 width=50 alt=""> -->
        <a href="/">Home</a>
        <a href="/add">Add Restaurant</a>
        <a id="logoutBtn" @click="logout" href="">Logout</a>
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
    background-color: rgb(44, 43, 43);
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

.logoutBtn {
    float: right;
}

::-webkit-scrollbar {
    display: none;
}
</style>