<template>
    <div>
        <div class="table_containner">
        <input type="text" v-model="searchText" placeholder="Rechercher ici">
        <table>
        <thead>
        <tr>
            <th>#</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, i) in campaniesLists?.data?.data">
        <td><b>{{item.id}}</b></td>
        <td>{{ item.tp_name }}</td>
        <td>{{ item.tp_type }}</td>
        <td>{{ item.tp_TIN }}</td>
        <td>{{ item.tp_address_privonce }}</td>
        <td>{{ item.tp_address_commune }}</td>
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
                searchText: searchText
            }
        },
        watch:{
            searchText(val,last) {
                this.$store.state.campaniesLists = this.searchInArray(this.campaniesLists, val);
            }
        },
        mounted(){
            this.get()
        },
        methods:{
            get() {
                this.getData("companies")
                .then((response) =>{
                    this.$store.state.campaniesLists = response.data
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
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>