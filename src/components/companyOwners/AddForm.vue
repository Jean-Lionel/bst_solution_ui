<template>
    <div  class="add-form">
        <form action="" @submit.prevent="saveInformation">
            <div>
                <label for="">Nom</label>
                <input type="text" v-model="form.first_name" />
            </div>
            <div>
                <label for="">Prénom</label>
                <input type="text" v-model="form.last_name" />
            </div>
            <div>
                <label for="" > Titre </label>
                <input type="text" v-model="form.title" />
            </div>
            <div>
                <label for="" > Status </label>
                <input type="text" v-model="form.status" />
            </div>
            
            <div>
                <label for="" > Telephone 1 </label>
                <input type="text" v-model="form.telephone_mobile" />
            </div>
            <div>
                <label for="" > Telephone 2</label>
                <input type="text" v-model="form.telephone" />
            </div>
            <div>
                <label for="" > Email </label>
                <input type="text" v-model="form.email" />
            </div>
            <div>
                <label for="" > Address </label>
                <input type="text" v-model="form.address" />
            </div>
            <div>
                <label for="" > Nationalité </label>
                <input type="text" v-model="form.nationality" />
            </div>
            
            <div>
                <label for="" > Déscription </label>
                <input type="text" v-model="form.description" />
            </div>
            <div>
                <button type="submit">Enregistrer</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from "axios"
export default {
    data(){
        return {
            form:{
                first_name : "",
                last_name : "",
                title : "",
                status : "",
                telephone_mobile : "",
                telephone : "",
                email : "",
                address : "",
                nationality : "",
                description : "",
            }
        }
    },
    methods:{
        saveInformation(){
           
            axios.post("http://127.0.0.1:8000/api/company_owners",
                this.form, {
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
.add-form div{
    display: grid;
    grid-template-columns : 1fr 1fr 1fr;
    margin-top: 5px;
}
.add-form div label{
    display: block;
    text-align: left !important;
    width: 100%;
}
.add-form div input{
    display: block;
    width: 100%;
    
}
</style>