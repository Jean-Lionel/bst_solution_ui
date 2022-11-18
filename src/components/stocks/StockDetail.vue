<template>
    <div>
    <h1>Stock Detail</h1>
    <button @click="addCategory">Ajouter une Category</button>
    <button @click="addProduct">Ajouter un produit</button>
    <div>
    <add-category :addCategory="isAddCategory" @close="addCategory"/>
    <add-product :addProduct="isAddProduct" :categories="categories" @close="addProduct"/>
    </div>
    <div>
    {{ stock }}
   
    </div>
    </div>
</template>

<script>
import AddCategory from './categories/AddCategory.vue';
import AddProduct from './products/AddProduct.vue';
    export default {
  components: { AddCategory, AddProduct },
        data(){
            return{
                isAddCategory: false,
                isAddProduct: false,
                stock: [],
            }
        },
        mounted(){
            this.get();
        },
        methods: {
            addProduct(){
                this.isAddProduct = !this.isAddProduct
                this.get();
            },
            addCategory(){
                this.isAddCategory = !this.isAddCategory

                this.get();
            },
            get(){
                this.getData("stocks/"+this.$route.params.id)
                    .then(response =>{
                        console.log(response)
                        this.stock = response.data
                    })
                    .then(error =>{
                        console.log(error)
                    })
            },
            getProducts(id) {
                
            }
        },
        computed:{
            categories(){
                return this.stock.categories
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>