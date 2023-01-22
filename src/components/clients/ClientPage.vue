<template>
    <div>
        <order-header/>
        <div class="table_containner">
            <div class="text-right">
                <button @click="isAddClient = !isAddClient">Ajouter un client</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Téléphone</th>
                        <th>NIF</th>
                        <th>ADDRESSE</th>
                        <th>DATE</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="client in clients">
                        <td>{{ client.id }}</td>
                        <td>{{ client.customer_name }}</td>
                        <td>{{ client.telephone }}</td>
                        <td>{{ client.customer_TIN }}</td>
                        <td>{{ client.customer_address }}</td>
                        <td>{{ client.created_at }}</td>
                        <td>
                        <button @click="deleteClient(client.id)">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <AddClient v-show="isAddClient" @close="addClient" @clientSave="addClient" />
        </div>
    </div>
</template>

<script>
import OrderHeader from '../orders/OrderHeader.vue';
import AddClient from './AddClient.vue';
    export default {
  components: { OrderHeader, AddClient },
        data(){
            return{
                isAddClient : false,
            }
        },
        mounted(){
            this.get();
        }, 
        methods:{
            deleteClient(id){
                const confirm = window.confirm('Are you sure you want to delete this client')

                if(confirm){
                    this.deleteData("clients/"+id)
                        .then(response => {
                            this.get();
                        })
                }
            },
            addClient(){
                this.isAddClient = !this.isAddClient
                this.get();
            },
            get(){
                this.getData('clients')
                    .then(response =>{
                        this.$store.commit('setStateData', {
                            key: 'clients',
                            value: response.data
                        })
                    })
                    .catch(error =>{
                        console.log(error)
                    })
            }
        }
        ,
        computed:{
            clients(){
                return this.$store.getters.fetchData('clients')
            }
        }
        
    }
</script>

<style  scoped>

</style>