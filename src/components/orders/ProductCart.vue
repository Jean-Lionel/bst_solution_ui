<template>
    <div class="cart" v-for="product in lot.products" :key="product.id" >
        <div><b>{{ product.name }}</b> </div>
        <div class="cart-flex">
            <span>Cat.</span>
            <span> <b>{{ product.category.name }}</b></span>
        </div>
        <div class="cart-flex">
            <span>Lot N°</span>
            <span><b>{{ lot.name }}</b></span>
        </div>
        <div class="cart-flex">
            <span>Qté </span>
            <span>{{ lot.quantite }}</span>
        </div>
        <div class="cart-flex">
            <span>Prix U</span>
            <span>{{ lot.prix_unitaire ?? product.price }} FBU</span>
        </div>
        <div class="cart-btn">
            <button v-if="lot.quantite > 0" @click="addProduct(product, lot)">Ajouter</button>
        </div>
    </div>
</template>

<script>
    export default {
    props: ["lot"],
    methods: {
        addProduct(product, lot){
            let p ={
                uuid: (lot.id +"_"+ product.id),
                product_id : product.id,
                name : product.name,
                // Recuperer le prix du produit ou le prix du lot
                price: lot.prix_unitaire ?? product.price,
                lot_id: lot.id,
                lot_name: lot.name,
                lot_quantite: lot.quantite,
                quantity : 1,
                prix_total : 0
            }
            // this.$store.state.cart.choosedProduct.push(p)
            this.$store.commit("addCartItem", p)
        }
    }
    }
</script>

<style  scoped>
.cart {
    width: 250px;
    border: 1px solid var(--primary);
    padding: 5px;
    border-radius: 6px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}

.cart-btn {
    text-align: right;
}

.cart-flex {
    display: flex;
    justify-content: space-between;
}
</style>