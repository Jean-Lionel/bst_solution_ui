<template>
  <router-view/>
    <div id="nav" >
        <router-link to="/">Home</router-link> |
        <router-link v-if="!$store.state.email" to="/login">Login</router-link>
        <router-link v-if="$store.state.email" @click="logout">Logout</router-link>
    </div>

</template>

<script>

export default {
    data(){
        return{
            isLogidIn : true
        }
    },
    mounted(){
        this.$store.commit("initializeStore")
    },
    methods : {
        logout(){
            this.$store.commit("logout")
        }
    }
}

</script>

<style>
*{
    margin: 0;
    box-sizing: border-box;
    margin: auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
