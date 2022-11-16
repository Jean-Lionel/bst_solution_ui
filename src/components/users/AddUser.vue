<template>
    <div>
        <modal-component :modalActive="modalActive" @close="close">
            <div>
                <form action="" @submit.prevent="saveUser">
                    <div>
                        <label for=""> name </label>
                        <input type="text" v-model="form.name" />
                    </div>
                    
                    <div>
                        <label for=""> first_name </label>
                        <input type="text" v-model="form.first_name" />
                    </div>
                    
                    <div>
                        <label for=""> last_name </label>
                        <input type="text" v-model="form.last_name" />
                    </div>
                    
                    <div>
                        <label for=""> telephone </label>
                        <input type="text" v-model="form.telephone" />
                    </div>
                    <div>
                        <label for=""> description </label>
                        <input type="text" v-model="form.description" />
                    </div>
                    <div>
                        <label for=""> email </label>
                        <input type="text" v-model="form.email" />
                    </div>
                    
                    <div>
                        <label for=""> password </label>
                        <input type="text" v-model="form.password" />
                    </div>
                    <div>
                    <button type="submit">Enregitrer</button>
                    </div>
                </form>
            </div>
        </modal-component>
    </div>
</template>

<script>
import ModalComponent from '../global/ModalComponent.vue'
export default {
    components: { ModalComponent },
    data() {
        return{
            modalActive : true,
            form: {
                name : "",
                first_name : "",
                last_name : "",
                telephone : "",
                description : "",
                is_active : "",
                email : "",
                password : "",
            }
        }
    },
    methods: {
        close() {
            this.modalActive = false
            this.$emit('close')
        },
        saveUser() {
            
        }
    }
    
}
</script>

<style lang="scss" scoped>

</style>