<template>
    <div>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/company">Company</router-link> |
        <router-link to="/entreprises">Entreprise</router-link> |
        <router-link to="/company_owners">Chefs des entreprises</router-link> |
        <router-link v-if="$store.state.user" to="" @click="logout">Logout</router-link>
    </div>
    </div>
</template>

<script>
    export default {
    methods: {
        logout() {
            this.$store.commit("logout")
        }
    }
    }
</script>

<style lang="scss" scoped>

</style>