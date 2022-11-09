<template>
  <div>
    <form @submit.prevent="submit">
    <div>
    <label for="email">Email</label>
    <input type="text" name="email" v-model="email" required>
    </div>
    <div>
    <label for="password">Mot de passe</label>
    <input type="text" name="password" v-model="password" required>
    </div>
    <div>
        <button type="submit">Se connecter</button>
    </div>
        
    </form>
  </div>
</template>

<script>
export default {
    data(){
        return{
            email: "",
            password: "",
        }
    },
    methods :{
        submit(){
            this.$store.commit("login", this.email)
            this.$router.push("/")
        }
    }

}
</script>

<style>

</style>