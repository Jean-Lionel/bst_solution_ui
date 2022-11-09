<template>
    <div>
        <h2 @mousemove="increments"> Hover {{ count }} Times</h2>
    </div>
</template>

<script>
import counterMixins from "../../mixins/counter"
export default {
    mixins: [counterMixins]
}
</script>

<style lang="scss" scoped>

</style>