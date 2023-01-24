<template>
    <div class="container">
        <loading v-if="isLoading"/>
        <div class="">
            <input v-model="searchText" type="search" placeholder="Search..." id="search-input">
            <button type="submit" id="search-button" @click="searchDatabase">Search</button>
        </div>
        <div class="vente">
            <div class="cart-liste">
                <div class="cart-container" v-for="lot in products" :key="lot.id" 
                >
                    <product-cart :lot="lot"   />
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
import SearchListSelect from './SearchListSelect.vue'
import VenteCart from './VentePart.vue'

export default {
    components: {
        ProductCart, VenteCart,
        SearchListSelect
    },
    data(){
        return {
            searchText : "",
            isLoading : false,
            selectedCountry : ""
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
            // Trie du plus grands a plus petit 
            return this.$store.state.fetchData.products.sort((a, b) => (a.quantite < b.quantite) ? 1 : ((b.quantite < a.quantite) ? -1 : 0));
        },
        products() {
            return this.searchInArray(this.listeProducts, this.searchText)
        }
    }
}
</script>

<style  scoped>
#search-input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    outline: none;
    width: 55%;
    margin-right: 10px;
}

#search-button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

#search-button:hover {
    background-color: #3e8e41;
}
.container{
    padding: 0 10px 0 20px;
}
.container-input{
    text-align: center;
}
.vente{
    display: grid;
    grid-template-columns: 2fr 1fr;
    width: 60wv;
}
.cart-liste{
    display: flex;
    justify-content: space-arround;
    gap: 10px;
    flex-wrap: wrap;
    padding: 10px 0px;
    overflow: auto;
    height: 450px;
}
.vent-part{
    width: 100%;
}
</style>