<template>
    <div>
    <model-list-select :list="produits" option-value="name" option-text="name" v-model="selectedProduct"
        placeholder="select item" @searchchange="searchProduct">
    </model-list-select>
    <search-multi-select/>

</div>
</template>

<script>
import { ModelListSelect, MultiSelect } from "vue-search-select"
import SearchMultiSelect from './SearchMultiSelect.vue'
export default {
    props:{
        produits :{
            type : Array,
            required : true,
            default : [],
        }
    },
    components: { ModelListSelect, SearchMultiSelect, MultiSelect },
    data() { 
        return{
            countries : [],
            selectedProduct : "",
        }},
        watch:{
            selectedProduct(val){
                console.log(val)
            }
        },
        methods: { 
            searchProduct(x){
                console.log(x)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>