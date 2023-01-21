<template>
    <div>
        <div class="container-flex">
            <div>
                <p><b>Identifiant Unique</b> : {{ stock.uuid }}</p>
                <p><b></b> : {{ stock.name }}</p>
                <p><b>Désignation</b> : {{ stock.id }}</p>
            </div>
            <div>
                <select name="" id="" v-model="category_id">
                    <option value=""></option>
                    <option :value="categorie.id" v-for="categorie in categories" :key="categorie.id">
                        {{ categorie.name}}
                    </option>
                </select>
            </div>
            <div>
                <input type="text" v-model="textSearch" placeholder="Rechercher !!!">
            </div>
            <div>
                <button @click="addCategory">Ajouter une Category</button>
                <button @click="addProduct">Ajouter un produit</button>
            </div>
            
        </div>
        
        <div>
            <add-category :addCategory="isAddCategory" @close="addCategory"/>
            <add-product :addProduct="isAddProduct" :categories="categories" @close="closeProductModal"/>
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
                        <tr v-for="item in filteredProducts" :key="item.id">
                            
                            <td>{{ item.id }}</td>
                            <td> <b>{{ item.category.name }}</b> </td>
                            <td> {{ item.name}} </td>
                            <td> {{ item.code_product}} </td>
                            <td> {{ item.marque}} </td>
                            <td> {{ item.unite_mesure}} </td>
                            <td> <b>{{ item.quantite}}</b> </td>
                            <td> {{ item.quantite_alert}} </td>
                            <td> {{ item.price}} </td>
                            <td> {{ item.price_max}} </td>
                            <td> {{ item.price_min}} </td>
                            <td></td>
                            <td>
                              <button @click="addProductStock(item)">In</button>
                              <button>Out</button>
                              <button @click="addLot(item)">lots</button>
                              <button @click="deleteProduct(item)">
                            <i class='fa fa-trash'></i>
                              Delete</button>
                            </td>
                            
                            
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div>
       <add-quantite-stock :selectProduct="selectProduct"  v-if="isAddProductStock" @close="addProductStock"/> 
        
        <add-lot :selectProduct="selectProduct" :isAddLot="isAddLot"  v-if="selectProduct" @close="addLot"/>
        </div>
    </div>
</template>

<script>
import AddCategory from './categories/AddCategory.vue';
import AddLot from './lots/AddLot.vue';
import AddProduct from './products/AddProduct.vue';
import AddQuantiteStock from './products/AddQuantiteStock.vue';
export default {
    components: { AddCategory, AddProduct, AddQuantiteStock, AddLot },
    data(){
        return{
            isAddCategory: false,
            isAddProduct: false,
            stock: {},
            products : [],
            category_id : "",
            textSearch : "",
            isAddProductStock : false,
            selectProduct : null,
            isAddLot : false,
            
        }
    },
    watch:{
        stock(val){
            this.getProducts(this.$route.params.id)
        },
        category_id(val){
            this.getProducts(this.$route.params.id, val)
        }
    },
    mounted(item){
        this.get();
        
    },
    methods: {
       async deleteProduct(item){
        
            const { value: result } = await this.confirmDelete()
            if (result) {
                this.deleteData("products/" + item.id)
                    .then(result => {
                        this.get();
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }

           
        },
        closeProductModal(){
            this.isAddProduct = !this.isAddProduct
            this.get();
        },
        addLot(item){
            this.isAddLot = !this.isAddLot
            this.selectProduct = item
        },
        addProductStock(item){
            this.isAddProductStock = !this.isAddProductStock;
            this.selectProduct = item
            this.get();
        },
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
                this.products = response.data.data
            })
            .then(error => {
                console.log(error)
            })
        }
    },
    computed:{
        categories(){
            return this.stock.categories
        },
        filteredProducts(){
            return this.searchInArray(this.products, this.textSearch)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>