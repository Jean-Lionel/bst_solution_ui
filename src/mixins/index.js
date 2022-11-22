
import axiosMethods from "./axiosMethods"

export default{
    mixins: [axiosMethods],
    data() {
        return {
            
        }
    },
    mounted() {
      
    },
    methods: {
        // Modal Confirmation delete
        async confirmDelete() {
         return  await this.$swal({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            })

        },
        showDeleteConfirmation() {
            this.$swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
        },
        successAllert() {
             this.$swal.fire(
                        'Success',
                        'Opération réussi !!',
                        'success'
                    )
        },
        searchInArray(arrayList, searchText) {
            //Methode pour faire une rechercher dans le tableau
            if(Array.isArray(arrayList) ){
                return arrayList.filter(
                e => JSON.stringify(e)
                         .toLowerCase()
                         .includes(searchText.toLowerCase())
            )
            }
            return arrayList
            

        }

    },
    computed:{
        fetchData() {
            return this.$store.state.fetchData;
        }
    }
}