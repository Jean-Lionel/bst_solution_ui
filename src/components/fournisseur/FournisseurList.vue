<template>
    <div>
    <loading v-if="isLoading" />

    <div>
    {{ fetchFournisseurs }}
    </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                isLoading : false,
                searchText : ""
                
            }
        },
        mounted(){
            this.get("fournisseurs")
        },
        methods: {
            get(url){
                this.isLoading = true
                this.getData(url)
                    .then(response =>{
                        this.$store.state.fetchData.fournisseurs = response.data
                        this.isLoading = false
                    })
                    .catch(error =>{
                        console.error(error)
                    })
            }

        },
        computed:{
            fournisseurs() {
                return this.$store.state?.fetchData?.fournisseurs
            },
            fetchFournisseurs() {
                return this.searchInArray(this.fournisseurs, this.searchText) 
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>