<template>
    <div v-show="addStock">
        
        <modal-component :modalActive="addStock" @close="close">
        <h4>Nouveau Stock</h4>
            <form @submit.prevent="saveStock">
                <div>
                    <label for="name">Nom du stock</label>
                    <input type="text" v-model="form.name">
                </div>
                <div>
                    <label for="name">Déescription</label>
                    <textarea v-model="form.description"></textarea>
                </div>
                <div v-if="errors" class="error">
                {{ errors }}
                </div>
                <div>
                <button type="submit" class="">Enregistrer</button>
                </div>
            </form>
        </modal-component>
    </div>
</template>

<script>
import ModalComponent from '../global/ModalComponent.vue'
export default {
  components: { ModalComponent },
    props:["addStock"],
    data() {
        return{
            form: {
                name : "",
                description : "",
                companie_id: this.$route.params?.id,
            },
            errors:null
        }
    },
    methods: {
        saveStock(){
            this.postData("stocks", this.form)
                .then(response=>{
                    console.log(response)
                    this.$emit("close")
                })
                .catch(error=>{
                    console.log(error.response.data.errors)
                    this.errors = error.response.data.errors
                })

        },
        close() {
            this.$emit('close')
        }
    }
    
}
</script>

<style lang="scss" scoped>


</style>