<template>
    <div>
        <div>
            <button @click="addStock">Ajouter un stock</button>
            <div>
                <add-stock  :addStock="isAddStock" @close="addStock"/>
            </div>   
        </div>
        <div class="container-flex">
            <div>
                <table>
                    <tr>
                        <th>Nom</th>
                        <td>{{ company.tp_name }}</td>
                    </tr>
                </table>
            </div>
            <div>
                
                <div class="table_containner">
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                    </table>
                    <tbody>
                        <tr v-for="stock in company?.stocks" :key="stock.id">
                            <td>{{ stock.id }}</td>
                            <td>{{ stock.name }}</td>
                            <td>
                                <button>
                                    <button @click="showDetail(stock.id)" title="Détail" class="">
                                        <i class="fa fa-eye"></i>
                                    </button>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
import AddStock from '../stocks/AddStock.vue';
export default {
    components: { AddStock },
    data(){
        return{
            company : {},
            isAddStock : false
        }
    },
    mounted(){
        this.get();
    },
    methods: {
        showDetail(id){
            this.$router.push("/stocks/"+ id)
        },
        addStock(){
            this.isAddStock = !this.isAddStock 
            this.get();
        },
        get(){
            
            this.getData(`companies/${this.$route.params?.id}`)
            .then(result => {
                this.company = result.data
            })
            .catch(error => {
                console.error(error)
            })
        }
    }
    
}
</script>

<style lang="scss" scoped>

</style>