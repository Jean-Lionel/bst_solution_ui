<template>
    <div>
        <ModalComponent :modalActive="addCategory" @close="$emit('close')">
            <div>
                <h5>Ajouter une catégory</h5>
                
                <form action="" @submit.prevent="saveCategory">
                    <div>
                        <label for="name">Dénomination</label>
                        <input type="text" v-model="form.name" />
                    </div>
                    <div>
                        <label for="name">Déscription</label>
                        <input type="text" v-model="form.description" />
                    </div>
                    <div>
                        <button>Enregistrer</button>
                    </div>
                    
                    <div class="error">
                        {{ errors }}
                    </div>
                </form>
            </div>
        </ModalComponent>
    </div>
</template>

<script>
import ModalComponent from '../../global/ModalComponent.vue';

export default {
    props: ["addCategory"],
    components: { ModalComponent },
    data(){
        return{
            form: {
                name : "",
                description : "",
                companie_id: this.$route.params.id,
            },
            errors: []
        }
    },
    methods: {
        saveCategory(){
            this.postData("categories", this.form)
            .then(resp =>{
                console.log(resp.data)
            })
            .catch(err =>{
                this.errors = err.response.data.errors
            })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>