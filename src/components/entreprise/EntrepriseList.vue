<template>
    <div>
        <h4>Liste des entreprises</h4>
    </div>
</template>

<script>
import axios from "axios"
export default {
    data(){
        return{

        }
    },
    mounted(){
        this.fetchData();
    },
    methods:{
        fetchData() {
            axios.get(this.$store.state.baseUrl + "/companies", {
                
            })
                 .then((response) =>{
                    console.log(response)
                 })
                 .catch((error) =>{
                    console.log(error)
                 })
        }
    }

    
}
</script>

<style lang="scss" scoped>

</style>