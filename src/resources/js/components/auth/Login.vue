<template>
    <div>
        <v-header></v-header>
        <div class="container pt-5 w-25">
            <input v-model="email" type="email" placeholder="email" class="form-control mb-3">
            <input v-model="password" type="password" placeholder="password" class="form-control mb-3">
            <input @click.prevent="login" type="submit" value="Login" class="btn-outline-primary mb-3">
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",

    data() {
        return {
            email: [],
            password: []
        }
    },

    methods: {
        login() {
            axios.get('/sanctum/csrf-cookie')
                .then(res => {
                    axios.post('/login', {email: this.email, password: this.password,})
                        .then(res => {
                            localStorage.setItem('x_xsrf_token', res.config.headers['X-XSRF-TOKEN'])
                            this.$router.push({name: 'country.index'})
                        })
                        .catch(err => {

                        })
                })
        }
    }
}
</script>

<style scoped>

</style>
