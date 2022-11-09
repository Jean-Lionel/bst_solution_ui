<template>
    <div>
        <h1>Liste des chefs d'entreprises</h1>

        <table width="100" class="table">
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
            </tr>
        </tbody>
        </table>
    </div>
</template>

<script>
import axios from "axios";

    export default {
        data() {
             return{
                chefsEntreprise : []
             }
        },
        mounted(){
            this.fetchData()
        },
        methods:{
            fetchData() {
                axios.get("http://127.0.0.1:8000/api/company_owners",{
                    headers: {
                        "Accept": "application/json",
                        "Authorization": "Bearer 8|wawvTD9M8bzkZxFxQAF8xs21hTUyVFv0xTpLcq2X",
                    }
                })
                    .then(resp => {
                        this.chefsEntreprise = resp.data
                        console.log(resp.data)
                    })
                    .catch(err => {
                        console.error(err)
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>
.table{
    width: 100%;
    border-collapse: collapse;

}
</style>