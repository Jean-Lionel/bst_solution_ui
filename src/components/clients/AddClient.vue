<template>
    <div class="ok">
        <modal-component :modalActive="true" @close="$emit('close')">
            <div>
                <h4>Ajout d'un Client</h4>
                <form action="" @submit.prevent="saveClient">
                    <div>
                        <label for="">NOM DU CLIENT</label>
                        <input type="text" v-model="form.customer_name">
                    </div>
                    <div>
                        <label for="">TELEPHONE</label>
                        <input type="text" v-model="form.telephone">
                    </div>
                    <div>
                        <label for="">NIF DU CLIENT</label>
                        <input type="text" v-model="form.customer_TIN">
                    </div>
                    <div>
                        <label for="">Adresse</label>
                        <input type="text" v-model="form.customer_address">
                    </div>
                    <div>
                    <label for="">Assujetti à la TVA </label>
                    <input type="checkbox" v-model="form.vat_customer_payer">
                    </div>
                    <div>
                        <label for="">description</label>
                        <textarea name="" id="" cols="30" rows="10" v-model="form.description"></textarea>
                    </div>

                    <div>
                    <button @click.prevent="$emit('close')">Fermer</button>
                    <button >Ajouter</button>
                    </div>
                </form>
            </div>
        </modal-component>
    </div>
</template>

<script>
import modalComponent from "../global/ModalComponent.vue"
export default {
    components: { modalComponent },
    data(){
        return {
            form: {
                customer_name : "",
                customer_TIN : "",
                customer_address : "",
                vat_customer_payer : "",
                telephone : "",
                description : "",
            }
        }
    },
    methods: {
        saveClient(){
            this.postData("clients", this.form)
                .then(response => {
                    this.$emit("clientSave", response.data?.data )
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
        }

    }
    
}
</script>

<style  scoped>
.ok{
    position: absolute;
    bottom: 0;
    top: 0;
    z-index: 10000;
}
</style>