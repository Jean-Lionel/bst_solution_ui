<template>
    <div>
        <div>
            <button @click="addStock">Ajouter un stock</button>
            <div>
                <add-stock  :addStock="isAddStock" @close="addStock"/>
                            </div>
                            
                        </div>
                        {{ company }}
                    </div>
                </template>
                
                <script>
                import AddStock from '../stocks/AddStock.vue';
                export default {
                    components: { AddStock },
                    data(){
                        return{
                            company : {},
                            isAddStock : false
                        }
                    },
                    mounted(){
                        this.get();
                    },
                    methods: {
                        addStock(){
                            this.isAddStock = !this.isAddStock 
                        },
                        get(){
                            
                            this.getData(`companies/${this.$route.params?.id}`)
                            .then(result => {
                                this.company = result.data
                            })
                            .catch(error => {
                                console.error(error)
                            })
                        }
                    }
                    
                }
                </script>
                
                <style lang="scss" scoped>

</style>