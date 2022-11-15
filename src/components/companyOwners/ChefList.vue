<template>
    <div>
        <h1>Liste des chefs d'entreprises</h1>
        
        <button @click="modalActive = true">Ajouter Un Entreprise</button>
        
        <modal-component :modalActive="modalActive" @close="modalActive = !modalActive">
            <add-form/>
        </modal-component>
        <div class="table_containner">
        
            <table  class="text-left" >
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
                    <tr v-for="entreprise in chefsEntreprise.data">
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
                        <button @click="deleteEntreprise(entreprise.id)" class=""><i class="fa-solid fa-trash"></i></button>
                        <button @click="showDetail(entreprise.id)" class="">Detail</button>
                        <button @click="showDetail(entreprise.id)" class="">Modifier</button>
                        <button @click="showDetail(entreprise.id)" class="">Arreter</button>
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
        showDetail(data){

            alert("Todo ")
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

<style  scoped>
.table_containner{
    border: 1px solid rgb(225, 217, 217);
    border-radius: 10px;
    margin: 10px 0px;
}
table{
    width: 100%;
    border-collapse: collapse;
    
    
}

tr{
    border-bottom: 1px solid rgb(231, 228, 228);
}

td{
    padding: 6px 10px;
}
th{
    text-transform: uppercase;
    padding: 6px 10px;
    font-size: 0.8rem;
}
</style>