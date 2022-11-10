// example-vue-component.vue
<template>
    <button @click="showAlert">Hello world</button>
</template>

<script>
export default {
    methods: {
        showAlert() {
            // Use sweetalert2
            this.$swal({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            });
        },
    },
};
</script>