<template>
    <div>
        <modal-component :modalActive="isAddFournisseur" @close="$emit('close')">
            
            <form action="" @submit.prevent="saveFournisseur">
                <div>
                    <h4>Ajouter un Fournisseur</h4>
                </div>
                <div>
                    <label for="name">Nom du Fournisseur</label>
                    <input type="text" class="" v-model="form.name">
                </div>
                
                <div>
                    <label for="addresse">Adresse</label>
                    <input type="text" class="" v-model="form.addresse">
                </div>
                
                <div>
                    <label for="email">Email</label>
                    <input type="email" class="" v-model="form.email">
                </div>
                
                <div>
                    <label for="telephone">Téléphone</label>
                    <input type="text" class="" v-model="form.telephone">
                </div>
                <div>
                    <label for="nif">Nif</label>
                    <input type="text" class="" v-model="form.nif">
                </div>
                <div>
                    <label for="registre_commerce">Registre Commerce</label>
                    <input type="text" class="" v-model="form.registre_commerce">
                </div>
                <div>
                    <button type="submit">Enregistrer</button>
                </div>   
            </form>
            <div class="error">
            {{error}}
            </div>
        </modal-component>
        
    </div>
</template>

<script>
import ModalComponent from '../global/ModalComponent.vue'
export default {
    components: { ModalComponent },
    props: ["isAddFournisseur"],
    data(){
        return {
            form: {
                name : "",
                addresse : "",
                email : "",
                telephone : "",
                registre_commerce : "",
                nif : "",
            },
            error : [],
        }
    },
    methods: {
        saveFournisseur(){
            this.postData("fournisseurs", this.form)
            .then(resp =>{
                console.log(resp)
                this.form ={};
                this.$emit("close")
            })
            .catch(err =>{
                this.error = err.response.data
                console.log(err)
            })
        }
    }
    
}
</script>

<style lang="scss" scoped>

</style>