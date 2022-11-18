<template>
    <div v-show="addStock">
        
        <modal-component :modalActive="addStock" @close="close">
            <form @submit.prevent="saveStock">
            
            </form>
        </modal-component>
    </div>
</template>

<script>
import ModalComponent from '../global/ModalComponent.vue'
export default {
  components: { ModalComponent },
    props:["addStock"],
    data() {
        return{
            form: {
                
            }
        }
    },
    methods: {
        close() {
            this.$emit('close')
        }
    }
    
}
</script>

<style lang="scss" scoped>

</style>