<template>
    <div class="vente-part">
        <h4>Hello Nous sommes en bonne santé</h4>
        
        <div>
           
            <table>
                <thead>
                </thead>
                <tbody>
                    <tr v-for="el in cartList">
                    <td>{{el.id}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    
    components: {},
    computed:{
        cartList() {
            return this.$store.state.cart.choosedProduct
        }
    }
}
</script>

<style  scoped>
.vente-part{
    background-color: rgb(171, 157, 157);
    width: 30vw;
    box-shadow: 2px 4px 2px 1px rgba(134, 15, 15, 0.2);
    border: 1px solid var(--primary);
    border-radius: 6px;
}
</style>