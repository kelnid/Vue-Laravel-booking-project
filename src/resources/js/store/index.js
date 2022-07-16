import Vue from 'vue'
import Vuex from 'vuex'
import Country from './modules/country/index'
import Auth from "./modules/auth/index";

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        showErrors: [],
    },
    modules: {
        Country,
        Auth
    }
})
