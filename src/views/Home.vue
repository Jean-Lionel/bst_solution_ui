<template>
  <div class="home">
  <alert-component/>
  <h1>Dashoboard </h1>
   <h4>To Do</h4>
   <h4>Je suis un Millionnaire</h4>
 
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
  },
  mounted() {
    this.put();
  },
  methods: {
    put() {
          this.putData("clients/1", {
            "name" : "Hacker"
        })
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
