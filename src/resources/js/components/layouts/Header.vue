<template>
    <div>
        <div class="bg-dark collapse" id="navbarHeader" style="">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 col-md-7 py-4">
                        <h4 class="text-white">About</h4>
                        <p class="text-muted">Add some information about the album below, the author, or any other
                            background context. Make it a few sentences long so folks can pick up some informative
                            tidbits. Then, link them off to some social networking sites or contact information.</p>
                    </div>
                    <div class="col-sm-4 offset-md-1 py-4">
                        <h4 class="text-white">Contact</h4>
                        <ul class="list-unstyled">
                            <router-link v-if="!token" class="navbar-brand" :to="{ name: 'user.login' }">Войти</router-link>
                            <router-link v-if="!token" class="navbar-brand" :to="{ name: 'user.registration' }">Регистрация</router-link>
                            <a  v-if="token" @click.prevent="logout" href="#" class="navbar-brand">Выйти</a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="navbar navbar-dark bg-dark shadow-sm">
            <div class="container">
                <router-link :to="{ name: 'country.index' }" class="navbar-brand d-flex align-items-center"><strong>Travelmore.com</strong></router-link>
                <template v-if="role_id === 1 || role_id === 2">
                    <router-link :to="{ name: 'booking.index' }" class="navbar-brand d-flex align-items-center"><strong>Мои бронирования</strong></router-link>
                </template>
                <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Layout",
    data() {
        return {
            token: [],
            role_id: null
        }
    },
    updated() {
        this.getToken()
    },
    mounted() {
        this.getToken()
        this.getUser()
    },
    methods: {
        getToken() {
            this.token = localStorage.getItem('x_xsrf_token')
        },
        getUser() {
            this.role_id = JSON.parse(localStorage.getItem('role_id'))
        },
        logout() {
            axios.post('/api/logout')
                .then( res => {
                    localStorage.removeItem('x_xsrf_token')
                    localStorage.removeItem('role_id')
                    localStorage.removeItem('user_id')
                    this.$router.push({ name: 'user.login' })
                })
        },

    }
}
</script>

<style scoped>

</style>
