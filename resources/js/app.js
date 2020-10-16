/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import VueRouter from 'vue-router';
import router from './router.js';

window.Vue = require('vue');

Vue.use(require('vue-resource'));
Vue.use(require('vue-moment'));
Vue.use(VueRouter);


Vue.component('example-component', require('./view/ExampleComponent.vue').default);
Vue.component('pagination', require('laravel-vue-pagination'));



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
                    }
                    if(error.response.data.message=="token not found" &&error.response.status==401 ||
                     error.response.data.message=="token invalid")
                    {
                      this.$router.push({ name: 'login',});
                    }
                  return Promise.reject(error.response);
                }
             
         });
      }
  });
  
