<template>
<div>
 <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Blog</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><router-link to="/">Home</router-link></li>
     <li><router-link to="/signup">signup</router-link></li>
    </ul>
  </div>
   <router-view></router-view>
</nav>
    <div class="container">
   
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="container">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-3">
                                </div>
                                <div class="col-sm-5">

                                    <form @submit="checkForm">
                                        <div class="form-group">
                                            <label for="email">Email address:</label>
                                            <input type="email" @keyup="email = $event.target.value"
                                                class="form-control" id="email"><br>
                                            <div v-if="errors.email" class="alert alert-danger">{{ errors.email }}</div>

                                        </div>
                                        <div class="form-group">
                                            <label for="pwd">Password:</label>
                                            <input type="password" class="form-control" id="pwd"
                                                @keyup="password = $event.target.value"><br>
                                            <div v-if="errors.password" class="alert alert-danger">{{ errors.password }}
                                            </div>
                                        </div>
                                        <div class="checkbox">
                                            <label><input type="checkbox"> Remember me</label>
                                        </div>
                                        <button type="submit" class="btn btn-primary btn-block">Login</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

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
        methods: {
            checkForm: function (e) {
                var errors = LoginController.validation(this.password, this.email);
                if (Object.keys(errors).length == 0) {
                    (async () => {
                        let result = await LoginController.login(this.email, this.password);
                        if (result == true) {
                             this.$router.push('home');
                        } else {
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
