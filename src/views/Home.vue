<template>
  <div class="home">
  <alert-component/>
  <h1>Dashoboard </h1>
   <h4>To Do</h4>
   <h4>Je suis un Millionnaire</h4>
   <Facture/>
 
  </div>
</template>

<script>
import Facture from '../components/global/Facture.vue';
export default {
  components: { Facture },
  name: 'Home',
  data(){
    return {
       
    }
  },
  mounted() {
   
  },
  methods: {
    put() {
         
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
