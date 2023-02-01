<template>
    <div >
        <h2>Historique des opération du caisse </h2>
        <div class="table_containner">
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Utilisateur</th>
                    <th>Opération</th>
                    <th>Montant</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(operation, index) in caisses_detail">
                <td>{{ ++index }}</td>
                <td> {{ operation.user.name }}</td>
                <td> {{ operation.type_operations }}</td>
                <td> {{ operation.montant }}</td>
                <td> {{ operation.created_at }}</td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            caisses_detail : []
        }
    },
    mounted() {
        this.get();
     },
    methods: {
        get() {
            this.getData(`caisse_operations/${this.$route.params.id}`)
                .then(resp => {
                    this.caisses_detail = resp.data
                })
                ;
        }
    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>

</style>