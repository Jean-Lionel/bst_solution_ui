<template>
    <div>
        <modal-component :modalActive="modalActive" @close="$emit('close')">
            <form action="" @submit.prevent="saveInformation">
                <h5>Ajouter du produit</h5>
                <p class="container-flex-between"><span>Catégorie :  </span> <span> <b>{{ selectProduct.name }}</b> </span></p>
                <p class="container-flex-between"><span>Nom du Produit :</span> <span> <b>{{ selectProduct.name }}</b> </span></p>
                
                <div>
                    <label for="">Fournisseur {{}}</label>
                    
                    <select name="" id="" v-model="form.fournisseur_id">
                        <option value=""></option>
                        <option :value="f.id" v-for="f in fournisseurs" :key="f.id">
                            {{ f.name }}
                            
                        </option>
                    </select>
                    <!--  <button @click.prevent="addLot">Ajouter</button> -->
                </div>
                <div>
                    <label for="">Numéro de Lot </label>
                    <select v-model="form.lot_id">
                        <option></option>
                        <option  v-for="lot in lots" :value="lot.id" :key="lot.id" >{{lot.name}}</option>
                    </select>
                    <!--  <button @click.prevent="addLot">Ajouter</button> -->
                </div>
                <div>
                    <label for="">Quantité</label>
                    <input type="number" v-model="form.quantite">
                </div>
                <div>
                    <label for="">Prix d'achat unitaire</label>
                    <input type="number" v-model="form.price_achat">
                </div>
                <!-- <div>
                    <label for="">Prix de vente unitaire</label>
                    <input type="number" v-model="form.prix_vente">
                </div> -->
                <div>
                    <label for="">Date d'achat</label>
                    <input type="date" v-model="form.date_achat">
                </div>
                <div>
                    <label for="">Unite de Mésure</label>
                    <select name="" id="" v-model="form.unite_mesure">
                        <option value=""></option>
                        <option :value="unite" v-for="unite in unite_mesures" :key="unite.id">
                            {{ unite.name }}
                        </option>
                    </select>
                </div>
                <div>
                    <button>Enregistrer</button>
                </div>
                <div class="error">
                    {{ error }}
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
                prix_vente : "0",
                unite_mesure : "",
                fournisseur_id : "",
                detail : "",
                date_achat : "",
                lot_id : "",
                product_id: this.selectProduct.id,
            },
            error: [],
            
        }
    },
    mounted(){
        this.getUniteMesure()
        this.getFournisseur()
        this.getLots()
    },
    
    methods: {
        saveInformation(){
            this.postData("achat_products", this.form)
            .then(resp => {
                console.log(resp)
                this.error = []
                this.$emit('close')
                
            })
            .catch(error => {
                console.log(error);
                this.error = error.response.data
            })
        },
        getFournisseur(){
            this.getData("fournisseurs")
            .then(resp => {
                this.$store.state.fetchData.fournisseurs = resp.data
            })
            .catch(error => {
                console.log(error);
            })
            
        },
        getUniteMesure(){
            this.getData("unite_mesures")
            .then(resp =>{
                this.$store.state.fetchData.unite_mesures = resp.data
            })
            .catch(error=>{
                console.log(error);
            })
        },
        addLot(){
            alert("Ajouter de lot!");
        },
        getLots() {
            this.getData("lot_products?product_id=" + this.selectProduct.id)
                .then(resp => {
                    console.log("Lot recus ",resp.data)
                    this.$store.state.fetchData.lots = resp.data
                })
                .catch(err => {
                    console.log(err)
                })
        },
        
    },
    computed:{
        fournisseurs(){
            return this.$store.state.fetchData.fournisseurs;
        },
        unite_mesures(){
            return this.$store.state.fetchData.unite_mesures;
        },
        lots(){
            return this.$store.state.fetchData?.lots;
        }
        
    }
    
}
</script>

<style lang="scss" scoped>

</style>