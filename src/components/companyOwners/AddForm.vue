<template>
    <div>
        <input type="text" v-model="form.first_name" />
        <input type="text" v-model="form.last_name" />
        <input type="text" v-model="form.title" />
        <input type="text" v-model="form.status" />
        <input type="text" v-model="form.telephone_mobile" />
        <input type="text" v-model="form.telephone" />
        <input type="text" v-model="form.email" />
        <input type="text" v-model="form.address" />
        <input type="text" v-model="form.nationality" />
        <input type="text" v-model="form.description" />
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            form:{
                first_name : "",
                last_name : "",
                title : "",
                status : "",
                telephone_mobile : "",
                telephone : "",
                email : "",
                address : "",
                nationality : "",
                description : "",
            }
        }
    }
    
}
</script>

<style lang="scss" scoped>

</style>