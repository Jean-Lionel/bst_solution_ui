<template>
    <div>
        <modal-component :modalActive="isAddLot" @close="$emit('close')">
            
            
            <div>
                <div class="card-header">
                    <div>
                        <span>Nom du produit</span>
                        <span>{{ selectProduct.name }}</span>
                    </div>
                    <div>
                        <span>Code </span>
                        <span>{{ selectProduct.code_product }}</span>
                    </div>
                    <div>
                        <span>Marque </span>
                        <span>{{ selectProduct.code_product }}</span>
                    </div>
                    <div>
                        <span>Catégorie </span>
                        <span>{{ selectProduct.category.name }}</span>
                    </div>
                </div>
                
                <div>
                    <h5>Lots disponibles</h5>
                    <div>
                        <form action="" @submit.prevent="saveLot">
                            <div>
                                <label for="name">Désignation (Numéro de Lot)</label>
                                <input type="text" id="name" v-model="form.name" />
                            </div>
                            <div>
                                <label for="date_expiration">Date d'éxpiration</label>
                                <input type="date" id="date_expiration" v-model="form.date_expiration" />
                            </div>
                            <div class="text-right">
                            <button type="submit"> <i class="fa fa-plus-circle"></i> Ajouter</button>
                            </div>
                            <div class="error">
                            {{ errors }}
                            </div>
                        </form>
                    </div>
                   
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nom du lot</th>
                                <th>Prix Unitaire</th>
                                <th>Date d'expiration</th>
                                <th>Quantité disponible</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        
                            <tr v-for="(lot,i) in lot_products" :key="lot.id">
                            <td>{{ i +1}}</td>
                            <td>{{ lot.name }}
                            </td>
                            <td>{{ lot.prix_unitaire }}
                            <input type="text"
                            v-model="lotPrice"
                             v-if="i === selectedRow"
                            @keyup.enter="saveValueMontant"
                            
                              />
                            </td>
                            <td>{{ lot.date_expiration }}</td>
                            <td>{{ lot.quantite }} </td>
                            <td>
                            <button @click="editElement(lot.prix_unitaire, i)">
                                <i class="fa fa-edit"></i>
                            </button>
                            </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </modal-component>
        
    </div>
</template>

<script>
import ModalComponent from '../../global/ModalComponent.vue'
export default {
    components: { ModalComponent },
    props: ['selectProduct', 'isAddLot'],
    data(){
        return {
            form: {
                name: "",
                date_expiration: "",
                product_id: this.selectProduct.id
            },
            lot_products : [],
            errors : [],
            selectedRow : -1,
            lotPrice : 0,
        }
    },
    updated() { 
        this.get();
    },
    mounted() { 
        this.get();
    },
    methods: {
        saveValueMontant(){
            alert('Ok je suis cool')
        },
        editElement(m,i){
            this.lotPrice = m
            this.selectedRow = i
        },
        saveLot(){
            this.errors = []
            this.postData("lot_products", this.form)
              .then(response => {
                console.log(response)
                  this.get()
              })
              .catch(error => {
                console.error(error)
                  this.errors = error.response.data.errors
              })
        },
        
        get(){
            this.getData("lot_products?product_id=" + this.selectProduct.id)
                .then(response => {
                    this.lot_products = response.data
                    console.log("Lots", response)
                })
                .catch(error =>{
                    console.error(error)
                    
                }
                    
                )
        }
    },
    computed:{
       
    }
    
}
</script>

<style  scoped>
 th,td {
    padding: 0 10px;
}
.text-right{
    display: flex;
    justify-content: flex-end;
}
.card-header div {
    display: flex;
    justify-content: space-between;
    
}
.card-header span {
    display: inline-block;
    padding: 5px 10px;
}
</style>