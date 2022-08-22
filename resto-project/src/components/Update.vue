<template>
    <HeaderVue />
    <h1>Welcome to update restaurant page</h1>
</template>

<script>
import HeaderVue from './Header.vue';

export default {
    name: 'UpdateResto',
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