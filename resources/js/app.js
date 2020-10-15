/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import VueRouter from 'vue-router';
import router from './router.js';






window.Vue = require('vue');

Vue.use(VueRouter);


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

 Vue.component('example-component', require('./view/ExampleComponent.vue').default);



  const app = new Vue({
    el: '#app',
    router,
    mounted(){
        axios.interceptors.response.use(
        
            response => {
                if (response.status === 200 || response.status === 201) {
                  return Promise.resolve(response);
                } else {
                  return Promise.reject(response);
                }
              },
            error => {
                if (error.response.status) {
                  console.log(error.response.data.message)
                    if(error.response.data.message=="token expired" &&error.response.status==401)
                    {
                      sessionStorage.setItem("access_token",error.response.data.token);

                        console.log(error.response.data.token)
                        // router.replace({
                        //     path: "/login",
                        //   });
                    }
                  return Promise.reject(error.response);
                }
             
         });
      }
  });
  
