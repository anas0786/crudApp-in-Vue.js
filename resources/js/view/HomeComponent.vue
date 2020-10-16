<template>
    <div>
        <navbar></navbar>

        <div id="wrapper">

            <sidebar></sidebar>

            <div class="container">

                <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-8">

                        <h1 class="my-4">

                            <small v-if="status">
                                <div class="alert alert-success" style="font-size:15px" role="alert">
                                     {{ status }}
                                </div>
                            </small>
                        </h1>

                        <!-- Blog Post -->
                        <div class="card mb-4" v-for="post in data.data" :key="post.id">
                            <div class="card-body">
                                <h3 class="card-title">{{post.title}}</h3>
                                <p class="card-text">{{ post.description.substr(0,200)}}</p>
                                <router-link :to="{ name: 'post', params: { id: post.id }}" class="btn btn-primary">
                                    Read More &rarr;</router-link>

                            </div>
                            <div class="card-footer text-muted">
                                Posted on   {{ post.created_at | moment("dddd, MMMM Do YYYY") }} by
                                <a href="">{{ post.user.name}}</a>
                            </div>
                        </div>
                        <pagination :data="data" @pagination-change-page="getResults"></pagination>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    import navbar from '../components/navbar.vue';
    import sidebar from '../components/sidebar.vue';
    


    export default {
        props: ["status"],

        data() {
            return {
                data: {},
            }
        },
        created() {
            this.getResults();
        },
        methods: {
            view() {
                this.$router.push({
                    path: 'post',
                    query: {
                        id: 2
                    }
                })

            },
            getResults(page) {
                if (typeof page === 'undefined') {
                    page = 1;
                }

                this.$http.get('/api/posts?page=' + page, {
                        headers: {
                            'Authorization': `Bearer ${sessionStorage.getItem("access_token")}`
                        },
                    })
                    .then(response => {
                        return response.json();
                    }).then(data => {
                        this.data = data;
                    });
            }
        },
        components: {
            navbar,
            sidebar,
        }
    }

</script>
