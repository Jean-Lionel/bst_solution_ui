<template>
    <div>
        <h4>Liste des utilisateurs</h4>

        <div class="table_containner">
        
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>#</th>
                    <th>#</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in usersLists?.data?.data" :key="user.id" >
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
               
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