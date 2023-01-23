<template>
    <div>
        <div class="ui vertical segment">
            <div class="flexbox">
                <div class="flex-content">
                    <div>
                        <model-list-select :list="clients" option-value="id" :custom-text="optionDisplayText"
                            v-model="selectedClient" placeholder="select item" @searchchange="printSearchText">
                        </model-list-select>
                    </div>
                </div>
                <div class="flex-result">
                  
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ModelListSelect } from "vue-search-select"
export default {
    data() {
        return {
            animations: [],
            clients: [],
            selectedClient: "",
            searchText2: "",
        }
    },
    watch:{
        selectedClient(val) {
            this.$emit('selectClient', val)
        }
    },
    created() {
        this.searchClients()
    },
    methods: {
        printSearchText(searchText) {
            this.searchText2 = searchText
        },
        searchClients(){
            if (this.clients.length === 0){
                this.getData('clients')
                    .then(response => {
                        this.clients = response.data
                    })
                    .catch(error => {
                        console.error(error)
                    })
            }
        },
        optionDisplayText(item) {
            return `${ item?.id } - ${ item.customer_name } - ${ item.telephone}`
        },
    },
    components: {
        ModelListSelect,
    },
}
</script>
