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
        searchInArray(array, searchText) {
            //Methode pour faire une rechercher dans le tableau
            return array.filter(
                e => JSON.stringify(e)
                         .toLowerCase()
                         .includes(searchText.toLowerCase())
            )

        }

    }
}