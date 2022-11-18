<template>
    <div>
    <h1>Stock Detail</h1>
    <button @click="addCategory">Ajouter une Category</button>
    <button>Ajouter un produit</button>
    <div>
    <add-category :addCategory="isAddCategory" @close="addCategory"/>
    </div>
    <div>
    {{ stock }}
    </div>
    </div>
</template>

<script>
import AddCategory from './categories/AddCategory.vue';
    export default {
  components: { AddCategory },
        data(){
            return{
                isAddCategory: false,
                stock: []
            }
        },
        mounted(){
            this.get();
        },
        methods: {
            addCategory(){
                this.isAddCategory = !this.isAddCategory
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
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>