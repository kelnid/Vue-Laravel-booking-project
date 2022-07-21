import {axiosInstance} from "../../../service/api";
import router from "../../../router";

export default {
    getUserData({ commit }, token=null) {
        if(!token) {
            axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
        axiosInstance.get("user")
            .then(response => {
                commit("setUserData", response.data);
            })
            .catch(() => {
                localStorage.removeItem("authToken");
                commit("setApiToken", null);
            });
    },
    Login({ commit }, data) {
        return axiosInstance.post('login', data)
            .then(response => {
                commit("setUserData", response.data.user);
                localStorage.setItem("authToken", response.data.token);
                localStorage.setItem("role_id", response.data.user.role_id);
                localStorage.setItem("user_id", response.data.user.id);
                commit("setApiToken", response.data.token);
                router.push({name: 'country.index'})
            })
    },
    Register({ commit }, data) {
        return axiosInstance.post("register", data)
            .then(response => {
                commit("setUserData", response.data.user);
                localStorage.setItem("authToken", response.data.token);
                localStorage.setItem("role_id", response.data.user.role_id);
                localStorage.setItem("user_id", response.data.user.id);
                commit("setApiToken", response.data.token);
                router.push({name: 'country.index'})
            })
    },
    Logout({ commit }) {
        return axiosInstance.post("logout").then(() => {
            commit("setUserData", null);
            localStorage.removeItem("authToken");
            localStorage.removeItem("role_id");
            localStorage.removeItem("user_id");
            router.push({name:'user.login'})
        });
    },
}
