<template>
  <div class="home">
  <alert-component/>
  <loading-component/>
   
  </div>
</template>

<script>
import LoadingComponent from '../components/global/LoadingComponent.vue'
import AlertComponent from '../components/test/AlertComponent.vue'

export default {
  components: { AlertComponent, LoadingComponent },
  name: 'Home',
  data(){
    return {
       
    }
  }
  
}
</script>
