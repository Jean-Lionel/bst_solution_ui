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
                    <input type="text" v-model="form.code_product" required> 
                </div>
                <div>
                    <label for="name"> Marque</label>
                    <input type="text" v-model="form.marque" required> 
                </div>
                <div>
                    <label for="category_id">Catégorie</label>
                    <select name="" id="" v-model="form.category_id">
                        <option value=""></option>
                        <option v-for="category in categories" :key="category.id" v-bind="category.id">
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
                    <input type="text" v-model="form.quantite" required> 
                </div>
                <div>
                    <label for="name">Quantite Minimum</label>
                    <input type="text" v-model="form.quantite_alert" required> 
                </div>
                <div>
                    <label for="name">Price </label>
                    <input type="number" v-model="form.price" required> 
                </div>
                <div>
                    <label for="name">Date d'expiration </label>
                    <input type="text" v-model="form.date_expiration" required> 
                </div>
                <div>
                    <label for="name">Description </label>
                    <textarea name="" id="" cols="30" rows="10" v-model="description"></textarea>
                </div>
                <div>
                    <button type="submit">Enregistrer</button>
                </div>
                
            </form>
            
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
            errors : []
        }
    },
    methods: {
        saveProduct() {
            this.postData("products", this.form)
            .then(response =>{
                this.emit("close")
            })
            .catch(error =>{
                this.errors = error.response.data
            })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>