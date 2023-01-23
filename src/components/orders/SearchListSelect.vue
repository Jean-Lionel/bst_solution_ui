<template>
    <div>
        <model-list-select :list="countries" option-value="code" option-text="name" v-model="selectedCountry"
        placeholder="select item" @searchchange="searchCountry">
    </model-list-select>
    
</div>
</template>

<script>
import { ModelListSelect } from "vue-search-select"
import { ajaxFindCountry } from "../../data/countriesApi"
export default {
    components: { ModelListSelect },
    data() { return{
        countries : []
    }},
    methods: { 
        searchCountry(searchText) {
            this.searchText = searchText
            ajaxFindCountry(searchText).then(response => {
                this.countries = response
            })
        },
    }
}
</script>

<style lang="scss" scoped>

</style>