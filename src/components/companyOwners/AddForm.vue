<template>
    <div  class="add-form">
        <h4>Création du Nouvel Chef d'entreprise</h4>
        <form action="" @submit.prevent="saveInformation">
            <div>
                <label for="">Nom</label>
                <input type="text" v-model="form.first_name" />
                <span>{{ errors?.first_name }}</span>
            </div>
            <div>
                <label for="">Prénom</label>
                <input type="text" v-model="form.last_name" />
                <span>{{ errors?.first_name }}</span>
            </div>
            <div>
                <label for="" > Titre </label>
                <input type="text" v-model="form.title" />
                <span>{{ errors?.title }}</span>
            </div>
            <div>
                <label for="" > Status </label>
                <input type="text" v-model="form.status" />
                <span>{{ errors?.status }}</span>
            </div>
            
            <div>
                <label for="" > Telephone 1 </label>
                <input type="text" v-model="form.telephone_mobile" />
                <span>{{ errors?.telephone_mobile }}</span>
            </div>
            <div>
                <label for="" > Telephone 2</label>
                <input type="text" v-model="form.telephone" />
                <span>{{ errors?.telephone }}</span>
            </div>
            <div>
                <label for="" > Email </label>
                <input type="text" v-model="form.email" />
                <span>{{ errors?.email }}</span>
            </div>
            <div>
                <label for="" > Address </label>
                <input type="text" v-model="form.address" />
                <span>{{ errors?.address }}</span>
            </div>
            <div>
                <label for="" > Nationalité </label>
                <input type="text" v-model="form.nationality" />
                <span>{{ errors?.nationality }}</span>
            </div>
            
            <div>
                <label for="" > Déscription </label>
                <input type="text" v-model="form.description" />
                <span>{{ errors?.description }}</span>
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
            },
            errors : {

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
                    console.error(err.response.data.errors)
                    this.errors = err.response.data.errors
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
.add-form div span{
    color: tomato;
}
</style>