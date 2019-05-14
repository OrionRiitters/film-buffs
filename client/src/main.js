import Vue from 'vue';
import App from './App.vue';

import apiService from "@/services/apiService";

Vue.config.productionTip = false;

Vue.prototype.$api_service = apiService;

new Vue({
    render: h => h(App),
}).$mount('#app');
