<template>
    <div>
<div class="header-table">
    <div>
        <h4>Liste des Entreprises</h4>
        
        <i class="fa fa-free-code-camp" aria-hidden="true"></i>
    </div>
    <div>
        <input type="text" v-model="searchText"/>
        <button @click="searchinDatabase">Rechercher</button>
    </div>
    
    <div class="text-right">
        <button @click="modalActive = true" class="add-btn">Ajouter Un Entreprise</button>
    </div>
</div>
<modal-component :modalActive="modalActive" @close="modalActive = !modalActive">
    <add-form @close="close"/>
</modal-component>
<div class="table_containner">
    
    <loading v-if="isLoading" />
    <table  class="text-left" v-if="!isLoading">
        <thead>
            <tr>
                <th>#</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Titre</th>
                <th>Status</th>
                <!-- <th>Telephone</th>
                    <th>Email</th>
                    <th>Adresse</th>
                    <th>nationalite</th>
                    <th>Description</th> -->
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="entreprise in filteredEntreprise">
                    <td><b>{{ entreprise.id }}</b></td>
                    <td>{{ entreprise.first_name }} </td>
                    <td>{{ entreprise.last_name }} </td>
                    <td>{{ entreprise.title }} </td>
                    <td>{{ entreprise.status }} </td>
                    <!-- <td>{{ entreprise.telephone_mobile }} </td>
                        <td>{{ entreprise.telephone }} </td>
                        <td>{{ entreprise.email }} </td>
                        <td>{{ entreprise.address }} </td>
                        <td>{{ entreprise.nationality }} </td> 
                        <td>{{ entreprise.description }} </td>-->
                        <td>
                            <!-- <button @click="deleteEntreprise(entreprise.id)" title="Effacer" class="">
                                <i class='fa fa-trash'></i>
                            </button> -->
                            <button @click="showDetail(entreprise.id)" title="Détail" class="">
                                <i class='fa fa-eye'></i>
                                
                            </button>
                            <button @click="update(entreprise.id)" title="Modifier" class="">
                                <i class="fa fa-edit"></i>
                            </button>
                            
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
        
<script>
    import ModalComponent from '../global/ModalComponent.vue';
    import AddForm from './AddForm.vue';
    
    export default {
        components: { ModalComponent, AddForm },
        data() {
            return{
                modalActive: false,
                searchText : "",
                isLoading: false,
            }
        },
        mounted(){
            this.get()
        },
        methods:{
            close(){
                this.modalActive = !this.modalActive
                this.get()
            },
            showDetail(id){
                this.$router.push(`company_owners/${id}`)
            },
            searchinDatabase(){
                this.get("company_owners?q=" + this.searchText)
            },
            get(url ="company_owners") {
                if (this.$store.state.chefsEntreprise.length == 0){
                    this.isLoading = true
                }
                  
                this.getData(url)
                .then(resp => {
                    this.$store.state.chefsEntreprise = resp.data.data
                    this.isLoading = false
                })
                .catch(err => {
                    console.error(err)
                })
            },
            async deleteEntreprise(id) {
                const {value: result} = await this.confirmDelete()
                if (result){
                    this.axios.delete("/company_owners/" + id)
                    .then(resp => {
                        this.chefsEntreprise = resp.data
                        this.showDeleteConfirmation()
                    })
                    .catch(err => {
                        console.error(err)
                    })
                    this.fetchData()
                    
                }
                
                
            }
        },
        computed:{
            chefsEntreprise() {
                return this.$store.state.chefsEntreprise
            },
            filteredEntreprise() {
                return this.searchInArray(this.chefsEntreprise, this.searchText)
            }
        }
    }
</script>
    
<style  scoped>
    .header-table{
        display:flex;
        justify-content:right;
    }
    
</style>