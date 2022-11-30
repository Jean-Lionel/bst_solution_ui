<template>
  <div class="home">
  <alert-component/>
  <h1>Dashoboard </h1>
   <h4>To Do</h4>
 
  </div>
</template>

<script>

import AlertComponent from '../components/test/AlertComponent.vue'

export default {
  components: { AlertComponent },
  name: 'Home',
  data(){
    return {
       
    }
  }
  
}
</script>

<style  scoped>
.home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}
</style>
