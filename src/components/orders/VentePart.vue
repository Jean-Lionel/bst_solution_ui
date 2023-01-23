<template>
    <div class="vente-part">
        <div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Lot</th>
                        <th>Déscription</th>
                        <th>P.U</th>
                        <th>Qté</th>
                        <th>Montant Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(el, index) in cartList" :key="index">
                        <td>{{ ++index }}</td>
                        <td>{{el.lot_name}}</td>
                        <td>{{ el.name }}</td>
                        <td>{{ el.price }}</td>
                        <td>
        
                            <input id="input_qte"  type="number" @keyup="changeQuantite(el.uuid)" :value="el.quantity">
                        </td>
                        <td>{{ el.prix_total }}</td>
                        <td> <button @click="removeItem(el.uuid)">X</button> </td>
                    </tr>
                    <tr class="text-right">
                        <td colspan="5"><b>PRIX HORS TVA</b></td>
                        <td  colspan="2"><b>{{ numberFormat(prixHorsTVA,2) }}</b></td>
                    </tr>
                    <tr  class="text-right">
                        <td colspan="5" ><b>TVA</b></td>
                        <td colspan="2"><b>{{ numberFormat(prixTVA,2) }}</b></td>
                    </tr>
                    <tr  class="text-right">
                        <td colspan="5" ><b>TOTAL</b></td>
                        <td  colspan="2"> <b>{{ numberFormat(priceTotal,2) }}</b></td>
                    </tr>
                    <tr  class="text-right">
                        <td colspan="3" >
                        <search-client @selectClient="selectClient"/>
                        
                        </td>
                        <td >
                            <button @click="clearCart">Effacer</button>
                        </td>
                        
                        <td class="text-right"><button @click="valideVente">Valider</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <AddClient v-show="isAddClient" @close="addClient" @clientSave="clientEnregistrer" />
    </div>
</template>

<script>
import AddClient from '../clients/AddClient.vue';
import SearchClient from './SearchClient.vue';

export default {
    components: { AddClient, SearchClient },
    data(){
        return{ 
            isAddClient : false,
            client : null,
        }
    },
    methods: {
        selectClient(a){
            console.log(a)
            this.client = a
        },
        clientEnregistrer(a){
            this.client = a
        },
        addClient(){
            this.isAddClient   =  !this.isAddClient   
        },
        async valideVente(){
            let products = this.$store.state.cart.choosedProduct;
            if(products.length < 1){
                this.errorAlert("Choissisez au moins un Element ")
            }else{
                const { value: result } = await this.confirmDelete("Vente", "Voulez-vous effectuer cetter Opération")
                if(result){
                    const data = {}
                    data["products"] = this.$store.state.cart.choosedProduct
                    data["client"] = this.client
                    data["orders"] = {
                        amount_tax : this.priceTotal,
                        tax : this.prixTVA,
                        amount : this.prixHorsTVA,
                        total_quantity : 0
                    }
                    this.postData('ventes', data)
                    .then(result =>{
                        this.$emit("saveFinished", result)
                        this.successAllert()
                        this.$store.state.cart.choosedProduct = [];
                        this.$router.push("/order_history")
                    })
                    .catch(err =>{
                        console.log(err.response.data)
                        this.errorAlert(err.response.data.message)
                    })
                }
            }
        },
        clearCart(){
            this.$store.state.cart.choosedProduct =[]
        },
        removeItem(uuid){
            this.$store.commit("removeCartItem", uuid);
        },
        changeQuantite(uuid){
            const v = event.target.value * 1
            let index = this.$store.state.cart.choosedProduct.findIndex(el => el.uuid === uuid);
            const p = this.$store.state.cart.choosedProduct[index]
            p.quantity = v
            p.prix_total = v * p.price
        }
    },
    computed:{
        cartList() {
            return this.$store.state.cart.choosedProduct
        },
        prixHorsTVA() {
            const sum = this.cartList.reduce((c, v) => c + (v.price * v.quantity), 0)
            console.log(this.cartList)
            return sum
        },
        prixTVA() {
            return this.prixHorsTVA * this.$store.state.tva / 100
        },
        priceTotal() {
            return this.prixTVA + this.prixHorsTVA
        }
    }
}
</script>

<style  scoped>
#input_qte{
    color: black;
    padding: 0;
    margin: 4px;
    width: 50px;
}
th, td{ 
    padding: 2px 6px;
}
tr{ 
    border-bottom: 1px solid rgb(64, 64, 64);
}
.vente-part{
    background-color: #ddffcf;
    box-shadow: 2px 4px 2px 1px rgba(134, 15, 15, 0.2);
    border: 1px solid var(--primary);
    border-radius: 6px;
}
.vente-part table{
    overflow: scroll;
}
</style>