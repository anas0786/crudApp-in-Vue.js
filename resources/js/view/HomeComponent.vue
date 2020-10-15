<template>
<div>
    <navbar></navbar>
    <sidebar></sidebar>   
    </div>
</template>

<script>
    import navbar from '../components/navbar.vue';
    import sidebar from '../components/sidebar.vue';


    export default {

        data() {
            return {
                email: '',
                password: '',
            };
        },
        components: {
         navbar,
         sidebar,
        }
    }

</script>
