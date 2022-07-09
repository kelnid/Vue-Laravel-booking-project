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
    }
}
