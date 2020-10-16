<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="">
                   Blogs
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">

                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->

                        <li class="nav-item">
                              <router-link to="/" class="nav-link">
                           Login  
                            </router-link>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href=""></a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav><br>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">Register</div>

                        <div class="card-body">
                            <form  @submit="submitForm">
                            <div class="form-group row">
                                    <label for="email" class="col-md-4 col-form-label text-md-right">Name</label>
                                    <div class="col-md-6">
                                        <input id="name" type="text" class="form-control" name="name" value=""
                                             @keyup="name = $event.target.value"><br>
                                             <div v-if="errors.name" class="alert alert-danger">{{ errors.name }}</div>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                                    <div class="col-md-6">
                                        <input id="email" type="text" class="form-control" name="email" value=""
                                             @keyup="email = $event.target.value" ><br>
                                             <div v-if="errors.email" class="alert alert-danger">{{ errors.email }}</div>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="email" class="col-md-4 col-form-label text-md-right">Mobile Number</label>

                                    <div class="col-md-6">
                                        <input id="mobile" type="text" class="form-control" name="mobile" value=""
                                             @keyup="mobile = $event.target.value" ><br>   
                                             <div v-if="errors.mobile" class="alert alert-danger">{{ errors.mobile }}</div>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="password" class="col-md-4 col-form-label text-md-right">password</label>

                                    <div class="col-md-6">
                                        <input id="password" type="password" class="form-control" name="password"
                                             @keyup="password = $event.target.value"><br>
                                             <div v-if="errors.password" class="alert alert-danger">{{ errors.password }}</div>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <div class="col-md-6 offset-md-4">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" name="remember"
                                                id="remember"> Remember

                                            <label class="form-check-label" for="remember">
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group row mb-0">
                                    <div class="col-md-6 offset-md-4">
                                        <button type="submit" class="btn btn-primary btn-block">
                                            Sign Up
                                        </button>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Auth from '../container/AuthContainer.js';

    export default {

        data() {
            return {
                errors: {
                    email: '',
                    password: '',
                    mobile:'',
                    name:''
                },
                email: '',
                password: '',
                mobile:'',
                name:''
            };
        },
        methods: {
           submitForm: function (e) {
                var errors = Auth.signupValidation(this.password, this.email,this.name,this.mobile);
                if (Object.keys(errors).length == 0) {
                    (async () => {
                        let result = await Auth.signup(this.name,this.email, this.password,this.mobile);
                        if (result == true) {
                             this.$router.push('home');
                        } else {
                             this.errors = {}
                            let errors = result;
                            for (const [key, value] of Object.entries(errors)) {
                                this.errors[key] = value;
                            }
                        }
                    })()

                } else {
                    this.errors = {}
                    for (const [key, value] of Object.entries(errors)) {
                        this.errors[key] = value;
                    }

                }

                e.preventDefault();
            },

        },
    }

</script>
