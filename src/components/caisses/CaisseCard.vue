<template>
    <div class="caisse">
    <h4>Caisse</h4>
    <div>
        <p>Le {{ new Date().toLocaleString() }}</p>
        <p class="text-right">  <b>{{ montant_journalier }} </b> FBU</p>
    </div>
    <hr>
    <div>
        <p>CAISSE TOTAL</p>
        <p  class="text-right">  <b>{{ my_operation.caisse_total }}</b> FBU</p>
    </div>
   
    </div>
</template>

<script>
    export default {
        mounted(){
            this.get()
        },
        methods:{
            get() {
                this.getData("my_operation")
                    .then(response =>{
                        this.$store.commit('setStateData',{
                            key: 'my_operation',
                            value: response.data
                        });
                    })
            }
        },
        computed:{
            my_operation(){
                return this.$store.getters.fetchData('my_operation')
            },
            montant_journalier(){
                let total = 0;
                if (this.my_operation?.montant_journalier?.length){
                    for (const op of this.my_operation.montant_journalier){
                        total += (op.montant * 1)
                    }
                }
                
                return total;
            }
        }
        
    }
</script>

<style  scoped>
.caisse div{
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.caisse{
    width: 100%;
    min-height: 50px;
    background-color: rgb(206, 190, 190);
    border-radius: 4px;
    box-shadow: inset;
    padding: 0 10px;
}
</style>