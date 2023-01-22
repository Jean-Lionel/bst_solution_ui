<template>
    <div>
        <div class="table_containner">
            <div class="text-right">
                <button>Ajouter un client</button>
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
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        mounted(){
            this.get();
        }, 
        methods:{
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