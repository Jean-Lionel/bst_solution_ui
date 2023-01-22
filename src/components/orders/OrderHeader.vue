<template>
    <div>
        <div class="text-right">
            <ul>
                <li><router-link to="/orders">Vente</router-link></li>
                <li><router-link to="/order_history">Historique de vente</router-link></li>
                <li><router-link to="/client_add">Client</router-link></li>
                <li><b>{{ currentTime  }}</b></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    watch:{

    },
    computed:{
        currentTime: () =>new Date().toLocaleString()
    }
}
</script>

<style  scoped>
ul{
    display: flex;
    justify-content: flex-end;
    list-style: none;
    gap: 0 20px;
}

</style>