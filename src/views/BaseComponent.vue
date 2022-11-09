<template>
    <div>
    <nav-bar-component/>
        <router-view />
    </div>
</template>

<script>
import NavBarComponent from '../components/navbar/NavBarComponent.vue'

export default {
  components: {NavBarComponent  },
    
}
</script>

<style lang="scss" scoped>

</style>