<template>
    <div class="login-form">
        <div class="loginbox">
            <div class="login_header">
                <p>Sign in with</p>
                <div class="signbtn">
                    <button class="btn btn-light"><i class="fa fa-github" aria-hidden="true"></i>
                      Git hub</button>
                    
                    <button class="btn btn-light"><i class="fa fa-google" aria-hidden="true"></i>Google</button>
                </div>

            </div>
            
            
            <div class="rectanglebox">
                <p class="text-primary text-center">Or Login with credentials</p>
                <div>
                    <form @submit.prevent="submit">
                        
                        <input type="text" v-model="form.email"  required ><i class="fa fa-envelope" aria-hidden="true"></i>
                        <input type="password" v-model="form.password" required><i class="fa fa-unlock-alt" aria-hidden="true"></i>
                    
                        <div class="login-error">{{ errorMessage }}</div>
                    
                        <input type="checkbox">I agree with the Privacy Policy
                        <div>
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

<style  scoped>
.login-error{
    color: red;
}
.login-form{
    width: 30%;
height: 84vh;
background: #FFFFFF;
display:flex;
justify-content: center;
align-items: center;    
}

.loginbox{

border:1px solid whitesmoke;
padding: 10px;
margin:10px;
background-color: #f5f5f5;
}
.loginbox .login_header{
    text-align: center;
    margin: 4px;

}
.rectanglebox{
    border-top:1px solid black;
    padding: 20px;
    margin: 10px;
}
.rectanglebox p{
    color:#6495ed;
    padding: 10px;
}
.rectanglebox  i{
    position: relative;
    bottom: 30px;
    left: 10px;
    
}
.rectanglebox .reg{
    background-color: #6495ed;
    width: 60%;
    text-align: center;
    color: white;
    margin-top: 40px;

}
form input {
    margin:10px;
    border-radius: 2px;
    padding: 6px;
    border-color: whitesmoke;
    background-color: white;
    widows:100vh;
   
}
.signbtn{
    margin: 20px;
}
.signbtn button{
    margin-left: 4px;
    padding: 10px;
    background-color:#e5e5e5 ;
    border-color: #e5e5e5;
}
</style>

