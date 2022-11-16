<template>
  <div class="home">
  {{ $store.state.user }}
  <alert-component/>
 
  </div>
</template>

<script>
import AlertComponent from '../components/test/AlertComponent.vue'


export default {
  components: { AlertComponent },
  name: 'Home',
  
}
</script>
