<template>
    <div>

    <add-user v-if="isAddUser"  @close="addUser"/>
    <h4>Liste des utilisateurs</h4>
    
    <div class="table_containner">
        <input type="text" v-model="searchText">
        <button @click="searchInDB">ok</button>
        <button @click="addUser">Ajouter un utilisateur</button>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nom et Prénom</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in filterUsers" :key="user.id" >
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>

                <td>
                </td>

                <button @click="deleteUser(user.id)" title="Effacer" class="">
                    <i class='fa fa-trash'></i>
                </button>
                <button @click="showDetail(user.id)" class="">
                    <i class='fa fa-eye'></i>
                
                </button>
                <button @click="showDetail(user.id)" class="">
                    <i class="fa fa-edit"></i>
                </button>
                <button @click="showDetail(user.id)" class="">
                    <i class="fa fa-ban"></i>
                    </button>
               
                </tr>
            </tbody>
            
        </table>
        </div>
    </div>
</template>

<script>
import AddUser from './AddUser.vue';
export default {
  components: { AddUser },
    data(){
        return {
            searchText : "",
            isAddUser : false,
        }
    },
    mounted(){
        this.get();
    },
    methods: {
        addUser(){
            this.isAddUser = !this.isAddUser;
        },
        searchInDB(){
            this.get("users?q="+ this.searchText);
        },
        get(url="users") {
            this.getData(url)
            .then(resp =>{
                //console.log(resp.data)
                this.$store.state.usersLists = resp
            }).catch(err =>{
                console.log(err.response.statusText)
            })
        },
        deleteUser(id){
            alert('To do')
        },
        showDetail(id) {
            alert('Todo')
        }
    },
    computed: {
        usersLists (){
            return this.$store.state.usersLists?.data
        } ,
        filterUsers() {
            return this.searchInArray(this.usersLists, this.searchText)
        }
        
    }
}
</script>

<style lang="scss" scoped>

</style>