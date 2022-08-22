<template>
    <HeaderVue />
    <h1>Welcome to add restaurant page</h1>
</template>

<script>
import HeaderVue from './Header.vue';

export default {
    name: 'AddResto',
    components: {
        HeaderVue
    },
    mounted() {
        let user = localStorage.getItem('Users-Info');
        if (!user) {
            this.$router.push({ name: "LoginPage" })
        }
    }
}
</script>

<style>
</style>