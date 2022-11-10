<template>
    <div>
        <h1>Liste des chefs d'entreprises</h1>
        
        <button @click="modalActive = true">Ajouter Un Entreprise</button>
        
        <modal-component :modalActive="modalActive" @close="modalActive = !modalActive">
            <add-form/>
        </modal-component>
        <div class="table_containner">
        
            <table  class="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Titre</th>
                        <th>Status</th>
                        <th>Telephone</th>
                        <th>Email</th>
                        <th>Adresse</th>
                        <th>nationalite</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="entreprise in chefsEntreprise.data">
                        <td>{{ entreprise.id }}</td>
                        <td>{{ entreprise.first_name }} </td>
                        <td>{{ entreprise.last_name }} </td>
                        <td>{{ entreprise.title }} </td>
                        <td>{{ entreprise.status }} </td>
                        <td>{{ entreprise.telephone_mobile }} </td>
                        <td>{{ entreprise.telephone }} </td>
                        <td>{{ entreprise.email }} </td>
                        <td>{{ entreprise.address }} </td>
                        <td>{{ entreprise.nationality }} </td>
                        <td>{{ entreprise.description }} </td>
                        <td><button @click="deleteEntreprise(entreprise.id)">Effacer</button></td>
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
           
        }
    },
    mounted(){
        this.fetchData()
    },
    methods:{
        fetchData() {
            this.axios.get("/company_owners",{
                
            })
            .then(resp => {
                    this.$store.state.chefsEntreprise = resp.data.data
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
        }
    }
}
</script>

<style lang="scss" scoped>
.table{
    width: 100%;
    border-collapse: collapse;
    
}
.table_containner{
    width: 100vw;
    overflow-x: scroll;
}
tr{
    border-bottom: 2px solid black;
}
td{
    text-align: left;
    padding-left: 10px;
}
</style>