<template>
    <div class="addStockUser">
        <h1>Associer à un utilisateur</h1> 
        
        <model-list-select :list="users"
        option-value="id" option-text="name" v-model="selectedUser"
        placeholder="select item"
        
        ></model-list-select>
        <button @click.prevent="saveData">Associer</button>
    </div>
</template>

<script>
import { ModelListSelect } from "vue-search-select"
export default {
    components: { ModelListSelect },
    props: ["stock_id"],
    data(){
        return {
            selectedUser : "",
            users : []
        }
    },
    watch:{
      
    },
    mounted(){
        this.initialize();
    },
    methods:{
        saveData() { 
            this.postData("user_stocks", {
                stock_id: this.stock_id,
                user_id: this.selectedUser
            }).then(response => {
                this.$emit('close')
            })
            .catch(error => {
                console.log(error)
            })
            
        },
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
    height: 200px;
    width: 400px;
}
</style>