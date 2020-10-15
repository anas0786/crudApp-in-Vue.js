import VueRouter from 'vue-router';
import signup from './view/SignupComponent.vue';
import Login from './view/ExampleComponent.vue';
import Home from './view/HomeComponent.vue';
import Create_Post from './view/Post/create.vue';



const routes = [
    {
        path: '/login',
        component: Login,
        name: 'login',
        meta: {
            guest: true
        }
    }, {
        path: '/signup',
        component: signup,
        name: 'signup',
        meta: {
            guest: true
        }
    }, {
        path: '/home',
        component: Home,
        name: 'home',
        meta: {
            auth: true
        }
    },
    {
        path: '/post-create',
        component: Create_Post,
        name: 'Create_Post',
        meta: {
            auth: true
        }
    },
  ]
  const router = new VueRouter({
    routes 
  })

  router.beforeEach((to, from, next) => {
    if (to.path == '/') {
        if (sessionStorage.getItem('access_token')) {
            return next({
                name: 'home'
            });
        }
        return next({
            name: 'login'
        });
    }

         if (to.meta.guest) {
            if (sessionStorage.getItem('access_token')) {
                return next({
                    path: from.path
                });
            }
    
        } else if (to.meta.auth) {
            if (!sessionStorage.getItem('access_token')) {
                return next({
                    name: 'login'
                });
            }
        }

  

    next();
})

export default router;