<template>
    <div id="nav" class="header">
    <div >
        <a href=""><i class="fa fa-bars"></i></a>
        <router-link to="/"> <i class="fa fa-home"></i> Home</router-link> 
        <router-link to="/company"> <i class="fa fa-institution"></i>  Company</router-link> 
        <router-link to="/company_owners"> <i class="fa fa-briefcase" ></i>  Chefs des entreprises</router-link> 
        <router-link to="/users"> <i class="fa  fa-users"></i>Utilisateur</router-link> 
        <router-link v-if="$store.state.user" to="" @click="logout">Logout</router-link>
    </div>

    <div>
  
      <div class="img_logo">
            <!-- <img src="img/lion.png" alt="logo"> -->
            
            <span title="Notification"><i class="fa fa fa-bell"></i></span>
            <span><i class="fa fa-question-circle-o" title="Aide"></i></span>
           
            
            <span><i class="fa fa-user-circle-o" title="Aide"></i>
                Jean Lionel
            <i class="fa fa-angle-down"></i>
            </span>
            
            
      </div>
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
.img_logo span{
    display: inline-block;
    padding: 0 8px;
    font-size: 18px;
}

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