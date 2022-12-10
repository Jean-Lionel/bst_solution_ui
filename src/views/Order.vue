<template>
    <div>
        <div class="text-right">
            <router-link to="/order_history">Historique de vente</router-link>
        </div>
        <h1>Partie Vente</h1>
        <vente-cart/>
    </div>
</template>

<script>
import VenteCart from '../components/orders/VenteCart.vue'
export default {
    components: { VenteCart },
}
</script>
<style  scoped>

</style>