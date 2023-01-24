<template>
    <div class="caisse">
    <h4>Caisse</h4>
    <div>
        <p>Le {{ new Date().toLocaleString() }}</p>
        <p class="text-right">  <b>500 000</b> FBU</p>
    </div>
    <hr>
    <div>
        <p>CAISSE TOTAL</p>
        <p  class="text-right">  <b>500 000</b> FBU</p>
    </div>
   
    </div>
</template>

<script>
    export default {
        
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