<template>
    <div>
        <v-header></v-header>
        <div class="pt-5 container w-25">
            <input v-model="name" type="text" placeholder="name" class="form-control mb-3">
            <input v-model="email" type="email" placeholder="email" class="form-control mb-3">
            <input v-model="password" type="password" placeholder="password" class="form-control mb-3">
            <input v-model="password_confirmation" type="password" placeholder="password_confirmation" class="form-control mb-3">
            <input @click.prevent="registration" type="submit" value="registration" class="btn-outline-primary">
        </div>
    </div>
</template>

<script>
export default {
    name: "Registration",

    data() {
        return {
            name: [],
            email: [],
            password: [],
            password_confirmation: [],
        }
    },

    methods: {
        registration() {
            axios.get('/sanctum/csrf-cookie')
                .then(res => {
                    axios.post('/register',
                        {
                            email: this.email,
                            password: this.password,
                            name: this.name,
                            password_confirmation: this.password_confirmation,
                        })
                        .then(res => {
                            localStorage.setItem('x_xsrf_token', res.config.headers['X-XSRF-TOKEN'])
                            this.$router.push({ name: 'country.index' })
                        })
                })
        }
    }
}


</script>

<style scoped>

</style>
