<template>

    <base-component v-if="$store.state.user"/>
    <login v-else/>

</template>

<script>
import BaseComponent from './views/BaseComponent.vue'
import Login from './views/Login.vue'

export default {
  components: { BaseComponent, Login },
  
    data(){
        return{
            isLogidIn : true
        }
    },
    mounted(){
        this.$store.commit("initializeStore")
    }
}

</script>

<style>
*{
    margin: 0;
    box-sizing: border-box;
    margin: auto;
    padding: 0;
}
body{
    height: 100vh;
    overflow: hidden;
    width: 98vw;
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
