<template>
    <div>
        
        <add-user v-if="isAddUser"  @close="addUser"/>
        <h4>Liste des utilisateurs </h4>
        
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
                        <th>Entreprise</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in filterUsers" :key="user.id" >
                        <td>{{ user.id }}</td>
                        <td>{{ user.name }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.company.tp_name }}</td>
                        
                        <td style="display:flex; gap: 0 10px;">
                        <button @click="activeCaisse(user.id)">Activer la caisse</button>
                            <button @click="handleDelete(user.id)" title="Effacer EXE" class="">
                                <i class='fa fa-trash'></i>
                            </button>
                            <button @click="showDetail(user.id)" class="">
                                <i class='fa fa-eye'></i>
                                
                            </button>
                            <button @click="updateUser(user.id)" class="">
                                <i class="fa fa-edit"></i>
                            </button>
                            <button @click="blockUser(user.id)" class="">
                                <i class="fa fa-ban"></i>
                            </button>
                        </td>
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
        activeCaisse(user_id) {
            this.postData("caisses", { user_id: user_id })
                .then(res => {
                    this.get();
                })
        },
        async handleDelete(id){
            const { value: result } = await this.confirmDelete()
            if(result){
                this.deleteData(`users/${ id }`)
                .then(resp => {
                    this.get();
                    this.showDeleteConfirmation()
                    
                })
                .catch(err => {
                    console.error(err)
                })
            }
        },
        addUser(){
            this.get()
            this.isAddUser = !this.isAddUser;
        },
        searchInDB(){
            this.get("users?q="+ this.searchText);
        },
        get(url="users") {
            this.getData(url)
            .then(resp =>{
                //console.log(resp.data)
                this.$store.state.usersLists = resp?.data
            }).catch(err =>{
                console.log(err.response.statusText)
            })
        },
        showDetail(id) {
            this.$router.push(`/users/${id}`)
        }
    },
    computed: {
        usersLists (){
            return this.$store.state.usersLists
        } ,
        filterUsers() {
            return this.searchInArray(this.usersLists, this.searchText)
        }
        
    }
}
</script>

<style lang="scss" scoped>

</style>