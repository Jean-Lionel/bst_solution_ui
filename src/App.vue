<template>
    <base-component v-if="$store.state.user" class="container-fluid"/>
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

</style>
