<template>
<div> 
<button @click="showModal">Ajouter une entreprise</button>
<add-company :modalActive="modalActive" @close="showModal"/>
  <div class="detail_company">
    <div>
    {{ company }}
    </div>
    <div>
    {{ company.companies }}
    </div>
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
    
<style  scoped>
.detail_company{
    display: flex;
    justify-content: center;
}
</style>