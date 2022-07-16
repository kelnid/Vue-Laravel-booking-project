export default {
    getCountries({commit}) {
        axios.get('/api/countries')
            .then(res => {
                commit('setCountries', res.data)
            })
    },
}
import router from "../../../router";
