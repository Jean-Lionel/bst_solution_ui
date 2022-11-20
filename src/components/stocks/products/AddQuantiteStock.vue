<template>
    <div>
        <modal-component :modalActive="modalActive" @close="$emit('close')">
            <form action="">
                <h5>Ajouter du produit</h5>
                <p class="container-flex-between"><span>Catégorie :  </span> <span> <b>{{ selectProduct.name }}</b> </span></p>
                <p class="container-flex-between"><span>Nom du Produit :</span> <span> <b>{{ selectProduct.name }}</b> </span></p>
                
                <div>
                    <label for="">Fournisseur</label>
                    <input type="text" />
                    <!--  <button @click.prevent="addLot">Ajouter</button> -->
                </div>
                <div>
                    <label for="">Numéro de Lot</label>
                    <input type="text" />
                    <!--  <button @click.prevent="addLot">Ajouter</button> -->
                </div>
                <div>
                    <label for="">Quantité</label>
                    <input type="text">
                </div>
                <div>
                    <label for="">Prix d'achat unitaire</label>
                    <input type="text">
                </div>
                <div>
                    <label for="">Unite de Mésure</label>
                    <input type="text">
                </div>
                <div>
                </div>
                
            </form>
        </modal-component>
    </div>
</template>

<script>
import ModalComponent from '../../global/ModalComponent.vue'
export default {
    props: ["selectProduct"],
    components: { ModalComponent },
    data(){
        return {
            modalActive : true,
            form :{ 
                price_achat : "",
                quantite : "",
                prix_total : "",
                prix_vente : "",
                unite_mesure : "",
                detail : "",
                date_achat : "",
            }
        }
    },
    methods: {
        addLot(){
            alert("Ajouter de lot!");
        }
    }
    
}
</script>

<style lang="scss" scoped>

</style>