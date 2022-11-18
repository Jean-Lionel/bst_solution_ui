<template>
    <div class="login-form">
        <div class="loginbox"> 
            <div class="picture">
                <p></p>
            </div> 
            <div class="rectanglebox">
                <p class="text-primary text-center">Login</p>
                <div class="form">
                    <form @submit.prevent="submit">
                        <div class="input_group">
                            <div class="label_text">
                                <label for=""><i class="fa fa-envelope" aria-hidden="true"></i> Email</label>
                            </div>
                            <div class="input_text">
                                <input type="text" placeholder="Enter your Email..."  v-model="form.email"  required >
                            </div>
                        </div>
                        <div class="input_group">
                            <div class="label_text">
                                <label for=""><i class="fa fa-unlock-alt" aria-hidden="true"></i>Password</label>
                            </div>
                            <div class="input_text">
                                <input type="password" v-model="form.password" required>
                            </div>
                        </div>
                       
                       
                    
                        <div class="login-error"><p>{{ errorMessage }}</p></div>
                    
                       
                        <div class="login-btn">
                            <input type="submit" value="Login" class="reg">
                        </div>
                
                    </form>
                    
                </div>

            </div>
        </div>
        
    </div>
</template>

<script>
import axios from "axios"
import "@/assets/css/tony_css/login.css"
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
         
            axios.post(this.$store.state.baseUrl + "login/", this.form)
            .then( (response) =>{
                if(response.data.success) {
                    this.$store.commit("login", JSON.stringify(response.data.data))
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

<style  scoped >

</style>

