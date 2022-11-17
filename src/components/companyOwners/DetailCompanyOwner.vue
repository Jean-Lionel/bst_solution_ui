<template>
    <div>
    <button>Ajouter une entreprise</button>
    <add-company/>
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
            company: {}
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
        }
    }
}
</script>

<style lang="scss" scoped>

</style>