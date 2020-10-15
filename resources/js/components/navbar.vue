<template>
    <nav class="navbar navbar-expand navbar-dark bg-dark static-top">

        <a class="navbar-brand mr-1" href="/">St.Jude’s High School</a>

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
                    <a href="" class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">Logout</a>
                </div>
            </li>
        </ul>
    </nav>
</template>
<style>
@import '/../vendor/fontawesome-free/css/all.min.css';
@import '/../vendor/datatables/dataTables.bootstrap4.css';
@import '/../css/sb-admin.css';
</style>
<script>
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



    import LoginController from '../Controllers/LoginController.js';

    export default {

        data() {
            return {
                errors: {
                    email: '',
                    password: ''
                },
                email: '',
                password: '',
            };
        },
    }

</script>
