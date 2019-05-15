import Vue from 'vue';
import App from './App.vue';

import VueRouter from 'vue-router';
import router from './router';

import apiService from "@/services/apiService";

Vue.use(VueRouter);
Vue.config.productionTip = false;
Vue.prototype.$api_service = apiService;

new Vue({
    render: h => h(App),
    router
}).$mount('#app');
