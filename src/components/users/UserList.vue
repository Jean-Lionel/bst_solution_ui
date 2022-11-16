<template>
    <div>
        <h4>Liste des utilisateurs</h4>

        <div class="table_containner">
        
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
                <tr v-for="user in usersLists?.data?.data" :key="user.id" >
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
export default {
    data(){
        return {
            
        }
    },
    mounted(){
        this.get();
    },
    methods: {
        get() {
            this.getData("users")
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
            return this.$store.state.usersLists
        } 
        
    }
}
</script>

<style lang="scss" scoped>

</style>