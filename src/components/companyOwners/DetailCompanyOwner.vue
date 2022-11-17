<template>
<div> 
<button @click="showModal">Ajouter une entreprise</button>
<add-company :modalActive="modalActive" @close="showModal"/>
  <div>
    {{ company }}
  </div>
  
    </div>
</template>
    
<script>
import AddCompany from '../company/AddCompany.vue';
export default {
  components: { AddCompany },
    data() {
        return {
            company: {},
            modalActive : false,
        }
    },
    mounted(){
        this.get()
    },
    methods: {
        get(){
            this.getData(`company_owners/${ this.$route.params.id}`)
                .then((result) =>{
                    this.company = result.data
                })
                .catch((error) =>{
                    console.error(error)
                });
        },
        showModal(){
            this.modalActive = !this.modalActive
            this.get()
        }
    }
}
</script>
    
<style lang="scss" scoped>

</style>