export default {
    getUserData({commit}) {
        axios.get('/sanctum/csrf-cookie')
            .then(res => {
                commit('setUserData', res.data)
                localStorage.setItem('x_xsrf_token', res.config.headers['X-XSRF-TOKEN'])
            })
    },

    Login({commit}, data) {
        return axios.post('/login', data)
            .then(res => {
                commit("setUserData", res.data);
                commit("x_xsrf_token", res.data.token);
                localStorage.setItem('x_xsrf_token', res.config.headers['X-XSRF-TOKEN'])
                localStorage.setItem('role_id', JSON.stringify(res.data.role_id))
                localStorage.setItem('user_id', JSON.stringify(res.data.id))
                router.push({name: 'country.index'})
            })
    },
}

import router from "../../../router";
