
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
        async confirmDelete(title, message, btnConfirm) {
         return  await this.$swal({
                title: title ?? 'Are you sure?',
                text: message ?? "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: btnConfirm ?? 'OK !'
            })

        },
        showDeleteConfirmation() {
            this.$swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
        },
        errorAlert(message) {
            this.$swal.fire(
                        'Error',
                        message ?? "Erreur !!!",
                        'error'
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