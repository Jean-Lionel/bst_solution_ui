<template>
    <modal-component :modalActive="true" @close="$emit('close')">
        <div id="facture"> 
        <Facture :order="order" @close="$emit('close')" />
        </div>
    </modal-component>
</template>

<script>
import Facture from '../global/Facture.vue';
import ModalComponent from '../global/ModalComponent.vue'
    export default {
    components: { ModalComponent, Facture },
    props: ["order", "isActive"]
    }
</script>

<style  scoped>
.facture{
   
}
</style>