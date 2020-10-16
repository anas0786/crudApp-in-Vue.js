<template>
    <div>
        <navbar></navbar>

        <div id="wrapper">

            <sidebar></sidebar>

            <div class="container">

                <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-8">
                        <h1 class="mt-4">{{ result.title}}</h1>

                        <!-- Author -->
                        <p class="lead">
                            by
                            <span style="color:green">{{ result.auther}}</span>
                        </p>
                        <hr>
                        <p>Posted on {{ result.date}}</p>
                        <hr>
                        <p>{{ result.description }}</p>
                        <p v-if="result.user_id == user_id">
                            <router-link :to="{ name: 'edit_post'}" class="btn btn-info">Edit</router-link>
                            <button type="button" class="btn btn-danger" v-on:click="deletePost()">Delete</button>
                        </p>


                    </div>
                </div>
            </div>

        </div>
    </div>
    </div>
</template>

<script>
    import navbar from '../../components/navbar.vue';
    import sidebar from '../../components/sidebar.vue';


    export default {

        data() {
            return {
                post_id: this.$route.params.id,
                result: '',
                user_id: sessionStorage.getItem("user_id")
            }
        },
        created() {
            this.getResults();
        },
        methods: {
            getResults() {
                axios.get('api/postview/' + this.post_id, {
                        headers: {
                            'Authorization': `Bearer ${sessionStorage.getItem("access_token")}`
                        },
                    })
                    .then((response) => {
                        this.result = response.data

                    }).catch(error => console.log(error))

            },

            deletePost() {
                 if(confirm('are you sure?'))
                axios.get('api/delete/' + this.post_id, {
                        headers: {
                            'Authorization': `Bearer ${sessionStorage.getItem("access_token")}`
                        },
                    })
                    .then((response) => {
                        if (response.data.message == "successfully data delete") {
                            this.$router.push({
                                name: 'home',
                                params: { status:'successfully data delete' }
                            });
                        } else {
                            errors.title = "somthing is wrong";
                            this.$router.push({
                                name: 'home'
                            });
                        }

                    }).catch(error => console.log(error))

            }

        },

        components: {
            navbar,
            sidebar,
        }
    }

</script>
