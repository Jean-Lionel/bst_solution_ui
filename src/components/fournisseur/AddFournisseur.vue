<template>
    <div>
    <modal-component :modalActive="modalActive" @close="$emit('close')">

    <form action="" @submit.prevent="saveFournisseur">
    </form>
    </modal-component>

    </div>
</template>

<script>
import ModalComponent from '../global/ModalComponent.vue'
    export default {
  components: { ModalComponent },
  data(){
    return {
        form: {
            name : "",
            addresse : "",
            email : "",
            telephone : "",
            registre_commerce : "",
            nif : "",
        }
    }
  },
  methods: {
      saveFournisseur(){
        this.postData("fournisseurs", this.form)
            .then(resp =>{
                console.log(resp)
            })
            .catch(err =>{
                console.log(err)
            })
      }
  }
        
    }
</script>

<style lang="scss" scoped>

</style>