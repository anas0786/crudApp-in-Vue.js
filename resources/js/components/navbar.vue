<template>
    <nav class="navbar navbar-expand navbar-dark bg-dark static-top">
     <router-link to="/" class="navbar-brand mr-1">
       Blog  </router-link>

        <button class="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" href="#">
            <i class="fas fa-bars"></i>
        </button>

        <!-- Navbar Search -->
        <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">

        </form>

        <!-- Navbar -->
        <ul class="navbar-nav ml-auto ml-md-0">
            <li class="nav-item dropdown no-arrow">
                <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-user-circle fa-fw"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                    <a class="dropdown-item" href="#"></a>
                    <button class="dropdown-item" href="#" data-toggle="modal" v-on:click="logout"
                        data-target="#logoutModal">Logout</button>
                </div>
            </li>
        </ul>
    </nav>
</template>
<style scoped>
    @import '/../vendor/fontawesome-free/css/all.min.css';
    @import '/../vendor/datatables/dataTables.bootstrap4.css';
    @import '/../css/sb-admin.css';

</style>
<script scoped>
    @import '/../vendor/jquery/jquery.min.js';
    @import '/../vendor/bootstrap/js/bootstrap.bundle.min.js';
    @import '/../vendor/jquery-easing/jquery.easing.min.js';
    @import '/../vendor/chart.js/Chart.min.js';
    @import '/../vendor/datatables/jquery.dataTables.js';
    @import '/../vendor/datatables/dataTables.bootstrap4.js';
    @import '/../js/sb-admin.min.js';
    @import '/../js/demo/datatables-demo.js';
    @import '/../js/demo/chart-area-demo.js';

</script>
<script>
    import axios from 'axios';


    export default {

        methods: {
            logout: function (event) {
                axios.post('/api/logout',{
                }, {
                        headers: {
                             'Authorization': `Bearer ${sessionStorage.getItem("access_token")}` 
                        },
                    })
                    .then((response) => {
                       if(response.data.message=="Successfully logged out" & response.status==200)
                       {
                           sessionStorage.removeItem("access_token");
                           sessionStorage.removeItem("user_id");
                          this.$router.push('login');
                       }
                    }, (error) => {
                        console.log(error);
                    });
            }
        }

    }

</script>
