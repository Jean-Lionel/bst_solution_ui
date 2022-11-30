<template>
    <div>
        <loading v-if="isLoading"/>
        <div>
            <div class="cart-liste">
                <div class="cart-container" v-for="lot in    products " :key="lot.id">
                    <div class="cart" v-for="product in lot.products" :key="product.id">
                        <div><b>{{ product.name }}</b> </div>
                        <div class="cart-flex">
                            <span>Cat.</span>
                            <span> <b>{{ product.category.name}}</b></span>
                        </div>
                        <div class="cart-flex">
                            <span>Lot N°</span>
                            <span><b>{{ lot.name }}</b></span>
                        </div>
                        <div class="cart-flex">
                        <span>Qté </span>
                        <span>{{ lot.quantite}}</span>
                        </div>
                        <div class="cart-flex">
                        <span>Prix U</span>
                        <span>{{ lot.prix_unitaire }} FBU</span>
                        </div>
                        <div class="cart-btn">
                        <button>Ajouter</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>Part 2</div>
        </div>
    </div>
</template>

<script>
export default {
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
        get() {
            if (this.$store.state.fetchData.products == 0)
            this.isLoading = true;
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
.cart-liste{
    display: flex;
    justify-content: space-arround;
    gap: 10px;
    flex-wrap: wrap;
    padding: 10px 20px;
}
.cart{
    width: 250px;
    border: 1px solid var(--primary);
    padding: 5px;
    border-radius: 6px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}
.cart-btn{
    text-align: right;
}
.cart-flex{
    display: flex;
    justify-content: space-between;
}
</style>