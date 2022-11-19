<template>
    <div class="header">
    <div id="nav">
        <router-link to="/"> Home</router-link> 
        <router-link to="/company">Company</router-link> 
        <router-link to="/company_owners">Chefs des entreprises</router-link> 
        <router-link to="/users">Utilisateur</router-link> 
        <router-link v-if="$store.state.user" to="" @click="logout">Logout</router-link>
    </div>

    <div>
    
      
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

<style >
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
:root {
    --primary: #e36414;
    --secondary: #e36414;
    --danger: #F70E0E;
    --grey: #8b8b8b;
    --dark: #5f5f5f;
    --black: #000000;
    --white: #ffff;
    --hover: #FB8B24;
    --active: #1D1B31;

    --text: 12px;
    --title: 20px;
}

* {
    margin: 0 auto;
    padding: 0px;
    font-family: 'Raleway', sans-serif !important;
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