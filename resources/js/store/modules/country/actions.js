import {axiosInstance} from "../../../service/api";

export default {
    getCountries({commit}) {
        axiosInstance.get('countries')
            .then(res => {
                commit('setCountries', res.data)
            })
    },
}

