<template>
    <div>
    <h1>Je suis un Millionnaire</h1>
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
                this.getData('clients')
                    .then(response =>{

                    })
                    .catch(error =>{
                        console.log(error)
                    })
            }
        }
        
    }
</script>

<style  scoped>

</style>