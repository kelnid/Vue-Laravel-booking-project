import Vue from 'vue'
import store from './store'
import App from "./components/App"
import router from "./router"

require('./bootstrap')

Vue.component('v-header', require('./components/layouts/Header.vue').default);

const app = new Vue({
    el: '#app',

    components: {
        App,
    },

    router,
    store

});
