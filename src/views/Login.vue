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

<style lang="scss" scoped>
.base-login{
      
    height: 100%;
    width: 100%;

}
</style>

