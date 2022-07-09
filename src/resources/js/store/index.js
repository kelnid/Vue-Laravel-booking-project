import Vue from 'vue'
import Vuex from 'vuex'
import Country from './modules/country/index'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Country
    }
})
