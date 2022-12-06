<template>
    <div class="container">
        <loading v-if="isLoading"/>
        <div class="container-input">
            <input type="text" v-model="searchText" placeholder="Rechercher !!!">
            <button @click="searchDatabase">Ok</button>
        </div>
        <div class="vente">
            <div class="cart-liste">
                <div class="cart-container" v-for="lot in products" :key="lot.id">
                    <product-cart :lot="lot" />
                </div>
            </div>
            <div class="vent-part">
             <vente-cart @saveFinished="get"/>
            </div>
        </div>
    </div>
</template>

<script>
import ProductCart from './ProductCart.vue'
import VenteCart from './VentePart.vue'
export default {
    components: {
        ProductCart, VenteCart
    },
    data(){
        return {
            searchText : "",
            isLoading : false,
        }
    },
    mounted(){
       
        this.get();
    },
    methods: {
        searchDatabase(){
            alert("Searching...");
        },
        get() {
         
            if (this.$store.state.fetchData.products == 0){
              
                this.isLoading = true;
            }
                
            
            this.getData("ventes")
            .then(resp=>{
                this.$store.state.fetchData.products = resp.data
            })
            .catch(err=>{
                console.log(err);
            })
            .finally(()=>{
                this.isLoading = false;
            })
        }
    },
    computed:{
        listeProducts() {
            return this.$store.state.fetchData.products
        },
        products() {
            return this.searchInArray(this.listeProducts, this.searchText)
        }
    }
}
</script>

<style  scoped>
.container{
    padding: 0 10px 0 20px;
}
.container-input{
    text-align: center;
}
.vente{
    display: flex;
    margin: 1px 30px 0 0;
    width: 60wv;
}
.cart-liste{
    display: flex;
    justify-content: space-arround;
    gap: 10px;
    flex-wrap: wrap;
    padding: 10px 20px;
}
.vent-part{
    width: 100%;
}
</style>