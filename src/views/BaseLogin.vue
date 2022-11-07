<template>
    <div class="base-login">
        <nav-bar/>
        <Welcome/>
        <login-form/>
        <Footer/>
    </div>
</template>

<script>
import Footer from '../components/Login/Footer.vue';
import LoginForm from '../components/Login/LoginForm.vue';
import NavBar from '../components/Login/NavBar.vue';
import Welcome from '../components/Login/Welcome.vue';

export default{
    components: { Footer, NavBar, Welcome, LoginForm }
}
</script>

<style scoped>
.base-login{
      
    height: 100%;
    width: 100%;
    background: linear-gradient(90deg, #5E72E4 0%, #20ad2b 100%);
}
</style>

