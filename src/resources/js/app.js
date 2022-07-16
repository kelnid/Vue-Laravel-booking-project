import Vue from 'vue'
import store from './store/index'
import App from "./components/App"
import router from "./router"
import VeeValidate from 'vee-validate'

require('./bootstrap')

Vue.use(VeeValidate);

Vue.component('v-header', require('./components/layouts/Header.vue').default);

const app = new Vue({
    el: '#app',

    components: {
        App,
    },
    router,
    store
});
