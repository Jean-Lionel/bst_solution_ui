<template>
    <div>
        <div class="container-flex">
            <div>
                <p><b>Identifiant Unique</b> : {{ stock.uuid }}</p>
                <p><b>Désignation</b> : {{ stock.name }}</p>
                <p><b>Désignation</b> : {{ stock.id }}</p>
            </div>
            <div>
            <input type="text" placeholder="Rechercher !!!">
            </div>
            <div>
                <button @click="addCategory">Ajouter une Category</button>
                <button @click="addProduct">Ajouter un produit</button>
            </div>
            
        </div>
        
        <div>
            <add-category :addCategory="isAddCategory" @close="addCategory"/>
            <add-product :addProduct="isAddProduct" :categories="categories" @close="addProduct"/>
        </div>
        
        <div>
            <div class="table_containner">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Categorie</th>
                            <th>Désignation</th>
                            <th>Code de produit</th>
                            <th>Marque</th>
                            <th>Unite de Mesure</th>
                            <th>Quantinte</th>
                            <th>Qté d'alerte</th>
                            <th>Prix par default</th>
                            <th>Quantinte Max</th>
                            <th>Quantinte Min</th>
                            
                            <th>Déscription</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in products.data" :key="item.id">
                            
                            <td>{{ item.id }}</td>
                            <td> <b>{{ item.category.name }}</b> </td>
                            <td> {{ item.name}} </td>
                            <td> {{ item.code_product}} </td>
                            <td> {{ item.marque}} </td>
                            <td> {{ item.unite_mesure}} </td>
                            <td> {{ item.quantite}} </td>
                            <td> {{ item.quantite_alert}} </td>
                            <td> {{ item.price}} </td>
                            <td> {{ item.price_max}} </td>
                            <td> {{ item.price_min}} </td>
                            <td> {{ item.description}} </td>
                            <td>
                            Action
                            </td>
                            
                            
                        </tr>
                    </tbody>
                </table>
            </div>
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
            stock: {},
            products : [],
            
        }
    },
    watch:{
        stock(val){
            this.getProducts(this.$route.params.id)
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
        getProducts(stock_id, category_id) {
            this.getData(`products?stock_id=${ stock_id ?? ""}&category_id=${ category_id ?? ""}`)
            .then(response => {
                console.log(response)
                this.products = response.data
            })
            .then(error => {
                console.log(error)
            })
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