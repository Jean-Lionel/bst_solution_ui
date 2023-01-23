<template>
    <div v-show="addProduct">
        
        <modal-component :modalActive="addProduct" @close="$emit('close')">
            
            <h1>Ajouter un Produit</h1>
            <form action="" @submit.prevent="saveProduct">
                
                <div>
                    <label for="name">Nom du produit</label>
                    <input type="text" v-model="form.name" required> 
                </div>
                <div>
                    <label for="name">Code du Produit</label>
                    <input type="text" v-model="form.code_product" > 
                </div>
                <div>
                    <label for="name"> Marque</label>
                    <input type="text" v-model="form.marque" > 
                </div>
                <div>
                    <label for="category_id">Catégorie </label>
                    <select name="" id="" v-model="form.category_id">
                        <option value=""></option>
                        <option v-for="category in categories" :key="category.id" :value="category.id">
                            {{ category.name}}
                        </option>
                    </select>
                </div>
                <div>
                    <label for="name">Unité de Mesure</label>
                    <input type="text" v-model="form.unite_mesure" required> 
                </div>
                <div>
                    <label for="name">Quantite</label>
                    <input type="number" v-model="form.quantite" > 
                </div>
                <div>
                    <label for="name">Quantite Minimum</label>
                    <input type="number" v-model="form.quantite_alert" > 
                </div>
                <div>
                    <label for="name">Price </label>
                    <input type="number" v-model="form.price"> 
                </div>
                <div>
                    <label for="name">Date d'expiration </label>
                    <input type="date" v-model="form.date_expiration"> 
                </div>
                <div>
                    <label for="name">Description </label>
                    <textarea name="" id="" cols="30" rows="10" v-model="form.description"></textarea>
                </div>
                <div>
                    <button type="submit">Enregistrer</button>
                </div>
                
            </form>
            <div>
            {{ response }}
            </div>
            <div class="error">
                {{ errors }}
            </div>
        </modal-component>
        
    </div>
</template>

<script>
import ModalComponent from '../../global/ModalComponent.vue'
export default {
    components: { ModalComponent },
    props: ["addProduct", "categories"],
    data(){
        return{
            form: {
                name : "",
                code_product : "",
                marque : "",
                unite_mesure : "",
                quantite : "",
                quantite_alert : "",
                price : "",
                date_expiration : "",
                description : "",
                category_id : "",
                
            },
            errors : [],
            response : null
        }
    },
    methods: {
        saveProduct() {
            console.log(this.form)
            this.postData("products", this.form)
            .then(response =>{
                this.form = {}
                this.$emit("close")
               
            })
            .catch(error =>{
                this.errors = error.response
            })
        },

    }
}
</script>

<style  scoped>
form{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0 10px;
}
</style>