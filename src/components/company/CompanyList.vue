<template>
    <div>
  
        <div class="table_containner">
        <input type="text" v-model="searchText" placeholder="Rechercher ici">
        <button @click="searchIntoDb">Rechercher</button>
        <table>
        <thead>
        <tr>
            <th>#</th>
            <th>Dénomination</th>
            <th>Type</th>
            <th>NIF</th>
            <th>Quartier</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody class="table-body">
        <tr v-for="(item, i) in filtCampanies">
        <td><b>{{item.id}}</b></td>
        <td>{{ item.tp_name }}</td>
        <td>{{ item.tp_type }}</td>
        <td>{{ item.tp_TIN }}</td>
        
        <td>{{ item.tp_address_quartier }}</td>
        <td>
            <button @click="deleteEntreprise(entreprise.id)" title="Effacer" class="">
                <i class='fa fa-trash'></i>
            </button>
            <button @click="showDetail(entreprise.id)" title="Détail" class="">
                <i class='fa fa-eye'></i>
        
            </button>
            <button @click="showDetail(entreprise.id)" title="Modifier" class="">
                <i class="fa fa-edit"></i>
            </button>
            <button @click="showDetail(entreprise.id)" title="Bloquer" class="">
                <i class="fa fa-ban"></i>
            </button>
        </td>
        </tr>
        </tbody>
        </table>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                searchText: ""
            }
        },
        watch:{
            
        },
        mounted(){
            this.get("companies")
        },
        methods:{
            searchIntoDb(){
                this.get("companies?q=" + this.searchText)
            },
            get(url) {
                this.getData(url)
                .then((response) =>{
                    this.$store.state.campaniesLists = response.data?.data
                }).catch((error) =>{
                    console.error(error)
                })
            },
            deleteCompany(id){

            },
            showDetail(id) {
                alert("Todo Item deleted")
            }
        },
        computed:{
            campaniesLists() {
                return this.$store.state.campaniesLists
            },
            filtCampanies() {
                return this.searchInArray(this.campaniesLists, this.searchText)
            }
        }
        
    }
</script>

<style scoped>
.table-body{
  

}
</style>