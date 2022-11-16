<template>
    <div>
        <modal-component :modalActive="modalActive" @close="close">
            <h1>Je suis Un Millionnaire</h1>
        </modal-component>
    </div>
</template>

<script>
import ModalComponent from '../global/ModalComponent.vue'
export default {
    components: { ModalComponent },
    data() {
        return{
            modalActive : true,
        }
    },
    methods: {
        close() {
            this.modalActive = false
            this.$emit('close')
        }
    }
    
}
</script>

<style lang="scss" scoped>

</style>