<template>
  <div class="home">
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link v-if="!$store.state.user" to="/login">Login</router-link> |
        <router-link v-if="$store.state.user" to="" @click="logout">Logout</router-link>
    </div>

    <div>
    {{$store.state.user}}
    </div>
  
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {

  },
  methods: {
      logout() {
          this.$store.commit("logout")
      }
  }
}
</script>
