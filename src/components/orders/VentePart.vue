<template>
    <div class="vente-part">
        <h4>Hello Nous sommes en bonne santé</h4>
        <div>
            <table>
                <thead>
                </thead>
                <tbody>
                    <tr v-for="(el, index) in cartList" :key="index">
                        <td>{{ ++index }}</td>
                        <td>{{el.lot_name}}</td>
                        <td>{{ el.name }}</td>
                        <td>{{ el.price }}</td>
                        <td>
                            <input style="width:50px" type="number" @keyup="changeQuantite(el.uuid)" :value="el.quantity">
                        </td>
                        <td>{{ el.prix_total }}</td>
                        <td> <button @click="removeItem(el.uuid)">X</button> </td>
                    </tr>
                    <tr v-if="prixHorsTVA">
                        <td colspan="5"><b>PRIX HORS TVA</b></td>
                        <td><b>{{ prixHorsTVA }}</b></td>
                    </tr>
                    <tr v-if="prixTVA">
                        <td colspan="5"><b>TVA</b></td>
                        <td><b>{{ prixTVA }}</b></td>
                    </tr>
                    <tr v-if="priceTotal">
                        <td colspan="5"><b>TOTAL</b></td>
                        <td> <b>{{ priceTotal }}</b></td>
                    </tr>
                    <tr v-if="prixHorsTVA">
                        <td colspan="4"></td>
                        <td>
                            <button @click="clearCart">Effacer</button>
                            
                        </td>
                        <td><button @click="valideVente">Valider</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    
    components: {},
    methods: {
       async valideVente(){
            let products = this.$store.state.cart.choosedProduct;
            if(products.length < 1){
                this.errorAlert("Choissisez au moins un Element ")
            }else{
                const { value: result } = await this.confirmDelete("Vente", "Voulez-vous effectuer cetter Opération")
                if(result){
                    const data = this.$store.state.cart.choosedProduct
                    this.postData('ventes', data)
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
            this.$store.state.cart.choosedProduct[index].quantity = v
        }
    },
    computed:{
        cartList() {
            return this.$store.state.cart.choosedProduct
        },
        prixHorsTVA() {
            const sum = this.cartList.reduce((c, v) => c + (v.prix_total), 0)
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
.vente-part{
    background-color: #ddffcf;
    width: 40vw;
    box-shadow: 2px 4px 2px 1px rgba(134, 15, 15, 0.2);
    border: 1px solid var(--primary);
    border-radius: 6px;

}
.vente-part table{
    overflow: hidden;
}
</style>