<template>
    <div id="nav" class="header">
    <div >
        <a href=""><i class="fa fa-bars"></i></a>
        <router-link to="/"> <i class="fa fa-home"></i> Home</router-link> 
        <router-link to="/company"> <i class="fa fa-institution"></i>  Company</router-link>

        <router-link to="/company_owners"> <i class="fa fa-briefcase" ></i>  Chefs des entreprises</router-link> 
        <router-link to="/fournisseurs"> <i class="fa fa-themeisle" ></i>  Fournisseurs</router-link> 
        <router-link to="/users"> <i class="fa  fa-users"></i>Utilisateur</router-link> 
        
    </div>

    <div>
  
      <div class="nav-right">
            <!-- <img src="img/lion.png" alt="logo"> -->
            
            <span title="Notification"><i class="fa fa fa-bell"></i></span>
            <span><i class="fa fa-question-circle-o" title="Aide"></i></span>

            <div class="parent-modal">
                <span class="user_page" @click="showModal = !showModal"><i class="fa fa-user-circle-o" title="Aide"></i>
                    {{ user }}
                    <i class="fa fa-angle-down"></i>
                </span>
                <div v-if="showModal" class="modal-login">
                    
                    <router-link to="/" >
                    <i class="fa fa-bar-chart"></i>
                    <span>Dashboard</span>
                    </router-link>

                    <router-link to="" @click="logout">
                        <i class="fa  fa-lock"></i>
                        <span>Logout</span>
                    </router-link>
                </div>
            </div>

           
        
            
      </div>
    
    </div>

    </div>
</template>

<script>

    export default {
    data() {
        return {
            showModal: false,
        }
    },
    methods: {
        
        mounted(){
            
        },
        logout() {
            this.$store.commit("logout")
        },
        
    },
    computed: {
        user() {
            return this.$store.state.user?.user?.name
        }
    }
    }
</script>

<style scoped>
.parent-modal{
    display:inline-block;
    position: relative;
}
.modal-login{
    position: absolute;
    margin: 0;
    background-color: var(--primary);
    width: 100%;
    border: 1px solid var(--primary);
    border-radius: 3px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    text-align: right;
    padding: 10px 20px;
    
}
.nav-right span{
    display: inline-block;
    padding: 0 8px;
    font-size: 18px;
}
.user_page{
    cursor: pointer;
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
#nav a:hover{
    background-color: var(--hover);
}

.header {
    background-color: var(--primary);
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