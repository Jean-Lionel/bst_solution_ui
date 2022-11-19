<template>
    <div class="header">
    <div id="nav">
        <a href=""><i class="fa fa-bars"></i></a>
        <router-link to="/"> <i class="fa fa-home"></i> Home</router-link> 
        <router-link to="/company"> <i class="fa fa-institution"></i>  Company</router-link> 
        <router-link to="/company_owners"> <i class="fa fa-briefcase" ></i>  Chefs des entreprises</router-link> 
        <router-link to="/users"> <i class="fa  fa-users"></i>Utilisateur</router-link> 
        <router-link v-if="$store.state.user" to="" @click="logout">Logout</router-link>
    </div>

    <div>
    
      <img src="favicon.ico" alt="logo">
    
    </div>
    </div>
</template>

<script>

    export default {
    methods: {
        data(){
            return{
               
            }
        },
        mounted(){
            
        },
        logout() {
            this.$store.commit("logout")
        }
    }
    }
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;400;500;600;700;800&display=swap');
#nav{
    display: flex;
    align-items: center;
}
#nav a{
    display: inline-block;
    padding: 5px;
    text-decoration: none;
    color: #fff;

}

.header {
    background-color: var(--secondary);
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    color: #fff;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    position: sticky;
    top: 0;
}
</style>