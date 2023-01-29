<template>
    <div>
        <div>
            
            <div>
                <add-stock  :addStock="isAddStock" @close="addStock"/>
            </div>   
        </div>
        <div >
            <div class="container-flex-between text-right" style="margin-top: 10px;">
                <h4>{{ company.tp_name }}</h4>
                <p>
                    <button @click="addStock">Ajouter un stock</button>
                </p>
                <div>
                </div>
                
            </div>
            <div>
                
                <div class="table_containner">
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Utilisateur Autorisé</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            <tr v-for="stock in company?.stocks" :key="stock.id">
                                <td>{{ stock.id }}</td>
                                <td>{{ stock.name }}</td>
                                <td></td>
                                <td>
                                        <button @click="showDetail(stock.id)" title="Détail" class="">
                                            <i class="fa fa-eye"></i>
                                        </button>
                                    <button @click="addUserStock">
                                    Associer à un utilisateur
                                    <i class="fa fa-add"></i>
                                    </button>
                                  
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <modal-component :modalActive="isAddUser" @close="close">
                        <add-user-stock @close="close"/>
                    </modal-component>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
import ModalComponent from '../global/ModalComponent.vue';
import AddStock from '../stocks/AddStock.vue';
import AddUserStock from './AddUserStock.vue';
export default {
    components: { AddStock, ModalComponent, AddUserStock },
    data(){
        return{
            isAddUser: false,
            company : {},
            isAddStock : false
        }
    },
    mounted(){
        this.get();
    },
    methods: {
        close() {
            this.addUserStock();
            this.get();
        },
        addUserStock(){
            this.isAddUser = !this.isAddUser;
        },
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

<style  scoped>
button{
    display: inline-block;
    margin: 0 5px;
}
</style>