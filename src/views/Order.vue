<template>
    <div>
        <order-header/>
        <h1>Partie Vente</h1>
        <vente-cart/>
    </div>
</template>

<script>
import OrderHeader from '../components/orders/OrderHeader.vue'
import VenteCart from '../components/orders/VenteCart.vue'
export default {
    components: { VenteCart, OrderHeader },
}
</script>
<style  scoped>

</style>