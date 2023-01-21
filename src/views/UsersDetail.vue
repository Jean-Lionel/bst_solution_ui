<template>
    <div>
    <h1>Details de l'utilisateur id : {{ $route.params.id }}
     </h1>
    <div>
    <h1>{{ selectUser?.id }}</h1>
    <h1>{{ selectUser?.name }}</h1>
    <h1>{{ selectUser }}</h1>
    </div>
    </div>
   
</template>

<script>

    export default {
        data(){
            return{

            }
        },
        mounted() { 
            this.getOne()
        },
        methods: {
            getOne(){
                this.getData(`users/${ this.$route?.params?.id }`)
                    .then(resp =>{
                        this.$store.state.fetchData.userDetails = resp.data
                    })
                    .catch(err =>{
                        console.log(err)
                    });
            }
        },
        computed:{
            selectUser() {
                return this.$store.state.fetchData?.userDetails
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>