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
                        </form>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Numéro de lot</th>
                                <th>Quantité disponible</th>
                                <th>Date d'expiration</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
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
                date_expiration: ""
            }
        }
    },
    methods: {
        saveLot(){
            this.postData("lot_products", this.form)
              .then(response => {
                console.log(response)
              })
              .catch(error => {
                console.error(error)
              })
        }
    }
    
}
</script>

<style  scoped>
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