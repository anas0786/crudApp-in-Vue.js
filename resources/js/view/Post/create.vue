<template>
    <div>
        <navbar></navbar>
        <div id="wrapper">
            <sidebar></sidebar>
            <div class="row">
                <div class="col-md-3">
                </div>
                <div class="col-md-9">

                    <div class="box box-primary">
                        <div class="box-header with-border" style="margin-top:20px">
                            <h3 class="box-title">Create post</h3>
                        </div>

                        <div class="card">

                            <div class="card-body">
                                <form role="form" v-on:submit.prevent="onSubmit">

                                    <div class="box-body">
                                        <div class="row">
                                            <div class="col-md-12 col-sm-12">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Title</label>
                                                    <input type="text" class="form-control" id=""
                                                        placeholder="Enter title" name="title"
                                                        @keyup="title = $event.target.value"><br>
                                                    <div v-if="errors.title" class="alert alert-danger">
                                                        {{ errors.title }}</div>
                                                </div>
                                            </div>

                                            <div class="col-md-12 col-sm-12">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Description</label>
                                                    <textarea class="form-control" name="description"
                                                        @keyup="description = $event.target.value"></textarea><br>
                                                    <div v-if="errors.description" class="alert alert-danger">
                                                        {{ errors.description }}</div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="box-footer">
                                        <button class="btn btn-primary btn-block">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
    </div>

    </section>
    </div>

    </div>
</template>


<script>
    import navbar from '../../components/navbar.vue';
    import sidebar from '../../components/sidebar.vue';
    import Post from '../../Controllers/PostContainer.js';

    export default {

        data() {
            return {
                errors: {
                    title: '',
                    description: '',
                    
                },
                title: '',
                description: '',
            };
        },
        methods: {
            onSubmit() {
                var errors = Post.validation(this.description, this.title);
                if (Object.keys(errors).length == 0) {
                    (async () => {
                        let result = await Post.store(this.description, this.title);
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


            },

        },
    

    components: {
        navbar,
        sidebar,
    }
    }

</script>
