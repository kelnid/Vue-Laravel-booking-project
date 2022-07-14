<template>
    <div>
        <v-header></v-header>
        <form @submit.prevent="sendCredentials" class="container pt-5 w-25">
            <input v-model="details.email" type="email" placeholder="email" class="form-control mb-3">
            <input v-model="details.password" type="password" placeholder="password" class="form-control mb-3">
            <button type="submit" class="btn-outline-primary mb-3">Войти</button>
        </form>
    </div>
</template>

<script>

import {mapActions, mapGetters, mapMutations} from 'vuex';

export default {
    name: "Login",

    data() {
        return {
            details: {
                email: null,
                password: null
            }
        }
    },
    computed: {
        ...mapGetters("Auth", ["user", "x_xsrf_token"]),
    },
    methods: {
        ...mapActions("Auth", ["Login", "getUserData"]),

        async sendCredentials() {
            await this.Login(this.details);
        },
    }
}
</script>

<style scoped>

</style>
