export default {
    getCountries({commit}) {
        axios.get('/api/countries')
            .then(res => {
                commit('setCountries', res.data)
            })
    },
    deleteCountry({dispatch},id) {
        axios.delete(`/api/countries/${id}`)
            .then(res => {
                dispatch('getCountries')
            })
    },
    store({}, data) {
        axios.post('/api/countries', { name: data.name })
            .then(res => {
                router.push({ name: 'country.index' })
            })
    },
}
import router from "../../../router";
