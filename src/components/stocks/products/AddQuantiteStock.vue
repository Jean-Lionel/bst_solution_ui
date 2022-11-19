<template>
    <div>
        <modal-component :modalActive="modalActive" @close="$emit('close')">
        <form action="">
        <h1>Ajouter du produit</h1>
        {{ selectProduct }}
        </form>
        </modal-component>
    </div>
</template>

<script>
import ModalComponent from '../../global/ModalComponent.vue'
    export default {
    props: ["selectProduct"],
        components: { ModalComponent },
        data(){
            return {
                modalActive : true,
            }
        },
        methods: {
            
        }
        
    }
</script>

<style lang="scss" scoped>

</style>