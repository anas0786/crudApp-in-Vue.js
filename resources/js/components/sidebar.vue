<template>
    <ul class="sidebar navbar-nav">
        <li class="nav-item active">
            <router-link to="/" class="nav-link">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span>
           </router-link>
        </li>
        <li class="nav-item dropdown">
        </li>

        <li class="nav-item">
            <router-link to="/post-create" class="nav-link">
                <i class="fas fa-fw fa-table"></i>
                <span>Create Post</span></router-link>
        </li>
    </ul>
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

    export default {

        
    }

</script>
