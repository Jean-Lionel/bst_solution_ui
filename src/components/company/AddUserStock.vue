<template>
    <div class="addStockUser">
        <h1>Associer à un utilisateur</h1> 

        <model-list-select :list="users"

        option-value="id" option-text="name" v-model="selectedUser"
        placeholder="select item"
        
        ></model-list-select>
    </div>
</template>

<script>
import { ModelListSelect } from "vue-search-select"
    export default {
    components: { ModelListSelect },
        data(){
            return {
                selectedUser : "",
                users : []
            }
        },
        watch:{
            selectedUser(val){
                this.$emit('close')
            }
        },
        mounted(){
            this.initialize();
        },
        methods:{
            initialize() {
                this.getData('users')
                    .then(response => {
                        this.users = response.data                  
                     });
            }
        }
        
    }
</script>

<style  scoped>
.addStockUser{
    height: 400px;
    width: 400px;
}

</style>