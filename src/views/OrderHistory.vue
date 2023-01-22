<template>
    <div>
    <order-header />
        <h1>Order History</h1>
        <OrderList/>
    </div>
</template>

<script>
import OrderHeader from '../components/orders/OrderHeader.vue';
import OrderList from '../components/orders/OrderList.vue';
    export default {
    components: { OrderList, OrderHeader }
}
</script>

<style lang="scss" scoped>

</style>