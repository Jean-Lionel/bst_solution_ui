<template>
    <div>
        <div class="table_containner no_print">
            <loading v-if="isLoading" />
            <table class="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Caissier</th>
                        <th>NOM DU CLIENT</th>
                        <th>TEL</th>
                        <th>Montant</th>
                        <th>Tax</th>
                        <th>Paiement Total</th>
                        <th>Type de paiement</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                <tr v-for="order in orders" :key="order.id">
                    <td>{{ order.id }}</td>
                    <td>{{ order?.user?.name }}</td>
                    <td>{{ JSON.parse(order.client)?.customer_name  }}</td>
                    <td>{{ JSON.parse(order.client)?.customer_TIN  }}</td>
                    <td>{{ order.amount }}</td>
                    <td>{{ order.tax }}</td>
                    <td>{{ order.amount_tax }}</td>
                    <td>{{ order.type_paiement }}</td>
                    <td>{{ order.created_at }}</td>
                    <td>
                    <button @click="printFacture(order)"> <i class="fa fa-eye"></i> Afficher </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    <PrintFacture v-if="isActive" :isActive="isActive" :order="order" @close="close"/>
    </div>
</template>

<script>
import PrintFacture from './PrintFacture.vue'
export default {
    components: { PrintFacture },
    data(){
        return {
            isLoading : false,
            searchText : "",
            order: null,
            isActive: false,
        }
    },
    mounted(){
      this.get();  
    },
    methods: {
        get(url = "orders") {
           
            if (this.$store.state.fetchData.ordersHistory.length == 0){
                this.isLoading =true
            }
            this.getData(url)
                .then(response => {
                    this.$store.state.fetchData.ordersHistory = response.data
                    this.isLoading = false
                })
                .catch(error => {
                    console.error(error)
                })
        },
        printFacture(order){
            this.order = order
            this.isActive = true;
        },
        close(){
            this.isActive =false;
        }
    },
    computed:{
        ordersHistory() {
            return this.$store.state.fetchData.ordersHistory
        },
        orders(){
            return this.searchInArray(this.ordersHistory, this.searchText)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>