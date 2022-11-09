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
            }

        }
    },
    methods:{
        submit(){
            axios.post("http://127.0.0.1:8000/api/login/", this.form)
            .then(function (response) {
                console.log(response.data)
            })
            .catch(function (error) {
                console.error(error)
            })

        }
    }
    
}
</script>

<style>

.login-form{
 
    width: 363px;
    height: 446px;
    background: #FFFFFF;
}
</style>

