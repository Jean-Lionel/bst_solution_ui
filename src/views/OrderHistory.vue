<template>
    <div>
        <h1>Order History</h1>

        <OrderList/>
    </div>
</template>

<script>
import OrderList from '../components/orders/OrderList.vue';
    export default {
    components: { OrderList }
}
</script>

<style lang="scss" scoped>

</style>