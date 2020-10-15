<template>
    <ul class="sidebar navbar-nav">
        <li class="nav-item active">
            <a class="nav-link" href="index.html">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span>
            </a>
        </li>
        <li class="nav-item dropdown">
        </li>
        <li class="nav-item">
            <a class="nav-link" >
             <i class="fas fa-fw fa-table"></i>
            <router-link to="/post-create"><span>Post</span></router-link>
               
                </a>
        </li>

        <li class="nav-item">
            <a class="nav-link" href="">
                <i class="fas fa-fw fa-table"></i>
                <span>Tag</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="">
                <i class="fas fa-fw fa-table"></i>
                <span>Stream</span></a>
        </li>
    </ul>
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
