<template>
    <div>
        <loading v-if="isLoading" />
        
        <div>
            <div>
                <input type="text" v-model="searchText">
                <button @click="addFournisseur">Ajouter un Fournisseur</button>
            </div>
            
            <div class="table_containner">
                <table>
                    <thead>
                        <tr>
                            <th><b>#</b></th>
                            <th>Nom</th>
                            <th>Nif</th>
                            <th>Téléphone</th>
                            <th>Email</th>
                            <th>R.c</th>
                            <th>Adresse</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="fournisseur in fetchFournisseurs" :key="fournisseur.id">
                            <td>
                                <b>{{ fournisseur.id}}</b>
                            </td>
                            <td>{{ fournisseur.name }}</td>
                            <td>{{ fournisseur.nif }}</td>
                            <td>{{ fournisseur.telephone }}</td>
                            <td>{{ fournisseur.email }}</td>
                            <td>{{ fournisseur.registre_commerce }}</td>
                            <td>{{ fournisseur.addresse }}</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div>
         <add-fournisseur :isAddFournisseur="isAddFournisseur" v-if="isAddFournisseur" @close="addFournisseur" />
        </div>
    </div>
</template>

<script>
import AddFournisseur from './AddFournisseur.vue';
export default {
  components: { AddFournisseur },
    data(){
        return{
            isLoading : false,
            searchText : "",
            isAddFournisseur : false,
            
        }
    },
    watch:{
        
    },
    mounted(){
        this.get("fournisseurs")
    },
    methods: {
        addFournisseur(){
            this.isAddFournisseur = !this.isAddFournisseur;
        },
        get(url){
            this.getData(url)
            .then(response =>{
                this.$store.state.fetchData.fournisseurs = response.data
               
            })
            .catch(error =>{
                console.error(error)
            })
        }
        
    },
    computed:{
        fournisseurs() {
            return this.$store.state?.fetchData?.fournisseurs
        },
        fetchFournisseurs() {
            return this.searchInArray(this.fournisseurs, this.searchText) 
        }
    }
}
</script>

<style lang="scss" scoped>

</style>