<template>
    <div v-show="addProduct">
        
        <modal-component :modalActive="addProduct" @close="$emit('close')">
            {{ categories }} 
            <form action="" @submit.prevent="saveProduct">
            </form>
            
            <div class="error">
                {{ errors }}
            </div>
        </modal-component>
        
    </div>
</template>

<script>
import ModalComponent from '../../global/ModalComponent.vue'
export default {
    components: { ModalComponent },
    props: ["addProduct", "categories"],
    data(){
        return{
            form: {
                
            },
            errors : []
        }
    },
    methods: {
        saveProduct() {
            this.postData("products", this.form)
            .then(response =>{
                this.emit("close")
            })
            .catch(error =>{
                this.errors = error.response.data
            })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>