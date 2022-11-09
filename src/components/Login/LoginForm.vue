<template>
    <div class="login-form">
        <div>
            <div>Sign in with</div>
           
            <div>
                <h5>Sign in with Credentials</h5>
                
                <form @submit.prevent="submit">
                    <div>
                        <label for="username">Username</label>
                        <input type="text"  v-model="form.email"  required>
                    </div>
                    <div>
                        <label for="password">Mot de passe</label>
                        <input type="password" v-model="form.password" required>
                    </div>
                    <div class="login-error"> {{ errorMessage }}</div>
                    <div>
                        <button>Sign in</button>
                    </div>
                </form>
            </div>
        </div>
        
    </div>
</template>

<script>
import axios from "axios"
export default {
    data(){
        return {
            form:{
                email: "nijeanlionel@gmail.com",
                password: "12345678",
            },
            errorMessage: ""

        }
    },
    methods:{
        submit(){
            axios.post("http://127.0.0.1:8000/api/login/", this.form)
            .then( (response) =>{
                
                if(response.data.success) {
                   this.$router.push("/") 
                }
            })
            .catch( (error)=> {
                if (error.message == "Network Error"){
                    this.errorMessage = "Vous n'êtes pas connecté au serveur"
                }else{
                    this.errorMessage = error.response.data.message
                }
                
            })

        }
    }
    
}
</script>

<style lang="scss" scoped>
.login-error{
    color: red;
}
.login-form{
 
    width: 363px;
    height: 446px;
    background: #FFFFFF;
}
</style>

