<template>
    <div>
    <button @click="increments"> Clicked {{count}} Times</button>
    </div>
</template>

<script>
import counterMixins from "../../mixins/counter"
    export default {
    mixins: [counterMixins],
    data(){
        return {
            count : 100
        }
    }
    }
</script>

<style lang="scss" scoped>

</style>