<template>
    <div>
        <table>
            <thead>
                <tr>
                <th>#</th>
                <th>CAISSE DE </th>
                <th>Status</th>
                <th>Montant ( FBU)</th>
                <th>Dernier activité</th>
                </tr>
            </thead>
            <tbody>
            <tr v-for="caisse in caisses">
            <td>{{ caisse.id }}</td>
            <td>{{ caisse?.user?.name }}</td>
            <td>{{ caisse.is_active }}</td>
            <td>{{ caisse.montant }}</td>
            <td>{{ caisse.updated_at }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    mounted(){
        this.get();
    },
    methods:{
        get(){
            this.getData("caisses")
            .then(response => {
                this.$store.commit('setStateData', {
                    key : 'caisses',
                    value: response.data
                })
            });
        }
    },
    computed:{
        caisses(){
            return this.$store.getters.fetchData('caisses')
        }
    }
    
}
</script>

<style lang="scss" scoped>

</style>