<template>
    <div>
        <modal-component :modalActive="modalActive" @close="close">
            <div>

            <div v-if="error">
            {{ error }}
            </div>
                <form action="" @submit.prevent="saveUser">
                    <div>
                        <label for=""> name </label>
                        <input type="text" v-model="form.name" required />
                    </div>
                    
                    <div>
                        <label for=""> first_name </label>
                        <input type="text" v-model="form.first_name" required />
                    </div>
                    
                    <div>
                        <label for=""> last_name </label>
                        <input type="text" v-model="form.last_name" required />
                    </div>
                    
                    <div>
                        <label for=""> telephone </label>
                        <input type="text" v-model="form.telephone" />
                    </div>
                   
                    <div>
                        <label for=""> email </label>
                        <input type="email" v-model="form.email" />
                    </div>
                    
                    <div>
                        <label for=""> password </label>
                        <input type="text" v-model="form.password" />
                    </div>

                    <div>
                        <label for=""> description </label>
                        <textarea name="" id=""  v-model="form.description"></textarea>
                        
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
            },
            error:null,

        }
    },
    methods: {
        close() {
            this.modalActive = false
            this.$emit('close')
        },
        saveUser() {
            this.postData("users", this.form)
                .then((response) =>{ 
                    if(response.data.success){
                        this.form = {}

                        this.successAllert({
                            body : "Utilisateur bien ajouté"
                        })
                        this.$emit('saved')

                        this.close() 
                    }
                })
                .catch(err =>{
                  //  console.error(err.response?.data?.data)

                    this.error = err.response
                })
            
        }
    }
    
}
</script>

<style lang="scss" scoped>

</style>