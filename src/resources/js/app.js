import Vue from 'vue'
import store from './store/index'
import App from "./components/App"
import router from "./router"
import ru from 'vee-validate/dist/locale/ru.js';
import VeeValidate, { Validator } from 'vee-validate'
import Paginate from 'vuejs-paginate'

require('./bootstrap')

Vue.use(VeeValidate);

Validator.localize('ru', ru);

Vue.component('v-header', require('./components/layouts/Header.vue').default);
Vue.component('Paginate', Paginate)

const app = new Vue({
    el: '#app',

    components: {
        App,
    },
    router,
    store
});
