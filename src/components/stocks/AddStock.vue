<template>
    <div v-show="addStock">
        
        <modal-component :modalActive="addStock" @close="close">
        <h1>Je suis un Millionnaire</h1>
        </modal-component>
    </div>
</template>

<script>
import ModalComponent from '../global/ModalComponent.vue'
export default {
  components: { ModalComponent },
    props:["addStock"],
    methods: {
        close() {
            this.$emit('close')
        }
    }
    
}
</script>

<style lang="scss" scoped>

</style>