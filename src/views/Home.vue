<template>
  <div class="home">
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link v-if="!$store.state.email" to="/login">Login</router-link> |
        <router-link v-if="$store.state.email" to="" @click="logout">Logout</router-link>
    </div>
  
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {

  }
}
</script>
