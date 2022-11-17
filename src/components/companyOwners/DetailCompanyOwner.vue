<template>
    <div>
    <button>Ajouter une entreprise</button>
  <div>
    {{ company }}
  </div>
  
    </div>
</template>

<script>
export default {
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